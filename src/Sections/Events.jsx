import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Section_header from "../Sections/Section_header";
import RightArrow from "./Icons/RightArrow";
import Partners from "../assets/Images/Partners.jpg";
import capacity from "../assets/Images/Capacity_building.jpg";
import research from "../assets/Images/Event_header.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import events_mwapata from "../assets/Images/Event_Mwapata.jpg";
import noise from "../assets/Images/Noise.png";
import { ChevronLeft, ChevronRight, CalendarDays, Search } from "lucide-react";

const Events = () => {

  const events = [
    {
      id: 1,
      title:
        "Side Event on the Domestication of the Africa Fertilizer and Soil Health Action Plan (FSH-AP) - 2025 Alliance for African Partnership Conference",
      description:
        "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 Jan 2026",
      year: 2026,
      image: Partners,
    },
    {
      id: 2,
      title: "Dissemination Workshop for Two Food Systems Policy Briefs",
      description:
        "Conducting evidence-based research to influence agricultural and development policies.",
      date: "07 Feb 2026",
      year: 2026,
      image: research,
    },
    {
      id: 3,
      title: "LEAP4YOUTH Project Conducts District Youth Engagement Meetings",
      description:
        "Improving market systems and access for farmers and agribusiness stakeholders.",
      date: "17 Mar 2025",
      year: 2025,
      image: outreach,
    },
    {
      id: 4,
      title: "Malawi National Food Systems Technical Working Group Meeting",
      description:
        "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 Jan 2024",
      year: 2024,
      image: capacity,
    },
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

      <div className="py-12 px-6 lg:px-22">

        {/* Recent Events */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
          <h4 className="Section_title">
            <span className="text-orange">OUR</span> EVENTS OF INFLUENCE{" "}
            <span className="text-orange">AND </span>INSPIRATION.
          </h4>
        </div>
  
  <div className="mt-12">
 <h4  className="uppercase barlow  pb-1 font-bold archivo text-[16px] lg:text-[18px] text-[#6f6969] tracking-[1.9px]">Recent Events</h4> 
  </div>
       
        {/* Featured Recent Events */}
        <div className="Grid_4 mt-6 lg:gap-12">
          {events.slice(0, 3).map((event, index) => (
            <div
              key={event.id}
              className={`relative border_div pb-6 rounded-[14px] z-0 shadow-3xl ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"
                />
              </div>

              <div className="bg-transparent z-10 flex flex-col items-start gap-4 justify-between mt-4 w-full">
                <div className="mt-0 py-1 rounded-full">
                  <h4 className="text_date text-[#6f6969]">{event.date}</h4>
                </div>

                <h4 className="Card_heading capitalize text-[20px] archivo text-grey line-clamp-2 mb-4">
                  {event.title}
                </h4>

                <h4 className="uppercase font-semibold barlow text-[14px] text-grey tracking-wider">
                  Learn More
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div className="mt-6 lg:mt-28">

          <h4 className="barlow gap-4 uppercase flex items-center tracking-wider text-grey font-bold text-[18px]">
            Explore Past Events
          </h4>

          {/* Year Filter */}
          <div className="flex gap-2 flex-col mt-12 lg:flex-row lg:gap-6 items-start lg:items-center justify-start">
            <h4 className="uppercase font-semibold barlow text-[14px] text-grey tracking-wide">
              Filter By Year:
            </h4>

            <div className="flex gap-4">

              <button
                onClick={() => setSelectedYear("All")}
                className={`px-6 py-2 border font-semibold border-[#4a4a4a]/40 rounded-sm text-[12px] archivo transition-all duration-200
                ${
                  selectedYear === "All"
                    ? "bg-green font-semibold white border-none"
                    : "text-grey hover:border-none not-[]: hover:bg-(--text-color)/40 hover:text-white"
                }`}
              >
                All
              </button>

              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 border stack font-normal border-[#4a4a4a]/40 rounded-sm text-[12px] archivo transition-all duration-200
                  ${
                    selectedYear === year
                      ? "bg-green font-semibold white border-none"
                      : "text-grey hover:border-none not-[]: hover:bg-(--text-color)/40 hover:text-white"
                  }`}
                >
                  {year}
                </button>
              ))}

            </div>
          </div>

          {/* Search */}
          <div className="relative mt-10">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search by file name or date..."
              className="glass border flex items-center archivo white text-[14px] bg-[#4a4a4a]/45 backdrop-blur-2xl pl-10 pr-6 py-2 border-[#4a4a4a]/20 outline-offset-0 focus:outline-[#4a4a4a]/10 focus:border-[#fffced] rounded-full placeholder:text-[#fffced] w-64 hover:w-full transition-width duration-350 ease-in-out"
            />
            <Search className="white absolute left-3 top-3 size-4" />
          </div>

          {/* Results */}
          {searchTerm.trim() !== "" && (
            <p className="text_para text-[16px] mt-4 ">
              {filteredPastEvents.length} Events Found
            </p>
          )}

          {/* Past Events Grid */}
          <div className="Grid_4 mt-8 lg:gap-12">
            {filteredPastEvents.map((event) => (
              <div
                key={event.id}
                className="relative border_div pb-6 rounded-[14px] z-0 shadow-3xl"
              >
                <div className="relative h-[430px] overflow-hidden z-0 group shadow-3xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"
                  />
                </div>

                <div className="bg-transparent z-10 flex flex-col items-start gap-4 justify-between mt-4 w-full">
                  <div className="mt-0 py-1 rounded-full">
                    <h4 className="text_date">{event.date}</h4>
                  </div>

                  <h4 className="Card_heading capitalize text-[20px] archivo text-grey line-clamp-2 mb-4">
                    {event.title}
                  </h4>

                  <h4 className="uppercase font-semibold archivo text-[16px] text-grey tracking-wide">
                    Learn More
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Pagination Buttons */}
        <div className="flex items-start flex-wrap overflow-hidden mt-6 gap-4 lg:mt-12 transition">
          <div className="p-2 size-12 group flex-center bg-green hover:bg-[var(--primary-color)]/60 duration-470">
            <ChevronLeft className="text-[#fffced] size-6 group-hover:text-white" />
          </div>

          <div className="p-2 size-12 flex-center group bg-green hover:bg-[var(--secondary-color)]/80 duration-500">
            <ChevronRight className="text-[#fffced] size-6 group-hover:text-white" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;