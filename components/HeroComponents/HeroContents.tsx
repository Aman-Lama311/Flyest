import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { bgImage } from './bgimagedata';
import { IoMdArrowDown } from "react-icons/io";
import gsap from 'gsap';

interface HeroContentsProps {
  currentImageIndex: number;
}

const HeroContents: React.FC<HeroContentsProps> = ({ currentImageIndex }) => {
  const currentImage = bgImage[currentImageIndex];

  return (
    <div>
      <div className='px-28 h-[60vh] w-full z-12 tracking-wide absolute mt-28 font-["poppins"]'>
       <div className='h-[42vh] w-[30vw] font-medium'>
        <h1 className='text-[4.1rem] text-white'>
          {currentImage.slogan[0]}
        </h1>
        <h1 className='text-[4.1rem] text-white'>
          {currentImage.slogan[1]}
        </h1>
        <h1 className='text-[4.1rem] -mt-3 text-[#D62A4E]'>
          {currentImage.slogan[2]}
        </h1>
      </div>

      <div className='mt-8 text-xl text-white w-[40vw]'>
        <p className='font-bold'>{currentImage.title}</p>
        <p>{currentImage.description}</p>
      </div>

        {/* button */}
      <button
            className="h-14 px-4 bg-[#D62A4E] text-white flex items-center justify-center gap-4 rounded-xl transition-all duration-300 hover:bg-[#d62a4e] mt-14"
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
              className="font-medium tracking-wide text-[1.1rem] transition-colors duration-300"
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


      {/* pagination */}
      <div className='h-8 w-full absolute mt-[86vh]'>
        {currentImageIndex}
      </div>
      <div className='absolute mt-[80vh] right-38 text-gray-300 font-bold flex items-center gap-2'>
        <p>Scroll Down</p> <IoMdArrowDropdown className='h-6 w-6'/> 
      </div>
    </div>
  )
}

export default HeroContents;