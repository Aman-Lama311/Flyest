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
    <>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-y: hidden;
        }
      `}</style>

      <div className="min-h-screen w-full bg-[url('/navbg.svg')] text-white flex flex-col md:flex-row overflow-hidden relative">
        <div className="absolute top-0 left-0 w-40 h-20 bg-red-500 opacity-10 rounded-full -translate-x-20 -translate-y-20" />

        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-[url('/navbg.svg')] p-6 sm:p-10 md:p-16 flex flex-col justify-center relative z-10">
          <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            What our happy clients say
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-red-500 mb-6" />
          <p className="text-gray-300 mb-8 flex items-center text-sm sm:text-base">
            <Star size={16} className="text-yellow-400 mr-2" fill="#FACC15" />
            <span className="font-semibold">4.9</span>
            <span className="mx-2">•</span>
            <span>Trip Advisor</span>
          </p>

          <div className="flex items-center gap-4 mt-10 overflow-auto mt-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "w-10 sm:w-12 bg-red-500"
                    : "w-2 sm:w-3 bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>

          <button className="group bg-red-500 hover:bg-red-600 text-white py-3 px-6 sm:px-8 rounded-md w-fit transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-200 flex items-center text-sm sm:text-base">
            <span>View More Reviews</span>
            <ChevronRight
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[url('/navbg.svg')] p-5 sm:p-8 md:p-10 flex flex-col justify-center relative">
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10">
            <Quote size={48} className="text-red-500 opacity-20 sm:size-64" />
          </div>

          <div
            className={`bg-white text-black rounded-xl p-6 sm:p-8 shadow-xl mb-6 z-10 border-l-4 border-red-500 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Rating Stars */}
            <div className="flex mb-2">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 mr-1"
                  fill="#FACC15"
                />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i + testimonials[currentIndex].rating}
                  size={18}
                  className="text-gray-300 mr-1"
                />
              ))}
            </div>

            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-4 object-cover border border-red-100 shadow"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 px-1 sm:px-2">
            <p className="text-gray-400 font-medium text-sm sm:text-base">
              <span className="text-red-500">{currentIndex + 1}</span>/
              {testimonials.length}
            </p>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="p-2 sm:p-3 rounded-full bg-white text-black shadow-md hover:shadow-lg border border-gray-100 hover:border-red-200 hover:text-red-500 transition-all duration-300"
                disabled={isAnimating}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 sm:p-3 rounded-full bg-red-500 text-white shadow-md hover:shadow-lg hover:bg-red-600 transition-all duration-300"
                disabled={isAnimating}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="w-full overflow-x-auto scrollbar-hide mt-6 pl-1 sm:pl-4 pr-6 sm:pr-8">
            <div className="flex space-x-4 items-center w-max">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`min-w-[180px] sm:min-w-[200px] max-w-[200px] p-3 sm:p-4 rounded-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                    index === currentIndex
                      ? "bg-white text-black border-l-4 border-red-500 shadow-lg"
                      : "bg-white text-black border border-gray-100 hover:border-red-200 hover:shadow-md"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-2 sm:mb-3 object-cover border"
                  />
                  <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-gray-600 text-xs">
                    {testimonial.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
