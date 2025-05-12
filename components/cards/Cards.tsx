import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cards = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideshowRef = useRef(null);
  
  // Slide data
  const slides = [
    {
      image: "https://images.pexels.com/photos/19210728/pexels-photo-19210728/free-photo-of-gorsa-bridge-en-norvege-vue-de-drone-chute-d-eau-montagne-pont.jpeg?auto=compress&cs=tinysrgb&w=600",
      headline: ["Far from Venice", "sunset in her gaze"],
      emphasis: [[true, 0, 6], [true, 1, 6]],
      strong: [[false, 0, 0], [true, 1, 0]]
    },
    {
      image: "https://images.pexels.com/photos/8645575/pexels-photo-8645575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      headline: ["Temptation", "a desire to engage"],
      emphasis: [[false, 0, 0], [true, 1, 1]],
      strong: [[false, 0, 0], [true, 1, 3]]
    },
    {
      image: "https://images.pexels.com/photos/30858644/pexels-photo-30858644/free-photo-of-serene-pathway-through-a-misty-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      headline: ["Somebody's game", "in ancient dreams"],
      emphasis: [[false, 0, 0], [true, 1, 3]],
      strong: [[true, 0, 1], [false, 1, 0]]
    },
    {
      image: "https://images.pexels.com/photos/29828238/pexels-photo-29828238/free-photo-of-scenic-road-through-mixnitz-forest-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      headline: ["Heartful acts", "when passion calls"],
      emphasis: [[false, 0, 0], [true, 1, 1]],
      strong: [[true, 0, 1], [false, 1, 0]]
    },
    {
      image: "https://images.pexels.com/photos/29828238/pexels-photo-29828238/free-photo-of-scenic-road-through-mixnitz-forest-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      headline: ["High freedom", "when tears are gone"],
      emphasis: [[true, 0, 1], [false, 1, 0]],
      strong: [[false, 0, 0], [true, 1, 1]]
    }
  ];

  // Slide navigation
  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Get current and next slide indices
    const currentSlideIndex = current;
    const nextSlideIndex = direction === 'next' 
      ? (current < slides.length - 1 ? current + 1 : 0)
      : (current > 0 ? current - 1 : slides.length - 1);
    
    // Get slide DOM elements
    const currentSlideEl = document.querySelector(`.slide[data-index="${currentSlideIndex}"]`);
    const nextSlideEl = document.querySelector(`.slide[data-index="${nextSlideIndex}"]`);
    
    if (!currentSlideEl || !nextSlideEl) {
      setIsAnimating(false);
      return;
    }
    
    // Get slide components
    const currentImgWrap = currentSlideEl.querySelector('.slide-img-wrap');
    const currentImg = currentSlideEl.querySelector('.slide-img');
    const currentText = currentSlideEl.querySelectorAll('.text-row');
    const currentCaption = currentSlideEl.querySelector('.slide-caption');
    const currentLink = currentSlideEl.querySelector('.slide-link');
    
    const nextImgWrap = nextSlideEl.querySelector('.slide-img-wrap');
    const nextImg = nextSlideEl.querySelector('.slide-img');
    const nextText = nextSlideEl.querySelectorAll('.text-row');
    const nextCaption = nextSlideEl.querySelector('.slide-caption');
    const nextLink = nextSlideEl.querySelector('.slide-link');
    
    // Clip path configs
    const clipPathConfig = {
      initial: 'circle(25% at 70% 50%)',
      final: 'circle(5% at 70% 50%)',
      hover: 'circle(20% at 30% 50%)'
    };
    
    // Animation timeline
    const tl = gsap.timeline({
      onStart: () => {
        // Make next slide visible
        gsap.set(nextSlideEl, { opacity: 1, pointerEvents: 'auto' });
      },
      onComplete: () => {
        // Set current slide to non-current
        gsap.set(currentSlideEl, { opacity: 0, pointerEvents: 'none' });
        setCurrent(nextSlideIndex);
        setIsAnimating(false);
      }
    });
    
    // Set initial states for next slide
    tl.set(nextImgWrap, {
      y: direction === 'next' ? '100%' : '-100%',
      clipPath: clipPathConfig.final
    }, 'start')
    .set(nextImg, {
      y: direction === 'next' ? '-50%' : '50%'
    }, 'start')
    .set(nextCaption, {
      y: direction === 'next' ? '100%' : '-100%',
      opacity: 0
    }, 'start')
    .set(nextText, {
      y: direction === 'next' ? '40px' : '-40px',
      opacity: 0
    }, 'start')
    .set(nextLink, {
      opacity: 0
    }, 'start');
    
    // Animate current slide out
    tl.to(currentImgWrap, {
      duration: 1,
      ease: 'power3',
      clipPath: clipPathConfig.final
    }, 'start')
    .to(currentCaption, {
      duration: 0.8,
      ease: 'power3.inOut',
      y: direction === 'next' ? '-50%' : '50%',
      opacity: 0
    }, 'start')
    .to(currentLink, {
      duration: 0.5,
      ease: 'power3',
      opacity: 0
    }, 'start')
    .to(currentImgWrap, {
      duration: 1,
      ease: 'power2.inOut',
      y: direction === 'next' ? '-100%' : '100%'
    }, 'start+=0.6')
    .to(currentImg, {
      duration: 1,
      ease: 'power2.inOut',
      y: direction === 'next' ? '50%' : '-50%'
    }, 'start+=0.6');
    
    // Animate next slide in
    tl.to(nextImgWrap, {
      duration: 1,
      ease: 'power2.inOut',
      y: '0%'
    }, 'start+=0.6')
    .to(nextImg, {
      duration: 1,
      ease: 'power2.inOut',
      y: '0%'
    }, 'start+=0.6')
    .to(nextImgWrap, {
      duration: 1.5,
      ease: 'expo.inOut',
      clipPath: clipPathConfig.initial
    }, 'start+=1.2')
    // Animate caption into view with a slightly delayed start
    .to(nextCaption, {
      duration: 1.2,
      ease: 'power2.out',
      y: '0%',
      opacity: 1
    }, 'start+=1.0')
    // Animate each text row with staggered timing
    .to(nextText, {
      duration: 1.2,
      ease: 'expo.out',
      y: '0',
      opacity: 1,
      stagger: direction === 'next' ? 0.15 : -0.15
    }, 'start+=1.2')
    .to(nextLink, {
      duration: 0.8,
      ease: 'expo.in',
      opacity: 1
    }, 'start+=1.5');
    
    tl.play();
  };

  // Function to create styled text with emphasis and strong elements
  const createStyledText = (text, index, rowIndex) => {
    const slide = slides[index];
    let textContent = text;
    
    // Check for emphasis elements
    if (slide.emphasis[rowIndex][0]) {
      const wordIndex = slide.emphasis[rowIndex][1];
      const words = text.split(' ');
      const targetWord = words[wordIndex];
      words[wordIndex] = `<em>${targetWord}</em>`;
      textContent = words.join(' ');
    }
    
    // Check for strong elements
    if (slide.strong[rowIndex][0]) {
      const wordIndex = slide.strong[rowIndex][1];
      const words = textContent.split(' ');
      const targetWord = words[wordIndex];
      // Check if the word already has emphasis
      if (targetWord.startsWith('<em>')) {
        const cleanWord = targetWord.replace('<em>', '').replace('</em>', '');
        words[wordIndex] = `<strong>${cleanWord}</strong>`;
      } else {
        words[wordIndex] = `<strong>${targetWord}</strong>`;
      }
      textContent = words.join(' ');
    }
    
    return <span dangerouslySetInnerHTML={{ __html: textContent }} />;
  };

  // Handle hover effects
  const handleLinkHover = (index, isEntering) => {
    const slideEl = document.querySelector(`.slide[data-index="${index}"]`);
    if (!slideEl) return;
    
    const imgWrap = slideEl.querySelector('.slide-img-wrap');
    const clipPathConfig = {
      initial: 'circle(35% at 70% 50%)',
      hover: 'circle(20% at 30% 50%)'
    };
    
    gsap.killTweensOf(imgWrap);
    gsap.to(imgWrap, {
      duration: 1,
      ease: 'expo',
      clipPath: isEntering ? clipPathConfig.hover : clipPathConfig.initial
    });
  };

  return (
    <div className="h-[90vh] w-full bg-[#faf3f3] font-['poppins'] overflow-hidden relative object-cover" style={{ backgroundImage: "url('/bg3.png')" }} ref={slideshowRef}>
      {/* Slideshow */}
      <div className="w-full h-[90vh] relative overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide absolute top-0 left-0 w-full h-full flex items-center ${
              index === current ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            data-index={index}
          >
            <div 
              className="slide-img-wrap absolute top-0 left-0 w-full h-full overflow-hidden"
              style={{
                clipPath: index === current ? 'circle(25% at 70% 50%)' : 'circle(15% at 70% 50%)'
              }}
            >
              <div 
                className="slide-img absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="w-full h-full bg-black absolute z-10 opacity-50"></div>
            </div>
            
            {/* Fixed positioning for caption to ensure no overlap */}
            <div className="slide-caption absolute left-0 top-1/3 transform -translate-y-1/3 px-18 w-full z-20">
              <h1 className='text-8xl text-[#FF4E58] mb-2'>0{current+1}</h1>
              <h2 className="text-5xl md:text-6xl text-black uppercase font-light">
                {slide.headline.map((text, rowIndex) => (
                  <div className="text-row overflow-hidden text-black mb-2 h-16 transform transition-transform" key={rowIndex}>
                    {createStyledText(text, index, rowIndex)}
                  </div>
                ))}
              </h2>
              <h2 className='font-bold font-["poppins"] text-sm text-[#FF4E58] mt-10'>CHOOSE HERE</h2>
                        <div className="absolute transform -translate-x-1/2 ml-16 mt-10 flex items-center justify-center z-20">
                                <button 
                                className="w-14 h-6 mx-3 cursor-pointer bg-transparent border-0"
                                onClick={() => navigate('prev')}
                                aria-label="Previous slide"
                                >
                                <svg viewBox="0 0 55 24" fill="black">
                                    <path d="M1.176 11.532a.5.5 0 00-.352.936c5.228 1.96 9.475 5.555 12.752 10.797a.5.5 0 00.848-.53c-3.39-5.424-7.81-9.163-13.248-11.203z"/>
                                    <path d="M1.176 12.468a.5.5 0 01-.352-.936C6.052 9.572 10.3 5.978 13.576.735a.5.5 0 01.848.53c-3.39 5.424-7.81 9.163-13.248 11.203z"/>
                                    <path d="M1 12.5a.5.5 0 110-1h53a.5.5 0 110 1H1z"/>
                                </svg>
                                </button>
                                
                                <button 
                                className="w-14 h-6 mx-3 cursor-pointer bg-transparent border-0"
                                onClick={() => navigate('next')}
                                aria-label="Next slide"
                                >
                                <svg viewBox="0 0 55 24" fill="black">
                                    <path d="M53.824 11.532a.5.5 0 01.352.936c-5.228 1.96-9.475 5.555-12.752 10.797a.5.5 0 01-.848-.53c3.39-5.424 7.81-9.163 13.248-11.203z"/>
                                    <path d="M53.824 12.468a.5.5 0 00.352-.936C48.948 9.572 44.7 5.978 41.424.735a.5.5 0 00-.848.53c3.39 5.424 7.81 9.163 13.248 11.203z"/>
                                    <path d="M54 12.5a.5.5 0 100-1H1a.5.5 0 100 1h53z"/>
                                </svg>
                                </button>
                            </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Cards;