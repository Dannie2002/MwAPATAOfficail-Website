import React from "react";
import {motion} from "framer-motion";
import { useState } from "react";
import Section_header from '../Sections/Section_header'
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import events_mwapata from"../assets/Images/Event_Mwapata.jpg";
import noise from "../assets/Images/Noise.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Events = () => {
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

    const events = [
  {
    id: 1,
    title: "MALAWI NATIONAL FOOD SYSTEMS TECHNICAL WORKING GROUP MEETING",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 Jan 2026",
    image: capacity,
  },
  {
    id: 2,
    title: "Dissemination Workshop for Two Food Systems Policy Briefs",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
      date: "07 Feb 2026",
    image: research,
  },
  {
    id: 3,
    title: "LEAP4YOUTH Project Conducts District Youth Engagement Meetings",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
      date: "17 Mar 2026",
   image: outreach, 
  },
    {
    id: 4,
    title: "MALAWI NATIONAL FOOD SYSTEMS TECHNICAL WORKING GROUP MEETING",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 Jan 2026",
    image: capacity,
  }

];

  const [activeTab, setActiveTab] = useState("Recent Events");

  const tabs = [
    "Recent Events",
    "MAAPC",
    "Seminal Series",
    "Past Events",
  ];

  return (
    <section className="">
      <Section_header
  title="Events"
  bgImage={events_mwapata}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Events" }
  ]}
/>

      <div className="py-12 px-6 lg:px-22">

      

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title">
                <span className="text-orange">OUR</span> EVENTS OF INFLUENCE <span className="text-orange">AND </span>INSPIRATION.
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

<div className="flex gap-6 mt-12 flex-wrap lg:mt-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`lg:px-6 py-2 text-[18px] px-4 rounded-[3px] border barlow uppercase  transition-all duration-470
          ${
            activeTab === tab
              ? "bg-transparent z-20  text-green border-[1.3px]  border-b-[var(--secondary-color)]"
              : "text-grey bg-transparent border-[1.3px] border-[#4a4a4a] hover:bg-gray-100"
          }`}
        >
         
          {tab}
        </button>
      ))}
    </div>

{/*GRID FOR EVENT CARDS */}
       <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:auto-rows-[430px]">
          {events.map(ev => (
            <div key={ev.id} className="relative rounded-[14px] z-0 shadow-3xl">
               <div className="relative h-full overflow-hidden z-0 group shadow-3xl">
                <img src={ev.image} alt={ev.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                 {/* overlay to apply blend mode */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#323232] to-[#3A9B3D]/50  rounded-[4px] opacity-90 mix-blend-multiply"></div>
                </div>

              <div className="absolute bg-transparent z-10 flex flex-col items-start gap-3 justify-between bottom-0 p-8 w-full">
                <div className="mt-0  py-1 rounded-full">
                  <h4 className="white font-light barlow text-[16px] ">{ev.date}</h4>
                </div>
                <h4 className="Card_heading  white line-clamp-2">
                  {ev.title}
                </h4>
                
              </div>
            </div>
          ))}
       </div>
               <div className="flex items-start flex-wrap overflow-hidden mt-6  gap-4 lg:mt-12  transition ">
                                       <div className="p-2 size-12 group flex-center bg-green hover:bg-[var(--primary-color)]/60 duration-470">
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

export default Events;