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
    <main className="bg-white text-gray-800 py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto relative">
        {/* Back Button */}
        <button
          onClick={() => router.push("/blogs")}
          className="absolute -top-14 left-0 flex items-center text-gray-700 hover:text-blue-500 transition-colors text-base font-semibold"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Blogs
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-black leading-tight">
          {blog.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{blog.description}</p>

        {/* Author & Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
          <span>
            By <span className="text-gray-700 font-medium">{blog.author}</span>
          </span>
          <span>{blog.date}</span>
          <span className="flex items-center gap-1 text-blue-600 font-medium">
            <MessageSquare className="w-4 h-4" />
            {blog.comments} comments
          </span>
        </div>

        {/* Image */}
        <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-12 border border-gray-200">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-blue space-y-6 text-lg leading-relaxed text-gray-700">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
};

export default BlogPage;
