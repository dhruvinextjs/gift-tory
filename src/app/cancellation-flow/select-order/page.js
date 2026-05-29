"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiInbox } from 'react-icons/fi';

export default function SelectOrderPage() {
    const router = useRouter();

    const orders = [
        { id: 1, name: "Self Care hamper by gifttory", date: "10 Apr 2026", price: "₹480", status: "Processing" },
        { id: 2, name: "Self Care hamper by gifttory", date: "10 Apr 2026", price: "₹480", status: "Processing" },
        { id: 3, name: "Self Care hamper by gifttory", date: "10 Apr 2026", price: "₹480", status: "Processing" },
        { id: 4, name: "Self Care hamper by gifttory", date: "10 Apr 2026", price: "₹480", status: "Processing" },
    ];

    return (
        <div className="max-full mx-auto px-6">
            {/* Main Content Box Card */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
                
                {/* Title */}
                <div className="border-b border-gray-100 pb-4 mb-6">
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-[#0B2E24]">
                        Select an order to cancel
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Only orders that haven't shipped are eligible.
                    </p>
                </div>

                {/* Orders List */}
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div 
                            key={order.id}
                            className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-[#FBFBFA] hover:border-[#966B34]/40 hover:bg-white transition-all duration-200 cursor-pointer group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 group-hover:border-[#966B34]/30">
                                   <FiInbox className='text-4xl' />
                                </div>
                                <div>
                                    <h3 className="font-sans font-semibold text-gray-900 text-sm md:text-base">
                                        {order.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {order.date}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <span className="block font-sans font-bold text-gray-900 text-sm md:text-base">
                                    {order.price}
                                </span>
                                <span className="inline-block text-[11px] font-medium tracking-wide text-gray-500 mt-1 bg-gray-100 px-2 py-0.5 rounded-full">
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}