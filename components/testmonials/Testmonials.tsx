import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Isabelle",
      position: "BA at Robin",
      text: "An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risus diam eget risus varius blandit sit amet non magna.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Mara Hilpert",
      position: "Web Designer",
      text: "Exceptional service from start to finish! The attention to detail and personalized experience made our trip unforgettable. Would highly recommend to anyone looking for a stress-free travel experience.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Thomas Greene",
      position: "Marketing Director",
      text: "Our family vacation was perfectly planned down to the smallest detail. The accommodations were superb and the recommended activities were exactly what we were looking for.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Sophia Chen",
      position: "CEO at Luminex",
      text: "As a business traveler, I appreciate efficiency and reliability. This service consistently exceeds my expectations with their professionalism and responsiveness.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

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

      <div className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row overflow-hidden relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-red-500 opacity-10 rounded-full -translate-x-20 -translate-y-20"></div>

        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center relative z-10 mt-[-150px]">
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            What our happy clients say
          </h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="text-gray-300 mb-10 flex items-center">
            <Star size={16} className="text-yellow-400 mr-2" fill="#FACC15" />
            <span className="font-semibold">4.9</span>
            <span className="mx-2">•</span>
            <span>Trip Advisor</span>
          </p>

          <div className="flex space-x-2 mb-10">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "w-12 bg-red-500"
                    : "w-3 bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>

          <button className="group bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-md w-fit transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-200 flex items-center">
            <span>View More Reviews</span>
            <ChevronRight
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-14 right-14">
            <Quote size={64} className="text-red-500 opacity-20" />
          </div>

          <div
            className={`bg-white text-black rounded-xl p-8 shadow-xl mb-8 z-10 border-l-4 border-red-500 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Rating Stars */}
            <div className="flex mb-4">
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

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full mr-4 object-cover border border-red-100 shadow"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-400 font-medium">
              <span className="text-red-500">{currentIndex + 1}</span>/
              {testimonials.length}
            </p>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white text-black shadow-md hover:shadow-lg border border-gray-100 hover:border-red-200 hover:text-red-500 transition-all duration-300"
                disabled={isAnimating}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-red-500 text-white shadow-md hover:shadow-lg hover:bg-red-600 transition-all duration-300"
                disabled={isAnimating}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Preview Cards */}
          <div
            className="flex space-x-4 overflow-x-auto mt-10 scrollbar-hide"
            style={{ maxWidth: "100%" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`min-w-[200px] max-w-[200px] p-4 rounded-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                  index === currentIndex
                    ? "bg-white text-black border-l-4 border-red-500 shadow-lg"
                    : "bg-white text-black border border-gray-100 hover:border-red-200 hover:shadow-md"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mb-3 object-cover border"
                />
                <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                <p className="text-gray-600 text-xs">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
