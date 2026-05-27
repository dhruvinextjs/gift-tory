"use client";

import React from 'react';

export default function PaymentHistory() {
    // Dummy Payment History Data bilkul aapki image ke mutabik
    const paymentsData = [
        { date: '30 April 2026, 2:16 PM', transaction: 'Paid on Gifttory', orderId: '#4555', amount: '1,200' },
        { date: '30 April 2026, 2:16 PM', transaction: 'Paid on Gifttory', orderId: '#4555', amount: '1,200' },
        { date: '30 April 2026, 2:16 PM', transaction: 'Paid on Gifttory', orderId: '#4555', amount: '1,200' },
        { date: '30 April 2026, 2:16 PM', transaction: 'Paid on Gifttory', orderId: '#4555', amount: '1,200' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 border border-[#DFDFDF]">
            {/* Title */}
            <h3 className="text-xl font-bold text-[#020907] mb-6">Payment History</h3>

            {/* Payments Table Container */}
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-separate border-spacing-y-2.5">
                    {/* Table Header */}
                    <thead>
                        <tr className="text-[#353A39] text-sm font-semibold">
                            {/* py-2 padding karke header height kam rakhi hai */}
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-l border-[#DFDFDF] rounded-l-lg">Date</th>
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-[#DFDFDF]">Transactions</th>
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-[#DFDFDF]">Order ID</th>
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-r border-[#DFDFDF] rounded-r-lg">Amount</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {paymentsData.map((payment, index) => (
                            <tr key={index} className="text-sm text-[#4E5251] transition-colors hover:bg-gray-50/50">
                                {/* py-2.5 se perfect balanced height aur gap handle hoga */}
                                <td className="py-2.5 px-6 border-y border-l border-[#DFDFDF] rounded-l-lg bg-white">
                                    {payment.date}
                                </td>
                                <td className="py-2.5 px-6 border-y border-[#DFDFDF] bg-white text-[#4E5251]">
                                    {payment.transaction}
                                </td>
                                <td className="py-2.5 px-6 border-y border-[#DFDFDF] bg-white">
                                    {payment.orderId}
                                </td>
                                <td className="py-2.5 px-6 font-medium text-[#020907] border-y border-r border-[#DFDFDF] rounded-r-lg bg-white">
                                    ₹{payment.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}