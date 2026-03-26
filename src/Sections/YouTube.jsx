import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/youtube.jpg";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import noise from "../assets/Images/Noise.png"
import DottedArrow from "./Icons/DottedArrow";


const YouTube= () => {

  return (
    <section className="min-h-[60vh] relative" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
       <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-color)] via-[#48ea5e] to-transparent opacity-90 "></div>
         <img src={noise} className="absolute h-full w-full z-0 opacity-20 inset-0"/>

      <div className="Section_wrapper">
        
      
        <div className="flex relative flex-col items-start justify-center " >
                       
                
                    <div className="flex z-10  barlow  lg:gap-6 flex-col items-start">
                      <div className="flex gap-4">
                        
                      <p className="text_para white"><span className="text-[#f08000] font-bold">Watch </span>videos of our various activities and research dissemination events.
 </p>
                      </div>
                      
                        
                    <h4 className="Section_title text-[107px] white leading-[87px]">SUBSCRIBE TO OUR</h4>
               <div className="relative">
<DottedArrow color="#ff0000" size={70} className="absolute lg:top-0 lg:left-0 left-52 bottom-0"  />
               </div>
               
                
                   
                    <div className="mt-6 flex flex-row  gap-6">
                    
                    <button className="bg-green clip lg:px-14 text-2xl py-4 px-6 text-[18px]  border-[#fffced] uppercase barlow font-semibold white">YOUTUBE CHANNEL</button>
                    </div>
                    </div>
    
        </div>




</div>
    </section>
  );
};

export default YouTube;