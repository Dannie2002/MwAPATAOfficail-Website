import React from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Newsletter.jpg";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import policy from "../assets/Images/Policy_advocacy.JPG";
import newsletter from "../assets/Images/Newsletter.jpg";
import Section_header from "./Section_header";
import noise from "../assets/Images/Noise.png"
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { ChevronsRight,  ChevronRight, Download } from "lucide-react";
import DottedArrow from "./Icons/DottedArrow";

const Newsletter = () => {


const newsletterData = [
  {
    id:1,
    title: "APRIL - JULY 2025 NEWSLETTER",
    image: capacity,
    file: "/newsletters/april-july-2025.pdf",
  },
   {
    id:2,
    title: "APRIL - JULY 2025 NEWSLETTER",
    image: capacity,
    file: "/newsletters/april-july-2025.pdf",
  },
     {
    id:3,
    title: "APRIL - JULY 2025 NEWSLETTER",
    image: capacity,
    file: "/newsletters/april-july-2025.pdf",
  }
];

  return (
    <section className=" Section_bg">

            <Section_header
  title="Newsletter"
  bgImage={newsletter}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Newsletter" }
  ]}
/>
      




      





      <div className="Section_wrapper">

     
               


            <div className="Grid_4  lg:grid-cols-1">

               {newsletterData.map((news,index) => (
                <div key={news.id} className="bg-transparent transition-all  group flex border-b  border-b-[var(--text-color)]/60 relative flex-col lg:flex-row items-center justify-between p-6 gap-4 lg:p-12">
                
                <div className="flex flex-row gap-6">
                  <h4 className="text-2xl Card_heading">{news.id}</h4>
                <h2 className="Card_heading text-grey lg:leading-[30px] lg:text-[30px]  barlow uppercase font-semibold group-hover:text-(--secondary-color) ">{news.title}</h2>
                </div>
                <p className="text_para">Read the latest edition of the weekly MwAPATA Newsletter</p>
                
                                  
           
        <div className="flex hover:bg-(--secondary-color) transition-colors duration-400 ease-in-out rounded-sm items-center p-2 text_date bg-[#0f753b]">
        <ChevronsRight className="size-6 white" />
       </div>
                                               
                 


                 </div>
                                      

                 

               ))}
                 
    
              

               
            
            </div>
               

       </div>  

         <div className="flex relative  flex-col items-start justify-center h-full lg:h-[430px] lg:mt-10  mt-10" style={{backgroundImage: `url(${capacity})`,backgroundAttachment:"fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                  <img src={noise} alt="research" className="absolute z-5 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                                   <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]  via-[#3A9B3D]/90 to-[#3A9B3D]/20 "></div>
                    <div className="flex z-10  px-6 py-4 lg:px-18 lg:py-12 barlow gap-0 lg:gap-6 flex-col items-start">
                      <h4 className="uppercase font-semibold archivo text-[14px] white tracking-wide">Sign up for Mwapata's newsletter</h4>
              
                      <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="Section_title barlow w-[90%] white">
                Get MwAPATA’s research stories from your inbox.
                      </motion.h4>

                       <p className="text_para white w-full lg:w-[480px]">Subscribe to our newsletter to receive valuable resources,
                         event announcements, and expert perspectives 
                        delivered straight to your inbox.</p>
     
                             
                      <div className=" flex w-full flex-row  lg:gap-4">
                     <h4 className="white font-semibold text-[22px]">Sign up</h4>
                       <div className="white flex border cursor-pointer transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] shadow-[0_6px_12px_rgba(221,115,10,0.4)]  border-[#fffced]/30 items-center justify-center rounded-full backdrop-blur-2xl bg-[#fffced]/40  p-2 size-8  gap-4 ">
                                        
                                        <div className="">
                                          <ChevronRight className="white size-5"/>
                                        </div>
                                   </div>
                    </div>
                    </div>
            


            
        </div> 



        





    </section>
  );
};

export default Newsletter;