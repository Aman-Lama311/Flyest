"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const RelatedTrips = () => {
  const relatedTrips = [
    {
      title: "Manaslu Expedition",
      description:
        "Fully guided expedition to the eighth highest mountain in the world with experienced Sherpa team.",
      price: "$2,499",
      duration: "21 days",
    },
    {
      title: "Annapurna Circuit",
      description:
        "Classic trek through diverse landscapes with stunning mountain views.",
      price: "$1,799",
      duration: "18 days",
    },
    {
      title: "Everest Base Camp",
      description: "Iconic trek to the foot of the world's highest mountain.",
      price: "$2,199",
      duration: "16 days",
    },
  ];

  return (
    <div className="mt-10 rounded-xl">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Related Trips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTrips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-400"
          >
            <div className="h-40 bg-gray-200">
              <img
                className="object-cover h-full w-full"
                src="./manaslu.jpg"
                alt=""
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {trip.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-2">
                {trip.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-[#EA3359] font-medium">{trip.price}</span>
                <span className="text-gray-600 text-sm">{trip.duration}</span>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-[#EA3359] hover:bg-[#d02f4f] text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors text-nowrap cursor-pointer">
                  Book now
                </button>
                <button className="flex items-center justify-center text-gray-600 hover:text-[#EA3359] font-medium text-sm transition-colors text-nowrap">
                  View details <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="inline-flex items-center text-gray-600 hover:text-[#EA3359] font-medium">
          View all related trips <ArrowRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RelatedTrips;
