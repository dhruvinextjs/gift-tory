"use client";
import React from 'react';

// Ready dataset mapping infrastructure module matching profile listings context
const initialReferralsHistory = [
  { id: 1, name: "Beatrice M.", date: "16 Apr 2026", amount: "₹100", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 2, name: "Beatrice M.", date: "16 Apr 2026", amount: "₹100", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 3, name: "Beatrice M.", date: "16 Apr 2026", amount: "₹100", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { id: 4, name: "Beatrice M.", date: "16 Apr 2026", amount: "₹100", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" }
];

export default function ReferHistoryList() {
  return (
  <div className='bg-[#00000008]'>
      <div className="max-w-5xl mx-auto px-4 py-12 mt-24">
      
      {/* Decorative Component Header */}
      <div className="text-center mb-10">
        <h3 className="text-[#0B2E24] font-serif text-lg md:text-xl lg:text-[22px] font-bold tracking-wide">
          Your Referrals
        </h3>
        <div className="w-10 h-[2.5px] bg-[#0B2E24] mx-auto mt-2.5 rounded-full"></div>
      </div>

      {/* Row List Rendering Module Stack */}
      <div className="space-y-3.5">
        {initialReferralsHistory.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-100/90 rounded-xl p-7 flex items-center justify-between shadow-[0_3px_12px_rgba(0,0,0,0.01)] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
          >
            {/* Left Data Alignment */}
            <div className="flex items-center gap-3.5">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h5 className="text-[#0B2E24] font-bold text-sm tracking-wide">
                  {item.name}
                </h5>
                <p className="text-gray-400 text-[11px] font-medium mt-0.5">
                  {item.date}
                </p>
              </div>
            </div>

            {/* Right Status Badge */}
            <div className="text-right">
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                Reward Earned: <span className="text-[#997954] font-bold ml-1 text-sm">{item.amount}</span>
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
  );
}