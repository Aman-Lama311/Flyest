"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Title from "../../components/title/Title";

// Activity Type
interface Activity {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

// Activity Data
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
      "Navigate whitewater rapids with our thrilling rafting adventures in Nepal's top rivers.",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Debounced Resize Handler
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 640) setCardWidth(280);
      else if (window.innerWidth < 768) setCardWidth(300);
      else if (window.innerWidth < 1024) setCardWidth(320);
      else setCardWidth(360);
    };

    const debounce = (fn: Function, delay: number) => {
      let timer: NodeJS.Timeout;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), delay);
      };
    };

    const debouncedResize = debounce(resizeHandler, 200);
    window.addEventListener("resize", debouncedResize);
    resizeHandler();

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  // Scroll to Index Helper
  const scrollToIndex = useCallback(
    (index: number) => {
      if (scrollRef.current) {
        const scrollAmount = index * (cardWidth + 24);
        scrollRef.current.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    },
    [cardWidth]
  );

  // Auto Slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % activities.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollToIndex, isPaused]);

  const handleScrollLeft = () => {
    const newIndex =
      currentIndex === 0 ? activities.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleScrollRight = () => {
    const newIndex = (currentIndex + 1) % activities.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div
      className="relative w-full bg-black/80 py-12 pl-4 sm:pl-8 lg:pl-18 overflow-hidden no-scrollbar text-white z-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Title
        title="Choose Your Next Activities"
        discription="Discover a variety of thrilling activities — from scenic hikes to adrenaline-pumping adventures."
      />

      <div className="relative mt-18">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[360px] bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden group">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-1">{activity.title}</h3>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <MapPin size={14} className="mr-1 text-red-400" />
                  {activity.location}
                  <Calendar size={14} className="ml-3 mr-1 text-red-400" />
                  {activity.date}
                </div>
                <p className="text-sm text-gray-200 mb-4 flex-grow font-sans line-clamp-3">
                  {activity.description} Experience nature like never before
                  with our trusted guides and curated experiences that promise
                  unforgettable memories.
                </p>
                <div className="flex gap-2 mt-auto">
                  <button className="w-1/2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg transition duration-200">
                    View Itinerary
                  </button>
                  <button className="w-1/2 text-sm font-medium border border-red-500 text-red-500 hover:bg-red-50 hover:bg-opacity-10 py-2 px-3 rounded-lg transition duration-200">
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
            className="bg-gray-300 text-black shadow-md p-2 rounded-full hover:bg-gray-200 transition"
            onClick={handleScrollLeft}
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
          <button
            className="bg-gray-300 text-black shadow-md p-2 rounded-full hover:bg-gray-200 transition"
            onClick={handleScrollRight}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-500 w-6"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCarousel;
