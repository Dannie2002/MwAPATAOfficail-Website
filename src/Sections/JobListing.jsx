import React from "react";
import { motion } from "framer-motion";


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
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };



  return (
    <section className="min-h-screen bg-[#f8ffef]">
      <div className="Section_wrapper">

        <div className="">
          <h4 className="Section_title">JobListings</h4>
        </div>

        {/* Job listings */}
        <div className="flex flex-col mt-12 lg:mt-18 gap-12 lg:gap-14">
          {joblisting.map((job) => (
            <motion.div key={job.id} 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}} className="bg-transparent relative flex flex-col">
              
              <motion.div variants={itemVariants} className="flex items-center justify-between gap-6">
                <h4 className="Card_heading text-grey">
                  {job.title}
                </h4>

                <div className="bg-green px-4 py-2">
                  <h4 className="white text_para">Open</h4>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.99, ease: "easeInOut" }}
                className="w-full relative h-[1.5px] mt-4 bg-green"
              ></motion.div>

              <motion.p variants={itemVariants} className="lg:text-[18px] font-light mt-4 text-grey text-[16px] lg:w-full leading-relaxed">
                {job.description}
              </motion.p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JobListing;