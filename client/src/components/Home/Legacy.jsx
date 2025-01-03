import React, { useState } from "react";
import Legacybackground from "../../assets/images/LegacyBg.png";
import TextBg from "../../assets/images/TitleText.png";
//import BottomImage from "../../assets/images/LegacyBottom.png"; 
import VideoGrid from "./Videogrid";



const Legacy = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-4 py-8"
      style={{
        backgroundImage: `url(${Legacybackground})`,
        backgroundSize: "cover",
        margin: "0 auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div
        className="w-full max-w-4xl text-center bg-cover bg-center py-8 mb-12 rounded-lg"
        style={{
          backgroundImage: `url(${TextBg})`,
          maxWidth: "32.81rem",
          margin: "2rem auto 4rem", 
          aspectRatio: "525 / 94",
        }}
      >
        <h1 className="text-4xl font-bold text-white">The Legacy</h1>
      </div>
      <VideoGrid />
    </div>
  );
};

 export default Legacy;
