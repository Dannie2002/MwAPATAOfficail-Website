import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";

const About_Us = () => {



  return (
    <section className="py-12 px-6 lg:px-22 min-h-screen">
      <h1 className="lg:text-[22px] text-[18px] uppercase barlow font-semibold text-orange">ABOUT US</h1>
      <div className="mt-2 w-[50px] h-[4px] bg-green "></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="lg:text-[48px] text-[32px] oswald max-w-3xl lg:leading-[56px] uppercase font-semibold text-grey ">
                <span className="text-orange">An independent</span> agricultural policy think tank in <span className="text-orange">Malawi</span>.
              </motion.h4>

       </div>   
      
        <div className="flex flex-col lg:h-[600px] lg:flex-row w-full lg:mt-22 bg-orange mt-10">
            <div className="flex lg:w-1/2">
                <img src={capacity} alt="capacity building" className="w-full h-full object-cover"/>
            </div>

            <div className="flex p-6 lg:p-12  flex-col items-start  lg:w-1/2">
            <div>
                <Mission size={40} color="#fffced" />
                    <h4 className="white mt-3 text-2xl mb-4 font-bold uppercase barlow ">Our Mision</h4>
                 <p className="lg:text-[18px] text-[16px] white lg:w-[500px] leading-relaxed">
              We conduct independent, objective and empirical high-quality research aimed at generating 
              innovative agricultural policy recommendations that improve decision-making and livelihoods in Malawi.
            </p>
            </div>

            <div className="mt-8">
                  <Vision size={40} color="#fffced" />
                    <h4 className="white mt-3 text-2xl mb-4 font-bold uppercase barlow ">Our Vision</h4>
                 <p className="lg:text-[18px] text-[16px] white lg:w-[500px] leading-relaxed">
              A Malawi with evidence-based agricultural policies that drive 
              sustainable development, food security, and improved livelihoods.
            </p>
            </div>
            
           
            </div>

           

            
        </div>





    </section>
  );
};

export default About_Us;