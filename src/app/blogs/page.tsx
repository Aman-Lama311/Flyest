"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { blogData } from "../../../components/blogData/blogData";

const Blogs = () => {
  return (
    <div className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-[url('/navbg.svg')]">
      <div className="container mx-auto px-6 w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white">
          Our Blogs
        </h2>

        <p className="text-lg text-white mb-16 max-w-2xl mx-auto">
          Dive into expert tips, inspiring travel stories, and must-know guides
          to make the most of your mountain adventures around the world.
        </p>

        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full bg-zinc-800"></div>
          </div>
          <div className="relative flex justify-center gap-4">
            <div className="bg-[#FA2A55] text-white px-4 py-2 rounded-full">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 space-y-4">
          {blogData.map((blog) => (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="bg-zinc-850 overflow-hidden text-left group"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FA2A55] transition-colors cursor-pointer">
                  {blog.title}
                </h3>
                <p className="text-white text-sm mb-4">{blog.description}</p>
              </div>
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-65 object-cover cursor-pointer rounded-2xl"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
