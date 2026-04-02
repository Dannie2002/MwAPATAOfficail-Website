import React, { useState } from "react";
import noise from "../assets/Images/Noise.png";
import logo from "../assets/Images/MwAPATA logo.pdf";
import { motion, AnimatePresence } from "framer-motion";
import {Facebook, ChevronDown, ChevronUp,ChevronRight } from "lucide-react";
import {MessageCircle, Twitter } from "lucide-react";


const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      transition: { duration: 0.79, ease: "easeInOut" }
    },
  };
  
  const footerLinks = [
    {
      title: "Who we are",
      links: ["About us", "Our Team","Background", "Governance", "Partners"],
    },
    {
      title: "What We Do",
      links: ["About us", "Contact", "Jobs", "Press kit"],
    },
    {
      title: "Get involved",
      links: ["YouTube Channel", "Publication Feedback", "JobListing", "Contact Us"],
    },
    {
      title: "Find Us:",
      socials: [<Facebook size={35} key={1} />, <MessageCircle size={35} key={2} />, <Twitter size={35} key={3} />],
    }
  ];


  return (
    <footer className="min-h-[70vh] relative bg-[#f8ffef]">
      <div className="absolute bg-green inset-0 z-20 top-0 opacity-30 -left-20 size-[120px] rounded-full"></div>
       <div className="absolute bg-[#eaeee5] inset-0 z-20 top-4 rounded-full -left-20 size-[90px]"></div>
   
                      
       <div className="Section_wrapper z-20">

         <div className="Grid_4 z-20">
           {footerLinks.map((section, index) => (
            <nav key={index} className="flex flex-col z-20 gap-2">
            <div className="flex items-center justify-between z-20">
            <h6
                className={`Card_heading agdasima mb-0  font-semibold lg:mb-4 text-[26px]  text-[var(--primary-color)] ${section.links ? 'cursor-pointer lg:cursor-default' : ''}`}
                 onClick={() => section.links && handleToggle(index)}
            >
              {section.title}
            </h6>
            {section.links && (
              <ChevronDown
                className={`flex lg:hidden transition-transform duration-450 ease-in-out transform ${openIndex === index ? "rotate-180" : ""}`}
                size={26}
                color="#3A9B3D"
                onClick={() => handleToggle(index)}
              />
            )}
            </div>
          
                      <motion.div
                      initial={{ opacity: 0, x: 80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.99, ease: "easeInOut" }} className="w-full relative h-[1.5px] mb-2 mt-2 lg:hidden bg-green">
                      </motion.div>
            {section.links && (
              <>
                {/* Desktop view: always visible */}
                <motion.div className="hidden lg:flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                 viewport={{ once: true }}
                >
                  {section.links.map((link, i) => (
                    <motion.a key={i} variants={itemVariants} className="link cursor-pointer text-[17.5px] text-grey link-hover">
                      {link}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Mobile view: animated accordion */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0,}}
                      animate={{ height: "auto", opacity: 1}}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="flex lg:hidden flex-col gap-3 overflow-hidden"
                    >
                      {section.links.map((link, i) => (
                        <a key={i} className="link cursor-pointer text-[17.5px] text-grey link-hover">
                          {link}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
            {section.socials && (
              <div className="flex mt-4 gap-6">
                {section.socials.map((icon, i) => (
                  <div key={i} className="cursor-pointer text-green hover:opacity-70">
                    {icon}
                  </div>
                ))}
              </div>
            )}
            </nav>
        ))}

      </div>


          <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.49, ease: "easeInOut" }}
  className="w-full relative h-[1.5px] hidden lg:flex mt-12 bg-green"></motion.div>

              <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex overflow-hidden bg-transparent">
                  <embed src={logo} type="application/pdf" className="w-[180px] h-[120px]" />
                </div>
 
                            <div className="flex-col gap-6">
                                          <h6 className="Card_heading agdasima font-semibold mb-6 text-[26px] text-[var(--primary-color)] ">
                                          Subscribe to our newsletter
                                        </h6>

                                  <form id="newsletter-form" className="flex flex-row gap-4">
                                  <input type="email" id="email" placeholder="Enter your email" required
                                    className="w-full px-4 py-2 border border-[var(--secondary-color)] rounded-[4px] focus:outline-none focus:border-[var(--primary-color)]/30" />
                                  <button type="submit"
                                    className="bg-green white barlow uppercase font-semibold text-[18px] py-2 px-4 rounded-[4px] transition">
                                         <ChevronRight className="text-[#fffced] size-6 group-hover:text-white" />
                                       </button>
                                </form>
                                    
                            </div>

               </div>




               


      </div>
    
      <div className="bg-green w-full px-6 mx-auto lg:px-18  py-4 flex items-center justify-between relative">
        <p className="white text-[12px] lg:text-[14px] z-50">Privacy Policy</p>     
        <p className="white text-[12px] lg:text-[14px] z-50">©2026 MwAPATA Institute</p>
        <div className="bg-orange flex items-center justify-center px-4 py-2 gap-4 border border-[#fffced]/70 rounded-l-full z-20">
          <h6 className="white text-[12px] lg:text-[14px]">Evidence for Transformation</h6>
           <div className="flex gap-4">
                {footerLinks[3].socials.map((icon, i) => (
                  <div key={i} className="cursor-pointer text-green hover:opacity-70">
                    {React.cloneElement(icon, { size: 18, color: "#fffced"})}
                  </div>
                ))}
              </div>


        </div>
        <img src={noise} alt="research" className="absolute inset-0 w-full mix-blend-multiply opacity-30 z-0 clip h-full object-cover"/>
        <div className="absolute inset-0 z-0 bg-green opacity-60 mix-blend-multiply"></div>
      </div>


    </footer>
  );
};

export default Footer;