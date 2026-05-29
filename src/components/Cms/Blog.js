"use client";
 
import Image from "next/image";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
 
export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
 
  const blogPosts = [
    {
      id: 1,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog1.png",
    },
    {
      id: 2,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog2.png",
    },
    {
      id: 3,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog3.png",
    },
    {
      id: 4,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog1.png",
    },
    {
      id: 5,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog2.png",
    },
    {
      id: 6,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog3.png",
    },
    {
      id: 7,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog1.png",
    },
    {
      id: 8,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog2.png",
    },
    {
      id: 9,
      date: "April 18, 2026",
      title: "SELF CARE HAMPER BY GIFTTORY",
      image: "/images/blog3.png",
    },
  ];
 
  return (
    <div className="w-full bg-white min-h-screen">
      {/* ========================================== */}
      {/* CONDITION 1: SHOW BLOG DETAILS (image_c835ef.png) */}
      {/* ========================================== */}
      {selectedPost ? (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12 animate-fadeIn mt-14">
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black mb-6 transition-all"
          >
            <span>← Back to Blogs</span>
          </button>
 
          {/* 1. Large Top Image */}
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 mb-8 shadow-sm">
            <Image
              src={selectedPost.image}
              alt={selectedPost.title}
              fill
              priority
              className="object-cover"
            />
          </div>
 
          {/* 2. Blog Title */}
          <h2 className="text-xl md:text-2xl font-bold text-[#0B2E24] font-serif tracking-wide mb-6 uppercase">
            {selectedPost.title}
          </h2>
 
          {/* 3. Description Content Block */}
          <div className="space-y-6 text-sm md:text-[15px] text-gray-600 leading-relaxed font-sans text-justify">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
 
            {/* Bullet List Sub-heading */}
            <div className="pt-2">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Lorem ipsum Dummy Text
              </h3>
             
              {/* Custom Check Icon Bullets */}
              <ul className="space-y-3 pl-1">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <FiCheckCircle className="text-[#0B2E24] text-lg shrink-0 mt-0.5 fill-[#0B2E24] stroke-white" />
                    <span>It was popularised in the 1960s with.</span>
                  </li>
                ))}
              </ul>
            </div>
 
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
 
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
 
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
 
            {/* Information Disclosure Section */}
            <h3 className="text-sm md:text-base font-bold text-gray-900 pt-2 text-left">
              Information Disclosure
            </h3>
 
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
 
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
 
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
 
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      ) : (
       
        <>
          {/* Header Banner Section */}
          <div className="w-full relative h-[250px] md:h-[520px] overflow-hidden">
            <Image
              src="/images/blog-bg.png"
              alt="Blogs Header Background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide">
                Blogs
              </h1>
            </div>
          </div>
 
          {/* Blog Posts Grid Section */}
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Blog Image Container */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 mb-4 shadow-sm">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
 
                  {/* Blog Post Content */}
                  <div className="space-y-1.5 px-1">
                    <span className="text-[12px] md:text-xs font-normal text-[#353A39] font-sans tracking-wide">
                      {post.date}
                    </span>
                    <h3 className="text-sm md:text-base font-semibold text-[#0B2E24] font-serif leading-snug group-hover:text-black transition-colors uppercase">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}