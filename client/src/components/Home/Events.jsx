import React from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

import Events from "../../assets/images/Events.png";
import Footer from "../../assets/images/Footer.png";

function EventsComponent() {
  // Dummy data object to simulate dynamic content
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
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = React.useState(0);
  const currentEvent = eventData[currentEventIndex];

  const handleNext = () => {
    setCurrentEventIndex((prev) => (prev + 1) % eventData.length);
  };

  const handlePrevious = () => {
    setCurrentEventIndex((prev) =>
      prev === 0 ? eventData.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div
        className="min-h-lvh p-4 md:p-8 flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('src/assets/images/Event_background.png')",
          backgroundSize: "cover, contain",
          backgroundPosition: "center, top",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        {/* Events header image */}
        <div className="relative w-full max-w-5xl mx-auto mb-6">
          <div className="flex justify-center">
            <img
              src={Events}
              alt="Events"
              className="w-48 md:w-64 object-contain"
            />
          </div>
        </div>

        {/* Main card container */}
        <div className="relative w-full h-2/3 max-w-5xl mx-auto">
          {/* Navigation buttons in polygon box */}
          <div
            className="absolute top-0 right-0 z-10"
            style={{
              clipPath: "polygon(3% 0, 100% 0, 100% 100%, 30% 100%)",
            }}
          >
            <div className="bg-[#53B08E] flex p-2 md:p-4 pl-2 space-x-2">
              <button
                onClick={handlePrevious}
                className="bg-[#53B08E] w-16 h-8 flex items-center justify-center rounded-full"
              >
                <span className="ml-4">
                  <FaRegArrowAltCircleLeft color="black" size={35} />
                </span>
              </button>
              <button
                onClick={handleNext}
                className="bg-[#53B08E] w-16 h-8 flex items-center justify-center rounded-full"
              >
                <span className="ml-4">
                  <FaRegArrowAltCircleRight color="black" size={35} />
                </span>
              </button>
            </div>
          </div>

          {/* Main content container */}
          <div className="relative bg-white overflow-hidden shadow-2xl">
            <div className="relative h-[300px] lg:h-[550px]">
              {/* Left section background with polygon */}
              <div
                className="absolute top-0 left-0 h-full w-[45%] bg-[#53B08E]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                }}
              >
                {/* Blue header section */}
                <div
                  className="absolute top-0 left-0 w-full h-[120px] bg-[#003E68]"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white p-6">
                    {currentEvent.title}
                  </h2>
                </div>
              </div>

              {/* Right section with image */}
              <div
                className="absolute top-0 right-0 h-full w-[66%]"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content sections */}
              <div className="relative h-full">
                {/* Left content */}
                <div className="absolute left-0 top-10 w-[50%] h-full p-6 pt-28">
                  <ul className="space-y-4 md:space-y-5 text-white text-lg md:text-xl">
                    {currentEvent.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button className="bg-pink-500 px-8 py-3 text-xl font-bold border-2 border-black hover:bg-pink-600 transition-colors">
                      KNOW MORE
                    </button>
                  </div>
                </div>

                {/* Prize worth box with polygon shape */}
                <div className="absolute bottom-0 right-0">
                  <div className="relative">
                    <div
                      className="relative bg-[#53B08E] p-4 w-56 md:w-64"
                      style={{
                        clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                      }}
                    >
                      <div className="px-2 text-center">
                        <p className="text-white text-xl font-bold">
                          PRIZES WORTH
                        </p>
                        <p className="text-yellow-300 text-4xl font-serif">
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
      <div className="w-full ">
        <img src={Footer} alt="footer" className="w-full  object-contain" />
      </div>
    </>
  );
}

export default EventsComponent;
