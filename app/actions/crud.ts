"use server";

import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

// Helper to check authentication
async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}

// Helper to read and write constants files
async function readConstantsFile(filename: string) {
  const filePath = path.join(process.cwd(), "constants", filename);
  const content = await fs.readFile(filePath, "utf-8");
  return content;
}

async function writeConstantsFile(filename: string, content: string) {
  const filePath = path.join(process.cwd(), "constants", filename);
  await fs.writeFile(filePath, content, "utf-8");
}

// JOURNALS CRUD
export async function addJournal(formData: FormData) {
  await requireAuth();

  const journal = {
    id: Date.now(),
    title: formData.get("title") as string,
    issn: formData.get("issn") as string,
    issuesPerYear: formData.get("issuesPerYear") as string,
    doi: formData.get("doi") as string,
    indexing: formData.get("indexing") as string,
    description: formData.get("description") as string,
    image: formData.get("image") as string,
  };

  const content = await readConstantsFile("JournalsConstants.tsx");
  const arrayMatch = content.match(/const JournalsConstants = \[([\s\S]*?)\];/);

  if (!arrayMatch) throw new Error("Invalid file format");

  const existingData = arrayMatch[1].trim();
  const newEntry = `
  {
    id: ${journal.id},
    title: "${journal.title}",
    issn: "${journal.issn}",
    issuesPerYear: "${journal.issuesPerYear}",
    doi: "${journal.doi}",
    indexing: "${journal.indexing}",
    description: "${journal.description}",
    image: "${journal.image}",
  },`;

  const newContent = content.replace(
    /const JournalsConstants = \[([\s\S]*?)\];/,
    `const JournalsConstants = [${existingData}${newEntry}\n];`
  );

  await writeConstantsFile("JournalsConstants.tsx", newContent);
  revalidatePath("/acadamic-journals");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");

  return { success: true };
}

export async function updateJournal(id: number, formData: FormData) {
  await requireAuth();

  const updatedJournal = {
    id,
    title: formData.get("title") as string,
    issn: formData.get("issn") as string,
    issuesPerYear: formData.get("issuesPerYear") as string,
    doi: formData.get("doi") as string,
    indexing: formData.get("indexing") as string,
    description: formData.get("description") as string,
    image: formData.get("image") as string,
  };

  const content = await readConstantsFile("JournalsConstants.tsx");

  // Find and replace the specific journal entry
  const lines = content.split('\n');
  let inTargetObject = false;
  let braceCount = 0;
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes(`id: ${id},`) || line.includes(`id: ${id}`)) {
      inTargetObject = true;
      // Find the opening brace before this line
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].trim().startsWith('{')) {
          startIndex = j;
          break;
        }
      }
    }

    if (inTargetObject) {
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;

      if (braceCount === 0 && line.includes('}')) {
        endIndex = i;
        break;
      }
    }
  }

  if (startIndex !== -1 && endIndex !== -1) {
    const newEntry = `  {
    id: ${updatedJournal.id},
    title: "${updatedJournal.title.replace(/"/g, '\\"')}",
    issn: "${updatedJournal.issn}",
    issuesPerYear: "${updatedJournal.issuesPerYear}",
    doi: "${updatedJournal.doi}",
    indexing: "${updatedJournal.indexing}",
    description: "${updatedJournal.description.replace(/"/g, '\\"')}",
    image: "${updatedJournal.image}",
  }`;

    lines.splice(startIndex, endIndex - startIndex + 1, newEntry);
    const newContent = lines.join('\n');
    await writeConstantsFile("JournalsConstants.tsx", newContent);
  }

  revalidatePath("/acadamic-journals");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
  return { success: true };
}

export async function deleteJournal(id: number) {
  await requireAuth();

  const content = await readConstantsFile("JournalsConstants.tsx");
  const journalRegex = new RegExp(
    `\\s*{[^}]*id:\\s*${id}[^}]*},?`,
    "s"
  );

  const newContent = content.replace(journalRegex, "");
  await writeConstantsFile("JournalsConstants.tsx", newContent);
  revalidatePath("/acadamic-journals");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");

  return { success: true };
}

// BOOKS CRUD
export async function addBook(formData: FormData) {
  await requireAuth();

  const categories = (formData.get("categories") as string).split(",").map(c => c.trim());
  const authors = (formData.get("authors") as string).split(",").map(a => a.trim());

  const book = {
    id: Date.now(),
    categories,
    title: formData.get("title") as string,
    authors,
    description: formData.get("description") as string,
    image: formData.get("image") as string,
  };

  const content = await readConstantsFile("BooksConstants.tsx");
  const arrayMatch = content.match(/const BooksConstants = \[([\s\S]*?)\];/);

  if (!arrayMatch) throw new Error("Invalid file format");

  const existingData = arrayMatch[1].trim();
  const newEntry = `
  {
    id: ${book.id},
    categories: ${JSON.stringify(book.categories)},
    title: "${book.title}",
    authors: ${JSON.stringify(book.authors)},
    description: "${book.description}",
    image: "${book.image}",
  },`;

  const newContent = content.replace(
    /const BooksConstants = \[([\s\S]*?)\];/,
    `const BooksConstants = [${existingData}${newEntry}\n];`
  );

  await writeConstantsFile("BooksConstants.tsx", newContent);
  revalidatePath("/books");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");

  return { success: true };
}

export async function updateBook(id: number, formData: FormData) {
  await requireAuth();

  const categories = (formData.get("categories") as string).split(",").map(c => c.trim());
  const authors = (formData.get("authors") as string).split(",").map(a => a.trim());

  const updatedBook = {
    id,
    categories,
    title: formData.get("title") as string,
    authors,
    description: formData.get("description") as string,
    image: formData.get("image") as string,
  };

  const content = await readConstantsFile("BooksConstants.tsx");

  // Find and replace the specific book entry
  const lines = content.split('\n');
  let inTargetObject = false;
  let braceCount = 0;
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes(`id: ${id},`) || line.includes(`id: ${id}`)) {
      inTargetObject = true;
      // Find the opening brace before this line
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].trim().startsWith('{')) {
          startIndex = j;
          break;
        }
      }
    }

    if (inTargetObject) {
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;

      if (braceCount === 0 && line.includes('}')) {
        endIndex = i;
        break;
      }
    }
  }

  if (startIndex !== -1 && endIndex !== -1) {
    const newEntry = `  {
    id: ${updatedBook.id},
    categories: ${JSON.stringify(updatedBook.categories)},
    title: "${updatedBook.title.replace(/"/g, '\\"')}",
    authors: ${JSON.stringify(updatedBook.authors)},
    description: "${updatedBook.description.replace(/"/g, '\\"')}",
    image: "${updatedBook.image}",
  }`;

    lines.splice(startIndex, endIndex - startIndex + 1, newEntry);
    const newContent = lines.join('\n');
    await writeConstantsFile("BooksConstants.tsx", newContent);
  }

  revalidatePath("/books");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
  return { success: true };
}

export async function deleteBook(id: number) {
  await requireAuth();

  const content = await readConstantsFile("BooksConstants.tsx");
  const bookRegex = new RegExp(
    `\\s*{[^}]*id:\\s*${id}[^}]*},?`,
    "s"
  );

  const newContent = content.replace(bookRegex, "");
  await writeConstantsFile("BooksConstants.tsx", newContent);
  revalidatePath("/books");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");

  return { success: true };
}

// NEWS CRUD
export async function addNews(formData: FormData) {
  await requireAuth();

  const title = formData.get("title") as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const news = {
    id: Date.now(),
    title,
    date: formData.get("date") as string,
    slug,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
  };

  const content = await readConstantsFile("NewsConstants.tsx");
  const arrayMatch = content.match(/const NewsConstants: NewsItem\[\] = \[([\s\S]*?)\];/);

  if (!arrayMatch) throw new Error("Invalid file format");

  const existingData = arrayMatch[1].trim();
  const newEntry = `
  {
    id: ${news.id},
    title: "${news.title.replace(/"/g, '\\"')}",
    date: "${news.date}",
    slug: "${news.slug}",
    excerpt: "${news.excerpt.replace(/"/g, '\\"')}",
    content: \`${news.content.replace(/`/g, '\\`')}\`
  },`;

  const newContent = content.replace(
    /const NewsConstants: NewsItem\[\] = \[([\s\S]*?)\];/,
    `const NewsConstants: NewsItem[] = [${existingData}${newEntry}\n];`
  );

  await writeConstantsFile("NewsConstants.tsx", newContent);
  revalidatePath("/news-announcements");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");

  return { success: true, slug };
}

export async function updateNews(id: number, formData: FormData) {
  await requireAuth();

  const title = formData.get("title") as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const updatedNews = {
    id,
    title,
    date: formData.get("date") as string,
    slug,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
  };

  const content = await readConstantsFile("NewsConstants.tsx");

  // Find and replace the specific news entry
  const lines = content.split('\n');
  let inTargetObject = false;
  let braceCount = 0;
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if line contains the ID. Note: ID is a number, so we look for `id: 123`
    if (line.includes(`id: ${id},`) || line.includes(`id: ${id}`)) {
      inTargetObject = true;
      // Find the opening brace before this line
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].trim().startsWith('{')) {
          startIndex = j;
          break;
        }
      }
    }

    if (inTargetObject) {
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;

      if (braceCount === 0 && line.includes('}')) {
        endIndex = i;
        break;
      }
    }
  }

  if (startIndex !== -1 && endIndex !== -1) {
    const newEntry = `  {
    id: ${updatedNews.id},
    title: "${updatedNews.title.replace(/"/g, '\\"')}",
    date: "${updatedNews.date}",
    slug: "${updatedNews.slug}",
    excerpt: "${updatedNews.excerpt.replace(/"/g, '\\"')}",
    content: \`${updatedNews.content.replace(/`/g, '\\`')}\`
  }`;

    lines.splice(startIndex, endIndex - startIndex + 1, newEntry);
    const newContent = lines.join('\n');
    await writeConstantsFile("NewsConstants.tsx", newContent);
  }

  revalidatePath("/news-announcements");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
  return { success: true, slug };
}

export async function deleteNews(id: number) {
  await requireAuth();

  const content = await readConstantsFile("NewsConstants.tsx");
  const newsRegex = new RegExp(
    `\\s*{[^}]*id:\\s*${id}[^}]*},?`,
    "s"
  );

  const newContent = content.replace(newsRegex, "");
  await writeConstantsFile("NewsConstants.tsx", newContent);
  revalidatePath("/news-announcements");
  revalidatePath("/");
  revalidatePath("/admin/dashboard");

  return { success: true };
}
