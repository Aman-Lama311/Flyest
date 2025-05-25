"use client";

import { useState } from "react";
import { ChevronRight, PhoneCall, Info } from "lucide-react";

// Types
type ItineraryDetails = {
  altitude?: string;
  activity?: string;
  distance?: string;
  duration?: string;
};

type ItineraryDayProps = {
  day: number;
  title: string;
  description: string;
  details?: ItineraryDetails;
  expanded?: boolean;
};

// Itinerary Day Component
const ItineraryDay = ({
  day,
  title,
  description,
  details,
  expanded: initialExpanded = false,
}: ItineraryDayProps) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <div className="border-b border-gray-100">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#FDECEF] text-[#EA3359] rounded-lg px-3 py-2 text-sm font-medium">
            Day {day.toString().padStart(2, "0")}
          </div>
          <h3 className="font-medium text-gray-800">{title}</h3>
        </div>
        <div
          className={`text-[#EA3359] transition-transform ${
            expanded ? "rotate-90" : ""
          }`}
        >
          <ChevronRight size={20} />
        </div>
      </div>

      {expanded && description && (
        <div className="px-4 pb-4 pt-0 ml-14">
          <p className="text-gray-600 text-sm mb-3">{description}</p>

          {details && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-gray-500">
              {details.altitude && (
                <div>
                  <span className="font-semibold">Maximum Altitude:</span>{" "}
                  {details.altitude}
                </div>
              )}
              {details.activity && (
                <div>
                  <span className="font-semibold">Activity:</span>{" "}
                  {details.activity}
                </div>
              )}
              {details.distance && (
                <div>
                  <span className="font-semibold">Distance:</span>{" "}
                  {details.distance}
                </div>
              )}
              {details.duration && (
                <div>
                  <span className="font-semibold">Duration:</span>{" "}
                  {details.duration}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Itinerary Preview Component
const ItineraryPreview = () => {
  const itineraryData: ItineraryDayProps[] = [
    {
      day: 1,
      title: "Airport Pick up to Kathmandu 5 Star Hotel",
      description:
        "Warm welcome awaits you at the airport by a professional guide with a traditional garland and a smile. Assistance with luggage and a smooth transition to your private, air-conditioned vehicle. Enjoy a comfortable drive through the bustling streets of Kathmandu as we head toward your luxury accommodation. Check-in at a 5-star hotel (such as Hyatt Regency, Soaltee Crown Plaza, or Radisson) for a restful evening.",
      details: {
        altitude: "1,350m/4,429ft",
        activity: "Walking/Hiking",
        duration: "30 min",
      },
      expanded: true,
    },
    {
      day: 2,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 2 will be provided.",
    },
    {
      day: 3,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 3 will be provided.",
    },
    {
      day: 4,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 4 will be provided.",
    },
    {
      day: 5,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 5 will be provided.",
    },
    {
      day: 6,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 6 will be provided.",
    },
    {
      day: 7,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 7 will be provided.",
    },
    {
      day: 8,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 8 will be provided.",
    },
    {
      day: 9,
      title: "Contrary to popular belief",
      description: "Detailed itinerary for day 9 will be provided.",
    },
  ];

  return (
    <div
      id="itinerary"
      className="mx-auto bg-white rounded-lg overflow-hidden mt-10"
    >
      <div className="border-b border-gray-100 p-4">
        <h2 className="text-3xl font-semibold">Itinerary</h2>
      </div>

      <div className="divide-y divide-gray-100">
        {itineraryData.map((day) => (
          <ItineraryDay
            key={day.day}
            day={day.day}
            title={day.title}
            description={day.description}
            details={day.details}
            expanded={day.expanded}
          />
        ))}
      </div>

      <div className="bg-[#FDECEF] p-4 mt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-[#EA3359]">
            <Info size={18} className="mr-2" />
            <p className="text-sm font-medium">
              Would you like to talk to this route expert?
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-[#FFCCD5] border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-[#FCA5B6] border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-[#EA3359] border-2 border-white"></div>
            </div>

            <button className="ml-4 bg-[#EA3359] hover:bg-[#cc2d4e] text-white rounded-full w-8 h-8 flex items-center justify-center">
              <PhoneCall size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPreview;
