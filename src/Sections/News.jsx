import React from "react";
import {motion} from "framer-motion";
import { useState } from "react";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import research from "../assets/Images/Research.jpg";
import Partners from "../assets/Images/Partners.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import news from "../assets/Images/News&Updates.jpg"
import event2 from"../assets/Images/Policy_advocacy.jpg";
import event3 from"../assets/Images/Event_header.jpg";
import Section_header from "./Section_header";
import { ChevronLeft, ChevronRight } from "lucide-react";

const News = () => {
    const News = [
  {
    id: 1,
    title: "MwAPATA Institute urges Malawi Parliament to address policy gaps",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 Jan 2026",
    image: Partners,
  },
  {
    id: 2,
    title: "Stakeholders Strategize on Future of Smallholder Farming in Malawi",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
      date: "17 Jan 2026",
    image: event2,
  },
  {
    id: 3,
    title: "Minister Calls for Homegrown Agricultural Policy Research",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
      date: "17 Jan 2026",
   image: event3, 
  },

    {
    id: 4,
    title: "5th African Regional Conference on Loss and Damage",
    description:"In collaboration with our partners led by the Civil Society Network on Climate Change (CISONECC), the MwAPATA Institute co-organized the 5th Edition of the African Regional Conference on Loss and Damage, held at BICC in Lilongwe from 25 – 27 March 2026. The theme for the conference was: “Advancing Sustainable, Equitable and Just Financing and Technical Support for Loss and Damage in Africa.” The Conference aimed to advance a coherent approach to financing, assessment, and addressing loss and damage (L&D), while enhancing access to technical assistance, including through the Santiago Network on Loss and Damage (SNLD). Minister of Natural Resources, Hon. Patricia Wiskes, was the Guest of Honour.",
      date: "11 April 2026",
   image: event3, 
  }

];


  return (
    <section className="Section_bg">

          <Section_header
  title="News"
  bgImage={news}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ News" }
  ]}
/>

     <div className="Section_wrapper">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title ">
                <span className="text-orange">OUR</span> LATEST NEWS.
              </h4>

              <div className="flex lg:hidden flex-col items-start lg:items-end">
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


        {/* This is a grid for news card */} 
      <div className="Grid_4 lg:grid-cols-3">
          {News.map(news => (
            <div key={news.id} className="relative border_div pb-6 rounded-[14px] z-0 shadow-3xl">
               <div className="relative h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={news.image} alt={news.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                 {/* overlay to apply blend mode */}
                
                </div>

              <div className="bg-transparent z-10 flex flex-col items-start gap-4 justify-between mt-4 w-full">
                <div className="mt-0  py-1 rounded-full">
                  <h4 className="text_date">{news.date}</h4>
                </div>
                <h4 className="Card_heading text-grey mb-4">
                  {news.title}
                </h4>
                <p className="text_para w-full line-clamp-2 hidden">The MwAPATA Institute wishes to recruit highly motivated, proactive
          service-oriented, and energetic individuals to fill the position of
          Communications Officer.</p>
          <h4 className="uppercase font-semibold archivo text-[14px] text-grey tracking-wide">Learn More</h4>
                
              </div>
            </div>
          ))}
       </div>
        



<div className="mt-6 lg:mt-18">
<h4 className="barlow gap-4 uppercase flex items-center text-grey font-bold text-[22px]">Explore more News</h4>

  <div className="Grid_4  lg:gap-12">
          {News.map(news => (
            <div key={news.id} className="relative rounded-[14px] pb-4 border_div z-0 shadow-3xl">
               <div className="relative h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={news.image} alt={news.title} className="w-full group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                 {/* overlay to apply blend mode */}
                
                </div>

              <div className="bg-transparent z-10 flex flex-col items-start gap-4 justify-between mt-4 w-full">
                <div className="mt-0  py-1 rounded-full">
                  <h4 className="text_date">{news.date}</h4>
                </div>
                <h4 className="Card_heading text-grey mb-4">
                  {news.title}
                </h4>
                <p className="text_para w-full line-clamp-1 hidden">The MwAPATA Institute wishes to recruit highly motivated, proactive
          service-oriented, and energetic individuals to fill the position of
          Communications Officer.</p>
          <h4 className="uppercase font-semibold archivo text-[14px] text-grey tracking-wide">Learn More</h4>
                
              </div>
            </div>
          ))}
       </div>



</div>





                <div className="flex items-start flex-wrap overflow-hidden mt-6  gap-4 lg:mt-12  transition ">
                                         <div className="p-2 size-12 group flex-center bg-green hover:bg-[var(--secondary-color)]/60 duration-470">
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

export default News;