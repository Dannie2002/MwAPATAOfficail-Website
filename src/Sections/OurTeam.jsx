import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.jpg";
import research from "../assets/Images/Research.jpg";
import employee1 from "../assets/Images/Employee1.jpg";
import employee2 from "../assets/Images/Employee2.jpg";
import team from "../assets/Images/Team_Mwapata.jpg";
import Section_header from "./Section_header";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const OurTeam = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const Employees = [
  {
    id: 1,
    name: "Mr. William Chadza",
    title: "Finance and Administration Manager",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: capacity,
  },   
  {
    id: 2,
    name: "Prof. Levison Chiwaula",
    title: "Research Director",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: research,
  },
  {
    id: 3,
    name: "Ms. Mercy Chirwa",
    title: "Outreach Coordinator",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: employee1, 
  },
  {
    id: 4,
    name: "Mrs. Joyce Minofu",
    title: "Research Analyst",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: employee2,
  },
];

  return (
    <section className=" min-h-screen">
      <Section_header
  title="Our Team"
  bgImage={team}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Our Team" }
  ]}
/>
      <div className="Section_wrapper">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-5 lg:mt-18">
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
        <div className="Grid_4">
          {Employees.map((employee) => (
            <div 
              key={employee.id} 
              className="relative lg:bg-[#eaeee5] lg:h-[580px] cursor-pointer"
              onClick={() => setSelectedEmployee(employee)}
            >
              <div className="relative h-[330px] lg:h-[430px] overflow-hidden z-0 shadow-3xl">
                <img src={employee.image} alt={employee.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute lg:hidden inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 mix-blend-multiply"></div>

              </div>
                <div className="absolute lg:relative flex flex-col lg:py-4 gap-2 p-4 justify-end items-start inset-0 z-50">
                  <div className="flex lg:mt-4 gap-4  items-center transition-all justify-end">
                    <h4 className="Card_heading">{employee.name}</h4>
                     <motion.div
                      initial={{ opacity: 0, x: 80 }} 
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.99, ease: "easeInOut" }}
                   className="w-[40px]  h-[1.6px] lg:bg-[var(--secondary-color)] bg-[#fffced]">

                     </motion.div> 
                  </div>
                      
                  <p className="lg:text-[var(--text-color)] text-[#fffced] lg:mt-3 mt-1 text-[18px] font-light">{employee.title}</p>
                </div>
            </div> 
             ))}
        </div>

            <div className="flex items-start flex-wrap  mt-6 gap-4 lg:mt-6  transition ">
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
               className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md"
               onClick={() => setSelectedEmployee(null)}
             >
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
                 className="bg-[#eaeee5] w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[4px] shadow-2xl overflow-hidden"
                 onClick={(e) => e.stopPropagation()}
               >
                 {/* Header Section with Close Button */}
                 <div className="flex items-center justify-end p-4 border-b border-green/10 bg-[#eaeee5] sticky top-0 z-50">
                   <button 
                     onClick={() => setSelectedEmployee(null)}
                     className="p-2 hover:bg-green/10 rounded-full transition-all"
                   >
                     <X className="size-6 text-green"/>
                   </button>
                 </div>

                 {/* Scrollable Content Section */}
                 <div className="overflow-y-auto flex-1 p-8 lg:p-12">
                   <div className="flex flex-col gap-6">
                     <div className="flex flex-col items-start">
                       <h4 className="Card_heading !text-grey !text-[32px]">{selectedEmployee.name}</h4>
                       <p className="text-[var(--text-color)] lg:mt-3 mt-1 text-[18px] font-light">{selectedEmployee.title}</p>
                       <div className="mt-4 w-[50px] h-[4px] bg-orange"></div>
                     </div>
                     <p className="text_para !text-grey leading-relaxed whitespace-pre-line">
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

export default OurTeam;