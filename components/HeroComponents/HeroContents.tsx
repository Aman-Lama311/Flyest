import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDown } from "react-icons/io";
import { bgImage } from "./bgimagedata";
import gsap from "gsap";

interface HeroContentsProps {
  currentImageIndex: number;
}

const HeroContents: React.FC<HeroContentsProps> = ({ currentImageIndex }) => {
  const currentImage = bgImage[currentImageIndex];
  const [buttonText] = useState("Explore More");

  return (
    <div>
      <div className="absolute z-20 top-24 w-full px-4 sm:px-8 md:px-14 lg:px-20 font-sans">
        {/* Title */}
        <div className="font-medium w-full sm:w-[85%] md:w-[65%] lg:w-[35vw]">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-white leading-snug">
            {currentImage.slogan[0]} {currentImage.slogan[1]}
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-[#D62A4E] leading-snug">
            {currentImage.slogan[2]}
          </h1>
        </div>

        {/* Description */}
        <div className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white w-full sm:w-[85%] md:w-[65%] lg:w-[45vw]">
          <p className="font-bold text-2xl sm:text-3xl text-white mb-2">
            {currentImage.title}
          </p>
          <p>{currentImage.description}</p>
        </div>

        {/* Button */}
        <button
          className="h-12 mt-8 px-4 bg-[#D62A4E] text-white flex items-center justify-center gap-3 rounded-lg transition-all
          duration-300 hover:bg-[#c22748]"
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
            className="font-medium tracking-wide text-sm sm:text-base"
            href="/contact"
          >
            {buttonText}
          </a>
          <div className="h-9 w-9 bg-white rounded-md flex items-center justify-center overflow-hidden">
            <IoMdArrowDown
              size={22}
              className="talk-button-arrow text-[#EA3359] transition-transform duration-300"
            />
          </div>
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-14 left-4 sm:left-10 text-white text-sm sm:text-base">
        {currentImageIndex + 1}
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-5 right-4 sm:right-6 text-gray-300 font-bold flex items-center gap-1 sm:gap-2">
        <p className="text-xs sm:text-sm">Scroll Down</p>
        <IoMdArrowDropdown className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
    </div>
  );
};

export default HeroContents;
