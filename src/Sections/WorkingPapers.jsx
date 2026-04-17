import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import capacity from "../assets/Images/Capacity_building.jpg";
import workingpapers from "../assets/Images/Working_papers.jpg";
import noise from "../assets/Images/Noise.png";
import Section_header from "./Section_header";
import {  CalendarDays,ChevronsRight, File, Search} from "lucide-react";
import SearchBar from "../Componets/SearchBar";
import papers from "../Constants/Working _papers";

const WorkingPapers= () => {


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

   const [selectedYear, setSelectedYear] = useState("2026");
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
              <h4  className="Section_title  tracking-wide">WORKING PAPERS</h4>
            </div>
               
         
         

      <div className="flex  flex-col top_margin lg:flex-row lg:gap-6 items-start lg:items-center justify-start">
            <h4 className="uppercase font-semibold zalando  text-[18px] lg:text-[18px] text-grey tracking-wide">
              Filter<span className="font-bold"> By Year:</span>
            </h4>
            <div className="flex mt-6 lg:mt-0 lg:gap-6 gap-4 ">

              <button
                onClick={() => setSelectedYear("all")}
                className={`px-6 uppercase  border font-semibold border-(--secondary-color)/40 rounded-full text-[14px] barlow transition-all duration-200
                ${
                  selectedYear === "all"
                    ? "bg-green  white border-none"
                    : "text-grey not-[]: hover:bg-(--secondary-color) hover:text-white" }`}>
                All
              </button>

              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 border barlow  border-[1.59px] border-(--secondary-color)/75 font-semibold rounded-full hover:text-white text-[15px]  transition-all duration-200
                  ${
                    selectedYear === year
                      ? "bg-green font-semibold white border-none"
                      : "text-grey  not-[]: hover:bg-(--secondary-color) hover:text-white"
                  }`}
                >
                  {year}
                </button>
              ))}

            </div>

          </div>


   <SearchBar searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  placeholder="Search by file date..."/>

  

          {searchTerm.trim() !== "" && (
          <p className="text_para text-[16px] mt-6 "><span className="font-semibold">{filteredPapers.length}</span> Working Paper(s) Found!</p>)}  


            <div className="flex flex-col gap-10 top_margin">
              {filteredPapers.map((paper, index) => (
                 <div className="flex flex-col  md:flex-row gap-6 lg:gap-12 items-start  border-b pb-8 lg:pb-12 border-(--text-color)/60 group cursor-pointer">

  {/* IMAGE */}
  <div className="lg:w-[25%]  w-full lg:h-[230px] h-[200px] flex-shrink-0 overflow-hidden">
    <img
      src={paper.image}
      alt={paper.title}
      className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500"
    />
  </div>


  {/* TITLE COLUMN */}
  <div className="lg:w-[35%] w-full lg:h-[230px] flex flex-col items-start justify-between gap-4 lg:gap-6">
    <div>
    <h3 className="Card_heading capitalize  leading-[26px] text-[22px] lg:text-[24px] archivo text-grey mb-2 lg:mb-4">
      {paper.title}
    </h3>

   
</div>
    <div className="flex items-center mt-0 lg:mt-4 gap-6">
      <h4 className="flex font-semibold items-center  gap-4 text_date ">
        <CalendarDays className="size-5 text-(--primary-color)" />
        {paper.date}
      </h4>

    </div>

  </div>


  {/* DESCRIPTION COLUMN */}
  <div className="lg:w-[40%] flex flex-col lg:flex-row items-start justify-between gap-6">

    <p className="text_para text-grey">
      {paper.description}
    </p>

     <div className="flex hover:bg-(--secondary-color) transition-colors duration-400 ease-in-out rounded-sm items-center p-2 text_date bg-[#0f753b]">
        <ChevronsRight className="size-6 white" />
       
      </div>

  

  </div>

          </div>
                 ))}
            </div>

         
    </div>       
    </section>
  );
};

export default WorkingPapers;