import { Routes, Route } from "react-router";
import CoverPages from "./Sections/CoverPages";
import PolicyBrief from './Sections/SubSections/PolicyBrief'
import Peer_Reviewed_Research from './Sections/Peer_Reviewed_Research'
import Publications from './Sections/Publications'
import Policy_Perspective from './Sections/Policy_Perspective'
import Capacity_Building_Seminars from './Sections/Capacity_Building_Seminars'
import Footer from "./Sections/Footer";

import WorkingPapers from "./Sections/WorkingPapers";






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
    </Routes>

<Footer />   
</>
      
  )
}


export default App
