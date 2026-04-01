import { useState } from 'react'
import About_Us from './Sections/About_Us'
import Programmes from './Sections/Programmes'
import OurTeam from './Sections/OurTeam'
import Governance from './Sections/Governance'
import Events from './Sections/Events'
import Newsletter from './Sections/Newsletter'
import EventDetailed from './Sections/SubSections/EventDetailed'
import News from './Sections/News'
import YouTube from './Sections/YouTube'
import Publications from './Sections/Publications'
import LandingPage from './Sections/LandingPage'
import NewsDetailed from './Sections/SubSections/NewsDetailed'
import EminentSpeaker from './Sections/EminentSpeaker'
import JobListing from './Sections/JobListing'
import Footer from './Sections/Footer'
import EminentSpeakerDetailed from './Sections/SubSections/EminentSpeakerDetailed'
import WorkingPapers from './Sections/SubSections/WorkingPapers'
import PolicyBrief from './Sections/SubSections/PolicyBrief'
import Capacity_Building_Seminars from './Sections/Capacity_Building_Seminars'
import Highlights from './Sections/Highlights'
import Contact_Us from './Sections/Contact_Us'
import ExtraEvent from './Sections/SubSections/ExtraEvent.jsx'





function App() {


  return (
    <>
      <LandingPage />
      <About_Us />
      <Highlights />
      <WorkingPapers />
      <PolicyBrief />
      <Newsletter />
      <NewsDetailed />
      <Contact_Us />
      <EventDetailed />
      <EminentSpeakerDetailed />
      <EminentSpeaker />
      <ExtraEvent />
      <Footer />
    </>
  )
}


export default App
