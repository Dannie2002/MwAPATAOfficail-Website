import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Publications = () => {

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


    const programs = [
  {
    id: 1,
    title: "Working Papers",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    title: "Policy Briefs",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    title: "Policy Perspective",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },

];

  return (
    <section className="py-22 mt-12 min-h-screen px-6 lg:px-22">
      <h1 className="lg:text-[22px] text-[18px] uppercase barlow font-semibold text-orange">Publications</h1>
      <div className="mt-2 w-[50px] h-[4px] bg-green "></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4
           
                className="head lg:text-[48px] text-[32px] bebas max-w-4xl lg:leading-[52px] uppercase font-semibold text-grey ">
                MwAPATA's three main publication lines offer distinct options to meet the reader's needs
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
        <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 auto-rows-[400px]">
          {programs.map((program, index) => (
            <div
              className={`relative z-0 shadow-3xl ${index === 0 ? "col-span-2" : ""}`}
            >
               <div className="relative h-full overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
              {/* overlay to apply blend mode */}
               <div className="absolute inset-0 bg-green rounded-[4px] opacity-60 mix-blend-multiply"></div>

               </div>

             <div className="absolute  z-10 flex flex-row items-center gap-3 justify-start bottom-0 p-4 w-full">
              <h4 className="barlow font-bold white uppercase text-[24px]">{program.title}</h4>
              <RightArrow size={28} color="#fffced" />
              </div>
            </div>
        ))}
       </div>

       <div className="lg:mt-18 flex flex-col lg:flex-row "> 

        <div className="w-1/2">
        <h4 className="head lg:text-[48px] text-[32px] bebas w-[520px] lg:leading-[52px] uppercase font-semibold text-grey ">
                In addition to our own publications, we offer the following resources
              </h4>
        </div>
       

        <div className="w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 lg:mt-0 auto-rows-[280px]">
          <div className="bg-green p-6 flex flex-col items-start justify-between rounded-[4px]">
            <h4 className="barlow font-bold white uppercase text-[22px]">Peer Reviewed</h4>
            <p className=" white font-semibold">Our goal is to produce world-class, rigorous research.</p>
          </div>
            <div className="bg-green p-6 flex flex-col items-start justify-between rounded-[4px]">
            <h4 className="barlow font-bold text-grey uppercase text-[22px]">Presentations</h4>
            <p className="mt-4 text-grey font-semibold">A curated selection of publications from external sources that align with our mission and values.</p>
          </div>
             <div className="bg-orange p-6 flex flex-col items-start justify-between rounded-[4px]">
            <h4 className="barlow font-bold text-grey uppercase text-[22px]">Data</h4>
            <p className="mt-4 text-grey font-semibold">A curated selection of publications from external sources that align with our mission and values.</p>
          </div>

        </div>

       </div>
          
    </section>
  );
};

export default Publications;