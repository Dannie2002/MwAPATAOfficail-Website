import React, { useRef } from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import speaker4 from "../../assets/Images/EminentSpeaker2.jpg";
import keynote_speaker from "../../assets/Images/Unknown_employee.jpg";
import event_header from "../../assets/Images/Event_header.jpg";
import noise from "../../assets/Images/Noise.png";
import { MapPinned, Clock, CalendarDays} from "lucide-react";
import Section_header from "../Section_header";


const MAAPC2023Event = () => {



const images = [
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,
  capacity,

];

const eventDetails = [
  { icon: CalendarDays, text: "30th-31st August 2023" },
  { icon: Clock, text: "17 JAN 2026" },
  { icon: MapPinned, text: "Bingu International Convention Centre, Lilongwe, Malawi" },
];

  return (
    <section className="min-h-screen bg-[#f7f9f6]">
         
      <Section_header
  title="Events"
  bgImage={event_header}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Events" }
  ]}
/>

    <div className="py-12 px-6 lg:px-22">
       
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title text-[#dd730a]">
                The 2023 Malawi Annual Agricultural  Productivity and Commercialization Conference
              </h4>

              <div className="flex lg:hidden flex-col items-start lg:items-end">
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
       <div className="flex flex-wrap w-full lg:flex-row items-center justify-start gap-3 lg:gap-14 mt-10">
         {eventDetails.map(({ icon: Icon, text }, index) => (
           <h4 key={index} className="uppercase  gap-4 flex items-center text-grey barlow font-semibold text-[14px]">
             <span className="text-green font-bold">
               <Icon className="size-5" />
             </span>
             {text}
           </h4>
         ))}
       </div>
        <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.99, ease: "easeInOut" }}
                                    className=" w-full relative h-[0.5px] mt-8 bg-green"></motion.div>
        
        <div className="flex flex-row gap-12 items-center justify-start">
                 <div className="flex items-center mt-6 lg:mt-10 gap-6">
          <h5 className="text-[var(--primary-color)] uppercase text-[22px] lg:text-[24px] agdasima">Guest of honor:</h5>
                               <img src={speaker4} alt="research" className="rounded-full size-[50px] object-cover"/>
                               <div className="flex flex-col ">
                                 <h6 className="uppercase  gap-4 flex items-center text-grey barlow font-semibold text-[18px]">Hon, Simplex Chithyola</h6>
                                 <p className="text-grey">Minister of Trade and Industry</p>
                               </div>
                             </div> 
                             

         <div className="flex items-center mt-6 lg:mt-10 gap-6">
          <h5 className="text-[var(--primary-color)] uppercase text-[22px] lg:text-[24px] agdasima">Keynote Speaker:</h5>
                               <img src={keynote_speaker} alt="keynote speaker" className="rounded-full size-[50px] object-cover"/>
                               <div className="flex flex-col ">
                                 <h6 className="uppercase  gap-4 flex items-center text-grey barlow font-semibold text-[18px]">Dr. Agnes Kalibata</h6>
                                 <p className="text-grey">President, Alliance for a Green Revolution in Africa</p>
                               </div>
                             </div> 
        </div>

                           

          <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.99, ease: "easeInOut" }}
                                    className=" w-full relative h-[1.6px] mt-8 bg-green"></motion.div>

            {/* a grid left and right event image*/}
          <div className="lg:mt-22 container mt-12 flex lg:flex-row flex-col gap-8">
            <div className="flex lg:w-1/2 float-left flex-col gap-8">
              <h4 className="Counter_title barlow">ABOUT <span className="font-semibold">THIS EVENT</span></h4>
               <h5 className="Card_heading text-[32px] leading-[32px] text-green">Diversified agricultural value chains for improved trade balances and foreign currency reserves</h5>
               
                  <p className="lg:text-[18px] font-light text-grey text-[16px] lg:w-[600px] leading-relaxed">
                  MwAPATA Research Analyst, Mr Lemekezani Kingston Chilora, participated in the Media Onboarding Meeting organised by AGRA-Sustainably Growing Africa’s Food, held at the Bingu International Convention Centre (BICC) in Lilongwe on 16th March 2026. 
                  </p>
                  <p className="lg:text-[18px] font-light text-grey text-[16px] lg:w-[600px] leading-relaxed">
                    The meeting aimed to strengthen the capacity of journalists from different districts and institutions to better understand AGRA’s mandate, strategic priorities, and country-level interventions in Malawi. 
                    In addition, the meeting aimed to build informed and long-term partnerships between AGRA plus its partners with the media as well as to enhance accurate and evidence-based reporting on agriculture and food systems, in order to increase the visibility of AGRA-supported initiatives that contribute to inclusive agricultural transformation.
                  </p>
                  <p className="lg:text-[18px] font-light text-grey text-[16px] lg:w-[600px] leading-relaxed">
                    Representing the MwAPATA institute, Mr Chilora delivered a 5-minute presentation pitch on the Enhancing Inclusive Youth-Led Platform for Evidence-based Agricultural policymaking and implementation in Malawi (LEAP4YOUTH Project), which the MwAPATA Institute is implementing in partnership with National Youth Council of Malawi (NYCOM), supported by AGRA.
                  </p>
              
                  <h6 className="font-light lg:text-[18px] text-[18px] text-grey lowercase">WATCH THE FULL EVENT <span className="text-green underline font-bold">HERE</span></h6>
            </div>
               {/* an image side*/}
              <div className=" lg:w-1/2 sticky float-right top-15 inline-block">
                <img src={event_header} alt="research" className="w-full h-[215px] lg:h-[430px] rounded-[4px] object-cover"/>
                  <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-[215px] lg:h-[430px] object-cover"/>
                  <div className="absolute clip inset-0 bg-green h-[215px] lg:h-[430px] opacity-20 mix-blend-multiply "></div>
              </div>
                 
          </div>

           <div className="mt-12 lg:mt-22">
            <h4 className="Counter_title barlow font-semibold">Key Documents and Links</h4>
            <div className="flex flex-col gap-4 mt-6">
              <p className="text_para font-semibold">Event Recording available <span className="text-green">here</span></p>
              <p className="text_para font-semibold">Event Report available <span className="text-green">here</span></p>
              <p className="text_para font-semibold">Presentation Slides available <span className="text-green">here</span></p>
            </div>
           
          </div>

                {/* event gallery section*/}
          <div className="mt-12 lg:mt-22">
            <h4 className="Counter_title barlow font-semibold">Event in pictures</h4>

            {/* pictures gallery*/}
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mt-12 space-y-6">
              {images.map((img, index) => (
              <div key={index} className="overflow-hidden h-[130px] rounded-[4px] shadow-md group cursor-pointer">
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

export default MAAPC2023Event;