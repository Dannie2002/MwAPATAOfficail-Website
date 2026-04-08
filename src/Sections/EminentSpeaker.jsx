import React, { useState, useRef } from "react";
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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.69, ease: "easeInOut" }
    },
  };

   const [visibleCount, setVisibleCount] = useState(4); 
   const teamRef = useRef(null);
    const Speakers = [
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
    <section className="Section_bg">

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
          <motion.div ref={teamRef} className="Grid_4">
                       {Speakers.slice(0, visibleCount).map((speaker) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.6, ease: "easeInOut" }} 
                        key={speaker.id} 
                        className="relative lg:bg-[#eef7e3] group  cursor-pointer"
                        
                      >
                        <div className="relative h-[330px] lg:h-[430px] overflow-hidden z-0 shadow-3xl">
                          <img src={speaker.image} alt={speaker.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full object-cover"/>
                             {/* overlay to apply blend mode */}
                          <div className="absolute lg:hidden lg:group-hover:flex transition-colors duration-450 ease-in-out inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 "></div>
        
                        </div>
                          <motion.div variants={containerVariants}
                          initial="hidden"
                          whileInView="show"
                          viewport={{once:true}}
                          className="absolute lg:relative flex flex-col lg:py-4 gap-2 p-4 justify-end items-start inset-0 z-10"> 
                            <motion.h4 variants={itemVariants} className="Card_heading lg:mt-4">{speaker.name}</motion.h4>
                            <motion.p variants={itemVariants} className="lg:text-[var(--text-color)] text-[#fffced] lg:mt-3 mt-1 text-[18px] font-light">{speaker.title}</motion.p>
                            <motion.div variants={itemVariants} className="flex-center mt-2 gap-2">
                            <h6 className=" lg:text-(--secondary-color) z-50 text-[#fffced] text-[14px] uppercase font-semibold">Learn More</h6>
                            <ChevronRight className="lg:text-(--secondary-color) z-50 text-[#fffced] size-6 " />
                            </motion.div>
                          </motion.div>
                        
                      </motion.div> 
                    ))}
                 
                </motion.div>

          {/* next buttons */}
       <motion.div  className="flex items-start mt-6 gap-4 lg:mt-12  transition ">
                      <button
                        onClick={() => {
          setVisibleCount((prev) => Math.max(prev - 4, 4));
          teamRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
                        className="p-2 rounded-full bg-green/10 hover:bg-green/20 disabled:bg-green/5 disabled:cursor-not-allowed transition"
                      >
                        <ChevronLeft className="size-6 text-green" />
                      </button>
      
                      <button
                        onClick={() => setVisibleCount((prev) => Math.min(prev + 4, Speakers.length))}
                        disabled={visibleCount >= Speakers.length}
                        className="p-2 rounded-full bg-green/10 hover:bg-green/20 disabled:bg-green/5 disabled:cursor-not-allowed transition"
                      >
                        <ChevronRight className="size-6 text-green" />
                      </button>      
                  </motion.div>
      
    </div> 
         
    </section>
  );
};

export default EminentSpeaker;