"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CancelOrderPage() {
    const router = useRouter();

    // Aapka selected dynamic single order item object data
    const selectedOrder = {
        name: "Self Care hamper by gifttory",
        date: "10 Apr 2026",
        price: "₹480",
        refundNotice: "Refund will be issued to your original payment method."
    };

    return (
        <div className="max-full mx-auto px-6">
            {/* White Content Main Box */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">

                {/* Header Info Section */}
                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-[#020907]">
                        Confirm Cancelation
                    </h2>
                    <p className="text-sm text-[#020907] mt-1">
                        You're about to cancel order <span className="font-medium text-gray-900">{selectedOrder.name.toLowerCase()}</span>
                    </p>
                </div>

                {/* Inner Border Box: Selected Order Preview */}
                <div className="max-w-xl border border-gray-100 rounded-xl p-5 mb-8 shadow-xl">
                    <h3 className="font-sans font-bold text-[#0B2E24] text-sm md:text-base">
                        {selectedOrder.name}
                    </h3>
                    <p className="text-xs text-[#353A39] mt-0.5">
                        {selectedOrder.date}
                    </p>

                    <span className="block font-sans font-bold text-[#966B34] text-sm md:text-base mt-3">
                        {selectedOrder.price}
                    </span>
                    <p className="text-xs text-[#353A39] mt-1">
                        {selectedOrder.refundNotice}
                    </p>
                </div>

                {/* Bottom Trigger Action Control Buttons Area */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-6">
                    {/* Back Option Button */}
                    <button
                        type="button"
                        onClick={() => router.push('/cancellation-flow/select-order')}
                        className="px-6 py-2.5 border border-[#0B2E24] rounded-lg text-sm font-medium text-[#0B2E24]  bg-white transition-colors min-w-[100px]"
                    >
                        Back
                    </button>

                    {/* Submit Confirmation Step Button */}
                    <button
                        type="button"
                        onClick={() => router.push('/cancellation-flow/reason-confirm')}
                        className="px-5 py-2.5 bg-[#0B2E24] text-white rounded-lg text-sm font-medium  transition-colors"
                    >
                        Continue Cancellation
                    </button>
                </div>

            </div>
        </div>
    );
}