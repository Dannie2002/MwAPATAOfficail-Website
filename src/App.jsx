import { Routes, Route } from "react-router";
import CoverPages from "./Sections/CoverPages";
import PolicyBrief from './Sections/SubSections/PolicyBrief'
import Peer_Reviewed_Research from './Sections/Peer_Reviewed_Research'
import Policy_Perspective from './Sections/Policy_Perspective'
import Capacity_Building_Seminars from './Sections/Capacity_Building_Seminars'
import Footer from "./Sections/Footer";
import WorkingPapers from "./Sections/WorkingPapers";
import OurTeam from "./Sections/OurTeam";
import About_Us from "./Sections/About_Us";
import Governance from "./Sections/Governance";
import Partners from "./Sections/Partners";
import Events from "./Sections/Events";
import Programmes from "./Sections/Programmes";
import JobListings from "./Sections/JobListings";
import EminentSpeaker from "./Sections/EminentSpeaker";






function App() {


  return (
<>
    <Routes>
      <Route path="/" element={<CoverPages />} />
      <Route path="/working-papers" element={<WorkingPapers />} />
      <Route path="/policy-brief" element={<PolicyBrief />} />
      <Route path="/perspectives" element={<Policy_Perspective />} />
      <Route path="/peer-review" element={<Peer_Reviewed_Research />} />
      <Route path="/seminars" element={<Capacity_Building_Seminars />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/job-listings" element={<JobListings />} />
      <Route path="/eminent-speaker" element={<EminentSpeaker />} />
    </Routes>

<Footer />   
</>
      
  )
}


export default App
