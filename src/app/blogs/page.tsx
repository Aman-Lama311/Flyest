"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { blogData } from "../../../components/blogData/blogData";

const Blogs = () => {
  return (
    <>
      <div className="relative w-full h-[50vh] px-16 border-b-rounded-xl bg-[url('/navbg.svg')]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/712/861/non_2x/dark-grainy-gradient-abstract-background-red-orange-purple-glowing-light-texture-free-photo.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-60"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white">
            Our Blogs
          </h2>

          <p className="text-lg text-white mb-16 max-w-2xl mx-auto">
            Dive into expert tips, inspiring travel stories, and must-know
            guides to make the most of your mountain adventures around the
            world.
          </p>
        </div>
      </div>
      <div className="py-16 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-[url('/navbg.svg')]">
        <div className="container mx-auto px-6 w-full text-center">
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
    </>
  );
};

export default Blogs;
