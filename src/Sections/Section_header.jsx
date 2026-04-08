import React from "react";
import {motion} from "framer-motion";
import header from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png"

const Section_header = ({ title, breadcrumbs = [],bgImage }) => {
  return (
    <div>
      <div
  

      className="relative h-55 lg:h-[330px] w-full flex flex-col items-center lg:items-start lg:px-22 justify-center bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage})` }}
>{/* overlay to apply blend mode */}
    <div className="absolute flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]/50 via-[#3A9B3D]/90 to-[#3A9B3D]/90 opacity-75"></div>
    <img src={noise} className="absolute h-full w-full z-0 opacity-20 inset-0"/>
        <motion.div
        initial={{ opacity: 0, x: -190 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.45, ease: "easeInOut" }}
        
        className="z-10">
          <h1 className="text-[#fffced] barlow leading-[64px] font-bold text-[48px] uppercase lg:text-6xl">
            {title}
          </h1>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: -190 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.45, delay: 0.2, ease: "easeInOut" }}
        
        
        className="absolute mx-auto bottom-0 z-20 pb-4 ">
          <ul className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li className="white text-[14px] archivo uppercase" key={index}>{item.label}</li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Section_header;