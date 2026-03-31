import React from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import newsletter from "../../assets/Images/Newsletter.jpg"
import Section_header from "../Section_header";
import noise from "../../assets/Images/Noise.png";
import { Share2,ThumbsUp,ThumbsDown,MapPinned, Clock, CalendarDays  } from "lucide-react";
import { MessageCircleMore,Facebook, MessageCircle, Twitter } from "lucide-react";

const NewsDetailed = () => {

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

const NewsDetails = [
  { icon: CalendarDays, text: "17 JAN 2026" },
  { icon: Clock, text: "17 JAN 2026" },
  { label: "Reported by:", text: "John Kondowe" },
];

  return (
  <section className="min-h-screen">
          <Section_header
  title="News"
  bgImage={newsletter}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ News Updates" }
  ]}
/>
    <div className="Section_wrapper">
    



      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
              <h4 
                className="Section_title">
                Stakeholders Strategize on Future of Smallholder Farming in Malawi
              </h4>

              <div className="flex flex-col mt-4 items-start lg:items-end">
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


       <motion.div  variants={containerVariants}  
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }} className="flex flex-wrap w-full lg:flex-row items-center justify-start gap-3 lg:gap-14 mt-10">
         {NewsDetails.map((detail, index) => (
           <motion.h4 key={index} variants={itemVariants} className="uppercase gap-4 flex items-center text-grey barlow font-semibold text-[14px]">
             {detail.icon ? (
               <motion.span variants={itemVariants} className="text-green font-bold">
                 <detail.icon className="size-5" />
               </motion.span>
             ) : (
               <span className="text-green font-bold">{detail.label}</span>
             )}
             {detail.text}
           </motion.h4>
         ))}
       </motion.div>
            
             <motion.div
                                      initial={{ opacity: 0, x: 80 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 1.99, ease: "easeInOut" }}
                                      className=" w-full  relative h-[1.3px] mt-8 bg-green"></motion.div>


                <div className="lg:mt-22 mt-12 flex flex-col gap-12">

        
               <div className="relative flex">
                <img src={capacity} alt="research" className="w-full h-[500px] rounded-[4px] object-cover"/>
                 <img src={noise} alt="research" className="absolute z-0 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                  <div className="absolute clip inset-0 bg-green opacity-20 mix-blend-multiply "></div>
                </div>

                  <div className="flex flex-col gap-8">
              <p className="lg:text-[18px] font-light text-grey text-[16px] leading-relaxed">
                As part of the process of institutionalizing youth-led agri-food systems platforms in the LEAP4YOUTH Project, 
                MwAPATA, in partnership with the National Youth Council of Malawi (NYCOM), with support from AGRA, conducted a 
                district policy clinic with youth networks in Mchinji and an Agri-Skills Lab for youths in Zomba. The Mchinji Policy 
                Clinic was held at Mchinji Community Hall from 2nd to 3rd February 2026, while the Zomba
                 Agri-Skills Lab was held at Zomba Community Stadium Hall from 6th to 7th February 2026.
              </p>
              
                <h4 className="Card_heading">BY EDWIN BANDA</h4>
                
                  </div>

                <div className="flex flex-col lg:flex-row items-start  lg:items-center lg:justify-between gap-8">
                    <div className="flex gap-8  text-bold">
                        <div><MessageCircleMore className="text-grey" /></div>
                        <div><Share2 className="text-grey"/></div>
                        <div><ThumbsUp className="text-grey"/></div>
                        <div><ThumbsDown className="text-grey"/></div>
                    </div>
              <div className="flex items-center gap-6">
  <div className="text-green">Share:</div>

  <div className="cursor-pointer text-green hover:opacity-70">
    <Facebook size={20} />
  </div>

  <div className="cursor-pointer text-green hover:opacity-70">
    <MessageCircle size={20} />
  </div>

  <div className="cursor-pointer text-green hover:opacity-70">
    <Twitter size={20} />
  </div>
</div>
                </div>

                <div className="bg-green mt-12 relative flex rounded-[4px] flex-col lg:flex-row p-8 gap-8">
                  <img src={noise} alt="research" className="absolute rounded-[4px] z-0 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                                   <div className="absolute clip rounded-[4px] inset-0 bg-green opacity-20 mix-blend-multiply "></div>
                    <div className="w-1/2 z-20">
                        <h4 className="Counter_title barlow white">Comments (0)</h4>
                        <p className="text-para white mt-6">No comments yet. Be the first to comment!</p>

                    </div>

                    <div className="flex z-20 flex-col gap-12">
                       <h4 className="Counter_title barlow white">Leave a Comment</h4>
                    

                    <input type="email" placeholder="Enter your Name" className="px-6 py-3 outline-none border-[0.8px] white  border-[#fffced] rounded-l-[4px]  lg:w-[470px]"/>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter your Phone Number" className="px-6 focus:border-green focus:shadow-[0_2px_0_0_rgba(211,107,84,0.5)] transition duration-300 placeholder:text-[#fffced]/60 outline-none py-3 border-[0.8px] white  border-[#fffced] rounded-l-[4px]  lg:w-[470px]"/>
                    <textarea placeholder="Enter your Comment" rows="4" className="px-6 outline-none py-3 border-[0.8px] white  border-[#fffced] rounded-l-[4px]  lg:w-[470px]"/>
                    <button className="bg-orange clip lg:px-6 text-2xl px-6 py-6 text-[18px] w-[220px]  border-[#AC6133] uppercase barlow font-semibold white">Submit Comment</button>
                    </div>
                   
                </div>
                 
            </div>
              
     </div>     
    </section>
  );
};

export default NewsDetailed;