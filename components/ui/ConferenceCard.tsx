import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ConferenceCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Logo Section */}
        <div className="shrink-0">
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="/conferences/aicseb_2026.png"
              alt="AICSEB 2026 logo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
            ICSEB 2026 - 1st IEEE International Conference on Intelligent
            Computing, Smart Electronics and Bioinformatics - 2026
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            Advanced Innovations in Intelligent Computing, Smart Electronics and
            Bioinformatics. Join us at K L Deemed to be University, Vijayawada
            on November 27-28, 2026 for this interdisciplinary forum bringing
            together academicians, researchers, and industry professionals.
          </p>

          <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
              AI & ML
            </span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
              Smart Electronics
            </span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
              Bioinformatics
            </span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
              IEEE Xplore
            </span>
          </div>

          <Link
            href="https://icseb.crinfoglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCard;
