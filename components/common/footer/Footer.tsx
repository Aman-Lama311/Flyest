"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/navbg.svg')] "></div>

      {/* Decorative Background Image */}
      <img
        className="absolute right-0 bottom-0 opacity-10 w-80 h-80 object-cover"
        src="/heroimages/footer.svg"
        alt=""
      />

      {/* Main Footer Content */}
      <div className="relative z-10 w-full px-4 md:px-24 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Hero Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo1.png" alt="Logo" className="h-12 sm:h-16" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Exploring paths unknown, one step at a time.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Discover breathtaking adventures and create unforgettable memories
              with our expertly guided expeditions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { label: "f", colors: "from-red-500 to-red-600" },
                { label: "t", colors: "from-blue-500 to-blue-600" },
                { label: "i", colors: "from-pink-500 to-purple-600" },
              ].map(({ label, colors }, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 bg-gradient-to-r ${colors} rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                >
                  <span className="text-sm font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* General Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-red-500 pb-2 mb-4">
                GENERAL
              </h3>
              <nav className="space-y-3">
                {["Home", "About", "Insights", "News", "Contact"].map(
                  (item) => (
                    <p
                      key={item}
                      className="text-gray-300 hover:text-red-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-base"
                    >
                      {item}
                    </p>
                  )
                )}
              </nav>
            </div>

            {/* Solutions Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-red-500 pb-2 mb-4">
                SOLUTIONS
              </h3>
              <nav className="space-y-3">
                {[
                  "Trekking",
                  "Hiking",
                  "Mountain Climbing",
                  "Adventure Tours",
                  "Cultural Tours",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-gray-300 hover:text-red-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-base"
                  >
                    {item}
                  </p>
                ))}
              </nav>
            </div>

            {/* Support Links */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h3 className="text-xl font-semibold text-white border-b border-red-500 pb-2 mb-4">
                SUPPORT
              </h3>
              <nav className="space-y-3">
                {[
                  "Help Center",
                  "Safety Guidelines",
                  "Booking Policy",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-gray-300 hover:text-red-400 hover:translate-x-1 transition-all duration-200 cursor-pointer text-base"
                  >
                    {item}
                  </p>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700/50">
        <div className="w-full px-4 md:px-24 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div>
              <p className="text-gray-400 text-sm">
                © 2025 Flyeast Experience Nepal. All Rights Reserved.
              </p>
            </div>

            {/* Designed by */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">
                Designed and Developed by
              </span>
              <Link href={"https://www.webxnep.com/"} target="_blank">
                <img
                  className="w-12 h-10 opacity-80 hover:opacity-100 transition-opacity"
                  src="https://www.webxnep.com/logo/logo.svg"
                  alt="WebX Nepal"
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
