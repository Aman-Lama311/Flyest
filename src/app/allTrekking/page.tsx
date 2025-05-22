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
    <main className="grid w-full h-full md:grid-cols-11 grid-cols-1 lg:gap-0 gap-4 lg:pt-30 py-20 px-4 md:px-8 bg-[url('/navbg.svg')]">
      {/* Sidebar */}
      <div className="mx-auto md:col-span-2 col-span-10 h-fit w-full lg:w-40 flex-col gap-8 sticky top-[4rem] md:top-[6rem] left-0 flex justify-start font-medium">
        <div className="grid grid-cols-3 md:grid-cols-1 mx-auto w-full">
          {trekkingRegions.map((region) => (
            <button
              key={region.id}
              onClick={() => scrollTo(region.id)}
              className={`w-full px-6 py-5 text-left hover:bg-zinc-100 ease-in-out duration-200 md:text-sm text-xs font-semibold tracking-wide ${
                activeSection === region.id
                  ? "border-l-4 border-[#D62A4E] bg-blue-50"
                  : "border-l-4 border-transparent"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-9 md:mt-0 mt-4">
        {trekkingRegions.map((region) => (
          <Element
            key={region.id}
            name={region.id}
            id={region.id}
            className={`scroll-mt-24 ${region.id !== "everest" ? "mt-20" : ""}`}
          >
            <h2 className="title font-extrabold uppercase text-2xl mb-4">
              {region.name}
            </h2>
            <PackageCard />
          </Element>
        ))}
      </div>
    </main>
  );
};

export default Page;
