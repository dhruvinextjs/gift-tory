"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReasonConfirmPage() {
    const router = useRouter();
    const [selectedReason, setSelectedReason] = useState("Order by Mistake");
    const [comments, setComments] = useState("");

    // Image ke mutabik saare cancellation reasons
    const reasons = [
        { id: 1, text: "Order by Mistake" },
        { id: 2, text: "Changed my mind" },
        { id: 3, text: "Found a better price elsewhere" },
        { id: 4, text: "Wrong item / Size selected" },
        { id: 5, text: "Delivery taking too long" },
        { id: 6, text: "Other Reason" }
    ];

    const handleConfirm = () => {
        // Form submit ya API call logic yahan add kar sakte hain
        // Iske baad hum final step (Refund Initiated) par chale jayenge
        router.push('/cancellation-flow/refund-initiated');
    };

    return (
        <div className="max-full mx-auto px-6">
            {/* Main Container Card Box */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
                
                {/* Header Titles */}
                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-[#020907]">
                        Confirm Cancelation
                    </h2>
                    <p className="text-sm text-[#020907] mt-1">
                        You're about to cancel order self care hamper by gifttory
                    </p>
                </div>

                {/* Subheading */}
                <h3 className="text-sm font-sans font-bold text-[#0B2E24] mb-4">
                    Select an Issue
                </h3>

                {/* Reasons Responsive Grid Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {reasons.map((reason) => {
                        const isCurrentSelected = selectedReason === reason.text;
                        return (
                            <button
                                key={reason.id}
                                type="button"
                                onClick={() => setSelectedReason(reason.text)}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg border text-sm font-medium transition-all text-left
                                    ${isCurrentSelected 
                                        ? "bg-[#0B2E24] border-[#0B2E24] text-white shadow-sm" 
                                        : "bg-white border-[#DFDFDF] text-[#020907]"
                                    }`}
                            >
                                {/* Custom Round Dot Radio Indicator */}
                                <span className={`w-3 h-3 rounded-full flex-shrink-0 transition-colors
                                    ${isCurrentSelected ? "bg-[#966B34]" : "bg-[#966B34]"}`} 
                                />
                                {reason.text}
                            </button>
                        );
                    })}
                </div>

                {/* Additional Comments Textarea Area */}
                <div className="mb-8">
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        placeholder="Additional Comments (Optional)"
                        rows={4}
                        className="w-full border border-[#DFDFDF] rounded-lg p-4 text-smfocus:outline-none  placeholder-[#353A39] resize-none font-sans"
                    />
                </div>

                {/* Bottom Action Footer Control Buttons */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-6">
                    {/* Back Button to Step 2 */}
                    <button
                        type="button"
                        onClick={() => router.push('/cancellation-flow/cancel-order')}
                        className="px-6 py-2.5 border border-[#0B2E24] rounded-lg text-sm font-medium text-[#0B2E24] transition-colors min-w-[100px]"
                    >
                        Back
                    </button>

                    {/* Final Trigger Confirm Button */}
                    <button
                        type="button"
                        onClick={handleConfirm}
                        className="px-5 py-2.5 bg-[#0B2E24] text-[#FFFFFF] rounded-lg text-sm font-medium  transition-colors"
                    >
                        Confirm Cancellation
                    </button>
                </div>

            </div>
        </div>
    );
}