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

const OurTeam = () => {

useGSAP(() => {
  gsap.from(".heading", {
    y: 100,
    opacity: 0,
    duration: 0.95,
    scrollTrigger: {
      trigger: ".heading",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      ease: "power1.inOut",
    }
  });
}, []); 

    const programs = [
  {
    id: 1,
    name: "Mr. William Chadza",
    title: "Finance and Administration Manager",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    name: "Prof. Levison Chiwaula",
    title: "Research Director",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    name: "Ms. Mercy Chirwa",
    title: "Outreach Coordinator",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },
  {
    id: 4,
    name: "Dr. Maggie Munthali",
    title: "Policy Advisor",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: policy,
  },
];

  return (
    <section className="py-12 min-h-screen px-6 lg:px-22">
      <h1 className="lg:text-[22px] text-[18px] uppercase barlow font-semibold text-orange">Our Team</h1>
      <div className="mt-2 w-[50px] h-[4px] bg-green "></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4            
                className="heading lg:text-[48px] text-[32px] oswald max-w-4xl lg:leading-[52px] uppercase font-semibold text-grey ">
                <span className="text-orange">MEET</span> OUR TEAM.
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
        <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div className="">
              <div className="relative h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
              {/* overlay to apply blend mode */}
               <div className="absolute inset-0 bg-green rounded-[4px] opacity-60 mix-blend-multiply"></div>

               </div>
             <div className="mt-6">
              <h4 className="barlow font-bold text-grey uppercase text-[22px]">{program.name}</h4>
               <h1 className="p-0 mt-3 text-grey font-semibold">{program.title}</h1>
                </div>
            </div> 
                    
        ))}
      
        
       </div>
          
    </section>
  );
};

export default OurTeam;