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
      <header className="w-full bg-[#f08000] rounded-[4px] sticky top-0 z-50">
      <nav className="relative mx-auto flex items-center justify-between px-22 py-3">

        {/* Logo */}
        <button
          className="white flex gap-3 uppercase text-[18px] barlow"
          
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden  barlow uppercase md:flex items-center gap-8 white font-medium">
          <li className="hover:text-green cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">About</li>
          <li className="hover:text-green-700 cursor-pointer">Events</li>
          <li className="hover:text-green-700 cursor-pointer">Publications & Resources</li>
          <li className="hover:text-green-700 cursor-pointer">Eminent Speaker Series</li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block bebas text-[18px] white border-[#fffced] border-[0.7px] uppercase bg-transparent px-8 py-2   transition-all duration-500 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}>
            more
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

   {isOpen && (
  <div className="flex flex-col gap-6 absolute right-0 top-full mt-0 w-4xl h-[400px] p-8
  backdrop-blur-4xl bg-[#eee]/70 z-0

  transform transition-all duration-300 ease-out
  animate-[dropdown_0.6s_ease-out]"
  >
     <div className="w-full mb-4">
      <input
        type="text"
        placeholder="Search ..."
        className="w-full bg-transparent border-b border-[#4a4a4a] outline-none py-2 text-[18px] placeholder-[#4a4a4a] text-grey focus:border-green transition-all duration-300"
      />
    </div>
    <div className="flex gap-6">
<p className="text-[#f08000] bebas text-[24px]">About MwAPATA</p>
    <p className="text-green bebas text-[24px]">Contact Us</p>
    <p className="text-green bebas text-[24px]">Job Listing</p>
    <p className="text-green bebas text-[24px]">YouTube channel</p>
    <p className="text-green bebas text-[24px]">Follow Us</p>
    </div>
    
    

  </div>
)}
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
            <button className="mt-2 bebas bg-green uppercase white py-2 clip">
              Subscribe
            </button>
          </ul>
        </div>
      )}
    </header>
      
        <div className="flex relative rounded-[4px] flex-col items-start justify-center h-full lg:h-[650px] lg:mt-0 bg-[#ac6133] mt-10" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                 <div className="absolute rounded-2xl  inset-0 bg-gradient-to-r from-[#000000] via-[#3A9B3D]/60 to-[#3A9B3D]/50 opacity-95 "></div>
                    <div className="flex z-10  p-8 lg:px-22 barlow  lg:gap-6 flex-col items-start">
                      <div className="flex gap-4 flex-center">
                            <div className="h-full w-[2.6px] bg-green"></div>
                      <p className="white text-[20px] lg:text-[18px] w-[220px] lg:w-[450px]"><span className="text-[#f08000] font-bold">Evidence</span> for Transformation
 </p>
                      </div>
                      
                        
                    <h4 className="white bebas font-extrabold mt-6 text-[48px] w-[200px] leading-[48px] lg:w-[600px] lg:leading-[78px] lg:text-[78px] uppercase"><span className="text-[#f08000]">RESEARCH </span> THAT IMPROVES LIVELIHOOD IN MALAWI</h4>
               
                <p className="white text-[16px] lg:w-[500px]">

MwAPATA was established with a grant from the Foundation for a Smoke-Free World via Michigan 
State University, and continues with the support of various strategic partners. 
                </p>
              <div className=" relative">
               <DottedArrow color="#fffced" size={70} className=" absolute lg:top-0 lg:left-0 left-52 bottom-20"  />
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