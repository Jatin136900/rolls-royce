import React, { useState, useRef, useEffect } from "react";
import vedio8 from "./images/vedio8.mp4";
import vedio7 from "./images/vedio7.mp4";
import vedio4 from "./images/vedio4.mp4";

export default function VideoCarousel() {
  const videos = [
    { src: vedio8 },
    { src: vedio7 },
    { src: vedio4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  // Play only center video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  const getIndex = (index) => (index + videos.length) % videos.length;

  return (
    <>
      <div className="z-1 bg-white">
        {/* Header */}
        <div className="text-center pt-20 pb-20 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin">
            BOLDER IN ATTITUDE
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#515151] mt-4 font-bold max-w-2xl mx-auto">
            Black Badge is a formidable alter ego. Boldly crafted and designed
            with enhanced power, torque, and control.
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full flex justify-center px-4 sm:px-6 md:px-16">
          <div className="relative flex items-center justify-center overflow-hidden py-10 w-full max-w-6xl h-[60vh] sm:h-[65vh] md:h-[70vh]">
            <div className="flex items-center justify-center w-full relative">
              {videos.map((video, index) => {
                const leftIndex = getIndex(currentIndex - 1);
                const rightIndex = getIndex(currentIndex + 1);

                let positionClass = "opacity-0 pointer-events-none"; // hidden
                if (index === currentIndex) {
                  positionClass =
                    "z-20 scale-100 opacity-100 w-[60%] sm:w-[50%] md:w-[60%] translate-x-0 pointer-events-auto";
                } else if (index === leftIndex) {
                  positionClass =
                    "z-10 scale-90 opacity-70 -translate-x-[85%] w-[35%] sm:w-[30%] md:w-[40%] pointer-events-none";
                } else if (index === rightIndex) {
                  positionClass =
                    "z-10 scale-90 opacity-70 translate-x-[85%] w-[35%] sm:w-[30%] md:w-[40%] pointer-events-none";
                }

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="rounded-lg shadow-lg w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
                      muted
                      loop
                      controls={index === currentIndex}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <button
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 bg-black/50 p-2 sm:p-3 text-white rounded-full z-50"
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + videos.length) % videos.length
                )
              }
            >
              ❮
            </button>
            <button
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 bg-black/50 p-2 sm:p-3 text-white rounded-full z-50"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % videos.length)
              }
            >
              ❯
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full ${
                    index === currentIndex ? "bg-black" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
