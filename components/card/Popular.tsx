import React, { useRef, useState } from "react";
import { Star, MapPin, Clock } from "lucide-react";
import { trek } from "./TrekCardData";

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // drag speed
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="w-full bg-[url('/navbg.svg')] text-white py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold mb-3">
          Popular Expeditions
        </h2>
        <p className="text-sm sm:text-base">
          Popular expeditions often take adventurers to the most challenging and
          awe-inspiring places on Earth.
        </p>
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-6 transition-transform">
          {trek.map((item) => (
            <div
              key={item.id}
              className="min-w-[calc(100%/1.1)] sm:min-w-[calc(100%/2.2)] lg:min-w-[calc(100%/3.3)] flex-shrink-0 bg-zinc-800 rounded-xl shadow-md overflow-hidden"
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

              <div className="p-4 flex flex-col h-full">
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

                <p className="text-sm text-white mb-4 flex-grow">
                  {item.description}
                </p>

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
    </div>
  );
};

export default TrekCard;
