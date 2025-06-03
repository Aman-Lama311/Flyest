"use client";

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
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative z-10 bg-white">
      {/* Hero Section */}
      <div className="w-full h-[80vh] relative z-0">
        <Image
          height={500}
          width={500}
          src="/flyimg/photo-1691215261305-8e9a8a45c2fa_14_11zon.webp"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Top gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-[20vh] bg-gradient-to-b from-black/70 to-transparent z-10" />
      </div>

      {/* Title Section */}
      <Title />

      {/* Main Layout */}
      <div className="relative z-20 w-full mx-auto flex flex-col md:flex-row gap-6 px-4 md:px-8 lg:px-16 mt-8 pb-10 bg-white">
        {/* Left Sidebar */}
        <LeftBar />

        {/* Main Content */}
        <div className="w-full md:w-[60%] shadow-sm rounded-xl px-4 py-4 bg-white">
          <TripGlance />

          {/* Overview Section */}
          <div className="mt-6">
            <h1 className="text-3xl font-semibold">Overview</h1>
            <p className="text-md text-gray-700 mt-4">
              Manaslu, the world's eighth-highest mountain at 8,163 meters, is a
              majestic and spiritually significant peak located in the Gorkha
              District of Nepal. Known as the "Mountain of the Spirit," its name
              is derived from the Sanskrit word Manasa, meaning soul or
              intellect...
            </p>
          </div>

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

        {/* Right Sidebar */}
        <aside className="hidden xl:block md:w-[20%] sticky top-[110px] h-fit self-start">
          <RightBar />
        </aside>
      </div>
    </div>
  );
};

export default Page;
