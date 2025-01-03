import React, { useState, useEffect, useCallback } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import Event_logo from "../../assets/images/Event_logo.png";
import Event_button from "../../assets/images/Event_know_button.png";
import Halftone from "../../assets/images/Halftone.png";
import Strip from "../strip";

function EventsComponent() {
  const eventData = [
    {
      id: 1,
      title: "Dance Events",
      items: [
        "Razzmatazz (Group dance)",
        "Street dance",
        "Classical group dance",
        "Duet dance",
        "Solo dance",
        "Individual western dance",
      ],
      prizeWorth: "2.5 Lakh+",
      image: "src/assets/images/Mask group.png",
      link: "/dance-events",
    },
    {
      id: 2,
      title: "Music Events",
      items: [
        "Solo Singing",
        "Group Singing",
        "Battle of Bands",
        "Classical Vocals",
        "Rap Battle",
        "Instrumental Solo",
      ],
      prizeWorth: "1.8 Lakh+",
      image: "/api/placeholder/800/500",
      link: "/music-events",
    },
    {
      id: 3,
      title: "Drama Events",
      items: [
        "Street Play",
        "One Act Play",
        "Mime Show",
        "Monologue",
        "Skit Performance",
        "Stand-up Comedy",
      ],
      prizeWorth: "1.5 Lakh+",
      image: "/api/placeholder/800/500",
      link: "/drama-events",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = eventData[currentEventIndex];

  const handleNext = useCallback(() => {
    setCurrentEventIndex((prev) => (prev + 1) % eventData.length);
  }, [eventData.length]);

  const handlePrevious = useCallback(() => {
    setCurrentEventIndex((prev) =>
      prev === 0 ? eventData.length - 1 : prev - 1
    );
  }, [eventData.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleKnowMore = useCallback(() => {
    window.location.href = currentEvent.link;
  }, [currentEvent.link]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('src/assets/images/Event_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[18%] h-[6%] mt-1 mb-6">
        <img
          src={Event_logo}
          alt="Event Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Main container with halftone overlay */}
      <div className="w-[70%] h-[71.65vh] relative mx-auto">
        {/* Black shadow */}
        <div className="absolute -left-3 -bottom-3 w-full h-full bg-black"></div>
        {/* Main content container */}
        <div className="relative w-full h-full bg-black p-2">
          <div
            className="absolute inset-0 z-40 mix-blend-soft-light opacity-25"
            style={{
              backgroundImage: `url(${Halftone})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="relative w-full h-full bg-black">
            {/* Navigation section */}
            <div
              className="absolute top-0 right-0 z-30 w-[18.49%] h-[12.91%]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 16% 100%)",
              }}
            >
              <div className="bg-[#53B08E] flex h-full p-1">
                <button
                  onClick={handlePrevious}
                  className="bg-[#53B08E] w-[90.68%] h-[90.69%] flex items-center justify-center ml-4"
                >
                  <FaRegArrowAltCircleLeft className="w-[85%] h-[85%]" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#53B08E] w-[90.68%] h-[90.69%] flex items-center justify-center ml-4"
                >
                  <FaRegArrowAltCircleRight className="w-[85%] h-[85%]" />
                </button>
              </div>
            </div>

            <div className="relative h-full">
              {/* Left panel */}
              <div
                className="absolute top-0 left-0 h-full w-[53%] bg-[#53B08E] z-10"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                }}
              >
                {/* Dance Events heading */}
                <div className="h-[23%] bg-[#003E68] flex justify-start items-center">
                  <h2 className="text-white text-[6vw] font-ttr font-semibold ml-10">
                    {currentEvent.title}
                  </h2>
                </div>

                {/* List container */}
                <div className="w-[90%] h-[38.61%] mt-[3%] px-[2%] py-[2%] ml-[2%]">
                  <ul className="space-y-[2%] text-white font-vetosans font-bold">
                    {currentEvent.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-start text-[1.4vw]"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-[2%] flex-shrink-0"></span>
                        <span className="line-clamp-2 sm:line-clamp-1">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Know More button */}
                <div className="absolute bottom-[4%] left-[4.5%] w-[50%] h-[13.52%]">
                  <button
                    onClick={handleKnowMore}
                    className="w-full h-full transition-transform hover:scale-105 focus:outline-none"
                  >
                    <img
                      src={Event_button}
                      alt="Know More"
                      className="w-full h-full object-contain"
                    />
                  </button>
                </div>
              </div>

              {/* Right panel */}
              <div
                className="absolute top-0 right-0 h-full w-[60%]"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />

                {/* Prizes section */}
                <div className="absolute bottom-0 right-0 w-[50%] h-[28%]">
                  <div
                    className="bg-[#53B08E] h-full"
                    style={{
                      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div className="h-full flex flex-col justify-center items-center px-5">
                      <p className="text-white w-[82%] 2xl:text-[2.1vw] lg:text-[2vw] font-rfabb text-center tracking-wide mt-2 ml-4">
                        PRIZES WORTH
                      </p>
                      <p className="text-[#E5FF00] w-[80%] text-[5vw] lg:text-[4.6vw] font-semibold font-ttr text-center leading-tight">
                        {currentEvent.prizeWorth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Strip />
    </div>
  );
}

export default EventsComponent;