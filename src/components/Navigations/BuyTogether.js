"use client";

import React from "react";
import { Star, Heart, Plus, Tag } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120 reviews",
    image:
      "/images/best-seller1.png",
    trending: true,
  },
  {
    id: 2,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120 reviews",
    image:
      "/images/best-seller2.png",
    trending: false,
  },
  {
    id: 3,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120 reviews",
    image:
      "/images/best-seller3.png",
    trending: false,
  },
];

export default function BuyTogether() {
  return (
    <section className="w-full bg-[#F7F7F7] py-[70px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <div className="mb-[38px]">
          <h2 className="text-[#17352D] text-[26px] sm:text-[34px] leading-none font-bold font-serif">
            People also buy together
          </h2>

          <div className="flex items-center gap-[7px] mt-[14px]">

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
        </div>

        {/* Product Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px_1fr_60px_1fr] gap-y-8 lg:gap-y-0 items-start">
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              {/* Card */}
              <div className="w-full">
                {/* Image */}
                <div className="relative rounded-[18px] overflow-hidden bg-white">
                  <div className="aspect-[1.18/1]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Trending */}
                  {product.trending && (
                    <div className="absolute top-[14px] left-[14px] h-[30px] px-[12px] rounded-full bg-[#5A4737]/80 backdrop-blur-sm flex items-center gap-[6px]">
                      <span className="text-[13px]">🔥</span>

                      <span className="text-white text-[12px] font-medium">
                        Trending
                      </span>
                    </div>
                  )}

                  {/* Wishlist */}
                  <button className="absolute right-[16px] bottom-[16px] w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Heart
                      size={18}
                      className="text-[#FF4F87]"
                      strokeWidth={2}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="pt-[14px]">
                  <p className="text-[#222222] text-[18px] leading-[28px] font-normal">
                    {product.title}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-[6px] mt-[4px]">
                    <Star
                      size={15}
                      className="fill-[#F4A340] text-[#F4A340]"
                    />

                    <span className="text-[15px] text-[#222222] font-medium">
                      {product.rating}
                    </span>

                    <span className="text-[14px] text-[#666666]">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-[10px] mt-[8px]">
                    <span className="text-[18px] sm:text-[20px] font-bold text-black">
                      ₹{product.price}
                    </span>

                    <span className="text-[15px] text-[#5F5F5F] line-through">
                      ₹{product.oldPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Plus */}
              {index !== products.length - 1 && (
                <div className="hidden lg:flex items-center justify-center h-[310px]">
                  <Plus
                    size={34}
                    strokeWidth={1.7}
                    className="text-[#17352D]"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Bundle Box */}
        <div className="mt-[42px] border border-[#E2E2E2] rounded-[12px]  overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_0.8fr_0.9fr] items-center">
            {/* Bundle Savings */}
            <div className="flex items-center gap-[18px] px-[28px] py-[28px] border-b lg:border-b-0 lg:border-r border-[#ECECEC]">
              <div className="w-[72px] h-[72px] rounded-full bg-[#EEF2EC] flex items-center justify-center shrink-0">
                <Tag size={30} className="text-[#17352D]" strokeWidth={1.8} />
              </div>

              <div>
                <h4 className="text-[18px] font-semibold text-[#17352D] leading-none">
                  Bundle Savings
                </h4>

                <p className="text-[14px] text-[#666666] mt-[10px]">
                  You save ₹98 on this combo
                </p>
              </div>
            </div>

            {/* Total Price */}
            <div className="px-[28px] py-[28px] border-b lg:border-b-0 lg:border-r border-[#ECECEC]">
              <p className="text-[16px] text-black font-semibold mb-[12px]">
                Total Price
              </p>

              <div className="flex items-center gap-[10px]">
                <span className="text-[42px] leading-none font-serif font-bold text-[#17352D]">
                  ₹3,600
                </span>

                <span className="text-[16px] text-[#666666] line-through mt-[10px]">
                  ₹4,800
                </span>
              </div>
            </div>

            {/* Save Box */}
            <div className="px-[28px] py-[28px] border-b lg:border-b-0 lg:border-r border-[#ECECEC] flex justify-start lg:justify-center">
              <div className="h-[44px] px-[18px] rounded-[12px] bg-[#EAF1EA] flex items-center gap-[10px]">
                <Tag size={16} className="text-[#17352D]" />

                <span className="text-[15px] font-semibold text-[#17352D]">
                  Save ₹98
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="px-[28px] py-[28px] flex justify-start lg:justify-center">
              <button className="w-full sm:w-[190px] h-[54px] rounded-[8px] bg-[#0B2F23] text-white text-[18px] font-semibold hover:bg-[#09251c] transition-all duration-300">
                Add all to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}