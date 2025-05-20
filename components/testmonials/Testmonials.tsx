import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Isabelle',
    role: 'SA at Robin',
    message:
      'An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risus eros egestas risus varius blandit sit amet non magna.',
  },
  {
    name: 'Marco Hilpert',
    role: 'Web Designer',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor.',
  },
  {
    name: 'Marco Hilpert',
    role: 'Web Designer',
    message:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    name: 'Marco Hilpert',
    role: 'Web Designer',
    message:
      'Suspendisse potenti. Phasellus euismod libero in neque molestie et elementum nulla commodo.',
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What our happy clients say</h2>
          <p className="text-gray-500 mb-6">Trip Advisor</p>
          <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
               View More Reviews
                  </button>

          <div className="flex items-center gap-4 mt-10 overflow-auto mt-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors duration-200 ${
                  index === activeIndex
                    ? 'bg-white text-black shadow'
                    : 'bg-transparent text-gray-500'
                }`}
              >
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  <span>{testimonial.name}</span>
                </div>
                <p className="text-xs text-left">{testimonial.role}</p>
              </button>
            ))}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow ml-2">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Right Side - Card Inline */}
        <div className="shadow-xl rounded-xl bg-white p-6 mt[50px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300" />
            <div>
              <p className="font-semibold text-gray-800">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">c
            {testimonials[activeIndex].message}
          </p>
          <div className="text-3xl text-gray-300 font-bold text-right">“”</div>
        </div>
      </div>
    </section>
  );
}
