import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";

const Newsletter = () => {


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
              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="lg:text-[48px] text-[32px] oswald max-w-[550px]  max-w-3xl lg:leading-[56px] uppercase font-bold text-grey ">
                <span className="text-orange">An independent</span> agricultural policy think tank in <span className="text-orange">Malawi</span>.
              </motion.h4>
               


            <div className="flex flex-col lg:mt-28 mt-10 lg:flex-row">

              <div className="flex flex-col gap-8 lg:w-1/2">
              <h4 className="font-bold text-[26px] uppercase text-orange oswald">Who We Are</h4>
              <p className="lg:text-[18px] text-grey text-[16px] lg:w-[470px] leading-relaxed">
                We are a team of <span className="text-green font-semibold">dedicated researchers</span> and policy experts committed to advancing agricultural development in Malawi through rigorous analysis and evidence-based recommendations.
              </p>

              <div className="px-14 mt-12 py-4 w-[280px] bg-green">
                <h4 className="font-bold text-[26px] uppercase white oswald">What We Do</h4>   
              </div>
              </div>

                <div className="relative flex lg:w-1/2">
                <img src={capacity} alt="research" className="w-full h-full rounded-3xl object-cover"/>
                 <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply rounded-3xl"></div>
                </div>
            
            </div>
               

       </div>   
      
        <div className="flex relative  flex-col items-start justify-center lg:h-[500px] lg:mt-28 bg-[#ac6133] mt-10" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                 <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply"></div>
                    <div className="flex z-10  p-6 lg:px-22 barlow  lg:gap-4 flex-col items-start">
                    <h4 className="white font-bold w-[500px] leading-[48px] text-[48px] uppercase">STAY INFORMED AND SUBSCRIBE TO OUR NEWSLETTER</h4>
                    <div className="mt-12 flex flex-col lg:flex-row gap-4">
                    <input type="email" placeholder="Enter your email" className="p-4 border-2 border-[#fffced] rounded-l-[4px] w-[250px]"/>
                    <button className="bg-orange p-4 rounded-r-[4px] text-white">Subscribe</button>
                    </div>
                    </div>
            


            
        </div>





    </section>
  );
};

export default Newsletter;