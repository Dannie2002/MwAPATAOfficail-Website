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

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EminentSpeaker = () => {

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
    title: "Promoting Neglected and Under-Utilized Food Crops: A Pathway to Diversified and Resilient Food Systems",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    title: "Unlocking Wealth Creation through Enhanced Agro-Processing of Priority Value Chains for Nutrition and Diets",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    title: "Building 21st Century Agricultural Research and Extension Capacity in Africa",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },
    {
    id: 4,
    name:"Mr Limbani Katundulu",
    title: "From Envisioning to Action: Practical Interventions Catalyzing Agricultural Productivity for Transformation and Wealth Creation",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },

];

   
  return (
    <section className="py-22 mt-12 min-h-screen px-6 lg:px-22">
     
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4
           
                className="lg:text-[68px] text-[32px] bebas max-w-3xl lg:leading-[68px] uppercase font-bold text-grey ">
                

Ndizotheka
Eminent Speaker Series
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
        <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div className="">
              <div className="relative h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
              {/* overlay to apply blend mode */}
               <div className="absolute inset-0 bg-green rounded-[4px] opacity-60 mix-blend-multiply"></div>

               </div>
             <div className="mt-6">
              <h4 className="bebas text-grey uppercase text-[24px]">{program.name}</h4>
               <h1 className="p-0 mt-3 text-grey uppecase font-semibold">{program.title}</h1>
                </div>
            </div> 
                    
        ))}
      
        
       </div>

      
          
    </section>
  );
};

export default EminentSpeaker;