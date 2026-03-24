import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Data from "./Icons/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section_header from "./Section_header";

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

    const extraprograms = [
  {
    id: 1,
    title: "Peer Reviewed",
    description:
      "Our goal is to produce world-class, rigorous research.",
   
  },
  {
    id: 2,
    title: "Presentations",
    description:
      "Circulating our findings to stakeholders to provoke informed discussions.",
    
  },
  {
    id: 3,
    title: "Data",
    description:
      " We will work to collect and share data for key indicators like agricultural production, welfare, food security and more.",
    
  },

];

  return (
    <section className=" min-h-screen">
      <Section_header
  title="Publications"
  bgImage={outreach}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Events" }
  ]}
/>
      <div className="Section_wrapper">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-6">
              <h4
           
                className="Section_title agdasima">
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
          {/* Grid for publications card */}
        <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 auto-rows-[230px] lg:auto-rows-[430px]">
          {programs.map((program, index) => (
            <div
              className={`relative z-0 shadow-3xl ${index === 0 ? "lg:col-span-2" : ""}`}
            >
               <div className="relative h-full overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
              {/* overlay to apply blend mode */}
               <div className="absolute inset-0 bg-green rounded-[4px] opacity-60 mix-blend-multiply"></div>

               </div>

             <div className="absolute  z-10 flex flex-row items-center gap-3 justify-start bottom-0 p-4 w-full">
              <h4 className="Card_heading white">{program.title}</h4>
              <RightArrow size={28} color="#fffced" />
              </div>
            </div>
        ))}
       </div>

       <h4 className="Counter_title mt-12">
                <span className="font-semibold">In addition</span> to our own publications, we offer the following resources
              </h4>

       

        <div className="grid grid-cols-1 lg:grid-cols-4 col-span-3 gap-6 mt-6 lg:mt-12 auto-rows-[210px] lg:auto-rows-[430px]">
          {extraprograms.map((extraprogram,index) => (
                  <div
              className={`bg-[#c6bc6e] p-6 flex flex-col items-start justify-between rounded-[4px] ${index === 2 ? "lg:col-span-2" : ""}`}
            >
            <h4 className="Card_heading white">{extraprogram.title}</h4>
            <p className="text_para white w-4/5">{extraprogram.description}</p>
          </div>

          ))}
         
        </div>

      
  </div>        
    </section>
  );
};

export default Publications;