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
import { ChevronRight, Download } from "lucide-react";
import DottedArrow from "./Icons/DottedArrow";

const Newsletter = () => {

 const mission_vision = [
  {
    id: 1,
    title: "Mission",
    description:
      "We conduct independent, objective and empirical high-quality research aimed at generating innovative agricultural policy recommendations that improve decision-making and livelihoods in Malawi.",
    icon: <Mission size={40} color="#fffced" />,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "A Malawi with evidence-based agricultural policies that drive sustainable development, food security, and improved livelihoods.",
    icon: <Vision size={40} color="#fffced" />,
  }

];

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
      




        <div className="flex relative  flex-col items-start justify-center h-full lg:h-[430px] lg:mt-10  mt-10" style={{backgroundImage: `url(${capacity})`,backgroundAttachment:"fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                  <img src={noise} alt="research" className="absolute z-5 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                                   <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]  via-[#3A9B3D]/90 to-[#3A9B3D]/20 "></div>
                    <div className="flex z-10  px-6 py-4 lg:px-18 lg:py-12 barlow gap-0 lg:gap-6 flex-col items-start">
                      <h4 className="uppercase font-semibold archivo text-[14px] white tracking-wide">Sign up for Mwapata's newsletter</h4>
              
                      <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="Section_title barlow w-[70%] white">
                Get MwAPATA’s research stories from your inbox.
                      </motion.h4>

                       <p className="text_para white w-full lg:w-[480px]">Subscribe to our newsletter to receive valuable resources,
                         event announcements, and expert perspectives 
                        delivered straight to your inbox.</p>
     
                             
                      <div className=" flex w-full flex-row  lg:gap-4">
                     <h4 className="white font-semibold text-[20px]">Sign up</h4>
                       <div className="white flex border cursor-pointer transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] shadow-[0_6px_12px_rgba(221,115,10,0.4)]  border-[#fffced]/30 items-center justify-center rounded-full backdrop-blur-2xl bg-[#fffced]/40  p-2 size-8  gap-4 ">
                                        
                                        <div className="">
                                          <ChevronRight className="white size-5"/>
                                        </div>
                                   </div>
                    </div>
                    </div>
            


            
        </div>





      <div className="Section_wrapper">

     
               


            <div className="Grid_4  lg:grid-cols-1">

               {newsletterData.map((news) => (
                <div key={news.id} className="bg-transparent transition-all rounded-[4px] group flex border  border-[var(--text-color)]/40 relative flex-col lg:flex-row items-center justify-between p-6 gap-4 lg:p-12">
                
                
                <h2 className="Card_heading text-grey lg:leading-[36px] lg:text-[36px]  barlow uppercase font-semibold group-hover:text-(--secondary-color) ">{news.title}</h2>

                <p className="text_para">Read the latest edition of the weekly MwAPATA Newsletter</p>
                
                                     <div className="white flex border cursor-pointer transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(58,155,61,0.6)]  border-[#fffced]/30 items-center justify-center rounded-[4px] backdrop-blur-2xl bg-green  w-fit px-6 py-3  gap-4 ">
                                                      <div className="">
                                                        <Download className="text-[#fffced] size-5"/>
                                                      </div>
                                                 </div>
                 


                 </div>
                                      

                 

               ))}
                 
    
              

               
            
            </div>
               

       </div>   



        





    </section>
  );
};

export default Newsletter;