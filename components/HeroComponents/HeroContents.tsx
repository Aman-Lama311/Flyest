import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDown } from "react-icons/io";
import { bgImage } from "./bgimagedata";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";

interface HeroContentsProps {
  currentImageIndex: number;
}

const HeroContents: React.FC<HeroContentsProps> = ({ currentImageIndex }) => {
  const currentImage = bgImage[currentImageIndex];
  const [buttonText] = useState("Explore More");

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 font-sans">
      {/* Main translucent box */}
      <div className=" p-6 sm:p-8 md:p-10 lg:p-12 text-center w-full sm:w-[90%] md:w-[70%] lg:w-[60%]">
        {/* Titles */}
        <div className="w-full">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-snug text-shadow">
            {currentImage.slogan[0]} {currentImage.slogan[1]}
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#D62A4E] font-bold leading-snug text-shadow">
            {currentImage.slogan[2]}
          </h1>
        </div>

        {/* Description */}
        <div className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white w-full">
          <p className="font-semibold text-base sm:text-lg mb-1 text-shadow">
            {currentImage.title}
          </p>
          <p className="line-clamp-1 text-shadow">{currentImage.description}</p>
        </div>

        {/* NEW: Translucent Tag Box */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            "$1000",
            "14 Days",
            "Moderate to Strenuous",
            <>
              <FaStar className="inline text-yellow-400 mb-[2px]" /> 5.0 (1)
            </>,
            "Annapurna region, Nepal",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/60 text-white text-sm px-3 py-2 rounded-md font-medium"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="py-2 mt-5 mx-auto px-4 bg-[#D62A4E] text-white flex items-center justify-center gap-3 rounded-lg transition-all duration-300 hover:bg-[#c22748] cursor-pointer"
          onMouseEnter={(e) => {
            const arrowElement =
              e.currentTarget.querySelector(".talk-button-arrow");
            gsap.to(arrowElement, {
              rotation: 270,
              y: -2,
              duration: 0.3,
              ease: "power2.out",
            });
          }}
          onMouseLeave={(e) => {
            const arrowElement =
              e.currentTarget.querySelector(".talk-button-arrow");
            gsap.to(arrowElement, {
              rotation: 0,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }}
        >
          <a
            className="font-medium tracking-wide text-base sm:text-lg"
            href="/contact"
          >
            {buttonText}
          </a>
          <div className="h-9 w-9 bg-white rounded-md flex items-center justify-center overflow-hidden">
            <IoMdArrowDown
              size={20}
              className="talk-button-arrow text-[#EA3359] transition-transform duration-300"
            />
          </div>
        </button>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-4 right-4 sm:right-6 text-gray-300 font-bold flex items-center gap-1 sm:gap-2">
        <p className="text-sm sm:text-base">Scroll Down</p>
        <IoMdArrowDropdown className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
    </div>
  );
};

export default HeroContents;
