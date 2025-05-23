"use client";

import { useState } from "react";
import { Star, StarIcon, Locate } from "lucide-react";

const Title = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="px-4 md:px-20 sticky top-0 bg-white z-20">
      <div className="border-b py-4 border-gray-300 flex flex-col md:flex-row justify-between gap-4">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            Manaslu Circuit Trek
          </h1>
          <span className="text-2xl md:text-3xl font-semibold text-gray-500">
            (12 Days)
          </span>
        </div>

        {/* Review & Location */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          {/* Star Rating */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <StarIcon size={18} className="text-orange-500" />
            ) : (
              <Star size={18} />
            )}
            <p className="text-sm">4.8</p>
            <span className="text-sm text-gray-700">(226 reviews)</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Locate size={18} />
            <span>Gorkha, Nepal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
