"use client";

import React, { useRef, useEffect, useState } from "react";
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { trek } from "./TrekCardData";
import Title from "../../components/title/Title";

// Utility: Debounce function
const debounce = (fn: () => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
};

const TrekCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const isAutoScrolling = useRef(false);
  const [cardWidth, setCardWidth] = useState(0);

  const extendedTrek = [...trek, ...trek, ...trek];

  // Measure card width and update on resize (debounced)
  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 24); // 24px = gap-6
      }
    };

    const debouncedResize = debounce(updateCardWidth, 100);

    updateCardWidth();
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  // Initial scroll to middle section
  useEffect(() => {
    if (scrollRef.current && cardWidth > 0) {
      scrollRef.current.scrollLeft = trek.length * cardWidth;
    }
  }, [cardWidth]);

  // Infinite scroll logic
  const handleScroll = () => {
    const container = scrollRef.current;
    const sectionWidth = trek.length * cardWidth;

    if (!container || cardWidth === 0) return;

    if (container.scrollLeft <= cardWidth) {
      container.scrollLeft += sectionWidth;
    } else if (container.scrollLeft >= sectionWidth * 2 + cardWidth) {
      container.scrollLeft -= sectionWidth;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [cardWidth]);

  // Auto-scroll every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !scrollRef.current ||
        isDragging.current ||
        isAutoScrolling.current ||
        cardWidth === 0
      )
        return;

      isAutoScrolling.current = true;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });

      // Release lock after scroll animation
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardWidth]);

  // Drag to scroll (mouse)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Drag to scroll (touch)
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

  return (
    <div className="w-full bg-black/80 text-white py-12 pl-4 md:pl-8 lg:pl-16 overflow-hidden relative z-10">
      <Title
        title="Popular Treks"
        discription="Discover handpicked adventures loved by our community."
      />

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          scrollRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" })
        }
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-gray-300 hover:bg-gray-200 p-2 rounded-full"
      >
        <ChevronLeft className="text-black" />
      </button>

      <button
        onClick={() =>
          scrollRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" })
        }
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-gray-300 hover:bg-gray-200 p-2 rounded-full"
      >
        <ChevronRight className="text-black" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab select-none active:cursor-grabbing mt-18"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {extendedTrek.map((item, index) => (
          <article
            ref={index === 0 ? cardRef : null}
            key={`${item.id}-${index}`}
            className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] text-white transition-all duration-100 overflow-hidden flex flex-col relative group"
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {item.oldPrice > item.newPrice && (
                <div className="absolute top-4 left-4 text-[#FF4E58] text-lg bg-white font-bold px-2 py-1 rounded">
                  Starting from {formatPrice(item.newPrice)}
                </div>
              )}
            </div>

            <div className="pr-4 flex flex-col flex-grow gap-2">
              <h3 className="font-medium text-2xl mt-4">{item.title}</h3>
              <div className="flex items-center text-sm mb-4 justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1 text-green-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-sky-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                <button className="text-[#FF4E58] text-lg font-medium hover:scale-105 transition-transform">
                  View Itinerary
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TrekCard;
