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



const Reports= () => {


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


  const MwapataReports = [
    {
        id:1,
        title:"Green Jobs for Youth: Insights from Malawi Green Corps Project Learning Study Report",
        year: "2024",
        date: "April 9, 2024",
       file: "pdf",
       description:"The report offers valuable lessons and insights on implementing the Malawi Green Corps (MGC) project that can be replicated on a larger scale. It also provides policy recommendations to optimize the impact of future youth programs. The MGC Project aimed to support the government's initiatives to generate sustainable and better-paying employment opportunities for Malawian youths.",
       image:Partners
  },
      {
        id:2,
        title:"2022 Malawi Agricultural Productivity and Commercialization Conference Proceedings and Summary Report",
        year: "2021",
        date: "July 24, 2022",
       file: "pdf",
       description:"President of the Republic of Malawi, Dr. Lazarus McCarthy Chakwera graced the official opening of the 2022 Malawi Agricultural Productivity and Commercialization Conference on 9th June 2022. The conference took two days and key themes contributing to driving agricultural diversification in support of the aspirations of Malawi2063 were discussed. Practical experiences and exhibitions were part of the conference. This report summarizes the proceedings.",
       image:Partners
  },
  
    {
        id:3,
        title:"The MRALS (Malawi Rural Agricultural Livelihoods Survey) Report",
        year: "2022",
        date: "June 16, 2022",
       file: "pdf",
       description:"MwAPATA collected data for the Malawi Rural Agricultural Livelihoods Survey (MRALS) in 2019 to capture more-detailed, representative data on rural household agriculture and livelihoods in 8 tobacco growing districts of Malawi. This report introduces the MRALS design, describes the data collection, and presents descriptive statistics from key modules including demographics, land, crop and livestock production and marketing, and non-farm income.",
       image:Partners
  },

    {
        id:4,
        title:"Challenges and Opportunities for Small Scale Aquaculture Development in Malawi",
        year: "2022",
        date: "February 7, 2022",
       file: "pdf",
       description:"This report presents key findings on the landscape of small-scale aquaculture in Malawi and the challenges faced by fish farmers. This report characterizes small-scale fish farmers, evaluates the profitability of fish farming, and identifies key challenges faced by those who depend on fish for their livelihoods. The evidence outlined here comes from a survey of 732 farms, both individually  and communally owned farms , conducted in June-July 2021 in 10 districts in Malawi.",
       image:Partners
  },

      {
        id:5,
        title:"The African Continental Free Trade Area: Opportunities, Threats, and Challenges for Agriculture in Malawi",
        year: "2022",
        date: "February 16, 2022",
       file: "pdf",
       description:"Malawi ratified the African Continental Free Trade Area (AfCFTA) agreement, but it remains largely unknown how the nation will benefit from the intra-African trade. Harnessing trade opportunities may require policy interventions to, for example, ensure access to finance for national producers, reduce transport costs to domestic and regional markets, and implementing a transparent and attractive taxation system.",
       image:Partners
  }





  ]


  return (
    <section className="min-h-screen bg-[#f8ffef]">
                 <Section_header
  title="Reports"
  bgImage={policy_brief}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Reports" }
  ]}
/>

    <div className="Section_wrapper">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between top_margin">
              
        <h4  className="Section_title text-[32px]">Reports</h4>
   
      </div>
      
     

    {/* policy brief one column grid*/}
  <div className="Grid_4 grid-cols-1">
       {MwapataReports.map((report, index) => (
       <div key={report.id} className="flex flex-col  md:flex-row gap-6 lg:gap-12 items-start  border-b pb-8 lg:pb-12 border-(--text-color)/60 group cursor-pointer">
          {/* IMAGE */}
          <div className="lg:w-[25%]  w-full lg:h-[230px] h-[200px] flex-shrink-0 overflow-hidden">
            <img
              src={report.image}
              alt={report.title}
              className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* TITLE COLUMN */}
          <div className="lg:w-[35%] w-full lg:h-[230px] flex flex-col items-start justify-between gap-4 lg:gap-6">
            <div>
            <h3 className="Card_heading capitalize  leading-[26px] text-[22px] lg:text-[24px] archivo text-grey mb-2 lg:mb-4">
              {report.title}
            </h3>
           
        </div>

          <div className="flex items-center mt-0 lg:mt-4 gap-6">
            <h4 className="flex font-semibold items-center  gap-4 text_date ">
              <CalendarDays className="size-5 text-(--secondary-color)" />
              {report.date}
            </h4>
          </div>

          </div>
      {/* DESCRIPTION COLUMN */}
        <div className="lg:w-[40%] flex flex-col lg:flex-row items-start justify-between gap-6">
          <p className="text_para text-grey">{report.description}</p>
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

export default Reports;