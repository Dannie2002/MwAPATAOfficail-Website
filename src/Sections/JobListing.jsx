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

const JobListing = () => {


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

    const joblisting = [
  {
    id: 1,
    title: "Research Director",
    description:"The MwAPATA Institute seeks to recruit a highly motivated, proactive, service-oriented, and energetic individual to serve as Research Director, based in Lilongwe. The successful candidate will play a leading role in planning, coordinating, and implementing research programs in accordance with the Institute’s strategy, policies, and procedures. He/she will coordinate the creation of research teams and collaborations that understand the Institute’s research direction, and he/she will communicate the direction of research to inspire team members to reach goals. The Research Director will closely work with the Institute's leadership in strengthening collaboration, visibility, and uptake of evidence across government, private sector, civil society, and development partners. Find the detailed terms of reference here.",
  },
  {
    id: 2,
    title: "Terms of Reference for outsourced ICT Support Services",
    description:"The MwAPATA Institute is seeking to engage a reputable ICT consulting film to support the necessary ICT systems at the MwAPATA Institute Office in alignment with the MwAPATA Institute ICT policies. The firm is expected to manage information requirements and technical support needs for MwAPATA Institute in Malawi, offering weekly technical support for users of the Local Area Network (LAN)/Wide Area Network (WAN), as well as information management tools and technology infrastructure. Get a detailed link for the terms of reference here.",
  },
  {
    id: 3,
    title: "Communications Officer",
    description:"The MwAPATA Institute wishes to recruit highly motivated, proactive service-oriented, and energetic individuals to fill the position of Communications Officer. Based in Lilongwe, and reporting to the Research Director, the Communications Officer will be responsible for supporting strategies that increase MwAPATA visibility to diverse audiences, expanding digital information sharing capacity, and strengthening official communication systems. Find the detailed terms of reference here.",
  },
  {
    id: 4,
    title: "Research Fellow",
    description:"The MwAPATA Institute wishes to recruit highly motivated, proactive service-oriented, and energetic individuals to fill the position of Research Fellow. Based in Lilongwe, and reporting to the Research Director. Find the detailed terms of reference here.",
  },
];

  return (
    <section className="min-h-screen">

    <div className="lg:px-18 p-6">
         
      
        <div className="mt-6">
          <h4 className="Section_title">
            JobListing</h4>
        </div>
              {/* This is a grid for empployees card */} 
         <div className="flex flex-col mt-12 gap-12 lg:gap-8">
                      {joblisting.map((job,index)=>(



                         <div key={job.id} className="bg-transparent relative flex flex-col ">
                          <div className="flex items-center justify-between flex-row gap-4">
                             <h4 className="text-grey text-[22px]  lg:text-2xl mt-0 lg:mt-3 font-bold uppercase barlow ">
                                       {job.title}
                         </h4>
                          <div className="bg-green px-4 py-2 ">
                            <h4 className="white">Open</h4>
                          </div>
                        </div>
                         <motion.div
                          initial={{ opacity: 0, x: 80 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1.99, ease: "easeInOut" }}
                          className=" w-full relative h-[1.3px] mt-4 bg-green"></motion.div>
                          <p className="lg:text-[18px] font-light mt-4 text-grey text-[16px] lg:w-full leading-relaxed">
                             {job.description}
                          </p>
                         </div>




                      ))}

         </div>



    </div> 

    </section>
  );
};

export default JobListing;