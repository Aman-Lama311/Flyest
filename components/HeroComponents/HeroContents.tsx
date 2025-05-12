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
      <div className='px-28 h-[60vh] w-full z-12 tracking-wide absolute mt-44 font-["poppins"]'>
        <h1 className='text-[4rem] text-white'>Lifelong</h1>
        <h1 className='text-[4rem] text-white -mt-5'>memories,</h1>
        <h1 className='text-[4rem] -mt-3 text-[#EA3359]'>just a few</h1>
        <h1 className='text-[4rem] -mt-3 text-[#EA3359]'>seconds away</h1>
        <div className='mt-8 text-xl text-white'>
          <p className='font-bold'>{currentImage.title}</p>
          <p>{currentImage.description}</p>
        </div>
        
        <button 
            className='h-14 px-4 bg-[#EA3359] text-white flex items-center justify-center gap-4 rounded-xl mt-6'
            onMouseEnter={(e) => {
              const arrowElement = e.currentTarget.querySelector('.talk-button-arrow');
              const textElement = e.currentTarget.querySelector('.talk-button-text');
              
              gsap.to(arrowElement, {
                rotation: 270,
                y: -2,
                duration: 0.3,
                ease: "power2.out"
              });
              
              gsap.to(textElement, {
                text: {
                  value: "Explore More",
                  delimiter: ""
                },
                duration: 0.2,
                ease: "none"
              });
            }}
            onMouseLeave={(e) => {
              const arrowElement = e.currentTarget.querySelector('.talk-button-arrow');
              
              gsap.to(arrowElement, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          >
            <a className='talk-button-text font-medium tracking-wide text-[1.1rem] transition-colors duration-300' href="#">Explore More</a>
            <div className='h-10 w-10 bg-white rounded-lg flex items-center justify-center overflow-hidden'>
              <IoMdArrowDown size={25} className='talk-button-arrow text-[#EA3359]' />
            </div>
          </button> 

      </div>
      <div className='h-8 w-full bg-red-600 absolute mt-[86vh]'></div>
      <div className='absolute mt-[94vh] right-38 text-gray-300 font-bold flex items-center gap-2'>
        <p>Scroll Down</p> <IoMdArrowDropdown className='h-6 w-6'/> 
      </div>
    </div>
  )
}

export default HeroContents;