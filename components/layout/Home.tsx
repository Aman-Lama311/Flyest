"use client";

import React, { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components that might access browser APIs with SSR disabled
const Hero = dynamic(() => import("../HeroComponents/Hero"), { ssr: false });
const About = dynamic(() => import("../about/page"), { ssr: false });
const TrekCard = dynamic(() => import("../card/TrekCard"), { ssr: false });
const Popular = dynamic(() => import("../card/Popular"), { ssr: false });
const ActivityCarousel = dynamic(() => import("../layout/Activity"), { ssr: false });
const Book = dynamic(() => import("../layout/Book"), { ssr: false });
const WhatWeDo = dynamic(() => import("../whatwedo/WhatWeDo"), { ssr: false });
const CallToAction = dynamic(() => import("../calltoaction/CallToAction"), { ssr: false });

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4E58]"></div>
  </div>
);

const Home = () => {
  // Use Suspense to show loading state for dynamically imported components
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TrekCard />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Popular />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CallToAction />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ActivityCarousel />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Book />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <WhatWeDo />
      </Suspense>
    </div>
  );
};

export default Home;
