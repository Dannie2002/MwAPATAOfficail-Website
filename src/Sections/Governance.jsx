import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png";
import research from "../assets/Images/Research.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import policy from "../assets/Images/Policy_advocacy.jpg";
import employee1 from "../assets/Images/Employee1.jpg";
import employee2 from "../assets/Images/Employee2.jpg";
import background from "../assets/Images/About_Mwapata.jpg"
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

    <div className="">


        <div className="flex flex-col lg:flex-row  lg:mt-28 bg-[#eee] mt-10">
            <div className="relative flex flex-col z-50 gap-6 p-12 bg-green lg:w-1/2">
            
                 <h4 className="Counter_title white z-20 font-semibold">Background</h4>
                 <p className="white z-20 text_para">Rural poverty, malnutrition, inequality and social exclusion remain major challenges in Malawi. It is widely understood that sustained agricultural productivity growth will be necessary to address these challenges, transform the economy, and raise living standards because of extensive forward and backward linkages between agriculture
                         and the rest of Malawi’s economy. We have a plan to attain the level of agricultural growth that can transform the country’s economy.</p> 

                     <div className="flex gap-4 mt-6 items-center">
                                           <h2 className="white z-20 font-semibold">Learn More</h2>
                                            <motion.div
                                                               initial={{ opacity: 0, x: 80 }}
                                                               whileInView={{ opacity: 1, x: 0 }}
                                                               transition={{ duration: 1.99, ease: "easeInOut" }}
                                                              className="mt-2 z-20 w-[45px] h-[1.6px] bg-[#fffced]"></motion.div>
                                            
                     </div> 
                <img src={noise} alt="research" className="absolute inset-0 w-full z-0 mix-blend-overlay opacity-30  clip h-full object-cover"/>
                <div className="absolute z-0 inset-0 bg-green opacity-60 mix-blend-multiply"></div>
           </div>

              <div className="lg:w-1/2">
              <img src={background} className=" grayscale size-full " />
              </div>  
 
        </div> 
      
       

      



      <div className="Section_wrapper">
        <div className="lg:mt-18 mt-8">
          <h4 className="heading Section_title">
            Directors & Advisory Board Members</h4>
       
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
                                  <div className="flex lg:mt-4 gap-4 items-center transition-all justify-end">
                                    <h4 className="Card_heading">{program.name}</h4>
                                     <motion.div
                                      initial={{ opacity: 0, x: 80 }} 
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 1.99, ease: "easeInOut" }}
                                   className="w-[40px]  h-[1.6px] lg:bg-[var(--secondary-color)] bg-[#fffced]">
                
                                   </motion.div>
                                   
                                  
                                  </div>
                                      
                                      <p className="lg:text-[var(--text-color)] text-[#fffced] lg:mt-3 mt-2 text-[18px] font-light">{program.title}</p>
                                </div>
            </div> 
             ))}
        </div>

        </div>
      </div>  

    </div> 

    </section>
  );
};

export default Governance;