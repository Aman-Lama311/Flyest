"use client";

import { useState } from "react";
import { Send, Share, Heart, Star, StarIcon, Locate } from "lucide-react";

const Title = () => {
  const [liked, setLiked] = useState(false); // toggle like state

  return (
    <div className="px-20 sticky top-0 bg-white z-20">
      <div className="border-b py-4 border-gray-300">
        {/* Helicopter Tour Title Row */}
        <div className="flex justify-between">
          <div className="flex gap-1">
            <h1 className="text-4xl font-bold">
              Everest Base Camp Helicopter Tour
            </h1>
            <span className="text-4xl font-semibold text-gray-500">
              (1 Day)
            </span>
          </div>
          <div className="flex gap-4">
            <p className="border p-3 rounded-full cursor-pointer">
              <Send size={18} />
            </p>
            <p className="border p-3 rounded-full cursor-pointer">
              <Share size={18} />
            </p>
            <p className="border p-3 rounded-full cursor-pointer">
              <Heart size={18} />
            </p>
          </div>
        </div>

        {/* Review Section */}
        <div className="flex gap-4 mt-4">
          {/* Star Rating */}
          <div className="flex gap-2 items-center">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <StarIcon size={18} className="text-orange-500" />
              ) : (
                <Star size={18} />
              )}
              <p>4.9</p>
            </div>
            <span className="text-sm text-gray-700">(310 reviews)</span>
          </div>

          {/* Location */}
          <span className="flex gap-2 items-center">
            <Locate size={18} />
            <span className="text-sm text-gray-700">
              Everest Region, Nepal
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
