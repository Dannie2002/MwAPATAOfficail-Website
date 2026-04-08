import React, { useState } from 'react';
import { motion } from "framer-motion";
import partners from "../assets/Images/Partners.jpg";
import Section_header from "./Section_header";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../Componets/ScrollVelocity.jsx";

const Partners = () => {
  return (
    <section className='Section_bg'>

      <Section_header
  title="Partners"
  bgImage={partners}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Partners" }
  ]}
/>
        <div className='Section_wrapper'>

       
        <div className=''>
            <ScrollVelocityContainer>
                <ScrollVelocityRow baseVelocity={4} className='lg:p-0'>
                  <div className=' flex  gap-16 w-[600px]'>
                      
              <h4 className='Section_title text-green'>Evidence for Transformation</h4>
                      
                    </div>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>   
        </div>

       </div>
    </section>
  )
}

export default Partners;