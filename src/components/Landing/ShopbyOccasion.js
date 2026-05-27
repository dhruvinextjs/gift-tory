import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function ShopbyOccasion() {
  return (
    <div className="py-10 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      <section className="bg-white max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[#1a3a32] text-[28px] sm:text-3xl font-serif font-bold mb-2">
            Shop By Occasion
          </h2>

          <div className="flex items-center gap-2">
            <div className="h-[2px] w-12 bg-[#0B2E24]"></div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B2E24]"></span>

              <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>

              <span className="w-0.5 h-0.5 rounded-full bg-[#0B2E24]"></span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[500px]">
          {/* Left Big Card */}
          <div className="relative group overflow-hidden rounded-2xl h-[300px] sm:h-[400px] lg:h-full">
            <img
              src="/images/Occasion.png"
              alt="Birthday Gift"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6">
              <p className="text-white text-lg sm:text-xl font-semibold">
                Birthday Gift
              </p>
            </div>

            {/* Floating Arrow */}
            <button className="absolute -bottom-1.5 -right-1.5 z-30 bg-[#0e2a22] text-white p-3 rounded-full border-[7px] border-white hover:bg-[#1a3a32] transition">
              <GoArrowUpRight size={24} />
            </button>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 h-full">
            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto lg:h-1/2">
              {/* Mother's Day */}
              <div className="relative group overflow-hidden rounded-2xl h-[220px] sm:h-[240px] lg:h-full">
                <img
                  src="/images/Occasion2.png"
                  alt="Mother's Day Gift"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:bg-black/40 transition-colors"></div>

                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm md:text-base font-semibold">
                    Mother's Day Gift
                  </p>
                </div>
              </div>

              {/* Anniversary */}
              <div className="relative group overflow-hidden rounded-2xl h-[220px] sm:h-[240px] lg:h-full">
                <img
                  src="/images/Occasion3.png"
                  alt="Anniversary Gift"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:bg-black/40 transition-colors"></div>

                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm md:text-base font-semibold">
                    Anniversary Gift
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="relative group overflow-hidden rounded-2xl h-[220px] sm:h-[260px] lg:h-1/2">
              <img
                src="/images/Occasion4.png"
                alt="More Gifts"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="px-7 py-3 border border-[#FFFFFF] text-white rounded-md text-sm font-bold hover:bg-white hover:text-black transition-all duration-300">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}