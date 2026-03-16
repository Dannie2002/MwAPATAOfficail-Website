import { useState } from 'react'
import About_Us from './Sections/About_Us'
import Programmes from './Sections/Programmes'
import OurTeam from './Sections/OurTeam'
import Events from './Sections/Events'
import Newsletter from './Sections/Newsletter'
import EventDetailed from './Sections/SubSections/EventDetailed'
import News from './Sections/News'
import YouTube from './Sections/YouTube'
import Publications from './Sections/Publications'
import LandingPage from './Sections/LandingPage'
import NewsDetailed from './Sections/SubSections/NewsDetailed'
import EminentSpeaker from './Sections/EminentSpeaker'




function App() {


  return (
    <>
    <LandingPage />
    <About_Us />
    <OurTeam />
    <Programmes />
    <Events />
    <Newsletter />
    <EventDetailed /> 
    <NewsDetailed />
    <News />  
    <YouTube />
    <Publications />
    <EminentSpeaker />
    </>
  )
}


export default App
