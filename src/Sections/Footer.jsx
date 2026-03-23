import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerLinks = [
    {
      title: "Services",
      links: ["Branding", "Design", "Marketing", "Advertisement"],
    },
    {
      title: "Company",
      links: ["About us", "Contact", "Jobs", "Press kit"],
    },
    {
      title: "Legal",
      links: ["Terms of use", "Privacy policy", "Cookie policy"],
    },
  ];

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
      },
    });
  });

  return (
    <footer className="min-h-[60vh] bg-green">
      <div className="py-12 px-6 lg:px-22">

      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {footerLinks.map((section, index) => (
          <nav key={index} className="flex flex-col gap-2">
            <h6 className="uppercase white barlow font-bold">
              {section.title}
            </h6>

            {section.links.map((link, i) => (
              <a key={i} className="link link-hover">
                {link}
              </a>
            ))}
          </nav>
        ))}

        <form className="flex flex-col gap-4">
          <h6 className="uppercase white barlow font-bold">
            Newsletter
          </h6>

          <label className="white">
            Enter your email address
          </label>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="email"
              placeholder="username@site.com"
              className="px-6 py-3 border-b-[0.8px] border-[#fffced] white rounded-[4px] w-full"
            />

            <button className="px-6 py-3 white border border-[#fffced] rounded-[4px]">
              Subscribe
            </button>

          </div>

        </form>

      </div>
    </div>
    </footer>
  );
};

export default Footer;