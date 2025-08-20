import React from 'react'
import Navbar from '../Component/Navbar'
import HeroSection from '../Component/HeroSection'
import LogoSlider from '../Component/LogoSlider'
import Temp from '../Component/Temp'

const Dashboard = () => {
  return (
    <div className='bg-black h-screen max-w-screen [font-family:var(--font-inter)] overflow-x-hidden'>
      <Navbar/>
      <HeroSection/>
      <LogoSlider/>
      <Temp/>
    </div>
  )
}

export default Dashboard
