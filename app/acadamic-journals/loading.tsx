export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title skeleton */}
        <div className="mb-12">
          <div className="h-12 w-48 bg-amber-50/10 rounded-lg animate-pulse"></div>
        </div>

        {/* Journal card skeletons */}
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-black border-l-4 border-[#800020]/50 rounded-lg overflow-hidden"
            >
              <div className="bg-amber-50/5 border border-amber-50/10 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image skeleton */}
                  <div className="shrink-0">
                    <div className="w-full md:w-48 h-64 bg-amber-50/10 rounded-lg animate-pulse"></div>
                  </div>

                  {/* Content skeleton */}
                  <div className="flex-1 space-y-4">
                    {/* Title skeleton */}
                    <div className="h-8 w-3/4 bg-amber-50/10 rounded animate-pulse"></div>

                    {/* Metadata skeleton */}
                    <div className="flex flex-wrap gap-4">
                      <div className="h-4 w-32 bg-amber-50/10 rounded animate-pulse"></div>
                      <div className="h-4 w-24 bg-amber-50/10 rounded animate-pulse"></div>
                      <div className="h-4 w-40 bg-amber-50/10 rounded animate-pulse"></div>
                      <div className="h-6 w-32 bg-[#800020]/30 rounded-full animate-pulse"></div>
                    </div>

                    {/* Description skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-amber-50/10 rounded animate-pulse"></div>
                      <div className="h-4 w-full bg-amber-50/10 rounded animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-amber-50/10 rounded animate-pulse"></div>
                    </div>

                    {/* Button skeleton */}
                    <div className="pt-2">
                      <div className="h-12 w-36 bg-[#800020]/30 rounded-md animate-pulse"></div>
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
}
