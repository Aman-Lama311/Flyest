'use client'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative h-screen w-full bg-black text-white object-cover'
     style={{ backgroundImage: "url('/footer')"
      
      }}>
      <div className='flex items-center justify-center py-10'>

        {/* first box */}
        <div className='h-[70vh] w-1/3 px-12 py-14'>
        <h1 className='text-7xl leading-20'>Exploring paths unknown, one step at a time.</h1></div>

        {/* second box */}
        <div className='h-[70vh] w-1/5 text-2xl font-medium py-16 px-14'>
        <h2 className=''>GENERAL</h2>
        <div className='mt-4'>
        <p>Home</p>
        <p>About</p>
        <p>Insights</p>
        <p>News</p>
        </div>
        </div>
        
         {/* third box */}
         <div className='h-[70vh] w-1/4 text-2xl font-medium py-16 px-14'>
        <h2 className=''>SOLUTIONS</h2>
        <div className='mt-4'>
        <p>Trekking</p>
        <p>Hiking</p>
        <p>Insights</p>
        <p>Blogs</p>
        </div>
        </div>


        {/* forth box */}
        <div className='h-[70vh] w-1/5 text-2xl font-medium py-16 px-14'>
        <h2 className=''>General</h2>
        <div className='mt-4 '>
        <p>Home</p>
        <p>About</p>
        <p>Insights</p>
        <p>News</p>
        </div>
        </div>

        

      </div>
      <div className='h-24 w-full flex items-center justify-between px-16'>
         <img src="/logo1.png" alt="" className='h-14' />
         <p className='text-[1rem] font-medium'>© 2025 Flyeast Experience Nepal. All Rights Reserved.
         Website by webX.</p>
         
      </div>
      
    </div>
  )
}

export default Footer
