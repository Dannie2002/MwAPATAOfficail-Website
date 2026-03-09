import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Newsletter.jpg";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import DottedArrow from "./Icons/DottedArrow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Newsletter = () => {

  useGSAP(() => {
  gsap.from(".head", {
    y: 100,
    opacity: 0,
    duration: 0.95,
    scrollTrigger: {
      trigger: ".head",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      ease: "power1.inOut",
    }
  });
});

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
                className="lg:text-[48px] lg:w-[600px] text-[32px] bebas max-w-3xl lg:leading-[52px] uppercase font-bold text-grey">
                <span className="text-orange">An independent</span> agricultural policy think tank in <span className="text-orange">Malawi</span>.
              </motion.h4>
               


            <div className="flex flex-col lg:mt-28 w-full gap-8 mt-10 ">

          



              <div className="flex flex-col gap-6 lg:gap-8">
               
              <div className="bg-green flex flex-row items-center justify-between rounded-2xl p-6">
                 <div className="size-48">
                  <img src={capacity} className="h-full w-full bg-no-repeat object-cover bg-center" />
                </div>
                <div>
                   <h2 className="white uppercase font-bold oswald text-[24px] lg:text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase white ">Download</h4>
                </div>
               
              </div>

               <div className="bg-transparent border-[0.8px] border-[#4a4a4a] flex flex-col rounded-2xl p-6">
                <h2 className="text-grey uppercase font-bold oswald text-[24px] lg:text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase text-green">Download</h4>
              </div>

              <div className="bg-transparent border-[0.8px] border-[#4a4a4a] flex flex-col rounded-2xl p-6">
                <h2 className="text-grey uppercase font-bold oswald text-[24px] lg:text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase text-green">Download</h4>
              </div>
              <div className="bg-transparent border-[0.8px] border-[#4a4a4a] flex flex-col rounded-2xl p-6">
                <h2 className="text-grey uppercase font-bold oswald text-[24px] lg:text-[36px]">APRIL - JULY 2025 NEWSLETTER</h2>
                <h4 className="mt-2 barlow font-semibold uppercase text-green">Download</h4>
              </div>
             
              </div>

               
            
            </div>
               

       </div>   
      
        <div className="flex relative rounded-2xl flex-col items-start justify-center h-full lg:h-[650px] lg:mt-28 bg-[#ac6133] mt-10" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                  <div className="absolute rounded-2xl  inset-0 bg-gradient-to-r from-[#000000] via-[#3A9B3D]/60 to-[#3A9B3D]/50 opacity-95 "></div>
                    <div className="flex z-10  p-8 lg:px-22 barlow  lg:gap-6 flex-col items-start">
                      <div className="flex gap-4 flex-center">
                            <div className="h-full w-[2.6px] bg-green"></div>
                      <p className="white text-[20px] lg:text-[18px] w-[220px] lg:w-[450px]"><span className="text-[#EA8548] font-bold">Subscribe </span>to our newsletter to receive valuable resources,
                         event announcements, and expert perspectives 
                        delivered straight to your inbox.</p>
                        </div>
                    <h4 className="head white bebas font-extrabold mt-6 text-[48px] w-[200px] leading-[48px] lg:w-[500px] lg:leading-[98px] lg:text-[98px] uppercase">SUBSCRIBE <br></br>NOW</h4>
               <div className="relative">
<DottedArrow color="#fffced" size={70} className="absolute lg:top-0 lg:left-0 left-52 bottom-0"  />
               </div>
               
                
                   
                    <div className="mt-12 flex w-full flex-col lg:flex-row  gap-6">
                    <input type="email" placeholder="Enter your email" className="px-6 py-3 border-[0.8px] white  border-[#fffced] rounded-l-[4px]  lg:w-[470px]"/>
                    <button className="bg-green clip lg:px-14 text-2xl px-6 text-[18px] border-[#AC6133] uppercase barlow font-semibold white">Subscribe</button>
                    </div>
                    </div>
            


            
        </div>





    </section>
  );
};

export default Newsletter;