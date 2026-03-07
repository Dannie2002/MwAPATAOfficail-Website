import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
 gsap.registerPlugin(useGSAP, SplitText);

const Newsletter = () => {

useGSAP(() => {
  const heroSplit = new SplitText(".head", { type: "lines, words, chars" });
  gsap.from(heroSplit.chars, {
    opacity: 0,
    y: 50,
    ease: "power4.out",
    duration: 1,
    stagger: 0.05,
    delay: 0.5
  });
}, []);

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
      
      <div className="flex flex-col  lg:items-start lg:justify-between py-0 px-6 lg:px-22  mt-10 lg:mt-18">
              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="lg:text-[48px] text-[32px] oswald max-w-[650px]  max-w-3xl lg:leading-[56px] uppercase font-bold text-grey ">
                <span className="text-orange">An independent</span> agricultural policy think tank in <span className="text-orange">Malawi</span>.
              </motion.h4>
               


            <div className="flex flex-col lg:mt-28 w-full gap-8 mt-10 lg:flex-row">

             <div className="relative flex h-88 lg:w-1/2">
               
                <img src={capacity} alt="research" className="w-full h-full rounded-3xl object-cover"/>
                 
                
            </div>



              <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2">
              <div className="bg-green flex flex-col rounded-2xl p-6">
                <h2 className="white uppercase font-bold oswald text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase white ">Download</h4>
              </div>

               <div className="bg-transparent border-[0.8px] border-[#4a4a4a] flex flex-col rounded-2xl p-6">
                <h2 className="text-grey uppercase font-bold oswald text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase text-green">Download</h4>
              </div>

              <div className="bg-transparent border-[0.8px] border-[#4a4a4a] flex flex-col rounded-2xl p-6">
                <h2 className="text-grey uppercase font-bold oswald text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase text-green">Download</h4>
              </div>
              <div className="bg-transparent border-[0.8px] border-[#4a4a4a] flex flex-col rounded-2xl p-6">
                <h2 className="text-grey uppercase font-bold oswald text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase text-green">Download</h4>
              </div>
             
              </div>

               
            
            </div>
               

       </div>   
      
        <div className="flex relative  flex-col items-start justify-center lg:h-[550px] lg:mt-28 bg-[#ac6133] mt-10" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                 <div className="absolute inset-0 bg-green opacity-60 "></div>
                    <div className="flex z-10  p-6 lg:px-22 barlow  lg:gap-6 flex-col items-start">
                      <p className="white">We always have most recent information on reseach</p>
                    <h4 className="head white oswald font-bold w-[500px] leading-[88px] text-[88px] uppercase">SUBSCRIBE NOW</h4>
                    <div className="mt-12 flex flex-row  gap-6">
                    <input type="email" placeholder="Enter your email" className="px-6 py-4 border-[0.8px]   border-[#fffced] rounded-l-[4px] w-[470px]"/>
                    <button className="bg-[#ac6133] px-14 text-2xl  border-[#AC6133] uppercase barlow font-semibold white">Subscribe</button>
                    </div>
                    </div>
            


            
        </div>





    </section>
  );
};

export default Newsletter;