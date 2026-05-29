"use client";
import React, { useState } from 'react';

export default function ReferPromoBox() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://gifttory.com/referral?code=ELEANOR25";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 mt-12 md:mt-16">
      <div className="bg-[#E5FFF8] border border-[#0B2E24] rounded-[24px] p-6 md:p-10 text-center relative overflow-hidden">
        
        {/* Title Content */}
        <h2 className="text-[#020907] font-serif text-xl md:text-2xl lg:text-[26px] font-bold tracking-wide">
          ₹100 for them & ₹100 for you
        </h2>
        
        <p className="text-[#020907] text-xs md:text-sm max-w-md mx-auto mt-3 leading-relaxed">
          When your friends place their first order over ₹500, both of you receive ₹100 account credit.
        </p>

        {/* Action Link Generator Row */}
        <div className="mt-6 max-w-lg mx-auto">
           <p className="text-sm text-[#020907] font-semibold mb-2 tracking-wider">
            Your unique link
          </p>
          <div className="flex items-center bg-white border border-gray-200/80 rounded-xl p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <input 
              type="text" 
              readOnly 
              value={referralLink} 
              className="w-full bg-transparent px-3 text-xs md:text-sm text-gray-500 outline-none truncate"
            />
            <button 
              onClick={handleCopy}
              className="bg-[#0B2E24] hover:bg-[#133D31] text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap min-w-[95px]"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* Footer Code Identifier */}
        <p className="text-[#966B34] text-sm mt-5 font-medium tracking-wide">
          or share your code: <span className="text-[#966B34] font-medium uppercase ml-0.5 tracking-wider">ELEANOR25</span>
        </p>

      </div>
    </div>
  );
}