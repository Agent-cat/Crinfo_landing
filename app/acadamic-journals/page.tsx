import JournalsConstants from "@/constants/JournalsConstants";
import Image from "next/image";
import Link from "next/link";

const AcademicJournalsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Journals</h1>

        <div className="space-y-8">
          {JournalsConstants.map((journal) => (
            <div
              key={journal.id}
              className="bg-white border-l-4 border-blue-600 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 group"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Journal Image */}
                  <div className="shrink-0">
                    <div className="w-full md:w-48 h-64 bg-gradient-to-br from-blue-600/20 to-gray-100 rounded-lg flex items-center justify-center border border-gray-300">
                      <Image
                        src={journal.image}
                        alt={journal.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Journal Details */}
                  <div className="flex-1 space-y-4">
                    {/* Title and Link */}
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                        {journal.title}
                      </h2>
                      <Link
                        href={journal.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-black hover:text-blue-600 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-gray-600">{journal.issn}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">
                        {journal.issuesPerYear}
                      </span>
                      <span className="text-gray-400">•</span>
                      <Link
                        href={journal.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:underline"
                      >
                        {journal.doi}
                      </Link>
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {journal.indexing}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {journal.description}
                    </p>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href={journal.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 group/btn"
                      >
                        <span>Visit Journal</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicJournalsPage;
