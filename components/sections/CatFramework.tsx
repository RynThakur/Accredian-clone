import { Lightbulb, MonitorSmartphone, Settings } from "lucide-react";
export default function CatFramework() {
  return (
    <section id="cat" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            The <span className="text-blue-500">CAT Framework</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-medium">
            Our Proven Approach to <span className="text-blue-500">Learning Excellence</span>
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[120%] -translate-y-1/2 pointer-events-none z-0">
            <svg viewBox="0 0 1000 300" className="w-full h-full text-blue-500 drop-shadow-sm" preserveAspectRatio="none">
              <path 
                d="M 100,150 C 100,-50 350,-50 350,150 C 350,350 650,350 650,150 C 650,-50 900,-50 900,150" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round"
              />
              <circle cx="100" cy="150" r="10" fill="currentColor" />
              <circle cx="350" cy="150" r="10" fill="currentColor" />
              <circle cx="650" cy="150" r="10" fill="currentColor" />
              <circle cx="900" cy="150" r="10" fill="currentColor" />
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10 max-w-xs md:max-w-none mx-auto">
            <div className="flex flex-col items-center text-center bg-white/90 backdrop-blur-sm p-6 rounded-[40px] border-2 md:border border-blue-100 shadow-lg md:w-[220px] md:h-[220px] mx-auto group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                <Lightbulb size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-950 mb-1 tracking-tight">Concept</h3>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                Foundational knowledge for deep understanding.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/90 backdrop-blur-sm p-6 rounded-[40px] border-2 md:border border-blue-100 shadow-lg md:w-[220px] md:h-[220px] mx-auto mt-0 md:mt-16 group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                <MonitorSmartphone size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-950 mb-1 tracking-tight">Application</h3>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                Practical implementation via real-world scenarios.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/90 backdrop-blur-sm p-6 rounded-[40px] border-2 md:border border-blue-100 shadow-lg md:w-[220px] md:h-[220px] mx-auto mt-0 md:-mt-16 group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                <Settings size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-950 mb-1 tracking-tight">Tools</h3>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                Resources and techniques for skill mastery.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}