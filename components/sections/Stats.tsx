export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            The Numbers Behind <span className="text-blue-600">Our Success</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start max-w-5xl mx-auto">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center px-4 md:px-8">
            <div className="bg-blue-100/60 text-blue-600 font-bold text-2xl md:text-3xl py-3 px-8 rounded-full mb-6">
              10K+
            </div>
            <p className="text-gray-900 font-medium leading-relaxed max-w-[250px]">
              Professionals Trained For Exceptional Career Success
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4 md:px-8 md:border-x md:border-gray-300">
            <div className="bg-blue-100/60 text-blue-600 font-bold text-2xl md:text-3xl py-3 px-8 rounded-full mb-6">
              200+
            </div>
            <p className="text-gray-900 font-medium leading-relaxed max-w-[250px]">
              Sessions Delivered With Unmatched Learning Excellence
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4 md:px-8">
            <div className="bg-blue-100/60 text-blue-600 font-bold text-2xl md:text-3xl py-3 px-8 rounded-full mb-6">
              5K+
            </div>
            <p className="text-gray-900 font-medium leading-relaxed max-w-[250px]">
              Active Learners Engaged In Dynamic Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}