import React from "react";
import workingpapers from "../assets/Images/Working_papers.jpg";
import policy_brief from "../assets/Images/Policy_brief.jpg";
import policy_perspective from "../assets/Images/Policy_perspective.jpg";


    const publications_types = [
  {
    id: 1,
    title: "Working Papers",
    description:"Working Papers offeroriginal, internally reviewed papers in a longer format for readers interested in taking a deep dive into an issue and how it was researched. ",
    image: workingpapers,
    link:"/working-papers",
  },
  {
    id: 2,
    title: "Policy Briefs",
    description:"Policy Briefs offer quickly accessible highlights and key messages on important policy topics, with the essential background information. These are often linked to a Working Paper",
    image: policy_brief,
    link:"/policy-brief",
  },
  {
    id: 3,
    title: "Policy Perspective",
    description:
      "Policy Perspectives are commentaries submitted by experts in their fields to discuss salient policy issues. These can be by invitation and submissions will also be considered",
   image: policy_perspective, 
   link:"/policy-perspective",

  },

];


    const Resources = [
  {
    id: 1,
    title: "Peer Reviewed",
    description:"Our goal is to produce world-class, rigorous research. This is best demonstrated by  publishing articles and chapters in top rated peer-reviewed journals and books.",
        image: policy_perspective, 
        link:"/peer-reviewed",
   
  },
  {
    id: 2,
    title: "Presentations",
    description:"We know research sitting on a shelf never makes a difference. Circulating our findings to stakeholders to provoke informed discussions is one of our biggest priorities.",
        image: policy_perspective, 
        link:"/presentations",
    
  },
  {
    id: 3,
    title: "Data",
    description:" Improving the quality of agricultural data is a priority for MwAPATA. We will work to collect and share data for key indicators like agricultural production, welfare, food security and more.",
        image: policy_perspective, 
        link:"/data",
    
  },

];



export { Resources, publications_types };


