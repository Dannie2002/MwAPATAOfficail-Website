import React from "react";
import { useState } from "react";
import Partners from "../assets/Images/Partners.jpg";
import {motion} from "framer-motion";
import capacity from "../assets/Images/Capacity_building.jpg";
import policy_brief from "../assets/Images/Policy_brief.jpg";
import noise from "../assets/Images/Noise.png";
import newsletter from "../assets/Images/Newsletter.jpg"
import Section_header from "./Section_header";
import SearchBar from "../Componets/SearchBar";
import {  CalendarDays,File, Search,ChevronsRight, ChevronsLeftRight  } from "lucide-react";
import PeerReviewedReseach from "../Constants/Peer_reviewed"



const Presentations= () => {


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
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };


  const Presentations = [
    {
        id:1,
        title:"Enabling Environment for Business and Implementation of Key Business-Friendly Policy Reforms",
        year: "2023",
        date: "October 25th, 2023",
       file: "pdf",
       description:" USAID/Malawi Midcourse Stocktaking – Learning Series",
       image:Partners
  },
    
  ]


  return (
    <section className="min-h-screen bg-[#f8ffef]">
                 <Section_header
  title="Presentations"
  bgImage={policy_brief}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Policy Brief" }
  ]}
/>

    <div className="Section_wrapper">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between top_margin">
              
        <h4  className="Section_title text-[32px]">Presentations</h4>
   
      </div>
      
     

    {/* policy brief one column grid*/}
  <div className="Grid_4 grid-cols-1">
       {Presentations.map((presentation, index) => (
       <div className="flex flex-col  md:flex-row gap-6 lg:gap-12 items-start  border-b pb-8 lg:pb-12 border-(--text-color)/60 group cursor-pointer">
          {/* IMAGE */}
          <div className="lg:w-[25%]  w-full lg:h-[230px] h-[200px] flex-shrink-0 overflow-hidden">
            <img
              src={presentation.image}
              alt={presentation.title}
              className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* TITLE COLUMN */}
          <div className="lg:w-[35%] w-full lg:h-[230px] flex flex-col items-start justify-between gap-4 lg:gap-6">
            <div>
            <h3 className="Card_heading capitalize  leading-[26px] text-[22px] lg:text-[24px] archivo text-grey mb-2 lg:mb-4">
              {presentation.title}
            </h3>
        </div>

          <div className="flex items-center mt-0 lg:mt-4 gap-6">
            <h4 className="flex font-semibold items-center  gap-4 text_date ">
              <CalendarDays className="size-5 text-(--secondary-color)" />
              {presentation.date}
            </h4>
          </div>

          </div>
      {/* DESCRIPTION COLUMN */}
        <div className="lg:w-[40%] flex flex-col lg:flex-row items-start justify-between gap-6">
          <p className="text_para text-grey">{presentation.description}</p>
          <div className="div_clip flex hover:bg-(--secondary-color) transition-colors duration-400 ease-in-out rounded-sm items-center p-2 text_date bg-[#0f753b]">
              <ChevronsRight className="size-7 white" />
            </div>
        </div>
       </div>
    ))}
 </div>

    </div>   
  </section>
  );
};

export default Presentations;