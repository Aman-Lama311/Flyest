import React, { useRef } from "react";
import { Star, MapPin, Clock } from "lucide-react";
import { trek } from "./TrekCardData";

const THEME_COLOR = "#FF4E58";

const TrekCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
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
    <div className="w-full bg-[url('/navbg.svg')] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-3">
          Traveler's Favorite Treks
        </h2>
        <p className="text-white text-base sm:text-lg">
          Discover handpicked adventures loved by our community.
        </p>
      </div>

      {/* Horizontal dragable scroll area */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {trek.map((item) => (
          <article
            key={item.id}
            className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col relative group"
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
              {/* DRAG overlay on hover */}
              <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Drag
              </div>
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
                    className="flex-1 font-medium hover:bg-red-600 text-white py-3 px-4 rounded-lg"
                  >
                    View itinerary
                  </button>
                  <button
                    style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
                    className="flex-1 font-medium border hover:bg-red-50 py-3 px-4 rounded-lg"
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
