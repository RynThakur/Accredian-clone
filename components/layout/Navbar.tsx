"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar(){
    const[isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {name:"Home", href:"/"},
        {name:"Stats", href:"#stats"},
        {name:"How it Works",href:"#how-it-works"},
        {name:"FAQs",href:"#faqs"},
        {name:"Testimonials", href:"#testimonials"},
    ];
    return(
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all">
            <div className="max w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
                        Accredian
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link)=>(
                            <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base">
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary">Enquire Now</Button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                        onClick={()=> setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
                            {isOpen ? <X size={28}/> : <Menu size={28}/>}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen &&(
                <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link)=>(
                            <Link
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            onClick={()=>setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button variant="primary" className="w-full">Enquire Now</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}