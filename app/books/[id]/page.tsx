import Link from "next/link";
import { notFound } from "next/navigation";
import BooksConstants from "@/constants/BooksConstants";
import { ArrowLeft, Download, Mail } from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return BooksConstants.map((book) => ({
    id: book.id.toString(),
  }));
}

const BookDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const book = BooksConstants.find((b) => b.id.toString() === id);

  if (!book) {
    notFound();
  }

  // Email template
  const emailSubject = encodeURIComponent(`Request for Book: ${book.title}`);
  const emailBody = encodeURIComponent(`Dear Crinfo Global Team,

I am writing to request access to the following book:

Title: ${book.title}
Authors: ${book.authors.join(", ")}
Categories: ${book.categories.join(", ")}

I am interested in this publication for my research/academic purposes. Could you please provide information on how I can access or purchase this book?

Thank you for your assistance.

Best regards,
[Your Name]
[Your Institution/Organization]
[Your Email]`);

  const mailtoLink = `mailto:admin@crinfoglobal.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="min-h-screen bg-white text-black text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Books</span>
        </Link>

        {/* Book Detail */}
        <div className="bg-white border border-blue-200 rounded-lg overflow-hidden shadow-lg">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Book Cover */}
              <div className="md:col-span-1">
                <div className="sticky top-8">
                  <div className="relative w-full aspect-3/4 bg-linear-to-br from-blue-600/20 to-blue-50 rounded-lg overflow-hidden border border-blue-200">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Download Button */}
                  <a
                    href={mailtoLink}
                    className="mt-6 w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group"
                  >
                    <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                    <span>Request Download</span>
                  </a>

                  <p className="mt-3 text-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Opens email to request access
                  </p>
                </div>
              </div>

              {/* Book Information */}
              <div className="md:col-span-2 space-y-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {book.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  {book.title}
                </h1>

                {/* Authors */}
                <div className="border-l-4 border-blue-600 pl-4">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Authors
                  </h2>
                  <div className="space-y-1">
                    {book.authors.map((author, index) => (
                      <p key={index} className="text-xl text-black">
                        {author}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="pt-6 border-t border-blue-200">
                  <h2 className="text-2xl font-bold text-black mb-4">
                    About This Book
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {book.description}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-blue-200">
                  <h2 className="text-2xl font-bold text-black mb-4">
                    How to Access
                  </h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      To request access to this book, please click the "Request
                      Download" button above. This will open your email client
                      with a pre-filled message to our team.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Fill in your details in the email template</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Send the request to our team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>
                          We will respond with access information within 24-48
                          hours
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-black mb-8">More Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BooksConstants.filter((b) => b.id !== book.id)
              .slice(0, 3)
              .map((relatedBook) => (
                <Link
                  key={relatedBook.id}
                  href={`/books/${relatedBook.id}`}
                  className="bg-white border border-blue-200 rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative w-full aspect-3/4 bg-linear-to-br from-blue-600/20 to-blue-50">
                    <Image
                      src={relatedBook.image}
                      alt={relatedBook.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedBook.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {relatedBook.authors.join(", ")}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
