import React, { useState, useRef } from "react";
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

const OurTeam = () => {

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
   const teamRef = useRef(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const [visibleCount, setVisibleCount] = useState(4); // Number of employees to show initially
    
    const Employees = [
  {
    id: 1,
    name: "Mr. William Chadza",
    title: "Finance and Administration Manager",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: ceo,
  },   
  {
    id: 2,
    name: "Mr. Blessme Phiri",
    title: "Commmunications Officer",
    description:
      "Blessme has been a media practitioner for over 7 years, working in development communications, public relations, community mobilization, media academia, strategic communications, social marketing, graphic designing and audio-visual media production. He holds a Bachelor of Arts in Media for Development from the University of Malawi (UNIMA) and currently studying Master of Ars in Theatre and Media Communications for Development at UNIMA as well. Blessme has worked as a Program Officer in the USAID Health Communication for Life project, and as a part-time lecturer in Media for Development at the University of Malawi. Prior to joining MwAPATA Institute, Blessme worked as Communications Officer for CRECCOM.",
    image: blessme,
  },
  {
    id: 3,
    name: "Ms. Mercy Chirwa",
    title: "Finance and Administration Manager",
    description:
      "Mercy is an accomplished Finance, Grants Management and Administration Specialist with over 12 years of practical experience. She has worked with various International NGOs and managed funds from donors like USAID, DFID, EU, Flanders, Norway, UN, JICA and GIZ. Mercy holds a Master of Business Administration from UNICAF University and Bachelor of Business Administration majoring in Accounting from University of Eastern Africa-Kenya. As Finance and Administration Manager, she has overall strategic and operational responsibility for financial and operations management of MwAPATA Institute.",
   image: employee1, 
  },
  {
    id: 4,
    name: "Mrs. Joyce Minofu",
    title: "Research Analyst",
    description:
      "Joyce holds MSc in Agricultural and Applied Economics from Lilongwe University of Agriculture and Natural Resources (LUANAR)  and University of Pretoria. She successfully completed some research studies whose results were published and presented to different conferences. Joyce's interests are in agricultural policy, natural resource economics and rural development. Previously, Joyce worked with several individuals and organizations in research and program management. Before joining MwAPATA, Joyce worked as a Research Associate (Adoption, Impact and Markets) at International Institute of Tropical Agriculture (IITA).",
   image: unknown,
  },

  {
    id: 5,
    name: "Mrs. Dinah Salonga",
    title: "Research Analyst",
    description:
      "Dinah is an agriculture economist holding of Masters Degree in Agriculture and Applied Economics majoring in Agricultural Policy Analysis from Lilongwe University of Agriculture and Natural Resources (LUANAR) and the University of Pretoria. Dinah has worked with Opportunity International Bank of Malawi (OIBM) and GIZ before joining the MwAPATA Institute. In addition, she also worked as a freelance research assistant on various consultancies. She has experience in research, project management and banking.",
   image: unknown,
  },

  {
    id: 6,
    name: "Dr. Anderson Gondwe",
    title: "Research Fellow",
    description:
      "Anderson holds a PhD in Economics from Stellenbosch University, and an MA in Economics and Bachelor’s degree in Social Sciences (Economics), both from the University of Malawi. He is experienced conducting empirical analysis on agriculture, labor markets, poverty and inequality using Malawian household data sets. He previously worked for the International Food Policy Research Institute, contributing evidence-based policy solutions to sustainably reduce poverty and end hunger and malnutrition in Malawi. He also has experience in Malawian financial markets, the most recent being arranging debt and equity funding for transactions.",
   image: unknown,
  },

  {
    id: 7,
    name: "Dr. Christone Nyondo",
    title: "Research Fellow",
    description:
      "Christone holds a PhD in Economics and an MSc. in Agricultural Economics from the University of Kent (UK). He has a first degree in Agricultural Economics from the University of Malawi.  Prior to joining MwAPATA, Christone worked as a Policy Analyst in the New Alliance Policy Acceleration Support (NAPAS) project in the Ministry of Agriculture, Irrigation and Water Development (MoAIWD). He joined the NAPAS project, from the MoAIWD where he worked as a Chief Economist. ",
   image: unknown,
  },

  {
    id: 8,
    name: "Mr. Lemekezani Chilora",
    title: "Research Analyst",
    description:
      "Lemekezani holds a Master’s degree in Agricultural and Applied Economics from Lilongwe University of Agriculture and Natural Resources and the University of Pretoria. Prior to Joining MwAPATA, Lemekezani worked as a Monitoring and Evaluation intern for the Civil Society Agriculture Network and as a graduate trainee at Japanese Tobacco International. He has experience developing data collection tools, data collection, data management, analysis, and reporting. His research focuses on land transactions (sales and rental), climate change, agricultural and food policy, nutrition, and environment and natural resource valuation.",
   image: unknown,
  },

  {
    id: 9,
    name: "Mr. Andrew Lisuntha",
    title: "Finance and  Administration Officer (Intern)",
    description:
      "Andrew is an an experienced Audit, Finance and Administrative Officer with over five years of working experience. He holds a Bachelor's Degree in Business Administration, with a Major in Accounting from University of Eastern Africa, Kenya. Before joining the MwAPATA Institute, Andrew worked with EMJ Advisory and Anchor Property Mw Limited.",
   image: unknown,
  },
  {
    id: 10,
    name: "Mr. Boniface Nankwenya",
    title: "Research Analyst",
    description:
      "Boniface holds an MSc in Agricultural and applied Economics from Lilongwe University of Agriculture and Natural Resources (LUANAR) and the University of Pretoria. Prior to joining MwAPATA, he worked as a Research Analyst for WorldFish and as a Research Analyst for the NEPAD Regional Fish Node/SanBio at LUANAR. He has led in implementation of research and development projects on inclusive business models and value chains, impact analysis, climate smart agriculture and policy analysis.",
   image: unknown,
  },

  {
    id: 11,
    name: "Prof.  Levison Chiwaula",
    title: "Research Director",
    description:
      "Levison is a Professor of Economics at the University of Malawi (UNIMA).  He holds a PhD in Economics from Leibniz University of Hannover in Germany and has over 15 years of experience in higher education teaching and research.  Prof. Chiwaula is a seasoned researcher with a track record of winning competitive research grants and publishing in renowned peer-reviewed journals. He has led and participated in several projects funded by IDRC, DFID, AERC, PEP, and the EU and has also provided consultancy services to several governmental and non-governmental organizations.",
   image: unknown,
  },

  {
    id: 12,
    name: "Dr. Maggie Munthali ",
    title: "Research Fellow",
    description:
      "Maggie holds a PhD in Geography from University of Pretoria, South Africa. She has vast experience in natural resource management, forest management, agroforestry and integrated soil fertility management (ISFM). Prior to joining MwAPATA Institute, she worked with the Ministry of Natural Resources, Energy and Mining as Principal Forestry Officer. She is a member of the African Forest Forum (AFF), African Association of Remote Sensing of the Environment (AARSE), International Union of Forest Research Organizations (IUFRO) and American Society of Agronomy(ASA), among others.",
   image: unknown,
  },

  {
    id: 13,
    name: "Mrs. Joyce Minofu",
    title: "Research Analyst",
    description:
      "Joyce holds MSc in Agricultural and Applied Economics from Lilongwe University of Agriculture and Natural Resources (LUANAR)  and University of Pretoria. She successfully completed some research studies whose results were published and presented to different conferences. Joyce's interests are in agricultural policy, natural resource economics and rural development. Previously, Joyce worked with several individuals and organizations in research and program management. Before joining MwAPATA, Joyce worked as a Research Associate (Adoption, Impact and Markets) at International Institute of Tropical Agriculture (IITA).",
   image: unknown,
  },
  {
    id: 14,
    name: "Mr. Garnet Sibu",
    title: "Driver/Office Assistant",
    description:
      "Garnet provides support to all staff in the area of transportation and general duties in the office.  He is responsible for driving the Institute vehicles on official business and ensuring that Institute vehicles are always in good running condition. He is responsible for providing administrative support for the smooth operation of the office among other duties.",
   image: unknown,
  },
  




];

  return (

  

    <section className=" min-h-screen bg-[#f8ffef]">
      <Section_header
  title="Our Team"
  bgImage={team}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Our Team" }
  ]}
/>
      <div className="Section_wrapper">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-5 lg:mt-10">
              <h4            
                className="Section_title">
                <span className="text-orange">MEET</span> OUR TEAM.
              </h4>
               {/* Two Lines on the right */} 
              <div className="flex flex-col lg:mt-12 mt-6 items-start lg:items-end">
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
        <motion.div ref={teamRef} className="Grid_4">
               {Employees.slice(0, visibleCount).map((employee) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: "easeInOut" }} 
                key={employee.id} 
                className="relative lg:bg-[#eef7e3] group border-b-[2px]  border-b-[#4a4a4a] cursor-pointer"
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
                    <motion.h4 variants={itemVariants} className="Capitalize text-grey text-[18px] font-semibold">{employee.name}</motion.h4>
                    <motion.p variants={itemVariants} className="lg:text-[var(--text-color)] line-clamp-2 text-[#fffced] lg:mt-2 mt-1 text-[16px] font-light">{employee.title}</motion.p>
                    <motion.div variants={itemVariants} className="flex-center mt-2 gap-2">
                    <h6 className=" lg:text-(--secondary-color) z-50 text-[#fffced] text-[14px] uppercase font-semibold">Learn More</h6>
                    <ChevronRight className="lg:text-(--secondary-color) z-50 text-[#fffced] size-6 " />
                    </motion.div>
                  </motion.div>
                
              </motion.div> 
            ))}
         
        </motion.div>


           {/* NEXT & PREV BUTTONS */}
            <motion.div  className="flex items-start mt-6 gap-4 lg:mt-12  transition ">
                <button
                  onClick={() => {
    setVisibleCount((prev) => Math.max(prev - 4, 4));
    teamRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
                  className="p-2 rounded-full bg-green/10 hover:bg-green/20 disabled:bg-green/5 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft className="size-6 text-green" />
                </button>

                <button
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 4, Employees.length))}
                  disabled={visibleCount >= Employees.length}
                  className="p-2 rounded-full bg-green/10 hover:bg-green/20 disabled:bg-green/5 disabled:cursor-not-allowed transition"
                >
                  <ChevronRight className="size-6 text-green" />
                </button>      
            </motion.div>

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
                 className="bg-[#eef7e3] w-full h-full flex flex-col rounded-[4px] shadow-2xl overflow-hidden"
                 onClick={(e) => e.stopPropagation()}
               >
                 {/* Header Section with Close Button */}
                 <div className="flex items-center  justify-end p-2 lg:p-4 bg-transparent sticky top-0 z-50">
                   <button 
                     onClick={() => setSelectedEmployee(null)}
                     className="p-2 hover:bg-green/10 rounded-full transition-all"
                   >
                     <X className="size-6 text-green"/>
                   </button>
                 </div>

                 {/* Scrollable Content Section */}
                 <div className="overflow-y-auto h-full ">
                   

                    <div className="flex flex-col lg:flex-row gap-6">
                    <div className="fixed hidden lg:flex right-0 top-0 w-full lg:w-1/2 h-[45vh] lg:h-full z-0 lg:z-10 pointer-events-none overflow-hidden">
                      <img src={selectedEmployee.image} alt={selectedEmployee.title} className="w-full h-full z-50 object-cover"/>
                      {/* Optional subtle overlay from your CSS background-color: rgba(0, 0, 0, .1) */}
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                      <div className="flex flex-col lg:w-1/2 gap-4 p-8 mt-2 lg:mt-4 items-start ">
                        <h4 className="Card_heading text-grey">{selectedEmployee.name}</h4>
                        <p className="text-[var(--text-color)] text-[18px] font-light">{selectedEmployee.title}</p>
                            <motion.div
                                        initial={{ opacity: 0, x: 80 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.99, ease: "easeInOut" }}
                                        className="w-full relative h-[1.5px]  bg-green"
                                      ></motion.div>

                                          <p className="text-grey leading-relaxed whitespace-pre-line">
                        {selectedEmployee.description}
                      </p>
                      </div>
                  
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

export default OurTeam;