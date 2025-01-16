import React from "react";
import Background from "../../assets/images/ExcitingBg.png";
import title from "../../assets/images/Title3.png";
import promNight from "../../assets/images/Prom Night.png";
import silentDisco from "../../assets/images/Silent Disco.png";
import jammingNight from "../../assets/images/Jamming Night.png";
import stageSpectrum from "../../assets/images/Stage Spectrum.png";
import promNight_text from "../../assets/images/TopLeft.png";
import silentDisco_text from "../../assets/images/TopRightText.png";
import stageSpectrum_text from "../../assets/images/BottomLeftt.png";
import jammingNight_text from "../../assets/images/BottomRightt.png";
import text1 from "../../assets/images/textbox1.png";
import bigtextbox from "../../assets/images/bigtextbox.png";

import PromNight_mobile from "../../assets/images/Prom Night-2.png";
import SilentDisco_mobile from "../../assets/images/Silent Disco-2.png";
import JammingNight_mobile from "../../assets/images/Image Box.png";
import StageSpectrum_mobile from "../../assets/images/Stage Spectrum-2.png";
import PromNight_text_mobile from "../../assets/images/Event Name-4.png";
import SilentDisco_text_mobile from "../../assets/images/Text-2.png";
import StageSpectrum_text_mobile from "../../assets/images/Text-3.png";
import JammingNight_text_mobile from "../../assets/images/Text-4.png";

function Exciting() {
  return (
    <div
      className="min-h-[70vh] w-full bg-center bg-cover p-4"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Title Section */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={title}
          alt="Exciting Pursuits"
          className="w-[63%] md:min-w-[600px]  sm:min-w-[500px]  object-contain"
        />
      </div>

      {/* Desktop Layout */}
      <div className="w-full mx-auto hidden md:block">
        {/* Top Row */}
        <div className="flex flex-wrap gap-7 mb-4 justify-center">
          {/* Prom Night */}
          <div className="w-[49.375%]">
            <div className="relative" style={{ aspectRatio: "632/354" }}>
              <img
                src={promNight}
                alt="Prom Night"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={promNight_text}
                alt="Prom Night Title"
                className="absolute bottom-[22%] left-[5%] w-[30%] object-contain z-10"
              />
              <div className="absolute bottom-[6%] left-[8%] w-[70%] z-10">
                <img
                  src={bigtextbox}
                  alt="Prom Night Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                  <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                    STEP ON TO YOUR OWN DANCE FLOOR AND SWAY AS YOU SWAY TO
                    MUSIC WITH YOUR SPECIAL SOMEONE AT OUR MAGICAL PROM NIGHT!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Silent Disco */}
          <div className="w-[42.265%]">
            <div className="relative" style={{ aspectRatio: "541/353" }}>
              <img
                src={silentDisco}
                alt="Silent Disco"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={silentDisco_text}
                alt="Silent Disco Title"
                className="absolute bottom-[18%] left-[5%] w-[35%] object-contain z-10"
              />
              <div className="absolute bottom-[5%] left-[8%] w-[70%] z-10">
                <img
                  src={bigtextbox}
                  alt="Silent Disco Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                  <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                    LET THE BEATS FLOW DIRECTLY INTO YOUR YEARS AND VIBE TO THE
                    SYNCHRONOUSLY ASYNCHRONOUS EXPERIENCE OF A SILENT DISCO!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap gap-7 justify-center">
          {/* Stage Spectrum */}
          <div className="w-[43.906%]">
            <div className="relative" style={{ aspectRatio: "562/354" }}>
              <img
                src={stageSpectrum}
                alt="Stage Spectrum"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={stageSpectrum_text}
                alt="Stage Spectrum Title"
                className="absolute bottom-[15%] left-[4%] w-[35%] object-contain z-10"
              />
              <div className="absolute bottom-[6%] left-[7%] w-[70%] z-10">
                <img
                  src={text1}
                  alt="Stage Spectrum Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                  <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                    A KALEIDOSCOPE OF INFINITE POSSIBILITIES SHOW THE WORLD WHAT
                    YOU CAN DO AT OUR OPEN MIC!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jamming Night */}
          <div className="w-[47.812%]">
            <div className="relative" style={{ aspectRatio: "612/354" }}>
              <img
                src={jammingNight}
                alt="Jamming Night"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={jammingNight_text}
                alt="Jamming Night Title"
                className="absolute bottom-[20%] left-[4%] w-[35%] object-contain z-10"
              />
              <div className="absolute bottom-[5%] left-[7%] w-[70%] z-10">
                <img
                  src={bigtextbox}
                  alt="Jamming Night Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                  <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                    A NIGHT OF MUSIC AND CAMARADERIE! JOIN US, AS WE SING OUR
                    HEARTS OUT, MAKE NEW FRIENDS, HAVE FUN, AND CREATE MEMORIES
                    THAT WILL REMAIN ETCHED IN OUR HEARTS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        {/* Prom Night Mobile */}
        <div className="w-full mb-4">
          <div className="relative" style={{ aspectRatio: "358/204" }}>
            <img
              src={PromNight_mobile}
              alt="Prom Night"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={PromNight_text_mobile}
              alt="Prom Night Title"
              className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Prom Night Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight">
                  STEP ON TO YOUR OWN DANCE FLOOR AND SWAY AS YOU SWAY TO MUSIC
                  WITH YOUR SPECIAL SOMEONE AT OUR MAGICAL PROM NIGHT!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Silent Disco Mobile */}
        <div className="w-full mb-4">
          <div className="relative" style={{ aspectRatio: "358/204" }}>
            <img
              src={SilentDisco_mobile}
              alt="Silent Disco"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={SilentDisco_text_mobile}
              alt="Silent Disco Title"
              className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Silent Disco Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight">
                  LET THE BEATS FLOW DIRECTLY INTO YOUR YEARS AND VIBE TO THE
                  SYNCHRONOUSLY ASYNCHRONOUS EXPERIENCE OF A SILENT DISCO!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Spectrum Mobile */}
        <div className="w-full mb-4">
          <div className="relative" style={{ aspectRatio: "358/204" }}>
            <img
              src={StageSpectrum_mobile}
              alt="Stage Spectrum"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={StageSpectrum_text_mobile}
              alt="Stage Spectrum Title"
              className="absolute bottom-[25%] left-[5%] w-[35%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={text1}
                alt="Stage Spectrum Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight">
                  A KALEIDOSCOPE OF INFINITE POSSIBILITIES SHOW THE WORLD WHAT
                  YOU CAN DO AT OUR OPEN MIC!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Jamming Night Mobile */}
        <div className="w-full mb-4">
          <div className="relative" style={{ aspectRatio: "358/204" }}>
            <img
              src={JammingNight_mobile}
              alt="Jamming Night"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={JammingNight_text_mobile}
              alt="Jamming Night Title"
              className="absolute bottom-[25%] left-[5%] w-[35%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={text1}
                alt="Jamming Night Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[1.9vw] font-rfabb font-bold leading-tight">
                  A NIGHT OF MUSIC AND CAMARADERIE! JOIN US, AS WE SING OUR
                  HEARTS OUT, MAKE NEW FRIENDS, HAVE FUN, AND CREATE MEMORIES
                  THAT WILL REMAIN ETCHED IN OUR HEARTS!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exciting;
