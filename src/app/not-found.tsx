"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "Page Not Found | 404";
  }, []);

  return (
    <div className="min-h-screen bg-black/80 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/heroimages/everest.webp"
          alt="Himalayan Mountains"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-black/70 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl overflow-hidden p-8 text-center text-white"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                ease: "easeInOut"
              }}
              className="text-8xl"
            >
              🏔️
            </motion.div>
          </div>

          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-gradient-to-r from-[#FF4E58] to-[#FF8A5C] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Return to Homepage
          </motion.button>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Need help?{' '}
              <a 
                href="/contact" 
                className="text-[#FF8A5C] hover:underline font-medium"
              >
                Contact our team
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;