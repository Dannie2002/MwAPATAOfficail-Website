import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Section_header from "../Sections/Section_header";
import RightArrow from "./Icons/RightArrow";
import Partners from "../assets/Images/Partners.jpg";
import capacity from "../assets/Images/Capacity_building.jpg";
import research from "../assets/Images/Event_header.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import events_mwapata from "../assets/Images/Event_Mwapata.jpg";
import noise from "../assets/Images/Noise.png";
import { ChevronsLeft, ChevronsRight, CalendarDays , Search } from "lucide-react";
import DottedArrow from "./Icons/DottedArrow";


const Events = () => {

const events = [
{
id:1,
title:"Consultative Group on International Agricultural Research (CGIAR) Policy Innovations Hub Launch and Dialogue",
description:"Official MwAPATA institutional event.",
date:"26 February 2026",
year:2026,
venue:"BICC, Lilongwe, Malawi",
image:Partners
},
{
id:2,
title:"MwAPATA participates in the Commodity Platforms Capacity Strengthening Workshop and Learning Visit",
description:"Official MwAPATA institutional event.",
date:"11 February 2026",
year:2026,
venue:"Amaryllis Hotel, Blantyre, Malawi",
image:Partners
},
{
id:3,
title:"LEAP4YOUTH Project Conducts District Youth Engagement Meetings",
description:"Official MwAPATA institutional event.",
date:"2-3,  6-7 & 19 February 2026",
year:2026,
venue:"Mchinji, Zomba & Dedza, Malawi",
image:Partners
},
{
id:4,
title:"Dissemination Workshop for Two Food Systems Policy Briefs",
description:"Official MwAPATA institutional event.",
date:"19 January 2026",
year:2026,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:5,
title:"LEAP4YOUTH Project Supports the Ministerial Youth Pre-Budget Consultation for the 2026-2027 National Budget",
description:"Official MwAPATA institutional event.",
date:"19 January 2026",
year:2026,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:6,
title:"MwAPATA 2026-2030 Strategic Plan Development Workshop and Staff Retreat",
description:"Official MwAPATA institutional event.",
date:"6-8 December 2025",
year:2025,
venue:"Kalipano Hotel, Dowa, Malawi",
image:Partners
},
{
id:7,
title:"Stakeholders Workshop on Malawi Fertilizer and Soil Health Action Plan",
description:"Official MwAPATA institutional event.",
date:"24 November 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:8,
title:"Local Government Stakeholders Validate Policy Brief on Localizing Malawi’s Food Systems Transformation",
description:"Official MwAPATA institutional event.",
date:"6-10 October 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:9,
title:"Inception Meeting for the LEAP4YOUTH Project",
description:"Official MwAPATA institutional event.",
date:"20 November 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:10,
title:"2025 National Agroecology Conference",
description:"Official MwAPATA institutional event.",
date:"29-31 July 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:11,
title:"Side Event on the Domestication of the Africa Fertilizer and Soil Health Action Plan (FSH-AP)",
description:"Official MwAPATA institutional event.",
date:"11 June 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:12,
title:"Malawi Green Corps Dissemination Workshop",
description:"Official MwAPATA institutional event.",
date:"25 June 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:13,
title:"MwAPATA Staff Participate in GIZ Training on Leadership in Food Systems Transformation",
description:"Official MwAPATA institutional event.",
date:"28-30 January 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:14,
title:"Learning Event on Food Systems Governance",
description:"Official MwAPATA institutional event.",
date:"29 May 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:15,
title:"Stakeholders Workshop on Validation of the Agriculture Public Expenditure Report",
description:"Official MwAPATA institutional event.",
date:"27-28 January 2025",
year:2025,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:16,
title:"MwAPATA’s Contribution to Agriculture Policy Research Exhibited at the Launch of MoA Policies",
description:"Official MwAPATA institutional event.",
date:"4 December 2024",
year:2024,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:17,
title:"Stakeholders Validate Policy Brief on Food Systems Transformation",
description:"Official MwAPATA institutional event.",
date:"29 November 2024",
year:2024,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:18,
title:"Partnership for Economic Policy (PEP) National Conference",
description:"Official MwAPATA institutional event.",
date:"30 October 2024",
year:2024,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:19,
title:"TI Malawi Partners Conduct Decentralized Dissemination of the Food Systems Synthesis Report",
description:"Official MwAPATA institutional event.",
date:"16-25 October 2024",
year:2024,
venue:"Zomba, Blantyre, Salima & Mzuzu, Malawi",
image:Partners
},
{
id:20,
title:"MwAPATA Participates at the Malawi-EU Investment Forum",
description:"Official MwAPATA institutional event.",
date:"7-8 November 2024",
year:2024,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:21,
title:"Data Symposium on Fertilizer and Soil Health",
description:"Official MwAPATA institutional event.",
date:"10 October 2024",
year:2024,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:22,
title:"Forest Plantation Conference",
description:"Official MwAPATA institutional event.",
date:"10 September 2024",
year:2024,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:23,
title:"MwAPATA Institute Disseminates Pro-Youth Agriculture Policy Research Outcomes",
description:"Official MwAPATA institutional event.",
date:"16 September 2024",
year:2024,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:24,
title:"Climate Change and Economic Development in Africa National Research Dissemination Workshop",
description:"Official MwAPATA institutional event.",
date:"16 May 2023",
year:2023,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:25,
title:"MwAPATA Institute hosts Senior Media House Staff Breakfast on World Press Freedom Day",
description:"Official MwAPATA institutional event.",
date:"3 May 2023",
year:2023,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:26,
title:"MwAPATA Institute welcomes Director of Agriculture Programs and Partnerships from FSFW",
description:"Official MwAPATA institutional event.",
date:"20 March 2023",
year:2023,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:27,
title:"MwAPATA Institute Presentations at the 4th National Research Dissemination Conference",
description:"Official MwAPATA institutional event.",
date:"25-27 January 2023",
year:2023,
venue:"Lilongwe, Malawi",
image:Partners
},
{
id:28,
title:"MwAPATA 2022 Staff Review and Planning Meeting",
description:"Official MwAPATA institutional event.",
date:"11-14 December 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:29,
title:"Launch of the 16th Malawi Economic Monitor",
description:"Official MwAPATA institutional event.",
date:"9 December 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:30,
title:"Fertilizer and Soil Health National Consultation Workshop",
description:"Official MwAPATA institutional event.",
date:"6 December 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:31,
title:"Launch of Policy Prioritization Through Value Chain Analysis in Malawi",
description:"Official MwAPATA institutional event.",
date:"12-13 September 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:32,
title:"Transforming Malawian Agriculture Through Mega Farms Roundtable",
description:"Official MwAPATA institutional event.",
date:"10 August 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:33,
title:"Strategy and Responses to the Impacts of the Russia-Ukraine Conflict on Malawi",
description:"Official MwAPATA institutional event.",
date:"20 July 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:34,
title:"Administrator Power's Round Table Meeting on Food Security and Resilience",
description:"Official MwAPATA institutional event.",
date:"2 July 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:35,
title:"Malawi Data Symposium",
description:"Official MwAPATA institutional event.",
date:"16 June 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:36,
title:"Aquaculture Policy Research Dissemination Seminar",
description:"Official MwAPATA institutional event.",
date:"20 April 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:37,
title:"Options for Redesigning the Affordable Inputs Program for Diversified Agricultural Growth",
description:"Official MwAPATA institutional event.",
date:"24 February 2022",
year:2022,
venue:"Malawi",
image:Partners
},
{
id:38,
title:"Prof. Sanchez Public Lecture at LUANAR",
description:"Official MwAPATA institutional event.",
date:"1 December 2021",
year:2021,
venue:"Lilongwe University of Agriculture and Natural Resources, Malawi",
image:Partners
},
{
id:39,
title:"MwAPATA Conducts Working Session with Members of Parliament",
description:"Official MwAPATA institutional event.",
date:"1 December 2021",
year:2021,
venue:"Malawi",
image:Partners
},
{
id:40,
title:"MwAPATA Engages with Media Houses",
description:"Official MwAPATA institutional event.",
date:"12 November 2021",
year:2021,
venue:"Malawi",
image:Partners
},
{
id:41,
title:"MwAPATA Institute Official Launch",
description:"Official MwAPATA institutional event.",
date:"1 October 2020",
year:2020,
venue:"Malawi",
image:Partners
},
{
id:42,
title:"MwAPATA signs Memorandum of Understanding with National Planning Commission",
description:"Official MwAPATA institutional event.",
date:"17 September 2020",
year:2020,
venue:"Malawi",
image:Partners
}
];

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
              className={`relative border_div pointer-cursor pb-6 rounded-[14px] z-0 shadow-3xl ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-[240px] lg:h-[420px] overflow-hidden z-0 group shadow-[0_6px_12px_rgba(121,115,10,0.2)]">
                <img
                  src={event.image}
                  alt={event.title}
                
                  className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"
                />
                       
                  <div className="absolute hidden transition-all duration-600  ease-in-out group-hover:flex  z-20 inset-0 bg-gradient-to-r from-[var(--secondary-color)]/70 via-[#3A9B3D]/60 to-[#3A9B3D]/50 opacity-95"></div>
                  <div className="absolute flex-col hidden inset-0 size-full group-hover:flex items-center justify-center z-50">
                    <h4 className="white agdasima animate-bounce duration-300 text-[24px] tracking-wider uppercase font-bold ">Explore Event</h4>
                    <DottedArrow  color="#fffced" size={24} className="  size-18" />
                    
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
          <div className="flex gap-6 flex-col mt-12 lg:flex-row lg:gap-12 items-start lg:items-center justify-start">
              <h4 className="uppercase font-semibold archivo  text-[18px] lg:text-[20px] text-grey tracking-wider">
              Filter<span className="font-bold"> By Year:</span>
            </h4>

            <div className="flex lg:gap-6 gap-4 ">

              <button
                onClick={() => setSelectedYear("All")}
                className={`px-6  border font-semibold border-(--secondary-color)/40 rounded-sm text-[14px] barlow transition-all duration-200
                ${
                  selectedYear === "All"
                    ? "bg-green  white border-none"
                    : "text-grey not-[]: hover:bg-(--secondary-color) hover:text-white" }`}
              >
                All
              </button>

              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-1 border barlow  border-[1.59px] border-(--secondary-color)/75 font-semibold rounded-sm hover:text-white text-[15px]  transition-all duration-200
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

          {/* Search */}
     <div className="relative mt-12">
                 <input
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   type="text"
                   placeholder="Search by file name or date..."
                   className="glass border flex items-center archivo white text-[14px] bg-(--secondary-color) backdrop-blur-2xl pl-12 pr-6 py-3 border-[#ffced]/20 outline-offset-0 focus:outline-(--secondary-color)/60 focus:border-[#fffced] rounded-sm placeholder:text-[15px] placeholder:text-[#fffced] w-full hover:w-full transition-width duration-350 ease-in-out"
                 />
                 <Search className="white absolute left-3 top-[14.5px] size-5" />
               </div>

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
                className="relative group border_div pb-6 rounded-[14px] z-0 shadow-3xl"
              >
                <div className="relative grouup-hover:shadow-2xl lg:h-[380px] h-[220px] overflow-hidden z-0 group shadow-3xl">
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