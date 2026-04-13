import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/LandingPhoto.jpg"; // Assuming this is the correct path for the image
import slider1 from "../assets/Images/Speaker_series.jpg";
import slider2 from "../assets/Images/Strategy2.jpg";
import DottedArrow from "./Icons/DottedArrow";
import { ChevronRight,ChevronLeft, ChevronDown,Facebook, Twitter, MessageCircle, Phone ,Search} from "lucide-react"; // Added Twitter and MessageCircle
import noise from "../assets/Images/Noise.png";
import logo from "../assets/Images/MwAPATA logo.pdf";



const LandingPage= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // New states for desktop Quick Links dropdown and mobile accordion
  const [isDesktopQuickLinksOpen, setDesktopQuickLinksOpen] = useState(false);
  const [openQuickLinkIndex, setOpenQuickLinkIndex] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold based on the height of your logo utility bar (h-28 = 112px, lg:h-42 = 168px)
      const threshold = window.innerWidth >= 1024 ? 148 : 112;
      if (window.scrollY >= threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const heroSlides = [
    {
      id: 1,
      image: capacity,
      highlight: "Evidence",
      title: "Generating Evidence for Agriculture Transformation in Malawi.",
      description: "MwAPATA was established with a grant from the Foundation for a Smoke-Free World via Michigan State University, and continues with the support of various strategic partners.",
    },
    {
      id: 2,
      image: slider1, // Research Image
      highlight: "Research",
      title: "Stay Informed on Research Releases.",
      description: "We are at the forefront of agricultural policy research, offering objective insights and fostering collaborations to improve livelihoods across Malawi.",
    },
    {
      id: 3,
      image: slider2, // Use another image for the third slide
      highlight: "Collaboration",
      title: "Partnerships for Impact: Strengthening Malawi's Future.",
      description: "Our work is powered by strategic partnerships with government, private sector, and civil society, ensuring impactful and sustainable change.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // Change slide every 8 seconds
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const activeSlide = heroSlides[currentSlide];

  const handleQuickLinkToggle = (index) => {
    setOpenQuickLinkIndex(openQuickLinkIndex === index ? null : index);
  };

  const quickLinksData = [
      {
      title: "Home",
     
    },
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

const navLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Who are we",
    children: [
      { title: "About Us", link: "/about-us" },
      { title: "Governance", link: "/governance" },
      { title: "Our Team", link: "/our-team" },
      { title: "Background", link: "/background" },
      { title: "Partners", link: "/partners" }
    ]
  },
  {
    title: "What we do",
    children: [
      { title: "Research", link: "/research" },
      { title: "Programmes", link: "/programmes" }
    ]
  }

];


 const socialLinks = [
      { icon: <Facebook className="white size-5 cursor-pointer hover:opacity-80 transition-opacity" /> },
      { icon: <Twitter className="white size-5 cursor-pointer hover:opacity-80 transition-opacity" /> },
      { icon: <MessageCircle className="white size-5 cursor-pointer hover:opacity-80 transition-opacity" /> },
      { icon: <Phone className="white size-5 cursor-pointer hover:opacity-80 transition-opacity" /> }
    ];



  return (
    <section className="relative">
  

      {/* These are hero_contents */}
      <div className="min-h-[80vh] Section_wrapper items-center flex relative" style={{ backgroundImage: `url(${activeSlide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <img src={noise} alt="noise" className="absolute hidden inset-0 w-full mix-blend-overlay opacity-40  clip h-full object-cover"/>
                  <div className="absolute hidden lg:flex z-0 inset-0 bg-gradient-to-r from-[var(--secondary-color)]/50 via-[#3A9B3D]/90 to-[#3A9B3D]/90 opacity-75"></div>
                  <div className="absolute flex lg:hidden z-0 inset-0 bg-gradient-to-b from-[var(--primary-color)]/70 via-[#3A9B3D]/60 to-[#3A9B3D]/90 opacity-75"></div>
              
              
              <header className={`
            ${isScrolled ? "fixed bg-orange  py-2" : "absolute mt-0  py-4"} 
            w-full top-0 left-0  px-6 lg:px-18 z-50 transition-all duration-490 ease-in-out
          `}>
      <nav className="  relative  flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4"> {/* Container for logo and social icons */}
       
          {/* Social Media Icons */}
          <div className="flex  lg:flex gap-4">
            {socialLinks.map((social) => (
            <div className="p-2 cursor-pointer border border-[#fffced]/30 rounded-full transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] ">
              {social.icon}
            </div>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
       <ul className="hidden  barlow uppercase md:flex items-center gap-8 white font-medium">
        {navLinks.map((item, index) => (
          <li key={index} className="relative links group cursor-pointer">
               <Link className="block uppercase py-2" to={item.link}>
                               {item.title}
                         </Link>

             {item.children && (
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col pt-4 z-40">
                <div className="bg-[#eef7e3] min-w-[300px] shadow-2xl">
                 <ul className="flex lowercase archivo flex-col">
                  {item.children.map((child, i) => (
                     <li key={i} className="border-b border-b-[#4a4a4a]/10">
                                        <Link to={child.link} className="text_link" >{child.title}</Link> 
                                      </li>
                  ))}
                 </ul>
                </div>
              </div>
             )}
          </li>
         ))}
     <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="glass border flex items-center archivo text-[14px] bg-[#f8ffef]/40 backdrop-blur-2xl px-6 py-2 border-[#fffced]/60 outline-offset-0 focus:outline-[#fffced]/10 focus:border-[#fffcedwhite rounded-full  placeholder:text-[#fffced] w-40 hover:w-64 transition-width duration-350 ease-in-out"
    />
    <Search className="white absolute right-3 top-3 size-4" />
  </div>
      
      </ul>
      

        {/* CTA */}
      

        {/* Mobile Menu Button */}
            <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex md:hidden bg-[#ff8000] rounded-[4px] p-4 flex-col justify-center items-center gap-1.5 "
    >
      {/* Top line */}
      <motion.span
        className="w-8 h-[3px] bg-[#fffced]"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 10 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Middle line */}
      <motion.span
        className="w-8 h-[3px] bg-[#fffced]"
        animate={{
          opacity: isOpen ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Bottom line */}
      <motion.span
        className="w-8 h-[3px] bg-[#fffced]"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0
        }}
        transition={{ duration: 0.3 }}
      />
           </button>


      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="md:hidden flex rounded-[4px] flex-col w-[90%]  absolute top-full  gap-6  p-6
         bg-[#eef7e3] z-40 min-h-[calc(100vh-92px)] overflow-y-auto"
        >
          <div className="w-full mb-4">
            <input
              type="text"
              placeholder="Search ..."
              className="text_field"
            />
          </div>
          {quickLinksData.map((section, index) => (
            <nav key={index} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <button
                  className={`Card_heading barlow mb-0 font-semibold text-[22px] text-[var(--primary-color)] ${section.links ? 'cursor-pointer' : ''}`}
                  onClick={() => section.links && handleQuickLinkToggle(index)}
                >
                  {section.title}
                </button>
                {section.links && (
                  <ChevronRight
                    className={`flex transition-transform duration-400 ease-in-out transform ${openQuickLinkIndex === index ? "-rotate-90" : ""}`}
                    color="#3A9B3D"
                    onClick={() => handleQuickLinkToggle(index)}
                  />
                )}
              </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full origin-left h-[1.5px] mb-2 mt-2 bg-green"
                    />
              {section.links && (
                <AnimatePresence>
                  {openQuickLinkIndex === index && (
                    <motion.div
                      layout
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
        </motion.div>
      )}

  
              </header>
          

         
          <div className="flex flex-col gap-4  z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide} // Unique key for AnimatePresence to detect slide change
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col gap-4"   
              >
                <motion.div variants={itemVariants}>
                  <div className="flex">
                    <div className="h-[2.5px] w-[121.6px] z-10 bg-[#fffced]"></div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h4 className="Section_title white lg:text-[46px] lg:leading-[46px]">
                    {activeSlide.title}
                  </h4>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <p className="white text_para lg:w-150">
                    {activeSlide.description}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="Glassy_btn m-0 bg-orange" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <h2 className="white relative uppercase text-[16px] font-semibold">Learn More</h2>
                    <div className="flex flex-col gap-1">
                    <motion.span className="bg-white h-[1.2px] w-3 block" 
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      rotate: isHovered ? 35 : 0
                    }}
                    transition={{ duration: 0.45 }}
                    />
                      <motion.span className="bg-white h-[1.2px] w-3 block" 
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      rotate: isHovered ? -38 : 0
                    }}
                    transition={{ duration: 0.2, ease:"easeInOut"}}
                    />
                    </div>
                  </div>

                  
               


                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-[80%] lg:top-1/2  Glassy_btn p-2 rounded-full z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="white size-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-[80%] lg:top-1/2  Glassy_btn p-2 rounded-full z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="white size-6" />
            </button>

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-18 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full  h-[2.8px] w-2 transition-all ${currentSlide === index ? "bg-[#fffced]/80 rounded-sm backdrop-blur-2xl scale-125" : "rounded-sm backdrop-blur-2xl bg-[#fffced]/40 size-2" }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                </button>
              ))}
            </div>
          </div>
      </div>

    </section>
  );
};

export default LandingPage;