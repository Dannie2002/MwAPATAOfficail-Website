import React from "react";
import { motion, AnimatePresence, } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";  
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import research from "../assets/Images/Research.jpg";
import outreach from "../assets/Images/Outreach.jpg";
import publications from "../assets/Images/Publications.jpg";
import noise from "../assets/Images/Noise.png";
import policy from "../assets/Images/Policy_advocacy.jpg";
import Section_header from "./Section_header";
import { publications_types, Resources } from "../Constants/data";

const Publications = () => {

  const [isHovered, setIsHovered] = React.useState(false);

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
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.79, ease: "easeInOut" }
    },
  };
const [activeCard, setActiveCard] = useState(0);
const [activePublication, setActivePublication] = useState(null)
const [activeResource, setActiveResource] = useState(null)


  return (
    <section className=" bg-[#eef7e3]">
      <Section_header
        title="Publications"
        bgImage={publications}
        breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "/Publications" }
       ]}
      />


      <div className="Section_wrapper">
      
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mt-10 lg:mt-6">
              <h4
           
                className="Section_title">
                MwAPATA's three main publication lines offer distinct options to meet the reader's needs
              </h4>

              
      </div>

          {/* Grid for publications card */}
 <motion.div
  className="flex flex-col lg:flex-row top_margin gap-4 h-[640px] lg:h-[420px]"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {publications_types.map((publication,index) => {
 const isActive =
  activePublication === index || (activePublication === null && index === 0)

const anyActive = activePublication !== null

    return (
      <motion.div
        key={publication.id}

        style={{
          flex: isActive ? 2 : anyActive ? 0.8 : 1,
          minWidth: "90px",
          transition: "flex 380ms ease",
        }}
        className="relative  shadow-3xl rounded-[4px] overflow-hidden"
      >
        <div className="relative h-full rounded-[4px] overflow-hidden z-0 group shadow-3xl">
          <img
            src={publication.image}
            alt={publication.title}
            className="w-full group-hover:scale-110 transition-all duration-700 ease-in-out h-full rounded-[4px] object-cover"
          />

          <img
            src={noise}
            alt="research"
            className="absolute inset-0 w-full mix-blend-overlay opacity-30 clip h-full object-cover"
          />

          
           <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[#3A9B3D]/70 to-transparent opacity-100"></div>
        </div>

        <motion.div
          animate={{
            y: isActive ? -160 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute bottom-0 z-10 flex items-center gap-3 p-4 w-full"
        >
        <motion.h4
            animate={{
              opacity: isActive ? 0 : 1,
            }}
            transition={{ duration: 0.25 }}
            className="Card_heading white"
          >
          {publication.title}
        </motion.h4>
    <AnimatePresence>
     {!isActive && (
      <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => {
        e.stopPropagation();
        setActivePublication(index);
      }}
      className="cursor-pointer p-2 bg-(--primary-color)"
    >
      <RightArrow size={28} color="#fffced" />
      </motion.div>
       )}
     </AnimatePresence>
          
  </motion.div>

        <AnimatePresence>
  {isActive && (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute bottom-0 left-0 p-6 z-10 max-w-full"
    >
             <h4 className="text-5xl Card_heading white mb-4">{publication.title}</h4>

      <p className="text_para  white">
        {publication.description}
      </p>

      <div className="mt-4 white font-semibold">
        <Link to={publication.link}>
          Learn More
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </motion.div>
    );
  })}
</motion.div>

       <h4 className="Counter_title mt-12">
              <span className="font-semibold">In addition</span> to our own publications, we offer the following resources
              </h4>

  

<motion.div
  className="flex top_margin flex-col lg:flex-row gap-4 h-[640px] lg:h-[420px]"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
{Resources.map((resource, index) => {

const isActive =
  activeResource === index || (activeResource === null && index === 2)

const anyActive = activeResource !== null

return (

<motion.div
  key={resource.id}
  style={{
    flex: isActive ? 2 : anyActive ? 0.8 : 1,
    minWidth: "90px",
    transition: "flex 380ms ease",
  }}
  className={`relative shadow-3xl rounded-[4px] overflow-hidden ${
    index === 2 ? "lg:col-span-2" : ""
  }`}
>

{/* Image Layer */}
<div className="relative h-full rounded-[4px] overflow-hidden z-0 group shadow-3xl">
  <img
    src={resource.image}
    alt={resource.title}
    className="w-full group-hover:scale-110 transition-all duration-700 ease-in-out h-full object-cover"
  />

  <img
    src={noise}
    alt="research"
    className="absolute inset-0 w-full mix-blend-overlay opacity-30 h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[#3A9B3D]/70 to-transparent opacity-100"></div>
</div>


{/* Title + Arrow */}
<motion.div
  animate={{
    y: isActive ? -160 : 0,
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="absolute bottom-0 z-10 flex items-center gap-3 p-4 w-full"
>

<motion.h4
  animate={{
    opacity: isActive ? 0 : 1,
  }}
  transition={{ duration: 0.25 }}
  className="Card_heading white"
>
{resource.title}
</motion.h4>


<AnimatePresence>
{!isActive && (
<motion.div
  initial={{ opacity: 0, x: -10 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -10 }}
  transition={{ duration: 0.25 }}
  onClick={(e) => {
    e.stopPropagation();
    setActiveResource(index);
  }}
  className="cursor-pointer p-2 bg-(--primary-color)"
>
<RightArrow size={28} color="#fffced" />
</motion.div>
)}
</AnimatePresence>

</motion.div>


{/* Expanded Content */}
<AnimatePresence>
{isActive && (
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 30 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="absolute bottom-0 left-0 p-6 z-10 max-w-full"
>

<h4 className="text-5xl Card_heading white mb-4">
{resource.title}
</h4>

<p className="text_para white">
{resource.description}
</p>

<div className="mt-4 white font-semibold">
<Link to={resource.link}>
Learn More
</Link>
</div>

</motion.div>
)}
</AnimatePresence>

</motion.div>

);
})}
</motion.div>

      
  </div>        
    </section>
  );
};

export default Publications;