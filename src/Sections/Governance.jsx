import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import noise from "../assets/Images/Noise.png";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import employee1 from "../assets/Images/Employee1.jpg";
import employee2 from "../assets/Images/Employee2.jpg";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { Download, Gem } from "lucide-react";

const Governance = () => {


 const mission_vision = [
  {
    id: 1,
    title: "Mission",
    description:
      "We conduct independent, objective and empirical high-quality research aimed at generating innovative agricultural policy recommendations that improve decision-making and livelihoods in Malawi.",
    icon: <Mission className="size-12"  color="#fffced" />,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "To be a sustainable, world-class, Malawian agriculture policy research think-tank.",
    icon: <Vision className="size-12"   color="#fffced" />,
  }

];

    const programs = [
  {
    id: 1,
    name: "Mr. William Chadza",
    title: "Finance and Administration Manager",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    name: "Prof. Levison Chiwaula",
    title: "Research Director",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    name: "Ms. Mercy Chirwa",
    title: "Outreach Coordinator",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: employee1, 
  },
  {
    id: 4,
    name: "Mrs. Joyce Minofu",
    title: "Research Analyst",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: employee2,
  },
];

  return (
    <section className="min-h-screen">

    <div className="lg:px-12 ">
         
      
        <div className="flex flex-col lg:flex-row  lg:mt-28 bg-[#eee] mt-10">
            <div className="relative p-6 bg-orange flex lg:w-1/2">
            <div className="flex lg:px-18 py-12 flex-col gap-4 z-20">
                 <h4 className="bebas z-20 white mb-4 text-3xl">
                   MwAPATA Institute Governance
                </h4>
                <p className="white text-[16px] lg:text-[18px]">The Institute is guided by a Board of Directors and an Advisory Board, and backstopped 
                    by the Michigan State University Food Security Group. The Boards are made up of members from 
                    key stakeholders in the agricultural sector and balanced in terms of skills, knowledge and 
                    experience from the public sector,
                     private sector, civil society and development partners in the agricultural/agrifood system.</p>

                  <p className="white text-[16px] lg:text-[18px]">Please learn more from the MwAPATA Institute organogram showing the technical 
                    interaction/guidance provided by MSU Food Security Group and Advisory Board (dashed lines) as well
                     as management levels and reporting hierarchy (solid lines).</p>

              
            </div>

            
            
                
                <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                 <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply"></div>
            </div>

          <div className="grid p-6 lg:p-8  lg:gap-6 grid-cols-1 lg:grid-cols-2  lg:w-1/2">
          {mission_vision.map((item, index) => (
            <div key={item.id} className="flex items-start flex-col gap-4">
                <div className="bg-green p-4 rounded-[14px] flex-center">
                  {item.icon}
                </div>
              <h4 className="text-green  text-2xl  font-bold uppercase barlow ">
                {`Our ${item.title}`}
              </h4>
              <p className="lg:text-[18px] text-[16px] text-grey leading-relaxed">
                {item.description}
              </p>
            </div>
              ))}
            
            </div>

           

            
        </div>
        <div className="lg:mt-18 mt-8">
          <h4 className="heading Section_title">
            Directors & Advisory Board Members</h4>
        </div>
            {/* This is a grid for empployees card */} 
        <div className="lg:mt-18 mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div key={program} className="relative">
              <div className="relative h-[230px] lg:h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute inset-0 bg-green rounded-[4px] opacity-60 mix-blend-multiply"></div>

              </div>
                <div className="absolute lg:relative flex flex-col p-3 justify-end items-start inset-0 z-50">
                                  <div className="flex gap-4 items-center transition-all justify-end">
                                    <h4 className="Card_heading">{program.name}</h4>
                                     <motion.div
                                      initial={{ opacity: 0, x: 80 }} 
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 1.99, ease: "easeInOut" }}
                                   className="w-[40px]  h-[1.6px] lg:bg-[var(--secondary-color)] bg-[#fffced]">
                
                                   </motion.div>
                                   
                                  
                                  </div>
                                      
                                      <h4 className="lg:text-[var(--secondary-color)] text-[#fffced] lg:mt-3 mt-2 text-[18px] font-normal">{program.title}</h4>
                                </div>
            </div> 
             ))}
        </div>



    </div> 

    </section>
  );
};

export default Governance;