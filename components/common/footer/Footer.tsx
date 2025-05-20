"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full bg-[url('/navbg.svg')] text-white object-cover px-4 md:px-18">
      <img
        className="absolute right-0 bottom-0 opacity-30"
        src="/heroimages/footer.svg"
        alt=""
      />
      <div className="flex flex-wrap items-start justify-center py-10 max-w-7xl mx-auto gap-y-10">
        {/* first box */}
        <div className="w-full md:w-1/3 min-h-[auto] md:min-h-[70vh]">
          <h1 className="text-3xl sm:text-4xl md:text-7xl leading-snug md:leading-[5rem] font-semibold">
            Exploring paths unknown, one step at a time.
          </h1>
        </div>

        {/* second box */}
        <div className="w-1/2 sm:w-1/3 md:w-1/5 text-lg sm:text-xl font-medium py-4 md:py-16 px-4 md:px-14">
          <h2 className="uppercase mb-4">GENERAL</h2>
          <div className="space-y-2">
            <p className="cursor-pointer hover:text-red-500 transition">Home</p>
            <p className="cursor-pointer hover:text-red-500 transition">
              About
            </p>
            <p className="cursor-pointer hover:text-red-500 transition">
              Insights
            </p>
            <p className="cursor-pointer hover:text-red-500 transition">News</p>
          </div>
        </div>

        {/* third box */}
        <div className="w-1/2 sm:w-1/3 md:w-1/4 text-lg sm:text-xl font-medium py-4 md:py-16 px-4 md:px-14">
          <h2 className="uppercase mb-4">SOLUTIONS</h2>
          <div className="space-y-2">
            <p className="cursor-pointer hover:text-red-500 transition">
              Trekking
            </p>
            <p className="cursor-pointer hover:text-red-500 transition">
              Hiking
            </p>
            <p className="cursor-pointer hover:text-red-500 transition">
              Insights
            </p>
            <p className="cursor-pointer hover:text-red-500 transition">
              Blogs
            </p>
          </div>
        </div>

        {/* forth box */}
        <div className="w-1/2 sm:w-1/3 md:w-1/5 text-lg sm:text-xl font-medium py-4 md:py-16 px-4 md:px-14">
          <h2 className="uppercase mb-4">GENERAL</h2>
          <div className="space-y-2">
            <p className="cursor-pointer hover:text-red-500 transition">Home</p>
            <p className="cursor-pointer hover:text-red-500 transition">
              About
            </p>
            <p className="cursor-pointer hover:text-red-500 transition">
              Insights
            </p>
            <p className="cursor-pointer hover:text-red-500 transition">News</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <img src="/logo1.png" alt="Logo" className="h-12 sm:h-14" />
        <span className="text-center sm:text-left text-sm sm:text-base font-medium flex items-center">
          <h1>
            © 2025 Flyeast Experience Nepal. All Rights Reserved. Designed and
            Developed by{" "}
          </h1>
          &nbsp;
          <p>
            <img
              className="w-12"
              src="https://www.webxnep.com/logo/logo.svg"
              alt=""
            />
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
