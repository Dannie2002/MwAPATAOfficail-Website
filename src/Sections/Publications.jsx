import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import research from "../assets/Images/Research.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import publications from "../assets/Images/Publications.jpg";
import noise from "../assets/Images/Noise.png";
import policy from "../assets/Images/Policy_advocacy.jpg";
import Section_header from "./Section_header";
import { publications_types, Resources } from "../Constants/data";

const Publications = () => {

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
      transition: { duration: 0.79, ease: "easeInOut" }
    },
  };


  return (
    <section className=" bg-[#eef7e3]">
      <Section_header
        title="Publications"
        bgImage={publications}
        breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "/Publications" }
       ]}
      />

      
      <div className="Section_wrapper">
      
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mt-10 lg:mt-6">
              <h4
           
                className="Section_title">
                MwAPATA's three main publication lines offer distinct options to meet the reader's needs
              </h4>

              <div className="flex lg:hidden ga flex-col items-start lg:items-end">
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
        <motion.div className="Grid_4 auto-rows-[230px] lg:auto-rows-[430px]" 
                      variants={containerVariants}  
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}>
                      {publications_types.map((publication, index) => (
            <motion.div key={publication.id} variants={itemVariants} className={`relative cursor-pointer z-0 shadow-3xl ${index === 1 ? "lg:col-span-2" : ""}`} >
               <div className="relative h-full rounded-[4px] overflow-hidden z-0 group shadow-3xl">
                 <img src={publication.image} alt={publication.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                 <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                 <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--primary-color)]/40  via-[#3A9B3D]/60 to-[#3A9B3D]/90 opacity-100"></div>
               </div>

              <div className="absolute  z-10 flex flex-row items-center gap-3 justify-start bottom-0 p-4 w-full">
                <h4 className="Card_heading white">{publication.title}</h4>
                <RightArrow size={28} color="#fffced" />
              </div>
           </motion.div>
        ))}
       </motion.div>

       <h4 className="Counter_title mt-12">
              <span className="font-semibold">In addition</span> to our own publications, we offer the following resources
              </h4>

       

        <motion.div className="Grid_4 auto-rows-[210px] lg:auto-rows-[430px]"
                    variants={containerVariants}  
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    {Resources.map((resource, index) => (
              <motion.div key={index} variants={itemVariants} className={`bg-transparent hover:bg-[var(--secondary-color)] group transition-all duration-490 border hover:border-transparent border-[var(--text-color)]/60 p-6 rounded-[4px] flex flex-col items-start justify-between ${index === 2 ? "lg:col-span-2" : ""}`}>
                 <h4 className="Card_heading text-green group-hover:text-[#fffced] ">{resource.title}</h4>
                 <p className="text_para text-grey group-hover:text-[#fffced] w-full">{resource.description}</p>
              </motion.div>
               ))}
         
        </motion.div>

      
  </div>        
    </section>
  );
};

export default Publications;