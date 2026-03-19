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
   <footer className="bg-base-200 mih-h-[60vh] bg-green text-base-content p-10">
    <div className="flex items-start justify-between gap-12">

    
  <nav className="flex flex-col">
    <h6 className="footer-title uppercase white barlow font-bold">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer- white barlow uppercase white font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title barlow uppercase white font-bold">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
   <form>
    <h6 className="footer-title barlow uppercase white font-bold">Newsletter</h6>
    <fieldset className="w-4xl">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="px-6 py-3 border-[0.8px] white  border-[#fffced] rounded-l-[4px]  lg:w-[470px]" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  </div>
</footer>


  );
};

export default Footer;