"use client";

import React, { useState, useRef } from "react";

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
    <section className="w-full py-16 flex flex-col items-center bg-[url('/navbg.svg')] text-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        Book Your Trek & Just Go
      </h2>

      <p className="text-white mb-8 text-center">
        Experience the thrill of adventure with our exclusive trekking packages.
        Book now and embark on your journey!{" "}
      </p>

      {/* Video */}
      <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden cursor-pointer">
        <video
          ref={videoRef}
          src="/Vedio/vedio.mp4"
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
          controls={false}
          preload="metadata"
          loop
          muted
          autoPlay
        />
      </div>
    </section>
  );
};

export default TrekBookingSection;
