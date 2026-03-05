import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";

const Programmes = () => {
  return (
    <section className="py-12 px-6 lg:px-22">
      <h1 className="lg:text-[22px] text-[18px] uppercase barlow font-semibold text-orange">Programmes</h1>
      <div className="mt-2 w-[50px] h-[4px] bg-green "></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="lg:text-[48px] text-[32px] oswald max-w-4xl lg:leading-[52px] uppercase font-semibold text-grey ">
                <span className="text-orange">RECOGNIZING </span>THE ENORMITY OF THE CHALLENGES <span className="text-orange">OUR </span>SOCIETY FACES.
              </motion.h4>

              <div className="flex flex-col items-start lg:items-end">
                  <div className="mt-2 w-[90px] h-[4px] bg-green "></div>
                  <div className="mt-2 w-[50px] h-[4px] bg-orange"></div>
              </div>
      </div>
        <diV className="lg:mt-22 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[480px]">
            <div className="relative" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
              <h4>grid 1</h4>
             <div className="absolute bg-green flex flex-row items-center justify-between bottom-0 p-4 w-full">
              <h4 className="barlow font-semibold white uppercase text-[22px]">Capacity Building</h4>
              <RightArrow size={28} color="#fffced" />
              </div>
            </div>
            <div className="bg-orange">
              <h4>grid 2</h4>
             
            </div>
            <div className="bg-orange">
              <h4>grid 3</h4>
             
            </div>
            <div className="bg-orange">
              <h4>grid 4</h4>
             
            </div>
       </diV>
    </section>
  );
};

export default Programmes;