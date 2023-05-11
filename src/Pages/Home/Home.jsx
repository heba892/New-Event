import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import AboutUS from '../AboutUs/AboutUS'
import OverView from '../OverView/OverView'
import CreativeSpaeker from '../CreativeSpeakers/CreativeSpaeker'
import OurPrograms from '../OurPrograms/OurPrograms'
import Registeration from '../Registeration/Registeration'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <AboutUS></AboutUS>
      <OverView></OverView>
      <CreativeSpaeker></CreativeSpaeker>
      <OurPrograms></OurPrograms>
      <Registeration></Registeration>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  )
}

