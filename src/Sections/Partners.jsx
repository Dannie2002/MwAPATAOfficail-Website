import React, { useState } from 'react';
import{ ScrollVelocityRow } from "../Componets/ScrollVelocity.jsx";

const Partners = () => {
  return (
    <section>
        <div className='bg-green'>
                  
            <ScrollVelocityRow baseVelocity={4} className='lg:p-0'>
              <div className=' flex  gap-16 w-[600px]'>
                  
          <h4 className='Section_title white'>Evidence for Transformation</h4>
                  
                </div>
            </ScrollVelocityRow>
                

        
        </div>
      
    </section>
  )
}

export default Partners;