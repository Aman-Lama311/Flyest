"use client";
import React, { useState } from "react";
import { useBookingStore } from "@/store/BookingStore";
import { IoMdClose, IoMdCalendar, IoMdPerson, IoMdPeople, IoMdMail, IoMdCall, IoMdGlobe } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, isSameDay, isWithinInterval } from "date-fns";
import { addonOptions } from "@/static-data/addOnOptions";
import countries from 'world-countries';

// Static available dates
const AVAILABLE_DATES = [
  new Date("2023-11-15"),
  new Date("2023-11-22"),
  new Date("2023-11-29"),
  new Date("2023-12-06"),
  new Date("2023-12-13"),
  new Date("2023-12-20"),
  new Date("2023-12-27"),
  new Date("2024-01-03")
];

// Custom CSS to be injected for calendar styling
const calendarStyles = `
  .react-datepicker {
    font-family: 'Inter', sans-serif;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
  
  .react-datepicker__header {
    background-color: #ffffff;
    border-bottom: 1px solid #f3f4f6;
    padding-top: 12px;
    padding-bottom: 8px;
  }
  
  .react-datepicker__month-container {
    padding: 8px;
  }
  
  .react-datepicker__day-name {
    color: #6b7280;
    font-weight: 500;
    width: 36px;
    margin: 6px;
  }
  
  .react-datepicker__day {
    width: 36px;
    height: 36px;
    line-height: 36px;
    margin: 6px;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  
  .react-datepicker__day:hover:not(.react-datepicker__day--disabled):not(.react-datepicker__day--selected):not(.in-range) {
    background-color: #f9fafb;
  }
  
  .react-datepicker__day--keyboard-selected {
    background-color: #fdf2f2 !important;
    color: #EA3359 !important;
  }
  
  .react-datepicker__day--disabled {
    color: #d1d5db;
  }
  
  .react-datepicker__current-month {
    font-weight: 600;
    font-size: 1rem;
    color: #111827;
    margin-bottom: 8px;
  }
  
  .react-datepicker__navigation {
    top: 15px;
  }
  
  .react-datepicker__navigation-icon::before {
    border-color: #EA3359;
    border-width: 2px 2px 0 0;
  }
  
  .react-datepicker__day--highlighted-custom-1 {
    background-color: #ffe4e6;
    color: #EA3359;
  }
  
  .react-datepicker__day--highlighted-custom-2 {
    background-color: #EA3359;
    color: white;
  }
  
  .start-date {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  
  .end-date {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
  
  .in-range {
    background-color: #fef2f2 !important;
    color: #EA3359 !important;
    border-radius: 0 !important;
  }
`;

const DatesAndPrices = () => {
  const formattedCountries = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2,
    dialCode: country.idd.root + (country.idd.suffixes?.[0] || ""),
  }));

  const { bookingData, setBookingData, resetBooking } = useBookingStore();
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setDepartureDate(date);
    const endDate = addDays(date, 12);
    setArrivalDate(endDate);
    setBookingData({ 
      selectedDate: date,
      endDate: endDate 
    });
  };

  // This function determines the CSS class for each day in the calendar
  const dayClassName = (date: Date) => {
    if (!departureDate || !arrivalDate) return '';
    
    if (isSameDay(date, departureDate)) {
      return 'bg-[#EA3359] text-white rounded-l-full start-date';
    }
    
    if (isSameDay(date, arrivalDate)) {
      return 'bg-[#EA3359] text-white rounded-r-full end-date';
    }
    
    if (isWithinInterval(date, { start: departureDate, end: arrivalDate })) {
      return 'bg-pink-100 text-[#EA3359] in-range';
    }
    
    return '';
  };

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

  const handleClearForm = () => {
    setDepartureDate(null);
    setArrivalDate(null);
    resetBooking();
  };

  // Function to determine if a date should be highlighted in the calendar
  const highlightDates = () => {
    if (!departureDate || !arrivalDate) return [];
    
    const dates = [];
    let currentDate = new Date(departureDate);
    
    // Create an array of all dates in the range
    while (currentDate <= arrivalDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dates;
  };

  return (
    <div id="date-&-prices" className="mt-10">
      <style>{calendarStyles}</style>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📅 Dates & Prices</h2>
      <p className="text-gray-600 mt-1 text-base max-w-3xl">
        Select your preferred travel dates from our available options and customize your trip.
      </p>

      {/* Date Selection Section */}
      <div className="bg-white rounded-xl w-full p-6 mt-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <IoMdCalendar className="text-[#EA3359]" /> Select Departure Date
        </h3>

        {/* Date Dropdown Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Dates
          </label>
          <select
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              handleDateSelect(selectedDate);
            }}
            className="w-full md:w-1/2 border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
            value={departureDate?.toISOString() || ""}
          >
            <option value="">Select a date</option>
            {AVAILABLE_DATES.map((date) => (
              <option 
                key={date.toString()} 
                value={date.toISOString()}
              >
                {format(date, 'EEEE, MMMM d, yyyy')}
              </option>
            ))}
          </select>
        </div>

        {/* Enhanced Calendar View */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Trip Dates
          </label>
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <DatePicker
              selected={departureDate}
              onChange={() => {}}
              minDate={new Date()}
              inline
              monthsShown={2}
              dayClassName={dayClassName}
              selectsRange
              startDate={departureDate}
              endDate={arrivalDate}
              highlightDates={[
                {
                  "react-datepicker__day--highlighted-custom-1": highlightDates()
                }
              ]}
              disabled
              calendarClassName="!border-0 !shadow-none calendar-container"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </div>

        {/* Selected Dates Summary */}
        {departureDate && arrivalDate && (
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-gray-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span className="font-medium">Selected Dates:</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Departure:</span>
                  <span className="font-medium">
                    {format(departureDate, 'MMM d, yyyy')}
                  </span>
                </div>
                <div className="hidden sm:block text-gray-400">•</div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Return:</span>
                  <span className="font-medium">
                    {format(arrivalDate, 'MMM d, yyyy')}
                  </span>
                </div>
                <div className="hidden sm:block text-gray-400">•</div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-[#EA3359]">
                    13 days
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClearForm}
              className="text-[#EA3359] hover:text-[#d92f50] font-medium px-3 py-1.5 bg-red-50 border border-red-100 rounded-lg flex items-center gap-1 text-sm"
            >
              <span>Clear</span>
              <IoMdClose />
            </button>
          </div>
        )}
      </div>

      {/* Booking Form - Only shown when dates are selected */}
      {departureDate && arrivalDate && (
        <div className="bg-white rounded-xl w-full p-6 mt-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 gap-8">
            {/* Traveler Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <IoMdPerson className="text-[#EA3359]" /> Traveler Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <IoMdPerson className="text-gray-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <IoMdMail className="text-gray-400" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="w-24">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <IoMdCall className="text-gray-400" /> Code
                    </label>
                    <select
                      name="code"
                      value={bookingData.code}
                      onChange={(e) => setBookingData({ code: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                    >
                      <option value="">+977</option>
                      {formattedCountries.map((country) => (
                        <option key={country.value} value={country.dialCode}>
                          {country.dialCode} {country.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <IoMdGlobe className="text-gray-400" /> Country
                  </label>
                  <select
                    name="country"
                    value={bookingData.country}
                    onChange={(e) => setBookingData({ country: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                  >
                    <option value="">Select your country</option>
                    {formattedCountries.map((country) => (
                      <option key={country.value} value={country.label}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <IoMdPerson className="text-gray-400" /> Adults
                  </label>
                  <input
                    type="number"
                    name="adults"
                    min="1"
                    value={bookingData.adults}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <IoMdPeople className="text-gray-400" /> Children
                  </label>
                  <input
                    type="number"
                    name="children"
                    min="0"
                    value={bookingData.children}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={bookingData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#EA3359]/50 focus:border-[#EA3359]"
                  placeholder="Special requests, dietary restrictions, etc."
                ></textarea>
              </div>
            </div>

            {/* Add-On Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">✨ Add-On Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addonOptions.map((addon) => (
                  <div 
                    key={addon.id} 
                    className={`p-4 border rounded-lg transition-all ${bookingData.addons.includes(addon.id) 
                      ? 'border-[#EA3359] bg-pink-50' 
                      : 'border-gray-200 hover:border-[#EA3359]'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id={addon.id}
                          checked={bookingData.addons.includes(addon.id)}
                          onChange={(e) => handleAddonChange(addon.id, e.target.checked)}
                          className="mt-1 h-4 w-4 text-[#EA3359] focus:ring-[#EA3359] border-gray-300 rounded"
                        />
                        <div>
                          <label htmlFor={addon.id} className="font-medium text-gray-800">
                            {addon.name}
                          </label>
                          {/* <p className="text-sm text-gray-500 mt-1">{addon.description}</p> */}
                        </div>
                      </div>
                      <span className="font-medium text-[#EA3359] whitespace-nowrap">+${addon.price}</span>
                    </div>
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