import React from "react";
import { Users, MapPin, Globe, Star } from "lucide-react";

const StatisticsAndPartners = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Statistics Section */}
      <div className="w-full z-10 bg-black/80 py-12 px-4 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {/* Total Users */}
          <div className="flex flex-col items-center text-[#00FFA3]">
            <Users className="h-8 w-8 mb-2" />
            <h2 className="text-3xl font-bold">28k</h2>
            <p className="text-sm">Total Users</p>
          </div>

          {/* Total Trekking */}
          <div className="flex flex-col items-center text-[#FF6B6B]">
            <MapPin className="h-8 w-8 mb-2" />
            <h2 className="text-3xl font-bold">24k</h2>
            <p className="text-sm">Total Trekking</p>
          </div>

          {/* Social Likes */}
          <div className="flex flex-col items-center text-[#3B82F6]">
            <Globe className="h-8 w-8 mb-2" />
            <h2 className="text-3xl font-bold">64k</h2>
            <p className="text-sm">Social Likes</p>
          </div>

          {/* 5 Star Ratings */}
          <div className="flex flex-col items-center text-[#FBBF24]">
            <Star className="h-8 w-8 mb-2" />
            <h2 className="text-3xl font-bold">16k</h2>
            <p className="text-sm">5 Star Ratings</p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-black/80 z-10">
        <div className="w-full bg-red-500/10 text-white px-4 md:px-24 py-10">
          <div className=" mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h1 className="font-bold text-5xl uppercase">Associated With</h1>

              <div className="flex flex-wrap justify-center gap-8">
                {[
                  "associated1.b77b7a15.png",
                  "associated2.ab7d60cb.png",
                  "certified.fd697c23.png",
                ].map((img, idx) => (
                  <img
                    key={idx}
                    src={`https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${img}&w=256&q=75`}
                    alt={`Partner ${idx + 1}`}
                    className="h-14"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsAndPartners;
