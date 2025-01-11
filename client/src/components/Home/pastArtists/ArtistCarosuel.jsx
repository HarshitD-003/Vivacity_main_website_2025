import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import ArtistCard from "./card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Amit from "../../../assets/images/AmitTrivedi.png";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

function Artist() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setSlidesPerView(1);
    } else if (width < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const Artists = [
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
  ];

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative w-full min-h-[380px] md:min-h-[600px]">
      <div className="relative w-full flex items-center justify-center px-12">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={40}
          slidesPerView={slidesPerView}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-[90%] relative py-[3%] [&_.swiper-slide]:flex [&_.swiper-slide]:items-center [&_.swiper-slide]:justify-center"
          ref={swiperRef}
          initialSlide={0}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {Artists.map((item, index) => (
            <SwiperSlide key={index}>
              <ArtistCard artist={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black p-[2%] rounded-full cursor-pointer hover:scale-110 transition-transform z-10"
          aria-label="Previous Slide"
        >
          <FaRegArrowAltCircleLeft className="md:w-[3vw] md:h-[3vw] min-w-[35px] min-h-[35px]" />
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black p-[2%] rounded-full cursor-pointer hover:scale-110 transition-transform z-10"
          aria-label="Next Slide"
        >
          <FaRegArrowAltCircleRight className="md:w-[3vw] md:h-[3vw] min-w-[35px] min-h-[35px]" />
        </button>
      </div>
    </div>
  );
}

export default Artist;
