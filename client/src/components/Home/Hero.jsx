import React from "react";
import Image1 from "../../assets/images/left1.png";
import Image2 from "../../assets/images/top1.png";
import Image3 from "../../assets/images/top2.png";
import Image4 from "../../assets/images/right1.png";
import Image5 from "../../assets/images/bottom1.png";
import Image6 from "../../assets/images/bottom2.png";
import Image7 from "../../assets/images/viva_logo_hero.png";
import "./forHero.css";

const Hero = () => {
  return (
    <>
     <div className="hidden sm:flex relative w-full h-screen bg-yellow-200 overflow-hidden">
        {/* Container to maintain aspect ratio */}
        <div className="relative w-full h-full" style={{ aspectRatio: '16/9' }}>
          {/* Left image */}
          <div className="absolute left-0 top-[-5%] w-[22%] h-auto">
            <img 
              className="w-full h-auto"
              style={{ aspectRatio: '0.54' }}
              src={Image1} 
              alt="" 
            />
          </div>
          

          {/* Top left image */}
          <div className="absolute left-[3%] top-[-2.5%] w-[45.2%] h-auto">
            <img 
              className="w-full h-auto"
              style={{ aspectRatio: '2.3' }}
              src={Image2} 
              alt="" 
            />
          </div>

          {/* Top right image */}
          <div className="absolute left-[41%] top-[-3%] w-[46%] h-auto">
            <img 
              className="w-full h-auto"
              style={{ aspectRatio: '2.29' }}
              src={Image3} 
              alt="" 
            />
          </div>

          {/* Right image */}
          <div className="absolute right-0 top-[-18%] w-[37.5%] h-auto">
            <img 
              className="w-full h-auto"
              style={{ aspectRatio: '0.93' }}
              src={Image4} 
              alt="" 
            />
          </div>

          {/* Bottom left image */}
          <div className="absolute left-[2.5%] bottom-[-2%] w-[55%] h-auto">
            <img 
              className="w-full h-auto"
              style={{ aspectRatio: '2.95' }}
              src={Image5} 
              alt="" 
            />
          </div>

          {/* Bottom right image */}
          <div className="absolute right-0 bottom-0 w-[44%] h-auto">
            <img 
              className="w-full h-auto"
              style={{ aspectRatio: '2.7' }}
              src={Image6} 
              alt="" 
            />
          </div>

          {/* Center logo */}
          <div className="absolute left-[28%] top-[35%] w-[33%] h-auto">
            <img 
              className="w-full h-auto"
              style={{ aspectRatio: '2' }}
              src={Image7} 
              alt="" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

