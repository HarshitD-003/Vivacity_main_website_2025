import React from "react";
import BackGround from "../../../assets/images/Group 60.png";
import Amit from "../../../assets/images/Amit.png";

const ArtistCard = ({ artist }) => {
  return (
    <div
      className="relative w-[200px] md:w-[300px] lg:w-[350px] aspect-[312/451]"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[75%] overflow-hidden p-[8%]">
        <img
          src={artist.Src}
          alt={artist.Name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Name Container */}
      <div className="w-full h-[14%] flex items-center justify-center">
        <img src={Amit} className="w-auto h-full" />
      </div>
    </div>
  );
};

export default ArtistCard;
