import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import {trek} from './TrekCardData'


const TrekCard = () => {
  return (
    <div className='w-full h-[170vh] bg-[#faf3f3]' >

        {/* header part */}
        <div className='py-24 px-24'>
            <h1 className='text-[6rem] leading-24'><span className='text-[#FB2C36]'>Upcoming</span><br /><span className='text-[#4A4A4A]'>Trekking</span></h1>
            <div className='flex items-end justify-between'>
            <p className='text-[2rem] leading-12 text-[#6C6F7F] mt-2'>Enhance your pace and precision, spark meaningful <br /> conversations for team alignment, and identify <br /> crucial decision points as you gear up <br /> for your next trek.</p>
            <div className='flex items-center justify-center gap-4 px-20'>
                <div className='h-16 w-16 bg-[#FB2C36] rounded-lg flex items-center justify-center'>
                    <LuArrowLeft size={40} />
                </div>
                <div className='h-16 w-16 bg-[#FB2C36] rounded-lg flex items-center justify-center'>
                <LuArrowRight size={40} />
                </div>
                <div className='h-16 w-40 bg-[#FB2C36] rounded-lg flex items-center justify-center gap-8'>
                    <h1 className='text-[1.3rem] font-bold'>More</h1>
                    <div className='h-12 w-12 bg-white rounded-lg flex items-center justify-center'>
                    <LuArrowRight size={40} className='text-[#FB2C36]' />
                    </div>
                </div>
            </div>
            
            </div>
        </div>
      

      <div className='h-screen w-full flex items-center justify-left gap-6 px-24'>

     {
        trek.map((trek)=>(
            <div className='h-[90vh] w-1/3 bg-white rounded-2xl overflow-hidden'>
            <div className='w-full h-[40vh] bg-blue-500'>
                <img src={trek.imgSrc} alt={trek.title} className='object-cover h-full' />
            </div>
            <div className='px-10 py-10'>
                <h1 className='text-[#FB2C36] text-5xl'>{trek.title}</h1>
                <p className='text-[1.4rem] mt-4 text-[#6C6F7F]'>{trek.desc}</p>
                    <div className='h-16 bg-[#FB2C36] rounded-lg flex items-center justify-between px-2 mt-14'>
                            <h1 className='text-[1.3rem] font-bold ml-4'>Book Now</h1>
                            <div className='h-12 w-12 bg-white rounded-lg flex items-center justify-center'>
                                <LuArrowRight size={40} className='text-[#FB2C36]' />
                            </div>
                    </div>
            </div>
            </div>
    
            
            
          

        ))
     }
    </div>
    </div>
  )
}

export default TrekCard
