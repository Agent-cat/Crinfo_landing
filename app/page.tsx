import Carousel from "@/components/ui/Carousel";
import ConferenceCard from "@/components/ui/ConferenceCard";
import NewsConstants from "@/constants/NewsConstants";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const HomePage = () => {
  // Get latest 4 news
  const latestNews = NewsConstants.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-justify">
      <Carousel />


      {/* Conference Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Featured Conference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our upcoming international conferences and showcase your
              research
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ConferenceCard />
          </div>
        </div>
      </section>

      {/* Latest News & Announcements Section */}
      <section className="w-full bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Latest News & Announcements
              </h2>
              <p className="text-gray-600">
                Stay updated with our recent activities
              </p>
            </div>
            <Link
              href="/news-announcements"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors group"
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
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-blue-600 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-600">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-2 mb-3 text-justify">
                  {news.title}
                </h3>
                <p className="text-gray-700 line-clamp-2 text-justify">{news.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
