import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/LandingPhoto.jpg";
import DottedArrow from "./Icons/DottedArrow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LandingPage= () => {

  useGSAP(() => {
  gsap.from(".head", {
    y: 100,
    opacity: 0,
    duration: 0.95,
    scrollTrigger: {
      trigger: ".head",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      ease: "power1.inOut",
    }
  });
});



  return (
    <section className="min-h-screen">
      
      
        <div className="flex relative rounded-2xl flex-col items-start justify-center h-full lg:h-[650px] lg:mt-28 bg-[#ac6133] mt-10" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                 <div className="absolute rounded-2xl  inset-0 bg-gradient-to-r from-[#000000] via-[#3A9B3D]/60 to-[#3A9B3D]/50 opacity-95 "></div>
                    <div className="flex z-10  p-8 lg:px-22 barlow  lg:gap-6 flex-col items-start">
                      <div className="flex gap-4 flex-center">
                            <div className="h-full w-[1.6px] bg-green"></div>
                      <p className="white text-[20px] barlow lg:text-[18px] w-[220px] lg:w-[450px]"><span className="text-[#f08000] font-bold">Watch </span>videos of our various activities and research dissemination events.
 </p>
                      </div>
                      
                        
                    <h4 className=" white bebas font-extrabold mt-6 text-[48px] w-[200px] leading-[48px] lg:w-[600px] lg:leading-[78px] lg:text-[78px] uppercase"><span className="text-[#f08000]">RESEARCH </span> THAT IMPROVES LIVELIHOOD IN MALAWI</h4>
               <div className="relative">
<DottedArrow color="#fffced" size={70} className="absolute lg:top-0 lg:left-0 left-52 bottom-0"  />
               </div>
               
                
                   
                    <div className="mt-16 flex flex-row  gap-6">
                    
                    <button className="bg-green clip lg:px-14 text-2xl py-4 px-6 text-[18px]  border-[#fffced] uppercase barlow font-semibold white">ABOUT MWAPATA</button>
                    </div>
                    </div>
            


            
        </div>





    </section>
  );
};

export default LandingPage;