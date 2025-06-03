"use client";

import { MapPinned, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const RouteMap = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hoverTextPosition, setHoverTextPosition] = useState({ x: 0, y: 0 });
  const [showHoverText, setShowHoverText] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setHoverTextPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div id="route-map" className="mt-10">
      <div className="flex items-center gap-2 mb-6">
        <MapPinned className="text-[#b415b4] w-8 h-8" />
        <h1 className="text-3xl font-semibold text-gray-800">Route Map</h1>
      </div>

      {/* Image with hover-follow text */}
      <div
        className="relative overflow-hidden rounded-md shadow-lg group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowHoverText(true)}
        onMouseLeave={() => setShowHoverText(false)}
      >
        <Image
          height={500}
          width={500}
          onClick={openModal}
          className="w-full h-[60vh] object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          src="/flyimg/manaslu-Trek-Route-Map.jpgwpF_11_11zon.webp"
          alt="Manaslu Trek Route Map"
        />
        {showHoverText && (
          <div
            className="absolute pointer-events-none px-3 py-1 text-sm font-medium bg-white text-gray-600 rounded-full shadow-md transition"
            style={{
              left: `${hoverTextPosition.x}px`,
              top: `${hoverTextPosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            View Map
          </div>
        )}
      </div>

      {/* Centered Modal Like Places Component */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              height={500}
              width={500}
              src="/flyimg/manaslu-Trek-Route-Map.jpgwpF_11_11zon.webp"
              alt="Manaslu Trek Route Map"
              className="w-full h-auto object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteMap;
