import React from "react";
import {motion} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import capacity from "../../assets/Images/Capacity_building.JPG";
import { useGSAP } from "@gsap/react";
import noise from "../../assets/Images/Noise.png";
import EminentSpeaker from "../EminentSpeaker";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EminentSpeakerDetailed = () => {
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

const images = [
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,

];

  return (
    <section className="py-12 min-h-screen px-6 lg:px-22">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="head lg:text-[68px] text-[32px] bebas max-w-3xl lg:leading-[68px] uppercase font-bold text-grey ">
                
                    ESS Icon_orange.png
                    The 7th Nd   zotheka Eminent Speaker Series:
              </h4>

              <div className="flex flex-col items-start lg:items-end">
                  <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.3, ease: "easeInOut" }}
                  className="mt-2 w-[90px] h-[4px] bg-green "></motion.div>
                  <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[50px] h-[4px] bg-orange"></motion.div>
              </div>
      </div>


       <div className="flex flex-wrap oswald  lg:flex-row items-center justify-start gap-6 lg:gap-12 mt-10">
         <h4 className="uppercase text-grey text-[14px] font-semibold"> <span className="text-green font-bold ">DATE:</span> 2ND JAN 2026</h4>
         <h4 className="uppercase text-grey text-[14px] font-semibold"> <span className="text-green font-bold ">TIME:</span> 17:00hr </h4>
         <h4 className="uppercase text-grey text-[14px] font-semibold"> <span className="text-green font-bold ">LOCATION:</span> CROSSROADS, BLANTYRE & Virtual via Zoom </h4>
         
       </div>
            
            <div className="bg-[#4a4a4a] lg:mt-6 mt-6 w-full h-[0.2px]"></div>


        
          <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 ">

            <div className="flex flex-col gap-6">
              <h4 className="font-bold lg:text-[32px] text-[32px] uppercase text-[#EA8548] oswald">Theme:</h4>
              <p className="lg:text-[28px] text-[28px] text-grey uppercase font-bold text-[16px] lg:w-[470px]">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>
              
                 <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[50px] h-[4px] bg-green"></motion.div>
                <p className="lg:text-[18px] text-grey text-[16px] lg:w-[470px]">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>
              </div>

               <div className=" flex lg:flex-row flex-col lg:gap-8">
                <div className="relative lg:w-1/2">
                  <img src={capacity} alt="research" className="w-full h-full rounded-[14px] object-cover"/>
                  <img src={noise} alt="research" className="absolute inset-0 w-full rounded-[14px] mix-blend-overlay opacity-30  clip h-full object-cover"/>
                  <div className="absolute clip rounded-[14px] inset-0 bg-green opacity-20 mix-blend-multiply "></div>
                </div>
                  <div className="flex mt-6 lg:mt-0 flex-col gap-3 lg:w-1/2">
                    <h4 className="font-bold lg:text-[22px] text-[22px] uppercase text-[#EA8548] oswald">SPEAKER:</h4>
                    <h4 className="font-bold lg:text-[18px] text-[22px] uppercase text-green oswald">Mr JONATHAN SAID</h4>
                    <p className="text-grey font-semibold">Research Professor of Tropical Soils, Soil and Water Sciences Department, University of Florida</p>
                  </div>
                  
                </div>

                
                 
                </div>
                <div className="mt-12">
                 <h4 className="font-bold lg:text-[32px] text-[32px] uppercase text-[#EA8548] oswald">Event in pictures</h4>

                   <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mt-12 space-y-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={img}
                alt="Event"
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
                </div>
          
    </section>
  );
};

export default EminentSpeakerDetailed;