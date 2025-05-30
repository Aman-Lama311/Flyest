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

const Page = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1691215261305-8e9a8a45c2fa?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full h-[80vh] relative">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 top-0 h-[20vh] bg-gradient-to-b from-black/70 z-20" />
      </div>

      <Title />

      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 px-4 md:px-8 lg:px-16 mt-8 pb-10">
        {/* Left Sidebar */}

        <LeftBar />

        {/* Main Content */}
        <main className="w-full md:w-[60%] shadow-sm rounded-xl px-4 py-4 bg-white">
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
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block md:w-[20%] sticky top-[110px] h-fit self-start">
          <RightBar />
        </aside>
      </div>
    </div>
  );
};

export default Page;
