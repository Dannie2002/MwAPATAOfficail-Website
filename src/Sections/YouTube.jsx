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
    <section className="h-[60vh]">

      <div className="lg:px-22 py-12 px-6">
        
      
        <div className="flex relative flex-col items-start justify-center ">
                       
                
                    <div className="flex z-10  barlow  lg:gap-6 flex-col items-start">
                      <div className="flex gap-4">
                        
                      <p className="text_para"><span className="text-[#f08000] font-bold">Watch </span>videos of our various activities and research dissemination events.
 </p>
                      </div>
                      
                        
                    <h4 className="Section_title text-8xl">SUBSCRIBE TO OUR</h4>
               <div className="relative">
<DottedArrow color="#fffced" size={70} className="absolute lg:top-0 lg:left-0 left-52 bottom-0"  />
               </div>
               
                
                   
                    <div className="mt-6 flex flex-row  gap-6">
                    
                    <button className="bg-green clip lg:px-14 text-2xl py-4 px-6 text-[18px]  border-[#fffced] uppercase barlow font-semibold white">YOUTUBE CHANNEL</button>
                    </div>
                    </div>
    
        </div>




</div>
    </section>
  );
};

export default YouTube;