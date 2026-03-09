import React from "react";
import {motion} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import capacity from "../../assets/Images/Capacity_building.JPG";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EventDetailed = () => {
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
    <section className="py-12 px-6 lg:px-22">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="head lg:text-[48px] text-[32px] bebas max-w-3xl lg:leading-[52px] uppercase font-bold text-grey ">
                Conducting evidence-based research to influence agricultural and development policies.
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


       <div className="flex oswald flex-row items-center justify-start gap-12 mt-10">
         <h4 className="uppercase text-grey text-[16px] font-semibold"> <span className="text-green font-bold ">DATE:</span> 17 JAN 2026</h4>
         <h4 className="uppercase text-grey text-[16px] font-semibold"> <span className="text-green font-bold ">LOCATION:</span> CROSSROADS, BLANTYRE</h4>
       </div>
            
            <div className="bg-[#4a4a4a] lg:mt-6 mt-6 w-full h-[0.2px]"></div>


                <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-[480px]">

            <div className="flex flex-col gap-8">
              <h4 className="font-bold lg:text-[32px] text-[32px] uppercase text-grey oswald">ABOUT THIS EVENT</h4>
              <p className="lg:text-[18px] text-grey text-[16px] lg:w-[470px] leading-relaxed">
                As part of the process of institutionalizing youth-led agri-food systems platforms in the LEAP4YOUTH Project, 
                MwAPATA, in partnership with the National Youth Council of Malawi (NYCOM), with support from AGRA, conducted a 
                district policy clinic with youth networks in Mchinji and an Agri-Skills Lab for youths in Zomba. The Mchinji Policy 
                Clinic was held at Mchinji Community Hall from 2nd to 3rd February 2026, while the Zomba
                 Agri-Skills Lab was held at Zomba Community Stadium Hall from 6th to 7th February 2026.
              </p>
              
                <h4 className="font-bold lg:text-[32px] text-[32px] uppercase text-grey oswald">WATCH THE HIGHLIFGHTS OF THE WORKSHOP HERE</h4>
              </div>

               <div className="relative flex">
                <img src={capacity} alt="research" className="w-full h-full rounded-3xl object-cover"/>
                 <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply rounded-3xl"></div>
                </div>
                 
                </div>
          
    </section>
  );
};

export default EventDetailed;