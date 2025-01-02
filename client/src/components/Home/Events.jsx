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
      className="min-h-screen  md:p-8 flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('src/assets/images/Event_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[80vw] mx-auto mb-6 2xl:mb-5">
        <div className="flex justify-center">
          <img
            src={Events}
            alt="Events"
            className="w-60 md:w-80 xl:w-56 2xl:w-80 object-contain "
          />
        </div>
      </div>

      <div className="relative w-full max-w-[85vw] mx-auto">
        <div className="absolute -left-3 -bottom-3 w-full h-full bg-black"></div>
        <div className="relative w-full top-0 p-2 bg-black">
          <div className="relative w-full bg-black">
            <div
              className="absolute top-0 right-0 z-10"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 16% 100%)",
              }}
            >
              <div className="bg-[#53B08E] flex p-2 space-x-1">
                <button
                  onClick={handlePrevious}
                  className="bg-[#53B08E] w-14 h-10 md:w-20 md:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 [1800px]:w-32 [1800px]:h-24 flex items-center justify-center"
                >
                  <FaRegArrowAltCircleLeft className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 [1800px]:w-16 [1800px]:h-16" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#53B08E] w-14 h-10 md:w-20 md:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 [1800px]:w-32 [1800px]:h-24 flex items-center justify-center"
                >
                  <FaRegArrowAltCircleRight className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 [1800px]:w-16 [1800px]:h-16" />
                </button>
              </div>
            </div>

            <div className="relative h-[80vh] xl:h-[75vh] 2xl:h-[78vh]">
              <div
                className="absolute top-0 left-0 h-full w-[48%] sm:w-[50%] md:w-[53%] bg-[#53B08E] z-10"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                }}
              >
                <div className="h-[150px] xl:h-[170px] 2xl:h-[165px] bg-[#003E68]">
                  <h2 className="font-serif text-xl sm:text-2xl md:text-6xl xl:text-6xl 2xl:text-7xl text-white p-4 md:p-6 xl:p-6">
                    {currentEvent.title}
                  </h2>
                </div>

                <div className="mt-3 px-2 sm:px-3 lg:px-5 py-2 sm:py-3 lg:py-3 ml-2 sm:ml-4 lg:ml-5">
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-4 2xl:space-y-5 text-white text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-xl mb-16 xl:mb-20 2xl:mb-24">
                    {currentEvent.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-start"
                      >
                        <span className="w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 xl:w-4 xl:h-4 bg-white rounded-full mr-2 sm:mr-3 md:mr-4 flex-shrink-0"></span>
                        <span className="line-clamp-2 sm:line-clamp-1">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-4 left-3 xl:bottom-6 2xl:bottom-4">
                  <button
                    onClick={handleKnowMore}
                    className="transition-transform hover:scale-105 focus:outline-none"
                  >
                    <img
                      src={Event_button}
                      alt="Know More"
                      className="h-8 sm:h-10 md:h-14 xl:h-16 
                      2xl:h-20
                      w-auto ml-7 justify-center object-contain"
                    />
                  </button>
                </div>
              </div>

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

                <div className="absolute bottom-0 right-0">
                  <div
                    className="bg-[#53B08E] p-2 sm:p-4 md:p-6 xl:p-6 2xl:p-8"
                    style={{
                      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div className="px-2 text-center">
                      <p className="text-white text-3xl sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        PRIZES WORTH
                      </p>
                      <p className="text-yellow-300 text-2xl sm:text-xl md:text-3xl xl:text-3xl 2xl:text-4xl font-serif">
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
    </div>
  );
}

export default EventsComponent;
