import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import ceo from "../assets/Images/CEO.jpg";
import research from "../assets/Images/Research.jpg";
import employee1 from "../assets/Images/Employee1.jpg";
import employee2 from "../assets/Images/Employee2.jpg";
import team from "../assets/Images/Team_Mwapata.jpg";
import blessme from "../assets/Images/Blessme_employee.jpg";
import unknown from "../assets/Images/Unknown_employee.jpg";
import Section_header from "./Section_header";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Governance = () => {


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
      transition: { duration: 0.69, ease: "easeInOut" }
    },
  };



    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const Employees = [
  {
    id: 1,
    name: "Prof. Richard Mkandawire",
    title: "Chairperson, Board of Directors",
    description:
      "Prof. Mkandawire has over 40 years’ experience in development policy and academia. Prof Mkandawire was recently appointed to the External Advisory Committee of the African Union – European Union International Research Consortium on Food and Nutritional Security for Sustainable Agriculture. Prof Mkandawire chaired Malawi’s National Planning Commission from 2017, overseeing the rollout of Malawi2063. Prof Mkandawire recently retired as the Africa Director of the Alliance for African Partnership. Prof Mkandawire also worked as Vice President of the African Fertilizer and Agribusiness Partnership where he led a team of experts in driving innovative interventions for efficient and effective delivery of fertilizers among smallholder famers in Africa.",
    image: ceo,
  },   
  {
    id: 2,
    name: "Dr. Agnes Mwangwela",
    title: "Member, Board of Directors",
    description:
      "Dr. Mwangwela is a seasoned researcher and a food scientist with 26 years' experience in university teaching at Lilongwe University of Agriculture and Natural Resources (LUANAR) with additional experience in domestic and international partnership engagements. Dr Mwangwela is currently serving as Deputy Vice Chancellor of LUANAR. She has previously served in several university leadership positions ranging from Head of Home Economics Department, Chairperson of Deans, College Director of LUANAR-Bunda Campus. Dr Mwangwela holds a Ph.D. in Food Science from University of Pretoria, an MSc. and BSc. from the University of Malawi. She is a recipient of The Norman E. Borlaug International Agricultural Science and Technology Fellowship among other awards.",
    image: blessme,
  },
  {
    id: 3,
    name: "Dr. Yanira Ntupanyama",
    title: "Member, Board of Directors",
    description:
      "Dr. Ntupanyama is currently serving as Chairperson of the Malawi Environmental Protection Authority. She recently retired from the public service, where her last position was Principal Secretary in the Ministry of Natural Resources and Climate Change. Dr Ntupanyama has previously served as Chief Director in the Ministry of Agriculture, Irrigation and Water Development. She also served as Director of Environmental Affairs. Dr Ntupanyama holds a PhD in Horticultural Sciences specialized in socioeconomic, fruit analysis, and propagation of indigenous fruit trees. She also has an Msc. in Forestry and Range Management; a Bsc. in Agriculture; and a Diploma in Environment Law Making and Negotiations of all Environmental Conventions. Her ambition is to address clean energy, waste management and phase out plastics and burnt bricks.",
   image: employee1, 
  },
  {
    id: 4,
    name: "Prof. Thom Jayne",
    title: "Member, Board of Directors",
    description:
      "Prof Jayne is University Foundation Professor Emeritus of Agricultural, Food, and Resource Economics at Michigan State University (MSU). Prof Jayne is a Fellow of the Agricultural and Applied Economics Association and Distinguished Fellow of the African Association of Agricultural Economists. His work spans numerous topics, including food marketing and price policies, changes in land use patterns, sustainable intensification, employment, and rural transformation. Prof Jayne has played a major role in building MSU’s partnerships with African agricultural policy research institutes. Prof Jayne was a founding Co-Director of the Alliance for African Partnership at MSU. Prof Jayne previously served as the Principal Investigator of the MwAPATA Institute providing technical strategic direction by working closely with the Institute’s senior management.",
   image: unknown,
  },
];

  return (
    <section className="Section_bg">
            <Section_header
        title="Board of Directors"
        bgImage={team}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ Board of Directors" }
        ]}
      />

       <div className="Section_wrapper">
      
      <div className="flex flex-col lg:items-start lg:justify-between mt-5 lg:mt-18">
              <h4            
                className="Section_title">
                MwAPATA Institute Governance
              </h4>

              <p className="text_para lg:w-[80%] mt-6">
                The Institute is guided by a Board of Directors and an Advisory Board. The Boards are made up of members from key stakeholders in the agricultural sector and balanced in terms of skills, knowledge and experience from the public sector, private sector, civil society and development partners in the agricultural/agrifood system.
              </p>
               {/* Two Lines on the right */} 
              <div className="flex flex-col hidden lg:mt-12 mt-6 items-start lg:items-end">
                  <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.3, ease: "easeInOut" }}
                  className="mt-2 w-[90px] h-[4px] bg-green "></motion.div>
                  <motion.div
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.99, ease: "easeInOut" }}
                  className="mt-2 w-[50px] h-[4px] bg-orange"></motion.div>
              </div>
      </div>
             {/* This is a grid for empployees card */} 
        <div className="Grid_4">
          {Employees.map((employee) => (
            <div 
              key={employee.id} 
              className="relative lg:bg-[#eaeee5] group  cursor-pointer"
              onClick={() => setSelectedEmployee(employee)}
            >
              <div className="relative h-[330px] lg:h-[430px] overflow-hidden z-0 shadow-3xl">
                <img src={employee.image} alt={employee.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute lg:hidden lg:group-hover:flex transition-colors duration-450 ease-in-out inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 "></div>

              </div>
                <motion.div variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="absolute lg:relative flex flex-col lg:py-4 gap-2 p-4 justify-end items-start inset-0 z-10"> 
                  <motion.h4 variants={itemVariants} className="Card_heading lg:mt-4">{employee.name}</motion.h4>
                  <motion.p variants={itemVariants} className="lg:text-[var(--text-color)] text-[#fffced] lg:mt-3 mt-1 text-[18px] font-light">{employee.title}</motion.p>
                  <motion.div variants={itemVariants} className="flex-center mt-2 gap-2">
                  <h6 className=" lg:text-(--secondary-color) z-50 text-[#fffced] text-[14px] uppercase font-semibold">Learn More</h6>
                  <ChevronRight className="lg:text-(--secondary-color) z-50 text-[#fffced] size-6 " />
                  </motion.div>
                </motion.div>
              
            </div> 
             ))}
        </div>


           {/* NEXT & PREV BUTTONS */}
            <div className="flex items-start flex-wrap  mt-6 gap-4 lg:mt-12  transition ">
                         <div className="p-2 size-12 group flex-center bg-green hover:bg-[var(--secondary-color)]/60 duration-470">
                           <ChevronLeft className="text-[#fffced] size-6 group-hover:text-white" />
                         </div>
                        
                         <div className="p-2 size-12 flex-center group bg-green hover:bg-[var(--secondary-color)]/80 duration-500">
                           <ChevronRight className="text-[#fffced] size-6 group-hover:text-white" />
                         </div>
                         
               
            </div>

         {/* Professional Detail Modal */}
         <AnimatePresence>
           {selectedEmployee && (
             <div 
               className="fixed inset-0 h-full top-0 z-[100] flex items-center justify-center  bg-black/40 backdrop-blur-md"
               onClick={() => setSelectedEmployee(null)}
             >
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
                 className="bg-[#eaeee5] w-full h-full flex flex-col rounded-[4px] shadow-2xl overflow-hidden"
                 onClick={(e) => e.stopPropagation()}
               >
                 {/* Header Section with Close Button */}
                 <div className="flex items-center justify-end p-2 lg:p-4 bg-[#f8ffef] sticky top-0 z-50">
                   <button 
                     onClick={() => setSelectedEmployee(null)}
                     className="p-2 hover:bg-green/10 rounded-full transition-all"
                   >
                     <X className="size-6 text-green"/>
                   </button>
                 </div>

                 {/* Scrollable Content Section */}
                 <div className="overflow-y-auto  Section_wrapper ">
                   <div className="flex flex-col gap-6">
                     <div className="flex flex-col gap-4 mt-2 lg:mt-4 items-start">
                       <h4 className="Card_heading text-grey">{selectedEmployee.name}</h4>
                       <p className="text-[var(--text-color)] text-[18px] font-light">{selectedEmployee.title}</p>
                          <motion.div
                                       initial={{ opacity: 0, x: 80 }}
                                       whileInView={{ opacity: 1, x: 0 }}
                                       transition={{ duration: 1.99, ease: "easeInOut" }}
                                       className="w-full relative h-[1.5px]  bg-green"
                                     ></motion.div>
                     </div>
                     <p className="text-grey leading-relaxed whitespace-pre-line">
                       {selectedEmployee.description}
                     </p>
                   </div>
                 </div>
               </motion.div>
             </div>
           )}
         </AnimatePresence>
      </div>

    </section>
  );
};

export default Governance;