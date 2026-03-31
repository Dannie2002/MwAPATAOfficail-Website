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
import strategy3 from "../assets/Images/Strategy3.jpg";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { Download, Gem } from "lucide-react";

const About_Us = () => {


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
    <section className="min-h-screen bg-[#f8ffef]">

    <div className="Section_wrapper">
       
      
      <div className="flex flex-col   lg:items-start lg:justify-between mt-10 lg:mt-18">
          
        <h1 className="Page_title font-bold barlow  text-2xl ">WHO ARE WE</h1>
            <motion.div
                          initial={{ opacity: 0, x: 80 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1.99, ease: "easeInOut" }}
                          className="w-full relative h-[1.5px] mt-2 bg-green"
                        ></motion.div>


            <div className="flex flex-col w-full gap-18 lg:mt-18 mt-10 lg:flex-row">

              <div className="flex flex-col gap-0 lg:w-1/2">
          
              <div className="flex flex-col gap-6">
                <h4 className="Counter_title leading-[42px] text-green text-[42px] archivo lg:leading-[48px] lg:text-[48px] lowercase">
                  <span className="font-semibold">We are An</span> independent <br />  <span className="">agricultural policy<br />  think tank in Malawi.</span>
                </h4>
                <div className="flex flex-col gap-4">
                      <p className="text-wrap lg:text-[18px] font-light lg:mt-4 text-grey text-[18px] lg:w-[560px] leading-relaxed">
                        The Institute is engaging the Government of Malawi, private sector, and
                         civil society stakeholders in a program of 
                         applied policy analysis, policy outreach, capacity
                         building, and policy coordination.
                      </p>
                      <div className="flex gap-4 mt-6 items-center">
                        <h6 className="text-green uppercase font-semibold">Learn More</h6>
                         <motion.div
                                            initial={{ opacity: 0, x: 80 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1.99, ease: "easeInOut" }}
                                           className="mt-2 w-[45px] h-[1.6px] bg-green"></motion.div>
                         
                      </div>
                      
                </div>
                 
              </div>
             

             
              </div>

                <motion.div className="relative flex mt-0 items-end justify-end  lg:w-1/2"
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.99, ease: "easeInOut" }}>
                <img src={about_mwapata} alt="research" className="w-full clip rounded-[4px] h-[430px]  object-cover"/>
                </motion.div>
      
            
            </div>
               

       </div>   
      
        <div className="flex flex-col flex-col-reverse  lg:flex-row  lg:-mx-22 lg:mt-28  bg-[#f8ffef] mt-10">
            <div className="relative  flex lg:w-1/2" style={{backgroundImage: `url(${strategy2})`, backgroundSize: "cover", backgroundPosition: "center"}}>
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

               <div className="border bg-transparent hover:bg-[var(--secondary-color)] hover:border-none ease-in-out flex transition-all hover:scale-x-105 duration-490  mt-8 border-[#fffced]">
                  <div className="white flex items-center justify-center  gap-4 ">
                    <div className="bg-[#fffced] p-4">
                      <Download className="text-[#EA8548]"/>
                    </div>
                   <h5 className="white font-semibold">Download Our Strategic Plan</h5> 
                  </div>
               </div>
            </div>

            
            
                
                <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                 <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--primary-color)]/70  via-[#3A9B3D]/60 to-[#3A9B3D]/90 opacity-100"></div>
            </div>

          <div className="grid p-6 lg:p-12 lg:p-8 gap-12 lg:gap-12  grid-cols-1  lg:w-1/2">
          {mission_vision.map((item, index) => (
            <div key={item.id} className="flex items-start flex-col gap-4">
                <div className="bg-green p-2 rounded-[4px] flex-center">
                  {item.icon}
                </div>
              <h4 className="text-green mt-2 lg:mt-3 Card_heading ">
                {`Our ${item.title}`}
              </h4>
                                 <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.99, ease: "easeInOut" }}
                                    className=" w-full relative h-[2.3px] bg-green"></motion.div>
              <p className="lg:text-[18px] font-light lg:mt-4 text-[16px] text-grey leading-relaxed">
                {item.description}
              </p>
            </div>
              ))}
              <div className="flex items-start flex-col">
                <div className="bg-green p-2 rounded-[4px] flex-center">
                  <Gem className="size-10 white"/>
                </div>
  <h4 className="text-green text-2xl font-bold uppercase mt-6 barlow mb-4">
    core values
  </h4>
   <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.99, ease: "easeInOut" }}
                                    className=" w-full relative h-[2.3px] bg-green"></motion.div>

  <ul className="space-y-3 lg:mt-8 mt-6 text-grey">
    <li className="text-grey text-[16px] lg:text-[18px] leading-relaxed">
      • Professionalism
    </li>
    <li className="text-grey text-[16px] lg:text-[18px] leading-relaxed">
      • Relevance
    </li>
    <li className="text-grey text-[16px] lg:text-[18px] leading-relaxed">
      • Independence
    </li>
    <li className="text-grey text-[16px] lg:text-[18px] leading-relaxed">
      • Mutual Respect 
    </li>
    <li className="text-grey text-[16px] lg:text-[18px] leading-relaxed">
      • Excellence
    </li>
    <li className="text-grey text-[16px] lg:text-[18px] leading-relaxed">
      • Sustainability
    </li>
  </ul>
              </div>
            </div>

           

            
        </div>




</div> 
    </section>
  );
};

export default About_Us;