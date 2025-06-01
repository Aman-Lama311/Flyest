// components/TrekTipsCarousel.tsx
import React, { useState, useEffect } from "react";
import { trek } from "../layout/TipsData";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";

const TrekTipsCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % trek.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + trek.length) % trek.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTreks = trek
    .slice(startIndex, startIndex + visibleCount)
    .concat(
      trek.slice(0, Math.max(0, startIndex + visibleCount - trek.length))
    );

  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tips & Advice</h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula rutrum luctus risus diam eget risus varius
            blandit sit amet non magna.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 transition-all">
        {visibleTreks.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full"
          >
            <div className="relative w-full h-40 bg-gray-200 overflow-hidden group">
              <Image
                height={500}
                width={500}
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">{item.paragraph}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekTipsCarousel;
