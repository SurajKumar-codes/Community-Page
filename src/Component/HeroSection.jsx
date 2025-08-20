import React from 'react'
import Button from './Button'
import heroIcon from '/devantra_white_logo.png'

const HeroSection = () => {
  return (
    <div className='text-white w-screen min-h-screen bg-black flex p-36 gap-20 justify-between items-stretch '>
      <div className='flex-row justify-center items-center'>
        <div>
            <h1 className="text-7xl font-bold leading-tight pb-15 text-white">
              Compete.<br/>Learn.<br/>Innovate.
            </h1>
        </div>
        <div >
           <p className="text-2xl leading max-w-2xl mt-4 pb-12">
            The Devtantra Community is your hub for challenging coding competitions, 
            insightful events, and a vibrant network of developers. Showcase your skills, 
            learn from the best, and innovate the future of tech.
           </p>
        </div>
        <div className='flex '>
          <Button name ="Join a Competition" className='bg-[#FF9900] text-xl py-3 hover:opacity-80 transition-opacity duration-500 ease-in-out'/>
          <Button name ="Explore Events" className='border-2 border-[#FF9900] w-[210px] text-2xl'/>
        </div>
      </div>
      <div>
        <img src={heroIcon} alt=""  className='w-[450px] h-[450px]'/>
      </div>
    </div>
  )
}

export default HeroSection
