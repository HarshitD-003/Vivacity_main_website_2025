import React, { useState, useEffect } from "react";
import BackGround from "../../../assets/images/Section6Background2.png";
import mdbackground from "../../../assets/images/mdbackground.png";
import Gif from "../../../assets/images/gif (2).png";
import AppleMusic from "../../../assets/images/AppleMusicLogo.png";
import Spotify from "../../../assets/images/SpotifyLogo.png";

const Concert = () => {
  const [backgroundSize, setBackgroundSize] = useState("cover");

  useEffect(() => {
    const updateStyles = () => {
      setBackgroundSize(
        window.innerWidth / window.innerHeight < 3 / 2 ? "cover" : "contain"
      );
    };
    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, []);

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden relative flex flex-col items-center w-full min-h-[90vh]">
        <div
          className="relative w-full min-h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${mdbackground})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Content wrapper */}
          <div className="w-[85.7%] h-[73.7vh]">
            {/* Content container */}
            <div className="flex flex-col items-center h-full px-2 py-12">
              {/* GIF container - 98.2% of parent width, 51.4% of parent height */}
              <div className="w-[95.2%] h-[49.4%] mb-3 mt-8">
                <img
                  src={Gif}
                  alt="Concert animation"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text content - 44.2% of parent height */}
              <div className="text-center w-[98.2%] h-[44.2%] flex flex-col justify-between">
                <div>
                  <h2 className="font-bold font-rfabb text-[1.6rem] mb-4">
                    GET CONCERT-READY NOW!
                  </h2>
                  <p className="font-semibold font-vetosans text-[0.9rem] mb-1 leading-relaxed">
                    Get a sneak peek into Vivacity's epic lineup with our{" "}
                    <span className="italic">handpicked</span> music
                    collection—crafted to set the vibe just right! So grab your
                    squad, hit play, and let the good times roll.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 justify-center">
                  <button className="px-3 py-2 border-2 border-green-500 rounded-full text-black font-bold flex items-center gap-2 text-[0.875rem]">
                    <img src={Spotify} alt="Spotify logo" className="h-5" />
                    <span>Spotify</span>
                  </button>
                  <button className="px-3 py-2 border-2 border-red-500 rounded-full text-black font-bold flex items-center gap-2 text-[0.875rem]">
                    <img
                      src={AppleMusic}
                      alt="Apple Music logo"
                      className="h-5"
                    />
                    <span>Apple Music</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div
        className="hidden md:flex relative justify-center items-center w-full min-h-screen md:min-h-[60vh] overflow-hidden py-8 md:py-[5%]"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: backgroundSize,
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] md:w-[88%] lg:w-[68%] h-full">
          <div className="flex flex-col items-center">
            <div className="flex flex-row w-full gap-[5%] items-center">
              <div className="w-[35%] flex justify-center items-center">
                <img
                  src={Gif}
                  alt="Concert animation"
                  className="w-full max-h-[400px] h-auto object-contain"
                />
              </div>
              <div className="w-[63%] flex flex-col">
                <h2 className="font-bold font-rfabb md:text-[2.1rem] lg:text-[2.1rem] 2xl:text-[3rem] xl:text-[2.6rem] mb-[3%] text-left">
                  GET CONCERT-READY NOW!
                </h2>
                <p className="font-semibold font-vetosans md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.9rem] tracking-tighter leading-relaxed mb-[5%] text-left">
                  Get a sneak peek into Vivacity's epic lineup with our <br />
                  <span className="italic">handpicked</span> music
                  collection—crafted to set the vibe just right! <br />
                  So grab your squad, hit play, and let the good times roll.
                </p>
                <div className="flex gap-[3%] justify-start">
                  <button className="px-[2%] py-[1%] border-2 border-green-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem]">
                    <img
                      src={Spotify}
                      alt="Spotify logo"
                      className="h-[1.5em]"
                    />
                    <span>Spotify</span>
                  </button>
                  <button className="px-[2%] py-[1%] border-2 border-red-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem]">
                    <img
                      src={AppleMusic}
                      alt="Apple Music logo"
                      className="h-[1.5em]"
                    />
                    <span>Apple Music</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concert;
