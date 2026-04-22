import React, { useState, useRef } from "react";
import pagesData from "../../data/pages.json";

const Notebook: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const soundRef = useRef(new Audio("/sounds/page-flip(1).mp3"));

  const playSound = () => {
    soundRef.current.currentTime = 0;
    soundRef.current.play();
  };

  const nextPage = () => {
    if (isAnimating || current >= pagesData.length - 2) return;

    setIsAnimating(true);
    setDirection("next");
    setCurrent((p) => p + 2);
    playSound();

    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevPage = () => {
    if (isAnimating || current <= 0) return;

    setIsAnimating(true);
    setDirection("prev");
    setCurrent((p) => p - 2);
    playSound();

    setTimeout(() => setIsAnimating(false), 600);
  };

  const leftPage = pagesData[current];
  const rightPage = pagesData[current + 1];

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-300">

      {/* BOOK WRAPPER */}
      <div className="relative w-[1000px] h-[650px] flex perspective-1000">

        {/* BOOK */}
        <div
          className="relative w-full h-full flex bg-white shadow-2xl rounded-md"
          style={{
            transformStyle: "preserve-3d",
            transform: isAnimating
              ? direction === "next"
                ? "rotateY(-8deg)"
                : "rotateY(8deg)"
              : "rotateY(0deg)",
            transition: "transform 0.6s ease"
          }}
        >

          {/* LEFT PAGE */}
          <div className="w-1/2 h-full border-r border-gray-300 p-8 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-red-500 text-center">
              {leftPage?.title}
            </h1>

            <h2 className="text-sm text-gray-600 mt-1">
              {leftPage?.subtitle}
            </h2>

            <p className="text-xs text-gray-500">{leftPage?.location}</p>

            <img
              src={leftPage?.image}
              className="w-[320px] h-[320px] object-cover rounded-lg mt-6 shadow-md"
            />

            <p className="text-sm text-gray-700 text-center mt-4 px-4">
              {leftPage?.description}
            </p>
          </div>

          {/* RIGHT PAGE */}
          <div className="w-1/2 h-full p-8 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-red-500 text-center">
              {rightPage?.title}
            </h1>

            <h2 className="text-sm text-gray-600 mt-1">
              {rightPage?.subtitle}
            </h2>

            <p className="text-xs text-gray-500">{rightPage?.location}</p>

            <img
              src={rightPage?.image}
              className="w-[320px] h-[320px] object-cover rounded-lg mt-6 shadow-md"
            />

            <p className="text-sm text-gray-700 text-center mt-4 px-4">
              {rightPage?.description}
            </p>
          </div>
        </div>

        {/* SPINE */}
        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-gray-300 shadow-inner"></div>

        {/* BUTTONS */}
        <button
          onClick={prevPage}
          disabled={isAnimating}
          className="absolute left-[-70px] top-1/2 -translate-y-1/2 bg-black text-white px-4 py-3 rounded-full disabled:opacity-40 hover:scale-110 transition"
        >
          ◀
        </button>

        <button
          onClick={nextPage}
          disabled={isAnimating}
          className="absolute right-[-70px] top-1/2 -translate-y-1/2 bg-black text-white px-4 py-3 rounded-full disabled:opacity-40 hover:scale-110 transition"
        >
          ▶
        </button>

      </div>
    </div>
  );
};

export default Notebook;
