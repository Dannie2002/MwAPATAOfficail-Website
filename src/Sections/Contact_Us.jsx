import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import noise from "../assets/Images/Noise.png";
import about_mwapata from "../assets/Images/About_Mwapata.jpg";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { Download, Gem, Mail, MapPinned, Phone} from "lucide-react";
import Section_header from "./Section_header";

const Contact_Us = () => {


 const mission_vision = [
  {
    id: 1,
    title: "Mission",
    description:
      "We conduct independent, objective and empirical high-quality research aimed at generating innovative agricultural policy recommendations that improve decision-making and livelihoods in Malawi.",
    icon: <Mission className="lg:size-10 size-10 "  color="#fffced" />,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "To be a sustainable, world-class, Malawian agriculture policy research think-tank.",
    icon: <Vision className="size-10"   color="#fffced" />,
  }

];

  return (
    <section className="min-h-screen">

              <Section_header
  title="Contact Us"
  bgImage={outreach}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Contact Us" }
  ]}
/>

    <div className="Section_wrapper">
       
      
              <h4 className="Section_title mt-6">
                   Mwapata Contact Details
                </h4>
      
        <div className="flex flex-col lg:flex-row  lg:-mx-22 lg:mt-28 bg-[#eaeee5] mt-10">
            <div className="relative flex flex-col px-18 py-12 items-start justify-start lg:w-1/2">
            
                

                
                

                    
                        <div className="flex gap-4 lg:mt-12 z-20">
                        <div className=""><MapPinned className="size-6 text-green"/> </div>
                        <p className="text-grey">P.O Box 30883 <br /> Capital City <br /> Lilongwe 3 <br /> Malawi</p>
                        </div>

                        <div className="flex gap-4 mt-12 z-20">
                        <div className=""><Mail className="size-6 text-green"/> </div>
                        <p className="text-grey">info@mwapata.mw</p>
                        </div>

                        <div className="flex gap-4 mt-12 z-20">
                        <div className=""><Phone className="size-6 text-green"/> </div>
                        <p className="text-grey">+265 887 403 004/005</p>
                        </div>
                    

              
            

            
            
                
                
            </div>

          <div className="grid p-6 lg:p-12 lg:p-8 gap-6 lg:gap-12  grid-cols-1  lg:w-1/2">
              <div className="flex z-20 flex-col gap-12">
                       <h4 className="text-[17.5px] font-semibold text-green ">Please complete the following form and we will contact you as soon as possible</h4>
                    

                    <input type="email" placeholder="Enter your Name" className="px-6 py-3 outline-none border-[0.8px] text-grey  border-[var(--text-color)] rounded-l-[4px]  lg:w-[470px]"/>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter your Phone Number" className="px-6 focus:border-green focus:shadow-[0_2px_0_0_rgba(211,107,84,0.5)] transition duration-300 placeholder:text-[var(--text-color)]/60 outline-none py-3 border-[0.8px] text-grey  border-[var(--text-color)]  rounded-l-[4px]  lg:w-[470px]"/>
                    <textarea placeholder="Enter your Comment" rows="4" className="px-6 outline-none placeholder:text-[var(--text-color)]/60 py-3 border-[0.8px] white border-[var(--text-color)] rounded-l-[4px]  lg:w-[470px]"/>
                    <button className="bg-orange clip lg:px-6 text-2xl px-6 py-6 text-[18px] w-[220px]  border-[#AC6133] uppercase barlow font-semibold white">Submit Comment</button>
                    </div>
             
            </div>

           

            
        </div>




</div> 
    </section>
  );
};

export default Contact_Us;