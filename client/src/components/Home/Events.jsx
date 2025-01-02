import React, { useState, useEffect, useCallback } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import Events from "../../assets/images/Events.png";
import Event_button from "../../assets/images/Event_button.png";
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

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const handleKnowMore = useCallback(() => {
    window.location.href = currentEvent.link;
  }, [currentEvent.link]);

  return (
    <div
      className="min-h-lvh p-4 md:p-8 flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('src/assets/images/Event_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Events header image */}
      <div className="w-full max-w-5xl mx-auto mb-6">
        <div className="flex justify-center">
          <img
            src={Events}
            alt="Events"
            className="w-48 md:w-64 object-contain"
          />
        </div>
      </div>

      {/* Container wrapper for layered effect */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Black background container */}
        <div className="absolute -left-3 -bottom-3 w-full h-full bg-black"></div>
        <div className="relative w-full top-0 p-2 bg-black">
          {/* Main content container */}
          <div className="relative w-full bg-black">
            {/* Navigation buttons with increased size */}
            <div
              className="absolute top-0 right-0 z-10"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 16% 100%)",
              }}
            >
              <div className="bg-[#53B08E] flex p-2 md:p-2 pl-2 space-x-1 ">
                <button
                  onClick={handlePrevious}
                  className="bg-[#53B08E] w-14 h-10 md:w-20 md:h-12 flex items-center justify-center"
                >
                  <FaRegArrowAltCircleLeft color="black" size={38} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#53B08E] w-14 h-10 md:w-20 md:h-12 flex items-center justify-center"
                >
                  <FaRegArrowAltCircleRight color="black" size={38} />
                </button>
              </div>
            </div>

            {/* Content container */}
            <div className="relative h-[550px]">
              {/* Left section with title and items */}
              <div
                className="absolute top-0 left-0 h-full w-[48%] sm:w-[50%] md:w-[53%] bg-[#53B08E] z-10"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                }}
              >
                {/* Title section */}
                <div className="h-[120px] bg-[#003E68]">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-white p-4 md:p-6">
                    {currentEvent.title}
                  </h2>
                </div>

                {/* Events list section */}
                <div className="mt-4 px-3 py-3 ml-5">
                  <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm md:text-lg lg:text-2xl ">
                    {currentEvent.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-start"
                      >
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mr-2 md:mr-3 flex-shrink-0"></span>
                        <span className="line-clamp-2 sm:line-clamp-1">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute flex bottom-4 left-3">
                  <button
                    onClick={handleKnowMore}
                    className="transition-transform hover:scale-105 focus:outline-none"
                  >
                    <img
                      src={Event_button}
                      alt="Know More"
                      className="h-8 sm:h-10 md:h-14 lg:h-24 w-auto ml-5 justify-center object-contain" // Increased size for larger screens
                    />
                  </button>
                </div>
              </div>

              {/* Right section with image */}
              <div
                className="absolute top-0 right-0 h-full w-[65%] sm:w-[60%] md:w-[60%]"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />

                {/* Prize worth box */}
                <div className="absolute bottom-0 right-0">
                  <div
                    className="bg-[#53B08E] p-2 sm:p-4 md:p-6 lg:p-8" // Increased padding for larger screens
                    style={{
                      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div className="px-2 text-center">
                      <p className="text-white text-3xl sm:text-lg md:text-xl lg:text-2xl font-bold">
                        {" "}
                        {/* Adjusted text sizes */}
                        PRIZES WORTH
                      </p>
                      <p className="text-yellow-300 text-2xl sm:text-xl md:text-3xl lg:text-4xl font-serif">
                        {" "}
                        {/* Increased text size */}
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

      {/* <footer className="w-full mt-8">
        <img
          src="src/assets/images/Footer.png"
          alt="footer"
          className="w-full h-auto object-contain"
        />
      </footer> */}
    </div>
  );
}

export default EventsComponent;
