"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[75vh] bg-gradient-to-br from-[#B516B5] via-[#e0b3e6] to-white text-[#222] overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-[url('/navbg.svg')] z-10 opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-gray-900/50 z-10 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('https://www.relaxgetaways.com/uploads/media/Short%20Treks/intero%20for%20short%20trek.jpg')] bg-cover bg-center"></div>

      {/* Decorative image */}
      <div className="absolute right-0 bottom-0 w-72 sm:w-80 h-72 sm:h-80">
        <Image
          fill
          className="opacity-10 object-cover"
          src="/heroimages/footer.svg"
          alt="Footer Decorative"
          sizes="(max-width: 640px) 288px, 320px"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-24 pt-16 pb-3">
        {/* Hero Section */}
        <div className="mx-auto space-y-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-12 sm:h-16 w-auto">
              <Image
                src="/logo1.png"
                alt="Logo"
                height={300}
                width={300}
                className="object-contain"
                sizes="(max-width: 640px) 3rem, 4rem"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-[#B516B5] to-[#e0b3e6] bg-clip-text text-transparent">
            Explore Nepal. Once in a lifetime.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Discover breathtaking adventures and create unforgettable memories
            with our expertly guided heroes.
          </p>

          {/* CTA + Social */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <button className="bg-[#B516B5] hover:bg-[#a010a0] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all cursor-pointer">
              Experience Now
            </button>

            <div className="flex space-x-4 items-center">
              {[
                {
                  img: "https://www.facebook.com/favicon.ico",
                },
                {
                  img: "https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png",
                },
                {
                  img: "https://www.linkedin.com/favicon.ico",
                },
              ].map(({ img }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <Image
                    height={500}
                    width={500}
                    src={img}
                    alt="Social Icon"
                    className="w-7 h-7"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom Content moved here */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left pt-5 border-t border-white/20 mt-8">
            <p className="text-white text-sm">
              © 2025 Flyeast Experience Nepal. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">
                Designed and Developed by
              </span>
              <Link href="https://www.webxnep.com/" target="_blank">
                <Image
                  height={500}
                  width={500}
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
