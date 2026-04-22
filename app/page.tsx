import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CatFramework from "@/components/sections/CatFramework";

export default function Home(){
  return(
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CatFramework />
      </main>
    </div>
  );
}