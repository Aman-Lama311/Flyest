"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { blogData } from "../../../components/blogData/blogData";

const Blogs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] px-6 sm:px-16 border-b-rounded-xl bg-[url('/navbg.svg')]">
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 z-1">
          <MessageSquare size={120} color="white" />
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/712/861/non_2x/dark-grainy-gradient-abstract-background-red-orange-purple-glowing-light-texture-free-photo.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-60"
        />
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Our Blogs
          </h2>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-[url('/navbg.svg')]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {blogData.map((blog) => (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className="bg-zinc-850 rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FA2A55] transition-colors cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-white text-sm">{blog.description}</p>
                </div>
                <img
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
