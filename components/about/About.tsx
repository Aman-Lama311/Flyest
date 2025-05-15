import React from 'react';
import { useState } from 'react';
import { Shield, Award, Users, Clock, Check } from 'lucide-react';

const About = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  const features = [
    {
      id: 1,
      icon: <Award />,
      title: 'Best Price Guaranteed',
      description: 'We ensure you get the most competitive prices for our rescue services.'
    },
    {
      id: 2,
      icon: <Shield />,
      title: 'Certified & Trusted Service',
      description: 'Our team is fully certified and trusted by thousands of satisfied clients.'
    },
    {
      id: 3,
      icon: <Users />,
      title: 'Professional Rescue Team',
      description: 'Our highly trained professionals are ready to handle any situation.'
    },
    {
      id: 4,
      icon: <Clock />,
      title: '24/7 Customer Service',
      description: 'Were always available to assist you whenever you need help.'
    }
  ];

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#D62A4E]"></div>
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 rounded-full bg-[#D62A4E]"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#D62A4E]">Why Choose Us</h2>
          <div className="mx-auto w-20 h-1 mb-4 bg-[#D62A4E]"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We're dedicated to providing exceptional service with our team of professionals
          </p>
        </div>

        {/* Feature Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="flex flex-col items-center">
                <div className="p-3 mb-4 text-white bg-[#D62A4E] rounded-full">
                  {React.cloneElement(feature.icon, { 
                    size: 24, 
                    className: "transition-transform duration-300" + (hoveredFeature === feature.id ? " transform rotate-12" : "") 
                  })}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#D62A4E]">{feature.title}</h3>
                <p className="text-center text-gray-600">{feature.description}</p>
              </div>
              
              {/* Animated checkmark appears on hover */}
              <div 
                className={`absolute -top-2 -right-2 p-1 bg-red-500 rounded-full transition-opacity duration-300 ${
                  hoveredFeature === feature.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Check size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 font-semibold text-white transition-colors bg-red-600 rounded-full hover:bg-red-700">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;