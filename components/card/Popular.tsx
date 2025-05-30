"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { Star, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { trek } from "./TrekCardData";
import Title from "../../components/title/Title";

const THEME_COLOR = "#FF4E58";
const GAP = 24;
const AUTO_SCROLL_INTERVAL = 3000;

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

const TrekCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  // --- Debounce utility ---
  const debounce = (fn: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  // --- Get card width dynamically ---
  const getCardWidth = () => {
    return cardRef.current?.offsetWidth ? cardRef.current.offsetWidth + GAP : 0;
  };

  // --- Manual scroll ---
  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount =
        direction === "left" ? -getCardWidth() : getCardWidth();
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // --- Auto slide ---
  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;
      const cardWidth = getCardWidth();
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + cardWidth >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // --- Mouse Handlers with Debounce ---
  const handleMouseMove = useCallback(
    debounce((e: React.MouseEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      e.preventDefault();
      const dx = e.pageX - startXRef.current;
      containerRef.current.scrollLeft = scrollStartRef.current - dx;
    }, 5),
    []
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX;
    scrollStartRef.current = containerRef.current?.scrollLeft || 0;
  };

  const endDrag = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="w-full bg-black/80 text-white py-12 pl-4 sm:pl-6 md:pl-10 lg:pl-16 relative z-10">
      <Title
        title="Peak Climbing"
        discription="Discover our most popular trekking destinations"
      />

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-200 p-2 rounded-full shadow-md"
      >
        <ChevronLeft className="text-black" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-200 p-2 rounded-full shadow-md"
      >
        <ChevronRight className="text-black" />
      </button>

      {/* Cards */}
      <div
        ref={containerRef}
        className="overflow-x-auto flex gap-6 cursor-grab active:cursor-grabbing mt-18 scroll-smooth pr-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        {trek.map((item, index) => (
          <div
            ref={index === 0 ? cardRef : null}
            key={item.id}
            className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] text-white hover:shadow-lg transition-all duration-100 overflow-hidden flex flex-col relative group"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden group">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {item.oldPrice > item.newPrice && (
                <div className="absolute top-4 left-4 px-2 py-1 font-bold rounded bg-white text-[#FF4E58] text-lg">
                  Starting from {formatPrice(item.newPrice)}
                </div>
              )}
            </div>

            <div className="pr-4 flex flex-col">
              <h3 className="font-medium text-2xl mt-4 mb-2">{item.title}</h3>
              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1 text-green-400" />
                  <span>{item.location}</span>
                  <Clock size={14} className="ml-4 mr-1 text-sky-500" />
                  <span>{item.duration}</span>
                </div>
                <button className="text-[#FF4E58] text-lg font-medium hover:scale-105 transition-transform">
                  View itinerary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekCard;
