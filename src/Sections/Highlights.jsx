import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RightArrow from "./Icons/RightArrow";
import event1 from "../assets/Images/Event1.jpg";
import research from "../assets/Images/Research.JPG";
import employee1 from "../assets/Images/Employee1.jpg";
import employee2 from "../assets/Images/Employee2.jpg";
import team from "../assets/Images/Team_Mwapata.jpg";
import Section_header from "./Section_header";
import { ChevronDown, ChevronLeft, ChevronRight, Check } from "lucide-react";



const Highlights = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ["News Updates", "Events", "Publications"];


    const programs = [
  {
    id: 1,
    Title: "MwAPATA Participates in the AGRA Media Onboarding Meeting ",
    Category: "News Updates",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: event1,
  },
  {
    id: 2,
    Title: "Consultative Group on International Agricultural Research (CGIAR) Policy Innovations Hub Launch and Dialogue",
    Category: "Events",
    description:
      "Consultative Group on International Agricultural Research (CGIAR) Policy Innovations Hub Launch and Dialogue",
    image: research,
  },
  {
    id: 3,
    Title: "MwAPATA participates in the Commodity Platforms Capacity Strengthening Workshop and Learning Visit",
    Category: "Publications",
    description:
      "MwAPATA participates in the Commodity Platforms Capacity Strengthening Workshop and Learning Visit",
   image: employee1, 
  },
  {
    id: 4,
    Title: "Providing short courses and specialized training programs for professionals.",
    Category: "News Updates",
    description:
      "Providing short courses and specialized training programs for professionals.",
   image: employee2,
  },
];

const toggleCategory = (category) => {
  setSelectedCategories((prev) =>
    prev.includes(category)
      ? prev.filter((c) => c !== category)
      : [...prev, category]
  );
};

const filteredPrograms = selectedCategories.length > 0
  ? programs.filter((p) => selectedCategories.includes(p.Category))
  : programs;

  return (
    <section className=" min-h-screen">

      <div className="Section_wrapper ">
      
      <div className="flex gap-4 flex-col lg:flex-row lg:items-center lg:justify-between mt-5 lg:mt-18 relative">
              <h4 className="Section_title">HIGHLIGHTS</h4>

              <div className="flex flex-col border-[1.6px] border-[var(--primary-color)] lg:min-w-[250px] rounded-[4px] overflow-hidden">
                <div onClick={() => setIsOpen(!isOpen)}  className="flex items-center justify-between  cursor-pointer flex-row gap-3 py-2 px-4 group transition-all duration-430 ">
                  <h5 className="Counter_title font-semibold duration-430 text-[22px] text-[var(--primary-color)] w-full ">
                  FILTER BY CONTENT TYPE
                  </h5>
                  <ChevronDown className={`size-8 text-green transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 mt-2 pb-4 flex flex-col gap-3">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center justify-between cursor-pointer text-grey font-semibold text-[16px]">
                            {category}
                            <div className="relative flex items-center justify-center">
                              <input 
                                type="checkbox" 
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleCategory(category)}
                                className="peer appearance-none size-5 border-[1.6px] border-[var(--secondary-color)] transition-all duration-450 cursor-pointer"
                              />
                              <Check className="absolute size-4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200 text-[var(--secondary-color)]" strokeWidth={4} />
                            </div>
                            
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
      </div>
        <div className="Grid_4">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="relative">
              <div className="relative h-[330px] lg:h-[430px] overflow-hidden z-0 group shadow-3xl">
                <img src={program.image} alt={program.title} className="w-full  group-hover:scale-110 transition-all duration-900 ease-in-out h-full rounded-[4px] object-cover"/>
                   {/* overlay to apply blend mode */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-color)] via-[var(--secondary-color)]/30 to-transparent opacity-90 mix-blend-multiply"></div>

              </div>

                <div className="absolute  flex flex-col p-4 justify-between items-start inset-0 z-50">
                    <div className="bg-[#fffced]/40 px-4 py-1 z-50 border border-[#fffced]/30 lg:mt-3 mt-2 rounded-full backdrop-blur-xl  flex-center">
                    <h6 className="z-50 white text-[#fffced] uppercase text-[12px] font-semibold">{program.Category}</h6>
                    </div>
                  <div className="flex lg:mt-4 gap-4 py-2 items-center transition-all justify-end">
                    <h4 className="Card_heading font-semibold white line-clamp-2">{program.Title}</h4>
                     <motion.div
                      initial={{ opacity: 0, x: 80 }} 
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.99, ease: "easeInOut" }}
                   className="w-[40px]  h-[1.6px] lg:bg-[var(--secondary-color)] bg-[#fffced]">

                   </motion.div>
                   
                  
                  </div>
                 
                </div>
            </div> 
             ))}
        </div>
            <div className="flex items-start flex-wrap overflow-hidden mt-6 gap-4 lg:mt-12  transition ">
                         <div className="p-2 size-12 group flex-center bg-green hover:bg-[var(--primary-color)]/60 duration-470">
                           <ChevronLeft className="text-[#fffced] size-6 group-hover:text-white" />
                         </div>
                        
                         <div className="p-2 size-12 flex-center group bg-green hover:bg-[var(--secondary-color)]/80 duration-500">
                           <ChevronRight className="text-[#fffced] size-6 group-hover:text-white" />
                         </div>
                         
               
                       </div>
    </div>
    </section>
  );
};

export default Highlights;