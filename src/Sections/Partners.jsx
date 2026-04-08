import React, { useState } from 'react';
import { motion } from "framer-motion";
import partners from "../assets/Images/Partners.jpg";
import oxfam from "../assets/Images/Logo_pngs/OXFAM_logo.png";
import giz from "../assets/Images/Logo_pngs/GIZ_logo.png";
import un from "../assets/Images/Logo_pngs/UNDP_logo.png";
import nycm from "../assets/Images/Logo_pngs/NYCM_logo.png";
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
          


                     <p className="text_para mt-2 w-full">
                       MwAPATA Institute’s commitment to long-term, inclusive, and transformational partnerships is of paramount importance to its success, as well as, sustained policy influence. MwAPATA will position itself as the leading policy knowledge hub in Malawi, and support the country by providing agricultural production and rural development solutions through informed policy implementation.
                     </p>  

                       <p className="text_para mt-2 w-full">
                       The Institute will partner and strengthen its relations and communication with all the key stakeholders along the research life cycle. The partnerships with stakeholders will be done through Partnership Agreements (PAs) and Memoranda of Understanding (MOUs). Also, MwAPATA will support national capacity for policy research through innovative partnerships with public and private sector partners. Thus, MwAPATA will build an efficient and effective organizational structure that enables its research programs to deliver on a timely basis, as well as, facilitate effective collaboration with partners.
                     </p> 
                      <p className="text_para mt-2 w-full">
                     Below are some of our various strategic partners.  
                     </p>
        </div>
 
            <ScrollVelocityContainer className='mt-12'>
                <ScrollVelocityRow baseVelocity={3} className='lg:p-4'>
                  <div className=' flex px-6 gap-6 min-w-[400px]'>
                      
             <img src={oxfam} alt="partner" className='w-full pointer-cursor h-[100px] object-cover rounded-[4px]'/>
              <img src={giz} alt="partner" className='w-full h-[100px] object-cover rounded-[4px]'/>
            

                    <img 
          srcSet="https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_147,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png 1x, https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_294,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png 2x" 
          id="img_comp-kc5loj2e" 
          src="https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_147,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png" 
          alt="PNGmwapata_logo_version-1_three-color_lo" 
          style={{ objectFit: 'contain', objectPosition: 'unset' }} 
          className="BI8PVQ Tj01hh" 
          width="88" 
          height="88" 
        />
                      
                    </div>
                </ScrollVelocityRow >
    
                  <ScrollVelocityRow baseVelocity={-3} className='lg:p-4 mt-6'>
                  <div className=' flex px-6 gap-6 min-w-[400px]'>
                      
           
               <img src={un} alt="partner" className='w-full h-[120px] object-cover rounded-[4px]'/>
               <img src={nycm} alt="partner" className='w-full h-[120px] object-cover rounded-[4px]'/>

                    <img 
          srcSet="https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_147,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png 1x, https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_294,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png 2x" 
          id="img_comp-kc5loj2e" 
          src="https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_147,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png" 
          alt="PNGmwapata_logo_version-1_three-color_lo" 
          style={{ objectFit: 'contain', objectPosition: 'unset' }} 
          className="BI8PVQ Tj01hh" 
          width="88" 
          height="88" 
        />
                      
                    </div>
                </ScrollVelocityRow>
             
            </ScrollVelocityContainer> 



        <div className='mt-10 lg:mt-12 flex gap-4 flex-wrap'>
        
       
        </div>

       </div>
    </section>
  )
}

export default Partners;