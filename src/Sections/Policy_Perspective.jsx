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



const Policy_Perspective= () => {


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


  const PolicyPerspective = [
    {
        id:1,
        title:"The Epizootic Ulcerative Syndrome Outbreak in Fish is a Threat to Malawi's Economy",
        year: "2021",
        Author:"Maggie G. Munthali ",
        date: "July 15, 2021",
       file: "pdf",
       description:"Epizootic Ulcerative Syndrome (EUS) is an invasive, aggressive, and destructive disease that affects both farmed and wild fish in freshwater and estuarine ecosystems. The management and control of this disease stands as a primary challenge to the development of sustainable aquaculture and capture fisheries in Malawi.  A  major  outbreak  of  EUS  in Malawi was first report-ed in mid-July 2020, and despite measures taken, the disease continues to spread. In this perspective, Dr. Munthali discusses the impacts of EUS on the Malawi’s economy if the disease is not contained.",
       image:Partners
  },
      {
        id:2,
        title:"Address Underlying Economic Problems to Enable Youth, Not Vice Versa",
        year: "2021",
        Author:"Louise Fox",
        date: "April 29, 2021",
       file: "pdf",
       description:"Dr. Fox argues key focus areas should include increasing regional trade, investing in land reform and developing land markets so that youth can be productive working in agriculture, and expanding educational opportunities so that youth can work productively in nonfarm sectors.  Increasing opportunities for young women to go to school, stay in school, and work afterwards should get particular attention",
       image:Partners
  },
  
    {
        id:3,
        title:"Agricultural Transformation in Ethiopia: Policy Lessons for Malawi",
        year: "2021",
        Author:"Khalid Bomba",
        date: "February 17, 2021",
       file: "pdf",
       description:"Most sub-Saharan African farmers still struggle to create wealth through farming and agrifood system development. Malawi has devoted considerable effort to promote agricultural transformation initiatives, but productivity growth in agriculture has remained low and most farming households continue to be food insecure and poor.   Relying  on  experiences  from  leading Ethiopia’s Agricultural Transformation Agency (ATA), this Perspective highlights several key lessons that could be useful in Malawi’s pursuit of growth and transformation.",
       image:Partners
  },

    {
        id:4,
        title:"Rethinking Agricultural Input Subsidy Programs and the Role of Agricultural Extension: Lessons for Future Programming",
        year: "2021",
        Author:"Daimon Kambewa ",
        date: "October 5, 2020",
       file: "pdf",
       description:"As governments continue to support smallholder farmers with affordable farm inputs to improve agricultural productivity, there are growing concerns about the effectiveness, efficiency and sustainability of the programs.   In  this  perspective,  Dr. Kambewa advocates for using agriculturalextension structures in the successful design, implementation, and monitoring of agricultural input support programs, and for the use of Integrated Soil Fertility Management practices for the efficiency and sustainability of the programs.",
       image:Partners
  },





  ]


  return (
    <section className="min-h-screen bg-[#f8ffef]">
                 <Section_header
  title="Policy Perspective"
  bgImage={policy_brief}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Policy Brief" }
  ]}
/>

    <div className="Section_wrapper">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between top_margin">
              
        <h4  className="Section_title text-[32px]">Policy Perspective</h4>
   
      </div>
      
     

    {/* policy brief one column grid*/}
  <div className="Grid_4 grid-cols-1">
       {PolicyPerspective.map((policy, index) => (
       <div key={policy.id} className="flex flex-col  md:flex-row gap-6 lg:gap-12 items-start  border-b pb-8 lg:pb-12 border-(--text-color)/60 group cursor-pointer">
          {/* IMAGE */}
          <div className="lg:w-[25%]  w-full lg:h-[230px] h-[200px] flex-shrink-0 overflow-hidden">
            <img
              src={policy.image}
              alt={policy.title}
              className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* TITLE COLUMN */}
          <div className="lg:w-[35%] w-full lg:h-[230px] flex flex-col items-start justify-between gap-4 lg:gap-6">
            <div>
            <h3 className="Card_heading capitalize  leading-[26px] text-[22px] lg:text-[24px] archivo text-grey mb-2 lg:mb-4">
              {policy.title}
            </h3>
            <h4 className="text_date">{policy.Author}</h4>
        </div>

          <div className="flex items-center mt-0 lg:mt-4 gap-6">
            <h4 className="flex font-semibold items-center  gap-4 text_date ">
              <CalendarDays className="size-5 text-(--secondary-color)" />
              {policy.date}
            </h4>
          </div>

          </div>
      {/* DESCRIPTION COLUMN */}
        <div className="lg:w-[40%] flex flex-col lg:flex-row items-start justify-between gap-6">
          <p className="text_para text-grey">{policy.description}</p>
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

export default Policy_Perspective;