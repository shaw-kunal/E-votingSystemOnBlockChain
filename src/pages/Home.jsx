import React from 'react'
import Navbar from '../components/Navbar'
import BackgroundSlider from '../components/BackgroundSlider/BackgroundSlider'
import OurStory from '../components/OurStory/OurStory'
import ProcessLine from '../components/ProcessLine/ProcessLine'
import HomeLogin from '../HomeLogin/HomeLogin'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <BackgroundSlider/>
      <OurStory/>
      <ProcessLine/>
      <HomeLogin/>
    </div>
  )
}
export default Home