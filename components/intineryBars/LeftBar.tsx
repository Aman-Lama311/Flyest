"use client";

import {
  Map,
  Eye,
  Compass,
  Landmark,
  Route,
  MapPinned,
  CalendarRange,
  DollarSign,
  CalendarDays,
  Users,
  HelpCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const tripSections = [
  { label: "Overview", icon: Eye, color: "#EA3359" },
  { label: "Trip Glance", icon: Compass, color: "#14B8A6" },
  { label: "Major Highlights", icon: Landmark, color: "#F59E0B" },
  { label: "Route Overview", icon: Route, color: "#8B5CF6" },
  { label: "Route Map", icon: MapPinned, color: "#EF4444" },
  { label: "Itinerary", icon: CalendarRange, color: "#10B981" },
  { label: "Costs", icon: DollarSign, color: "#F97316" },
  { label: "Date & Prices", icon: CalendarDays, color: "#3B82F6" },
  { label: "Traveller Review", icon: Users, color: "#E11D48" },
  { label: "FAQs", icon: HelpCircle, color: "#6B7280" },
];

const LeftBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = (section: string) => {
    const id = section.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "";
      for (let i = 0; i < tripSections.length; i++) {
        const sectionId = tripSections[i].label
          .toLowerCase()
          .replace(/\s+/g, "-");
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 150) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="w-1/4 hidden lg:block px-4 pb-4 sticky top-[110px] h-2/6">
      <div className="flex items-center mb-2">
        <Map className="w-6 h-6 text-[#EA3359]" />
        <h1 className="text-xl font-semibold">Trip Sections</h1>
      </div>
      <hr className="text-gray-200" />
      <div className="mt-3">
        <ul className="flex flex-col">
          {tripSections.map(({ label, icon: Icon, color }, index) => {
            const sectionId = label.toLowerCase().replace(/\s+/g, "-");
            const isActive = sectionId === activeSection;

            return (
              <li
                key={index}
                onClick={() => handleScroll(label)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-all duration-300 text-base ${
                  isActive
                    ? "bg-[#FDECEF] text-[#EA3359] font-medium"
                    : "hover:translate-x-1"
                }`}
              >
                <div className="p-1.5 bg-[#FDECEF] rounded-md">
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
