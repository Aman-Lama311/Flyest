"use client";

import React, { useEffect, useState } from "react";
import PackageCard from "../../../components/cards/PackageCard";
import { Element } from "react-scroll";
import Image from "next/image";

interface TrekkingRegion {
  id: string;
  name: string;
}

const trekkingRegions: TrekkingRegion[] = [
  { id: "everest", name: "Round Trip Everest" },
  { id: "annapurna", name: "Round Trip Annapurna Region" },
  { id: "manaslu", name: "Round Trip Manaslu Region" },
];

const Page = () => {
  const [activeSection, setActiveSection] = useState<string>("everest");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true on mount (client-side only)
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "-96px 0px 0px 0px", // Adjust for fixed navbar height (~96px)
      }
    );

    // Only access document when on client side
    if (typeof window !== "undefined") {
      trekkingRegions.forEach((region) => {
        const el = document.getElementById(region.id);
        if (el) observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, [isClient]);

  // const scrollTo = (id: string) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     const topOffset = 96; // Adjust for site navbar + region navbar
  //     const y = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <div className="relative z-10 w-full h-[50vh] px-6 sm:px-16  border-b-rounded-xl ">
        {/* Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black/40 to-transparent"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 z-1">
          <Image
            height={100}
            width={100}
            src="/heroimages/favicon.ico"
            alt="icon"
          />
        </div>
        <Image
          height={500}
          width={500}
          src="https://cdn.pixabay.com/photo/2013/09/26/16/00/helicopter-186718_1280.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-80"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white z-3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
            Heli Tour
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto text-gray-100">
            Experience the Himalayas like never before. private helicopter
            tours, emergency rescues, and more.
          </p>
        </div>
      </div>
      <div className="w-full relative z-10 ">
        {/* === Content Section === */}
        <div className="px-4 md:px-8 py-36 space-y-20">
          {trekkingRegions.map((region) => (
            <Element
              key={region.id}
              name={region.id}
              id={region.id}
              className="scroll-mt-28" // Adds spacing for smooth scroll positioning
            >
              <h2
                className="font-bold uppercase text-4xl sm:text-5xl mb-10 text-center"
                style={{ color: "#B516B5" }} // Accent color
              >
                {region.name}
              </h2>
              <PackageCard />
            </Element>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
