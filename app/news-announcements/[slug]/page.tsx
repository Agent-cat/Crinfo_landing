import Link from "next/link";
import { notFound } from "next/navigation";
import NewsConstants from "@/constants/NewsConstants";
import { ArrowLeft, Calendar } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return NewsConstants.map((news) => ({
    slug: news.slug,
  }));
}

const NewsDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const newsItem = NewsConstants.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black text-justify">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/news-announcements"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to News & Announcements</span>
        </Link>

        {/* Article Header */}
        <article className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <Calendar className="w-4 h-4" />
            <time className="text-sm">{newsItem.date}</time>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
            {newsItem.title}
          </h1>

          {/* Content */}
          <div
            className="prose prose-gray max-w-none
              prose-headings:text-black prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-700 prose-ul:my-4
              prose-li:mb-2
              prose-strong:text-black prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </article>

        {/* Navigation to Previous/Next */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
          {(() => {
            const currentIndex = NewsConstants.findIndex(
              (news) => news.slug === slug
            );
            const prevNews =
              currentIndex < NewsConstants.length - 1
                ? NewsConstants[currentIndex + 1]
                : null;
            const nextNews =
              currentIndex > 0 ? NewsConstants[currentIndex - 1] : null;

            return (
              <>
                {prevNews && (
                  <Link
                    href={`/news-announcements/${prevNews.slug}`}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-blue-600 transition-all duration-300 group"
                  >
                    <div className="text-sm text-gray-500 mb-2">← Previous</div>
                    <div className="text-black group-hover:text-blue-600 transition-colors">
                      {prevNews.title}
                    </div>
                  </Link>
                )}
                {nextNews && (
                  <Link
                    href={`/news-announcements/${nextNews.slug}`}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-blue-600 transition-all duration-300 group text-right"
                  >
                    <div className="text-sm text-gray-500 mb-2">Next →</div>
                    <div className="text-black group-hover:text-blue-600 transition-colors">
                      {nextNews.title}
                    </div>
                  </Link>
                )}
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
