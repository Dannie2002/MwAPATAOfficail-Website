import React from "react";
import {easeInOut, motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png";
import about_mwapata from "../assets/Images/About_Mwapata.jpg";
import service_desk from "../assets/Images/Service_desk.jpg";
import policy from "../assets/Images/Policy_advocacy.jpg";
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { Download, Gem, Mail, MapPinned, Phone} from "lucide-react";
import Section_header from "./Section_header";

const Contact_Us = () => {


 const mission_vision = [
  {
    id: 1,
    title: "Mission",
    description:
      "We conduct independent, objective and empirical high-quality research aimed at generating innovative agricultural policy recommendations that improve decision-making and livelihoods in Malawi.",
    icon: <Mission className="lg:size-10 size-10 "  color="#fffced" />,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "To be a sustainable, world-class, Malawian agriculture policy research think-tank.",
    icon: <Vision className="size-10"   color="#fffced" />,
  }

];

const contact_details = [
  {
    id: 1,
    title: "Our Office",
    description: [
      "P.O Box 30883",
      "Capital City",
      "Lilongwe",
    ],
    icon: <MapPinned className="size-6 block text-green" />,
  },
  {
    id: 2,
    title: "Email",
    description: ["info@mwapata.mw"],
    icon: <Mail className="size-6 text-green" />,
  },
  {
    id: 3,
    title: "Phone",
    description: ["+(265) 887 403 004/005"],
    icon: <Phone className="size-6 text-green" />,
  },
];

  return (
    <section className="Section_bg">

              <Section_header
  title="Contact Us"
  bgImage={service_desk}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Contact Us" }
  ]}
/>

    <div className="Section_wrapper">
       
      
              
      
        <div className="flex flex-col mt-12 ">
            
           
                      <motion.h4 className="Counter_title text-(--primary-color) lg:w-1/2"
                      
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.49, ease: "easeInOut" }}><span className="font-bold">For inquires</span> regarding our research, publications, or events, <span className="font-bold">Here are contact details.</span></motion.h4>
                        <motion.div
                                      initial={{ opacity: 0, x: 80 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 1.99, ease: "easeInOut" }}
                                      className="w-full h-[0.6px] mt-8 bg-[#4a4a4a]"
                                    ></motion.div>
                
                
           </div>
 
                      
                      
                <div className="mt-12 lg:mt-10">
                  <motion.div 
                    className="flex lg:flex-row lg:gap-12 flex-col gap-8 items-start "
                   variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }} 
                  >
                    {contact_details.map(({ id, title, description, icon }) => (
                      <motion.div key={id} variants={itemVariants} className="gap-4 flex ">
                         <div className=" cursor-pointer border border-[#fffced]/30 rounded-full transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] ">{icon}</div>
                        <div className="flex gap-4 flex-col">
                            <h6 className="text-green Card_heading text-[18px]  font-bold">{title}</h6>
                            <div className="flex flex-col">
                           {description.map((line, index) => (
                            <p key={index} className="text-grey">{line}</p>
                          ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div> 


          
          
          <div className="flex mt-18 flex-col lg:flex-row items-start justify-between">
            <div className="lg:w-1/2">
                <motion.h4 initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} transition={{duration:0.79,ease:easeInOut}} className="text-grey font-light text-[24px] leading-[24px] archivo lg:w-4/5"><span className="font-semibold">Please complete </span>the following form and we will contact you as soon as possible</motion.h4>
            </div>
            

                   <div className="flex mt-12 lg:mt-0 lg:w-1/2">
              <div className="flex z-20 border-[0.3px] border-[var(--text-color)] w-full p-8 flex-col gap-12">
                       
                    

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
        <label htmlFor="phone-number" className="text-grey text-[16px] lg:text-[18px] mb-2 archivo font-semibold">Phone number</label>
        <div className="mt-2.5">
          <div className="flex bg-transparent border-b border-b-green/20 has-[input:focus-within]:border-green transition-all">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <select id="country" name="country" autoComplete="country" aria-label="Country" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-grey focus:outline-none sm:text-sm/6">
                <option>Mw</option>
              </select>
              <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-green sm:size-4">
                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
            </div>
            <input id="phone-number" type="text" name="phone-number" placeholder="+265-123-456-890" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-grey placeholder:text-gray-400 focus:outline-none" />
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-grey text-[16px] lg:text-[18px] mb-2 archivo font-semibold">Message</label>
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



                  
    </div>
    </section>
  );
};

export default Contact_Us;