import React from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import newsletter from "../../assets/Images/Newsletter.jpg"
import news from "../../assets/Images/News&Updates.jpg"
import Section_header from "../Section_header";
import noise from "../../assets/Images/Noise.png";
import { Share2,ThumbsUp,ThumbsDown,MapPinned, Clock, CalendarDays  } from "lucide-react";
import { MessageCircleMore,Facebook, MessageCircle, Twitter } from "lucide-react";

const NewsDetailed = () => {


    const News = [
    {
      id: 1,
      title: "MwAPATA Institute urges Malawi Parliament to address policy gaps",
      description:
        "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
        date: "17 Jan 2026",
      image: news,
    },
    {
      id: 2,
      title: "Stakeholders Strategize on Future of Smallholder Farming in Malawi",
      description:
        "Conducting evidence-based research to influence agricultural and development policies.",
        date: "17 Jan 2026",
      image: news,
    },
    {
      id: 3,
      title: "Minister Calls for Homegrown Agricultural Policy Research",
      description:
        "Improving market systems and access for farmers and agribusiness stakeholders.",
        date: "17 Jan 2026",
     image: news, 
    }

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
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };

const NewsDetails = [
  { icon: CalendarDays, text: "17 JAN 2026" },
  { icon: Clock, text: "10:30pm" },
  { label: "Reported by:", text: "John Kondowe" },
];

  return (
  <section className="Section_bg">
          <Section_header
  title="News"
  bgImage={news}
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
           <motion.h4 key={index} variants={itemVariants} className="gap-4 uppercase flex items-center text-grey font-semibold barlow  text-[14px]">
             {detail.icon ? (
               <motion.span variants={itemVariants} className="text-green font-bold">
                 <detail.icon className="size-5" />
               </motion.span>
             ) : (
               <span className="text-grey font-light stack  text-[14px]">{detail.label}</span>
             )}
             {detail.text}
           </motion.h4>
         ))}
       </motion.div>
            
             <motion.div
                                      initial={{ opacity: 0, x: 80 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 1.99, ease: "easeInOut" }}
                                      className=" w-full  relative h-[0.9px] mt-8 bg-(--text-color)"></motion.div>


                <div className="lg:mt-22 w-full mt-12 flex lg:flex-row  flex-col gap-12">

                  <div className="lg:w-[60%] sticky top-12 self-start">
                        <div className="relative flex">
                          <img src={capacity} alt="research" className="w-full h-[500px] rounded-[4px] object-cover"/>
                          <img src={noise} alt="research" className="absolute z-0 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                            <div className="absolute clip inset-0 bg-green opacity-20 mix-blend-multiply "></div>
                  </div>

                        

                        

                      

                  </div>

                  <div className="lg:w-[40%] ">
                       <h4 className="agdasima gap-4 uppercase flex items-center tracking-[6px] text-grey font-bold text-[18px]">news in detail</h4>

                        <div className="flex mt-6 flex-col gap-8">
                <p className="lg:text-[18px] font-light text-grey text-[16px] leading-relaxed">
                  As part of the process of institutionalizing youth-led agri-food systems platforms in the LEAP4YOUTH Project, 
                  MwAPATA, in partnership with the National Youth Council of Malawi (NYCOM), with support from AGRA, conducted a 
                  district policy clinic with youth networks in Mchinji and an Agri-Skills Lab for youths in Zomba. The Mchinji Policy 
                  Clinic was held at Mchinji Community Hall from 2nd to 3rd February 2026, while the Zomba
                  Agri-Skills Lab was held at Zomba Community Stadium Hall from 6th to 7th February 2026.
                </p>
                
                  <h4 className="text-grey font-bold stack capitalize text-[14px]">BY EDWIN BANDA</h4>
                  
                        </div>

                   <div className="flex flex-col lg:flex-row items-start mt-12 lg:items-center lg:justify-between gap-8">
                      <div className="flex gap-8   text-bold">
                          <div><MessageCircleMore className="text-green" /></div>
                          <div><Share2 className="text-green"/></div>
                          <div><ThumbsUp className="text-green"/></div>
                          <div><ThumbsDown className="text-green"/></div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="font-semibold text-grey">Share:</div>

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

                <div className="p-6 border mt-12">
                        <form action="#" method="POST" className="">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="text-grey text-[16px] lg:text-[18px] mb-2 archivo font-semibold">First name</label>
        <div className="mt-2.5">
          <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full bg-transparent border-b border-b-green/20 px-3.5 text-base text-grey outline-none focus:border-green transition-all font-light placeholder:text-grey" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="text-grey text-[16px] lg:text-[18px] mb-2 archivo font-semibold">Last name</label>
        <div className="mt-2.5">
          <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full bg-transparent border-b border-b-green/20 px-3.5 text-base text-grey outline-none focus:border-green transition-all placeholder:text-gray-400" />
        </div>
      </div>
     
      <div className="sm:col-span-2">
        <label htmlFor="email" className="text-grey text-[16px] lg:text-[18px] mb-2 archivo font-semibold">Email</label>
        <div className="mt-2.5">
          <input id="email" type="email" name="email" autoComplete="email" className="block w-full bg-transparent border-b border-b-green/20 px-3.5 text-base text-grey outline-none focus:border-green transition-all placeholder:text-gray-400" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-grey text-[16px] lg:text-[18px] mb-2 archivo font-semibold">Comment</label>
        <div className="mt-2.5">
          <textarea id="message" name="message" rows="4" className="block w-full bg-transparent border-b border-b-[var(--text-color)] px-3.5 outline-none focus:border-green transition-all placeholder:text-[var(--text-color)]"></textarea>
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

              <div className="mt-12">
                <h4 className="barlow gap-4 uppercase flex items-center tracking-[4px] text-grey font-bold text-[18px]">Related News</h4>
                 <div className="Grid_4 mt-6  lg:gap-12">
          {News.map(news => (
            <div key={news.id} className="relative group rounded-[14px] pb-4 border_div z-0 ">
               <div className="relative h-[215px] lg:h-[230px] overflow-hidden z-0 group shadow-3xl">
                <img src={news.image} alt={news.title} className="w-full group-hover:scale-110 transition-all duration-2200 ease-in-out h-full rounded-[4px] object-cover"/>
                 {/* overlay to apply blend mode */}
                 <div className="absolute lg:hidden lg:group-hover:flex transition-colors duration-1250 ease-in-out inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 "></div>
                
                </div>

              <div className="bg-transparent z-10 flex flex-col items-start gap-4 justify-between mt-4 w-full">
                <div className="mt-0  py-1 rounded-full">
                  <h4 className="text_date">{news.date}</h4>
                </div>
                <h4 className="Card_heading capitalise text-grey mb-5">
                  {news.title}
                </h4>
                <p className="text_para w-full line-clamp-1 hidden">The MwAPATA Institute wishes to recruit highly motivated, proactive
          service-oriented, and energetic individuals to fill the position of
          Communications Officer.</p>
          <h4 className="uppercase font-semibold stack  archivo text-[14px] text-grey tracking-widest">Learn More</h4>
                
              </div>
            </div>
          ))}
       </div>

              </div>
                
              
     </div>     
    </section>
  );
};

export default NewsDetailed;