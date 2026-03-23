import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Newsletter.jpg";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import noise from "../assets/Images/Noise.png"
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { Download } from "lucide-react";
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

const Newsletter = [
  {
    id:1,
    title: "APRIL - JULY 2025 NEWSLETTER",
    image: capacity,
    file: "/newsletters/april-july-2025.pdf",
  },
   {
    id:2,
    title: "APRIL - JULY 2025 NEWSLETTER",
    image: capacity,
    file: "/newsletters/april-july-2025.pdf",
  },
     {
    id:3,
    title: "APRIL - JULY 2025 NEWSLETTER",
    image: capacity,
    file: "/newsletters/april-july-2025.pdf",
  }
];

  return (
    <section className="min-h-screen">
      
      <div className="flex flex-col  lg:items-start lg:justify-between py-0 px-6 lg:px-22  mt-10 lg:mt-18">
              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="Section_title">
                <span className="text-orange">An independent</span> agricultural policy think tank in <span className="text-orange">Malawi</span>.
              </motion.h4>
               


            <div className="flex flex-col lg:mt-28 w-full gap-8 mt-10 ">

              <div className="flex flex-col gap-6 lg:gap-8">
               {Newsletter.map((news,index) => (
                <div key={index.id} className="bg-transparent flex relative flex-col lg:flex-row items-center justify-between rounded-2xl p-6">
                

                <h2 className="Counter_title barlow">{news.title}</h2>
              
               
               
                 <div className="border lg:w-[320px] z-20 bg-transparent hover:bg-[var(--secondary-color)] flex transition-colors duration-500  mt-8 border-[var(--secondary-color)]">
                                   <div className="white flex items-center justify-center pr-6  gap-4 ">
                                     <div className="bg-green p-4">
                                       <Download className="white"/>
                                     </div>
                                    <h5 className="text-grey font-semibold">Download</h5> 
                                   </div>
                 </div>


                 </div>
                                      

                 

               ))}
                 
    <motion.div
                                           initial={{ opacity: 0, x: 80 }}
                                           whileInView={{ opacity: 1, x: 0 }}
                                           transition={{ duration: 1.99, ease: "easeInOut" }}
                                           className=" w-full relative h-[1.4px] mt-6 bg-green"></motion.div>
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