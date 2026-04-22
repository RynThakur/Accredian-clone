export default function Clients() {
  const clients = [
    { name: "Reliance", classes: "text-amber-700 font-serif text-2xl font-bold flex flex-col items-center leading-none", subtext: "Industries Limited" },
    { name: "HCL", classes: "text-blue-700 font-sans text-3xl font-extrabold italic tracking-tighter" },
    { name: "IBM", classes: "text-blue-600 font-sans text-4xl font-black tracking-widest" },
    { name: "CRIF", classes: "text-blue-900 font-sans text-3xl font-black italic tracking-tighter flex flex-col items-center leading-tight", subtext: "Together to the next level" },
    { name: "ADP", classes: "text-red-600 font-sans text-4xl font-black tracking-tighter" },
    { name: "BAYER", classes: "text-gray-800 font-sans text-sm font-bold border-4 border-blue-400 rounded-full w-20 h-20 flex items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:border-4 before:border-green-500 before:rounded-full before:-ml-2 before:-mt-2 before:opacity-50" },
  ];
  return (
    <section id="clients" className="py-16 bg-gray-50/50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Our Proven <span className="text-blue-600">Partnerships</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Successful Collaborations With the <span className="text-blue-600">Industry's Best</span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
              <div className={client.classes}>
                {client.name}
              </div>
              {client.subtext && (
                <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                  {client.subtext}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}