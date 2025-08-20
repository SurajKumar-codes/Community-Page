import React, { useState } from 'react'

const Button = ({name,className}) => {


  return (
     <div >
      <button className={`font-normal mr-4 px-4 py-2 rounded-2xl w-{width} ${className} hover:bg-[#FF9900] transition-colors duration-500 ease-in-out `}>{name}</button>
    </div>
  )
}

export default Button
