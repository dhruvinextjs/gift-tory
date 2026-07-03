"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";       
import { LuTicketPercent } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartPage() {
  const router = useRouter();
  // State to check if coupon is applied or not
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  return (
    <div className="w-full z-50 px-0 md:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Product List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#DFDFDF]">
            <h2 className="text-2xl font-semibold text-[#111111] tracking-wide">Shopping Cart</h2>
            <button className="text-xl text-gray-800 hover:text-black font-light px-2">✕</button>
          </div>
          {[1, 2].map((item) => (
            <div key={item} className="flex gap-5 pb-6 border-b border-[#ECECEC] last:border-none relative">
              {/* Product Image */}
              <div className="w-28 h-28 md:w-34 md:h-42 bg-gray-100 rounded overflow-hidden flex-shrink-0 border border-gray-200">
                <img
                  src="/images/best-seller1.png"
                  alt="Self Care Gift"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Product Details Middle Content */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-bold text-sm text-[#020907]">Self Care Gift by Gifttory</h3>
                  <p className="text-[#059663] text-[13px] font-medium mt-1">In Stock</p>
                  <p className="text-[#020907] text-xs mt-1">Eligible for FREE Delivery</p>
                </div>

                {/* FIXED: Removed mb-12, added mt-4 and verified clean vertical center alignment */}
             <div className="flex items-center gap-34 mb-12">
                  {/* Counter Styling */}
                  <div className="flex items-center border border-[#DFDFDF] rounded  bg-white">
                    <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 text-lg font-light">-</button>
                    <span className="px-4 text-[14px] text-black font-medium">1</span>
                    <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 text-lg font-light">+</button>
                  </div>
                  <span className="text-[12px] text-[#353A39] tracking-wide">Shipping Type: Express</span>
                </div>
              </div>

              {/* Right Side Pricing and Action */}
              <div className="text-right flex flex-col justify-between items-end py-1 min-w-[100px]">
                <div className="space-y-0.5 ">
                  <p className="font-semibold text-[16px] text-[#111111]">₹1,200</p>
                  <p className="text-[12px] text-gray-400 font-medium">₹13.90</p>
                </div>
                <button className="text-[#FF0000] text-[13px] font-medium flex items-center gap-1 hover:underline transition-all mt-auto">
                  <span className="text-sm"><RiDeleteBin6Line /></span> Remove
                </button>
              </div>
              </div>
            ))}
        </div>

        {/* Right Side: Sticky Checkout Cards */}
        <div className="space-y-5">
          
          {/* --- DYNAMIC COUPON BOX COMPONENT --- */}
          {!isCouponApplied ? (
            /* Condition 1: Default Apply Coupon State */
            <div 
              onClick={() => setIsCouponApplied(true)}
              className="border border-dashed border-[#C3C3C3] p-3 rounded bg-[#F9F3F3] flex justify-between items-center cursor-pointer select-none transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg text-gray-700"><LuTicketPercent /></span>
                <span className="text-[14px] font-medium text-[#000000]">Apply Coupons</span>
              </div>
            </div>
          ) : (
            /* Condition 2: Coupon Applied State (Exact Match from image_18e29e.png) */
            <div className="border border-dashed border-gray-500 p-3.5 rounded-lg bg-[#FAF5F5] flex justify-between items-center transition-all duration-200">
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-bold text-[#052316] tracking-wide">TINYSPAEK</span>
                <span className="text-[12px] text-[#353A39]">Offered applied on the bill</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Parent click trigger check avoid karne ke liye
                  setIsCouponApplied(false);
                }}
                className="text-[#FF0000] text-[13px] font-medium hover:underline px-1"
              >
                Remove
              </button>
            </div>
          )}

          {/* Order Summary Box */}
          <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-[17px] text-[#111111] mb-4">Oder Summary</h3>

            {/* Product Snapshot Mini Row */}
            <div className="flex gap-3 items-center mb-5">
              <div className="w-12 h-12 bg-[#F3F0EA] rounded border border-gray-100 overflow-hidden flex-shrink-0">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/best-seller1.png"
                    alt="Product Snapshot"
                    fill
                    sizes="(max-w-48px) 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="w-full h-full bg-[#EFECE6] hidden only:block" />
              </div>
              <span className="text-[13px] text-[#333333] font-bold line-clamp-1">Self Care Gift by Gifttory</span>
            </div>

            <h4 className="text-[13px] font-bold text-[#111111] border-t border-dashed pt-4 mb-3">
              Product Details (2 items)
            </h4>

            {/* Price Line Items */}
            <div className="space-y-3 text-[13px] text-[#555555] border-b border-dashed pb-4">
              <div className="flex justify-between text-xs">
                <span className="text-[#353A39]">MRP Total</span>
                <span className="text-[#111111] font-medium">₹2,400</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#353A39]">MRP Discount</span>
                <span className="text-[#2939E2] font-medium">-₹288</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#353A39]">Delivery Charges</span>
                <span className="text-[#2939E2] font-medium tracking-wide">FREE</span>
              </div>
            </div>

            {/* Final Pricing Total */}
            <div className="flex justify-between items-center font-bold text-[#111111] my-5 text-[17px]">
              <span className="font-semibold text-[15px]">Order Total:</span>
              <span className="text-md font-bold">₹1,980</span>
            </div>

            {/* Main Action Button */}
            <button
              onClick={() => router.push("/checkout/address")}
              className="w-full bg-[#052316] text-white py-3.5 rounded-md font-bold text-[14px] tracking-wide hover:bg-[#03170e] transition-colors shadow-sm"
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}