

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, MapPin, Clock } from 'lucide-react';

export const trek = [
  {
    id: 1,
    imgSrc: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
    title: "Mount Everest Base Camp Trek",
    oldPrice: 2200,
    newPrice: 1850,
    rating: "4.9",
    reviews: "512",
    location: "Nepal",
    duration: "12 Days",
    description: "Journey to the base of the world’s highest peak and witness breathtaking Himalayan scenery along the way."
  },
  {
    id: 2,
    imgSrc: "https://www.thomsontreks.com/wp-content/uploads/2019/05/kilimanjaro-kibo-view-pjh.jpg",
    title: "Kilimanjaro Summit Adventure",
    oldPrice: 2100,
    newPrice: 1700,
    rating: "4.7",
    reviews: "389",
    location: "Tanzania",
    duration: "7 Days",
    description: "Climb Africa's tallest mountain through varied ecosystems, from rainforest to alpine desert."
  },
  {
    id: 3,
    imgSrc: "https://hsj.com.np/uploads/0000/386/2020/04/24/everest-region-banner1-1024.jpg",
    title: "Annapurna Circuit Expedition",
    oldPrice: 1900,
    newPrice: 1600,
    rating: "4.8",
    reviews: "275",
    location: "Nepal",
    duration: "15 Days",
    description: "A classic trek looping around the Annapurna massif with majestic peaks and deep gorges."
  },
  {
    id: 4,
    imgSrc: "https://admin.ntb.gov.np/image-cache/Manaslu_View_from_Lho-1624808940.jpg?p=main&s=865d2a2a7ce83fed2413c359ee7fcf76",
    title: "Manaslu Circuit Trekking",
    oldPrice: 2000,
    newPrice: 1750,
    rating: "4.6",
    reviews: "198",
    location: "Nepal",
    duration: "14 Days",
    description: "Remote and less crowded, this trek circles Mount Manaslu offering raw Himalayan beauty."
  },
  {
    id: 5,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBmhk4iASmwVy27XoeJakbNv_sX3OOvKOEg&s",
    title: "Mount Kailash Pilgrimage Route",
    oldPrice: 2500,
    newPrice: 2000,
    rating: "4.5",
    reviews: "143",
    location: "Tibet",
    duration: "10 Days",
    description: "Sacred to multiple religions, this high-altitude trek circles the mystical Mount Kailash."
  }
];


// Main color theme
const THEME_COLOR = "#FF4E58";

const PackageCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsRef = useRef(null);

  // Number of cards to show based on viewport width
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3; // Default for SSR
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  // Update cards to show on window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        if (currentIndex < trek.length - cardsToShow) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentIndex(0); // Restart
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
    <div className="w-full bg-black rounded-lg text-white py-1 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="flex flex-col  md:flex-row justify-between items-start md:items-center mb-10">
        {/* <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-6xl font-bold font-sans text-white mb-3">
             Popular Expeditions
          </h2>
          <p className="text-white  text-lg">
           Popular expeditions often take adventurers to some of the most challenging and awe-inspiring places on Earth. These include climbing Mount Everest, trekking to Machu Picchu, exploring Antarctica, or journeying through the Amazon rainforest.
          </p>
        </div>  */}
      </div>

      {/* Trek Cards */}
      <div 
        ref={cardsRef}
        className={`grid grid-cols-1 h-[60vh] md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
      >
       {[...visibleTreks].reverse().map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full"
          >
            <div className="relative w-full h-80 bg-zinc-700 overflow-hidden group">
              <img 
                src={item.imgSrc} 
                alt={`${item.title} landscape`} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              {item.oldPrice > item.newPrice && (
                <div style={{ backgroundColor: THEME_COLOR }} className="absolute top-4 left-4 text-white text-sm font-bold px-2 py-1 rounded">
                  {calculateDiscount(item.oldPrice, item.newPrice)}% OFF
                </div>
              )}
            </div>
            <div className="p-2 flex flex-col flex-grow">
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
                <Clock size={16} style={{ color: THEME_COLOR }} className="mr-1 ml-4" />
                <span>{item.duration || "7-10 days"}</span>
              </div>
              
            
              
              <p className="text-white text-sm mb-4 flex-grow">
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
                      <span style={{ color: "white"}} className="text-xl font-bold">{formatPrice(item.newPrice)}</span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-white">
                    <span className="block">{item.reviews || 256} reviews</span>
                  </div>
                </div>
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
            <div className="flex flex-col items-center mt-5 mb-5 space-y-4">
              {/* Dots */}
               <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevClick}
                  disabled={currentIndex === 0 || isAnimating}
                  aria-label="Previous trek"
                  style={{ borderColor: THEME_COLOR }}
                  className={`h-12 w-12 rounded-full flex items-center justify-center border transition duration-200 ${
                    currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-red-50 active:bg-red-100'
                  }`}
                >
                  <ArrowLeft size={20} style={{ color: THEME_COLOR}} />
                </button>
              <div className="flex justify-center">
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
                <button
                  onClick={handleNextClick}
                  disabled={currentIndex >= trek.length - cardsToShow || isAnimating}
                  aria-label="Next trek"
                  style={{ borderColor: THEME_COLOR }}
                  className={`h-12 w-12 rounded-full flex items-center justify-center border transition duration-200 ${
                    currentIndex >= trek.length - cardsToShow ? 'opacity-40 cursor-not-allowed' : 'hover:bg-red-50 active:bg-red-100'
                  }`}
                >
                  <ArrowRight size={20} style={{color: THEME_COLOR }} />
                </button>
              </div>
            </div>
   </div>
  );
};

export default PackageCard;

