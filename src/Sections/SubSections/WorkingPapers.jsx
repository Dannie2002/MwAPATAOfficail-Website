import React from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import noise from "../../assets/Images/Noise.png";
import Section_header from "../Section_header";
import {  CalendarDays  } from "lucide-react";

const WorkingPapers= () => {
const papers = [
  {
    id: 1,
    image: capacity,
    title: "Agricultural Diversification Strategies and Rural Household Food Security and Income in Malawi",
    date: "12 March 2024",
    description:
      "The study identifies the agricultural diversification strategies adopted by farming households in Malawi; assesses how household welfare varies with the identified diversification strategies; and identifies factors associated with household participation in the various agricultural diversification strategies.",
  },
  {
    id: 2,
    image: capacity,
    title: "Agricultural Diversification and Commercialization of Smallholder Farming in Malawi: Extent, Drivers, Impacts and Policy Options",
    date: "02 February 2024",
    description:
      "The study present findings from an in-depth study on diversification and commercialization of smallholder agriculture in Malawi, focusing on various aspects such as, levels, drivers, barriers, and impacts. The findings of this study are significant for policymakers and other stakeholders involved in the agricultural sector and can help shape policies that promote sustainable agriculture and rural development in Malawi.",
  },
  {
    id: 3,
    image: capacity,
    title: "Climate Smart Agriculture",
    date: "17 January 2024",
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

  return (
    <section className="Section_bg">
                 <Section_header
  title="Working Papers"
  bgImage={capacity}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Working Papers" }
  ]}
/>

    <div className="Section_wrapper">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-12">
              <h4 
                className="Section_title">
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


            {/* a grid left and right event image*/}
          <div className="flex flex-col mt-12">
           
                <p className="text_para">
                  <span className="font-bold">Working papers</span> offer
                  original, internally reviewed papers in a longer format for readers interested in taking a <span className="font-bold">"deep dive"</span> into an issue and how it was researched. 
                </p>
              
          </div>

                {/* event gallery section*/}
         <div className="mt-12 lg:mt-22">

  <div className="flex flex-col gap-10 mt-12">
    {papers.map((paper, index) => (
        <div 
       
        key={index}
        className="flex flex-col md:flex-row border p-6 border-(--text-color)/40  gap-12 items-start group cursor-pointer"
      >
        {/* image */}
        <div className="lg:w-[450px] lg:h-[215px] flex-shrink-0 overflow-hidden shadow-md">
          <img
            src={paper.image}
            alt={paper.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* text */}
          <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
           viewport={{once:true}} className="flex flex-col gap-4 ">
              <motion.h3 variants={itemVariants} className="Card_heading text-green font-semibold">{paper.title}</motion.h3>
              <motion.h4 className="uppercase  gap-4 flex items-center text-grey barlow font-semibold text-[14px]" variants={itemVariants}> <span className="text-green font-bold "><CalendarDays className="size-5"/> </span>{paper.date}</motion.h4>
              <motion.p variants={itemVariants} className="text_para w-full">
                {paper.description}
              </motion.p>
           </motion.div>
            
      </div>
      
    ))}
  </div>

</div>
    </div>       
    </section>
  );
};

export default WorkingPapers;