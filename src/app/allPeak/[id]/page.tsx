"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PackageCard from "../../../../components/cards/PackageCard";
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
  const { id } = useParams();

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
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid w-full h-full md:grid-cols-11 grid-cols-1 lg:gap-0 gap-4 lg:py-30 py-20 bg-[url('/navbg.svg')] px-4 md:px-8">
      {JSON.stringify(id)}

      {/* Sidebar */}
      <div className="md:bg-transparent md:col-span-2 col-span-10 h-fit w-full lg:w-40 flex-col gap-8 sticky top-0 md:top-[6rem] left-0 flex justify-start font-medium">
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
      <div className="col-span-9 md:mt-0 mt-6">
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
            {/* Cards */}
            <PackageCard />
          </Element>
        ))}
      </div>
    </div>
  );
};

export default Page;
