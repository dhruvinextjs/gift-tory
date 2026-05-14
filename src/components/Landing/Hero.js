"use client";
import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video> */}
            <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="w-[300%] h-[100%] absolute top-0 left-[-100%] md:w-[100%] md:left-0 md:h-[100%] object-cover"
          src="https://www.youtube.com/embed/NRtc1Nq_7dc?autoplay=1&mute=1&loop=1&playlist=NRtc1Nq_7dc&controls=0&showinfo=0&modestbranding=1"
          title="Background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Main Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
          Make Every Moment Special
        </h1>
        
        <div className="relative inline-block mt-2 md:mt-4">
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif italic relative z-10 px-4">
            with <span className="relative">Perfect Gifts</span>
          </h2>
          {/* Tilted Green Background Highlight */}
          <div className="absolute bottom-1 md:bottom-2 left-10 md:left-20 w-[80%] h-[60%] bg-[#1a5d4a] -rotate-2 z-0"></div>
        </div>

        <p className="mt-8 text-white text-base md:text-xl font-light tracking-wide opacity-90">
          Thoughtfully curated gifts for every occasion
        </p>

        <button className="mt-8 px-8 py-3 bg-[#2a2a2a]/80 hover:bg-black border border-gray-500 text-white rounded-lg text-sm font-medium transition-all duration-300">
          Same-Day Delivery Gifts
        </button>
      </div>

      {/* Bottom Right Indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex flex-col items-end gap-4">
         
         {/* Video Control Label */}
         <div className="flex items-center gap-3 text-white">
            <span className="text-sm font-light tracking-widest opacity-80">Background video</span>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/20 cursor-pointer transition">
               <Play size={16} fill="white" />
            </div>
         </div>
      </div>
    </section>
  );
}