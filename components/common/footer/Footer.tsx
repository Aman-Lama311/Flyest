"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[75vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-[url('/navbg.svg')] z-10 opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-gray-900/50 z-10 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('https://www.relaxgetaways.com/uploads/media/Short%20Treks/intero%20for%20short%20trek.jpg')] bg-cover bg-center"></div>

      {/* Decorative image */}
      <img
        className="absolute right-0 bottom-0 opacity-10 w-72 sm:w-80 h-72 sm:h-80 object-cover"
        src="/heroimages/footer.svg"
        alt="Footer Decorative"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-24 pt-16 pb-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo1.png" alt="Logo" className="h-12 sm:h-16" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-[#FF4E58] to-orange-400 bg-clip-text text-transparent">
            Explore Nepal. Once in a lifetime.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Discover breathtaking adventures and create unforgettable memories
            with our expertly guided heroes.
          </p>

          {/* CTA + Social */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <button className="bg-[#FB2C36] hover:bg-[#ff4e57] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all">
              Experience Now
            </button>

            <div className="flex space-x-4 items-center">
              {[
                { label: "f", colors: "from-red-500 to-red-600" },
                { label: "t", colors: "from-blue-500 to-blue-600" },
                { label: "i", colors: "from-pink-500 to-purple-600" },
              ].map(({ label, colors }, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 bg-gradient-to-r ${colors} rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                >
                  <span className="text-sm font-bold uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50">
        <div className="w-full px-4 sm:px-8 lg:px-24 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <p className="text-gray-300 text-sm">
              © 2025 Flyeast Experience Nepal. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">
                Designed and Developed by
              </span>
              <Link href="https://www.webxnep.com/" target="_blank">
                <img
                  src="https://www.webxnep.com/logo/logo.svg"
                  alt="WebX Nepal"
                  className="w-12 h-10 opacity-80 hover:opacity-100 transition-opacity object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
