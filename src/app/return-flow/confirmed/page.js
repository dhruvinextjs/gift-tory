"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FiCheck } from "react-icons/fi";

const NEXT_STEPS = [
    "Pickup scheduled (2-3 days)",
    "Replacement dispatched",
    "Replacement delivered",
];

export default function ConfirmedPage() {
    const router = useRouter(); 

    const orderId = "AUR-2024-0613";

    const handleBackToOrders = () => {
        router.push("/orders");
    };  

    const handleContinueShopping = () => {
        router.push("/");
    };

    return (
        <div className=" rounded-md border border-[#DFDFDF] shadow-sm max-w-5xl mx-auto p-8 md:p-10 flex flex-col items-center text-center">
            {/* ================= SUCCESS ICON ================= */}
            <div className="w-20 h-20 rounded-full bg-[#1B3B2F] flex items-center justify-center mb-5">
                <FiCheck className="text-white text-6xl" />
            </div>

            {/* ================= HEADING ================= */}
            <h2 className="text-2xl font-bold text-[#020907]">Replacement Confirmed</h2>
            <p className="text-sm text-[#020907] mt-2 max-w-md">
                Your replacement for {orderId} has been approved. A courier will collect the original within 2-3 business days.
            </p>

            {/* ================= WHAT HAPPENS NEXT ================= */}
            <div className="w-xs mt-8">           
                <p className="text-sm font-semibold text-[#0B2E24] mb-3">What happens next</p>
                <div className="border border-[#DFDFDF] rounded px-5 py-4 text-left">
                    <ol className="space-y-2">
                        {NEXT_STEPS.map((step, idx) => (
                            <li key={idx} className="text-sm text-[#020907]">
                                {idx + 1}. {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="flex items-center gap-4 mt-8">
                <button
                    type="button"
                    onClick={handleBackToOrders}
                    className="px-6 py-2.5 rounded border border-[#0B2E24] text-sm font-medium text-[#0B2E24] transition-colors"
                >
                    Back to orders
                </button>
                <button
                    type="button"
                    onClick={handleContinueShopping}
                    className="px-6 py-2.5 rounded bg-[#0B2E24] text-[#FFFFFF] text-sm font-medium hover:bg-[#163026] transition-colors"
                >
                    Continue shopping
                </button>
            </div>
        </div>
    );
}