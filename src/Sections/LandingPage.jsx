import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/LandingPhoto.jpg"; // Assuming this is the correct path for the image
import DottedArrow from "./Icons/DottedArrow";
import { ChevronDown, Facebook, Twitter, MessageCircle, Phone } from "lucide-react"; // Added Twitter and MessageCircle
import noise from "../assets/Images/Noise.png";
import logo from "../assets/Images/MwAPATA logo.pdf";


const LandingPage= () => {
  const [isOpen, setIsOpen] = useState(false);

  // New states for desktop Quick Links dropdown and mobile accordion
  const [isDesktopQuickLinksOpen, setDesktopQuickLinksOpen] = useState(false);
  const [openQuickLinkIndex, setOpenQuickLinkIndex] = useState(null);

   const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.79, ease: "easeInOut" }
    },
  };

  const handleQuickLinkToggle = (index) => {
    setOpenQuickLinkIndex(openQuickLinkIndex === index ? null : index);
  };

  const quickLinksData = [
    {
      title: "About MwAPATA",
      links: ["Our Team", "Strategic Plan", "Governance", "Partners"],
    },
    {
      title: "Management",
      links: ["Executive Team", "Board of Directors", "Advisory Committee", "Leadership"],
    },
    {
      title: "Background",
      links: ["Research Focus", "Programs", "Publications", "Policy Engagement", "Impact Stories"],
    },
    // Add other main navigation links here if they should be part of the mobile quick links
    { title: "Main Navigation", links: ["Home", "About", "Events", "Publications & Resources", "Eminent Speaker Series"], isMain: true }
  ];




  return (
    <section className="relative ">
      {/* Top Utility Bar - Reduced height and anchored */}
      <div className="w-full z-0 bg-[#eaeee5] h-42 flex items-center justify-center">
        <img src={logo} type="application/pdf" className="w-[180px] h-[120px]" />
      </div>

    
  
      

      {/* These are hero_contents */}
      <div className="Section_wrapper flex items-center min-h-screen  relative" style={{backgroundImage: `url(${capacity})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          <header className="w-full absolute inset-0 top-0 lg:px-18 z-10">
      <nav className="relative  flex items-center justify-between  py-4">

        {/* Logo */}
        <div className="flex items-center gap-4"> {/* Container for logo and social icons */}
       
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Phone className="white size-5 cursor-pointer hover:opacity-80 transition-opacity"/>
            <Facebook className="white size-5 cursor-pointer hover:opacity-80 transition-opacity"/>
            <Twitter className="white size-5 cursor-pointer hover:opacity-80 transition-opacity"/>
            <MessageCircle className="white size-5 cursor-pointer hover:opacity-80 transition-opacity"/>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden  barlow uppercase md:flex items-center gap-8 white font-medium">
          <li className="hover:text-green cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">About</li>
          <li className="hover:text-green-700 cursor-pointer">Events</li>
          <li className="hover:text-green-700 cursor-pointer">Publications & Resources</li>
          <li className="hover:text-green-700 cursor-pointer">Eminent Speaker Series</li>
        </ul>

        {/* CTA */}
        <button className="hidden bebas text-[18px] white border-[#fffced] border-[0.7px] uppercase bg-transparent px-8 py-2   transition-all duration-500 ease-in-out"
        onClick={() => setDesktopQuickLinksOpen(!isDesktopQuickLinksOpen)}>
            Quick Link
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 absolute right-0 top-full mt-0 w-full p-8
        backdrop-blur-4xl bg-[#eee] z-40
        transform transition-all duration-300 ease-out
        animate-[dropdown_0.6s_ease-out] max-h-[calc(100vh-64px)] overflow-y-auto"
        >
          <div className="w-full mb-4">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full bg-transparent border-b border-[#4a4a4a] outline-none py-2 text-[18px] placeholder-[#4a4a4a] text-grey focus:border-green transition-all duration-300"
            />
          </div>
          {quickLinksData.map((section, index) => (
            <nav key={index} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h6
                  className={`Card_heading agdasima mb-0 font-semibold text-[22px] text-[var(--primary-color)] ${section.links ? 'cursor-pointer' : ''}`}
                  onClick={() => section.links && handleQuickLinkToggle(index)}
                >
                  {section.title}
                </h6>
                {section.links && (
                  <ChevronDown
                    className={`flex transition-transform duration-450 ease-in-out transform ${openQuickLinkIndex === index ? "rotate-180" : ""}`}
                    color="#3A9B3D"
                    onClick={() => handleQuickLinkToggle(index)}
                  />
                )}
              </div>
              <motion.div className="w-full relative h-[1.5px] mb-2 mt-2 bg-green"></motion.div>
              {section.links && (
                <AnimatePresence>
                  {openQuickLinkIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="flex flex-col gap-3 overflow-hidden"
                    >
                      {section.links.map((link, i) => (
                        <a key={i} className="link cursor-pointer text-[17.5px] text-grey link-hover">
                          {link}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </nav>
          ))}
        </div>
      )}

      {/* Desktop Quick Links Dropdown */}
      {isDesktopQuickLinksOpen && (
        <div className="hidden md:flex flex-col gap-6 absolute right-0 top-full mt-0 w-full h-[400px] p-8
        backdrop-blur-4xl bg-[#eee] z-40
        transform transition-all duration-300 ease-out
        animate-[dropdown_0.6s_ease-out]"
        >
          <div className="w-1/4 mb-4">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full bg-transparent border-b border-[#4a4a4a] outline-none py-2 text-[18px] placeholder-[#4a4a4a] text-grey focus:border-green transition-all duration-300"
            />
          </div>

          <div className="Grid_4">
            {quickLinksData.filter(section => !section.isMain).map((section, index) => (
              <div key={index}>
                <h4 className="text-green bebas text-[24px] mb-3">{section.title}</h4>
                <ul className="space-y-2 text-gray-700">
                  {section.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
          </header>

          <img src={noise} alt="noise" className="absolute inset-0 w-full mix-blend-overlay opacity-30  clip h-full object-cover"/>
          <div className="absolute z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]/60 via-[#3A9B3D]/60 to-[#3A9B3D]/90 opacity-75"></div>
          <div className="flex lg:gap-4 flex-col items-center justify-between lg:items-start">
              <div className="flex mb-4 gap-4 flex-center">
                <div className="h-[25px] w-[2.6px] z-10 bg-[#fffced]"></div>
                  <motion.h5  className="white text_para z-10" initial={{ opacity: 0, y: -90, }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.55, delay:0.2 , ease: "easeInOut" }} >
                    <span className=" font-semibold">Evidence</span> for Transformation
                
                </motion.h5>
              </div>
                                                
              <motion.h4 className="Section_title z-10 font-black text-center lg:text-start white text-[48px] leading-[48px] lg:leading-[55px] lg:text-[64px]"
              initial={{ opacity: 0, y: -90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.55, ease: "easeInOut" }}
              >
                <span className=" ">RESEARCH </span> THAT IMPROVES LIVELIHOOD<br /> IN MALAWI.
              </motion.h4>
                  
            
              <motion.div className="relative" variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}> 
                <motion.p className="white relative z-10 w-[430px] archivo lg:text-[18px] font-light mt-6 lg:text-left text-center text-[16px] lg:w-[500px]" variants={itemVariants}>
                  MwAPATA was established with a grant from the Foundation for a Smoke-Free World via Michigan 
                  State University, and continues with the support of various strategic partners. 
                </motion.p>             
              <motion.div className="flex gap-4 mt-6 items-center" variants={itemVariants}>
                <h2 className="white font-light">Learn More</h2>
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[45px] h-[1.6px] bg-green"
                ></motion.div>
              </motion.div>
              </motion.div> 

          </div>


      </div>

    </section>
  );
};

export default LandingPage;