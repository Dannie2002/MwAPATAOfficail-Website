import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Section_header from "../Sections/Section_header";
import RightArrow from "./Icons/RightArrow";
import events_mwapata from "../assets/Images/Event_Mwapata.jpg";
import noise from "../assets/Images/Noise.png";
import { ChevronsLeft, ChevronsRight, CalendarDays , Search } from "lucide-react";
import DottedArrow from "./Icons/DottedArrow";
import SearchBar from "../Componets/SearchBar";
import FilterByYear from "../Componets/FilterByYear";
import events from "../Constants/Events";
import CirclePlus from "./Icons/CirclePlus";


const Events = () => {



  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const years = [...new Set(events.map((event) => event.year))].sort((a, b) => b - a);

  const filteredPastEvents = events.filter((event) => {
    const matchesYear =
      selectedYear === "All" || event.year === selectedYear;

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.date.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesYear && matchesSearch;
  });
  const [visibleCount, setVisibleCount] = useState(4);
  const lastVisibleRef = useRef(null);
useEffect(() => {
  lastVisibleRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}, [visibleCount]);

  return (
    <section className="Section_bg">
      <Section_header
        title="Events"
        bgImage={events_mwapata}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ Events" },
        ]}
      />

      <div className="Section_wrapper">

        {/* Recent Events */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
          <h4 className="Section_title">
            <span className="text-orange">OUR</span> EVENTS OF INFLUENCE{" "}
            <span className="text-orange">AND </span>INSPIRATION.
          </h4>
        </div>
  
  <div className="mt-12">
 <h4  className="uppercase barlow  pb-1 font-bold archivo text-[16px] lg:text-[18px] text-(--primary-color) tracking-[1.9px]">Recent Events</h4> 
  </div>
       
        {/* Featured Recent Events */}
        <div className="Grid_4 mt-6 lg:mt-12 gap-12 lg:gap-12">
          {events.slice(0, 3).map((event, index) => (
            <div
              key={event.id}
              className={`relative border_div group pointer-cursor pb-6 rounded-[14px] z-0  ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="image_div group ">
                <img
                  src={event.image}
                  alt={event.title}
                
                  className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"
                />
                       
                  <div className="absolute hidden transition-all duration-600  ease-in-out group-hover:flex  z-20 inset-0 bg-gradient-to-r from-[var(--secondary-color)]/70 via-[#3A9B3D]/60 to-[#3A9B3D]/50 opacity-95"></div>
                  <div className="absolute flex-col hidden inset-0 size-full group-hover:flex items-center justify-center z-50">
                    <h4 className="white agdasima animate-bounce duration-300 text-[24px] tracking-wider uppercase font-bold ">Explore Event</h4>
                    <CirclePlus size={32} color="#fffced" />
                    
                    </div>
           
           
              </div>

              <div className="bg-transparent z-10 flex flex-col items-start gap-4 justify-between mt-4 w-full">
                <div className="flex items-center mt-0 lg:mt-2 gap-6">
                     <h4 className="flex font-semibold items-center  gap-4 text_date ">
                       <CalendarDays className="size-5 text-(--primary-color)" />
                       {event.date}
                     </h4>
               
                   </div>

                <h4 className="Card_heading capitalize text-[20px] archivo text-grey line-clamp-2 mb-2">
                  {event.title}
                </h4>

              </div>
            </div>
          ))}
        </div>


        <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.99, ease: "easeInOut" }}
                                    className=" w-full relative h-[0.5px] mt-12 bg-(--text-color)"></motion.div>

        {/* Past Events */}
        <div className="mt-6 lg:mt-12">

          <h4 className="barlow gap-4 uppercase flex items-center tracking-wider text-(--primary-color) font-bold text-[18px]">
            Explore Past Events
          </h4>

          {/* Year Filter */}
            <FilterByYear
              years={years}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
         
          

          {/* Search */}
         <SearchBar searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  placeholder="Search Events..."/>

          {/* Results */}
          {searchTerm.trim() !== "" && (
            <p className="text_para text-[16px] mt-4 ">
              {filteredPastEvents.length} Events Found
            </p>
          )}

          {/* Past Events Grid */}
          <div  className="Grid_4 lg:mt-18 mt-12 lg:gap-12">
            {filteredPastEvents.slice(0, visibleCount).map((event,index) => (
              <div
                 key={event.id}
                ref={index === visibleCount - 1 ? lastVisibleRef : null}
                className="relative border_div   group pb-6 rounded-[14px] z-0 shadow-3xl"
              >
                <div className="image_div">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full group-hover:scale-110 transition-all duration-1200 ease-in-out h-full rounded-[4px] object-cover"
                  />

                  <div className="absolute hidden transition-all duration-600  ease-in-out group-hover:flex  z-20 inset-0 bg-gradient-to-r from-[var(--secondary-color)]/70 via-[#3A9B3D]/60 to-[#3A9B3D]/50 "></div>
                  <div className="absolute flex-col hidden inset-0 size-full group-hover:flex items-center justify-center z-50">
                    <h4 className="white agdasima  text-[24px] tracking-wider uppercase font-bold ">Explore Event</h4>
                    <DottedArrow  color="#fffced" size={24} className="  size-18" />
                    </div>

                </div>

                <div className="bg-transparent z-10 flex flex-col items-start gap-4 justify-between mt-4 w-full">
                 <div className="flex items-center mt-0 lg:mt-4 gap-6">
                      <h4 className="flex font-normal items-center  gap-4 text_date ">
                        <CalendarDays className="size-4 text-(--primary-color)" />
                        {event.date}
                      </h4>
                
                    </div>

                  <h4 className="Card_heading capitalize text-[20px] archivo mt-2 text-grey line-clamp-2">
                    {event.title}
                  </h4>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Pagination Buttons */}
            <motion.div  className="flex items-start mt-6 gap-4 lg:mt-12  transition ">
                       <button
     onClick={() => setVisibleCount((prev) => Math.max(prev - 4, 4))}
                         className="p-2 rounded-full bg-green/10 hover:bg-green/20 disabled:bg-green/5 disabled:cursor-not-allowed transition"
                       >
                         <ChevronsLeft className="size-6 text-green" />
                       </button>
       
                       <button
                          onClick={() => setVisibleCount((prev) => prev + 4)}
                
                         className="p-2 rounded-full bg-green/10 hover:bg-green/20 disabled:bg-green/5 disabled:cursor-not-allowed transition"
                       >
                         <ChevronsRight className="size-6 text-green" />
                       </button>      
                   </motion.div>

      </div>
    </section>
  );
};

export default Events;