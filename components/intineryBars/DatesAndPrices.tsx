"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Calendar } from "lucide-react";

const DatesAndPrices = () => {
  const [selectedDate, setSelectedDate] = useState("01/05/2025");

  const tripDates = [
    {
      month: "May 2025",
      dates: [
        {
          departure: { day: "Sunday", date: "01 May, 2025" },
          arrival: { day: "Monday", date: "09 May, 2025" },
          availability: 0,
          availabilityText: "0 spot left",
          price: "US $1,499.00",
          status: "sold",
        },
        {
          departure: { day: "Sunday", date: "01 May, 2025" },
          arrival: { day: "Monday", date: "09 May, 2025" },
          availability: 0,
          availabilityText: "0 spot left",
          price: "US $1,499.00",
          status: "sold",
        },
        {
          departure: { day: "Sunday", date: "01 May, 2025" },
          arrival: { day: "Monday", date: "09 May, 2025" },
          availability: 2,
          availabilityText: "2 spots left",
          price: "US $1,499.00",
          status: "available",
        },
      ],
    },
    {
      month: "June 2025",
      dates: [
        {
          departure: { day: "Sunday", date: "01 June, 2025" },
          arrival: { day: "Monday", date: "09 June, 2025" },
          availability: 17,
          availabilityText: "17 spots left",
          price: "US $1,499.00",
          status: "available",
        },
      ],
    },
  ];

  return (
    <div id="date-&-prices" className="mt-10">
      <h2 className="text-3xl font-semibold text-gray-900">Dates & Prices</h2>

      <p className="text-gray-700 mt-3 text-base leading-relaxed max-w-3xl">
        An enim nullam tempor gravida donec enim, congue magna at pretium purus
        pretium ligula rutrum luctus risusd diam eget risus varius blandit sit
        amet non magna.
      </p>

      <div className="mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SELECT DATE
            </label>
            <div className="relative">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="appearance-none border border-gray-300 rounded-lg w-full sm:w-48 py-2.5 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359] cursor-pointer"
              >
                <option value="01/05/2025">01/05/2025</option>
                <option value="01/06/2025">01/06/2025</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-[#EA3359]" />
            <span>15 people recently enquired</span>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-[#EA3359] grid grid-cols-3 text-sm font-medium text-white p-4">
            <div>
              <h3>TRIP DATES</h3>
              <p className="text-xs text-pink-100 mt-1">Arrival - Departure</p>
            </div>
            <div className="text-center">
              <h3>AVAILABILITY</h3>
              <p className="text-xs text-pink-100 mt-1">Spots remaining</p>
            </div>
            <div className="text-right">
              <h3>PRICE</h3>
              <p className="text-xs text-pink-100 mt-1">Per Person</p>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {tripDates.map((month, monthIndex) => (
              <React.Fragment key={monthIndex}>
                <div className="bg-gray-50 p-4 font-medium text-gray-900">
                  {month.month}
                </div>

                {month.dates.map((trip, tripIndex) => (
                  <div
                    key={tripIndex}
                    className="grid grid-cols-3 items-center p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div>
                          <p className="font-medium text-gray-900">
                            {trip.departure.day}
                          </p>
                          <p className="text-sm text-gray-700">
                            {trip.departure.date}
                          </p>
                        </div>
                        <ChevronRight
                          size={18}
                          className="mx-3 text-gray-400"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {trip.arrival.day}
                          </p>
                          <p className="text-sm text-gray-700">
                            {trip.arrival.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          trip.availability > 5
                            ? "bg-pink-100 text-[#EA3359]"
                            : trip.availability > 0
                            ? "bg-amber-100 text-amber-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {trip.availability > 0
                          ? trip.availabilityText
                          : "Sold out"}
                      </span>
                    </div>

                    <div className="flex items-center justify-end space-x-3">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {trip.price}
                        </p>
                      </div>
                      <button
                        className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                          trip.status === "available"
                            ? "bg-[#EA3359] hover:bg-[#d92f50] text-white shadow-sm hover:shadow-md"
                            : "bg-gray-200 text-gray-600 cursor-not-allowed"
                        }`}
                        disabled={trip.status !== "available"}
                      >
                        {trip.status === "available" ? "Book now" : "Sold Out"}
                      </button>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatesAndPrices;
