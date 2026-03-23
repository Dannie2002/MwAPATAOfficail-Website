import React from "react";
import {motion} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import capacity from "../../assets/Images/Capacity_building.JPG";
import { useGSAP } from "@gsap/react";
import noise from "../../assets/Images/Noise.png";
import EminentSpeaker from "../EminentSpeaker";
import Section_header from "../Section_header";

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
    <section className="min-h-screen">

            <Section_header
  title="Eminent Speaker Series"
  bgImage={capacity}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Events" }
  ]}
/>

      <div className="py-12 px-6 lg:px-22">

     
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title">
                
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
         <h4 className="uppercase text-grey text-[14px] font-light"> <span className="text-green font-bold ">DATE:</span> 2ND JAN 2026</h4>
         <h4 className="uppercase text-grey text-[14px] font-light"> <span className="text-green font-bold ">TIME:</span> 17:00hr </h4>
         <h4 className="uppercase text-grey text-[14px] font-light"> <span className="text-green font-bold ">LOCATION:</span> CROSSROADS, BLANTYRE & Virtual via Zoom </h4>
         
       </div>
            
             <motion.div
                                      initial={{ opacity: 0, x: 80 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 1.99, ease: "easeInOut" }}
                                      className=" w-full relative h-[1.5px] mt-4 bg-green"></motion.div>


        
          <div className="flex flex-col gap-12 lg:gap-18 lg:mt-18 mt-10 lg:flex-row">

            <div className="flex flex-col gap-6 lg:w-1/2">
              <h4 className="Counter_title barlow text-green">Theme:</h4>
              <p className="Counter_title text-[26px] font-normal leading-[32px] w-full">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>
              
              
                 <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[50px] h-[4px] bg-green"></motion.div>
                <p className="lg:text-[18px] text-grey font-light text-[16px] lg:w-[470px]">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>
              <p className="lg:text-[18px] font-light text-grey text-[16px] lg:w-[470px]">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>
              
              
              </div>

               <div className=" flex lg:flex-row lg:w-1/2 flex-col lg:gap-8">
                <div className="relative lg:w-1/2">
                  <img src={capacity} alt="research" className=" rounded-[4px] h-[430px] object-cover"/>
                 
                </div>
                  <div className="flex mt-6 lg:mt-0 flex-col gap-4 lg:w-1/2">
                    <h4 className="Counter_title barlow text-green">ABOUT SPEAKER:</h4>
                    <h4 className="Counter_title text-[22px] font-normal leading-[32px] ">Mr JONATHAN SAID</h4>
                    <p className="text-grey font-light">Research Professor of Tropical Soils, Soil and Water Sciences Department, University of Florida</p>
                    <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[50px] h-[4px] bg-green"></motion.div>
                  </div>
                  
                </div>

                
                 
                </div>
                <div className="mt-12">
                 <h4 className="font-bold lg:text-[32px] text-[32px] uppercase text-[#EA8548] oswald">Event in pictures</h4>

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mt-12 space-y-6">
              {images.map((img, index) => (
              <div key={index} className="overflow-hidden h-[430px] rounded-[4px] shadow-md group cursor-pointer">
                <img
                  src={img}
                  alt="Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              ))}
            </div>
                </div>

     </div>            
          
    </section>
  );
};

export default EminentSpeakerDetailed;