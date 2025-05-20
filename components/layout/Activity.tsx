'use client';

import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Calendar, MapPin } from 'lucide-react';

interface Activity {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: 'Trekking',
    description: 'Explore stunning trails, high-altitude passes, and breathtaking landscapes on foot with our experienced guides.',
    date: '2025-06-15',
    location: 'Annapurna Region',
    image: 'https://annapurnaexpress.prixacdn.net/media/albums/annapurna_circuit_DnUY2uo448.jpg'
  },
  {
    title: 'Hiking',
    description: 'Enjoy scenic day hikes perfect for all levels, offering panoramic views and cultural immersion.',
    date: '2025-06-18',
    location: 'Shivapuri National Park',
    image: 'https://www.grisport.co.uk/blog/wp-content/uploads/2021/07/hiking.jpeg'
  },
  {
    title: 'Rafting',
    description: 'Navigate whitewater rapids with our thrilling rafting adventures in Nepal’s top rivers.',
    date: '2025-07-05',
    location: 'Trishuli River',
    image: 'https://cdn.pixabay.com/photo/2014/03/23/19/57/rafting-293542_1280.jpg',
  },
  {
    title: 'Camping',
    description: 'Sleep under the stars and connect with nature at serene campsites nestled in the mountains.',
    date: '2025-07-20',
    location: 'Rara Lake',
    image: 'https://www.altitudehimalaya.com/media/files/Blog/Activities/Camping-in-Nepal.jpeg'
  },
  {
    title: 'Paragliding',
    description: 'Soar above the Himalayas with a paragliding experience that blends adrenaline and awe.',
    date: '2025-08-01',
    location: 'Pokhara',
    image: 'https://www.bizkhabar.com/wp-content/uploads/2015/12/Paragrading-in-Nepal-scaled.jpg'
  },
  {
    title: 'Cycling',
    description: 'Take avdenture of cycling in the amazing environment of nepal with your friends.',
    date: '2025-09-05',
    location: 'Mustang Valley',
    image: 'https://media.istockphoto.com/id/168252486/photo/scenic-marsyangdi-biking-nepal.jpg?s=612x612&w=0&k=20&c=NM2IvRcrIseH28iUA5zqaTWQqaAEglLp8jfCG2Ycqcs='
  },
];

const ActivityCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 5;
  const maxIndex = activities.length - cardsToShow;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  const visibleCards = activities.slice(startIndex, startIndex + cardsToShow);

  return (
    <div className="relative w-full bg-black py-12 px-10">
      <h2 className="text-6xl font-bold text-center text-white mb-4">Choose Your Next Activities</h2>
      <p className="text-center text-white text-xl mb-10 max-w-3xl mx-auto">
        Discover a variety of thrilling activities loved by adventurers from scenic hikes to adrenaline-pumping adventures.
      </p>

      <div className="relative w-full  mx-auto">
        {/* Cards */}
        <div className="flex justify-center gap-10 transition-all duration-300">
        {visibleCards.map((activity, index) => (
  <div
    key={index}
    className="w-[990px] h-[480px] bg-zinc-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col Foverflow-hidden">
    <div className="relative w-full h-70 bg-black overflow-hidden group">
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>

      <div className="flex items-center text-sm text-gray-300 mb-3">
        <MapPin size={16} className="mr-2 text-red-400" />
        {activity.location}
        <Calendar size={16} className="ml-4 mr-2 text-red-400" />
        {activity.date}
      </div>

      <p className="text-sm text-gray-200 mb-4 flex-grow font-sans">
        {activity.description} Experience nature like never before with our trusted guides and curated experiences that promise unforgettable memories for all adventurers.
      </p>

      <div className="flex gap-3">
        <button className="w-1/2 font-medium bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg transition duration-200">
          View Itinerary
        </button>
        <button className="w-1/2 font-medium border border-red-500 text-red-500 hover:bg-red-50 py-2 px-3 rounded-lg transition duration-200">
          Book Now
        </button>
      </div>
    </div>
  </div>
))}

        </div>

        {/* Bottom Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            className="bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
            onClick={prevSlide}
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            className="bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
            onClick={nextSlide}
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCarousel;
