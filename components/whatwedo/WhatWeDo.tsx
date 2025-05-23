import React from "react";
import { Users, MapPin, Globe, Star } from "lucide-react";

const StatisticsAndPartners = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Statistics Section */}
      <div className="w-full bg-[url('/navbg.svg')] py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {/* Total Users */}
          <div className="flex flex-col items-center text-[#00FFA3]">
            <Users className="h-8 w-8 mb-2" />
            <h2 className="text-3xl font-bold">28k</h2>
            <p className="text-sm">Total Users</p>
          </div>

          {/* Total Trekking */}
          <div className="flex flex-col items-center text-[#FF6B6B]">
            <MapPin className="h-8 w-8  mb-2" />
            <h2 className="text-3xl font-bold">24k</h2>
            <p className="text-sm ">Total Trekking</p>
          </div>

          {/* Social Likes */}
          <div className="flex flex-col items-center text-[#3B82F6]">
            <Globe className="h-8 w-8  mb-2" />
            <h2 className="text-3xl font-bold">64k</h2>
            <p className="text-sm ">Social Likes</p>
          </div>

          {/* 5 Star Ratings */}
          <div className="flex flex-col items-center text-[#FBBF24]">
            <Star className="h-8 w-8  mb-2" />
            <h2 className="text-3xl font-bold">16k</h2>
            <p className="text-sm ">5 Star Ratings</p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full bg-zinc-800 text-white py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-bold text-xl">Associated With</div>
            <div className="flex flex-wrap justify-center gap-8 ">
              <img
                src="https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fassociated1.b77b7a15.png&w=256&q=75"
                alt="WYSE Travel"
                className="h-10"
              />
              <img
                src="https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fassociated2.ab7d60cb.png&w=256&q=75"
                alt="ASTA"
                className="h-10"
              />
              <img
                src="https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcertified.fd697c23.png&w=1080&q=75"
                alt="TICO"
                className="h-10"
              />
              <img
                src="https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fassociated1.b77b7a15.png&w=256&q=75"
                alt="WYSE Travel"
                className="h-10"
              />
              <img
                src="https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fassociated2.ab7d60cb.png&w=256&q=75"
                alt="ASTA"
                className="h-10"
              />
              <img
                src="https://infinityadventurenepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcertified.fd697c23.png&w=1080&q=75"
                alt="TICO"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsAndPartners;
