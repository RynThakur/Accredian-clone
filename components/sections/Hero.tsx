import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const benefits = [
    "Tailored Solutions",
    "Industry Insights",
    "Expert Guidance",
    "Measurable Impact",
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Next-Gen Expertise for Your <span className="text-blue-600">Enterprise</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Cultivate high-performance teams through expert learning. Develop powerful skills for rapid career growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="text-lg px-8 py-4">Enquire Now</Button>
              <Button variant="outline" className="text-lg px-8 py-4">Explore Solutions</Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl shadow-2xl bg-white border border-gray-100 flex items-center justify-center p-8 group overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-purple-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
            
            <div className="relative z-10 text-center">
               <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-100 shadow-inner">
                 <span className="text-blue-500 font-bold text-xl">AI</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Transform Your Team</h3>
               <p className="text-gray-500">Corporate Training Hub</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}