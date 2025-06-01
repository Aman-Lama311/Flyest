"use client";

import React, { useEffect, useState } from "react";
import PackageCard from "../../../components/cards/PackageCard";
import { Element } from "react-scroll";

interface HeightCategory {
  id: string;
  name: string;
  minHeight: number;
}

const item = {
  slug: "everest-base-camp-trek",
  banner: "/heroimages/everest.webp",
  title: "Everest Base Camp Trek",
  overview:
    "Embark on a once-in-a-lifetime adventure to the foot of the world's tallest mountain. Experience breathtaking views, Sherpa culture, and challenging trails.",
  duration: 14,
};

const heightCategories: HeightCategory[] = [
  { id: "6500m", name: "Above 6500m", minHeight: 6500 },
  { id: "6000m", name: "Above 6000m", minHeight: 6000 },
  { id: "5500m", name: "Above 5500m", minHeight: 5500 },
  { id: "5000m", name: "Above 5000m", minHeight: 5000 },
];

const Page = () => {
  const [activeSection, setActiveSection] = useState<string>("8000m");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.15 }
    );

    heightCategories.forEach((category) => {
      const el = document.getElementById(category.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
          src="/flyimg/mountain-climbing-2130878_1280_13_11zon.webp"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-60"
          loading="lazy"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white z-3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
            Peak Climbing
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            Ready to conquer the Himalayas? Reach out to us to plan your next
            peak climbing expedition—whether you're aiming for Island Peak.
          </p>
        </div>
      </div>
      <main className="w-full relative z-10  bg-black/80">
        {/* Main Content */}
        <div className="px-4 md:px-8 py-16 space-y-20">
          {heightCategories.map((category) => (
            <Element
              key={category.id}
              name={category.id}
              id={category.id}
              className={`scroll-mt-24 ${
                category.id !== "8000m" ? "mt-20" : ""
              }`}
            >
              <h2 className="title font-bold uppercase text-white text-5xl mb-4 text-center">
                {category.name}
              </h2>
              {/* Cards */}
              <PackageCard />
            </Element>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
