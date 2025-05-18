'use client';

import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

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
      iconColor: 'text-[#00FFA3]',
      title: 'Best Price Guaranteed',
      titleColor: 'text-[#00FFA3]',
      textColor: 'text-[#00FFCC]',
      borderColor: 'border-[#00FFCC]',
      description:
        'We promise unbeatable pricing on all services, ensuring you get the best value without compromising quality.',
    },
    {
      id: 2,
      iconColor: 'text-[#FF6B6B]',
      title: 'Certified & Trusted Service',
      titleColor: 'text-[#FF6B6B]',
      textColor: 'text-[#FF8787]',
      borderColor: 'border-[#FF8787]',
      description:
        'Our certified team provides reliable and safe services prioritizing your confidence and peace of mind.',
    },
    {
      id: 3,
      iconColor: 'text-[#3B82F6]',
      title: 'Professional Rescue Team',
      titleColor: 'text-[#3B82F6]',
      textColor: 'text-[#60A5FA]',
      borderColor: 'border-[#60A5FA]',
      description:
        'Our experienced rescue team is available 24/7, trained to handle emergencies efficiently.',
    },
    {
      id: 4,
      iconColor: 'text-[#FBBF24]',
      title: '24/7 Customer Service',
      titleColor: 'text-[#FBBF24]',
      textColor: 'text-[#FCD34D]',
      borderColor: 'border-[#FCD34D]',
      description:
        'Round-the-clock support team to assist, guide, and resolve any issues during your journey.',
    },
  ];

  const icons = [Award, Shield, Users, Clock];

  return (
    <div className="relative w-full">
      {/* Corner Border Lines */}
      <div className="absolute top-[-10px] left-0 h-[calc(100%+20px)] border-l-1 border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute top-[-10px] right-0 h-[calc(100%+20px)] border-r-1 border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[30px] border-t-1 border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30px] border-b-1 border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[30px] border-t-1 border-[#00ffd0] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[30px] border-b-1 border-[#00ffd0] pointer-events-none"></div>

      <section className="relative w-full py-20 bg-black text-white rounded-lg">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              We’re dedicated to providing exceptional service with our team of professionals.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={feature.id}
                  className="relative min-h-[320px] p-6 rounded-xl text-white"
                >
                  {/* Border Corners & Lines for each card */}
                  <div className={`absolute top-0 left-0 h-full border-l-2 ${feature.borderColor}`} />
                  <div className={`absolute top-0 right-0 h-full border-r-2 ${feature.borderColor}`} />
                  <div className={`absolute top-0 left-0 w-[30px] border-t-2 ${feature.borderColor}`} />
                  <div className={`absolute bottom-0 left-0 w-[30px] border-b-2 ${feature.borderColor}`} />
                  <div className={`absolute top-0 right-0 w-[30px] border-t-2 ${feature.borderColor}`} />
                  <div className={`absolute bottom-0 right-0 w-[30px] border-b-2 ${feature.borderColor}`} />

                  {/* Content */}
                  <div className="flex items-center justify-between h-full">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`flex items-center justify-center rounded-full border-2 border-white/20 p-6 shadow-lg ${feature.iconColor}`}
                      >
                        <Icon size={60} />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="ml-6 text-left">
                      <h3 className={`text-4xl font-bold ${feature.titleColor}`}>{feature.title}</h3>
                      <p className={`mt-2 text-base ${feature.textColor}`}>{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button className="px-6 py-3 font-semibold text-white transition bg-[#D62A4E] rounded-full hover:bg-red-700">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
