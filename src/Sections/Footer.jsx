import React from "react";
import {motion} from "framer-motion";
import { useState } from "react";
import RightArrow from "./Icons/RightArrow";
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




  return (
   <footer className=" mih-h-[60vh] bg-green p-10">
    <div className="flex flex-col lg:items-start lg:justify-between gap-12">

    
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
      <div className="">
        <input
          type="text"
          placeholder="username@site.com"
          className="px-6 py-3 border-b-[0.8px] white  border-[#fffced] rounded-l-[4px]  lg:w-[470px]" />
        <button className="">Subscribe</button>
      </div>
    </fieldset>
  </form>
  </div>
</footer>


  );
};

export default Footer;