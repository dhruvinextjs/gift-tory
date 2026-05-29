"use client";
import React from 'react';

export default function LoyaltyBanner() {
  return (
    <div 
      className="w-full h-[260px] md:h-[340px] lg:h-[520px] relative bg-cover bg-center flex items-center justify-center mt-[10px]"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/loyalty-bg.png')` 
      }}
    >
      <h1 className="text-white text-3xl md:text-4xl lg:text-[44px] font-serif font-semibold tracking-wide text-center px-4">
        Loyalty & Cashback
      </h1>
    </div>
  );
}