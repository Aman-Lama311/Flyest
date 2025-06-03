"use client";

import React from "react";
import Title from "../../components/title/Title"; // If unused, consider removing
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="relative z-10 w-full py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center px-4 md:px-8">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left bg-zinc-200/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug md:leading-tight">
            Why Choose Flyeast Nepal For Your Next Adventures?
          </h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed">
            An enhanced safety record provides peace of mind while you explore
            the breathtaking heights of the Himalayas. Experience unparalleled
            service with our team of seasoned professionals dedicated to making
            your journey memorable.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-10">
            {["Customize Your Trip", "Fun Tour", "Adventure Journey"].map(
              (feature, index) => (
                <div
                  className="flex items-center justify-center md:justify-start"
                  key={index}
                >
                  <div className="w-7 h-7 rounded-full bg-[#B415B4] flex items-center justify-center mr-4">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base md:text-lg">
                    {feature}
                  </span>
                </div>
              )
            )}
          </div>

          <button className="bg-[#B415B4] text-white text-sm sm:text-base md:text-lg font-semibold py-3 px-6 sm:px-8 rounded-md hover:bg-purple-600 transition duration-300">
            Read more
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative max-h-[400px] sm:max-h-[500px] rounded-lg overflow-hidden">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              height={500}
              width={500}
              src="https://admin.ntb.gov.np/image-cache/ebc_tk_adventure_2-1624450765.jpeg?p=main&s=1f72965258be9625bee4886c373424ad"
              alt="Adventure Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
