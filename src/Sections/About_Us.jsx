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


 const mission_vision = [
  {
    id: 1,
    title: "Mission",
    description:
      "We conduct independent, objective and empirical high-quality research aimed at generating innovative agricultural policy recommendations that improve decision-making and livelihoods in Malawi.",
    icon: <Mission size={40} color="#fffced" />,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "A Malawi with evidence-based agricultural policies that drive sustainable development, food security, and improved livelihoods.",
    icon: <Vision size={40} color="#fffced" />,
  }

];

  return (
    <section className="min-h-screen">
      <h1 className="lg:text-[22px] text-[18px] uppercase barlow font-semibold text-orange">ABOUT US</h1>
      <div className="mt-2 w-[50px] h-[4px] bg-green "></div>
      <div className="flex flex-col  lg:items-start lg:justify-between py-0 px-6 lg:px-22  mt-10 lg:mt-18">
          
               


            <div className="flex flex-col lg:mt-28 mt-10 lg:flex-row">

              <div className="flex flex-col gap-8 lg:w-1/2">
              <h4 className="lg:text-[48px] text-[32px] bebas max-w-3xl lg:leading-[52px] uppercase font-bold text-grey ">Who We Are</h4>
              <p className="lg:text-[18px] text-grey text-[16px] lg:w-[470px] leading-relaxed">
                We are a team of <span className="text-green font-semibold">dedicated researchers</span> and policy experts committed to advancing agricultural development in Malawi through rigorous analysis and evidence-based recommendations.
              </p>

              <div className="flex items-center justify-start px-3 mt-12 py-3">
                <button className="bg-green clip lg:px-14  py-3 text-2xl px-6 text-[18px] border-[#AC6133] uppercase barlow font-semibold white">LEARN MORE</button>  
              </div>
              </div>

                <div className="relative flex lg:w-1/2">
                <img src={capacity} alt="research" className="w-full clip h-full object-cover"/>
                 <div className="absolute clip inset-0 bg-green opacity-60 mix-blend-multiply "></div>
                </div>
            
            </div>
               

       </div>   
      
        <div className="flex flex-col lg:h-[690px] lg:flex-row  lg:mt-28 bg-[#ac6133] mt-10">
            <div className="relative flex lg:w-1/2">
                <img src={capacity} alt="research" className="w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply"></div>
            </div>

          <div className="flex p-6 lg:p-18  lg:gap-4 flex-col items-start  lg:w-1/2">
          {mission_vision.map((item, index) => (
            <div key={item.id} className={index === 0 ? "" : "mt-8"}>
              <div className="p-6 ">{item.icon}</div>
              <h4 className="white mt-3 text-2xl mb-4 font-bold uppercase barlow ">
                {`Our ${item.title}`}
              </h4>
              <p className="lg:text-[18px] text-[16px] white lg:w-[470px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

           

            
        </div>





    </section>
  );
};

export default About_Us;