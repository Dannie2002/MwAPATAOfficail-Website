import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import capacity from "../../assets/Images/Capacity_building.jpg";
import policy_brief from "../../assets/Images/Policy_brief.jpg";
import noise from "../../assets/Images/Noise.png";
import newsletter from "../../assets/Images/Newsletter.jpg"
import Section_header from "../Section_header";
import {  CalendarDays,File, Search,ChevronRight  } from "lucide-react";

const PolicyBrief= () => {

const Policy_brief = [
  {
    id: 1,
    image: newsletter,
    title: "Does accessing multiple social support programmes improve household resilience and food security?",
    year: "2026",
    date: "27 January 2026",
    file: "pdf",
    description:
      "This Policy Brief generates empirical evidence on the effectiveness of combining multiple social support programmes to improve resilience. The study findings also offer insights to inform policy decisions on programme design to strengthen household resilience and improve food security in Malawi.",
  },
  {
    id: 2,
    image: newsletter,
    title: "Policy Lessons for Localising the Food Systems Transformation Agenda in Malawi",
    year: "2026",
    date: "23 January 2026",
    file: "pdf",
    description:
      "This policy brief informs the localisation of global and regional policy frameworks for the transformation of food systems at the country level in Malawi. Recommendations include prioritising budget allocations that encourage diversification into nutrient-dense crops and livestock, alongside long-term investments in research, extension services, and infrastructure.",
  },
  {
    id: 3,
    image: capacity,
    title: "Malawi Public Agricultural Expenditure Review",
    year: "2025",
    date: "11 September 2025",
    file: "pdf",
    description:
      "This policy brief investigates allocative inefficiencies in Malawi's agricultural public spending, highlighting the need for improved resource allocation and stronger policy implementation to enhance the effectiveness of agricultural investments.",
  },
  {
    id: 4,
    image: capacity,
    title: "Strategies for Accelerating Malawi's Food Systems Transformation",
    year: "2025",
    date: "30 April 2025",
    file: "pdf",
    description:
      "This policy brief examines ongoing efforts to transform Malawi's food systems, highlighting key challenges, lessons learned, and strategic areas that can accelerate progress toward a more resilient and sustainable food system.",
  },
  {
    id: 5,
    image: capacity,
    title: "What are the Potential Impacts of Export Mandates on Malawi’s Economy and Development Trajectory?",
    year: "2025",
    date: "03 February 2025",
    file: "pdf",
    description:
      "This policy brief explores the potential impacts of export mandates on Malawi’s economy and development trajectory. It highlights risks such as reduced foreign exchange earnings, market distortions, and investment disincentives, while assessing how these mandates align with national policies including Malawi 2063 and the National Export Strategy II.",
  },

  {
  id: 6,
  image: newsletter,
  title: "Plantation Forestry in Malawi: Challenges and Policy Options",
  year: "2024",
  date: "16 December 2024",
  file: "pdf",
  description:
    "Forest plantations significantly contribute to Malawi’s economic growth through revenue generation, job creation, and foreign exchange earnings. However, the plantation forest sector remains largely untapped. This study analyses the challenges inhibiting the development and growth of the forest plantation sector in Malawi and provides policy options to address these constraints and unlock the sector’s potential.",
},
{
  id: 7,
  image: newsletter,
  title: "Innovative Options of Financing for Sustainable Forests Development and Management in Malawi",
  year: "2024",
  date: "16 December 2024",
  file: "pdf",
  description:
    "Adequate and sustainable financing is crucial for the management of forest resources in developing countries like Malawi. This study highlights potential forest financing mechanisms and instruments that the Government of Malawi and other stakeholders in the forest sector can explore to ensure sustainable management of forest resources.",
},
{
  id: 8,
  image: capacity,
  title: "Malawi’s Poultry Value Chain Can Unlock Widespread Economic Benefits with Appropriate Policies and Investments",
  year: "2024",
  date: "27 September 2024",
  file: "pdf",
  description:
    "This policy brief explores how Malawi’s poultry value chain can drive economic growth, focusing on the impact of high feed costs and proposed reforms. By addressing feed prices, expanding maize production, and improving export processes, Malawi could boost poultry production, enhance food security, and potentially add $31.5 million to GDP by 2030.",
},
{
  id: 9,
  image: capacity,
  title: "Policy Options for Unlocking the Potential of Malawi’s Soybean Value Chain",
  year: "2024",
  date: "27 September 2024",
  file: "pdf",
  description:
    "This research explores growth opportunities, key challenges, and policy reforms for enhancing the competitiveness of Malawi's soybean value chain. The study demonstrates that implementing the suggested policy reforms can stimulate economic growth, create jobs, and contribute to poverty reduction.",
},
{
  id: 10,
  image: capacity,
  title: "Optimizing Forest Revenue Generation in Malawi: A Comparative Analysis of Forest Plantation Fees, Prices, and Policy Options",
  year: "2024",
  date: "13 September 2024",
  file: "pdf",
  description:
    "This study compares Malawi's forest plantation fees and prices with those in Sub-Saharan Africa to establish a competitive plantation fee structure for Malawi's forestry sector. The aim is to support sustainable management of plantation forests while enhancing revenue generation for the Government of Malawi.",
}

];


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
      transition: { duration: 0.49, ease: "easeInOut" }
    },
  };

   const [selectedYear, setSelectedYear] = useState("2026");
   const [searchTerm, setSearchTerm] = useState("");

  const years = [...new Set(Policy_brief.map(policy => policy.year))].sort((a,b)=>b-a);

const filteredPolicy_brief = Policy_brief.filter((policy) => {

  const matchesYear =
    selectedYear === "all" || policy.year === selectedYear;

    const search = searchTerm.trim().toLowerCase();

  const matchesSearch =
    policy.title.toLowerCase().includes(search) ||
    policy.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.description.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesYear && matchesSearch;

});




  return (
    <section className="min-h-screen bg-[#f8ffef]">
                 <Section_header
  title="Policy Brief"
  bgImage={policy_brief}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Policy Brief" }
  ]}
/>

    <div className="Section_wrapper">
       
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-10">
              <h4  className="Section_title">Policy Brief</h4>

           
      </div>
      
         <div className="flex gap-2 flex-col mt-12 lg:flex-row lg:gap-6 items-start lg:items-center justify-start">
            <h4 className="uppercase font-semibold barlow text-[14px] text-grey tracking-wide">Filter By Year:</h4>
              <div className="flex gap-4">

             <button
      onClick={() => setSelectedYear("all")}
      className={`px-6 py-2 border font-semibold border-[#4a4a4a]/40 rounded-sm text-[12px] archivo transition-all duration-200
        
        ${selectedYear === "All"
          ? "bg-green font-semibold white border-none"
          : "text-grey hover:border-none not-[]: hover:bg-(--text-color)/40 hover:text-white"}
        `}
    >
            All
          </button>

          {years.map((year) => (
              <button
        key={year}
        onClick={() => setSelectedYear(year)}
        className={`px-6 py-2 border stack font-normal border-[#4a4a4a]/40 rounded-sm text-[12px] archivo transition-all duration-200
        
        ${selectedYear === year
          ? "bg-green font-semibold white border-none"
          : "text-grey hover:border-none not-[]: hover:bg-(--text-color)/40 hover:text-white"}
        `}
      >
              {year}
            </button>
          ))}

             </div>

          </div>

                      <div className="relative mt-10">
    <input
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="Search by file name or date..."
      className="glass border flex items-center archivo white text-[14px] bg-[#4a4a4a]/45 backdrop-blur-2xl pl-10 pr-6 py-2 border-[#4a4a4a]/20 outline-offset-0 focus:outline-[#4a4a4a]/10 focus:border-[#fffced] rounded-full placeholder:text-[#fffced] w-64 hover:w-full transition-width duration-350 ease-in-out"
    />
    <Search className="white absolute left-3 top-3 size-4" />
            </div>

          {searchTerm.trim() !== "" && (
  <p className="text_para text-[16px] mt-4 ">
    {filteredPolicy_brief.length} Policy brief Found
  </p>
)}  


                {/* policy brief one column grid*/}
          <div className="Grid_4 grid-cols-1">

        {filteredPolicy_brief.map((policy, index) => (
          <div
  className="flex flex-col md:flex-row gap-12 items-start  border-b pb-8 border-(--text-color)/40 group cursor-pointer"
>

  {/* IMAGE */}
  <div className="lg:w-[25%] lg:h-[230px] flex-shrink-0 overflow-hidden">
    <img
      src={policy.image}
      alt={policy.title}
      className="w-full h-full object-cover rounded-[4px] group-hover:scale-105 transition duration-500"
    />
  </div>


  {/* TITLE COLUMN */}
  <div className="lg:w-[35%] lg:h-[230px] flex flex-col items-start justify-between gap-6">
    <div>
    <h3 className="Card_heading capitalize text-[24px] archivo text-grey mb-4">
      {policy.title}
    </h3>

    <div className="flex items-center mt-4 gap-6">
      <h4 className="flex items-center gap-2 text_date text-[#6f6969]">
        <CalendarDays className="size-5 text-green" />
        {policy.date}
      </h4>

      <h4 className="flex items-center gap-2 text_date text-grey">
        <File className="size-5 text-green" />
        {policy.file}
      </h4>
    </div>
</div>
    <motion.h4 variants={itemVariants} className="text_link uppercase stack  tracking-wide  p-0">Download {policy.file}</motion.h4>

  </div>


  {/* DESCRIPTION COLUMN */}
  <div className="lg:w-[40%] flex items-start justify-between gap-6">

    <p className="text_para text-grey">
      {policy.description}
    </p>

  

  </div>

          </div>
          
        ))}
    

          </div>
    </div>       
    </section>
  );
};

export default PolicyBrief;