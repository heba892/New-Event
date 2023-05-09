import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import AboutUS from '../AboutUs/AboutUS'
import OverView from '../OverView/OverView'
import CreativeSpaeker from '../CreativeSpeakers/CreativeSpaeker'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <AboutUS></AboutUS>
      <OverView></OverView>
      <CreativeSpaeker></CreativeSpaeker>
    </div>
  )
}

