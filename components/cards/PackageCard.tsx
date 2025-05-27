import React from "react";
import { Star, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const trek = [
  {
    id: 1,
    imgSrc:
      "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
    title: "Mount Everest Base Camp Trek",
    oldPrice: 2200,
    newPrice: 1850,
    rating: "4.9",
    reviews: "512",
    location: "Nepal",
    duration: "12 Days",
    description:
      "Journey to the base of the world’s highest peak and witness breathtaking Himalayan scenery along the way.",
  },
  {
    id: 2,
    imgSrc:
      "https://www.thomsontreks.com/wp-content/uploads/2019/05/kilimanjaro-kibo-view-pjh.jpg",
    title: "Kilimanjaro Summit Adventure",
    oldPrice: 2100,
    newPrice: 1700,
    rating: "4.7",
    reviews: "389",
    location: "Tanzania",
    duration: "7 Days",
    description:
      "Climb Africa's tallest mountain through varied ecosystems, from rainforest to alpine desert.",
  },
  {
    id: 3,
    imgSrc:
      "https://hsj.com.np/uploads/0000/386/2020/04/24/everest-region-banner1-1024.jpg",
    title: "Annapurna Circuit Expedition",
    oldPrice: 1900,
    newPrice: 1600,
    rating: "4.8",
    reviews: "275",
    location: "Nepal",
    duration: "15 Days",
    description:
      "A classic trek looping around the Annapurna massif with majestic peaks and deep gorges.",
  },
  {
    id: 4,
    imgSrc:
      "https://admin.ntb.gov.np/image-cache/Manaslu_View_from_Lho-1624808940.jpg?p=main&s=865d2a2a7ce83fed2413c359ee7fcf76",
    title: "Manaslu Circuit Trekking",
    oldPrice: 2000,
    newPrice: 1750,
    rating: "4.6",
    reviews: "198",
    location: "Nepal",
    duration: "14 Days",
    description:
      "Remote and less crowded, this trek circles Mount Manaslu offering raw Himalayan beauty.",
  },
  {
    id: 5,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBmhk4iASmwVy27XoeJakbNv_sX3OOvKOEg&s",
    title: "Mount Kailash Pilgrimage Route",
    oldPrice: 2500,
    newPrice: 2000,
    rating: "4.5",
    reviews: "143",
    location: "Tibet",
    duration: "10 Days",
    description:
      "Sacred to multiple religions, this high-altitude trek circles the mystical Mount Kailash.",
  },
];

const THEME_COLOR = "#FF4E58";

const PackageCard = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscount = (oldPrice: number, newPrice: number): number => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto py-12 px-4 md:px-8">
      <div className="flex flex-wrap gap-8">
        {trek.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[48%] lg:w-[31%] bg-zinc-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-[250px] bg-zinc-700 group overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              {item.oldPrice > item.newPrice && (
                <div
                  style={{ backgroundColor: THEME_COLOR }}
                  className="absolute top-4 left-4 text-white text-sm font-bold px-2 py-1 rounded"
                >
                  {calculateDiscount(item.oldPrice, item.newPrice)}% OFF
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow text-white">
              {/* Title & Rating */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <div
                  style={{ backgroundColor: `${THEME_COLOR}15` }}
                  className="flex items-center px-2 py-1 rounded text-sm font-medium"
                >
                  <Star
                    size={14}
                    style={{ color: THEME_COLOR }}
                    className="fill-current mr-1"
                  />
                  <span style={{ color: THEME_COLOR }}>{item.rating}</span>
                </div>
              </div>

              {/* Location & Duration */}
              <div className="flex items-center text-sm mb-3 text-zinc-300">
                <MapPin
                  size={16}
                  style={{ color: THEME_COLOR }}
                  className="mr-1"
                />
                <span>{item.location}</span>
                <Clock
                  size={16}
                  style={{ color: THEME_COLOR }}
                  className="ml-4 mr-1"
                />
                <span>{item.duration}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 flex-grow mb-4">
                {item.description}
              </p>

              {/* Pricing & Reviews */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-zinc-400">Starting from</p>
                  <div className="flex items-center">
                    {item.oldPrice > item.newPrice && (
                      <span className="line-through mr-2 text-zinc-400">
                        {formatPrice(item.oldPrice)}
                      </span>
                    )}
                    <span className="text-xl font-bold text-white">
                      {formatPrice(item.newPrice)}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-zinc-400">
                  <span>{item.reviews} reviews</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Link
                  href={`/itinerary`}
                  style={{ backgroundColor: THEME_COLOR }}
                  className="w-1/2 text-sm font-medium hover:bg-red-600 active:bg-red-700 text-white text-center py-3 px-4 rounded-lg transition duration-200"
                >
                  View itinerary
                </Link>
                <button
                  style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
                  className="w-1/2 text-sm font-medium border hover:bg-red-50 active:bg-red-100 py-3 px-4 rounded-lg transition duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
