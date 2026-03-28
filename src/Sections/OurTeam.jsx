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
      "Levison is a Professor of Economics at the University of Malawi (UNIMA).  He holds a PhD in Economics from Leibniz University of Hannover in Germany and has over 15 years of experience in higher education teaching and research.  Prof. Chiwaula is a seasoned researcher with a track record of winning competitive research grants and publishing in renowned peer-reviewed journals. He has led and participated in several projects funded by IDRC, DFID, AERC, PEP, and the EU and has also provided consultancy services to several governmental and non-governmental organizations.",
    image: research,
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
              className="relative lg:bg-[#eaeee5] group  cursor-pointer"
              onClick={() => setSelectedEmployee(employee)}
            >
              <div className="relative h-[330px] lg:h-[430px] overflow-hidden z-0 shadow-3xl">
                <img src={employee.image} alt={employee.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute lg:hidden lg:group-hover:flex transition-colors duration-450 ease-in-out inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 mix-blend-multiply"></div>

              </div>
                <div className="absolute lg:relative flex flex-col lg:py-4 gap-2 p-4 justify-end items-start inset-0 z-50"> 
                  <h4 className="Card_heading lg:mt-4">{employee.name}</h4>
                  <p className="lg:text-[var(--text-color)] text-[#fffced] lg:mt-3 mt-1 text-[18px] font-light">{employee.title}</p>
                  <div className="flex-center mt-2 gap-2">
                  <h6 className=" lg:text-(--secondary-color) z-50 text-[#fffced] text-[14px] uppercase font-semibold">Learn More</h6>
                  <ChevronRight className="lg:text-(--secondary-color) z-50 text-[#fffced] size-6 " />
                  </div>
                </div>
              
            </div> 
             ))}
        </div>


           {/* NEXT & PREV BUTTONS */}
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
                 <div className="flex items-center justify-end p-2 lg:p-4 bg-[#e5e6e3] sticky top-0 z-50">
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

export default OurTeam;