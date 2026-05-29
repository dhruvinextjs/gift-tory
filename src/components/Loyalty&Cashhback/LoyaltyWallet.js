"use client";
import React from 'react';

export default function LoyaltyWallet() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 md:py-16">
      {/* Main Container Card */}
      <div className="bg-[#F5FFFC80] rounded-[24px] p-6 md:p-20 shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT SECTION: Wallet Balance & Points */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start justify-center border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0 lg:pr-8">
            <p className="text-[#020907] text-base md:text-lg font-medium tracking-wide">
              Your Wallet
            </p>
            
            {/* Main Bold Large Counter */}
            <h2 className="text-[#020907] font-serif text-4xl md:text-[46px] font-bold mt-2 tracking-wide">
              2,475
            </h2>
            
            <p className="text-[#020907] text-sm md:text-base font-normal mt-1 tracking-wide">
              points · worth <span className="font-sans font-medium">₹</span>123.75
            </p>
            
            {/* Action CTA Button */}
            <button className="mt-5 bg-[#0B2E24] hover:bg-[#123F32] text-white text-xs md:text-sm font-medium px-6 py-2.5 rounded-lg transition-colors tracking-wide shadow-[0_2px_8px_rgba(11,46,36,0.15)]">
              Redeem at checkout
            </button>
          </div>

          {/* RIGHT SECTION: Tier Matrix Status & Progress Grid */}
          <div className="lg:col-span-8 lg:pl-6">
            
            {/* Header Tracker Bar Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3.5 px-1">
              <span className="text-[#020907] text-xs md:text-[13px] font-md tracking-widest uppercase">
                Gold Tier
              </span>
              <span className="text-[#020907] text-xs md:text-[13px] font-medium tracking-wide">
                2525 pts to Platinum
              </span>
            </div>

            {/* Custom Dual-Tone Continuous Tier Bar */}
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-8">
              <div className="h-full bg-[#966B34] w-[55%] rounded-full"></div>
            </div>

            {/* Sub-Grid Tier Cards Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Silver Tier Info Card */}
              <div className="bg-[#FFEDE380] rounded-xl p-5 md:p-6 text-center border border-[#FFFFC2] flex flex-col justify-center min-h-[150px]">
                <h5 className="text-[#2C2C2C] font-serif text-base md:text-3xl font-bold tracking-wider uppercase">
                  Silver
                </h5>
                <p className="text-[#353A39] font-sans text-[10px] md:text-[11px] tracking-[0.15em] font-medium mt-1.5 uppercase whitespace-nowrap">
                  1 Pt Per <span className="font-sans">₹</span>50
                </p>
              </div>

              {/* Gold Tier Info Card */}
              <div className="bg-[#FFEDE380] rounded-xl p-5 md:p-6 text-center border border-[#FFFFC2] flex flex-col justify-center min-h-[150px] shadow-[0_4px_12px_rgba(245,230,218,0.2)]">
                <h5 className="text-[#2C2C2C] font-serif text-base md:text-3xl font-bold tracking-wider uppercase">
                  Gold
                </h5>
                <p className="text-[#353A39] font-sans text-[10px] md:text-[11px] tracking-[0.15em] font-medium mt-1.5 uppercase whitespace-nowrap">
                  1 Pt Per <span className="font-sans">₹</span>50
                </p>
              </div>

              {/* Platinum Tier Info Card */}
              <div className="bg-[#EFFFFA33] rounded-xl p-5 md:p-6 text-center border border-[#DBDBDB] flex flex-col justify-center min-h-[150px]">
                <h5 className="text-[#2C2C2C] font-serif text-base md:text-3xl font-bold tracking-wider uppercase">
                  Platinum
                </h5>
                <p className="text-[#353A39] font-sans text-[9px] md:text-[10px] tracking-[0.12em] font-semibold mt-1.5 uppercase leading-relaxed max-w-[180px] mx-auto">
                  2 Pt Per <span className="font-sans">₹</span>1 + Early Access
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}