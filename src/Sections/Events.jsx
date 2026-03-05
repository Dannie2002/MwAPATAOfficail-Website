import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";

const Events = () => {

    const events = [
  {
    id: 1,
    title: "MALAWI NATIONAL FOOD SYSTEMS TECHNICAL WORKING GROUP MEETING",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 JAN 2026",
    image: capacity,
  },
  {
    id: 2,
    title: "Dissemination Workshop for Two Food Systems Policy Briefs",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
      date: "07 FEB 2026",
    image: research,
  },
  {
    id: 3,
    title: "LEAP4YOUTH Project Conducts District Youth Engagement Meetings",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
      date: "17 JAN 2026",
   image: outreach, 
  }

];

  return (
    <section className="py-12 px-6 lg:px-22">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="lg:text-[48px] text-[32px] oswald max-w-3xl lg:leading-[52px] uppercase font-semibold text-grey ">
                <span className="text-orange">OUR</span> EVENTS OF INFLUENCE <span className="text-orange">AND </span>INSPIRATION.
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


       <div className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[480px]">
          {events.map(ev => (
            <div
              key={ev.id}
              className="relative rounded-[4px] z-0 shadow-3xl"
              style={{
                backgroundImage: `url(${ev.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* overlay to apply blend mode */}
              <div className="absolute rounded-[4px] inset-0 bg-green hover:opacity-85 opacity-60 mix-blend-multiply"></div>

              <div className="absolute bg-transparent z-10 flex flex-col items-start gap-3 justify-between bottom-0 p-8 w-full">
                <h4 className="barlow font-semibold white uppercase text-[22px]">
                  {ev.title}
                </h4>
                <div className="bg-[#ac6133] mt-4 px-4 rounded-[4px]">
                  <h4 className="white font-semibold text-[18px] ">{ev.date}</h4>
                </div>
              </div>
            </div>
          ))}
       </div>
          
    </section>
  );
};

export default Events;