"use client";
import React, { useState } from "react";
import { useBookingStore } from "@/store/BookingStore";
import { IoMdClose } from "react-icons/io"; // or any other icon

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, isSameDay } from "date-fns";
import { addonOptions } from "@/static-data/addOnOptions";
import BookingSummary from "./BookingSummary";
import countries from 'world-countries';





const DatesAndPrices = () => {
  const formattedPhoneCountries = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2, // 2-letter code
    dialCode: country.idd.root + (country.idd.suffixes?.[0] || ""),
  }));

  const formattedCountries = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2, // 2-letter code
    dialCode: country.idd.root + (country.idd.suffixes?.[0] || ""),
  }));
  
  const price = 1000;
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const { bookingData, setBookingData, resetBooking } = useBookingStore();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const { name, value } = target;
    const newValue = target.type === 'checkbox' ? (target as HTMLInputElement).checked : value;
    setBookingData({
      [name]: newValue,
    });
  };

  const handleAddonChange = (addonId: string, isChecked: boolean) => {
    setBookingData({
      addons: isChecked
        ? [...bookingData.addons, addonId]
        : bookingData.addons.filter(id => id !== addonId)
    });
  };

  const dayClassName = (date: Date) => {
    if (!departureDate || !arrivalDate) return '';
    
    if (isSameDay(date, departureDate) || isSameDay(date, arrivalDate)) {
      return 'bg-[#EA3359] text-white rounded-full';
    }
    
    if (date > departureDate && date < arrivalDate) {
      return 'bg-pink-100 text-[#EA3359]';
    } 
    return '';
  };

  const handleClearForm = () => {
    setDepartureDate(null);
    setArrivalDate(null);
    resetBooking();
  };

  return (
    <div id="date-&-prices" className="mt-10">
      <h2 className="text-3xl font-semibold text-gray-900">Dates & Prices</h2>

      <p className="text-gray-700 mt-3 text-base leading-relaxed max-w-3xl">
        Select your preferred travel dates and customize your trip with optional add-ons.
      </p>

      {/* Calendar Section */}
      <div className="bg-white rounded-xl w-full p-6 mt-6">
        <div className="mb-4 custom-datepicker w-full justify-center items-center flex">
          <DatePicker
            selected={departureDate}
            onChange={(dates: [Date | null, Date | null] | null) => {
              if (dates) {
                const [start, end] = dates;
                setDepartureDate(start);
                setArrivalDate(end);
                if (start) {
                  setBookingData({ selectedDate: start });
                }
              }
            }}
            minDate={new Date()}
            inline
            monthsShown={2}
            dayClassName={dayClassName}
            selectsRange
            startDate={departureDate}
            endDate={arrivalDate}
          />
        </div>

        {departureDate && arrivalDate && (
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center w-full gap-16">
            <div className="flex flex-col w-full">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Departure:</span>
                <span className="font-medium ml-2">
                  {format(departureDate, 'EEEE, MMMM d, yyyy')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Arrival:</span>
                <span className="font-medium ml-2">
                  {format(arrivalDate, 'EEEE, MMMM d, yyyy')}
                </span>
              </div>
            </div>
            <button
              onClick={handleClearForm}
              className="text-[#EA3359] hover:text-[#d92f50] font-medium px-2 py-1 bg-red-200 border-red-200 rounded-md flex items-center justify-center items-center"
            >
             <span>Clear</span>  <IoMdClose className="text-xl " />
            </button>
          </div>
        )}
      </div>

      {/* Booking Form - Only shown when dates are selected */}
      {departureDate && arrivalDate && (
        <div className="bg-white rounded-xl w-full p-6 mt-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h4 className="font-medium mb-4">Traveler Information</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
                    required
                  />
                </div>
                
                <div className="flex flex-row gap-2 jus">
                  
                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Code</label>
                  <select
  id="code"
  name="code"
  value={bookingData.code}
  onChange={(e) => setBookingData({ code: e.target.value })}
  className="w-20 border border-gray-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
>
  <option value="">+977</option>
  {formattedCountries.map((country) => (
    <option key={country.value} value={country.dialCode}>
      {country.dialCode}
    </option>
  ))}
</select>

                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
                    required
                  />
                    </div>
                 
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select
  id="country"
  name="country"
  value={bookingData.country}
  onChange={(e) => setBookingData({ country: e.target.value })}
  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
>
  <option value="">Select a country</option>
  {formattedCountries.map((country) => (
    <option key={country.value} value={country.label}>
      {country.label}
    </option>
  ))}
</select>

                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                    <input
                      type="number"
                      name="adults"
                      min="1"
                      value={bookingData.adults}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                    <input
                      type="number"
                      name="children"
                      min="0"
                      value={bookingData.children}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={bookingData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#EA3359] focus:border-[#EA3359]"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Add-On Services</h4>
              <div className="space-y-3 mb-6">
                {addonOptions.map((addon) => (
                  <div key={addon.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={addon.id}
                        checked={bookingData.addons.includes(addon.id)}
                        onChange={(e) => handleAddonChange(addon.id, e.target.checked)}
                        className="h-4 w-4 text-[#EA3359] focus:ring-[#EA3359] border-gray-300 rounded"
                      />
                      <label htmlFor={addon.id} className="ml-3 text-sm font-medium text-gray-700">
                        {addon.name}
                      </label>
                    </div>
                    <span className="text-sm font-medium">+US ${addon.price}</span>
                  </div>
                ))}
              </div>
           
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatesAndPrices;