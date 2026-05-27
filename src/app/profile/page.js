"use client";
 
import CancelOrder from '@/components/Profile/CancelOrder';
import ChangePassword from '@/components/Profile/ChangePassword';
import MyOrder from '@/components/Profile/MyOrder';
import MyProfile from '@/components/Profile/MyProfile';
import MyStory from '@/components/Profile/MyStory';
import MyWishlist from '@/components/Profile/MyWishlist';
import PaymentHistory from '@/components/Profile/PaymentHistory';
import Refer from '@/components/Profile/Refer';
import Return from '@/components/Profile/Return';
import Rewards from '@/components/Profile/Rewards';
import React, { useState } from 'react';
import {
    FiUser,
    FiHeart,
    FiShoppingBag,
    FiLock,
    FiLogOut,
    FiBookOpen,
    FiXCircle,
    FiRefreshCw,
    FiUsers,
    FiCreditCard,
    FiDollarSign
} from 'react-icons/fi';
 
export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('profile');
 
    // Sidebar items ka array mesh ke mutabik
    const sidebarItems = [
        { id: 'profile', label: 'My Profile', icon: <FiUser /> },
        { id: 'story', label: 'My Story', icon: <FiBookOpen /> },
        { id: 'orders', label: 'My Orders', icon: <FiShoppingBag /> },
        { id: 'cancel', label: 'Cancel Order', icon: <FiXCircle /> },
        { id: 'return', label: 'Return/ Replacement', icon: <FiRefreshCw /> },
        { id: 'wishlist', label: 'My Wishlist', icon: <FiHeart /> },
        { id: 'refer', label: 'Refer & Earn', icon: <FiUsers /> },
        { id: 'rewards', label: 'Rewards & Wallet', icon: <FiDollarSign /> },
        { id: 'payment', label: 'Payment History', icon: <FiCreditCard /> },
        { id: 'password', label: 'Change Password', icon: <FiLock /> },
    ];
 
    // Right side me kaunsa component render hoga, yahan switch case se control hoga
    const renderRightSection = () => {
        switch (activeTab) {
            case 'profile':
                return <MyProfile />;
            case 'story':
                return <MyStory />;
            case 'orders':
                return <MyOrder />;
            case 'cancel':
                return <CancelOrder />;
            case 'return':
                return <Return />;
            case 'wishlist':
                return <MyWishlist />;
            case 'refer':
                return <Refer />;
            case 'rewards':
                return <Rewards />;
            case 'payment':
                return <PaymentHistory />;
            case 'password':
                return <ChangePassword />;
 
            default:
                return <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[600px] text-gray-500">Coming Soon...</div>;
        }
    };
 
    return (
        /* Yahan main container me pt-28 (mobile par) aur md:pt-36 (desktop par) badha diya hai */
        <div className="min-h-screen pt-28 md:pt-36 pb-12 px-4 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
 
                {/* LEFT SIDEBAR: My Account Panel */}
                <div className="w-full md:w-[280px] bg-white rounded-2xl shadow-lg p-6 border border-[#DFDFDF] shrink-0">
                    <h2 className="text-2xl font-bold text-[#020907] mb-6 px-2 font-serif">My Account</h2>
 
                    <nav className="space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all relative overflow-hidden ${isActive
                                            ? 'bg-[#F0F0F0] text-[#020907]'
                                            : 'text-[#000000] hover:bg-gray-50'
                                        }`}
                                >
                                    {isActive && (
                                       <div className="absolute right-0 -top-4 -bottom-4 w-[4px] bg-[#0B2E24] rounded-l-full"></div>
                                    )}
 
                                    <span className="text-lg">
                                        {item.icon}
                                    </span>
 
                                    {item.label}
                                </button>
                            );
                        })}
 
                        {/* Log Out Button */}
                        <button
                            onClick={() => console.log('Logout logic')}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-red-500 hover:bg-red-50 transition-colors mt-4"
                        >
                            <span className="text-lg"><FiLogOut /></span>
                            Log Out
                        </button>
                    </nav>
                </div>
 
                {/* RIGHT SIDEBAR: Dynamic Content Container */}
                <div className="flex-1 w-full">
                    {renderRightSection()}
                </div>
 
            </div>
        </div>
    );
}