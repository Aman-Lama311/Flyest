import React from "react";
import { Users, MapPin, Globe, Star } from "lucide-react";

const StatisticsAndPartners = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Statistics Section */}
      <div className="w-full bg-[url('/navbg.svg')] py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Total Users */}
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-full">
              <Users className="h-6 w-6 text-gray-500" />
            </div>
            <h2 className="text-4xl font-bold mt-4">28k</h2>
            <p className="text-gray-500 mt-2">Total Users</p>
          </div>

          {/* Total Trekking */}
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-full">
              <MapPin className="h-6 w-6 text-gray-500" />
            </div>
            <h2 className="text-4xl font-bold mt-4">24k</h2>
            <p className="text-gray-500 mt-2">Total Trekking</p>
          </div>

          {/* Social Likes */}
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-full">
              <Globe className="h-6 w-6 text-gray-500" />
            </div>
            <h2 className="text-4xl font-bold mt-4">64k</h2>
            <p className="text-gray-500 mt-2">Social Likes</p>
          </div>

          {/* 5 Star Ratings */}
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-full">
              <Star className="h-6 w-6 text-gray-500" />
            </div>
            <h2 className="text-4xl font-bold mt-4">16k</h2>
            <p className="text-gray-500 mt-2">5 Star Ratings</p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-bold text-xl">Associated With</div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="grayscale opacity-70 h-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/WYSE_Travel_Confederation_logo.svg/512px-WYSE_Travel_Confederation_logo.svg.png"
                  alt="WYSE Travel"
                  className="h-full"
                />
              </div>
              <div className="grayscale opacity-70 h-8">
                <img
                  src="https://www.asta.org/images/default-source/logos/asta-logo.svg"
                  alt="ASTA"
                  className="h-full"
                />
              </div>
              <div className="grayscale opacity-70 h-8">
                <img
                  src="https://tico.ca/assets/img/logo.png"
                  alt="TICO"
                  className="h-full"
                />
              </div>
              <div className="grayscale opacity-70 h-8">
                <img
                  src="https://ustoa.com/images/logos/ustoa-logo.svg"
                  alt="USTOA"
                  className="h-full"
                />
              </div>
              <div className="grayscale opacity-70 h-8">
                <img
                  src="https://cruising.org/images/default-source/default-album/clia-logo.png"
                  alt="CLIA"
                  className="h-full"
                />
              </div>
              <div className="grayscale opacity-70 h-8">
                <img
                  src="https://adventuretravel.biz/wp-content/uploads/2020/09/ATTA-logo.png"
                  alt="Adventure Travel Trade Association"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsAndPartners;
