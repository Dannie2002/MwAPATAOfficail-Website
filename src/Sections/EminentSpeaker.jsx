import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import research from "../assets/Images/Research.jpg";
import speaker_series from "../assets/Images/Speaker_series.jpg";
import speaker1 from "../assets/Images/EminentSpeaker1.jpg";
import speaker2 from "../assets/Images/EminentSpeaker2.jpg";
import speaker3 from "../assets/Images/EminentSpeaker3.jpg";
import speaker4 from "../assets/Images/EminentSpeaker4.jpg";

import Data from "./Icons/Data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section_header from '../Sections/Section_header'



const EminentSpeaker = () => {

    const programs = [
  {
    id: 1,
    name:"Prof. Moses Maliro",
    title: "Promoting Neglected and Under-Utilized Food Crops: A Pathway to Diversified and Resilient Food Systems",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: speaker4,
  },
  {
    id: 2,
    name:"Dr. Greenwell Matchaya",
    title: "Leveraging Food System Transformation to Achieve Resilient Livelihoods, Nutrition Security and Environmental Sustainability in Malawi",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: speaker3,
  },
  {
    id: 3,
    name:"Mr. Zwide Jere",
    title: "Leveraging Carbon Markets and Climate Finance to Accelerate Sustainable Development in Malawi",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: speaker2, 
  },
    {
    id: 4,
    name:"Prof. Andy Dougill",
    title: "Unlocking Wealth Creation through Enhanced Agro-Processing of Priority Value Chains for Nutrition and Diets",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: speaker1, 
  },

];

   
  return (
    <section className="min-h-screen">

        <Section_header
         title="Emminent"
         bgImage={speaker_series}
         breadcrumbs={[
         { label: "Home", link: "/" },
         { label: "/ Eminent speaker" }
         ]}
         />

      <div className="Section_wrapper">

      
          {/* section heading*/}        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
                  <h4 className="Section_title ">Ndizotheka Eminent Speaker Series</h4>

                  <div className="flex flex-col mt-4 items-start lg:mt-0 lg:items-end">
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
        <div className="Grid_4">
          {programs.map((program) => (
             <div key={program.id} className="relative bg-[#eaeee5] " >
                            <div className="relative h-[330px] lg:h-[430px] overflow-hidden z-0 group shadow-3xl">
                            <img src={program.image} alt={program.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                            <div className="absolute lg:hidden inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 mix-blend-multiply"></div>
                             </div>
                            {/* Description div */}
                            <div className="flex flex-col gap-4 mt-2 p-4 justify-end items-start inset-0 z-50">
                                <h4 className="Card_heading text-grey">{program.name}</h4>
                                <p className="text-[var(--text-color)] line-clamp-3 text-[18px] font-light">{program.title}</p>
                                <div className="flex-center gap-4">
                                  <h6 className="text-green text-[14px] uppercase font-semibold">Learn More</h6>
                                  <ChevronRight className="text-green size-6 group-hover:text-white" />
                                </div>
                            </div>
              </div> 
           ))} 
        </div>

          {/* next buttons */}
        <div className="flex items-start flex-wrap overflow-hidden mt-6  gap-4 lg:mt-12  transition ">
                                                 <div className="p-2 size-12 group flex-center bg-green hover:bg-[var(--secondary-color)]/60 duration-470">
                                                   <ChevronLeft className="text-[#fffced] size-6 group-hover:text-white" />
                                                 </div>
                                                
                                                 <div className="p-2 size-12 flex-center group bg-green hover:bg-[var(--secondary-color)]/80 duration-500">
                                                   <ChevronRight className="text-[#fffced] size-6 group-hover:text-white" />
                                                 </div>
                                                 
                                       
        </div>
      
    </div> 
         
    </section>
  );
};

export default EminentSpeaker;