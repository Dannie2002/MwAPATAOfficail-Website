import React, { useRef } from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import speaker4 from "../../assets/Images/EminentSpeaker2.jpg";
import keynote_speaker from "../../assets/Images/Unknown_employee.jpg";
import event_header from "../../assets/Images/Event_header.jpg";
import noise from "../../assets/Images/Noise.png";
import { MapPinned, Clock, CalendarDays} from "lucide-react";
import Section_header from "../Section_header.jsx";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../../Componets/ScrollVelocity.jsx";


const SeminalSeries = () => {



const images = [

  capacity,
  capacity,
  event_header,
  capacity,
  capacity,
  event_header,
  capacity,
  capacity,
  capacity,
  event_header,


];

const eventDetails = [
  { icon: CalendarDays, text: "11th - 12th September, 2024" },
  { icon: Clock, text: "17 JAN 2026" },
  { icon: MapPinned, text: "Bingu International Convention Centre, Lilongwe, Malawi" },
];

  return (
    <section className="Section_bg">
         
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
                MwAPATA-IFPRI Seminar Series
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

          
          <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.99, ease: "easeInOut" }}
                                    className=" w-full relative h-[1.6px] mt-8 bg-green"></motion.div>

            {/* a grid left and right event image*/}
          <div className="lg:mt-22 container mt-12 flex lg:flex-row flex-col gap-8">
            <div className="flex lg:w-1/2  flex-col gap-8">
              <h4 className="Counter_title barlow">ABOUT <span className="font-semibold">THIS EVENT</span></h4>
               <h5 className="Card_heading text-[32px] leading-[32px] text-green">Transforming Agri-food Systems to Generate Wealth for All</h5>
            </div>
                 
          </div>

 
    </div>       
    </section>
  );
};

export default SeminalSeries;