import React, { useState } from 'react';
import{ ScrollVelocityRow } from "../Componets/ScrollVelocity.jsx";

const Partners = () => {
  return (
    <section>
        <div>
                  
            <ScrollVelocityRow baseVelocity={14} className='lg:p-0'>
              <div className=' flex  gap-6 min-w-[400px]'>
                  
                  <div className='lg:size-14 size-14 text text-blue-400 flex-center backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    <h1>h3</h1>
                  </div>
                  <div className='lg:size-14 size-14 flex-center text text-green backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    <h1>hello</h1>
                  </div>
                  
                </div>
            </ScrollVelocityRow>
                

        
        </div>
      
    </section>
  )
}

export default Partners;