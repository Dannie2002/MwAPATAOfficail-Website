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
    title: "Finance and Administration Manager",
    description:"Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
  },
  {
    id: 2,
    title: "Research Director",
    description:"Conducting evidence-based research to influence agricultural and development policies.",
  },
  {
    id: 3,
    title: "Outreach Coordinator",
    description:"Improving market systems and access for farmers and agribusiness stakeholders.",
  },
  {
    id: 4,
    title: "Research Analyst",
    description:"Providing short courses and specialized training programs for professionals.",
  },
];

  return (
    <section className="min-h-screen">

    <div className="lg:px-18">
         
      
        <div className="mt-6">
          <h4 className="heading lg:text-[48px] text-[32px] bebas max-w-4xl lg:leading-[52px] uppercase font-semibold text-grey ">
            JobListing</h4>
        </div>
              {/* This is a grid for empployees card */} 
         <div className="flex flex-col mt-12 gap-6 lg:gap-8">
                      {joblisting.map((job,index)=>(



                         <div key={job.id} className="bg-transparent relative flex flex-col ">
                          <div className="flex items-center justify-between flex-row gap-4">
                             <h4 className="text-grey  text-2xl mt-0 lg:mt-3 font-bold uppercase barlow ">
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
                          className=" w-full relative h-[1.5px] mt-4 bg-green"></motion.div>
                          <p className="lg:text-[18px] font-normal mt-4 text-grey text-[16px] lg:w-full leading-relaxed">
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