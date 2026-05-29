"use client";
import React from 'react';
import { FiShare2 } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlineShare, HiOutlineShoppingBag } from "react-icons/hi2";
import { PiGiftLight } from "react-icons/pi";
import { MdOutlinePersonAddAlt1 } from 'react-icons/md';

export default function ReferSteps() {
  const steps = [
    { id: 1, title: "Share Your Link", desc: "Send to friends and family",  icon: <HiOutlineShare className="w-6 h-6 text-black" /> },
    { id: 2, title: "They Sign Up", desc: "Friend joins Gifttory",  icon: <MdOutlinePersonAddAlt1 className="w-7 h-7 text-black" /> },
    { id: 3, title: "Friend Orders", desc: "First purchase qualifies",  icon: <HiOutlineShoppingBag className="w-7 h-7 text-black" />},
    { id: 4, title: "You Both Earn", desc: "₹100 credit each",  icon: <PiGiftLight className="w-8 h-8 text-black" />}
  ];

  return (
  <div className='bg-[#F7F7F7]'>
      <div className="max-w-7xl mx-auto px-4 py-14 mt-20 md:mt-24">
      
      {/* Decorative Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-[#0B2E24] font-serif text-lg md:text-xl lg:text-[22px] font-bold tracking-wide lowercase first-letter:uppercase">
          How it works
        </h3>
        <div className="w-10 h-[2.5px] bg-[#0B2E24] mx-auto mt-2.5 rounded-full"></div>
      </div>

      {/* Grid Stack Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative">
        {steps.map((step) => (
          <div key={step.id} className="bg-white border border-[#DBDBDB] shadow-[0_8px_24px_rgba(0,0,0,0.02)] rounded-2xl p-6 pt-8 text-center relative flex flex-col justify-center min-h-[150px]">
            
            {/* Absolute Badging Node Counter */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-11 h-9 rounded-lg bg-[#966B34] text-white flex items-center justify-center font-semibold text-xs shadow-md">
              {step.id}
            </div>

            {/* Standard Inline Vector Element */}
            <div className="flex justify-center mb-3">
              {step.icon}
            </div>

            <p className="text-[#0B2E24] font-bold text-md tracking-wide mb-2">
              {step.title}
            </p>
            <p className="text-[#353A39] text-xs font-normal">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
  );
}