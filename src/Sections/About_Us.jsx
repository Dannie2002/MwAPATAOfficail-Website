import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png";
import about_mwapata from "../assets/Images/About_Mwapata.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import policy from "../assets/Images/Policy_advocacy.jpg";
import strategy1 from "../assets/Images/Strategy1.jpg";
import strategy2 from "../assets/Images/Strategy2.jpg";
import team from "../assets/Images/Team_Mwapata.jpg";
import strategy3 from "../assets/Images/Strategy3.jpg";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { Download, Gem } from "lucide-react";

const About_Us = () => {

    const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };


 const mission_vision = [
  {
    id: 1,
    displayTitle: "Our Mission",
    description: [
      "We conduct independent, objective and empirical high-quality research aimed at generating innovative agricultural policy recommendations that improve decision-making and livelihoods in Malawi.",
    ],
    icon: <Mission className="lg:size-10 size-10 "  color="#fffced" />,
  },
  {
    id: 2,
    displayTitle: "Our Vision",
    description: [
      "To be a sustainable, world-class, Malawian agriculture policy research think-tank.",
    ],
    icon: <Vision className="size-10"   color="#fffced" />,
  },
  {
    id: 3,
    displayTitle: "Core Values",
    isList: true,
    description: [
      "Professionalism", "Relevance", "Independence", "Mutual Respect", "Excellence", "Sustainability"
    ],
    icon: <Gem className="size-10 white"/>,
  }

];

  return (
    <section className="min-h-screen bg-[#f8ffef]">

    <div className="Section_wrapper">
       
      
      <div className="flex flex-col   lg:items-start lg:justify-between mt-10 lg:mt-18">
          
        <h1 className="Section_title ">WHO ARE WE</h1>
         


            <div className="Grid_4 lg:grid-cols-2">

          
          
              <div className="flex flex-col lg:flex-row gap-6">
                <h4 className="text_para leading-[28px] lg:w-1/2 text-[28px] lg:leading-[36px] lg:text-[36px] font-light archivo  text-grey ">
                  <span className="font-semibold">We are An</span> independent   <span className="">agricultural policy think tank in Malawi.</span>
                </h4>
                <div className="flex flex-col lg:w-1/2 gap-4">
                      <p className="text_para w-full lg:w-[90%]">
                        The Institute is engaging the Government of Malawi, private sector, and
                         civil society stakeholders in a program of 
                         applied policy analysis, policy outreach, capacity
                         building, and policy coordination.
                      </p>
                      
                        <h6 className="text-green uppercase font-semibold">Learn More</h6>
     
                      
                </div>   
              </div>
             
              <motion.div className="relative flex mt-0 items-end justify-end "
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.99, ease: "easeInOut" }}>
                <img src={team} alt="research" className="w-full clip h-[430px]  object-cover"/>
                 <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                
              </motion.div>
      
            
            </div>
               

       </div>   
      
        <div className="flex flex-col-reverse lg:flex-row lg:-mx-22 lg:mt-28 bg-[#f8ffef] mt-10">
            <div className="relative mt-10 lg:mt-0 flex lg:w-1/2" style={{backgroundImage: `url(${strategy2})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="flex lg:px-18 px-6 py-8 lg:py-12 flex-col gap-4 z-20">
                 <h4 className="Section_title white">
                   STRATEGIC PLAN
                </h4>
                <p className="white font-light lg:mt-8 text-[16px] lg:text-[18px]">In our 2026 - 2030 Strategic Plan, we are committing ourselves to 
                  conducting policy research with a view to guide agriculture productivity and 
                  commercialization now and in the future, and support the development of the National 
                  Transformation 2063 document.</p>

                  <p className="white font-light text-[16px] lg:text-[18px]">The Strategic Plan defines the direction to be taken in the short, medium and long 
                    terms and it provides direction on the Institutional and Research Development Agendas of MwAPATA.
                     Download the full document 
                    to learn more about our mission and how we go about making the changes we want to see.</p>

               
                  <div className="white flex border cursor-pointer transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] shadow-[0_6px_12px_rgba(221,115,10,0.4)]  border-[#fffced]/30 items-center justify-center rounded-[4px] backdrop-blur-2xl bg-[#fffced]/40 mt-6 w-fit px-6 py-3  gap-4 ">
                    <h5 className="white font-semibold">Download Our Strategic Plan</h5> 
                    <div className="">
                      <Download className="white size-5"/>
                    </div>
               </div>
            </div>

            
            
                
                <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                 <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--primary-color)]/70  via-[#3A9B3D]/70 to-[#3A9B3D]/90 opacity-100"></div>
            </div>

          <div className="grid lg:p-12 gap-12 grid-cols-1 lg:w-1/2">
          {mission_vision.map((item) => (
            <motion.div key={item.id} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-start flex-col gap-4">
                <motion.div variants={itemVariants} className="bg-[var(--secondary-color)] p-2 border backdrop-blur-2xl  border-[#fffced]/40 rounded-[4px] flex-center">
                  {item.icon}
                </motion.div>
              <motion.h4 variants={itemVariants} className="text-green mt-2 lg:mt-3 Card_heading ">
                {item.id === 3 ? item.displayTitle : item.displayTitle}
              </motion.h4>
                                 <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.69, ease: "easeInOut" }}
                                    className=" w-full relative h-[1.6px] bg-green">
                                  </motion.div>
              {item.isList ? (
                <motion.ul variants={itemVariants} className="grid grid-cols-2 gap-x-8 gap-y-3 lg:mt-8 mt-6">
                  {item.description.map((value, idx) => (
                    <li key={idx} className="text-grey text-[16px] lg:text-[18px] font-light leading-relaxed flex items-center gap-2">
                      <span className="text-green font-bold text-xl">•</span> {value}
                    </li>
                  ))}
                </motion.ul>
              ) : (
                item.description.map((line, idx) => (
                  <p key={idx} className="lg:text-[18px] font-light lg:mt-4 text-[16px] text-grey leading-relaxed">
                    {line}
                  </p>
                ))
              )}
            </motion.div>
              ))}
            </div>

           

            
        </div>




</div> 
    </section>
  );
};

export default About_Us;