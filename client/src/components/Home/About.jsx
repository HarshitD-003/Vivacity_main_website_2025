// import React from "react";
// import Infinite from "../subPages/Infinite";
// import Image1 from "../../assets/images/Grid.png";
// import Image2 from "../../assets/images/Halftone.png";
// import Image3 from "../../assets/images/Name_Tag_unit.png";
// import Image4 from "../../assets/images/CTA.png";
// import Image5 from "../../assets/images/blue_arrow.png";
// import Image6 from "../../assets/images/red_arrow.png";
// import "./forAbout.css"
// import { NavLink } from "react-router-dom"


// function About() {
//   const textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0KEEP\u00A0\u00A0SCROLLING!\u00A0\u00A0\u00A0\u00A0\u00A0";

//   return (
//     <>

//       <div
//         className="relative w-full   min-h-[100vh] overflow-hidden bg-gray-900 p-8 flex items-center justify-center "
//         style={{
//           backgroundImage: `url(${Image1})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >

//         <div className=" lg:hidden relative flex mt-10 mb-10  "
//         >

//           <div
//             className="smImg4 absolute h-[45vh] w-[30vw] sm:h-[30vh] sm:w-[28vw]  md:h-[25vh] md:w-[25vw] z-40"
//             style={{
//               top: "95%",
//               left: "25%",
//               transform: "rotate(7.6deg)",
//             }}
//           >
//             <NavLink to="/">
//               <img
//                 src={Image4}
//                 alt="Name Tag Unit"
//                 className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
//               />
//             </NavLink>
//           </div>

//           <div
//             className="smImg3 imagee3 absolute h-[42vh] w-[40vw] sm:h-[37vh] sm:w-[32vw]  md:h-[32vh] md:w-[30vw] z-40"
//             style={{
//               top: "-16%",
//               left: "18%",
//               transform: "rotate(15deg)",
//             }}
//           >
//             <NavLink to="/">
//               <img
//                 src={Image3}
//                 alt="Name Tag Unit"
//                 className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
//               />
//             </NavLink>
//           </div>

//           <div className="absolute blue h-52 w-52 z-30 "
//             style={{
//               top: "-21%",
//               right: "-30%",
//             }}
//           >
//             <img src={Image5} alt="" />
//           </div>
//           <div className="absolute red h-52 w-52 z-30 "
//             style={{
//               bottom: "-37%",
//               left: "-30%",
//             }}
//           >
//             <img src={Image6} alt="" />
//           </div>


//           <div className=" p-3 sm:p-6 md:p-8 max-w-[26rem] max-h-fit sm:max-w-[60vw] md:max-w-[50vw]"
//             style={{
//               backgroundColor: "rgba(248,185,49,1)"
//             }}
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
//               style={{
//                 backgroundImage: `url(${Image2})`,
//               }}
//             ></div>
//             <div className="flex justify-center">
//               <div className="relative bg-gray-300 border-black border-2 mt-5 sm:mt-2 w-[290px] sm:w-3/4 md:w-2/3 aspect-square mb-4">

//                 <img src="" alt="" />
//               </div>
//             </div>

//             <h2 className="font-bold text-2xl text-center px-6 sm:px-4 md:px-8  mb-4 font-rfabb">ABOUT VIVACITY</h2>
//             <p className="text-center text-lg md:text-lg px-6 sm:px-4 md:px-8 font-vetosans">
//               Vivacity, the annual cultural fest of LNMIIT, embodies the vibrant spirit of
//               Gen Z and Millennials, presenting an enticing mix of music, dance, art, and
//               numerous engaging activities. With exhilarating performances and
//               insightful exhibitions, Vivacity captures the true essence of a lively and
//               memorable cultural celebration.
//             </p>
//           </div>
//         </div>


//         <div className="hidden lg:flex relative gap-20 p-8 shadow-lg max-w-[70vw] aspect-[2.5] items-center "
//           style={{
//             transform: "rotate(3deg)",
//             backgroundColor: "rgba(248,185,49,1)"

//           }}
//         >

//           <div className="blueArr absolute h-52 w-52 z-40 "
//             style={{
//               top: "-25%",
//               right: "-10%",
//             }}
//           >
//             <img src={Image5} alt="" />
//           </div>

//           <div className="redArr imagee6 absolute h-52 w-52 z-40 "
//             style={{
//               bottom: "-49%",
//               left: "-10%",
//             }}
//           >
//             <img src={Image6} alt="" />
//           </div>

//           <div
//             className="imagee3 absolute h-[25vh] w-[18vw] z-40"
//             style={{
//               top: "-14%",
//               left: "-8%",
//             }}
//           >
//             <NavLink to="/">
//               <img
//                 src={Image3}
//                 alt="Name Tag Unit"
//                 className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
//               />
//             </NavLink>
//           </div>

//           <div
//             className="imagee4 absolute h-[25vh] w-[15vw] z-40"
//             style={{
//               top: "90%",
//               left: "86%",
//             }}
//           >
//             <NavLink to="/">
//               <img
//                 src={Image4}
//                 alt="Name Tag Unit"
//                 className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
//               />
//             </NavLink>
//           </div>

//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
//             style={{
//               backgroundImage: `url(${Image2})`,
//             }}
//           ></div>

//           <div className="relative z-10 flex gap-[2vw] items-center w-full">
//             <div className="leftDiv w-[31%] aspect-square  bg-gray-600 border-[3px] border-black ml-[4vw]">

//               <img src="" alt="" />

//             </div>

//             <div className="relative flex-1 transform -skew-x-6 p-[2vw] mr-[4vw]">
//               <div className="transform skew-x-6">
//                 <h1 className="head lg:pt-4 xl:pt-0 text-4xl font-extrabold mb-[3vh] font-rfabb">ABOUT VIVACITY</h1>
//                 <p className="para text-base font-vetosans">
//                   Vivacity, the annual cultural fest of LNMIIT, embodies the vibrant spirit of Gen Z and
//                   Millennials, presenting an enticing mix of music, dance, and numerous engaging
//                   activities. With exhilarating performances and insightful exhibitions, Vivacity captures
//                   the true essence of a lively and memorable cultural celebration.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Infinite text={textContent} />
//     </>
//   );
// }

// export default About;


import React from "react";
import Infinite from "../subPages/Infinite";
import Image1 from "../../assets/images/Grid.png";
import Image2 from "../../assets/images/Halftone.png";
import Image3 from "../../assets/images/Name_Tag_unit.png";
import Image4 from "../../assets/images/CTA.png";
import Image5 from "../../assets/images/blue_arrow.png";
import Image6 from "../../assets/images/red_arrow.png";
import Image7 from "../../assets/images/mynameisviva.png";
import Image8 from "../../assets/images/oval.png";
import "./forAbout.css"
import { NavLink } from "react-router-dom"


function About() {
  const textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0KEEP\u00A0\u00A0SCROLLING!\u00A0\u00A0\u00A0\u00A0\u00A0";

  return (
    <>

      <div
        className="relative w-full  min-h-[100vh] overflow-hidden lg:overflow-visible bg-gray-900 p-8 flex items-center justify-center "
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className=" lg:hidden relative flex mt-10 mb-10   "
        >

          <div className="absolute blue h-52 w-52 z-30 "
            style={{
              top: "-16%",
              right: "-30%",
            }}
          >
            <img src={Image5} alt="" />
          </div>
          <div className="absolute red h-52 w-52 z-30 "
            style={{
              bottom: "-32%",
              left: "-30%",
            }}
          >
            <img src={Image6} alt="" />
          </div>


          <div className=" p-3 sm:p-6 md:p-8 max-w-[26rem] max-h-fit sm:max-w-[60vw] md:max-w-[50vw]"
            style={{
              backgroundColor: "rgba(248,185,49,1)"
            }}
          >
            <div className="w-full h-[2vh] flex justify-center items-center">
            <div
            className="smImg3 imagee3 absolute h-[42vh] w-[40vw] sm:h-[37vh] sm:w-[32vw]  md:h-[32vh] md:w-[30vw] z-40"
            style={{
              top: "-16%",
              left: "18%",
              transform: "rotate(16deg)",
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
            </div>

            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
              style={{
                backgroundImage: `url(${Image2})`,
              }}
            ></div>
            <div className="flex justify-center">
              <div className="relative bg-gray-300 border-black border-2 mt-5 sm:mt-2 w-[290px] sm:w-3/4 md:w-2/3 aspect-square mb-4">

                <img src="" alt="" />
              </div>
            </div>

            <h2 className="font-bold text-2xl text-center px-6 sm:px-4 md:px-8  mb-4 font-rfabb">ABOUT VIVACITY</h2>
            <p className="text-center text-lg md:text-lg px-6 sm:px-4 md:px-8 font-vetosans">
              Vivacity, the annual cultural fest of LNMIIT, embodies the vibrant spirit of
              Gen Z and Millennials, presenting an enticing mix of music, dance, art, and
              numerous engaging activities. With exhilarating performances and
              insightful exhibitions, Vivacity captures the true essence of a lively and
              memorable cultural celebration.
            </p>
            <div className="w-full h-[2vh] flex justify-center items-center">
              <div
                className="smImg4 absolute h-[45vh] w-[30vw] sm:h-[30vh] sm:w-[28vw]  md:h-[25vh] md:w-[25vw] z-40"
                style={{
                  top: "95%",
                  left: "25%",
                  transform: "rotate(7.6deg)",
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
            </div>
          </div>
        </div>


        <div className="hidden lg:flex relative gap-20 p-8 shadow-lg max-w-[70vw] aspect-[2.5] items-center "
          style={{
            transform: "rotate(3deg)",
            backgroundColor: "rgba(248,185,49,1)"

          }}
        >

          <div className="blueArr absolute h-52 w-52 z-40 "
            style={{
              top: "-25%",
              right: "-10%",
            }}
          >
            <img src={Image5} alt="" />
          </div>

          <div className="redArr imagee6 absolute h-52 w-52 z-40 "
            style={{
              bottom: "-49%",
              left: "-10%",
            }}
          >
            <img src={Image6} alt="" />
          </div>

          <div
            className="imagee3 absolute h-[25vh] w-[18vw] z-40"
            style={{
              top: "-14%",
              left: "-7%",
            }}
          >
            <NavLink to="/">
              <img
                src={Image7}
                alt="Name Tag Unit"
                className="transform  rotate-[-16.5deg] transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
              />
            </NavLink>
          </div>

          <div
            className="imagee4 absolute h-[25vh] w-[15vw] z-40"
            style={{
              top: "90%",
              left: "86%",
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

          <div className="relative z-10 flex gap-[2vw] items-center w-full">
            <div className="leftDiv w-[31%] aspect-square  bg-gray-600 border-[3px] border-black ml-[4vw]">

              <img src="" alt="" />

            </div>

            <div className="relative flex-1 transform -skew-x-6 p-[2vw] mr-[4vw]">
              <div className="transform skew-x-6">
                <h1 className="head lg:pt-4 xl:pt-0 text-4xl font-extrabold mb-[3vh] font-rfabb">ABOUT VIVACITY</h1>
                <p className="para text-base font-vetosans">
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




