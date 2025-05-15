import React from 'react';

const CallToAction = () => {
  return (
    <div className="w-full py-24 bg-[#FAF3F3]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center px-4">
        
        {/* Left Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Why Choose Flyeast Nepal For Your Next Adventures?
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            An enhanced safety record provides peace of mind while you explore the breathtaking heights of the Himalayas. Experience unparalleled service with our team of seasoned professionals dedicated to making your journey memorable.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-10">
            {[
              'Helicopter Rescue',
              "Immediate Horse Rider's Support",
              'Life Insurance',
            ].map((feature, index) => (
              <div className="flex items-center" key={index}>
                <div className="w-7 h-7 rounded-full bg-[#FF4E58] flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 text-base md:text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#FF4E58] text-white text-lg font-semibold py-3 px-8 rounded-md hover:bg-red-600 transition duration-300">
            Read more
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden">
          <div className='bg-red-500 h-[65vh] w-[40vw] obje' >
          <img src="https://admin.ntb.gov.np/image-cache/ebc_tk_adventure_2-1624450765.jpeg?p=main&s=1f72965258be9625bee4886c373424ad" alt="Logo" className="inline-block h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
