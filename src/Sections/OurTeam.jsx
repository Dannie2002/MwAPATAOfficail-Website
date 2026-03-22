import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import employee1 from "../assets/Images/Employee1.jpg";
import employee2 from "../assets/Images/Employee2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section_header from "./Section_header";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OurTeam = () => {

useGSAP(() => {
  gsap.from(".heading", {
    y: 100,
    opacity: 0,
    duration: 0.95,
    scrollTrigger: {
      trigger: ".heading",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      ease: "power1.inOut",
    }
  });
}, []); 

    const programs = [
  {
    id: 1,
    name: "Mr. William Chadza",
    title: "Finance and Administration Manager",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    name: "Prof. Levison Chiwaula",
    title: "Research Director",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    name: "Ms. Mercy Chirwa",
    title: "Outreach Coordinator",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: employee1, 
  },
  {
    id: 4,
    name: "Mrs. Joyce Minofu",
    title: "Research Analyst",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: employee2,
  },
];

  return (
    <section className="py-12 min-h-screen">
      <Section_header
  title="Our Team"
  bgImage={research}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Our Team" }
  ]}
/>
      <div className="section-wrapper px-6 lg:px-12">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-5 lg:mt-18">
              <h4            
                className="heading Section_title">
                <span className="text-orange">MEET</span> OUR TEAM.
              </h4>
               {/* Two Lines on the right */} 
              <div className="flex flex-col mt-5 items-start lg:items-end">
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
             {/* This is a grid for empployees card */} 
        <div className="lg:mt-18 mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div key={program} className="relative">
              <div className="relative h-[230px] lg:h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute inset-0 bg-green rounded-[4px] opacity-60 mix-blend-multiply"></div>

              </div>
                <div className="absolute lg:relative flex flex-col p-3 justify-end items-start inset-0 z-50">
                      <h4 className="bebas text-[#fffced] lg:text-[var(--text-color)] uppercase text-[22px]">{program.name}</h4>
                      <h1 className="p-0 white  lg:mt-3 mt-2 text-grey text-[18px] font-light">{program.title}</h1>
                </div>
            </div> 
             ))}
        </div>
    </div>
    </section>
  );
};

export default OurTeam;