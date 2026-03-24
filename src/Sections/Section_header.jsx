import React from "react";
import header from "../assets/Images/Capacity_building.JPG";
import noise from "../assets/Images/Noise.png"

const Section_header = ({ title, breadcrumbs = [],bgImage }) => {
  return (
    <div>
      <div  className="relative h-55 lg:h-66 w-full flex flex-col items-center lg:items-start lg:px-22 justify-center bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage})` }}
>{/* overlay to apply blend mode */}
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-color)] via-[#48ea5e] to-transparent opacity-90 "></div>
    <img src={noise} className="absolute h-full w-full z-0 opacity-20 inset-0"/>
        <div className="z-10">
          <h1 className="text-[#fffced] oswald font-bold text-[74px] uppercase lg:text-8xl">
            {title}
          </h1>
        </div>

        <nav className="absolute mx-auto bottom-0 z-20 pb-4 ">
          <ul className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li className="white uppercase" key={index}>{item.label}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Section_header;