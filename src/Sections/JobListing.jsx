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

    <div className="lg:px-12">
         
      
        <div className="mt-6">
          <h4 className="heading lg:text-[48px] text-[32px] oswald max-w-4xl lg:leading-[52px] uppercase font-semibold text-grey ">
            JobListing</h4>
        </div>
              {/* This is a grid for empployees card */} 
        <div className="lg:mt-18 mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div key={program} className="">
              <div className="relative h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute inset-0 bg-green rounded-[4px] opacity-60 mix-blend-multiply"></div>

              </div>
                <div className="mt-6">
                      <h4 className="barlow font-bold text-grey uppercase text-[22px]">{program.name}</h4>
                      <h1 className="p-0 mt-3 text-grey font-semibold">{program.title}</h1>
                </div>
            </div> 
             ))}
        </div>



    </div> 

    </section>
  );
};

export default JobListing;