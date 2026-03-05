import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";

const OurTeam = () => {

    const programs = [
  {
    id: 1,
    title: "Mr. William Chadza",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    title: "Prof. Levison Chiwaula",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    title: "Ms. Mercy Chirwa",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },
  {
    id: 4,
    title: "Dr. Maggie Munthali",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: policy,
  },
];

  return (
    <section className="py-12 px-6 lg:px-22">
      <h1 className="lg:text-[22px] text-[18px] uppercase barlow font-semibold text-orange">Our Team</h1>
      <div className="mt-2 w-[50px] h-[4px] bg-green "></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="lg:text-[48px] text-[32px] oswald max-w-4xl lg:leading-[52px] uppercase font-semibold text-grey ">
                <span className="text-orange">MEET</span> OUR TEAM.
              </motion.h4>

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
        <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 auto-rows-[470px]">
          {programs.map((program) => (
            <div className="relative z-0 shadow-3xl" style={{backgroundImage: `url(${program.image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
              {/* overlay to apply blend mode */}
               <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply"></div>
             <div className="absolute bg-orange z-10 flex flex-row items-center justify-between bottom-0 p-4 w-full">
              <h4 className="barlow font-semibold white uppercase text-[22px]">{program.title}</h4>
              <RightArrow size={28} color="#fffced" />
              </div>
               <h1 className="absolute p-2 -bottom-15 text-grey font-semibold">Finance and Administration Manager</h1>
            </div> 
                    
        ))}
      
        
       </div>
          
    </section>
  );
};

export default OurTeam;