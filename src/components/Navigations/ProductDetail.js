"use client";

import {
  Heart,
  Star,
  ChevronUp,
  ChevronDown,
  MessageCircle,
  Truck,
  LockKeyhole,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { TbBrandVisa } from "react-icons/tb";

export default function ProductDetail() {
  const imagesList = [
    "/images/best-seller1.png",
    "/images/best-seller2.png",
    "/images/best-seller3.png",
  ];

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="w-full bg-white min-h-screen pt-[120px] pb-20">
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-center gap-2 text-[13px] text-[#6E6E6E] font-medium">
          <span className="cursor-pointer">Home</span>
          <span>»</span>
          <span className="cursor-pointer">All Gifts</span>
          <span>»</span>
          <span className="text-[#B98B4D] font-semibold">
            Self Care Gift by Gifttory
          </span>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-[1320px] mx-auto px-6 mt-6 grid grid-cols-12 gap-[48px] items-start">
        {/* LEFT IMAGE SIDE */}
        <div className="col-span-12 lg:col-span-6 flex gap-5">
          {/* Thumbnails */}
          <div className="flex flex-col items-center gap-5 pt-5">
            <button className="w-[42px] h-[42px] rounded-full bg-[#0B2F23] text-white flex items-center justify-center">
              <ChevronUp size={18} />
            </button>

            {imagesList.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImgIdx(idx)}
                className={`w-[88px] h-[88px] rounded-[12px] overflow-hidden cursor-pointer border transition-all duration-300 ${
                  activeImgIdx === idx ? "border-[#0B2F23]" : "border-[#EAEAEA]"
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <button className="w-[42px] h-[42px] rounded-full bg-[#0B2F23] text-white flex items-center justify-center">
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="w-full h-[610px] rounded-[18px] overflow-hidden bg-[#F6F6F6]">
              <img
                src={imagesList[activeImgIdx]}
                alt="product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className="col-span-12 lg:col-span-6 pt-1">
          {/* Title */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[30px] leading-[52px] font-bold text-[#111111] font-serif">
                Self Care Gift by Gifttory
              </h1>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-[#059663] text-[14px] font-medium">
                In Stock
              </span>

              <Heart size={22} className="text-[#5E5E5E] cursor-pointer" />
            </div>
          </div>

          {/* Price */}
          <div className="flex">
            {/* Price + Rating Row */}
            <div className="mt-5 flex items-start justify-between w-full">
              {/* LEFT SIDE */}
              <div className="flex flex-col">
                {/* Price Row */}
                <div className="flex items-center gap-3">
                  <h2 className="text-[28px] font-bold text-black leading-none">
                    ₹1,200
                  </h2>

                  <span className="text-[14px] text-[#000000] line-through">
                    ₹1,600
                  </span>
                </div>

                {/* Tax Text */}
                <p className="mt-2 text-[12px] text-[#020907]">
                  Inclusive of all tax
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-3 pt-1">
                {/* Stars */}
                <div className="flex items-center gap-[3px]">
                  {[1, 2, 3].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#F4A340"
                      className="text-[#F4A340]"
                    />
                  ))}

                  {[1, 2].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#1E1E1E"
                      className="text-[#1E1E1E]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <span className="text-[13px] text-[#5F5F5F] font-medium">
                  3.0 (69 Reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Delivery */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FFF3E7] px-4 py-2">
            <span className="text-[#E65300] text-[11px] font-medium flex flex-row gap-2 items-center justify-center">
              <CiDeliveryTruck size={14} /> Reaching your home by 9pm, Sunday
              (3rd May)
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4 mt-7">
            <div className="border border-[#DFDFDF] rounded-[14px] h-[100px] flex flex-col items-center justify-center text-center px-3">
              <Truck size={22} className="text-[#020907]" />

              <p className="mt-3 text-[15px] leading-[20px] text-[#020907] font-medium">
                Free Delivery
              </p>
            </div>

            <div className="border border-[#DFDFDF] rounded-[14px] h-[100px] flex flex-col items-center justify-center text-center px-3">
              <LockKeyhole size={22} className="text-[#020907]" />

              <p className="mt-3 text-[15px] leading-[20px] text-[#020907] font-medium">
                Secure
                <br />
                Transaction
              </p>
            </div>

            <div className="border border-[#DFDFDF] rounded-[14px] h-[100px] flex flex-col items-center justify-center text-center px-3">
              <WalletCards size={22} className="text-[#020907]" />

              <p className="mt-3 text-[15px] leading-[20px] text-[#020907] font-medium">
                30 days money back
                <br />
                guarantee
              </p>
            </div>
          </div>

          {/* Pin Code */}
          <div className="mt-7">
            <label className="block text-[15px] text-[#1F1F1F] mb-2 font-medium">
              Pin code
            </label>

            <div className="flex items-center gap-4">
              <div className="w-[320px] h-[40px] border border-[#DCDCDC] rounded-[10px] overflow-hidden flex items-center">
                <input
                  type="text"
                  placeholder="Enter pin code"
                  className="flex-1 h-full px-4 outline-none text-[14px] text-[#353A39]"
                />

                <button className="w-[88px] h-full border-l border-[#DCDCDC] text-[14px] font-semibold text-[#0B2F23]">
                  Check
                </button>
              </div>

              <div className="flex items-center gap-2 text-[14px] text-[#1F1F1F]">
                <Truck size={17} />
                <span>3 Days</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex items-center gap-4">
            <div className="w-[110px] h-[42px] border border-[#DFDFDF] rounded-[10px] flex items-center justify-between px-5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-[22px] text-[#333]"
              >
                -
              </button>

              <span className="text-[18px] font-medium">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-[22px] text-[#333]"
              >
                +
              </button>
            </div>

            <button className="w-[220px] h-[42px] border border-[#0B2E24] rounded-[10px] text-[#0B2E24] font-semibold text-[16px]">
             <Link href="/checkout"> Add to Cart</Link>
            </button>

            <button className="w-[220px] h-[42px] bg-[#0B2E24] rounded-[10px] text-white font-semibold text-[16px]">
              Buy Now
            </button>
          </div>

          {/* Payment */}
          <div className="mt-7">
            <p className="text-[14px] text-[#353A39] mb-3">
              Secure and trusted checkout with
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[18px] font-black text-[#1434CB]">
                <Image src={"/images/visa.png"} alt="icon" width={28} height={28}/>
              </span>

              <span className="text-[14px] font-black text-[#EB001B]">
                <Image src={"/images/mastercard.png"} alt="icon" width={22} height={22}/>
              </span>

              <span className="text-[14px] font-black text-[#003087]">
                    <Image src={"/images/paypal.png"} alt="icon" width={20} height={20}/>
              </span>

              <span className="text-[14px] font-black text-[#4285F4]">
                <Image src={"/images/google-pay.png"} alt="icon" width={28} height={28}/>
              </span>
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-[16px] font-semibold text-[#1D1D1D]">
              Share
            </span>

            <FaWhatsapp size={18} className="text-[#0B2F23]" />

            <FiFacebook size={15} className="text-[#0B2F23] cursor-pointer" />

            <FaInstagram size={17} className="text-[#0B2F23] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-[1320px] mx-auto px-6 mt-20">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab("details")}
            className={`h-[44px] px-4 rounded-[10px] text-[15px] font-md transition-all ${
              activeTab === "details"
                ? "bg-[#0B2E24] text-white"
                : "border border-[#DFDFDF] text-[#020907]"
            }`}
          >
            Product Details
          </button>

          <button
            onClick={() => setActiveTab("info")}
            className={`h-[44px] px-4 rounded-[10px] text-[15px] font-md transition-all ${
              activeTab === "info"
                ? "bg-[#0B2E24] text-white"
                : "border border-[#DFDFDF] text-[#020907]"
            }`}
          >
            Additional Info
          </button>
        </div>

        {/* Content */}
        {activeTab === "details" && (
          <div className="max-w-[1180px] mx-auto mt-14">
            <div>
              <h3 className="text-[22px] font-bold text-black mb-2">
                Highlights
              </h3>

              <ul className="space-y-1 text-[14px] leading-[20px] text-[#5E5E5E]">
                <li>
                  🎁 All-in-One Self-Care Box – A complete relaxation kit in one
                  elegant package
                </li>

                <li>
                  🌸 Premium Assorted Items – Includes bath, body, and feel-good
                  essentials
                </li>

                <li>
                  🎂 Perfect for Any Occasion – Ideal for birthdays,
                  anniversaries, or thoughtful surprises
                </li>

                <li>
                  💝 Beautiful Gift Packaging – Ready-to-gift with a premium
                  presentation
                </li>

                <li>
                  🧘 Stress-Relief Focused – Designed to promote relaxation and
                  well-being
                </li>

                <li>
                  🚚 Safe & Secure Delivery – Carefully packed to ensure
                  everything arrives perfectly
                </li>

                <li>
                  🎉 Great for Gifting – Suitable for her, friends, coworkers,
                  or loved ones
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-[22px] font-bold text-black mb-2">
                Description
              </h3>

              <p className="text-[15px] leading-[24px] text-[#5F5F5F]">
                Self Care Gift by Giftory is a thoughtfully curated box designed to bring comfort, relaxation, and a touch of joy to someone special. Whether it’s for a birthday, a thank-you gesture, or simply a reminder to slow down, this gift set turns everyday moments into a soothing self-care ritual. Inside the box, you’ll find a delightful mix of pampering essentials and cheerful treats—perfectly arranged to create a warm and uplifting unboxing experience. From calming fragrances to sweet indulgences, every item is selected to help reduce stress and encourage a little “me-time.” Beautifully packaged and ready to gift, this hamper is ideal for friends, family, or anyone who deserves a break and a smile.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
