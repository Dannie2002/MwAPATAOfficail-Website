import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/LandingPhoto.jpg";
import DottedArrow from "./Icons/DottedArrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(useGSAP, SplitText);

const LandingPage= () => {
  const [isOpen, setIsOpen] = useState(false);

useGSAP(() => {
  const heroSplit = new SplitText(".head", { type: "lines, words, chars" });
  gsap.from(heroSplit.chars, {
    opacity: 0,
    y: 50,
    ease: "power4.out",
    duration: 1,
    stagger: 0.05,
    delay: 0.5
  });
}, []);



  return (
    <section className="min-h-screen">
      <header className="w-full border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-green-800">
          MwAPATA
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-green-700 cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">About</li>
          <li className="hover:text-green-700 cursor-pointer">Events</li>
          <li className="hover:text-green-700 cursor-pointer">Publications & Resources</li>
          <li className="hover:text-green-700 cursor-pointer">More</li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
          Subscribe
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-green-700 cursor-pointer">Home</li>
            <li className="hover:text-green-700 cursor-pointer">About</li>
            <li className="hover:text-green-700 cursor-pointer">Events</li>
            <li className="hover:text-green-700 cursor-pointer">Publications & Resources</li>
            <li className="hover:text-green-700 cursor-pointer">More</li>
            <button className="mt-2 bg-green-700 text-white py-2 rounded-lg">
              Subscribe
            </button>
          </ul>
        </div>
      )}
    </header>
      
        <div className="flex relative rounded-2xl flex-col items-start justify-center h-full lg:h-[650px] lg:mt-8 bg-[#ac6133] mt-10" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                 <div className="absolute rounded-2xl  inset-0 bg-gradient-to-r from-[#000000] via-[#3A9B3D]/60 to-[#3A9B3D]/50 opacity-95 "></div>
                    <div className="flex z-10  p-8 lg:px-22 barlow  lg:gap-6 flex-col items-start">
                      <div className="flex gap-4 flex-center">
                            <div className="h-full w-[1.6px] bg-[#fffced]"></div>
                      <p className="white text-[20px] lg:text-[18px] w-[220px] lg:w-[450px]"><span className="text-[#f08000] font-bold">Evidence</span> for Transformation
 </p>
                      </div>
                      
                        
                    <h4 className="white bebas font-extrabold mt-6 text-[48px] w-[200px] leading-[48px] lg:w-[600px] lg:leading-[78px] lg:text-[78px] uppercase"><span className="text-[#f08000]">RESEARCH </span> THAT IMPROVES LIVELIHOOD IN MALAWI</h4>
               
                <p className="white text-[16px] lg:w-[500px]">

MwAPATA was established with a grant from the Foundation for a Smoke-Free World via Michigan 
State University, and continues with the support of various strategic partners. 
                </p>
                <div className="hidden relative">
<DottedArrow color="#fffced" size={70} className=" absolute lg:top-0 lg:left-0 left-52 bottom-0"  />
               </div>
               
                
                   
                    <div className="mt-6 flex flex-row  gap-6">
                    
                    <button className="bg-green clip lg:px-14 text-2xl py-4 px-6 text-[18px]  border-[#fffced] uppercase barlow font-semibold white">ABOUT MWAPATA</button>
                    </div>
                    </div>
            


            
        </div>





    </section>
  );
};

export default LandingPage;