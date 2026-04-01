import React from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import speaker4 from "../../assets/Images/EminentSpeaker2.jpg";
import noise from "../../assets/Images/Noise.png";
import speaker_series from "../../assets/Images/Speaker_series.jpg";
import EminentSpeaker from "../EminentSpeaker";
import Section_header from "../Section_header";
import { MapPinned, Clock, CalendarDays} from "lucide-react";

const EminentSpeakerDetailed = () => {
const images = [
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,

];

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
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };

const EminentSpeakerDetails = [
  { icon: CalendarDays, text: "17 JAN 2026" },
  { icon: Clock, text: "17 JAN 2026" },
  { icon: MapPinned, text: "CROSSROADS, BLANTYRE, Malawi" },
];

  return (
    <section className="Section_bg">

            <Section_header
  title="Eminent Speaker Series"
   bgImage={speaker_series}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Events" }
  ]}
/>

      <div className="Section_wrapper">

     
      
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title">                
                    The 7th Ndizotheka Eminent Speaker Series:
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


       <motion.div  variants={containerVariants}  
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }} className="flex flex-wrap w-full lg:flex-row items-center justify-start gap-3 lg:gap-14 mt-10">
               {EminentSpeakerDetails.map(({ icon: Icon, text }, index) => (
                 <motion.h4 key={index} variants={itemVariants} className="uppercase  gap-4 flex items-center text-grey barlow font-semibold text-[14px]">
                   <motion.span variants={itemVariants} className="text-green font-bold">
                     <Icon className="size-5" />
                   </motion.span>
                   {text}
                 </motion.h4>
               ))}
             </motion.div>
            
             <motion.div
                                      initial={{ opacity: 0, x: 80 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 1.99, ease: "easeInOut" }}
                                      className=" w-full relative h-[1.5px] mt-4 bg-green"></motion.div>


        
          <div className="Grid_4 grid-cols-2">

            <div className="flex flex-col w-[90%] gap-4">
          
              <p className="Counter_title text-[32px] text-green barlow font-semibold leading-[32px] w-full">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>
              
              
                 <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[50px] h-[4px] bg-green"></motion.div>
                <p className="lg:text-[18px] text-grey font-light text-[16px]">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>
              <p className="lg:text-[18px] font-light text-grey text-[16px]">
                Surmounting Soil Health Challenges:  Practical Solutions for Enhancing Agricultural Productivity in line with MW2063 Aspirations.
              </p>

              <div>
                <p className="text_para font-semibold">Event Recording available <span className="text-green">here</span></p>
              </div>
               
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 w-full">
                <img src={speaker4} alt="research" className="rounded-[4px] w-full h-[430px] object-cover"/>
                 
                </div>
              <div className="flex mt-6 lg:mt-0 flex-col gap-4 lg:w-1/2">
                <h4 className="Counter_title text-[var(--primary-color)] text-[24px] agdasima">ABOUT SPEAKER:</h4>
                <h4 className="Counter_title text-[22px] text-green font-semibold leading-[32px] ">Mr JONATHAN SAID</h4>
                <p className="text-grey font-light">Research Professor of Tropical Soils, Soil and Water Sciences Department, University of Florida</p>
                <div className="optional">
                  <h4 className="Counter_title text-[var(--primary-color)] text-[24px] agdasima">PANELISTS</h4>
                  <div className="Grid_4 mt-0 grid-cols-2">
                      <div className="flex flex-col mt-4 gap-4">
                        <img src={speaker4} alt="research" className="rounded-full size-[50px] object-cover"/>
                        <div className="flex flex-col ">
                          <h4 className="">Dr. Allan Banda</h4>
                          <p className="text-grey">Research Analyst</p>
                        </div>
                      </div> 
                      <div className="flex flex-col mt-4 gap-4">
                        <img src={speaker4} alt="research" className="rounded-full size-[50px] object-cover"/>
                        <div className="flex flex-col ">
                          <h4 className="">Dr. Allan Banda</h4>
                          <p className="text-grey">Research Analyst</p>
                        </div>
                      </div> 
                     
                  </div>
                </div>
                
               </div>
                  
            </div>

                
                 
          </div>







                <div className="mt-12">
                 <h4 className="font-bold lg:text-[32px] text-[32px] uppercase text-grey font-light oswald">Event in pictures</h4>

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-0 mt-12 space-y-6">
              {images.map((img, index) => (
              <div key={index} className="overflow-hidden h-[130px] grayscale shadow-md group cursor-pointer">
                <img
                  src={img}
                  alt="Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              ))}
            </div>
                </div>

     </div>            
          
    </section>
  );
};

export default EminentSpeakerDetailed;