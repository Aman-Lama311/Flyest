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
  { id: "everest", name: "Everest Region" },
  { id: "annapurna", name: "Annapurna Region" },
  { id: "manaslu", name: "Manaslu Region" },
];

const Page = () => {
  const [activeSection, setActiveSection] = useState<string>("everest");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.5 }
    );

    trekkingRegions.forEach((region) => {
      const el = document.getElementById(region.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative z-10 w-full h-[50vh] px-6 sm:px-16 border-b-rounded-xl bg-white">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 z-1">
          <Image
            height={500}
            width={500}
            className="h-30 w-auto"
            src="/heroimages/favicon.ico"
            alt="icon"
          />
        </div>
        <Image
          height={500}
          width={500}
          src="/flyimg/adventure-5062314_1280_3_11zon.webp"
          alt="adventure"
          className="w-full h-full object-cover rounded-b-4xl opacity-80"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white z-3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
            Popular Trekking
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            Embark on a breathtaking trekking journey through the majestic
            Himalayas. Contact us to plan your perfect adventure.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full relative z-10 bg-white text-black">
        <div className="px-4 md:px-8 py-36 space-y-20">
          {trekkingRegions.map((region) => (
            <Element
              key={region.id}
              name={region.id}
              id={region.id}
              className={`scroll-mt-24 ${
                region.id !== "everest" ? "mt-20" : ""
              }`}
            >
              <h2
                className="font-bold uppercase text-4xl sm:text-5xl mb-10 text-center"
                style={{ color: "#B516B5" }}
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
