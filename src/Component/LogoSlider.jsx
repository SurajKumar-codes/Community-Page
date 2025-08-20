import React from "react";
import Marquee from "react-fast-marquee";

// import your logos
import logos from "/public/Devandra_icon.webp";

const LogoSlider = () => {
  return (
    <div className="bg-black py-6 border-y-2 border-gray-400">
      <Marquee
        gradient={false}   
        speed={50}        
        pauseOnHover={true}
        autoFill={true}
        // gradient={true}
      >
        <img src={logos} alt="Ford" className="h-25 mx-16" />
        <img src={logos} alt="GE" className="h-25 mx-16" />
        <img src={logos} alt="Komatsu" className="h-25 mx-16" />
        <img src={logos} alt="Lockheed Martin" className="h-25 mx-16" />
        <img src={logos} alt="TTI" className="h-25 mx-16" />
      </Marquee>
    </div>
  );
};

export default LogoSlider;
