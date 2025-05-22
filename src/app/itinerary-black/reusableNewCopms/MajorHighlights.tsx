"use client";

import { CheckCircle } from "lucide-react";

const MajorHighlight = () => {
  const highlights = [
    {
      title: "Luxurious Kathmandu Stay:",
      description:
        "Relax before and after your helitour in premium hotels in Kathmandu, featuring world-class amenities and exceptional comfort.",
    },
    {
      title: "Scenic Helicopter Flight:",
      description:
        "Experience breathtaking aerial views of the Himalayas as you fly over iconic peaks and glaciers, making the journey as memorable as the destination.",
    },
    {
      title: "Landing at Kalapatthar or Everest Base Camp:",
      description:
        "Land at spectacular high-altitude points like Kalapatthar (5,545m) or Everest Base Camp, weather permitting, for unmatched panoramic views.",
    },
    {
      title: "Exclusive Small Group Experience:",
      description:
        "Travel in comfort with a maximum of 5 passengers per helicopter, ensuring personalized attention and a relaxed atmosphere.",
    },
    {
      title: "Optional Breakfast at Everest View Hotel:",
      description:
        "Enjoy a delicious breakfast with stunning mountain vistas at the renowned Everest View Hotel, a perfect complement to your helitour.",
    },
  ];

  return (
    <section id="major-highlights" className="mt-10">
      <h2 className="text-3xl font-semibold">Major Highlights</h2>
      <div className="space-y-6 pl-2 mt-6 max-w-4xl mx-auto">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="pt-1">
              <CheckCircle size={20} className="text-[#025FE0]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MajorHighlight;
