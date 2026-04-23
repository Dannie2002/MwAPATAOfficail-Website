import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import noise from "../assets/Images/Noise.png";
import Landing_photo from "../assets/Images/LandingPhoto.jpg";
import speaker_series from "../assets/Images/Speaker_series.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import policy from "../assets/Images/Policy_advocacy.jpg";
import strategy1 from "../assets/Images/Strategy1.jpg";
import strategy2 from "../assets/Images/Strategy2.jpg";
import team from "../assets/Images/Team_Mwapata.jpg";
import strategy3 from "../assets/Images/Strategy3.jpg";
import React, { Children, useRef } from 'react';
import {motion, useTransform, useScroll} from "framer-motion"
import Mission from "./Icons/Mission";
import Vision from "./Icons/Vision";
import { Download, Gem } from "lucide-react";
import LandingPage from "./LandingPage";
import Section_header from "./Section_header";

const PublicationsFeedback = () => {

  const ref = useRef(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "center center"]
})

const clipPath = useTransform(
  scrollYProgress,
  [0, 1],
  ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
)

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
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };

    const scontainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };

  const sitemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };


  return (
    <section className="Section_bg ">



    <div className="Section_wrapper">
       
       
      
  
         <div className="flex flex-col-reverse  lg:flex-row lg:-mx-18 bg-[#eef7e3] ">

        
        <div className="flex flex-col mt-0  p-8 lg:w-1/2">
            <div>
                <h4 className="Section_title">
                  Your Feedback is Appreciated
                </h4>
              </div>     
      

           <div className="flex top_margin z-20 border-[0.3px] border-[var(--text-color)] w-full p-8 flex-col gap-12">
           
                       

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
        


            <div className="relative mt-10 lg:mt-0 flex lg:w-1/2">
             <img src={team} className="size-full object-cover grayscale" />

        
                <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                 <div className="absolute  lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--text-color)]/70  via-[#4a4a4a]/70 to-[#0b0b0d]/90 opacity-100">
                 </div>
            </div>


           

            
        </div>




</div> 
    </section>
  );
};

export default PublicationsFeedback;