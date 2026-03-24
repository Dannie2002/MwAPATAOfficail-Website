import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import capacity from "../assets/Images/Capacity_building.JPG";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const Capacity_Building_seminars = () => {

useGSAP(() => {
  gsap.from(".head", {
    y: 100,
    opacity: 0,
    duration: 0.95,
    scrollTrigger: {
      trigger: ".head",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      ease: "power1.inOut",
    }
  });
});

const seminars = [
  {
    title: "Randomized Control Trials",
    date: "18 March 2021",
    description:
      "Tabitha Nindi discusses using Randomized Control Trials (RCTs) to measure intervention impacts in a developing country context. She builds on an example of a study she led in Malawi on the introduction of PICS bags for legume storage. The presentation is followed by a Q&A with MwAPATA.",
  },

  {
    title: "Using Auctions in Agricultural Development Economics",
    date: "16 February 2021",
    description:
      "Professor Jacob Ricker-Gilbert summarizes the different types of auctions used to gather data on willingness to pay. He explains when each type is appropriate, how to set up and conduct auctions, and how findings should be interpreted, with examples from existing research.",
  },

  {
    title: "Giving an Effective Presentation",
    date: "12 January 2021",
    description:
      "Dr. William Burke presents recommendations for preparing and delivering an effective slideshow presentation when sharing research results. The seminar also introduces MwAPATA’s PowerPoint template and includes comments and questions from research staff.",
  },

  {
    title: "Pre-Analysis Plans, Registries, Power Calculations and Preparing to do Research",
    date: "10 December 2020",
    description:
      "Professor Jacob Ricker-Gilbert discusses his experiences with pre-analysis plan registration and explores the advantages and disadvantages of using registries when preparing research projects.",
  },

  {
    title: "Writing Working Papers and Journal Articles",
    date: "24 November 2020",
    description:
      "Professor Jacob Ricker-Gilbert shares insights from publishing dozens of working papers and journal articles. He explains the elements that make a successful research paper and answers questions from MwAPATA and LUANAR researchers.",
  },

  {
    title: "How to Write a Compelling Policy Brief",
    date: "20 October 2020",
    description:
      "Professor Thom Jayne explains how researchers can effectively communicate findings to policy makers by translating complex research into concise and impactful policy briefs.",
  }
];

return (
<section className="min-h-screen">



<div className="py-12 px-6 lg:px-22">

{/* section heading */}

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
  <h4 className="Section_title">
    Capacity Building Seminars
  </h4>

  <div className="flex flex-col items-start lg:items-end">

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
      className="mt-2 w-[90px] h-[4px] bg-green"
    />

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.99, ease: "easeInOut" }}
      className="mt-2 w-[50px] h-[4px] bg-orange"
    />

  </div>
</div>


{/* intro text */}

<div className="flex flex-col mt-12 Counter_title">

<div className="flex flex-col gap-8">

<p className="Counter_title lg:w-[800px] barlow">
Building the capacity of researchers is a core component of the MwAPATA mission. This page provides materials from seminars hosted by the Institute, given by experienced researchers covering a wide range of subjects.
</p>

<motion.div
initial={{ opacity: 0, x: 80 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 1.99, ease: "easeInOut" }}
className="mt-2 w-[45px] h-[1.6px] bg-green"
/>

</div>
</div>


{/* seminars list */}

<div className="mt-12 lg:mt-22">

<div className="flex flex-col gap-10 mt-12">

{seminars.map((seminar, index) => (

<div
key={index}
className="flex flex-col md:flex-row gap-12 items-start group cursor-pointer"
>

{/* text */}

<div className="flex flex-col gap-3">

<h3 className="Card_heading barlow font-semibold">
{seminar.title}
</h3>

<h4 className="uppercase text-grey barlow text-[16px]">
<span className="text-green font-bold">DATE:</span> {seminar.date}
</h4>

<p className="lg:text-[18px] font-light text-grey text-[16px] leading-relaxed">
{seminar.description}
</p>

</div>

</div>

))}

</div>

</div>

</div>

</section>
);
};

export default Capacity_Building_seminars;