"use client";
import { X } from "lucide-react";
import { useState } from "react";

import Title from "../../../components/intineryBars/Title";
import LeftBar from "../../../components/intineryBars/LeftBar";
import TripGlance from "../../../components/tripGlance/TripGlance";
import MajorHighlight from "../../../components/tripGlance/MajorHighlight";
import Places from "../../../components/tripGlance/Places";
import RouteOverview from "../../../components/tripGlance/RouteOverview";
import AltitudeImg from "../../../components/tripGlance/AltitudeImg";
import RouteMap from "../../../components/tripGlance/RouteMap";
import Cost from "../../../components/tripGlance/Cost";
import Faq from "../../../components/tripGlance/Faq";
import RightBar from "../../../components/intineryBars/RightBar";
import TravellerReview from "../../../components/tripGlance/Review";
import Itinerary from "../../../components/intineryBars/Itinery";
import DatesAndPrices from "../../../components/intineryBars/DatesAndPrices";
import RelatedTrips from "../../../components/tripGlance/RelatedTrips";

const Page = () => {
  const imageList = [
    "https://himalayan-masters.com/wp-content/uploads/2024/05/Untitled-design-2024-05-22T114122.194-1.webp",
    "https://admin.ntb.gov.np/image-cache/Manaslu_View_from_Lho-1624808940.jpg?p=main&s=865d2a2a7ce83fed2413c359ee7fcf76",
    "https://www.magicalnepal.com/wp-content/uploads/2021/05/Tsum-Valley-Trek.jpg",
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
    <>
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
              Manaslu, the world's eighth-highest mountain at 8,163 meters, is a
              majestic and spiritually significant peak located in the Gorkha
              District of Nepal. Known as the "Mountain of the Spirit," its name
              is derived from the Sanskrit word Manasa, meaning soul or
              intellect. Manaslu is renowned for its raw beauty, towering
              snow-clad slopes, and remote, less-trodden trekking routes. The
              Manaslu Circuit Trek, which encircles the mountain, offers a
              spectacular journey through lush forests, ancient Buddhist
              monasteries, and culturally rich Tibetan-influenced villages.
              <br />
              <br />
              Unlike more commercial trekking routes such as Everest or
              Annapurna, the Manaslu region remains peaceful and authentic,
              attracting trekkers seeking solitude and unspoiled nature. The
              trail reaches its highest point at the challenging Larkya La Pass
              (5,106 meters), offering panoramic views of the Himalayas. With a
              blend of adventure, natural splendor, and cultural depth, Manaslu
              stands as a true symbol of Nepal's Himalayan heritage and
              spiritual landscape.
            </p>
          </div>

          {/* Trip Content */}
          <TripGlance />
          <MajorHighlight />
          <Places />
          <RouteOverview />
          <AltitudeImg />
          <RouteMap />
          <Itinerary />
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
    </>
  );
};

export default Page;
