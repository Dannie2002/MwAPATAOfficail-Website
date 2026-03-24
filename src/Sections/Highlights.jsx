import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import event1 from "../assets/Images/Event1.jpg";
import research from "../assets/Images/Research.JPG";
import employee1 from "../assets/Images/Employee1.jpg";
import employee2 from "../assets/Images/Employee2.jpg";
import team from "../assets/Images/Team_Mwapata.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section_header from "./Section_header";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Highlights = () => {

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
    Title: "MwAPATA Participates in the AGRA Media Onboarding Meeting ",
    Category: "News Updates",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: event1,
  },
  {
    id: 2,
    Title: "Prof. Levison Chiwaula",
    Category: "Events",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    Title: "MwAPATA participates in the Commodity Platforms Capacity Strengthening Workshop and Learning Visit",
    Category: "Publications",
    description:
      "MwAPATA participates in the Commodity Platforms Capacity Strengthening Workshop and Learning Visit",
   image: employee1, 
  },
  {
    id: 4,
    Title: "Mrs. Joyce Minofu",
    Category: "News Updates",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: employee2,
  },
];

  return (
    <section className=" min-h-screen">

      <div className="Section_wrapper ">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-5 lg:mt-18">
              <h4            
                className="Section_title">
                HIGHLIGHTS
              </h4>
               {/* Two Lines on the right */} 
              <div className="flex flex-col mt-12 items-start lg:items-end">
                  <button className="Counter_title w-fit border">VIEW ALL UPDATES</button>
              </div>
      </div>
             {/* This is a grid for empployees card */} 
        <div className="Grid_4">
          {programs.map((program) => (
            <div key={program} className="relative">
              <div className="relative h-[230px] lg:h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 mix-blend-multiply"></div>

              </div>

                <div className="absolute  flex flex-col p-4 justify-between items-start inset-0 z-50">
                    <h5 className="lg:text-[var(--text-color)] white text-[#fffced] lg:mt-3 mt-2 text-[18px] font-light">{program.Category}</h5>
                  <div className="flex lg:mt-4 gap-4 items-center transition-all justify-end">
                    <h4 className="Card_heading  white line-clamp-2">{program.Title}</h4>
                     <motion.div
                      initial={{ opacity: 0, x: 80 }} 
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.99, ease: "easeInOut" }}
                   className="w-[40px]  h-[1.6px] lg:bg-[var(--secondary-color)] bg-[#fffced]">

                   </motion.div>
                   
                  
                  </div>
                 
                </div>
            </div> 
             ))}
        </div>
            <div className="flex items-start flex-wrap overflow-hidden  gap-4 lg:mt-12  transition ">
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

export default Highlights;