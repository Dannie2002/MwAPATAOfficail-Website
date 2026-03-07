import React from "react";
import {motion} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EventDetailed = () => {
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



  return (
    <section className="py-12 px-6 lg:px-22">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="head lg:text-[48px] text-[32px] oswald max-w-3xl lg:leading-[52px] uppercase font-bold text-grey ">
                Conducting evidence-based research to influence agricultural and development policies.
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


       <div className="flex flex-row items-center justify-start gap-12 mt-10">
         <h4 className="uppercase text-grey text-[16px] font-semibold"> <span className="text-orange  ">DATE:</span> 17 JAN 2026</h4>
         <h4 className="uppercase text-grey text-[16px] font-semibold"> <span className="text-orange  ">LOCATION:</span> CROSSROADS, BLANTYRE</h4>
       </div>
            
            <div className="bg-[#4a4a4a] lg:mt-4  w-full h-[0.3px]"></div>


                <div className="flex items-center justify-start flex-row gap-4 lg:mt-10">
                    <div className="bg-orange flex-center size-10 p-4 rounded-full">
                     <h2 className="white">A</h2>
                    </div>
                    
                    <div className="bg-orange flex-center size-10 p-4 rounded-full">
                     <h2 className="white">t</h2>
                    </div>
                 
                </div>
          
    </section>
  );
};

export default EventDetailed;