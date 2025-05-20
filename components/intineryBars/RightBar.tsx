"use client";

import { useState } from "react";
import { ChevronRightCircle } from "lucide-react";
import { useBookingStore } from "@/store/BookingStore";
import BookingSummary from "./BookingSummary";


const RightBar = () => {
  const {bookingData} = useBookingStore()
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
    <div className="w-1/4 px-4 rounded-xl pb-4 sticky top-[150px] h-2/6">
      {bookingData.selectedDate ?<BookingSummary /> :   <div>

     
<h1 className="text-2xl font-semibold mb-4">Starting Price at</h1>
<hr className="text-gray-400" />
<div className="mt-4 space-y-4">
  <div className="flex text-nowrap items-center">
    <h1 className="text-3xl font-bold text-[#EA3359]">$1000 USD</h1>
    &nbsp;
    <span>per person</span>
  </div>
  <ul className="space-y-3 text-nowrap text-sm text-gray-700">
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

{/* Buttons */}
<div className="text-sm flex flex-col gap-3 mt-8">
  {/* Choose Your Date Button */}
  <button
    onClick={scrollToDateSection}
    onMouseEnter={() => setHovered("date")}
    onMouseLeave={() => setHovered(null)}
    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
      isDateActive
        ? "bg-[#EA3359] text-white border-[#EA3359]"
        : "bg-transparent text-[#EA3359] border-[#EA3359]"
    }`}
  >
    Choose Your Date
  </button>

  {/* Enquiry Now Button */}
  <button
    onMouseEnter={() => setHovered("enquiry")}
    onMouseLeave={() => setHovered(null)}
    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
      isEnquiryActive
        ? "bg-[#EA3359] text-white border-[#EA3359]"
        : "bg-transparent text-[#EA3359] border-[#EA3359]"
    }`}
  >
    Enquiry Now
  </button>
</div>
</div>}
    
    </div>
  );
};

export default RightBar;
