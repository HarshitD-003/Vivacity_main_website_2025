import React, { useState } from "react";
import thumbnail1 from "../../assets/images/Top_left.png"; 
import thumbnail2 from "../../assets/images/Top_right.png"; 
import thumbnail3 from "../../assets/images/Bottom_left.png"; 
import thumbnail4 from "../../assets/images/Bottom_right.png"; 
import button1 from "../../assets/images/Btn_front1.png"; 
import button2 from "../../assets/images/Btn_front2.png"; 
import button1bk from "../../assets/images/Btn_back1.png"; 
import button2bk from "../../assets/images/Btn_back2.png"; 
const VideoGrid = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "A Whimsical Odyssey",
      thumbnail: thumbnail1,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button1,
      buttonbkImage: button1bk,
      buttonPosition: "top-left",
    },
    {
      id: 2,
      title: "Wabi-Sabi",
      thumbnail: thumbnail2,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button2,
      buttonbkImage: button2bk,
      buttonPosition: "top-right",
    },
    {
      id: 3,
      title: "Chromatic Chimera",
      thumbnail: thumbnail3,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button1,
      buttonbkImage: button1bk,
      buttonPosition: "bottom-left",
    },
    {
      id: 4,
      title: "Sinister Spectacle",
      thumbnail: thumbnail4,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button1,
      buttonbkImage: button1bk,
      buttonPosition: "bottom-right",
    },
  ];

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const buttonPositionStyles = {
    "bottom-left": "absolute top-[73.6%] left-[37.2%]",
    "bottom-right": "absolute top-[73.6%] left-[37.2%]",
    "top-left": "absolute top-[73.2%] left-[4.5%]",
    "top-right": "absolute   top-[73.2%] left-[4.9%]",
    "center": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  const buttonbkPositionStyles = {
    "bottom-left": "absolute top-[74.74%] left-[35.50%]",
    "bottom-right": "absolute top-[73.99%] left-[36.19%]",
    "top-left": "absolute top-[74.35%] left-[3.9%]",
    "top-right": "absolute   top-[74.35%] left-[3.54%]",
    "center": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };


  return (


    <div className="flex justify-center items-center min-h-screen top-[19.6%]  ">
      <div className="grid gap-x-[1.5%] gap-y-[2.2%] w-full  grid-cols-1 sm:grid-cols-2 xl:grid-cols-2  ">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative 1280:w-[485px] 1280:h-[273px] max-w-full bg-white border-2 border-black overflow-hidden  1400:w-[550px] 1400:h-[300px] 1500:w-[590px] 1500:h-[340px] 1600:w-[650px] 1600:h-[370px] 1980:w-[780px] 1980:h-[430px] 2100:w-[900px] 2100:h-[500px]"  
          >
            {activeVideo === video.id ? (
              <iframe
                className="w-full h-full"
                src={`${video.videoUrl}?autoplay=1`}
                allow="autoplay; encrypted-media"
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                className="w-full h-full object-cover"
                src={video.thumbnail}
                alt={video.title}
              />
            )}
      
             <div className={`absolute border-black max-h-[3.7rem] transition-transform transform hover:scale-105 ${
                buttonPositionStyles[video.buttonPosition] || buttonbkPositionStyles["bottom-left"] }`}
               
               style={{
                  width: video.buttonPosition === "top-right" ? "35.54%" : "58.47%",
                  height:"20.51%",
                  backgroundImage: `url(${video.buttonbkImage})`,
                  backgroundRepeat: "no-repeat",
                  
                  borderWidth: '4px',
                  zIndex:'2',
                  backgroundSize: "cover",
                  backgroundPosition: "top",
               }}>
                </div>  
            <button
              className={`absolute border-black max-h-[3.5rem] transition-transform transform hover:scale-105 ${
                buttonPositionStyles[video.buttonPosition] || buttonPositionStyles["bottom-left"]
              }` }
              style={{
                width: video.buttonPosition === "top-right" ? "35.54%" : "58.47%",
                height:"20.51%",
                backgroundImage: `url(${video.buttonImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderWidth: '4px',
                zIndex:'3'
              }}
              
              onClick={() => handlePlayVideo(video.id)} 
            >
              <div className=" 270:text-[0.7rem] xxxs:text-[0.85rem] xxs:text-[0.95rem] xs:text-[1.1rem] sm:text-[1.0rem] md:text-[1.2rem] lg:[1.15rem] 1280:text-[1.15rem] 1400:text-[1.25rem]  2xl:text-[1.5rem] 1500:text-[1.45rem] 1980:text-[1.65rem] font-rfabb" >{video.title}</div>
            </button>
                  </div>
          
          
        ))}
        <div className="bottom-[0%] left-0">
                <h2 className=" text-[1.25rem]  2xl:text-[1.75rem] font-rfabb">NOTE-CLICK TO KNOW MORE</h2>
                </div>
      </div>
    </div>
  );
};

export default VideoGrid;
