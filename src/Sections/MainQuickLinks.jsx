import React, { useState } from 'react';
import { motion } from "framer-motion";
import partners from "../assets/Images/Partners.jpg";
import { ChevronRight } from 'lucide-react';
import policy_brief from "../assets/Images/Policy_brief.jpg"
import noise from "../assets/Images/Noise.png"



const MainQuickLinks = () => {

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

const QuickLinks=[
    {
      id:1,
      Quick_link:"What's Coming Next?",
      Call_to_action:"See our next events",
      link:"/events"
        
    },


         {
      id:2,
      Quick_link:"Explore Publications",
      Call_to_action:"Take me to your publications",
      link:"/publications"
        
    },

       {
      id:3,
      Quick_link:"Newsletter",
      Call_to_action:"Take me to your Newsletter",
      link:"/newsletter"
        
        
    }


]


  return (
    <section className=' h-[40vh] relative bg-green'  style={{backgroundImage: `url(${policy_brief})`,backgroundAttachment:"fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
    <img src={noise} alt="research" className="absolute z-5 inset-0 w-full mix-blend-overlay opacity-20  clip h-full object-cover"/>
                                   <div className="absolute hidden opacity-70 lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]  via-[#3A9B3D]/90 to-[#0b0b0d]/20 "></div>
                                       <div className="absolute hidden lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]/50 via-[#3A9B3D]/90 to-[#3A9B3D]/90 opacity-75"></div>
  <div className='Section_wrapper z-10'>

       
      
 
         



        <div className='flex gap-8 lg:flex-row flex-col items-start justify-start w-full z-50'>

<div className='w-[40%] z-10'>
 <h4 className=' white z-10 Section_title'>Looking for something <br /> in particular?</h4>
</div>
  

           
                

      <div className='flex lg:flex-row gap-6 lg:gap-18 '>
{QuickLinks.map((quick_link,id)=>(

           
          <motion.div key={quick_link.id} className='flex relative  flex-col border_div pb-6 gap-2 mb-4 items-start justify-start z-10' 
           variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }} 
          
          
          >
                      <motion.h4 variants={itemVariants} className="uppercase barlow  font-extrabold archivo text-[14px] white tracking-[1.9px]">{quick_link.Quick_link}</motion.h4>
                      <p className='white font-seminormal text-[18.5px]'>{quick_link.Call_to_action}</p>
                      <button className="mt-2 bg-orange Glassy_btn p-1 rounded-full z-20">
                       <ChevronRight className="white size-5" />
                           
                    </button>
          </motion.div>

           ))}
    </div>           
        </div>

       </div>
    </section>
  )
}

export default MainQuickLinks;