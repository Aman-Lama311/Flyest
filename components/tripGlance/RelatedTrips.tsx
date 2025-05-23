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
    <section className="mt-10">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Related Trips
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTrips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-300 overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 bg-gray-100">
              <img
                className="object-cover h-full w-full"
                src={`https://unsplash.it/400/300?random=${index + 1}`}
                alt={trip.title}
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {trip.title}
              </h3>
              <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                {trip.description}
              </p>

              <div className="flex justify-between items-center text-sm mb-4">
                <span className="text-[#EA3359] font-medium">{trip.price}</span>
                <span className="text-gray-600">{trip.duration}</span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-[#EA3359] hover:bg-[#d02f4f] text-white py-2 px-3 rounded-md text-sm font-medium transition-colors">
                  Book now
                </button>
                <button className="flex items-center text-gray-600 hover:text-[#EA3359] text-sm font-medium transition-colors whitespace-nowrap">
                  View details <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="inline-flex items-center text-gray-600 hover:text-[#EA3359] font-medium transition-colors">
          View all related trips <ArrowRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default RelatedTrips;
