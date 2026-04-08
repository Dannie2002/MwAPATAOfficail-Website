import {Routes, Route } from "react-router";
import CoverPages from "./Sections/CoverPages";
import PolicyBrief from './Sections/SubSections/PolicyBrief'
import Peer_Reviewed_Research from './Sections/Peer_Reviewed_Research'
import Policy_Perspective from './Sections/Policy_Perspective'
import Capacity_Building_Seminars from './Sections/Capacity_Building_Seminars'
import Footer from "./Sections/Footer";
import WorkingPapers from "./Sections/WorkingPapers";
import OurTeam from "./Sections/OurTeam";
import About_Us from "./Sections/About_Us";
import Contact_Us from "./Sections/Contact_Us";
import Governance from "./Sections/Governance";
import Partners from "./Sections/Partners";
import Events from "./Sections/Events";
import Programmes from "./Sections/Programmes";
import JobListings from "./Sections/JobListings";
import EminentSpeaker from "./Sections/EminentSpeaker";
import MAAPC2021Event from "./Sections/SubSections/MAAPC2021Event";
import MAAPC2022Event from "./Sections/SubSections/MAAPC2022Event";
import MAAPC2023Event from "./Sections/SubSections/MAAPC2023Event";
import MAAPC2024Event from "./Sections/SubSections/MAAPC2024Event";
import Publications from "./Sections/Publications";
import SeminalSeries from "./Sections/SubSections/SeminalSeries"






function App() {


  return (

<>

    <Routes>
      <Route path="/" element={<CoverPages />} />
      <Route path="/Publications/working-papers" element={<WorkingPapers />} />
      <Route path="/policy-brief" element={<PolicyBrief />} />
      <Route path="/perspectives" element={<Policy_Perspective />} />
      <Route path="/peer-review" element={<Peer_Reviewed_Research />} />
      <Route path="/seminars" element={<Capacity_Building_Seminars />} />
      <Route path="/about-us" element={<About_Us />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/job-listings" element={<JobListings />} />
      <Route path="/eminent-speaker" element={<EminentSpeaker />} />
      <Route path="/contact-us" element={<Contact_Us />} />
      <Route path="/maapc-2021" element={<MAAPC2021Event />} />
      <Route path="/maapc-2022" element={<MAAPC2022Event />} />
      <Route path="/maapc-2023" element={<MAAPC2023Event />} />
      <Route path="/maapc-2024" element={<MAAPC2024Event />} />
      <Route path="/seminal-series" element={<SeminalSeries />} />
      <Route path="/programmes" element={<Programmes />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/partners" element={<Partners />} />
    </Routes>
    

<Footer />   
</>
      
  )
}


export default App
