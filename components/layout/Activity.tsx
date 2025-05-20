"use client";

import React, { useRef, useEffect, useState } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface Activity {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: "Trekking",
    description:
      "Explore stunning trails, high-altitude passes, and breathtaking landscapes on foot with our experienced guides.",
    date: "2025-06-15",
    location: "Annapurna Region",
    image:
      "https://annapurnaexpress.prixacdn.net/media/albums/annapurna_circuit_DnUY2uo448.jpg",
  },
  {
    title: "Hiking",
    description:
      "Enjoy scenic day hikes perfect for all levels, offering panoramic views and cultural immersion.",
    date: "2025-06-18",
    location: "Shivapuri National Park",
    image:
      "https://www.grisport.co.uk/blog/wp-content/uploads/2021/07/hiking.jpeg",
  },
  {
    title: "Rafting",
    description:
      "Navigate whitewater rapids with our thrilling rafting adventures in Nepal’s top rivers.",
    date: "2025-07-05",
    location: "Trishuli River",
    image:
      "https://cdn.pixabay.com/photo/2014/03/23/19/57/rafting-293542_1280.jpg",
  },
  {
    title: "Camping",
    description:
      "Sleep under the stars and connect with nature at serene campsites nestled in the mountains.",
    date: "2025-07-20",
    location: "Rara Lake",
    image:
      "https://www.altitudehimalaya.com/media/files/Blog/Activities/Camping-in-Nepal.jpeg",
  },
  {
    title: "Paragliding",
    description:
      "Soar above the Himalayas with a paragliding experience that blends adrenaline and awe.",
    date: "2025-08-01",
    location: "Pokhara",
    image:
      "https://www.bizkhabar.com/wp-content/uploads/2015/12/Paragrading-in-Nepal-scaled.jpg",
  },
  {
    title: "Cycling",
    description:
      "Take adventure of cycling in the amazing environment of Nepal with your friends.",
    date: "2025-09-05",
    location: "Mustang Valley",
    image:
      "https://media.istockphoto.com/id/168252486/photo/scenic-marsyangdi-biking-nepal.jpg?s=612x612&w=0&k=20&c=NM2IvRcrIseH28iUA5zqaTWQqaAEglLp8jfCG2Ycqcs=",
  },
];

const ActivityCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardWidth(280);
      else if (window.innerWidth < 768) setCardWidth(300);
      else if (window.innerWidth < 1024) setCardWidth(320);
      else setCardWidth(360);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -cardWidth - 24, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-[url('/navbg.svg')] py-12 px-4 sm:px-8 overflow-hidden no-scrollbar">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
        Choose Your Next Activities
      </h2>
      <p className="text-center text-white text-sm sm:text-base md:text-lg mb-10 max-w-3xl mx-auto">
        Discover a variety of thrilling activities — from scenic hikes to
        adrenaline-pumping adventures.
      </p>

      <div className="relative">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[360px] bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden group">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-1">{activity.title}</h3>
                <div className="flex items-center text-xs text-gray-300 mb-2">
                  <MapPin size={14} className="mr-1 text-red-400" />
                  {activity.location}
                  <Calendar size={14} className="ml-3 mr-1 text-red-400" />
                  {activity.date}
                </div>
                <p className="text-xs text-gray-200 mb-4 flex-grow font-sans">
                  {activity.description} Experience nature like never before
                  with our trusted guides and curated experiences that promise
                  unforgettable memories.
                </p>
                <div className="flex gap-2 mt-auto">
                  <button className="w-1/2 text-xs font-medium bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg transition duration-200">
                    View Itinerary
                  </button>
                  <button className="w-1/2 text-xs font-medium border border-red-500 text-red-500 hover:bg-red-50 py-2 px-3 rounded-lg transition duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chevron Buttons */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
          <button
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            onClick={scrollLeft}
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
          <button
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            onClick={scrollRight}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCarousel;
