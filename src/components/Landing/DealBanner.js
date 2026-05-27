"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function DealBanner() {
  // Simple Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: "01",
    hours: "05",
    minutes: "60",
    seconds: "16",
  });

  return (
    <div className="py-12 px-4 md:px-16 ">
    <section className="max-w-7xl mx-auto ">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1a4d3c] min-h-[300px] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
  
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/deal-bg.jpg"
            alt="bg-img"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Gradient Overlay */}
<div className="absolute inset-0 z-0 bg-[linear-gradient(270deg,rgba(2,150,107,0.7)_0%,rgba(2,150,107,0.4)_40%,rgba(2,150,107,0.1)_70%,transparent_100%)]"></div>

        {/* Left Side: Content */}
        <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
          <p className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-md">
            Flat 40% OFF on Gift Hampers
          </p>
          <button className="mt-8 px-10 py-3 border border-white/40 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all backdrop-blur-sm">
            Grab Deal
          </button>
        </div>

        {/* Right Side: Countdown Timer */}
        <div className="relative z-10 flex items-center gap-2 md:gap-4">
          <TimerBox value={timeLeft.days} label="Day" />
          <span className="text-white text-2xl font-bold mt-[-20px]">-</span>
          <TimerBox value={timeLeft.hours} label="Hours" />
          <span className="text-white text-2xl font-bold mt-[-20px]">:</span>
          <TimerBox value={timeLeft.minutes} label="Min" />
          <span className="text-white text-2xl font-bold mt-[-20px]">:</span>
          <TimerBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
</div>
  );
}

// Sub-component for individual timer boxes
function TimerBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
        <span className="text-white text-2xl md:text-3xl font-bold">
          {value}
        </span>
      </div>
      <span className="text-white/80 text-[10px] md:text-xs mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
