import ConferenceCard from "@/components/ui/ConferenceCard";

const ConferencesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Conferences
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our upcoming international conferences and showcase your
            research to a global audience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ConferenceCard />
        </div>
      </div>
    </div>
  );
};

export default ConferencesPage;
