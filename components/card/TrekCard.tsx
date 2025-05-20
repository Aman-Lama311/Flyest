import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star, MapPin, Clock } from "lucide-react";
import { trek } from "./TrekCardData";

const THEME_COLOR = "#FF4E58";

const TrekCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  const getCardsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
      setCurrentIndex((prev) => {
        const maxIndex = trek.length - getCardsToShow();
        return prev > maxIndex ? maxIndex : prev;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => {
          if (prev < trek.length - cardsToShow) return prev + 1;
          else return 0;
        });
        setTimeout(() => setIsAnimating(false), 300);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsToShow, isAnimating]);

  const visibleTreks =
    currentIndex + cardsToShow <= trek.length
      ? trek.slice(currentIndex, currentIndex + cardsToShow)
      : [
          ...trek.slice(currentIndex),
          ...trek.slice(0, currentIndex + cardsToShow - trek.length),
        ];

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === 0 ? trek.length - cardsToShow : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev >= trek.length - cardsToShow ? 0 : prev + 1
      );
      setTimeout(() => setIsAnimating(false), 300);
    }
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
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-10 max-w-7xl mx-auto text-center md:text-left">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-sans mb-3">
            Traveler's Favorite Treks
          </h2>
          <p className="text-white text-base sm:text-lg max-w-xl">
            Discover handpicked adventures loved by our community. Embark on
            unforgettable journeys through breathtaking landscapes and immersive
            cultural experiences.
          </p>
        </div>
      </div>

      {/* Trek Cards */}
      <div
        ref={cardsRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${
          isAnimating ? "opacity-80" : "opacity-100"
        }`}
      >
        {visibleTreks.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className="bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden group">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {item.oldPrice > item.newPrice && (
                <div
                  style={{ backgroundColor: THEME_COLOR }}
                  className="absolute top-4 left-4 text-white font-sans text-xs sm:text-sm font-bold px-2 py-1 rounded select-none"
                >
                  {calculateDiscount(item.oldPrice, item.newPrice)}% OFF
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg sm:text-xl mb-0">
                  {item.title}
                </h3>
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
              <p className="text-xs sm:text-sm mb-4 flex-grow font-sans">
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
                    <span className="block">{item.reviews || 256} reviews</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    style={{ backgroundColor: THEME_COLOR }}
                    className="flex-1 font-medium hover:bg-red-600 active:bg-red-700 text-white py-3 px-4 rounded-lg transition duration-200"
                    aria-label={`View itinerary for ${item.title}`}
                  >
                    View itinerary
                  </button>
                  <button
                    style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
                    className="flex-1 font-medium border hover:bg-red-50 active:bg-red-100 py-3 px-4 rounded-lg transition duration-200"
                    aria-label={`Book now for ${item.title}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <nav
        className="flex flex-col items-center mt-8 space-y-4 select-none"
        aria-label="Trek pagination"
      >
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrevClick}
            disabled={isAnimating}
            aria-disabled={isAnimating}
            aria-label="Previous trek"
            style={{ borderColor: THEME_COLOR }}
            className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center border transition duration-200 ${
              isAnimating
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-50 active:bg-red-100"
            }`}
          >
            <ArrowLeft size={16} style={{ color: THEME_COLOR }} />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center">
            {Array.from({ length: Math.ceil(trek.length / cardsToShow) }).map(
              (_, idx) => {
                const isActive = Math.floor(currentIndex / cardsToShow) === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(idx * cardsToShow);
                        setTimeout(() => setIsAnimating(false), 300);
                      }
                    }}
                    aria-label={`Go to page ${idx + 1}`}
                    aria-current={isActive ? "page" : undefined}
                    style={{
                      backgroundColor: isActive ? THEME_COLOR : "#E5E7EB",
                    }}
                    className={`h-2 w-8 mx-1 rounded-full transition-all ${
                      isActive ? "" : "hover:bg-gray-400"
                    }`}
                  />
                );
              }
            )}
          </div>

          <button
            onClick={handleNextClick}
            disabled={isAnimating}
            aria-disabled={isAnimating}
            aria-label="Next trek"
            style={{ borderColor: THEME_COLOR }}
            className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center border transition duration-200 ${
              isAnimating
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-50 active:bg-red-100"
            }`}
          >
            <ArrowRight size={16} style={{ color: THEME_COLOR }} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TrekCard;
