import { useState } from 'react'
import About_Us from './Sections/About_Us'
import Programmes from './Sections/Programmes'
import Section_header from './Sections/Section_header'
import OurTeam from './Sections/OurTeam'
import Events from './Sections/Events'
import Newsletter from './Sections/Newsletter'
import EventDetailed from './Sections/SubSections/EventDetailed'
import News from './Sections/News'
import YouTube from './Sections/YouTube'
import Publications from './Sections/Publications'
import LandingPage from './Sections/LandingPage'



function App() {


  return (
    <>
    <LandingPage />
    <About_Us />
    <OurTeam />
    <Programmes />
    <Section_header />
    <Events />
    <Newsletter />
    <EventDetailed /> 
    <News />  
    <YouTube />
    <Publications />
    </>
  )
}


export default App
