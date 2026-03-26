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
import { Download, Gem } from "lucide-react";
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
      
        <div className="flex flex-col  lg:flex-row  lg:-mx-22 lg:mt-28 bg-[#eaeee5] mt-10">
            <div className="relative flex flex-col lg:flex-row px-18 py-12 items-start justify-between lg:w-1/2">
            
                

                
                

                    
                        <div className="flex gap-4 lg:mt-12 z-20">
                        <h5 className="text-green  font-semibold Card_heading">Address: </h5>
                        <p className="text-grey">P.O Box 30883 <br /> Capital City <br /> Lilongwe 3 <br /> Malawi</p>
                        </div>

                        <div className="flex gap-4 mt-12 z-20">
                        <h5 className="text-green  font-semibold Card_heading">Email: </h5>
                        <p className="text-grey">info@mwapata.mw</p>
                        </div>
                    

              
            

            
            
                
                
            </div>

          <div className="grid p-6 lg:p-12 lg:p-8 gap-6 lg:gap-12  grid-cols-1  lg:w-1/2">
        
             
            </div>

           

            
        </div>




</div> 
    </section>
  );
};

export default Contact_Us;