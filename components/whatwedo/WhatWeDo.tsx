import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='h-screen w-full bg-[#faf3f3] flex items-center font-["poppins"] object-cover' style={{ backgroundImage: "url('/bg3.png')" }}>
      <div className='h-full w-[50%] py-14 px-32'>
        <img src="./what.svg" alt="" className='bg-cover h-full' />
      </div>
      <div className='h-full w-[50%] py-72 px-32'>
        <h1 className='text-black text-6xl'>Discover our all <span className='text-[#FF4E58]'>services</span></h1>
            <button className="relative overflow-hidden h-14 w-52 border-2 border-gray-500 hover:border-none rounded-full mt-16 text-black group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    What we do
                </span>
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
        </button>
      </div>
    </div>
  )
}

export default WhatWeDo
