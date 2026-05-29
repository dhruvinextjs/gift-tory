"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { GiCheckMark } from 'react-icons/gi';

export default function RefundInitiatedPage() {
    const router = useRouter();

    // Data static details dynamically loop karne ya display karne ke liye
    const refundSummary = {
        amount: "₹480",
        method: "Phone Pay",
        eta: "5 - 7 Business Days"
    };

    return (
        <div className="max-full mx-auto px-30">
            {/* Main Center White Card Container Box */}
            <div className="bg-white rounded-xl shadow-xl border border-[#DFDFDF] p-8 md:p-12 flex flex-col items-center text-center">
                
                {/* Large Circular Green Success Checkmark Container */}
                <div className="w-20 h-20 bg-[#0B2E24] rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <GiCheckMark  className='text-[#FFFFFF] text-5xl' />
                </div>

                {/* Main Heading Status */}
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#020907] tracking-wide mb-3">
                    Refund Initiated
                </h2>

                {/* Subtext Paragraph description matching exact details */}
                <p className="text-[#020907] text-sm md:text-base max-w-2xl leading-relaxed mb-8">
                    Order Self care hamper by gifttory has been cancelled.{refundSummary.amount} will be refunded to your original payment method within {refundSummary.eta}.
                </p>

                {/* Divider Line */}
                <div className="w-full max-w-md border-t border-gray-100 my-2" />

                {/* Refund Summary Block Meta Info */}
                <div className="w-full max-w-xs py-4">
                    <h3 className="text-xl font-serif font-bold text-[#0B2E24] mb-4 tracking-wide">
                        Refund summary
                    </h3>
                    
                    <div className="space-y-2.5 text-sm font-sans">
                        {/* Amount */}
                        <div className="flex justify-between items-center text-[#020907]">
                            <span>Amount</span>
                            <span className="font-semibold text-[#353A39]">{refundSummary.amount}</span>
                        </div>
                        {/* Method */}
                        <div className="flex justify-between items-center text-[#020907]">
                            <span>Method</span>
                            <span className="font-medium text-[#353A39]">{refundSummary.method}</span>
                        </div>
                        {/* ETA */}
                        <div className="flex justify-between items-center text-[#020907]">
                            <span>ETA</span>
                            <span className="font-medium text-[#353A39]">{refundSummary.eta}</span>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full max-w-md border-t border-gray-100 my-4" />

                {/* Action Control Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full justify-center">
                    {/* Secondary Route Back to dashboard/orders */}
                    <button
                        type="button"
                        onClick={() => router.push('/orders')} // Aap apne orders ya account page ka main route yahan change kar sakte hain
                        className="w-full sm:w-auto px-6 py-2.5 border border-[#0B2E24] rounded-lg text-sm font-medium text-[#0B2E24] bg-white transition-colors min-w-[140px]"
                    >
                        Back to orders
                    </button>

                    {/* Primary Trigger Route back to home/shop */}
                    <button
                        type="button"
                        onClick={() => router.push('/')} // Home page route
                        className="w-full sm:w-auto px-6 py-2.5 bg-[#0B2E24] text-white rounded-lg text-sm font-medium transition-colors min-w-[155px]"
                    >
                        Continue shopping
                    </button>
                </div>

            </div>
        </div>
    );
}