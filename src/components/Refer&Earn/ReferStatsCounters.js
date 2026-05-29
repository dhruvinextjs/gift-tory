"use client";
import React from 'react';

export default function ReferStatsCounters() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stat Counter 1 */}
        <div className="bg-[#EFFFFA33] border border-[#DBDBDB] rounded-xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
          <p className="text-[#0B2E24] text-[10px] md:text-[14px] font-bold uppercase tracking-widest mb-1.5">
            Invite Sent
          </p>
          <p className="text-[#0B2E24] font-serif text-2xl md:text-5xl font-extrabold">
            12
          </p>
        </div>

        {/* Stat Counter 2 */}
        <div className="bg-[#EFFFFA33] border border-[#DBDBDB] rounded-xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
          <p className="text-[#0B2E24] text-[10px] md:text-[14px] font-bold uppercase tracking-widest mb-1.5">
            Friends Joined
          </p>
          <p className="text-[#0B2E24] font-serif text-2xl md:text-5xl font-extrabold">
            5
          </p>
        </div>

        {/* Stat Counter 3 */}
        <div className="bg-[#EFFFFA33] border border-[#DBDBDB] rounded-xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
          <p className="text-[#0B2E24] text-[10px] md:text-[14px] font-bold uppercase tracking-widest mb-1.5">
            Earned
          </p>
          <p className="text-[#0B2E24] font-serif text-2xl md:text-5xl font-extrabold flex items-center justify-center gap-0.5">
            <span className="text-xl font-sans font-semibold">₹</span>100
          </p>
        </div>

      </div>
    </div>
  );
}