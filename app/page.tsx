import Carousel from "@/components/ui/Carousel";
import BooksConstants from "@/constants/BooksConstants";
import NewsConstants from "@/constants/NewsConstants";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const HomePage = () => {
  // Get latest 3 books and news
  const latestBooks = BooksConstants.slice(0, 3);
  const latestNews = NewsConstants.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col items-center bg-black">
      <Carousel />

      {/* Latest Books Section */}
      <section className="w-full bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-2">
                Featured Books
              </h2>
              <p className="text-amber-50/60">
                Explore our latest academic publications
              </p>
            </div>
            <Link
              href="/books"
              className="flex items-center gap-2 text-amber-50 hover:text-[#800020] transition-colors group"
            >
              <span className="font-semibold">View All</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBooks.map((book) => (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className="bg-amber-50/5 border border-amber-50/10 rounded-lg overflow-hidden hover:border-[#800020] hover:shadow-lg hover:shadow-[#800020]/20 transition-all duration-300 group"
              >
                <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[#800020]/20 to-amber-50/10">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {book.categories.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#800020] text-amber-50 text-xs font-semibold rounded uppercase"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-amber-50 group-hover:text-[#800020] transition-colors line-clamp-2 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-amber-50/60 line-clamp-1">
                    {book.authors.join(", ")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Announcements Section */}
      <section className="w-full bg-black py-16 border-t border-amber-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-2">
                Latest News & Announcements
              </h2>
              <p className="text-amber-50/60">
                Stay updated with our recent activities
              </p>
            </div>
            <Link
              href="/news-announcements"
              className="flex items-center gap-2 text-amber-50 hover:text-[#800020] transition-colors group"
            >
              <span className="font-semibold">View All</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                href={`/news-announcements/${news.slug}`}
                className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 hover:bg-amber-50/10 hover:border-[#800020] transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#800020] flex-shrink-0 mt-1" />
                  <span className="text-sm text-amber-50/60">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-amber-50 group-hover:text-[#800020] transition-colors line-clamp-2 mb-3">
                  {news.title}
                </h3>
                <p className="text-amber-50/70 line-clamp-2">
                  {news.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
