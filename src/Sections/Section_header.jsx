import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import header from "../assets/Images/Capacity_building.JPG";



const Section_header = () => {



  return (
    <section className="py-12 px-6 lg:px-22">
       <div className="relative z-0 h-44 w-full" style={{backgroundImage: `url(${header})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        
        
      </div>
    </section>
  );
};

export default Section_header;