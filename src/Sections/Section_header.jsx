import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import header from "../assets/Images/Capacity_building.JPG";



const Section_header = () => {



  return (
    <section className="h-screen">
       <div className="relative h-66 z-0 w-full flex flex-col items-start lg:px-22 justify-center" style={{backgroundImage: `url(${header})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                {/* overlay to apply blend mode */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C95B19] via-[#EA8548] to-transparent opacity-90 "></div>
                <div className="z-10">
                  <h1 className="text-[#fffced] barlow font-bold text-8xl">EVENTS</h1>
                </div>
                <nav className="absolute bottom-0 left-0 right-0 z-20 px-6 py-4 lg:px-22">
                  <ul className="flex items-center gap-2">
                    <li>
                      <a href="/" className="text-[#fffced] hover:text-[#EA8548] transition-colors">Home</a>
                    </li>
                    <li className="text-[#fffced]">/</li>
                    <li>
                      <span className="text-[#fffced]">Events</span>
                    </li>
                  </ul>
                </nav>
      </div>
    </section>
  );
};

export default Section_header;