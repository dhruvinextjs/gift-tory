"use client";
import React from 'react';

// Static array matching the design parameters from image_006c06.png
// 'type' helps to distinguish between earned and redeemed points conditionally
const initialActivityHistory = [
  { id: 1, label: "Points Earned", date: "16 Apr 2026", points: "+250 pts", type: "earned" },
  { id: 2, label: "Points Earned", date: "16 Apr 2026", points: "+250 pts", type: "earned" },
  { id: 3, label: "Points Earned", date: "16 Apr 2026", points: "+250 pts", type: "earned" },
  { id: 4, label: "Points Earned", date: "16 Apr 2026", points: "+250 pts", type: "earned" }
];

export default function LoyaltyActivity() {
  return (
    <div className="w-full min-h-screen py-10 antialiased">
      <div className="max-w-[820px] mx-auto px-4 md:px-6">
        
        {/* ==========================================
            === SECTION HEADER (image_006c06.png) ======
            ========================================== */}
        <div className="text-center mb-8">
          <h3 className="text-[#0B2E24] font-serif text-lg md:text-xl lg:text-[22px] font-bold tracking-wide">
            Activity
          </h3>
          <div className="w-10 h-[2.5px] bg-[#0B2E24] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* ==========================================
            === TABLE CONTAINER (Exact Shape & Borders)
            ========================================== */}
        <div className="bg-white border border-[#EBF3F2] shadow-[0_4px_24px_rgba(0,0,0,0.015)] overflow-hidden">
          <div className="divide-y divide-gray-100/80">
            
            {initialActivityHistory.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-5 md:p-6 transition-colors hover:bg-[#FAFDFD]/50"
              >
                {/* Left Side: Activity Label and Timestamp Date */}
                <div className="flex flex-col space-y-1">
                  <span className="text-[#0B2E24] font-bold text-sm md:text-base tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Right Side: Points Status Counter Badge */}
                <div className="text-right">
                  <span 
                    className={`font-serif text-base md:text-lg font-bold tracking-wide ${
                      item.type === 'earned' ? 'text-[#997954]' : 'text-gray-600'
                    }`}
                  >
                    {item.points}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}