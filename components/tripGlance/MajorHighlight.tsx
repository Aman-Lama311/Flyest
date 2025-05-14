"use client";

import { CheckCircle } from "lucide-react";

const MajorHighlight = () => {
  const highlights = [
    {
      title: "Kathmandu Stay in premium hotels:",
      description:
        "Begin and end your journey with relaxing stays at a top-tier hotel in Kathmandu, offering luxurious amenities and a comfortable retreat before and after your trek.",
    },
    {
      title: "Scenic Drive to Trek Start Point:",
      description:
        "Enjoy a picturesque drive through hills and valleys to reach the starting point of your trek, soaking in Nepal’s natural beauty along the way.",
    },
    {
      title: "Cultural Exploration of Mountain Villages:",
      description:
        "Interact with local communities and experience authentic Himalayan culture, food, and traditions in remote mountain villages.",
    },
    {
      title: "Stunning Mountain Views:",
      description:
        "Capture breathtaking views of Manaslu and surrounding peaks, with numerous photo opportunities on the trail.",
    },
    {
      title: "Challenging Yet Rewarding Trek:",
      description:
        "Take on high mountain passes, rugged trails, and stunning landscapes—perfect for trekkers seeking both challenge and serenity.",
    },
  ];

  return (
    <div id="major-highlights">
      <h1 className="text-3xl font-semibold mt-10">Major Highlights</h1>
      <div className="space-y-6 pl-2 mt-6">
        {highlights.map((item, index) => (
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
    </div>
  );
};

export default MajorHighlight;
