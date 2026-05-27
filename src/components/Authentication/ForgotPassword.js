"use client";
 
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { IoIosArrowDown } from "react-icons/io";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; // Visibility icons ke liye
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
 
export default function ForgotPassword() {
    // Ab step teen ho sakte hain: 'forgot' -> 'otp' -> 'reset-password'
    const [step, setStep] = useState('forgot');
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();
 
    // OTP State (4 digit)
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
 
    // New Password States
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
    // Country Selector State
    const [selectedCountry, setSelectedCountry] = useState({
        code: "+91",
        countryCode: "IN",   // ISO Code for flag
        name: "India"
    });
 
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
 
    // Countries List
    const countries = [
        { code: "+91", countryCode: "IN", name: "India" },
        { code: "+1", countryCode: "US", name: "United States" },
        { code: "+44", countryCode: "GB", name: "United Kingdom" },
        { code: "+971", countryCode: "AE", name: "United Arab Emirates" },
        { code: "+966", countryCode: "SA", name: "Saudi Arabia" },
        { code: "+1", countryCode: "CA", name: "Canada" },
        { code: "+61", countryCode: "AU", name: "Australia" },
        { code: "+880", countryCode: "BD", name: "Bangladesh" },
        { code: "+49", countryCode: "DE", name: "Germany" },
    ];
 
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setShowCountryDropdown(false);
    };
 
    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;
 
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
 
        if (element.value !== '' && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };
 
    const handleOtpKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };
 
    // Form Submission Handling for Step 3
    const handleResetSubmit = (e) => {
        e.preventDefault();
        // Handle your API logic here
        console.log("Passwords submitted:", { newPassword, confirmPassword });
        // Success hone ke baad redirect to login
        router.push("/signin");
    };
 
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
 
                {/* Logo (Sabhi steps me common hai) */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/images/Logo.png"
                        alt="Gifttory Logo"
                        width={220}
                        height={100}
                        priority
                        unoptimized
                        className="w-50 h-auto object-contain"
                    />
                </div>
 
                {/* STEP 1: FORGOT PASSWORD PHONE INPUT */}
                {step === 'forgot' && (
                    <>
                        <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Forgot Password?</h2>
 
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-[#020907] mb-1">Phone number</label>
 
                                <div className="relative">
                                    <div className="flex border border-[#DFDFDF] rounded-lg overflow-hidden">
                                       
                                        {/* Country Code Selector */}
                                        <div
                                            className="flex items-center px-2 py-3 hover:bg-gray-100 transition-colors min-w-[60px] cursor-pointer relative"
                                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                        >
                                            <div className="absolute right-0 h-5 w-[1px] bg-[#DFDFDF]"></div>
                                            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                                                <ReactCountryFlag
                                                    countryCode={selectedCountry.countryCode}
                                                    svg
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                    title={selectedCountry.name}
                                                />
                                            </div>
                                            <IoIosArrowDown className="ml-auto text-[#020907] font-bold text-md" />
                                        </div>
 
                                        {/* Phone Input */}
                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Enter phone number"
                                            className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder:text-[#353A39]"
                                        />
                                    </div>
 
                                    {/* Country Dropdown */}
                                    {showCountryDropdown && (
                                        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-2 max-h-72 overflow-auto">
                                            {countries.map((country, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleCountrySelect(country)}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
                                                >
                                                    <ReactCountryFlag
                                                        countryCode={country.countryCode}
                                                        svg
                                                        style={{
                                                            width: "28px",
                                                            height: "20px",
                                                            borderRadius: "4px",
                                                        }}
                                                    />
                                                    <span className="font-medium w-12">{country.code}</span>
                                                    <span className="text-gray-600">{country.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
 
                            <button
                                type="button"
                                onClick={() => setStep('otp')}
                                className="w-full bg-[#0B2E24] transition-colors text-white font-bold py-3 rounded-xl text-sm"
                            >
                                Request OTP
                            </button>
                        </form>
                    </>
                )}
 
                {/* STEP 2: OTP / MPIN DESIGN */}
                {step === 'otp' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Verify your phone number</h2>
                        <p className="text-xs text-[#353A39] mb-6 text-left">We have sent OTP on your email for verification.</p>
 
                        <div className="flex justify-start gap-2 mb-4">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    value={data}
                                    onChange={(e) => handleOtpChange(e.target, index)}
                                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                    className="w-22 h-14 border border-[#DFDFDF] rounded-xl text-lg text-[#0B2E24] text-center outline-none transition-all"
                                />
                            ))}
                        </div>
 
                        <div className="mb-6">
                            <p className="text-sm text-[#4E5251]">Didn't receive an OTP?</p>
                            <button
                                type="button"
                                className="text-sm text-[#6549E0] font-bold hover:underline mt-0.5"
                            >
                                Resend in 0:30s
                            </button>
                        </div>
 
                        <button
                            type="button"
                            onClick={() => setStep('reset-password')} // Ab yeh router push ke badle step 3 kholega
                            className="w-full bg-[#0B2E24] hover:bg-[#051712] transition-colors text-white font-bold py-3 rounded-lg text-sm mb-4"
                        >
                            Next
                        </button>
                    </div>
                )}
 
                {/* STEP 3: ENTER NEW PASSWORD (IMAGE 3) */}
                {step === 'reset-password' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-[#353A39] mb-6">Enter New Password</h2>
                       
                        <form onSubmit={handleResetSubmit} className="space-y-4">
                            {/* New Password */}
                            <div>
                                <label className="block text-xs font-bold text-[#020907] mb-1">New Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter new password"
                                        className="w-full px-4 py-2.5 border border-[#DFDFDF] rounded-lg text-sm text-gray-700 placeholder:text-[#9A9A9A] outline-none"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-3 text-[#000000]  text-lg"
                                    >
                                        {showNewPassword ? <VscEye /> : <VscEyeClosed  /> }
                                    </button>
                                </div>
                            </div>
 
                            {/* Confirm Password */}
                            <div>
                                <label className="block text-xs font-bold text-[#020907] mb-1">Confirm Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Enter confirm password"
                                        className="w-full px-4 py-2.5 border border-[#DFDFDF] rounded-lg text-sm text-gray-700 placeholder:text-[#9A9A9A] outline-none"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 text-[#000000]  text-lg"
                                    >
                                        {showConfirmPassword ?  <VscEye /> : <VscEyeClosed /> }
                                    </button>
                                </div>
                            </div>
 
                            {/* Sign In / Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#0B2E24] hover:bg-[#051712] transition-colors text-white font-bold py-3 rounded-lg text-sm mt-2"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                )}
 
            </div>  
        </div>
    );
}
 