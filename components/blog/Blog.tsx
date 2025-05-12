import React from 'react'
import {blog} from './Blogdata'

const Blog = () => {
  return (
    <div className='h-screen w-full px-20  bg-[#faf3f3]' >
      <h1 className='text-black text-6xl'>Our Latest <span className='text-[#FF4E58]'>Blogs</span></h1>
      <div className='flex items-center justify-center gap-6 mt-10'>

    {/* first blog */}
    {
      blog.map((blog)=>(
        <div key={blog.id} className="relative h-[80vh] w-[30%] overflow-hidden">
        <img
           src={blog.imgSrc}
           alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover"
            />
                <div className="absolute inset-0 bg-black opacity-50 z-10" />
                <div className="absolute z-20 ml-16 mr-10">
                <p className='text-md font-medium text-white mt-16 '>{blog.date}</p>
                <h2 className="text-white text-[2.6rem] mt-80 font-light leading-12">{blog.title}</h2>
                <p className="group relative inline-block text-md font-medium text-white mt-8 hover:cursor-pointer">
                 Read the article
                 <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FF4E58] transition-all duration-300 group-hover:w-full"></span>
                 </p>

          </div>
        </div>
      ))
    }
      
      </div>
    </div>
  )
}

export default Blog
