"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuInfo } from "react-icons/lu";
import { RiCalendar2Line } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";

export default function PersonalizePage() {
  const router = useRouter();
  const [occasion, setOccasion] = useState(""); // Birthday, Anniversary, Other
  const [keepSurprise, setKeepSurprise] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handlePaymentNavigation = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions to proceed.");
      return;
    }
    // Navigate to step 4 (Add Your Story) or directly to payment as per your workflow
    router.push("/checkout/addyourstory");
  };

  return (
    <div className="w-full px-0 md:px-8 animate-fadeIn min-h-screen pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* --- LEFT SIDE: PERSONALIZE FORM --- */}
        <div className="lg:col-span-2 border border-[#E5E5E5] rounded-xl p-6 bg-white shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-[#111111]">Personalize your gift</h2>

          <form className="space-y-5 text-sm">
            {/* Delivery Date and Time */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-[#111111]">Delivery dae and time</label>
              <div className="relative">
                <select className="w-full border border-[#DFDFDF] rounded px-3 py-2.5 bg-white text-[#353A39]outline-none focus:border-gray-500 appearance-none cursor-pointer">
                  <option value="">Select</option>
                  <option value="today">Today (Standard)</option>
                  <option value="tomorrow">Tomorrow</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#353A39]">
                  {/* Calendar/Clock Icon wrapper */}
                  <RiCalendar2Line className="text-xl" />
                </div>
              </div>
            </div>

            {/* Occasion Section */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-[#111111]">Occasion</label>
              <div className="grid grid-cols-3 gap-4">
                {["Birthday", "Anniversary", "Other"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setOccasion(item)}
                    className={`py-3 rounded text-[13px] font-medium transition-all border text-center ${occasion === item
                        ? "bg-[#936E3B] text-white border-[#936E3B]"
                        : "bg-white text-[#353A39] border-[#DFDFDF]"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Personalize Message */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-[#111111]">Personalize message</label>
              <textarea
                rows={5}
                placeholder="Enter message"
                className="w-full border border-[#DFDFDF] rounded p-3 text-[#353A39] outline-none placeholder:text-[#353A39] resize-none"
              />
            </div>

            {/* Sender Information Description with LuInfo Icon */}
            <div className="flex items-start gap-2 text-xs text-[#353A39] p-2.5 rounded-lg">
              <span className="flex items-center gap-1.5 font-bold text-[#111111] shrink-0">
                Sender Information
                <LuInfo className="text-base text-gray-600" />
              </span>
              <span className="leading-relaxed">
                Order related communication will also be sent on these details.
              </span>
            </div>

            {/* Form Fields: Full Name & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#111111]">Full name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-[#353A39] outline-none focus:border-gray-500 placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#111111]">Phone number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-[#353A39] outline-none focus:border-gray-500 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Keep Surprise Checkbox */}
            <div className="flex items-center gap-2 pt-2 select-none">
              <input
                type="checkbox"
                id="keepSurprise"
                checked={keepSurprise}
                onChange={() => setKeepSurprise(!keepSurprise)}
                className="w-4 h-4 accent-[#052316] cursor-pointer rounded "
              />
              <label htmlFor="keepSurprise" className="text-xs text-[#353A39] cursor-pointer flex items-center gap-1">
                Keep Surprise (Hide sender information from recipient)
                <span className="text-[#353A39] cursor-help font-semibold">?</span>
              </label>
            </div>
          </form>
        </div>

        {/* --- RIGHT SIDE: ORDER SUMMARY --- */}
        <div className="space-y-5">
          {/* Top Fixed Address Mini Badge */}
         <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm space-y-3">
                       <div className="flex items-start gap-2">
                         <span className="text-[#0B2E24] mt-0.5 text-base"><TbCurrentLocation /></span>
                         <div className="text-xs text-[#353A39] w-full">
                           <div className="flex justify-between items-center w-full">
                             <span className="font-bold text-sm text-[#000000]">Lorem Ipsum</span>
                             <span className="text-xs font-bold bg-gray-150 px-2 py-0.5 rounded text-[#000000]">Home</span>
                           </div>
                           <p className="mt-1 text-[#353A39] line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                         </div>
                       </div>
                       <button 
                         onClick={() => { setIsSaved(false); setStep(2); }}
                         className="w-full text-center border border-[#0B2E24] rounded-xl py-2.5 text-xs font-bold text-[#0B2E24] hover:bg-gray-50 transition-all mt-2"
                       >
                         Change address
                       </button>
                     </div>

          {/* Sticky Checkout Main Order Card */}
          <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-[17px] text-[#111111] mb-4">Oder Summary</h3>

            {/* Product Snapshot */}
            <div className="flex gap-3 items-center mb-5">
              <div className="w-12 h-12 bg-[#F3F0EA] rounded border border-gray-100 overflow-hidden flex-shrink-0 relative">
                <img
                  src="/images/image1.png"
                  alt="Product Snapshot"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=Gift";
                  }}
                />
              </div>
              <span className="text-[13px] text-[#333333] font-bold line-clamp-1">Self Care Gift by Gifttory</span>
            </div>

            <h4 className="text-[13px] font-bold text-[#111111] border-t border-dashed pt-4 mb-3">
              Product Details (2 items)
            </h4>

            {/* Pricing details stack */}
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

            {/* Final Order Valuation */}
            <div className="flex justify-between items-center font-bold text-[#111111] my-5 text-[17px]">
              <span className="font-semibold text-[15px]">Order Total:</span>
              <span className="text-md font-bold">₹1,980</span>
            </div>

            {/* Terms and Conditions Acceptance box */}
            <div className="flex items-start gap-2 mb-4 select-none">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="w-4 h-4 accent-[#052316] mt-0.5 cursor-pointer rounded"
              />
              <label htmlFor="agreeTerms" className="text-xs text-gray-700 cursor-pointer">
                I Agree with the <span className="font-bold underline cursor-pointer">terms and conditions</span>
              </label>
            </div>

            {/* Submission CTA Trigger */}
            <button
              type="button"
              onClick={handlePaymentNavigation}
              className="w-full bg-[#052316] text-white py-3.5 rounded-md font-bold text-[14px] tracking-wide hover:bg-[#03170e] transition-colors shadow-sm"
            >
              Continue to payment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}