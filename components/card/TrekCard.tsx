"use client";

import React, { useRef, useEffect, useState } from "react";
import { Star, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { trek } from "./TrekCardData";
import Title from "../../components/title/Title";

const THEME_COLOR = "#FF4E58";

const TrekCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [cardWidth, setCardWidth] = useState(0);
  const isTransitioning = useRef(false);

  const extendedTrek = [...trek, ...trek, ...trek];

  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 24); // +gap-6
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  useEffect(() => {
    if (scrollRef.current && cardWidth > 0) {
      const middlePosition = trek.length * cardWidth;
      scrollRef.current.scrollLeft = middlePosition;
    }
  }, [cardWidth]);

  const handleScroll = () => {
    if (!scrollRef.current || isTransitioning.current || cardWidth === 0)
      return;

    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.offsetWidth;
    const sectionWidth = trek.length * cardWidth;

    if (scrollLeft >= maxScroll - 10) {
      isTransitioning.current = true;
      container.scrollLeft = sectionWidth;
      setTimeout(() => {
        isTransitioning.current = false;
      }, 50);
    } else if (scrollLeft <= 10) {
      isTransitioning.current = true;
      container.scrollLeft = sectionWidth;
      setTimeout(() => {
        isTransitioning.current = false;
      }, 50);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !scrollRef.current ||
        isDragging.current ||
        cardWidth === 0 ||
        isTransitioning.current
      )
        return;

      const container = scrollRef.current;
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(interval);
  }, [cardWidth]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [cardWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollStart.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.touches[0].pageX - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);

  const calculateDiscount = (oldPrice: number, newPrice: number): number =>
    Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  return (
    <div className="w-full bg-[url('/navbg.svg')] text-white py-12 pl-4 md:pl-8 lg:pl-16 relative">
      <Title
        title={"Popular Treks"}
        discription={"Discover handpicked adventures loved by our community."}
      />

      {/* Slide Arrows */}
      <button
        onClick={() =>
          scrollRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" })
        }
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-gray-300 hover:bg-gray-200 p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={() =>
          scrollRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" })
        }
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-gray-300 hover:bg-gray-200 p-2 rounded-full  transition-all"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing mt-18 hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {extendedTrek.map((item, i) => (
          <article
            ref={i === 0 ? cardRef : null}
            key={`${item.id}-${Math.floor(i / trek.length)}-${i}`}
            className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] snap-start bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group"
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {item.oldPrice > item.newPrice && (
                <div
                  style={{ backgroundColor: THEME_COLOR }}
                  className="absolute top-4 left-4 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded"
                >
                  {calculateDiscount(item.oldPrice, item.newPrice)}% OFF
                </div>
              )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg sm:text-xl">{item.title}</h3>
                <div
                  style={{ backgroundColor: `${THEME_COLOR}15` }}
                  className="flex items-center px-2 py-1 rounded text-xs sm:text-sm font-medium"
                >
                  <Star
                    size={14}
                    style={{ color: THEME_COLOR }}
                    className="mr-1"
                  />
                  <span style={{ color: THEME_COLOR }}>
                    {item.rating || 4.8}
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs sm:text-sm mb-3 space-x-4">
                <div className="flex items-center">
                  <MapPin
                    size={16}
                    style={{ color: THEME_COLOR }}
                    className="mr-1"
                  />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock
                    size={16}
                    style={{ color: THEME_COLOR }}
                    className="mr-1"
                  />
                  <span>{item.duration}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm mb-4 flex-grow">
                {item.description}
              </p>
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4 text-xs sm:text-sm">
                  <div>
                    <p>Starting from</p>
                    <div className="flex items-center space-x-2">
                      {item.oldPrice > item.newPrice && (
                        <span className="line-through opacity-70">
                          {formatPrice(item.oldPrice)}
                        </span>
                      )}
                      <span className="text-lg sm:text-xl font-bold">
                        {formatPrice(item.newPrice)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span>{item.reviews || 256} reviews</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    style={{ backgroundColor: THEME_COLOR }}
                    className="flex-1 font-medium hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    View itinerary
                  </button>
                  <button
                    style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
                    className="flex-1 font-medium border hover:bg-red-50 hover:bg-opacity-10 py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TrekCard;

/* Hide scrollbar utility class */
// You can move this to your global CSS file if preferred
const style = document.createElement("style");
style.innerHTML = `
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
`;
if (typeof window !== "undefined") {
  document.head.appendChild(style);
}
