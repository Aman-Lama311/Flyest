'use client'
import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {

    let timeoutId: NodeJS.Timeout | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        timeoutId = null;
      }, 5); 
    };
    

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    

    const handleMouseDown = () => setIsHolding(true);
    const handleMouseUp = () => setIsHolding(false);
    

    const handleElementHover = () => {
      const elementsUnderCursor = document.elementsFromPoint(cursorPosition.x, cursorPosition.y);
      const isHoveringClickable = elementsUnderCursor.some(el => {
        const style = window.getComputedStyle(el);
        return style.cursor === 'pointer' || 
               el.tagName === 'BUTTON' || 
               el.tagName === 'A' ||
               (el as HTMLElement).onclick;
      });
      setIsHovering(isHoveringClickable);
    };
    

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleElementHover);
    

    if (document.hasFocus()) {
      setIsVisible(true);
    }
    

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleElementHover);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [cursorPosition.x, cursorPosition.y]);
  
  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 
          transition-opacity duration-300 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: '50px',
          height: '50px',
          border: '2px solid white',
          marginLeft: '-12px',
          marginTop: '-12px',
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${isHolding ? 0.6 : isHovering ? 1.2 : 1})`,
          transition: 'transform 0.15s ease-out, opacity 0.3s ease-out',
          boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
        }}
      /> <div
      className={`fixed top-0 left-0 text-sm font-medium text-gray-200 rounded-full pointer-events-none z-50 
        transition-opacity duration-300 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        marginLeft: '68px',
        marginTop: '5px',
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${isHolding ? 0.6 : isHovering ? 1.2 : 1})`,
        transition: 'transform 0.15s ease-out, opacity 0.3s ease-out'
      }}
      
      ref={cursorRef}>
          <p>Click to travel</p>
      </div>
      
     
    </>
  );
};

export default CustomCursor;