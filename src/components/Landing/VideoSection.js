"use client"
import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  // Test Mock Datasets containing source tracking matrices
  const videosList = [
    {
      id: 1,
      thumbnail: "/images/video1.png",
      creatorName: "LARA",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      thumbnail: "/images/video2.png",
      creatorName: "LARA",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
     {
      id: 3,
      thumbnail: "/images/video3.png",
      creatorName: "LARA",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 4,
      thumbnail: "/images/video4.png",
      creatorName: "LARA",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FDFCF0] py-14 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* === HEADER SECTION (Figma Exact Typography & Dots) === */}
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#0b2f23] tracking-wide relative inline-block">
            Videos
          </h2>
          {/* Custom Bottom Line Marker Pattern with trailing dots */}
             <div className="flex items-center gap-2">
          <div className="h-[2px] w-12 bg-[#0B2E24]"></div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B2E24]"></span>{" "}
            {/* Big */}
            <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>{" "}
            {/* Medium */}
            <span className="w-0.5 h-0.5 rounded-full bg-[#0B2E24]"></span>{" "}
            {/* Small */}
          </div>
        </div>
        </div>

        {/* === MAIN RESPONSIVE CARDS GRID CONTAINER === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videosList.map((item) => {
            
            // Render Option A: Dual Split Vertical Nested Blocks (Card Column 3)
            if (item.isStacked) {
              return (
                <div key={item.id} className="flex flex-col gap-4 h-[440px]">
                  {/* Top Nested Block */}
                  <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                    <img 
                      src={item.topItem.thumbnail} 
                      alt="Product macro view" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#0b2f23] shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Play size={18} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>
                    {/* User Meta Data Row */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <img src={item.topItem.creatorAvatar} alt={item.topItem.creatorName} className="w-6 h-6 rounded-full border border-white/40 object-cover" />
                      <span className="text-xs font-bold text-white tracking-wider">{item.topItem.creatorName}</span>
                    </div>
                  </div>

                  {/* Bottom Nested Block */}
                  <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                    <img 
                      src={item.bottomItem.thumbnail} 
                      alt="Jewelry item perspective" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#0b2f23] shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Play size={18} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>
                    {/* User Meta Data Row */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <img src={item.bottomItem.creatorAvatar} alt={item.bottomItem.creatorName} className="w-6 h-6 rounded-full border border-white/40 object-cover" />
                      <span className="text-xs font-bold text-white tracking-wider">{item.bottomItem.creatorName}</span>
                    </div>
                  </div>
                </div>
              );
            }

            // Render Option B: Regular Full-Height Vertical Video Cards
            return (
              <div 
                key={item.id} 
                className="relative w-full h-[440px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm bg-gray-100"
              >
                {/* Background Video Cover Thumbnail */}
                <img 
                  src={item.thumbnail} 
                  alt={item.title || "Video Showcase"} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Visual Overlay Layer for cleaner contrast readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Centered Play Button Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0b2f23] shadow-lg transform group-hover:scale-110 transition-transform duration-300 ease-out">
                    <Play size={22} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>

                {/* Core Descriptive Text Details (Conditional Formatting logic applied) */}
                {item.title && (
                  <div className="absolute top-1/2 left-0 right-0 transform translate-y-8 px-5 text-center pointer-events-none group-hover:translate-y-6 transition-transform duration-500">
                    <p className="text-white text-lg font-serif font-medium leading-snug drop-shadow-sm">
                      {item.title}
                    </p>
                  </div>
                )}

                {/* Floating User Account Profile Meta Data Row */}
                <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                  <img 
                    src={item.creatorAvatar} 
                    alt={item.creatorName} 
                    className="w-7 h-7 rounded-full border border-white/50 object-cover shadow-sm"
                  />
                  <span className="text-xs font-bold text-white tracking-widest antialiased">
                    {item.creatorName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* === DOTS PAGINATION STYLING (Bottom Slider Anchors) === */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-[#0b2f23]' : 'w-[6px] bg-[#0b2f23]/30'
              }`}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}