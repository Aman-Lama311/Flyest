import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDown } from "react-icons/io";
import { bgImage } from './bgimagedata';
import gsap from 'gsap';

interface HeroContentsProps {
  currentImageIndex: number;
}

const HeroContents: React.FC<HeroContentsProps> = ({ currentImageIndex }) => {
  const currentImage = bgImage[currentImageIndex];

  return (
    <div>
      <div className='absolute z-20 top-28 w-full px-6 sm:px-12 md:px-20 lg:px-28 font-["poppins"]'>
        <div className='font-medium w-full sm:w-[80%] md:w-[60%] lg:w-[30vw]'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl text-white'>{currentImage.slogan[0]}</h1>
          <h1 className='text-4xl sm:text-5xl md:text-6xl text-white'>{currentImage.slogan[1]}</h1>
          <h1 className='text-4xl sm:text-5xl md:text-6xl text-[#D62A4E]'>{currentImage.slogan[2]}</h1>
        </div>

        <div className='mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white w-full sm:w-[80%] md:w-[60%] lg:w-[40vw]'>
          <p className='font-bold'>{currentImage.title}</p>
          <p>{currentImage.description}</p>
        </div>

        <button
          className="h-14 mt-10 px-4 bg-[#D62A4E] text-white flex items-center justify-center gap-4 rounded-xl transition-all duration-300 hover:bg-[#d62a4e]"
          onMouseEnter={(e) => {
            const arrowElement = e.currentTarget.querySelector(".talk-button-arrow");
            const textElement = e.currentTarget.querySelector(".talk-button-text");

            gsap.to(arrowElement, {
              rotation: 270,
              y: -2,
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(textElement, {
              text: {
                value: "Let's Talk",
                delimiter: "",
              },
              duration: 0.2,
              ease: "none",
            });
          }}
          onMouseLeave={(e) => {
            const arrowElement = e.currentTarget.querySelector(".talk-button-arrow");

            gsap.to(arrowElement, {
              rotation: 0,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }}
        >
          <a
            className="font-medium tracking-wide text-[1.1rem] transition-colors duration-300 talk-button-text"
            href="/contact"
          >
            Explore More
          </a>
          <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
            <IoMdArrowDown
              size={25}
              className="talk-button-arrow text-[#EA3359] transition-transform duration-300"
            />
          </div>
        </button>
      </div>

      {/* Pagination */}
      <div className='absolute bottom-16 left-6 sm:left-12 md:left-20 text-white text-lg'>
        {currentImageIndex}
      </div>

      <div className='absolute bottom-6 right-6 text-gray-300 font-bold flex items-center gap-2'>
        <p className='text-sm sm:text-base'>Scroll Down</p> 
        <IoMdArrowDropdown className='h-5 w-5 sm:h-6 sm:w-6' />
      </div>
    </div>
  );
};

export default HeroContents;
