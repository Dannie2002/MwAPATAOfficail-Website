import React from "react";
import {motion} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import capacity from "../../assets/Images/Capacity_building.JPG";
import { useGSAP } from "@gsap/react";
import noise from "../../assets/Images/Noise.png";

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
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title">
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
              <h4 className="Counter_title">ABOUT <span className="font-semibold">THIS EVENT</span></h4>
              <p className="lg:text-[18px] font-light text-grey text-[16px] lg:w-[500px] leading-relaxed">
                As part of the process of institutionalizing youth-led agri-food systems platforms in the LEAP4YOUTH Project, 
                MwAPATA, in partnership with the National Youth Council of Malawi (NYCOM), with support from AGRA, conducted a 
                district policy clinic with youth networks in Mchinji and an Agri-Skills Lab for youths in Zomba. The Mchinji Policy 
                Clinic was held at Mchinji Community Hall from 2nd to 3rd February 2026, while the Zomba Agri-Skills Lab was held at Zomba Community Stadium Hall from 6th to 7th February 2026.
                </p>
              
                <h4 className="font-light lg:text-[18px] text-[32px] text-grey lowercase">WATCH THE FULL EVENT <span className="text-green font-bold">HERE<span> <motion.div
                                                            initial={{ opacity: 0, x: 80 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 1.99, ease: "easeInOut" }}
                                                           className="mt-2 w-[45px] h-[1.6px] bg-green"></motion.div></span></span></h4>
            </div>
               {/* an image side*/}
              <div className="relative flex">
                <img src={capacity} alt="research" className="w-full h-full rounded-[4px] object-cover"/>
                  <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                  <div className="absolute clip inset-0 bg-green opacity-20 mix-blend-multiply "></div>
              </div>
                 
          </div>

                {/* event gallery section*/}
          <div className="mt-12 lg:mt-22">
            <h4 className="Counter_title">Event in pictures</h4>

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