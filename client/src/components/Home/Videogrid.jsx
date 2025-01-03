import React, { useState } from "react";

const VideoGrid = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "A Whimsical Odyssey",
      thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonPosition: "bottom-left", 
    },
    {
      id: 2,
      title: "Wabi-Sabi",
      thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonPosition: "bottom-left", 
    },
    {
      id: 3,
      title: "Chromatic Chimera",
      thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonPosition: "bottom-right", 
    },
    {
      id: 4,
      title: "Sinister Spectacle",
      thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonPosition: "bottom-right", 
    },
  ];

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  
  const buttonPositionStyles = {
    "bottom-left": "absolute bottom-4 left-4",
    "bottom-right": "absolute bottom-4 right-4",
    "top-left": "absolute top-4 left-4",
    "top-right": "absolute top-4 right-4",
    "center": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
      {videos.map((video) => (
        <div
          key={video.id}
          className="relative bg-white border-4 border-black overflow-hidden transition-transform transform hover:scale-105 hover:shadow-3xl hover:opacity-90 rounded-lg"
          style={{
            boxShadow:
              "0px 4px 6px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.1)",
            gap: "2rem",
          }}
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

          <button
            className={`px-3 py-1 bg-yellow-400 border-2 border-black text-black font-bold uppercase transform transition-transform hover:scale-105 ${
              buttonPositionStyles[video.buttonPosition] || buttonPositionStyles["bottom-left"]
            }`}
            onClick={() => handlePlayVideo(video.id)}
          >
            {video.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
