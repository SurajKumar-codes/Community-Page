import React, { useState } from 'react'
import com_logo from '../../public/Devandra_icon.webp'
import Button from './Button';

export default function Navbar() {
  const [isActive, setActive] = useState(null);
  return (
    <div className='text-white w-screen h-25 text-2xl border-b-amber-700 flex flex-shrink justify-between items-center'>
      <div className=''>
        <img src={com_logo} alt="image" className='h-20 w-20 ml-5 mt-3'/>
      </div>
      <div>
        <ul className='flex list-none gap-10 justify-center items-center'>
          <li className='text-[#FF9900]'>Competitions</li>
          <li className='hover:text-[#FF9900] transition-colors duration-500 ease-in-out'>Events</li>
          <li className='hover:text-[#FF9900] transition-colors duration-500 ease-in-out'>Leaderboard</li>
          <li className='hover:text-[#FF9900] transition-colors duration-500 ease-in-out'>Resources</li>
          <li className='hover:text-[#FF9900] transition-colors duration-500 ease-in-out'>Community</li>
        </ul>
      </div>
      <div className='flex'>
        <Button name = "login" className='w-[122px]'/>
        <Button name = "Sign Up" className='w-[122px] bg-[#FF9900] hover:opacity-80 transition-opacity duration-500 ease-in-out'/>
      </div>
    </div>
  )
}
