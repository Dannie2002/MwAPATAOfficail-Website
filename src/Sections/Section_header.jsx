import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import header from "../assets/Images/Capacity_building.JPG";



const Section_header = () => {



  return (
    <section className="h-screen">
       <div className="relative h-66 z-0 w-full flex flex-col items-start lg:px-22 justify-center" style={{backgroundImage: `url(${header})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                {/* overlay to apply blend mode */}
                <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply"></div>
                <div className="z-10">
                  <h1 className="text-[#fffced] barlow font-bold text-8xl">EVENTS</h1>
                </div>
      </div>
    </section>
  );
};

export default Section_header;