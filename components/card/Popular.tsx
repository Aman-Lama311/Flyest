"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { Star, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { trek } from "./TrekCardData";
import Title from "../../components/title/Title";
import Image from "next/image";

const THEME_COLOR = "#FF4E58";
const GAP = 24;
const AUTO_SCROLL_INTERVAL = 5000;

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
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  // Initialize client state and measure card width
  useEffect(() => {
    setIsClient(true);
    const updateCardWidth = () => {
      if (cardRef.current) {
        const computedStyle = window.getComputedStyle(cardRef.current);
        const margin = parseFloat(computedStyle.marginRight) || 0;
        setCardWidth(cardRef.current.offsetWidth + margin);
      }
    };

    const debouncedResize = debounce(updateCardWidth, 100);
    updateCardWidth();
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      stopAutoScroll();
    };
  }, []);

  // Debounce utility
  const debounce = (fn: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  // Manual scroll with boundary checks
  const scroll = useCallback(
    (direction: "left" | "right") => {
      const container = containerRef.current;
      if (!container || isDraggingRef.current) return;

      stopAutoScroll();

      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      let targetScroll = currentScroll + scrollAmount;

      // Boundary checks
      if (targetScroll < 0) {
        targetScroll = 0;
      } else if (targetScroll > maxScroll) {
        targetScroll = maxScroll;
      }

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });

      // Restart auto-scroll after manual navigation
      startAutoScroll();
    },
    [cardWidth]
  );

  // Auto-scroll functionality
  const startAutoScroll = useCallback(() => {
    stopAutoScroll();

    autoScrollRef.current = setInterval(() => {
      const container = containerRef.current;
      if (!container || isDraggingRef.current) return;

      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const cardWidth = containerRef.current
        ? containerRef.current.firstElementChild?.clientWidth || 0
        : 0;

      if (currentScroll + cardWidth >= maxScroll) {
        // Smooth scroll back to start
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll to next card
        container.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, AUTO_SCROLL_INTERVAL);
  }, []);

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  // Start auto-scroll when component mounts and cardWidth is available
  useEffect(() => {
    if (isClient && cardWidth > 0) {
      startAutoScroll();
    }
  }, [isClient, cardWidth, startAutoScroll]);

  // Mouse and touch handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX;
    scrollStartRef.current = containerRef.current?.scrollLeft || 0;
    stopAutoScroll();
  };

  const handleMouseMove = useCallback(
    debounce((e: React.MouseEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      const dx = e.pageX - startXRef.current;
      containerRef.current.scrollLeft = scrollStartRef.current - dx;
    }, 16), // ~60fps
    []
  );

  const endDrag = () => {
    isDraggingRef.current = false;
    startAutoScroll();
  };

  return (
    <div className="w-full  py-12 pl-4 sm:pl-6 md:pl-10 lg:pl-16 relative z-10">
      <Title
        title="Peak Climbing"
        discription="Discover our most popular trekking destinations"
      />

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-black w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="text-black w-5 h-5" />
      </button>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto flex gap-6 cursor-grab active:cursor-grabbing mt-18 scroll-smooth pr-4 hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        {trek.map((item, index) => (
          <div
            ref={index === 0 ? cardRef : null}
            key={item.id}
            className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] text-black hover:shadow-lg transition-all duration-100 overflow-hidden flex flex-col relative group snap-start"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden group">
              <Image
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                height={500}
                width={500}
              />
              {item.oldPrice > item.newPrice && (
                <div className="absolute top-4 left-4 px-2 py-1 font-bold rounded bg-white text-[#B415B4] text-lg">
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
                <button className="text-[#B415B4] text-lg font-medium hover:scale-105 transition-transform">
                  View itinerary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TrekCard;
