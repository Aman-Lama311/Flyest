"use client";

import React, { useEffect, useState } from "react";
import PackageCard from "../../../components/cards/PackageCard";
import { Element } from "react-scroll";

interface TrekkingRegion {
  id: string;
  name: string;
}

const item = {
  slug: "everest-base-camp-trek",
  banner: "/heroimages/everest.webp",
  title: "Everest Base Camp Trek",
  overview:
    "Embark on a once-in-a-lifetime adventure to the foot of the world's tallest mountain. Experience breathtaking views, Sherpa culture, and challenging trails.",
  duration: 14,
};

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
      <div className="relative z-10 w-full h-[50vh] px-6 sm:px-16 border-b-rounded-xl bg-black/80">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 z-1">
          <img
            className=" h-30"
            src="/heroimages/favicon.ico"
            alt="icon"
            loading="lazy"
          />
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2020/04/19/08/03/adventure-5062314_1280.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-60"
          loading="lazy"
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
      <main className="w-full relative z-10 bg-black/80">
        {/* Main Content */}
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
              <h2 className="title font-bold uppercase text-white text-5xl mb-4 text-center">
                {region.name}
              </h2>
              <PackageCard />
            </Element>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
