"use client";

import { useState } from "react";
import Link from "next/link";
import NewsConstants from "@/constants/NewsConstants";

const ITEMS_PER_PAGE = 15;

const NewsAnnouncementsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(NewsConstants.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = NewsConstants.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          News & Announcements
        </h1>

        <div className="space-y-4">
          {currentNews.map((news) => (
            <Link
              key={news.id}
              href={`/news-announcements/${news.slug}`}
              className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-blue-600 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-lg md:text-xl text-black group-hover:text-blue-600 transition-colors duration-300 flex-1">
                  {news.title}
                </h2>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {news.date}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            {currentPage > 1 && (
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 text-black rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
              >
                Previous
              </button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 rounded transition-all ${
                      currentPage === page
                        ? "bg-blue-600 text-white border border-blue-600"
                        : "bg-gray-50 border border-gray-200 text-black hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <span key={page} className="text-gray-500">
                    ...
                  </span>
                );
              }
              return null;
            })}

            {currentPage < totalPages && (
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 text-black rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAnnouncementsPage;
