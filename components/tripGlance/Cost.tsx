"use client";

import { CheckCircle, XCircle } from "lucide-react"; // Importing Lucide icons

const Cost = () => {
  const costIncludes = [
    {
      title: "Kathmandu Stay in premium hotels:",
      description:
        "Begin and end your journey with relaxing stays at a top-tier hotel in Kathmandu, offering luxurious amenities and a comfortable retreat before and after your trek.",
    },
    {
      title: "Professional English-speaking guide:",
      description:
        "Benefit from the expertise of our experienced guides who will navigate, educate, and ensure your safety throughout the journey.",
    },
    {
      title: "All transportation in Nepal:",
      description:
        "Enjoy private transfers between airports, hotels, and trek starting points in comfortable and reliable vehicles.",
    },
    {
      title: "Meals during the trek:",
      description:
        "Savor nutritious breakfast, lunch, and dinner prepared by skilled mountain chefs using fresh, local ingredients.",
    },
    {
      title: "Accommodation during the trek:",
      description:
        "Rest comfortably in the best available teahouses and lodges along the trekking route, carefully selected for cleanliness and quality.",
    },
  ];

  const costExcludes = [
    {
      title: "International flights:",
      description:
        "Airfare to and from Nepal is not included in the package price and should be arranged separately.",
    },
    {
      title: "Personal equipment and gear:",
      description:
        "Trekking boots, sleeping bags, down jackets, and other personal gear must be brought by trekkers or rented locally.",
    },
    {
      title: "Travel insurance:",
      description:
        "Comprehensive travel insurance with emergency evacuation coverage is mandatory but not included in the trip cost.",
    },
    {
      title: "Personal expenses:",
      description:
        "Extra snacks, beverages, wifi, charging, hot showers, and other comfort expenses during the trek.",
    },
    {
      title: "Tips for guides and porters:",
      description:
        "Gratuities for the trekking staff are customary but left to your discretion based on the quality of service received.",
    },
  ];

  return (
    <div id="costs" className="mt-10">
      {/* Cost Includes */}
      <h1 className="text-3xl font-semibold">Cost Includes</h1>
      <div className="space-y-6 pl-2 mt-6">
        {costIncludes.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="pt-1">
              <CheckCircle size={20} className="text-[#025FE0]" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Excludes */}
      <h1 className="text-3xl font-semibold mt-10">Cost Excludes</h1>
      <div className="space-y-6 pl-2 mt-6">
        {costExcludes.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="pt-1">
              <XCircle size={20} className="text-red-500" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cost;
