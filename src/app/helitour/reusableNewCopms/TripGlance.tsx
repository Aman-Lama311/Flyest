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
      <h1 className="text-3xl font-semibold py-4">Your Trip at a Glance</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm items-stretch">
        {/* First column */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <MapPin size={28} className="text-red-500" />
            <div>
              <h1 className="font-medium">Destination</h1>
              <span className="text-sm text-gray-600">Everest Region, Nepal</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <Clock size={28} className="text-blue-500" />
            <div>
              <h1 className="font-medium">Duration</h1>
              <span className="text-sm text-gray-600">1 Day (Approx. 4–5 hours)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <TrendingUp size={28} className="text-purple-600" />
            <div>
              <h1 className="font-medium">Experience Level</h1>
              <span className="text-sm text-gray-600">Suitable for All</span>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <Activity size={28} className="text-pink-500" />
            <div>
              <h1 className="font-medium">Activities</h1>
              <span className="text-sm text-gray-600">Scenic Flight, Photography, Sightseeing</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <Mountain size={28} className="text-green-600" />
            <div>
              <h1 className="font-medium">Landing Point</h1>
              <span className="text-sm text-gray-600">Kalapatthar (5,545m) or EBC (weather permitting)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <Users size={28} className="text-yellow-600" />
            <div>
              <h1 className="font-medium">Group Size</h1>
              <span className="text-sm text-gray-600">Max 5 per helicopter</span>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <Bus size={28} className="text-indigo-500" />
            <div>
              <h1 className="font-medium">Vehicle</h1>
              <span className="text-sm text-gray-600">
                Private Car (Hotel Transfer) & Helicopter
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <Hotel size={28} className="text-teal-600" />
            <div>
              <h1 className="font-medium">Accommodation</h1>
              <span className="text-sm text-gray-600">
                Not required (Day Tour)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md px-4 py-3 h-full">
            <Utensils size={28} className="text-orange-500" />
            <div>
              <h1 className="font-medium">Meals</h1>
              <span className="text-sm text-gray-600">
                Breakfast at Everest View Hotel (optional)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripGlance;
