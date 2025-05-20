"use client";
import { X } from "lucide-react";
import { useState } from "react";

import Title from "./reusableNewCopms/Title";
import LeftBar from "../../../components/intineryBars/LeftBar";
import TripGlance from "./reusableNewCopms/TripGlance";
import MajorHighlight from "./reusableNewCopms/MajorHighlights";
import Places from "./reusableNewCopms/Places";
import RouteOverview from "../../../components/tripGlance/RouteOverview";
import RouteMap from "../../../components/tripGlance/RouteMap";
import Cost from "../../../components/tripGlance/Cost";
import Faq from "../../../components/tripGlance/Faq";
import RightBar from "../../../components/intineryBars/RightBar";
import TravellerReview from "../../../components/tripGlance/Review";
import Itinerary from "../../../components/intineryBars/Itinery";
import DatesAndPrices from "../../../components/intineryBars/DatesAndPrices";
import RelatedTrips from "../../../components/tripGlance/RelatedTrips";
import ItineraryPreview from "./reusableNewCopms/Ititnerary";

const Page = () => {
  const imageList = [
    "https://news.flightsim.to/content/images/2023/11/sa315b-lama-for-msfs-by-taog-s-hangar-1-1700248544-QJbBt.jpg",
    "https://images.musement.com/cover/0002/10/thumb_109766_cover_header.jpeg",
    "https://img.freepik.com/premium-photo/helicopter-travel-scenes_883586-62811.jpg",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(imageList[0]);

  const handleMainImageClick = () => {
    setModalOpen(true);
  };

  const handleSideImageClick = (src: string) => {
    setSelectedImg(src);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-[url('/navbg.svg')]">
      <Title />
      <div
        className={`w-full relative h-auto flex justify-between pb-10 px-16 mt-8 ${
          modalOpen ? "filter blur-2xl" : ""
        }`}
      >
        <LeftBar />
        <div
          id="overview"
          className="w-3/5 shadow-sm rounded-xl mx-5 px-4 py-4"
        >
          {/* Main and Side Images */}
          <div className="flex gap-4">
            {/* Main Image */}
            <div>
              <img
                className="rounded-md cursor-pointer w-[600px] h-[350px] object-cover"
                src={selectedImg}
                alt="Main"
                onClick={handleMainImageClick}
              />
            </div>

            {/* Side Images */}
            <div className="flex flex-col gap-2">
              {imageList.map((src, index) => (
                <img
                  key={index}
                  className={`h-28 w-auto object-cover rounded-md cursor-pointer border transition ${
                    selectedImg === src ? "border" : "border-transparent"
                  }`}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleSideImageClick(src)}
                />
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="mt-6">
            <h1 className="text-3xl font-semibold">Overview</h1>
            <p className="text-md text-gray-700 mt-4">
  The Everest Base Camp Helicopter Tour is a breathtaking aerial adventure that offers a once-in-a-lifetime opportunity to witness the grandeur of the world’s highest mountain, Mount Everest (8,848 meters), without the need for days of trekking. Perfect for travelers short on time or seeking comfort, this luxurious tour soars over lush valleys, traditional Sherpa villages, glacial rivers, and iconic Himalayan peaks.
  <br />
  <br />
  Departing from Kathmandu, the helicopter flies through dramatic landscapes and lands at key points such as Lukla, Kalapatthar, or Everest Base Camp for short stops and photo opportunities. Kalapatthar (5,545 meters) provides a stunning vantage point for panoramic views of Everest and neighboring giants like Lhotse and Nuptse.
  <br />
  <br />
  This unforgettable journey blends the thrill of high-altitude flight with the serenity of the Himalayas, all within just a few hours. It’s the perfect choice for those seeking a safe, scenic, and spiritually uplifting encounter with the heart of the Everest region.
</p>

          </div>

          {/* Trip Content */}
          <TripGlance />
          <MajorHighlight />
          <Places />
          <RouteOverview />
          <RouteMap />
          <ItineraryPreview/>
          <Cost />
          <DatesAndPrices />
          <TravellerReview />
          <Faq />
          <RelatedTrips />
        </div>
        <RightBar />
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg}
              alt="Preview"
              className="w-full h-auto object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-[#EA3359]/10 transition"
            >
              <X className="h-5 w-5 text-[#EA3359]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
