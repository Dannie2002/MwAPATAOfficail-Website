import React from "react";
import {motion} from "framer-motion";
import { useState } from "react";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const News = () => {
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

    const events = [
  {
    id: 1,
    title: "MwAPATA Institute urges Malawi Parliament to address policy gaps",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 Jan 2026",
    image: capacity,
  },
  {
    id: 2,
    title: "Stakeholders Strategize on Future of Smallholder Farming in Malawi",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
      date: "21 FEB 2021",
    image: research,
  },
  {
    id: 3,
    title: "Minister Calls for Homegrown Agricultural Policy Research",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
      date: "17 OCT 2020",
   image: outreach, 
  }

];


  return (
    <section className="py-12 px-6 lg:px-22">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="head lg:text-[48px] text-[32px] oswald max-w-3xl lg:leading-[52px] uppercase font-semibold text-grey ">
                <span className="text-orange">OUR</span> LATEST NEWS.
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



       <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:auto-rows-[480px]">
          {events.map(ev => (
            <div
              key={ev.id}
              className="relative rounded-[14px] z-0 shadow-3xl"
            >
               <div className="relative h-full overflow-hidden z-0 group shadow-3xl">
                <img src={ev.image} alt={ev.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
              {/* overlay to apply blend mode */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#323232] to-[#3A9B3D]/50  rounded-[4px] opacity-90 mix-blend-multiply"></div>

               </div>
              <div className="absolute bg-transparent z-10 flex flex-col items-start gap-2 lg:gap-3 justify-between bottom-0 p-4 lg:p-8 w-full">
                <h4 className="barlow font-bold hover:text-[#EA8548] transition-colors duration-300 ease-in-out white uppercase text-[16px] lg:text-[24px] leading-[28px]">
                  {ev.title}
                </h4>
                <div className="bg-green clip mt-2 lg:mt-4 px-4 py-1 ">
                  <h4 className="white font-semibold text-[14px] ">{ev.date}</h4>
                </div>
              </div>
            </div>
          ))}
       </div>
                <div className="flex items-center mt-6 justify-start flex-row gap-4 lg:mt-10">
                    <div className="bg-orange flex-center  p-2 rounded-full">
                     <ChevronLeft className="white size-6" />
                    </div>
                    
                    <div className="bg-orange flex-center  p-2 rounded-full">
                     <ChevronRight className="white size-6" />
                    </div>
                 
                </div>
          
    </section>
  );
};

export default News;