import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import capacity from "../assets/Images/Capacity_building.jpg";
import workingpapers from "../assets/Images/Working_papers.jpg";
import noise from "../assets/Images/Noise.png";
import Section_header from "./Section_header";
import {  CalendarDays, File, Search} from "lucide-react";

const WorkingPapers= () => {
const papers = [
  {
    id: 1,
    image: workingpapers,
    title: "Agricultural Diversification Strategies and Rural Household Food Security and Income in Malawi",
    date: "12 March 2024",
    year:"2024",
    file: "PDF",
    description:
      "The study identifies the agricultural diversification strategies adopted by farming households in Malawi; assesses how household welfare varies with the identified diversification strategies; and identifies factors associated with household participation in the various agricultural diversification strategies.",
  },
  {
    id: 2,
    image: capacity,
    title: "Agricultural Diversification and Commercialization of Smallholder Farming in Malawi: Extent, Drivers, Impacts and Policy Options",
    date: "02 February 2025",
    year:"2025",
    file: "PDF",
    description:
      "The study present findings from an in-depth study on diversification and commercialization of smallholder agriculture in Malawi, focusing on various aspects such as, levels, drivers, barriers, and impacts. The findings of this study are significant for policymakers and other stakeholders involved in the agricultural sector and can help shape policies that promote sustainable agriculture and rural development in Malawi.",
  },
  {
    id: 3,
    image: capacity,
    title: "Climate Smart Agriculture",
    file: "PDF",
    year:"2026",
    date: "17 January 2026",
    description:
      "This paper examines the adoption of climate-smart agricultural practices and their benefits to farmers.",
  },
];

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

   const [selectedYear, setSelectedYear] = useState("all");
   const [searchTerm, setSearchTerm] = useState("");

  const years = [...new Set(papers.map(paper => paper.year))].sort((a,b)=>b-a);

const filteredPapers = papers.filter((paper) => {

  const matchesYear =
    selectedYear === "all" || paper.year === selectedYear;

    const search = searchTerm.trim().toLowerCase();

  const matchesSearch =
    paper.title.toLowerCase().includes(search) ||
    paper.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.description.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesYear && matchesSearch;

});

  return (
    <section className="Section_bg">
                 <Section_header
          title="Working Papers"
  bgImage={workingpapers}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Working Papers" }
  ]}
/>

    <div className="Section_wrapper lg:px-22">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-12">
              <h4 
                className="Section_title  tracking-wide">
                WORKING PAPERS
              </h4>

              <div className="flex flex-col items-start lg:hidden mt-4 lg:items-end">
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
               
         
         <div className="mt-12">

          <div className="flex gap-6 items-center justify-start">
            <h4 className="uppercase font-semibold archivo text-[14px] text-grey tracking-wide">Filter By Year:</h4>
              <div className="flex gap-3">

             <button
      onClick={() => setSelectedYear("all")}
      className={`px-3 py-[3px] border rounded-sm text-[13px] archivo transition-all duration-200
      ${selectedYear === "all"
        ? "bg-green text-white border-green"
        : "text-green border-green hover:bg-green hover:text-white"}
      `}
    >
            All
          </button>

          {years.map((year) => (
              <button
        key={year}
        onClick={() => setSelectedYear(year)}
        className={`px-3 py-[3px] border rounded-sm text-[13px] archivo transition-all duration-200
        
        ${selectedYear === year
          ? "bg-green text-white border-green"
          : "text-green border-green hover:bg-green hover:text-white"}
        `}
      >
              {year}
            </button>
          ))}

        </div>

          </div>



            <div className="relative mt-6">
    <input
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="Search by file name or date..."
      className="glass border flex items-center archivo text-[14px] bg-[#4a4a4a]/45 backdrop-blur-2xl pl-10 pr-6 py-2 border-[#4a4a4a]/20 outline-offset-0 focus:outline-[#4a4a4a]/10 focus:border-[#fffced] rounded-full placeholder:text-[#fffced] w-64 hover:w-full transition-width duration-350 ease-in-out"
    />
    <Search className="white absolute left-3 top-3 size-4" />
            </div>

          {searchTerm.trim() !== "" && (
  <p className="text_para text-[16px] mt-4 ">
    {filteredPapers.length} Working Papers Found
  </p>
)}  


            <div className="flex flex-col gap-10 mt-12">
              {filteredPapers.map((paper, index) => (
                  <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                  
                  key={index} className="flex flex-col  md:flex-row border-b pb-6 border-(--text-color)/40 gap-6  lg:gap-12 items-start group cursor-pointer">
                        {/* image */}
                        <div className="lg:w-[25%] lg:h-[215px]   w-full h-[210px] flex-shrink-0 overflow-hidden ">
                          <img src={paper.image} alt={paper.title}  className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500" />
                        </div>
                
                        {/* text */}
                          <div className="flex flex-col gap-4 ">
                                <motion.h3 variants={itemVariants} className="Card_heading text-grey group-hover:text-(--secondary-color) lg:text-[32px] lg:leading-[32px]  font-semibold">{paper.title}</motion.h3> 
                                <motion.div variants={itemVariants} className="flex flex-wrap w-full lg:flex-row items-center justify-start gap-3 lg:gap-14 ">
                                  <h4 className="barlow gap-4 flex items-center text-grey font-normal text-[14px]" > <span className="text-green font-bold "><CalendarDays className="size-5"/></span>{paper.date}</h4>
                                  <h4 className="barlow gap-4 flex items-center text-grey font-normal text-[14px]" > <span className="text-green font-bold "><File className="size-5" /></span>{paper.file}</h4>
                                </motion.div>
                              <motion.p variants={itemVariants} className="text_para mt-2 w-full">{paper.description}</motion.p>

                              <motion.h4 variants={itemVariants} className="text_link  p-0">Download {paper.file}</motion.h4>

                            </div>
                            
                  </motion.div>
                
              ))}
            </div>

       </div>
    </div>       
    </section>
  );
};

export default WorkingPapers;