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
      <div className="relative h-[100vh] w-full bg-yellow-200 overflow-hidden">
        <div
          className="absolute image-container"
          style={{
            left: "0%",
            top: "-5%",
          }}
        >
          <img className="w-[27vw] aspect-[0.54]" src={Image1} alt="" />
        </div>

        <div
          className="absolute image-container"
          style={{
            top: "-2.5%",
            left: "3%",
          }}
        >
          <img className="w-[45.2vw] aspect-[2.3]" src={Image2} alt="" />
        </div>

        <div
          className="absolute image-container"
          style={{
            top: "-3%",
            left: "41%",
          }}
        >
          <img className="w-[46vw] aspect-[2.29]" src={Image3} alt="" />
        </div>

        <div
          className="absolute image-container"
          style={{
            top: "-18%",
            right: "0%",
          }}
        >
          <img className="w-[37.5vw] aspect-[0.93]" src={Image4} alt="" />
        </div>

        <div
          className="absolute image-container five1"
          style={{
            bottom: "-2%",
            left: "2.5%",
          }}
        >
          <img className="five2 w-[55vw] aspect-[2.95]" src={Image5} alt="" />
        </div>

        <div
          className="absolute image-container six1"
          style={{
            right: "0%",
            bottom: "0%",
          }}
        >
          <img className="six2 w-[44vw] aspect-[2.7]" src={Image6} alt="" />
        </div>

        <div
          className="absolute"
          style={{
            top: "35%",
            left: "28%",
          }}
        >
          <img className="w-[33vw] aspect-[2]" src={Image7} alt="" />
        </div>
      </div>
  );
};

export default Hero;

