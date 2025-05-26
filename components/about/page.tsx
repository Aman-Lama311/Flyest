"use client";

import React from "react";
import { Shield, Award, Users, Clock } from "lucide-react";
import Title from "../../components/title/Title";

interface Feature {
  id: number;
  iconColor: string;
  title: string;
  titleColor: string;
  textColor: string;
  borderColor: string;
  description: string;
}

const About: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      iconColor: "text-[#00FFA3]",
      title: "Best Price Guaranteed",
      titleColor: "text-[#00FFA3]",
      textColor: "text-[#00FFCC]",
      borderColor: "border-[#00FFCC]",
      description:
        "We promise unbeatable pricing on all services, ensuring you get the best value without compromising quality.",
    },
    {
      id: 2,
      iconColor: "text-[#FF6B6B]",
      title: "Certified & Trusted Service",
      titleColor: "text-[#FF6B6B]",
      textColor: "text-[#FF8787]",
      borderColor: "border-[#FF8787]",
      description:
        "Our certified team provides reliable and safe services prioritizing your confidence and peace of mind.",
    },
    {
      id: 3,
      iconColor: "text-[#3B82F6]",
      title: "Professional Rescue Team",
      titleColor: "text-[#3B82F6]",
      textColor: "text-[#60A5FA]",
      borderColor: "border-[#60A5FA]",
      description:
        "Our experienced rescue team is available 24/7, trained to handle emergencies efficiently.",
    },
    {
      id: 4,
      iconColor: "text-[#FBBF24]",
      title: "24/7 Customer Service",
      titleColor: "text-[#FBBF24]",
      textColor: "text-[#FCD34D]",
      borderColor: "border-[#FCD34D]",
      description:
        "Round-the-clock support team to assist, guide, and resolve any issues during your journey.",
    },
  ];

  const icons = [Award, Shield, Users, Clock];

  return (
    <div className="relative w-full">
      {/* Corner Border Lines */}
      <div className="absolute top-[-10px] left-0 h-[calc(100%+20px)] border-l border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute top-[-10px] right-0 h-[calc(100%+20px)] border-r border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[30px] border-t border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30px] border-b border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[30px] border-t border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[30px] border-b border-[#00ffd0] pointer-events-none"></div>

      <section className="relative w-full py-14 md:py-18 bg-[url('/navbg.svg')] text-white rounded-lg font-sans">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <Title
            title={"Why Choose Us"}
            discription={
              "We're dedicated to providing exceptional service with our team of professionals."
            }
          />

          {/* CTA Button */}
          {/* <div className="mt-10  text-center">
            <button className="px-5 py-2.5 font-semibold text-white transition bg-[#D62A4E] rounded-lg hover:bg-red-700 text-sm sm:text-base">
              Learn More About Our Services
            </button>
          </div> */}

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-18">
            {features.map((feature, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={feature.id}
                  className="relative p-5 sm:p-6 md:p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Border Corners & Lines for each card */}
                  <div
                    className={`absolute top-0 left-0 h-full border-l ${feature.borderColor}`}
                  />
                  <div
                    className={`absolute top-0 right-0 h-full border-r ${feature.borderColor}`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-[30px] border-t ${feature.borderColor}`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-[30px] border-b ${feature.borderColor}`}
                  />
                  <div
                    className={`absolute top-0 right-0 w-[30px] border-t ${feature.borderColor}`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-[30px] border-b ${feature.borderColor}`}
                  />

                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center rounded-full border border-white/20 p-4 ${feature.iconColor} flex-shrink-0`}
                    style={{ minWidth: 60, minHeight: 60 }}
                  >
                    <Icon size={32} />
                  </div>

                  {/* Text */}
                  <div className="mt-3 md:mt-0 md:ml-5 text-left flex-1">
                    <h3
                      className={`text-2xl sm:text-4xl font-bold ${feature.titleColor}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`mt-1 text-lg sm:text-xl ${feature.textColor}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
