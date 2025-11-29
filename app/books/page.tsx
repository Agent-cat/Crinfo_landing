import BooksConstants from "@/constants/BooksConstants";
import Image from "next/image";
import Link from "next/link";

const BooksPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Books</h1>

        <div className="space-y-8">
          {BooksConstants.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="block bg-white border-l-4 border-blue-600 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 group"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Book Cover Image */}
                  <div className="shrink-0">
                    <div className="w-full md:w-48 h-64 bg-gradient-to-br from-blue-600/20 to-gray-100 rounded-lg flex items-center justify-center border border-gray-300 overflow-hidden">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={200}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="flex-1 space-y-4">
                    {/* Categories */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider">
                      {book.categories.map((category, index) => (
                        <span key={index}>
                          <span className="text-gray-600">{category}</span>
                          {index < book.categories.length - 1 && (
                            <span className="text-gray-400 mx-2">•</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                      {book.title}
                    </h2>

                    {/* Authors */}
                    <div className="flex flex-wrap items-center gap-2 text-base">
                      {book.authors.map((author, index) => (
                        <span key={index}>
                          <span className="text-gray-700">{author}</span>
                          {index < book.authors.length - 1 && (
                            <span className="text-gray-400 mx-2">•</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
