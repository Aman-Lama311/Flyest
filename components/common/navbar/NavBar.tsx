'use client'
import React, { useState, useRef, useEffect } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { HiArrowUpRight } from "react-icons/hi2";
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Trekking, Expeditions, Activities, About, navItems } from './NavData'

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);


// Card component with hover animation
const AdventureCard = ({ title, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      // Animate the background image
      gsap.to(cardRef.current.querySelector('.bg-image'), {
        scale: 1.05,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Animate the overlay
      gsap.to(cardRef.current.querySelector('.overlay'), {
        backgroundColor: 'rgba(30, 64, 175, 0.8)',
        duration: 0.5
      });

      // Animate the arrow
      gsap.to(arrowRef.current, {
        rotation: 45,
        backgroundColor: '#ffffff',
        duration: 0.4
      });

      // Animate the title
      gsap.to(titleRef.current, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Text refresh effect
      gsap.to(titleRef.current, {
        text: {
          value: title,
          delimiter: ""
        },
        duration: 0.3,
        ease: "none"
      });

    } else {
      // Reverse animations
      gsap.to(cardRef.current.querySelector('.bg-image'), {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });

      gsap.to(cardRef.current.querySelector('.overlay'), {
        backgroundColor: 'rgba(30, 64, 175, 0.6)',
        duration: 0.5
      });

      gsap.to(arrowRef.current, {
        rotation: 0,
        backgroundColor: '#ffffff',
        duration: 0.4
      });

      gsap.to(titleRef.current, {
        y: 8,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [isHovered, title]);

  return (
    <div 
      ref={cardRef}
      className="relative overflow-hidden rounded-xl h-52 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay with animated gradient */}
      <div
      className="overlay absolute inset-0 z-10"
      style={{
      background: 'linear-gradient(to bottom, #EA3359, #EA3359)',
      opacity: 0.5,
      }}
      />
      
      {/* Background image */}
      <div 
        className="bg-image absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      {/* Content */}
      <div className="relative z-20 h-full w-full p-4 flex flex-col justify-between">
        {/* Arrow button */}
        <div className="self-end">
          <div 
            ref={arrowRef}
            className="h-10 w-10 rounded-lg flex items-center justify-center bg-white"
          >
            <HiArrowUpRight size={20} className="text-[#EA3359]" />
          </div>
        </div>
        
        {/* Title */}
        <h2 
          ref={titleRef}
          className="text-white text-xl font-bold tracking-wide"
          style={{ transform: 'translateY(8px)' }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    trekking: false,
    expeditions: false,
    activities: false,
    about: false
  });
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const cardsPanelRef = useRef(null);
  const navItemsRef = useRef([]);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const handleNavItemHover = (item) => {
    setHoveredItem(item);
    if (item.hasMegaMenu) {
      setActiveMegaMenu(item.name.toLowerCase());
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setActiveMegaMenu(null);
  };

  // Animate button on hover - consistent across all buttons
  const animateButtonOnHover = (element, isEnter) => {
    if (!element) return;
    
    const arrowElement = element.querySelector('.arrow-icon');
    const textElement = element.querySelector('.button-text');
    
    if (!textElement) return;
    
    // Text refresh effect always happens
    if (isEnter) {
      const originalText = textElement.textContent;
      gsap.to(textElement, {
        text: {
          value: originalText,
          delimiter: ""
        },
        duration: 0.2,
        ease: "none"
      });
    }
    
    // Only animate arrow if it exists
    if (arrowElement) {
      if (isEnter) {
        // Rotate arrow to point upward and move it slightly up
        gsap.to(arrowElement, {
          rotation: 180,
          y: -4,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Rotate arrow back to pointing down
        gsap.to(arrowElement, {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  };

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInsideNavItem = navItemsRef.current.some(ref => 
        ref && ref.contains(event.target)
      );
      
      if (
        cardsPanelRef.current && 
        !cardsPanelRef.current.contains(event.target) &&
        !isInsideNavItem
      ) {
        setActiveMegaMenu(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='font-["Archivo"]'>
      <nav className='relative'>
        <div className='h-24 w-full flex items-center justify-between px-16 absolute z-40 hover:cursor-pointer'>
          <div>
            <img src="/logo1.png" alt="Logo" className='h-10' />
          </div>

          {/* Desktop Navigation Menu */}
          <div className='hidden md:flex items-center justify-center gap-2 text-gray-200 text-[1.2rem]'>
            {navItems.map((item, index) => (
              <div 
                key={index}
                ref={el => navItemsRef.current[index] = el}
                className={item.hasMegaMenu ? 'relative' : ''}
                onMouseEnter={() => {
                  animateButtonOnHover(navItemsRef.current[index], true);
                  handleNavItemHover(item);
                }}
                onMouseLeave={() => {
                  animateButtonOnHover(navItemsRef.current[index], false);
                  if (!item.hasMegaMenu) {
                    handleMouseLeave();
                  }
                }}
              >
                <button className='h-14 px-4 bg-white text-[#4A4A4A] flex items-center justify-center gap-4 rounded-xl'>
                  <a 
                    className='button-text font-medium tracking-wide text-[1.1rem] transition-colors duration-300' 
                    href={item.href}
                  >
                    {item.name}
                  </a>
                  {item.hasArrow && (
                    <div className='h-10 w-10 bg-[#e1e0e0] rounded-lg flex items-center justify-center overflow-hidden'>
                      <IoMdArrowDown 
                        size={25} 
                        className='arrow-icon text-[#4A4A4A]'
                      />
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Let's Talk Button */}
          <button 
            className='h-14 px-4 bg-[#EA3359] text-white flex items-center justify-center gap-4 rounded-xl'
            onMouseEnter={(e) => {
              const arrowElement = e.currentTarget.querySelector('.talk-button-arrow');
              const textElement = e.currentTarget.querySelector('.talk-button-text');
              
              gsap.to(arrowElement, {
                rotation: 270,
                y: -2,
                duration: 0.3,
                ease: "power2.out"
              });
              
              gsap.to(textElement, {
                text: {
                  value: "Let's Talk",
                  delimiter: ""
                },
                duration: 0.2,
                ease: "none"
              });
            }}
            onMouseLeave={(e) => {
              const arrowElement = e.currentTarget.querySelector('.talk-button-arrow');
              
              gsap.to(arrowElement, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          >
            <a className='talk-button-text font-medium tracking-wide text-[1.1rem] transition-colors duration-300' href="#">Let's Talk</a>
            <div className='h-10 w-10 bg-white rounded-lg flex items-center justify-center overflow-hidden'>
              <IoMdArrowDown size={25} className='talk-button-arrow text-[#EA3359]' />
            </div>
          </button> 
        </div>
      </nav>

      {/* Mobile menu button - appears only on mobile */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button 
          onClick={toggleNav}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {navOpen ? <IoMdClose size={24} /> : <VscMenu size={24} />}
        </button>
      </div>

      {/* Mobile navigation - appears only on mobile */}
      {navOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.hasMegaMenu ? (
                  <>
                    <button 
                      className="py-3 border-b border-gray-200 text-left flex justify-between items-center w-full"
                      onClick={() => toggleMobileDropdown(item.name.toLowerCase())}
                      onMouseEnter={(e) => {
                        if (!mobileDropdowns[item.name.toLowerCase()]) {
                          const arrowElement = e.currentTarget.querySelector('.mobile-arrow');
                          gsap.to(arrowElement, {
                            rotation: 180,
                            duration: 0.3
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!mobileDropdowns[item.name.toLowerCase()]) {
                          const arrowElement = e.currentTarget.querySelector('.mobile-arrow');
                          gsap.to(arrowElement, {
                            rotation: 0,
                            duration: 0.3
                          });
                        }
                      }}
                    >
                      <span>{item.name}</span>
                      <IoIosArrowDown className={`mobile-arrow ${mobileDropdowns[item.name.toLowerCase()] ? "transform rotate-180" : ""}`} />
                    </button>
                    
                    {mobileDropdowns[item.name.toLowerCase()] && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.data.map((card, cardIndex) => (
                          <a key={cardIndex} href="#" className="block py-2 px-2 hover:bg-gray-100 rounded">
                            {card.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button className="py-3 border-b border-gray-200 text-left w-full">
                    <span>{item.name}</span>
                  </button>
                )}
              </div>
            ))}
            
            {/* Mobile Let's Talk Button with Icon Animation */}
            <button className="mt-6 py-3 px-4 bg-[#EA3359] text-white rounded-xl flex items-center justify-center gap-2 group">
              <span>Let's Talk</span>
              <div className="overflow-hidden">
                <IoCallOutline size={20} className="transform transition-transform duration-300 group-hover:-translate-y-1" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Mega menu dropdowns */}
      {activeMegaMenu && (
        <div 
          ref={cardsPanelRef}
          className="absolute top-20 left-0 w-[55vw] m-auto right-0 z-30 bg-white shadow-lg rounded-lg p-4"
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className='flex items-center justify-between font-["poppins"]'>
          <h1 className='text-[#EA3359] mb-4 text-[1.2rem] font-medium'>Popular</h1>
          <p className='group relative inline-block text-md font-medium text-[#4A4A4A] -mt-4 hover:cursor-pointer'>View More
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FF4E58] transition-all duration-300 group-hover:w-full"></span>
          </p>
          </div>
    
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-6">
              {navItems.find(item => item.name.toLowerCase() === activeMegaMenu)?.data.map((item, index) => (
                <AdventureCard key={index} title={item.title} imageSrc={item.imageSrc} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;