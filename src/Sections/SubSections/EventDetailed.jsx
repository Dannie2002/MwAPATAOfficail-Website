import React from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.JPG";
import noise from "../../assets/Images/Noise.png";

const EventDetailed = () => {
const images = [
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,

];

  return (
    <section className="min-h-screen">
    <div className="py-12 px-6 lg:px-22">
       
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title">
                MwAPATA Participates in the AGRA Media Onboarding Meeting
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

           {/* EVENT LOCATION AND DATE*/}
       <div className="flex flex-wrap oswald  lg:flex-row items-center justify-start gap-2 lg:gap-12 mt-10">
         <h4 className="uppercase text-grey barlow font-sbold text-[14px] "> <span className="text-green font-bold ">DATE:</span> 17 JAN 2026</h4>
         <h4 className="uppercase text-grey barlow font-sbold text-[14px] "> <span className="text-green font-bold ">TIME:</span> 17 JAN 2026</h4>
         <h4 className="uppercase text-grey barlow font-sbold text-[14px] "> <span className="text-green font-bold ">LOCATION:</span> CROSSROADS, BLANTYRE</h4>
       </div>
            
          <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.99, ease: "easeInOut" }}
                                    className=" w-full relative h-[2.3px] mt-8 bg-green"></motion.div>

            {/* a grid left and right event image*/}
          <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
              <h4 className="Counter_title barlow">ABOUT <span className="font-semibold">THIS EVENT</span></h4>
              <p className="lg:text-[18px] font-light text-grey text-[16px] lg:w-[600px] leading-relaxed">
               MwAPATA Research Analyst, Mr Lemekezani Kingston Chilora, participated in the Media Onboarding Meeting organised by AGRA-Sustainably Growing Africa’s Food, held at the Bingu International Convention Centre (BICC) in Lilongwe on 16th March 2026. The meeting aimed to strengthen the capacity of journalists from different districts and institutions to better understand AGRA’s mandate, strategic priorities, and country-level interventions in Malawi. 


In addition, the meeting aimed to build informed and long-term partnerships between AGRA plus its partners with the media as well as to enhance accurate and evidence-based reporting on agriculture and food systems, in order to increase the visibility of AGRA-supported initiatives that contribute to inclusive agricultural transformation.


Representing the MwAPATA institute, Mr Chilora delivered a 5-minute presentation pitch on the Enhancing Inclusive Youth-Led Platform for Evidence-based Agricultural policymaking and implementation in Malawi (LEAP4YOUTH Project), which the MwAPATA Institute is implementing in partnership with National Youth Council of Malawi (NYCOM), supported by AGRA. 
                </p>
              
                <h4 className="font-light lg:text-[18px] text-[22px] text-grey lowercase">WATCH THE FULL EVENT <span className="text-green underline font-bold">HERE</span></h4>
            </div>
               {/* an image side*/}
              <div className="relative flex">
                <img src={capacity} alt="research" className="w-full h-[430px] rounded-[4px] object-cover"/>
                  <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-[430px] object-cover"/>
                  <div className="absolute clip inset-0 bg-green h-[430px] opacity-20 mix-blend-multiply "></div>
              </div>
                 
          </div>

                {/* event gallery section*/}
          <div className="mt-12 lg:mt-22">
            <h4 className="Counter_title barlow font-semibold">Event in pictures</h4>

            {/* pictures gallery*/}
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mt-12 space-y-6">
              {images.map((img, index) => (
              <div key={index} className="overflow-hidden h-[430px] rounded-[4px] shadow-md group cursor-pointer">
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

export default EventDetailed;