"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { blogData } from "../../../../components/blogData/blogData";
import ReactMarkdown from "react-markdown";
import { MessageSquare, ArrowLeft } from "lucide-react";

const BlogPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = typeof params?.id === "string" ? parseInt(params.id) : null;
  const blog = blogData.find((b) => b.id === id);


  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">Blog not found</h2>
      </div>
    );
  }

  return (
    <main className="bg-[url('/navbg.svg')] text-gray-800 py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto relative">
        {/* Back Button */}
        <button
          onClick={() => router.push("/blogs")}
          className="absolute -top-14 left-0 flex items-center text-white hover:text-[#FA2A55] transition-colors text-base font-semibold"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Blogs
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-[#FA2A55] leading-tight">
          {blog.title}
        </h1>
        <p className="text-lg text-white mb-6">{blog.description}</p>

        {/* Author & Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white mb-8">
          <span>
            By <span className="text-white font-medium">{blog.author}</span>
          </span>
          <span>{blog.date}</span>
          <span className="flex items-center gap-1 text-red-400 font-medium">
            <MessageSquare className="w-4 h-4" />
            {blog.comments} comments
          </span>
        </div>
{/* Wrapper for image + content */}
<div className="w-full flex flex-col items-center">

  {/* Container with fixed max width */}
  <div className="w-full max-w-[900px]">

    {/* Image */}
    <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto block"
      />
    </div>

    {/* Content */}
    <article className="prose prose-lg prose-blue space-y-6 text-lg leading-relaxed text-white text-left">
      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </article>

  </div>
  
</div> 
</div>

    </main>
  );
};

export default BlogPage;
