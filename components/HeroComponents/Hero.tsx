"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// This component will only be rendered on the client side
const HeroContent = dynamic(() => import('./HeroContent'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  )
});

const Hero = () => {
  return (
    <div className="relative w-full h-screen z-10">
      <video
        src="/video/trekking.mp4"
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      ></video>
      {/* overlay */}
      <div className="absolute left-0 right-0 w-full h-[20vh] top-0 bg-gradient-to-b from-black/70 z-20" />
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 font-sans">
        {/* Main translucent box */}
        <div className=" p-6 sm:p-8 md:p-10 lg:p-12 text-center w-full tracking-widest">
          {/* Titles */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-6xl lg:text-[10vw] text-center font-bold uppercase text-transparent stroke-text">
              Experience Nepal
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 text-xl text-white text-shadow-2xs left-1/2 -translate-x-1/2 font-bold uppercase animate-bounce flex flex-col items-center">
        <p className="text-sm">Scroll Down</p>
        <span>
          <ArrowBigDownDash size={30} />
        </span>
      </div>
    </div>
  );
};

export default Hero;
