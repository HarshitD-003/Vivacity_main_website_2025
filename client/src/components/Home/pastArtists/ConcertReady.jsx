import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const aws = import.meta.env.VITE_AWS;

const BackGround = `${aws}/Section6Background2.webp`;
const mdbackground = `${aws}/mdbackground.webp`;
const Gif = `${aws}/cd_glitch.gif`;
const AppleMusic = `${aws}/AppleMusicLogo.webp`;
const Spotify = `${aws}/SpotifyLogo.webp`;
const PastArtistGIFBorder = `${aws}/PastArtistGIFBorder.webp`;

const Concert = () => {
  const [backgroundSize, setBackgroundSize] = useState("cover");
  const navigate = useNavigate();

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
      <div className="md:hidden  flex flex-col w-full h-full">
        <div
          className=" w-full h-[100%]  grid place-items-center"
          style={{
            backgroundImage: `url(${mdbackground})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center items-center pt-48 xxs:pt-48 xs:pt-64 xs:ml-8 pb-24">
            <div className=" flex flex-col justify-center w-[100%] items-center">
              {/* GIF container - made responsive */}
              <div className="w-[82%] xxs:w-[70%] xs:w-[65%] mb-[2%] relative">
                <div className="relative w-full">
                  <img
                    src={PastArtistGIFBorder}
                    alt="PastArtistGIFBorder"
                    className="w-full h-auto z-10"
                  />
                  <img
                    src={Gif}
                    alt="Concert animation"
                    className="absolute top-[0.7%] left-[3.4%] w-[94%]  h-[99%] object-contain z-0"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-[2%] pt-[2%] xxs:w-[70%] w-[82%] xs:w-[65%] px-[2%]">
                <h2 className="font-bold font-rfabb text-[7vw] md:text-[6.5vw] leading-tight">
                  GET CONCERT-<span className="sm:hidden"><br /></span> READY NOW!
                </h2>

                <div className="relative">
                  <p className="font-semibold font-vetosans text-[4vw] 380:text-[4vw]  xs:text-[3.2vw] tracking-wide leading-tight">
                    Get a sneak peek into Vivacity's epic lineup with our
                    <span className="italic"> handpicked</span> music
                    collection—crafted to set the vibe just right! So grab your
                    squad, hit play, and let the good times roll.
                  </p>

                  {/* Buttons container*/}
                  <div className="flex gap-2 xxs:gap-3 xs:gap-4 sm:gap-5 justify-start mt-[7%] xs:mb-[5%]">
                    <button className="px-[2%] py-[1.2%] xxs:px-3 xxs:py-2 xs:px-3  xs:py-2 sm:px-5 sm:py-3 border border-green-500 rounded-3xl text-black font-bold flex items-center gap-1.5 xxs:gap-2 xs:gap-2.5 sm:gap-3" onClick={() => window.open("https://open.spotify.com/playlist/69j9DryXY4uixo0jjr6xTA?si=hkif4R5VSmSgpZ1jFw4D5A&pi=oBfECo7mT7WAU", "_blank")}>
                      <img
                        src={Spotify}
                        alt="Spotify logo"
                        className="h-4 xxs:h-5 xs:h-6 sm:h-7 md:h-8"
                      />
                      <span className="font-vetosans-500 text-[3.6vw] xs:text-[3.5vw] sm:text-xl md:text-2xl">
                        Spotify
                      </span>
                    </button>
                    <button className="px-[2%] py-[1%] xxs:px-3 xxs:py-2 xs:px-3 xs:py-2 sm:px-5 sm:py-3 border border-red-500 rounded-3xl text-black font-bold flex items-center gap-1.5 xxs:gap-2 xs:gap-2.5 sm:gap-3" onClick={() => navigate("/AppleMusic")}>
                      <img
                        src={AppleMusic}
                        alt="Apple Music logo"
                        className="h-4 xxs:h-5 xs:h-6 sm:h-7 md:h-8"
                      />
                      <span className="font-vetosans-500 text-[3.5vw]  xs:text-[3.5vw] sm:text-xl md:text-2xl">
                        Apple Music
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Layout */}
      <div
        className="hidden md:flex relative justify-center items-center h-[100%] w-[100%] overflow-hidden py-8 md:py-[10%]"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[90%] md:w-[88%] lg:w-[78%] h-full">
          <div className="flex flex-col items-center py-[4%]">
            <div className="flex flex-row w-full gap-[5%] items-center">
              <div className="w-[28%] flex justify-center items-center relative">
                <div className="relative w-[90%]">
                  <img
                    src={PastArtistGIFBorder}
                    alt="PastArtistGIFBorder"
                    className="w-full h-auto z-10"
                  />
                  <img
                    src={Gif}
                    alt="Concert animation"
                    className="absolute top-[0.7%] left-[3.4%] w-[94%]  h-[99%] object-contain z-0"
                  />
                </div>
              </div>
              <div className="w-[63%] flex flex-col">
                <h2 className="font-bold font-rfabb md:text-[2.1rem] lg:text-[2.1rem] 2xl:text-[2.8rem] mt-[2%] xl:text-[2.6rem] 2100:text-[3rem] min-[2500px]:text-[3.3rem] mb-[1%] text-left">
                  GET CONCERT-READY NOW!
                </h2>
                <p className="font-semibold font-vetosans md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.7rem] 2100:text-[2rem] min-[2500px]:text-[2.25rem] tracking-normal leading-relaxed mb-[5%] text-left">
                  Get a sneak peek into Vivacity's epic lineup with our <br />
                  <span className="italic">handpicked</span> music
                  collection—crafted to set the vibe just right! <br />
                  So grab your squad, hit play, and let the good times roll.
                </p>
                <div className="flex gap-[3%] justify-start">
                  <button className="pl-[1%] pr-[1.5%] py-[1%] border border-green-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem]" onClick={() => window.open("https://open.spotify.com/playlist/69j9DryXY4uixo0jjr6xTA?si=hkif4R5VSmSgpZ1jFw4D5A&pi=oBfECo7mT7WAU", "_blank")}>
                    <img
                      src={Spotify}
                      alt="Spotify logo"
                      className="h-[1.5em]"
                    />
                    <span className="font-vetosans-500">Spotify</span>
                  </button>
                  <button className="pl-[1%] pr-[1.5%] py-[1%] border border-red-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem]" onClick={() => navigate("/AppleMusic")}>
                    <img
                      src={AppleMusic}
                      alt="Apple Music logo"
                      className="h-[1.5em]"
                    />
                    <span className="font-vetosans-500">Apple Music</span>
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
