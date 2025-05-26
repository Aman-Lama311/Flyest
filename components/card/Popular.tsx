"use client";

import React, { useRef, useEffect } from "react";
import { Star, MapPin, Clock } from "lucide-react";
import { trek } from "./TrekCardData";
import Title from "../../components/title/Title";

const THEME_COLOR = "#FF4E58";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

const calculateDiscount = (oldPrice: number, newPrice: number) =>
  Math.round(((oldPrice - newPrice) / oldPrice) * 100);

const TrekCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Refs for drag state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      const card = cardRef.current;

      if (container && card) {
        const cardWidth = card.offsetWidth + 24; // includes margin (gap-6 = 1.5rem = 24px)
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft + cardWidth >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX;
    scrollStartRef.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startXRef.current;
    containerRef.current.scrollLeft = scrollStartRef.current - dx;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="w-full bg-[url('/navbg.svg')] text-white py-12 pl-4 sm:pl-6 md:pl-10 lg:pl-16">
      <Title
        title="Peak Climbing"
        discription="Discover our most popular trekking destinations"
      />

      <div
        ref={containerRef}
        className="overflow-x-auto flex gap-6 cursor-grab active:cursor-grabbing mt-18"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {trek.map((item, index) => (
          <div
            ref={index === 0 ? cardRef : null}
            key={item.id}
            className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden group">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.oldPrice > item.newPrice && (
                <div
                  style={{ backgroundColor: THEME_COLOR }}
                  className="absolute top-4 left-4 px-2 py-1 text-xs sm:text-sm font-bold rounded"
                >
                  {calculateDiscount(item.oldPrice, item.newPrice)}% OFF
                </div>
              )}
            </div>

            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <div
                  style={{ backgroundColor: `${THEME_COLOR}15` }}
                  className="flex items-center px-2 py-1 rounded text-xs font-medium"
                >
                  <Star
                    size={14}
                    className="mr-1"
                    style={{ color: THEME_COLOR }}
                  />
                  <span style={{ color: THEME_COLOR }}>
                    {item.rating || 4.8}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-sm text-white mb-3">
                <MapPin
                  size={14}
                  className="mr-1"
                  style={{ color: THEME_COLOR }}
                />
                <span>{item.location}</span>
                <Clock
                  size={14}
                  className="ml-4 mr-1"
                  style={{ color: THEME_COLOR }}
                />
                <span>{item.duration}</span>
              </div>

              <p className="text-sm text-white mb-4">{item.description}</p>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-white">Starting from</p>
                    <div className="flex items-center">
                      {item.oldPrice > item.newPrice && (
                        <span className="line-through text-sm mr-2">
                          {formatPrice(item.oldPrice)}
                        </span>
                      )}
                      <span className="text-lg font-bold text-white">
                        {formatPrice(item.newPrice)}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-white text-right">
                    {item.reviews || 256} reviews
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    style={{ backgroundColor: THEME_COLOR }}
                    className="w-1/2 py-2 rounded-lg font-medium hover:bg-red-600"
                  >
                    View itinerary
                  </button>
                  <button
                    style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
                    className="w-1/2 py-2 border rounded-lg font-medium hover:bg-red-50"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekCard;
