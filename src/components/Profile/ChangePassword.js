"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

export default function ChangePassword() {
      const router = useRouter();
    // Password visibility states
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Form inputs state
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Password Change requested:", formData);
        // Aap apni API integration yahan kar sakte hain
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 border border-[#DFDFDF]">
            {/* Title */}
            <h3 className="text-xl font-bold text-[#020907] mb-6">Change Password</h3>

            <form onSubmit={handleSubmit} className="max-w-4xl space-y-3">
                
                {/* 1. Current Password */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-[#020907] block">
                        Current Password
                    </label>
                    <div className="relative">
                        <input
                            type={showCurrent ? "text" : "password"}
                            placeholder="Enter current password"
                            value={formData.currentPassword}
                            onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                            className="w-full px-4 py-2 pr-11 text-xs rounded-lg border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-[#353A39] transition-all placeholder:text-[#353A39]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowCurrent(!showCurrent)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-[#0B2E24] transition-colors"
                        >
                            {showCurrent ? <VscEye className="text-lg text-[#000000]" /> : <VscEyeClosed className="text-lg text-[#000000]" />}
                        </button>
                    </div>
                </div>

                {/* 2. New Password */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-[#020907] block">
                        New Password
                    </label>
                    <div className="relative">
                        <input
                            type={showNew ? "text" : "password"}
                            placeholder="Enter new password"
                            value={formData.newPassword}
                            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                            className="w-full px-4 py-2.5 pr-11 text-xs rounded-lg border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-[#353A39] transition-all placeholder:text-[#353A39]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowNew(!showNew)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-[#0B2E24] transition-colors"
                        >
                            {showNew ? <VscEye  className="text-lg text-[#000000]" /> : <VscEyeClosed  className="text-lg text-[#000000]" />}
                        </button>
                    </div>
                </div>

                {/* 3. Confirm Password */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-[#020907] block">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Enter confirm password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="w-full px-4 py-2.5 pr-11 text-xs rounded-lg border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-[#353A39] transition-all placeholder:text-[#353A39]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-[#0B2E24] transition-colors"
                        >
                            {showConfirm ? <VscEye className="text-lg text-[#000000]" /> : <VscEyeClosed className="text-lg text-[#000000]" />}
                        </button>
                    </div>
                </div>

                {/* Forgot Password Link */}
                <div className="pt-1">
                    <button 
                        type="button" 
                       onClick={() => router.push("/forget-password")}
                        className="text-xs font-medium text-[#4F46E5] hover:underline"
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#0B2E24] text-white text-sm font-semibold rounded-lg hover:bg-[#071F18] transition-all shadow-sm"
                    >
                        Save password
                    </button>
                </div>

            </form>
        </div>
    );
}