import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Data from "./Icons/Data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section_header from '../Sections/Section_header'

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
    name:"Prof. Moses Maliro",
    title: "Promoting Neglected and Under-Utilized Food Crops: A Pathway to Diversified and Resilient Food Systems",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    name:"Dr. Greenwell Matchaya",
    title: "Leveraging Food System Transformation to Achieve Resilient Livelihoods, Nutrition Security and Environmental Sustainability in Malawi",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    name:"Mr. Zwide Jere",
    title: "Leveraging Carbon Markets and Climate Finance to Accelerate Sustainable Development in Malawi",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },
    {
    id: 4,
    name:"Prof. Andy Dougill",
    title: "Unlocking Wealth Creation through Enhanced Agro-Processing of Priority Value Chains for Nutrition and Diets",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },

];

   
  return (
    <section className="min-h-screen">

            <Section_header
  title="Emminent Speaker"
  bgImage={research}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Eminent speaker" }
  ]}
/>

    <div className="py-12 px-6 lg:px-22">

      
          {/* section heading*/}        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
                  <h4 className="Section_title ">16th Ndizotheka Eminent Speaker Series</h4>

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

          {/* Grid for EminentSpeaker card */}
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
               <p className="p-0 mt-3 text-grey uppecase font-light line-clamp-2">{program.title}</p>
                </div>
            </div> 
           ))} 
        </div>

          {/* Grid for EminentSpeaker card */}
        <div className="flex items-start flex-row overflow-hidden gap-3 lg:mt-12 group transition-all ">
          <div className="p-2 size-12 flex-center bg-[#eee] hover:bg-[var(--secondary-color)] duration-500">
            <ChevronLeft className="text-grey size-6 group-hover:text-white" />
          </div>
         
          <div className="p-2 size-12 flex-center bg-[#eee] hover:bg-[var(--secondary-color)] duration-500">
            <ChevronRight className="text-grey size-6 group-hover:text-white" />
          </div>
          

        </div>
      
    </div>      
    </section>
  );
};

export default EminentSpeaker;