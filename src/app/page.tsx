"use client";

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the Home component with SSR disabled
const Home = dynamic(
  () => import("../../components/layout/Home"),
  { ssr: false }
);

// Fallback component while loading
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4E58]"></div>
  </div>
);

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This ensures we're on the client before rendering the Home component
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show loading state until component is mounted on client
  if (!isMounted) {
    return <LoadingFallback />;
  }

  return (
    <div>
      <Home />
    </div>
  );
};

export default Page;
