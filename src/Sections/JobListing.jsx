import React from "react";
import { motion } from "framer-motion";

const JobListing = () => {

  const joblisting = [
    {
      id: 1,
      title: "Research Director",
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
          society, and development partners. Find the detailed terms of
          reference <span className="text-green">here.</span>
        </>
      ),
    },
    {
      id: 2,
      title: "Terms of Reference for outsourced ICT Support Services",
      description: (
        <>
          The MwAPATA Institute is seeking to engage a reputable ICT consulting
          film to support the necessary ICT systems at the MwAPATA Institute
          Office in alignment with the MwAPATA Institute ICT policies. The firm
          is expected to manage information requirements and technical support
          needs for MwAPATA Institute in Malawi, offering weekly technical
          support for users of the Local Area Network (LAN)/Wide Area Network
          (WAN), as well as information management tools and technology
          infrastructure. Get a detailed link for the terms of reference{" "}
          <span className="text-green"> here.</span>
        </>
      ),
    },
    {
      id: 3,
      title: "Communications Officer",
      description: (
        <>
          The MwAPATA Institute wishes to recruit highly motivated, proactive
          service-oriented, and energetic individuals to fill the position of
          Communications Officer. Based in Lilongwe, and reporting to the
          Research Director, the Communications Officer will be responsible for
          supporting strategies that increase MwAPATA visibility to diverse
          audiences, expanding digital information sharing capacity, and
          strengthening official communication systems. Find the detailed terms
          of reference <span className="underline text-green"> here</span>.
        </>
      ),
    },
    {
      id: 4,
      title: "Research Fellow",
      description: (
        <>
          The MwAPATA Institute wishes to recruit highly motivated, proactive
          service-oriented, and energetic individuals to fill the position of
          Research Fellow. Based in Lilongwe, and reporting to the Research
          Director. Find the detailed terms of reference{" "}
          <span className="underline text-green font-semibold cursor-pointer">
            here
          </span>.
        </>
      ),
    },
  ];

  return (
    <section className="min-h-screen">
      <div className="Section_wrapper">

        <div className="mt-12">
          <h4 className="Section_title">JobListings</h4>
        </div>

        {/* Job listings */}
        <div className="flex flex-col lg:mt-18 gap-12 lg:gap-14">
          {joblisting.map((job) => (
            <div key={job.id} className="bg-transparent relative flex flex-col">
              
              <div className="flex items-center justify-between gap-6">
                <h4 className="Counter_title w-full font-semibold barlow">
                  {job.title}
                </h4>

                <div className="bg-green px-4 py-2">
                  <h4 className="white">Open</h4>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.99, ease: "easeInOut" }}
                className="w-full relative h-[1.5px] mt-6 bg-green"
              ></motion.div>

              <p className="lg:text-[18px] font-light mt-4 text-grey text-[16px] lg:w-full leading-relaxed">
                {job.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JobListing;