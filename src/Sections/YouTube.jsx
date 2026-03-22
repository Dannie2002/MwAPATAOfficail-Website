import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/youtube.jpg";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import DottedArrow from "./Icons/DottedArrow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const YouTube= () => {

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
        
      
        <div className="flex relative flex-col items-start justify-center h-full lg:h-[650px] lg:mt-28 bg-[#ac6133] mt-10" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                 <div className="absolute  inset-0 bg-gradient-to-r from-[var(--secondary-color)] via-[#3A9B3D]/60 to-[#3A9B3D]/50 opacity-95 "></div>
                    <div className="flex z-10  p-8 lg:px-22 barlow  lg:gap-6 flex-col items-start">
                      <div className="flex gap-4 flex-center">
                            <div className="h-full w-[1.6px] bg-green"></div>
                      <p className="white text-[20px] barlow lg:text-[18px] w-[220px] lg:w-[450px]"><span className="text-[#f08000] font-bold">Watch </span>videos of our various activities and research dissemination events.
 </p>
                      </div>
                      
                        
                    <h4 className=" white bebas font-extrabold mt-6 text-[48px] w-[200px] leading-[48px] lg:w-[500px] lg:leading-[98px] lg:text-[98px] uppercase">SUBSCRIBE TO OUR</h4>
               <div className="relative">
<DottedArrow color="#fffced" size={70} className="absolute lg:top-0 lg:left-0 left-52 bottom-0"  />
               </div>
               
                
                   
                    <div className="mt-16 flex flex-row  gap-6">
                    
                    <button className="bg-green clip lg:px-14 text-2xl py-4 px-6 text-[18px]  border-[#fffced] uppercase barlow font-semibold white">YOUTUBE CHANNEL</button>
                    </div>
                    </div>
            


            
        </div>





    </section>
  );
};

export default YouTube;