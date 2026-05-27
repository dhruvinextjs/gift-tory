"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function GiftFor() {
  return (
    <div className="bg-[#F7F7F7] py-12 px-6 md:px-16">
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Gift For Her */}
        <div className="relative group overflow-hidden rounded-[2.5rem] h-[300px] md:h-[400px]">

          {/* Background */}
          <img
            src="/images/bestForbg1.png"   // 👈 pattern background
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Girl Image */}
          <img
            src="/images/girl.png"
            alt="Gift For Her"
            className="absolute bottom-0 left-0 h-[95%] object-contain"
          />

          {/* Text */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
            <h3 className="text-black text-4xl md:text-6xl font-serif leading-tight">
              Gift For <br /> Her
            </h3>
          </div>

          {/* Arrow */}
          <button className="absolute -bottom-0 -right-0 z-30 bg-[#0e2a22] text-white p-3 rounded-full border-[6px] border-[#FDFCF0] shadow-lg">
            <GoArrowUpRight size={22} />
          </button>
        </div>

        {/* Gift For Him */}
         <div className="relative group overflow-hidden rounded-[2.5rem] h-[300px] md:h-[400px]">

          {/* Background */}
          <img
            src="/images/bestForbg2.png"   // 👈 pattern background
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Girl Image */}
          <img
            src="/images/boy.png"
            alt="Gift For Him"
            className="absolute bottom-0 left-0 h-[95%] object-contain"
          />

          {/* Text */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
            <h3 className="text-black text-4xl md:text-6xl font-serif leading-tight">
              Gift For <br /> Him
            </h3>
          </div>

          {/* Arrow */}
          <button className="absolute -bottom-0 -right-0 z-30 bg-[#0e2a22] text-white p-3 rounded-full border-[6px] border-[#FDFCF0] shadow-lg">
            <GoArrowUpRight size={22} />
          </button>
        </div>

      </div>
    </section>
    </div>
  );
}