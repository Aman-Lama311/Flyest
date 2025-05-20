import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star, MapPin, Clock } from "lucide-react";
import { trek } from "./TrekCardData";

const THEME_COLOR = "#FF4E58";

const TrekCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  const trackRef = useRef<HTMLDivElement>(null);

  const getCardsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNextClick();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, cardsToShow]);

  const handlePrevClick = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < trek.length - cardsToShow && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 400);
    } else if (!isAnimating) {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);

  const calculateDiscount = (oldPrice: number, newPrice: number) =>
    Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  return (
    <div className="w-full bg-[url('/navbg.svg')] text-white py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold mb-3">
          Popular Expeditions
        </h2>
        <p className="text-sm sm:text-base">
          Popular expeditions often take adventurers to the most challenging and
          awe-inspiring places on Earth.
        </p>
      </div>

      {/* Trek Card Slider */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(100 / cardsToShow) * trek.length}%`,
            transform: `translateX(-${(100 / trek.length) * currentIndex}%)`,
          }}
        >
          {trek.map((item, index) => (
            <div
              key={item.id}
              className="p-2"
              style={{
                width: `${100 / trek.length}%`,
              }}
            >
              <div className="bg-zinc-800 rounded-xl shadow-md flex flex-col h-full overflow-hidden">
                {/* Image */}
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

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow">
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
            </div>
          ))}
        </div>
      </div>

      {/* Arrows & Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className={`h-10 w-10 border rounded-full flex items-center justify-center transition ${
            currentIndex === 0
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-red-50"
          }`}
          style={{ borderColor: THEME_COLOR }}
        >
          <ArrowLeft size={18} style={{ color: THEME_COLOR }} />
        </button>

        {Array.from({ length: Math.ceil(trek.length - cardsToShow + 1) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
              }}
              className={`h-2 w-8 rounded-full transition-all ${
                idx === currentIndex ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          )
        )}

        <button
          onClick={handleNextClick}
          disabled={currentIndex >= trek.length - cardsToShow}
          className={`h-10 w-10 border rounded-full flex items-center justify-center transition ${
            currentIndex >= trek.length - cardsToShow
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-red-50"
          }`}
          style={{ borderColor: THEME_COLOR }}
        >
          <ArrowRight size={18} style={{ color: THEME_COLOR }} />
        </button>
      </div>
    </div>
  );
};

export default TrekCard;
