import React from "react";
import Infinite from "../subPages/infinite";
import Image1 from "../../assets/images/Grid.png";
import Image2 from "../../assets/images/Halftone.png";
import Image3 from "../../assets/images/Name_Tag_unit.png";
import Image4 from "../../assets/images/CTA.png";
import Image5 from "../../assets/images/blue_arrow.png";
import Image6 from "../../assets/images/red_arrow.png";
import "./forAbout.css"
import { NavLink } from "react-router-dom"


function About() {
  const textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0KEEP\u00A0\u00A0SCROLLING!\u00A0\u00A0\u00A0\u00A0\u00A0";

  return (
    <>
      <div
        className="relative w-full h-[100vh] bg-gray-900 p-8 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        <div className="relative flex gap-20  bg-yellow-400 p-8 shadow-lg max-w-[70vw] aspect-[2.5] items-center"
          style={{
            transform: "rotate(3deg)",
          }}
        >

          <div className=" absolute h-52 w-52 z-50 "
          style={{
            top: "-30%",
            right: "-10%",
          }}
          >
            <img src={Image5} alt="" />
          </div>

          <div className="imagee6 absolute h-52 w-52 z-50 "
          style={{
            bottom: "-55%",
            left: "-10%",
          }}
          >
            <img src={Image6} alt="" />
          </div>

          <div
            className="imagee3 absolute h-[25vh] w-[18vw] z-50"
            style={{
              top: "-14%",
              left: "-8%",
            }}
          >
            <NavLink to="/">
              <img
                src={Image3}
                alt="Name Tag Unit"
                className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
              />
            </NavLink>
          </div>

          <div
            className="imagee4 absolute h-[25vh] w-[15vw] z-50"
            style={{
              bottom: "-31%",
              right: "-5%",
            }}
          >
            <NavLink to="/">
              <img
                src={Image4}
                alt="Name Tag Unit"
                className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
              />
            </NavLink>
          </div>

          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
            style={{
              backgroundImage: `url(${Image2})`,
            }}
          ></div>

          <div className="relative z-10 flex gap-[4vw] items-center w-full">
            <div className="leftDiv w-[16vw] h-[37vh] rounded-lg bg-gray-600 border-[3px] border-black ml-[4vw]">

              <img src="" alt="" />

            </div>

            <div className="relative flex-1 transform -skew-x-6 p-[2vw] mr-[4vw]">
              <div className="transform skew-x-6">
                <h1 className="text-4xl font-extrabold mb-[3vh]">ABOUT VIVACITY</h1>
                <p className="para text-xl">
                  Vivacity, the annual cultural fest of LNMIIT, embodies the vibrant spirit of Gen Z and
                  Millennials, presenting an enticing mix of music, dance, and numerous engaging
                  activities. With exhilarating performances and insightful exhibitions, Vivacity captures
                  the true essence of a lively and memorable cultural celebration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Infinite text={textContent} />
    </>
  );
}

export default About;



