"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { blogData } from "../../../../components/blogData/blogData";
import ReactMarkdown from "react-markdown";
import { MessageSquare, ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";

const BlogPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = typeof params?.id === "string" ? parseInt(params.id) : null;
  const blog = blogData.find((b) => b.id === id);

  const relatedBlogs = blogData.filter((b) => b.id !== id).slice(0, 3);

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#B516B5]">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="relative z-10 bg-white text-black py-36 lg:py-40 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black/40 to-transparent"></div>
      <div className="mx-auto relative max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => router.push("/blogs")}
          className="absolute -top-14 left-0 flex items-center text-black hover:text-[#B516B5] transition-colors text-base font-semibold cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Blogs
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-[#B516B5] leading-tight">
          {blog.title}
        </h1>
        <p className="text-lg text-gray-800 mb-6">{blog.description}</p>

        {/* Author & Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
          <span>
            By <span className="font-medium">{blog.author}</span>
          </span>
          <span>{blog.date}</span>
          <span className="flex items-center gap-1 text-[#B516B5] font-medium">
            <MessageSquare className="w-4 h-4" />
            {blog.comments} comments
          </span>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
          <Image
            height={500}
            width={500}
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto block"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-p:text-gray-800 prose-a:text-[#B516B5] prose-headings:text-black space-y-6 text-lg leading-relaxed text-left mb-16">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </article>

        {/* Related Blogs */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-[#B516B5] text-center">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                onClick={() => router.push(`/blogs/${relatedBlog.id}`)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#B516B5] transition-all duration-300 cursor-pointer group hover:transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    height={500}
                    width={500}
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-[#B516B5] transition-colors duration-300">
                    {relatedBlog.title}
                  </h3>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {relatedBlog.description}
                  </p>

                  {/* Card Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {relatedBlog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedBlog.date}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-[#B516B5]">
                      <MessageSquare className="w-3 h-3" />
                      {relatedBlog.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/blogs")}
              className="inline-flex items-center px-8 py-3 bg-[#B516B5] text-white font-semibold rounded-full hover:bg-[#9d129d] transition-colors duration-300 group"
            >
              View All Articles
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
