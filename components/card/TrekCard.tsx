import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';
import { trek } from './TrekCardData';

const TrekCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverStates, setHoverStates] = useState({
    moreButton: false,
    bookButtons: Array(trek.length).fill(false)
  });
  
  const visibleTreks = trek.slice(currentIndex, currentIndex + 3);
  
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNextClick = () => {
    if (currentIndex < trek.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMoreButtonEnter = () => {
    setHoverStates(prev => ({...prev, moreButton: true}));
  };

  const handleMoreButtonLeave = () => {
    setHoverStates(prev => ({...prev, moreButton: false}));
  };

  const handleBookButtonEnter = (index) => {
    setHoverStates(prev => {
      const newBookButtons = [...prev.bookButtons];
      newBookButtons[index] = true;
      return {...prev, bookButtons: newBookButtons};
    });
  };

  const handleBookButtonLeave = (index) => {
    setHoverStates(prev => {
      const newBookButtons = [...prev.bookButtons];
      newBookButtons[index] = false;
      return {...prev, bookButtons: newBookButtons};
    });
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      {/* Header section */}
      <div className="py-16 px-16 md:px-24">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-red-600">Upcoming</span>
          <br />
          <span className="text-gray-700">Trekking</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-8">
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
            Enhance your pace and precision, spark meaningful<br />
            conversations for team alignment, and identify<br />
            crucial decision points as you gear up<br />
            for your next trek.
          </p>
          
                      <div className="flex items-center gap-4 mt-8 md:mt-0">
            <button 
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
              className={`h-12 w-12 md:h-16 md:w-16 rounded-lg flex items-center justify-center transition-colors ${currentIndex === 0 ? 'bg-red-300' : 'bg-red-600 hover:bg-red-700'}`}
            >
              <ArrowLeft size={24} className="text-white" />
            </button>
            
            <button 
              onClick={handleNextClick}
              disabled={currentIndex >= trek.length - 3}
              className={`h-12 w-12 md:h-16 md:w-16 rounded-lg flex items-center justify-center transition-colors ${currentIndex >= trek.length - 3 ? 'bg-red-300' : 'bg-red-600 hover:bg-red-700'}`}
            >
              <ArrowRight size={24} className="text-white" />
            </button>
            
            <div 
              className="h-12 md:h-16 w-32 md:w-40 bg-red-600 hover:bg-red-700 transition-colors rounded-lg flex items-center justify-center gap-4 cursor-pointer relative overflow-hidden"
              onMouseEnter={handleMoreButtonEnter}
              onMouseLeave={handleMoreButtonLeave}
            >
              <span className="text-lg md:text-xl font-bold text-white transition-transform duration-300" style={{ transform: hoverStates.moreButton ? 'translateY(-2px)' : 'translateY(0)' }}>
                {hoverStates.moreButton ? "More" : "More"}
              </span>
              <div className="h-8 md:h-12 w-8 md:w-12 bg-white rounded-lg flex items-center justify-center">
                {hoverStates.moreButton ? (
                  <ArrowDown size={24} className="text-red-600 transition-transform duration-300" style={{ transform: 'rotate(270deg)' }} />
                ) : (
                  <ArrowRight size={24} className="text-red-600 transition-transform duration-300" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trek cards section */}
      <div className="px-6 md:px-24 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 overflow-hidden">
          {visibleTreks.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg overflow-hidden transition-all transform hover:scale-105 flex flex-col">
              <div className="w-full h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-110"
                />
              </div>
              
              <div className="px-6 py-8 flex-grow">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600">{item.title}</h2>
                <p className="text-base md:text-lg text-gray-500 mt-4">{item.desc}</p>
                
                <div className="mt-8">
                  <button className="w-full h-16 bg-red-600 hover:bg-red-700 transition-colors rounded-lg flex items-center justify-between px-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">Book Now</h3>
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center">
                      <ArrowRight size={20} className="text-red-600" />
                    </div>
                  </button>
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