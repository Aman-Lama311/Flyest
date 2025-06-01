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
import Image from "next/image";

const Page = () => {
  const heroImage = "/flyimg/photo-1722463926354-aa706b4db1c2_15_11zon.webp";

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative  z-10 bg-white">
      {/* Hero Section */}
      <div className="w-full h-[80vh] relative z-0">
        <Image
          height={500}
          width={500}
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 top-0 h-[20vh] bg-gradient-to-b from-black/70 z-20" />
      </div>

      <Title />

      <div
        className={`relative z-20 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 px-4 md:px-8 lg:px-16 mt-8 pb-10 ${
          modalOpen ? "filter blur-2xl" : ""
        }`}
      >
        {/* Left Sidebar */}

        <LeftBar />

        {/* Center/Main Content */}
        <main className="w-full md:w-[60%] shadow-sm rounded-xl px-4 py-4 bg-white">
          <TripGlance />
          <div className="mt-6">
            <h1 className="text-3xl font-semibold">Overview</h1>
            <p className="text-md text-gray-700 mt-4">
              The Everest Base Camp Helicopter Tour is a breathtaking aerial
              adventure...
              {/* shortened for brevity */}
            </p>
          </div>
          <MajorHighlight />
          <Places />
          <RouteOverview />
          <RouteMap />
          <ItineraryPreview />
          <Cost />
          <DatesAndPrices />
          <TravellerReview />
          <Faq />
          <RelatedTrips />
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block md:w-[20%] sticky top-[110px] h-fit self-start">
          <RightBar />
        </aside>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              height={1500}
              width={1500}
              src={heroImage}
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
