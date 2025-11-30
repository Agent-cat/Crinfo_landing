import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ConferenceCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Logo Section */}
        <div className="shrink-0">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                AICSEB
              </div>
              <div className="text-xs text-gray-600">2026</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
            AICSEB 2026 - 1st IEEE International Conference
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
            href="https://aicseb.crinfoglobal.com/"
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
