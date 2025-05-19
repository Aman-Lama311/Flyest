import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { trek } from './TrekCardData';

// Main color theme
const THEME_COLOR = "#FF4E58";

const TrekCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsRef = useRef(null);

  // Responsive card count
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        if (currentIndex < trek.length - cardsToShow) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentIndex(0);
        }
        setTimeout(() => setIsAnimating(false), 300);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsToShow, isAnimating]);

  const visibleTreks = trek.slice(currentIndex, currentIndex + cardsToShow);

  const handlePrevClick = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < trek.length - cardsToShow && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscount = (oldPrice: number, newPrice: number): number => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-3">
            Traveler's Favorite Treks
          </h2>
          <p className="text-white text-lg font-sans">  
            Discover handpicked adventures loved by our community. Embark on unforgettable journeys through breathtaking landscapes and immersive cultural experiences.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0 || isAnimating}
            aria-label="Previous trek"
            style={{ borderColor: THEME_COLOR }}
            className={`h-12 w-12 rounded-full flex items-center justify-center border transition duration-200 ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-red-50 active:bg-red-100'
            }`}
          >
            <ArrowLeft size={20} style={{ color: THEME_COLOR }} />
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentIndex >= trek.length - cardsToShow || isAnimating}
            aria-label="Next trek"
            style={{ borderColor: THEME_COLOR }}
            className={`h-12 w-12 rounded-full flex items-center justify-center border transition duration-200 ${
              currentIndex >= trek.length - cardsToShow ? 'opacity-40 cursor-not-allowed' : 'hover:bg-red-50 active:bg-red-100'
            }`}
          >
            <ArrowRight size={20} style={{ color: THEME_COLOR }} />
          </button>
        </div>
      </div>

      {/* Trek Cards */}
      <div 
        ref={cardsRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
      >
        {visibleTreks.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full"
          >
            <div className="relative w-full h-80 bg-black text-white overflow-hidden group">
              <img 
                src={item.imgSrc} 
                alt={`${item.title} landscape`} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              {item.oldPrice > item.newPrice && (
                <div style={{ backgroundColor: THEME_COLOR }} className="absolute top-4 left-4 text-white font-sans text-sm font-bold px-2 py-1 rounded">
                  {calculateDiscount(item.oldPrice, item.newPrice)}% OFF
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 style={{ color: "white" }} className="font-bold text-xl mb-1">{item.title}</h3>
                <div style={{ backgroundColor: `${THEME_COLOR}15` }} className="flex items-center px-2 py-1 rounded text-sm font-medium">
                  <Star size={14} style={{ color: THEME_COLOR }} className="fill-current mr-1" />
                  <span style={{ color: THEME_COLOR }}>{item.rating || 4.8}</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-white mb-3">
                <MapPin size={16} style={{ color: THEME_COLOR }} className="mr-1" />
                <span>{item.location || "Various locations"}</span>
              </div>
              
              <div className="flex items-center text-sm text-white mb-4">
                <Clock size={16} style={{ color: THEME_COLOR }} className="mr-1" />
                <span>{item.duration || "7-10 days"}</span>
              </div>
              
              <p className="text-white text-sm mb-4 flex-grow font-sans">
                {item.description || "Experience the beauty of nature with our expertly guided trek through stunning landscapes and cultural wonders."}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-white">Starting from</p>
                    <div className="flex items-center">
                      {item.oldPrice > item.newPrice && (
                        <span className="line-through text-white mr-2">{formatPrice(item.oldPrice)}</span>
                      )}
                      <span style={{ color: "white" }} className="text-xl text-white font-bold">{formatPrice(item.newPrice)}</span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-white">
                    <span className="block">{item.reviews || 256} reviews</span>
                  </div>
                </div>

                {/* View Itinerary & Book Now Buttons */}
                <div className="flex gap-3">
                  <button
                    style={{ backgroundColor: THEME_COLOR }}
                    className="w-1/2 font-medium hover:bg-red-600 active:bg-red-700 text-white py-3 px-4 rounded-lg transition duration-200"
                    aria-label={`View itinerary for ${item.title}`}
                  >
                    View itinerary
                  </button>
                  <button
                    style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
                    className="w-1/2 font-medium border hover:bg-red-50 active:bg-red-100 py-3 px-4 rounded-lg transition duration-200"
                    aria-label={`Book now for ${item.title}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(trek.length / cardsToShow) }).map((_, idx) => (
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
            aria-current={Math.floor(currentIndex / cardsToShow) === idx ? 'page' : undefined}
            style={{ backgroundColor: Math.floor(currentIndex / cardsToShow) === idx ? THEME_COLOR : '#E5E7EB' }}
            className={`h-2 w-8 mx-1 rounded-full transition-all ${
              Math.floor(currentIndex / cardsToShow) === idx ? '' : 'hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrekCard;
