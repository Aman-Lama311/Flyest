"use client";

import React, { useRef, useEffect, useState } from "react";
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { trek } from "./TrekCardData";
import Title from "../../components/title/Title";
import Image from "next/image";

const debounce = (fn: () => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
};

const TrekCard = () => {
  const [isClient, setIsClient] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [cardWidth, setCardWidth] = useState(0);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

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
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, []);

  // Initialize scroll position
  useEffect(() => {
    if (isClient && scrollRef.current && cardWidth > 0 && trek.length > 0) {
      scrollRef.current.scrollLeft = trek.length * cardWidth;
    }
  }, [isClient, cardWidth]);

  // Infinite scroll handler
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || cardWidth === 0) return;

    const sectionWidth = trek.length * cardWidth;
    const scrollPos = container.scrollLeft;

    if (scrollPos <= cardWidth) {
      container.scrollLeft += sectionWidth;
    } else if (scrollPos >= 2 * sectionWidth - cardWidth) {
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

  // Navigation function
  const navigate = React.useCallback((direction: 'prev' | 'next') => {
    if (!scrollRef.current || !cardWidth || isDragging.current) return;
    
    // Clear any pending auto-scroll
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }

    const container = scrollRef.current;
    const currentScroll = container.scrollLeft;
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
    
    container.scrollTo({
      left: currentScroll + scrollAmount,
      behavior: 'smooth'
    });

    // Restart auto-scroll after manual navigation
    startAutoScroll();
  }, [cardWidth]);

  // Auto-scroll function
  const startAutoScroll = React.useCallback(() => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }

    autoScrollTimer.current = setInterval(() => {
      if (isDragging.current || !scrollRef.current || !cardWidth) return;

      const container = scrollRef.current;
      const currentScroll = container.scrollLeft;
      const nextScroll = currentScroll + cardWidth;
      
      container.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
    }, 3000);
  }, [cardWidth]);

  // Start auto-scroll when component mounts
  useEffect(() => {
    if (isClient && cardWidth > 0) {
      startAutoScroll();
    }
    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [isClient, cardWidth, startAutoScroll]);

  // Drag handlers (unchanged from your original)
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

      <button
        onClick={() => navigate('prev')}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-black w-6 h-6" />
      </button>

      <button
        onClick={() => navigate('next')}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="text-black w-6 h-6" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab select-none active:cursor-grabbing mt-18 hide-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {[...trek, ...trek, ...trek].map((item, index) => (
          <article
            ref={index === 0 ? cardRef : null}
            key={`${item.id}-${index}`}
            className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] text-white transition-all duration-100 overflow-hidden flex flex-col relative group snap-start"
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
              <Image
              height={500}
              width={500}
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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