import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/MwAPATA logo.pdf";



const MainHeader= () => {

const topLinks = [

  {
    title: "News & Events",
    children: [
      { title: "News", link: "/news",
          children: [
            { title: "Recent News", link: "/recent+past-news" },
            { title: "Announcements", link: "/announcements" }
            
          ]
       },
      { title: "Events", link: "/events" ,
               children: [
      { title: "Recent Events", link: "/recent-events" },
      { title: "Upcoming Events", link: "/upcoming-events" },
      { title: "MAAPC 2021", link: "/maapc-2021" },
      { title: "MAAPC 2022", link: "/maapc-2022" },
      { title: "MAAPC 2023", link: "/maapc-2023" },
      { title: "MAAPC 2024", link: "/maapc-2024" },
      { title: "IFPRI-MWAPATA Seminal Series", link: "seminal-series" },
          ]        

      },
    
    ]
  },


  {
    title: "Job Listings",
    link: "/job-listings"
  },

  {
    title: "Get Involved",
    children: [
        { title: "Contact Us", link: "/contact-us"},
      { title: "Publication Feedback", link: "/publications-feedback" },
      { title: "YouTube Channel", link: "/events" },
    ]
  },
  {
    title: "Publications & Resources",
     children: [
      { title: "Publications", link: "/publications", 
            children: [
              { title: "Working Papers", link: "/Publications/working-papers" },
              { title: "Policy Brief", link: "/policy-brief" },
              { title: "Policy Perspectives", link: "/policy-perspective" },
              { title: "Peer Review Research", link: "/peer-review-research" },
           
              ]


      },
      { title: "Resources", link: "/resources",
            children: [
                { title: "Reports", link: "/reports" },
              { title: "Presentations", link: "/presentations" },
              { title: "Data Portal", link: "/Publications/data-portal" },
              { title: "Data Policy", link: "/Publications/data-policy" },
              { title: "Request Data", link: "/Publications/request-data" },
              { title: "Capacity Building Seminars", link: "/Publications/seminars" }
            
            ]
      },  
    
    ]
     
    
  },

  {
    title: "Eminent Speaker Series",
    link: "/eminent-speaker"
  }
];
    
 
 



  return (
    
    <section className="relative">

      {/* TopMost part where the logo is placed */}
      <div className="w-full  z-0 bg-[#eef7e3] py-4 flex items-center justify-center">
        
        <img 
          srcSet="https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_147,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png 1x, https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_294,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png 2x" 
          id="img_comp-kc5loj2e" 
          src="https://static.wixstatic.com/media/dd6c2f_331a408a7e044da4af19d95daa264c9f~mv2.png/v1/fill/w_147,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PNGmwapata_logo_version-1_three-color_lo.png" 
          alt="PNGmwapata_logo_version-1_three-color_lo" 
          style={{ objectFit: 'contain', objectPosition: 'unset' }} 
          className="BI8PVQ Tj01hh" 
          width="150" 
          height="88" 
        />
      </div>

        {/* The green Navbar just below the logo */}
      <div className="bg-green hidden lg:flex items-center justify-center  py-2">
        <ul className="hidden  barlow md:flex items-center gap-8 white font-medium">
        {topLinks.map((item, index) => {
 
        const hasGrandChildren = item.children?.some(child => child.children);
          return(
            <li key={index} className="relative  group cursor-pointer">
             <Link className="block uppercase py-2" to={item.link}>
                   {item.title}
             </Link>

             {item.children && (
              <div className="absolute div_clip top-full left-0   hidden group-hover:flex  pt-2 z-90">
                <div className={`bg-[#e1e6da] shadow-2xl ${hasGrandChildren? "grid grid-cols-2 gap-8 min-w-[550px]": "min-w-[340px]"}`}>

                   {/* Absolute div that appears on hover with child links */}
                  {!hasGrandChildren &&(
                    <ul className="flex flex-col">
                      {item.children.map((child, idx) => (
                      <li key={idx} className="border-b  border-b-[#4a4a4a]/10">
                        <Link to={child.link} className="text_link " >{child.title}</Link> 
                      </li>
                      ))}
                    </ul>
                  )}
               
                  {/* Absolute div that appears on hover with Grandchildren links,, The mega Menu */}   
                  {hasGrandChildren &&
                    item.children.map((section, i) => (
                   <div key={i} className="p-4">
                      <h4 className="font-semibold uppercase pointer-default  text-green mb-2">
                        {section.title}
                      </h4>

                      <ul>
                          {section.children && section.children.map((child, j) => (
                        <li key={j} className="border-b  border-b-[#4a4a4a]/10">
                          <Link to={child.link} className="block text-grey hover:text-(--primary-color) p-4 archivo capitalize text-[15px] hover:translate-x-2  transition-all duration-490 " >{child.title}</Link> 
                        </li>
                          ))}
                      </ul>
                   </div>
                    ))}



                </div>
              </div>
             )}

          </li>
         )})}
        </ul>
      </div>


    </section>
  );
};

export default MainHeader;