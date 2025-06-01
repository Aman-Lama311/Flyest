"use client";

import { useState } from "react";
import { ChevronRightCircle } from "lucide-react";
import { useBookingStore } from "@/store/BookingStore";
import BookingSummary from "./BookingSummary";

const RightBar = () => {
  const { bookingData } = useBookingStore();
  const [hovered, setHovered] = useState<"date" | "enquiry" | null>(null);

  const isDateActive = hovered === "date" || hovered === null;
  const isEnquiryActive = hovered === "enquiry";

  const scrollToDateSection = () => {
    const element = document.getElementById("date-&-prices");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white">
      {bookingData.selectedDate ? (
        <BookingSummary />
      ) : (
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Starting Price at
          </h1>
          <hr className="text-gray-200" />
          <div className="mt-4 space-y-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#EA3359]">
                $1000 USD
              </h1>
              <span className="text-sm sm:text-base text-gray-600">
                per person
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <ChevronRightCircle size={18} className="text-[#EA3359]" />
                Book Instantly Directly with Provider
              </li>
              <li className="flex items-center gap-2">
                <ChevronRightCircle size={18} className="text-[#EA3359]" />
                Best Price Guarantee
              </li>
              <li className="flex items-center gap-2">
                <ChevronRightCircle size={18} className="text-[#EA3359]" />
                Full Customizable Trip
              </li>
              <li className="flex items-center gap-2">
                <ChevronRightCircle size={18} className="text-[#EA3359]" />
                Extend Trip Without Any Charges
              </li>
            </ul>
          </div>

          <div className="text-sm flex flex-col sm:flex-row md:flex-col gap-3 mt-6 sm:mt-8">
            <button
              onClick={scrollToDateSection}
              onMouseEnter={() => setHovered("date")}
              onMouseLeave={() => setHovered(null)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all duration-300 cursor-pointer text-sm md:text-base ${
                isDateActive
                  ? "bg-[#EA3359] text-white border-[#EA3359]"
                  : "bg-transparent text-[#EA3359] border-[#EA3359]"
              }`}
            >
              Choose Your Date
            </button>

            <button
              onMouseEnter={() => setHovered("enquiry")}
              onMouseLeave={() => setHovered(null)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all duration-300 cursor-pointer text-sm md:text-base ${
                isEnquiryActive
                  ? "bg-[#EA3359] text-white border-[#EA3359]"
                  : "bg-transparent text-[#EA3359] border-[#EA3359]"
              }`}
            >
              Enquiry Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightBar;
