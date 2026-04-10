import React from "react";
import workingpapers from "../assets/Images/Working_papers.jpg";
import policy_brief from "../assets/Images/Policy_brief.jpg";
import policy_perspective from "../assets/Images/Policy_perspective.jpg";


    const publications_types = [
  {
    id: 1,
    title: "Working Papers",
    description:
      "Strengthening institutions and individuals through training, mentorship, and knowledge sharing.",
    image: workingpapers,
  },
  {
    id: 2,
    title: "Policy Briefs",
    description:
      "Conducting evidence-based research to influence agricultural and development policies.",
    image: policy_brief,
  },
  {
    id: 3,
    title: "Policy Perspective",
    description:
      "Improving market systems and access for farmers and agribusiness stakeholders.",
   image: policy_perspective, 
  },

];


    const Resources = [
  {
    id: 1,
    title: "Peer Reviewed",
    description:
      "Our goal is to produce world-class, rigorous research.",
   
  },
  {
    id: 2,
    title: "Presentations",
    description:
      "Circulating our findings to stakeholders to provoke informed discussions.",
    
  },
  {
    id: 3,
    title: "Data",
    description:
      " We will work to collect and share data for key indicators like agricultural production, welfare, food security and more.",
    
  },

];


export { Resources, publications_types };


