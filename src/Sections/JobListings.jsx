import React from "react";
import { motion } from "framer-motion";
import joblistings from "../assets/Images/JobListings.jpg";
import Section_header from "./Section_header";

  const joblisting = [
    {
      id: 1,
      title: "Research Director",
       posted_date:"1 April 2026",
      deadline:"18 May 2026",
      description: (
        <>
          The MwAPATA Institute seeks to recruit a highly motivated, proactive,
          service-oriented, and energetic individual to serve as Research
          Director, based in Lilongwe. The successful candidate will play a
          leading role in planning, coordinating, and implementing research
          programs in accordance with the Institute’s strategy, policies, and
          procedures. He/she will coordinate the creation of research teams and
          collaborations that understand the Institute’s research direction, and
          he/she will communicate the direction of research to inspire team
          members to reach goals. The Research Director will closely work with
          the Institute's leadership in strengthening collaboration, visibility,
          and uptake of evidence across government, private sector, civil
          society, and development partners. 
        </>
      ),
    },
    {
      id: 2,
      title: "Terms of Reference for outsourced ICT Support Services",
      posted_date:"18 April 2021",
      deadline:"18 May 2021",
      description: (
        <>
          The MwAPATA Institute is seeking to engage a reputable ICT consulting
          film to support the necessary ICT systems at the MwAPATA Institute
          Office in alignment with the MwAPATA Institute ICT policies. The firm
          is expected to manage information requirements and technical support
          needs for MwAPATA Institute in Malawi, offering weekly technical
          support for users of the Local Area Network (LAN)/Wide Area Network
          (WAN), as well as information management tools and technology
          infrastructure. 
        </>
      ),
    },
    {
      id: 3,
      title: "Communications Officer",
       posted_date:"18 April 2021",
      deadline:"18 May 2021",
      description: (
        <>
          The MwAPATA Institute wishes to recruit highly motivated, proactive
          service-oriented, and energetic individuals to fill the position of
          Communications Officer. Based in Lilongwe, and reporting to the
          Research Director, the Communications Officer will be responsible for
          supporting strategies that increase MwAPATA visibility to diverse
          audiences, expanding digital information sharing capacity, and
          strengthening official communication systems.
        </>
      ),
    },
    {
      id: 4,
      title: "Research Fellow",
       posted_date:"18 February 2021",
      deadline:"18 May 2021",
      description: (
        <>
          The MwAPATA Institute wishes to recruit highly motivated, proactive
          service-oriented, and energetic individuals to fill the position of
          Research Fellow. Based in Lilongwe, and reporting to the Research
          Director.
          <span className="underline text-green font-semibold cursor-pointer">
            here
          </span>.
        </>
      ),
    },
  ];

const JobListing = () => {

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
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.59, ease: "easeInOut" }
    },
  };



  return (
    <section className="Section_bg">
                       <Section_header
  title="Job Listings"
  bgImage={joblistings}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Job Listings" },
    
  ]}
/>
      <div className="Section_wrapper">

        <div className="">
          <h4 className="Section_title tracking-wide">Job Listings</h4>
        </div>

        {/* Job listings */}
        <div className="flex flex-col mt-12 lg:mt-18 gap-12 lg:gap-14">
          {joblisting.map((job) => (
            <motion.div key={job.id} 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}} className="bg-transparent relative flex flex-col">
              
              <motion.div variants={itemVariants} className="flex lg:bg-[#eef7e3] lg:p-4 items-center justify-between gap-6">
                <h4 className="Card_heading text-grey">
                  {job.title}
                </h4>
                 
                <div className="bg-green opacity-80 flex items-center justify-center px-4 py-2">
                  <h4 className="white ">Open</h4>
                </div>
              </motion.div>

         

              <motion.p variants={itemVariants} className="lg:text-[18px] font-light mt-4 text-grey text-[16px] lg:w-full leading-relaxed">
                {job.description}
              </motion.p>

              <p variants className="lg:text-[18px] font-semibold mt-4 text-grey text-[16px] lg:w-full leading-relaxed"> Find the detailed terms of reference <span className="underline text-green"> here</span>.</p>
                            <div className="flex flex-wrap  mt-6 lg:flex-row items-center justify-between lg:justify-start gap-3 lg:gap-14 ">
                              <motion.h4  variants={itemVariants} className="uppercase  gap-4 flex items-center text_date">
                                   <motion.span variants={itemVariants} className="text-green barlow font-bold">
                                     Posted on:
                                   </motion.span>
                                  {job.posted_date}
                                 </motion.h4>

                             <motion.h4  variants={itemVariants} className="uppercase  gap-4 flex items-center text_date">
                                   <motion.span variants={itemVariants} className="text-green barlow font-bold">
                                     Posted on:
                                   </motion.span>
                                  {job.deadline}
                                 </motion.h4>

                          </div>   

                               <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.99, ease: "easeInOut" }}
                className="w-full relative h-[0.5px] mt-4 bg-[#4a4a4a]"
              ></motion.div>    
            </motion.div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default JobListing;