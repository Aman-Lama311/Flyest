"use client";

import { useState } from "react";
import { Star, StarIcon, Locate } from "lucide-react";

const Title = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="px-4 sm:px-6 md:px-20 sticky top-0 bg-white z-30">
      <div className="border-b py-4 border-gray-300 flex flex-col md:flex-row justify-between gap-3 md:gap-6">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Manaslu Circuit Trek
          </h1>
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500">
            (12 Days)
          </span>
        </div>

        {/* Review & Location Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          {/* Rating */}
          <div
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <StarIcon size={18} className="text-orange-500" />
            ) : (
              <Star size={18} />
            )}
            <span className="text-sm sm:text-base">4.8</span>
            <span className="text-sm sm:text-base text-gray-600">
              (226 reviews)
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-700">
            <Locate size={18} />
            <span>Gorkha, Nepal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
