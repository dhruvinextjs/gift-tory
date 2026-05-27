"use client";
import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/hero_background-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0B2E244D] z-10"></div>

      {/* Main Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1
          className="
    text-[#FFFFFF]
    text-[36px] md:text-[52px]
    font-bold
    leading-[100%]
    tracking-[0%]
    text-center
  "
          style={{ fontFamily: "Playfair Display" }}
        >
          Make Every Moment Special
        </h1>

        <div className="relative inline-block mt-2 md:mt-4">
          <h2
            className="
    text-[#FFFFFF]
    text-[36px] md:text-[52px]
    font-semibold
    italic
    leading-[55px] md:leading-[80px]
    tracking-[0%]
    text-center
    relative
    z-10
    px-4
  "
            style={{ fontFamily: "Playfair Display" }}
          >
            with <span className="relative">Perfect Gifts</span>
          </h2>
          {/* Tilted Green Background Highlight */}
          <div className="absolute bottom-[6px] md:bottom-[10px] left-[38px] md:left-[84px] w-[76%] h-[70%] bg-[#1E5B4C] -rotate-[2deg] rounded-[2px] z-0"></div>
        </div>

        <p className="mt-2 text-[#FFFFFF] text-base font-light tracking-wide opacity-90">
          Thoughtfully curated gifts for every occasion
        </p>

        <button className="mt-8 px-8 py-3 bg-[#FFFFFF1A] hover:bg-black border-[0.3px] border-[#FFFFFF] text-[#FFFFFF] rounded-lg text-sm font-medium transition-all duration-300">
          Same-Day Delivery Gifts
        </button>
      </div>

      {/* Bottom Right Indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex flex-col items-end gap-4">
        {/* Video Control Label */}
        <div className="flex items-center gap-3 text-white">
          <span className="text-sm font-light tracking-widest opacity-80">
            Background video
          </span>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/50 hover:bg-white/20 cursor-pointer transition">
            <Play size={16} fill="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
