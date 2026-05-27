// "use client";

// import React, { useState } from 'react';
// import { FiSearch, FiEye } from 'react-icons/fi';
// import { IoSearchSharp } from 'react-icons/io5';
// import { VscEye } from 'react-icons/vsc';

// export default function MyOrder() {
//     // Current selected sub-tab ki state (All, Pending, Receive, Canceled)
//     const [selectedStatus, setSelectedStatus] = useState('All');
//     const [searchQuery, setSearchQuery] = useState('');

//     // Dummy Orders Data bilkul aapki image ke elements ke mutabik
//     const ordersData = [
//         { id: '#4555', date: 'April 30, 2026', status: 'Canceled', total: '1,200' },
//         { id: '#4555', date: 'April 30, 2026', status: 'Received', total: '1,200' },
//         { id: '#4555', date: 'April 30, 2026', status: 'Pending', total: '1,200' },
//     ];

//     // Status filter ke status labels
//     const statusTabs = ['All', 'Pending', 'Receive', 'Canceled'];

//     // Status ke mutabik dynamic badge styles return karne ka function
//     const getStatusStyle = (status) => {
//         switch (status.toLowerCase()) {
//             case 'canceled':
//                 return 'bg-[#FFE9E6] text-[#FF5A43] border border-[#FFD3CC]';
//             case 'received':
//             case 'receive':
//                 return 'bg-[#E6F9EE] text-[#10B981] border border-[#C2F4D5]';
//             case 'pending':
//                 return 'bg-[#FFF3E6] text-[#F59E0B] border border-[#FFE4C4]';
//             default:
//                 return 'bg-gray-100 text-gray-600';
//         }
//     };

//     // Filter Logic: Search input aur Tab click dono par filter lagane ke liye
//     const filteredOrders = ordersData.filter(order => {
//         const matchesTab = selectedStatus === 'All' || 
//             (selectedStatus === 'Receive' && order.status === 'Received') || 
//             order.status === selectedStatus;
        
//         const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
//             order.status.toLowerCase().includes(searchQuery.toLowerCase());

//         return matchesTab && matchesSearch;
//     });

//     return (
//         <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 border border-[#DFDFDF] min-h-[600px]">
//             {/* Title */}
//             <h3 className="text-xl font-bold text-[#020907] mb-6">My Orders</h3>

//             {/* 1. Status Filter Tabs */}
//             <div className="flex flex-wrap gap-3 mb-6">
//                 {statusTabs.map((tab) => {
//                     const isActive = selectedStatus === tab;
//                     return (
//                         <button
//                             key={tab}
//                             onClick={() => setSelectedStatus(tab)}
//                             className={`px-5 py-2 text-xs font-medium rounded-md border transition-all ${
//                                 isActive
//                                     ? 'bg-[#0B2E24] text-white border-[#0B2E24]'
//                                     : 'bg-white text-[#4E5251] border-[#EAEAEA] hover:bg-gray-50'
//                             }`}
//                         >
//                             {tab}
//                         </button>
//                     );
//                 })}
//             </div>

//             {/* 2. Search Input Input */}
//             <div className="relative max-w-md mb-6">
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
//                     <IoSearchSharp  className="text-xl text-[#020907]" />
//                 </span>
//                 <input
//                     type="text"
//                     placeholder='Search "Pending"'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-11 pr-4 py-2.5 text-sm rounded-lg border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-[#353A39]"
//                 />
//             </div>

//             {/* 3. Orders Table Container */}
//             <div className="w-full overflow-x-auto rounded-xl border border-gray-100">
//                 <table className="w-full min-w-[600px] text-left border-collapse">
//                     {/* Table Header */}
//                     <thead>
//                         <tr className="bg-[#F6F6F6] text-[#353A39] border border-[#DFDFDF] text-sm font-semibold">
//                             <th className="py-3.5 px-6">Order</th>
//                             <th className="py-3.5 px-6">Date</th>
//                             <th className="py-3.5 px-6">Status</th>
//                             <th className="py-3.5 px-6">Total</th>
//                             <th className="py-3.5 px-6 text-center">Action</th>
//                         </tr>
//                     </thead>

//                     {/* Table Body */}
//                     <tbody className="divide-y divide-gray-100">
//                         {filteredOrders.length > 0 ? (
//                             filteredOrders.map((order, index) => (
//                                 <tr key={index} className="text-sm text-[#4E5251] border border-[#DFDFDF] transition-colors ">
//                                     <td className="py-4 px-6 font-medium text-[#020907]">{order.id}</td>
//                                     <td className="py-4 px-6">{order.date}</td>
//                                     <td className="py-4 px-6">
//                                         <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${getStatusStyle(order.status)}`}>
//                                             {order.status}
//                                         </span>
//                                     </td>
//                                     <td className="py-4 px-6 font-medium text-[#020907]">₹{order.total}</td>
//                                     <td className="py-4 px-6">
//                                         <div className="flex justify-center">
//                                             <button 
//                                                 onClick={() => console.log('View order details for:', order.id)}
//                                                 className="p-1.5 text-gray-500 hover:text-[#0B2E24] hover:bg-gray-100 rounded-lg transition-all"
//                                                 title="View Order"
//                                             >
//                                                 <VscEye  className="text-xl text-[#000000]" />
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5" className="py-8 text-center text-gray-400 text-sm">
//                                     No orders found matching this criteria.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


"use client";

import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { VscEye } from 'react-icons/vsc';

export default function MyOrder() {
    // Current selected sub-tab ki state (All, Pending, Receive, Canceled)
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Dummy Orders Data
    const ordersData = [
        { id: '#4555', date: 'April 30, 2026', status: 'Canceled', total: '1,200' },
        { id: '#4555', date: 'April 30, 2026', status: 'Received', total: '1,200' },
        { id: '#4555', date: 'April 30, 2026', status: 'Pending', total: '1,200' },
    ];

    // Status filter ke status labels
    const statusTabs = ['All', 'Pending', 'Receive', 'Canceled'];

    // Status ke mutabik dynamic badge styles
    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'canceled':
                return 'bg-[#FFCEBC] text-[#FF4602]';
            case 'received':
            case 'receive':
                return 'bg-[#D1FFBC] text-[#37A803]';
            case 'pending':
                return 'bg-[#FFE0C5] text-[#F27D18]';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    // Filter Logic
    const filteredOrders = ordersData.filter(order => {
        const matchesTab = selectedStatus === 'All' || 
            (selectedStatus === 'Receive' && order.status === 'Received') || 
            order.status === selectedStatus;
        
        const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
            order.status.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesTab && matchesSearch;
    });

    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 border border-[#DFDFDF] ">
            {/* Title */}
            <h3 className="text-xl font-bold text-[#020907] mb-6">My Orders</h3>

            {/* 1. Status Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
                {statusTabs.map((tab) => {
                    const isActive = selectedStatus === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => setSelectedStatus(tab)}
                            className={`px-5 py-2 text-xs font-medium rounded-md border transition-all ${
                                isActive
                                    ? 'bg-[#0B2E24] text-white border-[#0B2E24]'
                                    : 'bg-white text-[#4E5251] border-[#EAEAEA] hover:bg-gray-50'
                            }`}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            {/* 2. Search Input */}
            <div className="relative max-w-md mb-6">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <IoSearchSharp className="text-xl text-[#020907]" />
                </span>
                <input
                    type="text"
                    placeholder='Search "Pending"'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 text-sm rounded-lg border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-[#353A39]"
                />
            </div>

            {/* 3. Orders Table Container */}
            {/* Note: Jab separate rows banate hain, tab table container se border hatana sahi rehta hai taaki outer container double border na banaye */}
            <div className="w-full overflow-x-auto">
                {/* Yahan humne 'border-collapse' hata kar 'border-separate' kiya hai 
                  aur 'border-spacing-y-3' se header aur har row ke bich 12px ka vertical gap de diya hai.
                */}
                <table className="w-full min-w-[600px] text-left border-separate border-spacing-y-3">
                    {/* Table Header */}
                    <thead>
                        {/* Headers ko square borders dene ke liye individual cells par classes use ki hain */}
                        <tr className="text-[#353A39] text-sm font-semibold">
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-l border-[#DFDFDF] rounded-l-lg">Order</th>
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-[#DFDFDF]">Date</th>
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-[#DFDFDF]">Status</th>
                            <th className="py-2 px-6 bg-[#F6F6F6] border-y border-[#DFDFDF]">Total</th>
                            <th className="py-2 px-6 text-center bg-[#F6F6F6] border-y border-r border-[#DFDFDF] rounded-r-lg">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order, index) => (
                                <tr key={index} className="text-sm text-[#4E5251] transition-colors hover:bg-gray-50/50">
                                    {/* py-2.5 karke table rows ki padding kam ki hai taaki line tight aur compact dikhe */}
                                    <td className="py-1 px-6 font-medium text-[#020907] border-y border-l border-[#DFDFDF] rounded-l-lg bg-white">
                                        {order.id}
                                    </td>
                                    <td className="py-1 px-6 border-y border-[#DFDFDF] bg-white">
                                        {order.date}
                                    </td>
                                    <td className="py-1 px-6 border-y border-[#DFDFDF] bg-white">
                                        <span className={`px-3 py-0.5 rounded-full text-xs font-semibold inline-block ${getStatusStyle(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-1 px-6 font-medium text-[#020907] border-y border-[#DFDFDF] bg-white">
                                        ₹{order.total}
                                    </td>
                                    <td className="py-1 px-6 border-y border-r border-[#DFDFDF] rounded-r-lg bg-white">
                                        <div className="flex justify-center">
                                            <button 
                                                onClick={() => console.log('View order details for:', order.id)}
                                                className="p-1 text-gray-500 hover:text-[#0B2E24] hover:bg-gray-100 rounded-lg transition-all"
                                                title="View Order"
                                            >
                                                <VscEye className="text-xl text-[#000000]" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-8 text-center text-gray-400 text-sm bg-white border border-[#DFDFDF] rounded-lg">
                                    No orders found matching this criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}