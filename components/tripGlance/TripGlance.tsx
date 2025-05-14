"use client";

import {
  MapPin,
  Clock,
  Activity,
  Mountain,
  Users,
  Bus,
  Hotel,
  Utensils,
  TrendingUp,
} from "lucide-react";

const TripGlance = () => {
  return (
    <div id="trip-glance" className="mt-10">
      <h1 className="text-3xl font-semibold py-4">Your Trip at Glance</h1>

      {/* Shadow added here */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        {/* First column */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <MapPin size={28} className="text-red-500" />
            <div>
              <h1 className="font-medium">Destination</h1>
              <span className="text-sm text-gray-600">Nepal</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <Clock size={28} className="text-blue-500" />
            <div>
              <h1 className="font-medium">Duration</h1>
              <span className="text-sm text-gray-600">12 days</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <TrendingUp size={28} className="text-purple-600" />
            <div>
              <h1 className="font-medium">Trip Difficulty</h1>
              <span className="text-sm text-gray-600">
                Moderate to Strenuous
              </span>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <Activity size={28} className="text-pink-500" />
            <div>
              <h1 className="font-medium">Activities</h1>
              <span className="text-sm text-gray-600">Tour and Trek</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <Mountain size={28} className="text-green-600" />
            <div>
              <h1 className="font-medium">Max Elevation</h1>
              <span className="text-sm text-gray-600">5364m</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <Users size={28} className="text-yellow-600" />
            <div>
              <h1 className="font-medium">Group Size</h1>
              <span className="text-sm text-gray-600">Max 15</span>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="flex flex-col  w-full">
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <Bus size={28} className="text-indigo-500" />
            <div>
              <h1 className="font-medium">Vehicle</h1>
              <span className="text-sm text-gray-600">
                Tourist Vehicle and Helicopter
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <Hotel size={28} className="text-teal-600" />
            <div>
              <h1 className="font-medium">Accommodation</h1>
              <span className="text-sm text-gray-600">
                Luxury Hotels in Kathmandu
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3">
            <Utensils size={28} className="text-orange-500" />
            <div>
              <h1 className="font-medium">Meals</h1>
              <span className="text-sm text-gray-600">
                All standard meals throughout the trip
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripGlance;
