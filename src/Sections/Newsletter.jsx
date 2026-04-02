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
    <section className="Section_bg pb-12">

            <Section_header
  title="Newsletter"
  bgImage={newsletter}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Newsletter" }
  ]}
/>
      
      <div className="Section_wrapper">

              <motion.h4
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.99, ease: "easeInOut" }}
                className="Section_title">
                <span className="text-orange">An independent</span> agricultural policy think tank in <span className="text-orange">Malawi</span>.
              </motion.h4>
               


            <div className="Grid_4  lg:grid-cols-2">

               {newsletterData.map((news) => (
                <div key={news.id} className="bg-transparent transition-all  hover:bg-(--secondary-color) hover:border-none group flex border  border-[var(--secondary-color)]/40 relative flex-col items-center justify-between p-6 gap-4 lg:p-12">
                

                <h2 className="Card_heading text-green  group-hover:text-[#fffced] lg:text-[32px]">{news.title}</h2>
                
                                     <div className="white mt-6 flex border cursor-pointer transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] shadow-[0_6px_12px_rgba(221,115,10,0.4)]  border-[#fffced]/30 items-center justify-center rounded-[4px] backdrop-blur-2xl bg-[#fffced]/40  w-fit px-6 py-3  gap-4 ">
                                                      <h5 className="text-grey  group-hover:text-[#fffced] font-semibold">Download Newsletter</h5> 
                                                      <div className="">
                                                        <Download className="text-green group-hover:text-[#fffced] size-5"/>
                                                      </div>
                                                 </div>
                 


                 </div>
                                      

                 

               ))}
                 
    
              

               
            
            </div>
               

       </div>   



        <div className="flex relative  flex-col items-start justify-center h-full lg:h-[430px] lg:mt-10  mt-10" style={{backgroundImage: `url(${capacity})`,backgroundAttachment:"fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
            
               
                  <img src={noise} alt="research" className="absolute z-5 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                                   <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]  via-[#3A9B3D]/90 to-[#3A9B3D]/20 "></div>
                    <div className="flex z-10  px-6 py-4 lg:px-18 lg:py-12 barlow gap-4 lg:gap-6 flex-col items-start">
                      <div className="flex gap-4 flex-center">
                            <div className="h-full hidden lg:block w-[2.6px] bg-[#fffced]"></div>
                      <p className="white text-[16px] archivo lg:text-[18px] w-full lg:w-[450px]"><span className="text-[#EA8548] font-bold">Subscribe </span>to our newsletter to receive valuable resources,
                         event announcements, and expert perspectives 
                        delivered straight to your inbox.</p>
                        </div>
                    <h4 className="white agdasima font-extrabold  text-[38px] w-[200px] leading-[38px] lg:w-[500px] lg:leading-[68px] lg:text-[68px] uppercase">SUBSCRIBE <br></br>NOW</h4>
     
                             
                    <div className=" flex w-full flex-row  lg:gap-6">
                    <input type="email" placeholder="Enter your email" className="px-6 py-3 border-[0.8px] white  border-[#fffced]/40 rounded-l-[4px]  lg:w-[470px]"/>
                       <div className="white flex border cursor-pointer transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] shadow-[0_6px_12px_rgba(221,115,10,0.4)]  border-[#fffced]/30 items-center justify-center rounded-[4px] backdrop-blur-2xl bg-[#fffced]/40  w-fit px-6 py-3  gap-4 ">
                                        <h5 className="white hidden lg:flex uppercase font-semibold">Subscribe</h5> 
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