import React from "react";
import header from "../assets/Images/Capacity_building.JPG";

const Section_header = ({ title, breadcrumbs = [],bgImage }) => {
  return (
    <div>
      <div
  className="relative h-55 lg:h-66 w-full flex flex-col items-center lg:items-start lg:px-22 justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${header})` }}
>{/* overlay to apply blend mode */}
 <div className="absolute inset-0 bg-gradient-to-r from-[#C95B19] via-[#EA8548] to-transparent opacity-90 "></div>
        <div className="z-10">
          <h1 className="text-[#fffced] oswald font-bold text-[74px] uppercase lg:text-8xl">
            {title}
          </h1>
        </div>

        <nav className="absolute mx-auto bottom-0 z-20  py-4 ">
          <ul className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li className="white" key={index}>{item.label}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Section_header;