import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home(){
  return(
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}