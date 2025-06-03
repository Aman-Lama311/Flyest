"use client";

import React from "react";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const trek = [
  {
    id: 1,
    imgSrc:
      "https://cdn.pixabay.com/photo/2020/04/19/08/03/adventure-5062314_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2020/10/11/09/04/peak-5645235_1280.jpg",
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
    imgSrc: "https://cdn.pixabay.com/photo/2010/12/01/snow-738_1280.jpg",
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

// 🎨 Theme color set to your chosen value
const THEME_COLOR = "#B516B5";

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
    <div className="relative z-10 w-full max-w-[1400px] mx-auto py-12 px-4 md:px-8 ">
      <div className="flex flex-wrap gap-8">
        {trek.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[48%] lg:w-[31%] transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-[250px] group overflow-hidden">
              <Image
                height={500}
                width={500}
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              {item.oldPrice > item.newPrice && (
                <div
                  className="absolute top-4 left-4 text-lg font-bold px-2 py-1 rounded bg-white"
                  style={{ color: THEME_COLOR }}
                >
                  Starting from {formatPrice(item.newPrice)}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="pr-4 flex flex-col flex-grow text-gray-800">
              {/* Title & Rating */}
              <div className="flex justify-between items-start mb-3 mt-4">
                <h3 className="text-2xl">{item.title}</h3>
              </div>

              {/* Pricing & Reviews */}
              <div className="flex items-center justify-between mb-4">
                {/* Location & Duration */}
                <div className="flex items-center text-sm  text-zinc-700">
                  <MapPin size={16} className="mr-1 text-green-400" />
                  <span>{item.location}</span>
                  <Clock size={16} className="ml-4 mr-1 text-sky-500" />
                  <span>{item.duration}</span>
                </div>
                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/itinerary`}
                    className="w-fit font-medium text-lg hover:scale-108 text-center transition duration-100"
                    style={{ color: THEME_COLOR }}
                  >
                    View itinerary
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
