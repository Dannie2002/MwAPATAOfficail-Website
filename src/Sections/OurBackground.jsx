import React, { useState } from 'react';
import { motion } from "framer-motion";
import partners from "../assets/Images/Partners.jpg";
import Section_header from "./Section_header";


const OurBackground = () => {
  return (
    <section className='Section_bg'>

      <Section_header
  title="OurBackground"
  bgImage={partners}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Our Background" }
  ]}
/>
        <div className='Section_wrapper'>

       
        <div className=''>
          


                     <p className="text_para mt-2 w-full">
                       In order to attain the level of agricultural growth that can transform the country’s economy, the country will need to:
                     </p>  

                
        </div>
 

       </div>
    </section>
  )
}

export default OurBackground;