"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { blogData } from "../../../components/blogData/blogData";
import Image from "next/image";

const Blogs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative z-10 w-full h-[50vh] px-6 sm:px-16 border-b-rounded-xl bg-white">
        {/* Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 z-1">
          <MessageSquare size={120} color="#B516B5" />
        </div>
        <Image
          height={500}
          width={500}
          src="https://static.vecteezy.com/system/resources/previews/026/712/861/non_2x/dark-grainy-gradient-abstract-background-red-orange-purple-glowing-light-texture-free-photo.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-20"
        />
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-[#B516B5]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Our Blogs
          </h2>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="relative z-10 py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {blogData.map((blog) => (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className="bg-white border border-[#B516B5]/20 rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-[#B516B5] mb-2 hover:text-[#a010a0] transition-colors cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-black text-sm">{blog.description}</p>
                </div>
                <Image
                  height={500}
                  width={500}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover rounded-xl mt-4"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
