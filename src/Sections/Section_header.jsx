import React from "react";
import header from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png"

const Section_header = ({ title, breadcrumbs = [],bgImage }) => {
  return (
    <div>
      <div  className="relative h-55 lg:h-66 w-full flex flex-col items-center lg:items-start lg:px-22 justify-center bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage})` }}
>{/* overlay to apply blend mode */}
     <div className="absolute flex z-5 inset-0 bg-gradient-to-t from-[var(--primary-color)] via-[#3A9B3D]/60 to-[#3A9B3D]/90 opacity-75"></div>
    <img src={noise} className="absolute h-full w-full z-0 opacity-20 inset-0"/>
        <div className="z-10">
          <h1 className="text-[#fffced] agdasima leading-[64px] font-bold text-[48px] uppercase lg:text-8xl">
            {title}
          </h1>
        </div>

        <nav className="absolute mx-auto bottom-0 z-20 pb-4 ">
          <ul className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li className="white text-[14px] barlow uppercase" key={index}>{item.label}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Section_header;