import React from "react";
import {motion} from "framer-motion";
import { useState } from "react";
import RightArrow from "./Icons/RightArrow";
import capacity from "../assets/Images/Capacity_building.JPG";
import research from "../assets/Images/Research.JPG";
import outreach from "../assets/Images/Outreach.JPG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {
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

    const events = [
  {
    id: 1,
    title: "MwAPATA Institute urges Malawi Parliament to address policy gaps",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
      date: "17 Jan 2026",
    image: capacity,
  },
  {
    id: 2,
    title: "Stakeholders Strategize on Future of Smallholder Farming in Malawi",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
      date: "21 FEB 2021",
    image: research,
  },
  {
    id: 3,
    title: "Minister Calls for Homegrown Agricultural Policy Research",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
      date: "17 OCT 2020",
   image: outreach, 
  }

];


  return (
    <section className="py-12 px-6 bg-green lg:px-22">
      
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-18">
          <div>
            <h1 className="white">About</h1>
          </div>
        </div>  
    </section>
  );
};

export default Footer;