"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// This component will only be rendered on the client side
const HeroContent = dynamic(() => import('./HeroContent'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  )
});

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return <HeroContent />;
};

export default Hero;
