'use client';

import React, { useState, useRef } from 'react';

const TrekBookingSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        Book Your Trek & Just Go
      </h2>

      {/* Buttons */}
      <div className="flex space-x-4 mb-12">
        <button className="border border-gray-400 px-6 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition">
          Contact Us
        </button>
        <button className="bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>

      {/* Video */}
      <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden cursor-pointer">
        <video
          ref={videoRef}
          src="/Vedio/vedio.mp4"  // <-- your video path here
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
          controls={false}
          preload="metadata"
          loop
        />
      </div>
    </section>
  );
};

export default TrekBookingSection;
