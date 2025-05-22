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
      title: "Arrival and Luxury Hotel Check-in, Kathmandu",
      description:
        "Welcome to Nepal! Upon arrival, you'll be greeted at the airport by your expert guide and transferred to a premium hotel in Kathmandu for a comfortable overnight stay. Relax and prepare for your exciting heli-tour adventure ahead.",
      details: {
        altitude: "1,350m / 4,429ft",
        activity: "Transfer & Relaxation",
        duration: "45 min",
      },
      expanded: true,
    },
    {
      day: 2,
      title: "Scenic Helicopter Flight to Pokhara",
      description:
        "Board your helicopter for a stunning aerial journey to Pokhara, flying over terraced fields, river valleys, and Himalayan foothills. Upon arrival, enjoy leisure time at lakeside resorts or explore the town’s vibrant markets.",
      details: {
        altitude: "822m / 2,697ft",
        activity: "Sightseeing Flight",
        duration: "1 hour",
      },
    },
    {
      day: 3,
      title: "Helicopter Tour of Annapurna Range",
      description:
        "Take off on a breathtaking helicopter tour around the Annapurna mountain range, offering unparalleled views of snow-capped peaks, glaciers, and deep gorges. Capture unforgettable photos and experience the majesty of the Himalayas from above.",
      details: {
        altitude: "Up to 5,000m / 16,404ft",
        activity: "Helicopter Sightseeing",
        duration: "3 hours",
      },
    },
    {
      day: 4,
      title: "Cultural Visit to Mountain Villages",
      description:
        "Fly to remote villages nestled in the mountains where you’ll meet local communities and learn about their traditions and lifestyles. Enjoy a traditional meal and explore ancient monasteries and prayer flags fluttering in the mountain breeze.",
      details: {
        altitude: "2,500m / 8,202ft",
        activity: "Cultural Tour",
        duration: "4 hours",
      },
    },
    {
      day: 5,
      title: "Sunrise Flight to Everest Base Camp",
      description:
        "Experience the thrill of a dawn flight to Everest Base Camp. Witness the rising sun illuminate the world’s highest peak and surrounding mountains. Return to Kathmandu by afternoon for some well-deserved rest.",
      details: {
        altitude: "5,364m / 17,598ft",
        activity: "Helicopter Excursion",
        duration: "5 hours",
      },
    },
    {
      day: 6,
      title: "Leisure Day in Kathmandu",
      description:
        "Spend a free day exploring Kathmandu’s UNESCO World Heritage sites, vibrant markets, and delicious local cuisine. Alternatively, opt for an optional cultural or shopping tour arranged by your guide.",
      details: {
        altitude: "1,350m / 4,429ft",
        activity: "City Tour / Leisure",
        duration: "Full Day",
      },
    },
    {
      day: 7,
      title: "Flight over Langtang National Park",
      description:
        "Enjoy an exhilarating flight over the stunning Langtang National Park. Soar above forests, rivers, and peaks while spotting wildlife and remote settlements inaccessible by road.",
      details: {
        altitude: "Up to 4,000m / 13,123ft",
        activity: "Helicopter Sightseeing",
        duration: "4 hours",
      },
    },
    {
      day: 8,
      title: "Final Day: Shopping and Farewell Dinner",
      description:
        "Spend your final day at leisure with optional shopping for souvenirs in Kathmandu’s markets. Conclude your adventure with a traditional farewell dinner featuring local music and dance.",
      details: {
        altitude: "1,350m / 4,429ft",
        activity: "Leisure & Celebration",
        duration: "Evening",
      },
    },
    {
      day: 9,
      title: "Departure Transfer to Airport",
      description:
        "Your guide will transfer you to Tribhuvan International Airport with plenty of time for your flight home. Safe travels and fond memories of your Himalayan heli-tour!",
      details: {
        altitude: "1,350m / 4,429ft",
        activity: "Transfer",
        duration: "30 min",
      },
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
