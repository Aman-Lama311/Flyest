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
  { id: "8000m", name: "Above 8000m", minHeight: 8000 },
  { id: "7000m", name: "Above 7000m", minHeight: 7000 },
  { id: "6000m", name: "Above 6000m", minHeight: 6000 },
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // Adjust for header
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="grid w-11/12 mx-auto h-full md:grid-cols-11 grid-cols-1 lg:gap-0 gap-4 md:mx-8 lg:py-10 py-20">
      {/* Sidebar */}
     <div className="md:bg-transparent mx-auto md:col-span-2 col-span-10 h-fit w-full lg:w-40 flex-col gap-8 sticky top-0 md:top-[6rem] left-0 flex justify-start font-medium">

        <div className="grid grid-cols-5 md:grid-cols-1 mx-auto w-full">
          {heightCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollTo(category.id)}
              className={`w-full px-6 py-5 text-left hover:bg-zinc-100 ease-in-out duration-200 md:text-sm text-xs font-semibold tracking-wide ${
                activeSection === category.id
                  ? "border-l-4 border-[#D62A4E] bg-blue-50"
                  : "border-l-4 border-transparent"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-9 md:mt-0 mx-2 mt-6">
        {heightCategories.map((category) => (
          <Element
            key={category.id}
            name={category.id}
            id={category.id}
            className={`scroll-mt-24 ${category.id !== "8000m" ? "mt-20" : ""}`}
          >
            <h2 className="title font-extrabold uppercase text-2xl mb-4">
              {category.name}
            </h2>
            {/* <div className="grid w-full xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-6"> */}
              <PackageCard />
              {/* <PackageCard />
              <PackageCard />
              <PackageCard /> */}
            {/* </div> */}
          </Element>
        ))}
      </div>
    </main>
  );
};

export default Page;



