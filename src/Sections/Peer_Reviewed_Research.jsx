import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import capacity from "../assets/Images/Capacity_building.jpg";
import workingpapers from "../assets/Images/Working_papers.jpg";
import noise from "../assets/Images/Noise.png";
import Section_header from "./Section_header";
import {  CalendarDays,ChevronsRight,ChevronRight,ArrowRight, File, Search} from "lucide-react";
import SearchBar from "../Componets/SearchBar";
import FilterByYear from "../Componets/FilterByYear";
import PeerReviewedResearch from "../Constants/Peer_reviewed";

const Peer_Reviewed_Research= () => {


 const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.39, ease: "easeInOut" }
    },
  };

   const [selectedYear, setSelectedYear] = useState("2026");
   const [searchTerm, setSearchTerm] = useState("");

  const years = [...new Set(PeerReviewedResearch.map(peer_reviewed => peer_reviewed.year))].sort((a,b)=>b-a);

  const filteredPeerReviewedResearch = PeerReviewedResearch.filter((peer_reviewed) => {

  const matchesYear =
    String(selectedYear).toLowerCase() === "all" || 
    String(peer_reviewed.year) === String(selectedYear);

    const search = searchTerm.trim().toLowerCase();

  const matchesSearch =
    peer_reviewed.title?.toLowerCase().includes(search) ||
    String(peer_reviewed.date).toLowerCase().includes(search) ||
    peer_reviewed.description?.toLowerCase().includes(search);

  return matchesYear && matchesSearch;

});

  return (
    <section className="Section_bg">
                 <Section_header
          title="Peer-Reviewed Research"
  bgImage={workingpapers}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Peer-Reviewed Research" }
  ]}
/>

    <div className="Section_wrapper lg:px-22">
       
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-12">
              <h4  className="Section_title  tracking-wide">Peer-Reviewed Research</h4>
            </div>
               
         
         

      {/* Year Filter */}
              <FilterByYear
                years={years}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />


   <SearchBar searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  placeholder="Search by file date..."/>

  

          {searchTerm.trim() !== "" && (
          <p className="text_para text-[16px] mt-6 "><span className="font-semibold">{filteredPeerReviewedResearch.length}</span> Working Paper(s) Found!</p>)}  


            <div className="flex flex-col gap-10 top_margin">
              {filteredPeerReviewedResearch.map((peer_reviewed, index) => (
                 <div className="flex flex-col  md:flex-row gap-6 lg:gap-12 items-start  border-b pb-8 lg:pb-12 border-(--text-color)/60 group cursor-pointer">

  {/* IMAGE */}
  <div className="lg:w-[25%]  w-full lg:h-[230px] h-[200px] flex-shrink-0 overflow-hidden">
    <img
      src={peer_reviewed.image}
      alt={peer_reviewed.title}
      className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500"
    />
  </div>


  {/* TITLE COLUMN */}
  <div className="lg:w-[35%] w-full lg:h-[230px] flex flex-col items-start justify-between gap-4 lg:gap-6">
    <div>
    <h3 className="Card_heading capitalize  leading-[26px] text-[22px] lg:text-[24px] archivo text-grey mb-2 lg:mb-4">
      {peer_reviewed.title}
    </h3>

   
</div>
    <div className="flex items-center mt-0 lg:mt-4 gap-6">
      <h4 className="flex items-center  gap-4 text_date ">
        <CalendarDays className="size-5 text-(--primary-color)" />
        {peer_reviewed.date}
      </h4>

    </div>

  </div>


  {/* DESCRIPTION COLUMN */}
  <div className="lg:w-[40%] flex flex-col lg:flex-row items-start justify-between gap-6">

    <p className="text_para text-grey line-clamp-9">
      {peer_reviewed.description}
    </p>

    <div className='flex relative group items-center overflow-hidden  justify-center bg-green p-4'>
            <ChevronRight className='absolute  size-6 transform  transition-all duration-490  group-hover:translate-x-10 white' />
            <ChevronsRight className='absolute  size-6 transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 white' />
          </div>

  

  </div>

          </div>
                 ))}
            </div>

         
    </div>       
    </section>
  );
};

export default Peer_Reviewed_Research;