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
  <section className="Section_bg">
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

              <div className="flex flex-col mt-4 lg:hidden items-start lg:items-end">
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
              
                <h4 className="Card_heading text-green">BY EDWIN BANDA</h4>
                
                  </div>

                <div className="flex flex-col lg:flex-row items-start  lg:items-center lg:justify-between gap-8">
                    <div className="flex gap-8  text-bold">
                        <div><MessageCircleMore className="text-green" /></div>
                        <div><Share2 className="text-green"/></div>
                        <div><ThumbsUp className="text-green"/></div>
                        <div><ThumbsDown className="text-green"/></div>
                    </div>
              <div className="flex items-center gap-6">
  <div className="font-semibold text-green">Share:</div>

  <div className="cursor-pointer bg-green p-2 rounded-full flex items-center justify-center text-green hover:opacity-70">
    <Facebook className="size-5 white" />
  </div>

   <div className="cursor-pointer bg-green p-2 rounded-full flex items-center justify-center text-green hover:opacity-70">
    <MessageCircle className="size-5 white" />
  </div>

   <div className="cursor-pointer bg-green p-2 rounded-full flex items-center justify-center text-green hover:opacity-70">
    <Twitter className="size-5 white" />
  </div>
</div>
                </div>

                <div className="bg-green mt-12 relative flex rounded-[4px] flex-col lg:flex-row p-8 gap-8">
                  <img src={noise} alt="research" className="absolute rounded-[4px] z-0 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                                   <div className="absolute clip rounded-[4px] inset-0 bg-green opacity-20 mix-blend-multiply "></div>
                    <div className="lg:w-1/2 z-20">
                        <h4 className="Card_heading white">Comments (0)</h4>
                        <p className="text-para white mt-6">No comments yet. Be the first to comment!</p>

                    </div>

                      <div className="flex flex-col z-10 mt-12 lg:mt-0 lg:w-1/2">
                      <h4 className="Card_heading white">Leave a comment</h4>
                      <div className="flex mt-6 z-20 border-[0.3px] border-[#fffced]/40 w-full p-8 flex-col gap-12">
                       
                    

                   <form action="#" method="POST" className="">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="white text-[16px] lg:text-[18px] mb-2 archivo">First name</label>
        <div className="mt-2.5">
          <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full bg-transparent border-b border-b-[#fffced]/40 px-3.5 text-base white outline-none focus:border-green transition-all font-light placeholder:text-gret" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="white text-[16px] lg:text-[18px] mb-2 archivo">Last name</label>
        <div className="mt-2.5">
          <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full bg-transparent border-b border-b-[#fffced]/40 px-3.5 text-base text-grey outline-none focus:border-green transition-all font-light placeholder:text-gray-400" />
        </div>
      </div>
    
      <div className="sm:col-span-2">
        <label htmlFor="email" className="white text-[16px] lg:text-[18px] mb-2 archivo">Email</label>
        <div className="mt-2.5">
          <input id="email" type="email" name="email" autoComplete="email" className="block w-full bg-transparent border-b border-b-[#fffced]/40 px-3.5 text-base text-grey outline-none focus:border-green transition-all font-light placeholder:text-gret" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="white text-[16px] lg:text-[18px] mb-2 archivo">Phone number</label>
        <div className="mt-2.5">
          <div className="flex bg-transparent border-b border-b-[#fffced]/40 has-[input:focus-within]:border-green transition-all">
            <input id="phone-number" type="text" name="phone-number" placeholder="+265-123-456-890" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-grey placeholder:text-[#fffced]/40 focus:outline-none focus:outline-none" />
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="white text-[16px] lg:text-[18px] mb-2 archivo ">Comment</label>
        <div className="mt-2.5">
          <textarea id="message" name="message" rows="4" className="block w-full bg-transparent border-b border-b-[#fffced]/40 px-3.5 outline-none focus:border-green transition-all placeholder:text-[var(--text-color)]"></textarea>
        </div>
      </div>
     
    </div>
    <div className="mt-10">
      <button type="submit" className="block  w-full rounded-[4px] bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green/90 transition-all uppercase barlow tracking-wide">Submit</button>
    </div>
  </form>
             
                      </div>
                     
                  </div> 
                   
                </div>
                 
            </div>
              
     </div>     
    </section>
  );
};

export default NewsDetailed;