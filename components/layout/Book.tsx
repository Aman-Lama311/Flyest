"use client";

import React from "react";
import Title from "../../components/title/Title";

const TrekBookingSection: React.FC = () => {
  return (
    <section className="relative z-10 w-full py-16 flex flex-col items-center  text-white">
      {/* Heading */}
      <Title
        title="Book Your Trek & Just Go"
        discription="Experience the thrill of adventure with our exclusive trekking packages. Book now and embark on your journey!"
      />

      {/* Autoplaying Video */}
      <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden mt-18">
        <video
          src="/video/vedio.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
};

export default TrekBookingSection;
