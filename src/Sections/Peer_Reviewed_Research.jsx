import React from "react";
import {motion} from "framer-motion";
import capacity from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png";


const Peer_Reviewed_Research = () => {


const papers = [
  {
    id: 1,
    image: capacity,
    title: "Does accessing multiple social support programmes improve household resilience and food security?",
    date: "27 January 2026",
    description:
      "This Policy Brief generates empirical evidence on the effectiveness of combining multiple social support programmes to improve resilience. The study findings also offer insights to inform policy decisions on programme design to strengthen household resilience and improve food security in Malawi.",
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

  return (
    <section className="min-h-screen">


    <div className="py-12 px-6 lg:px-22">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title">
                Peer_Reviewed_Research
              </h4>

              <div className="flex flex-col items-start lg:items-end">
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
          <div className="flex flex-col mt-12 Counter_title">
            <div className="flex flex-col gap-8">
                <p className="Counter_title w-[800px] barlow  ">
                 Peer_Reviewed_Research
quickly accessible highlights and key messages on important policy topics, with the essential background information. These are often linked to a Working Paper. 
                </p>
              
                <h4 className="font-light lg:text-[18px] text-[32px] text-grey lowercase"><motion.div
                                                            initial={{ opacity: 0, x: 80 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 1.99, ease: "easeInOut" }}
                                                           className="mt-2 w-[45px] h-[1.6px] bg-green"></motion.div></h4>
            </div>
        
                 
          </div>

                {/* event gallery section*/}
         <div className="mt-12 lg:mt-22">

  <div className="flex flex-col gap-10 mt-12">
    {papers.map((paper, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row  gap-12 items-start group cursor-pointer"
      >
        
        {/* image */}
        <div className="w-[450px] h-[250px] flex-shrink-0 overflow-hidden rounded-[4px] shadow-md">
          <img
            src={paper.image}
            alt={paper.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* text */}
          <div className="flex flex-col gap-3 ">
          <h3 className="Card_heading barlow font-semibold">{paper.title}</h3>

                <h4 className="uppercase text-grey barlow font-sbold text-[16px] "> <span className="text-green font-bold ">DATE:</span> 17 JAN 2026</h4>

          <p className="lg:text-[18px] font-light text-grey text-[16px] lg:w-full leading-relaxed">
            {paper.description}
          </p>
        </div>
            
      </div>
      
    ))}
  </div>
  <h1>fme</h1>
</div>
    </div>       
    </section>
  );
};

export default Peer_Reviewed_Research;