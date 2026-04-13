import React from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import policy_brief from "../../assets/Images/Policy_brief.jpg";
import noise from "../../assets/Images/Noise.png";
import newsletter from "../../assets/Images/Newsletter.jpg"
import Section_header from "../Section_header";
import {  CalendarDays,File  } from "lucide-react";

const PolicyBrief= () => {
const Policy_brief = [
  {
    id: 1,
    image: newsletter,
    title: "Does accessing multiple social support programmes improve household resilience and food security?",
    year:"2026",
    date: "27 January 2026",
    file:"pdf",
    description:
      "This Policy Brief generates empirical evidence on the effectiveness of combining multiple social support programmes to improve resilience. The study findings also offer insights to inform policy decisions on programme design to strengthen household resilience and improve food security in Malawi.",
  },
  {
    id: 2,
    image: capacity,
     year:"2025",
    title: "Agricultural Diversification and Commercialization of Smallholder Farming in Malawi: Extent, Drivers, Impacts and Policy Options",
    date: "02 February 2024",
    file:"pdf",
    description:
      "The study present findings from an in-depth study on diversification and commercialization of smallholder agriculture in Malawi, focusing on various aspects such as, levels, drivers, barriers, and impacts. The findings of this study are significant for policymakers and other stakeholders involved in the agricultural sector and can help shape policies that promote sustainable agriculture and rural development in Malawi.",
  },
  {
    id: 3,
    image: capacity,
     year:"2023",
    file:"pdf",
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
    <section className="min-h-screen bg-[#f8ffef]">
                 <Section_header
  title="Policy Brief"
  bgImage={policy_brief}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Policy Brief" }
  ]}
/>

    <div className="Section_wrapper">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-10">
              <h4 
                className="Section_title">
                Policy Brief
              </h4>

              <div className="flex lg:hidden mt-4 flex-col items-start lg:items-end">
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


                {/* event gallery section*/}
     <div className="Grid_4 grid-cols-1">

    { Policy_brief.map((policy, index) => (
      <div
           variants={containerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
        key={index.id}
        className="flex flex-col md:flex-row border-b pb-6 border-(--text-color)/40  gap-12 items-start group cursor-pointer"
      >
        {/* image */}
        <div className="lg:w-[25%] lg:h-[250px] flex-shrink-0 overflow-hidden ">
          <img
            src={policy.image}
            alt={policy.title}
            className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* text */}
            <div  className="flex flex-col gap-4 ">
                                <motion.h3 variants={itemVariants} className="Card_heading text-grey group-hover:text-(--secondary-color) lg:text-[32px] lg:leading-[32px]  font-semibold">{policy.title}</motion.h3> 
                                <motion.div variants={itemVariants} className="flex flex-wrap w-full lg:flex-row items-center justify-start gap-3 lg:gap-14 ">
                                  <h4 className="barlow gap-4 flex items-center text-grey font-normal text-[14px]" > <span className="text-green font-bold "><CalendarDays className="size-5"/></span>{policy.date}</h4>
                                 <h4 className="barlow gap-4 flex items-center text-grey font-normal text-[14px]" > <span className="text-green font-bold "><File className="size-5" /></span>{policy.file}</h4>
                                </motion.div>
                              <motion.p variants={itemVariants} className="text_para mt-2 w-full">{policy.description}</motion.p>

                              <motion.h4 variants={itemVariants} className="text_link  p-0">Download {policy.file}</motion.h4>

                            </div>
            
      </div>
      
    ))}
 

</div>
    </div>       
    </section>
  );
};

export default PolicyBrief;