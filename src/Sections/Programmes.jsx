import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png";
import research from "../assets/Images/Research.jpg";
import publications from "../assets/Images/Research.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import policy from "../assets/Images/Policy_advocacy.jpg";
import Section_header from "./Section_header";


const Programmes = () => {



    const programs = [
  {
    id: 1,
    title: "Research",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },
  {
    id: 2,
    title: "Capacity Building",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    title: "Outreach",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: outreach, 
  },
  {
    id: 4,
    title: "Policy Advocacy",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: policy,
  },
];

  return (
    <section className="Section_bg">

            <Section_header
  title=""
  bgImage={publications}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/Publications" }
  ]}
/>

      <div className="Section_wrapper">
      <h1 className="Page_title">Programmes</h1>
      <div className="mt-2 w-[50px] h-[4px] bg-green "></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4
           
                className="Section_title">
                RECOGNIZING THE ENORMITY OF THE CHALLENGES OUR SOCIETY FACES.
              </h4>

              <div className="flex lg:hidden mt-4 flex-col items-start lg:items-end">
                  <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.3, ease: "easeInOut" }}
                  className="mt-2 w-[90px] h-[4px] bg-green "></motion.div>
                  <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[50px] h-[4px] bg-orange"></motion.div>
              </div>
      </div>

      {/* Grid for programmes */}
        <div className="lg:mt-18 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:auto-rows-[430px]">
          {programs.map((program) => (
            <div className="relative z-0 shadow-3xl">
               <div className="relative h-full overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
              <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
              <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--primary-color)]/40  via-[#3A9B3D]/60 to-[#3A9B3D]/90 opacity-100"></div>

               </div>

             <div className="absolute  z-10 flex flex-row items-center gap-3 justify-start bottom-0 p-6 w-full">
              <h4 className="Card_heading white">{program.title}</h4>
              <RightArrow size={28} color="#fffced" />
              </div>
            </div>
        ))}
       </div>

       </div>
          
    </section>
  );
};

export default Programmes;