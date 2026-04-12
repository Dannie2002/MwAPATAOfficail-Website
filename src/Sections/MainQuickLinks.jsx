import React, { useState } from 'react';
import { motion } from "framer-motion";
import partners from "../assets/Images/Partners.jpg";
import { ChevronRight } from 'lucide-react';
import policy_brief from "../assets/Images/Policy_brief.jpg"
import noise from "../assets/Images/Noise.png"



const MainQuickLinks = () => {

const QuickLinks=[
    {
      id:1,
      Quick_link:"What's Coming Next?",
      Call_to_action:"See our next events",
        
    },


         {
      id:2,
      Quick_link:"Explore Publications",
      Call_to_action:"See our next events",
        
    },

       {
      id:3,
      Quick_link:"Newsletter",
      Call_to_action:"Take me to your Newsletter",
        
    }


]


  return (
    <section className='Section_bg min-h-[20vh] relative bg-green'  style={{backgroundImage: `url(${policy_brief})`,backgroundAttachment:"fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
    <img src={noise} alt="research" className="absolute z-5 inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
                                   <div className="absolute opacity-90 lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]  via-[#3A9B3D]/90 to-[#3A9B3D]/20 "></div>
  <div className='Section_wrapper z-10'>

       
      
 
         



        <div className='flex gap-8 lg:flex-row flex-col items-start justify-between w-full z-50'>

           <h4 className=' white z-10 Section_title lg:w-1/2'>Looking for something in particular?</h4>
                


{QuickLinks.map((quick_link,id)=>(


          <motion.div key={quick_link.id} className='flex flex-col gap-2 mb-4 items-start justify-center z-10' >
                      <h4 className="uppercase barlow  font-semibold archivo text-[14px] white tracking-[1.8px]">{quick_link.Quick_link}</h4>
                      <p className='white font-semibold text-[18.5px]'>{quick_link.Call_to_action}</p>
                      <button className="mt-2 bg-orange Glassy_btn p-1 rounded-full z-20">
                            <ChevronRight className="white size-5" />
                    </button>
          </motion.div>

           ))}
               
        </div>

       </div>
    </section>
  )
}

export default MainQuickLinks;