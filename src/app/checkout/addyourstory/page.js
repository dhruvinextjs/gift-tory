"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMic, FiPlay, FiPause } from "react-icons/fi";
import { LuCloudUpload, LuCalendar } from "react-icons/lu";
import { RiCalendar2Line } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";

export default function AddYourStoryPage() {
    const router = useRouter();

    // States based on the design fields
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const [recipientName, setRecipientName] = useState("");
    const [relation, setRelation] = useState("");
    const [occasionDate, setOccasionDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [otherOccasion, setOtherOccasion] = useState("");
    const [qrText, setQrText] = useState("");
    const [allowPublic, setAllowPublic] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleProceedToPayment = () => {
        router.push("/checkout/payment");
    };

    return (
        <div className="w-full px-0 md:px-8 animate-fadeIn min-h-screen pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* --- LEFT SIDE: ADD A STORY TO YOUR GIFT FORM --- */}
                <div className="lg:col-span-2 border border-[#E5E5E5] rounded-xl p-6 bg-white shadow-sm space-y-5">

                    {/* Header Title Text */}
                    <div>
                        <h2 className="text-base font-bold text-[#111111]">Add a Story to Your Gift</h2>
                        <p className="text-xs text-[#020907] mt-0.5">
                            Make it Unforgettable with your voice or video
                        </p>
                    </div>

                    {/* Toggle Banner: Enable Gifttory Voice (QR Code) */}
                    <div className="border border-[#E5E5E5] rounded-xl p-4 bg-white flex items-center justify-between shadow-sm">
                        <span className="text-sm font-bold text-black">Enable Gifttory Voice (QR Code)</span>
                        <label className="relative inline-flex items-center cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={voiceEnabled}
                                onChange={() => setVoiceEnabled(!voiceEnabled)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#052316]"></div>
                        </label>
                    </div>

                    {/* Form Stack Fields conditional based on toggle */}
                    {voiceEnabled && (
                        <div className="space-y-4 text-sm animate-fadeIn">

                            {/* Row 1: Recipient Name & Relation */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-[#111111]">Recipient Name</label>
                                    <input
                                        type="text"
                                        value={recipientName}
                                        onChange={(e) => setRecipientName(e.target.value)}
                                        placeholder="Enter recipient name"
                                        className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none placeholder:text-[#353A39]"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-[#111111]">Your Relation</label>
                                    <input
                                        type="text"
                                        value={relation}
                                        onChange={(e) => setRelation(e.target.value)}
                                        placeholder="Enter your relation"
                                        className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none placeholder:text-[#353A39]"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Occasion Date & Occasion Dropdown */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-[#111111]">Occasion Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={occasionDate}
                                            onChange={(e) => setOccasionDate(e.target.value)}
                                            className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none  bg-white appearance-none cursor-pointer"
                                        />
                                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#353A39]">
                                            <RiCalendar2Line className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-[#111111]">Occasion</label>
                                    <select
                                        value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                        className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none bg-white cursor-pointer"
                                    >
                                        <option value="">Select occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 3: Other Occasion Textarea */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-bold text-[#111111]">Other</label>
                                <textarea
                                    rows={2}
                                    value={otherOccasion}
                                    onChange={(e) => setOtherOccasion(e.target.value)}
                                    placeholder="Enter occasion"
                                    className="w-full border border-gray-200 rounded-lg p-3 text-[#353A39] outline-none focus:border-gray-400 placeholder:text-[#353A39] resize-none"
                                />
                            </div>

                            {/* Record or Upload Media Block */}
                            <div className="space-y-2">
                                <div>
                                    <label className="font-bold text-[#111111]">Record or Upload your story</label>
                                    <p className="text-[11px] text-[#353A39] mt-0.5">Max 30 Seconds Video or Audio</p>
                                </div>

                                <div className="flex gap-2"> {/* gap-4 se gap-2 kiya aur grid ki jagah flex use kiya taaki space perfect control ho */}
                                    {/* Upload Audio Option */}
                                    <label className="border border-[#DFDFDF] rounded-xl p-10 bg-white flex flex-col items-center justify-center cursor-pointer transition-all text-center select-none group w-full max-w-[180px]">
                                        <div className="relative w-20 h-20 mb-2"> {/* Size ko w-20 se w-7 kiya taaki doosre icon jitna sem dikhe */}
                                            <Image
                                                src="/images/mic-icon.png"
                                                alt="Upload Audio"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-xs font-semibold text-black">Upload Audio</span>
                                    </label>

                                    {/* Upload Video Option */}
                                    <label className="border border-[#DFDFDF] rounded-xl p-10 bg-white flex flex-col items-center justify-center cursor-pointer transition-all text-center select-none group w-full max-w-[180px]">
                                        <div className="relative w-20 h-20 mb-2">
                                            <Image
                                                src="/images/lets-upload-icon.png"
                                                alt="Upload Video"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-xs font-semibold text-black">Upload Video</span>
                                    </label>
                                </div>
                            </div>

                            {/* Short Text Description for QR Card */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-bold text-[#111111]">A short text for the QR card</label>
                                <input
                                    type="text"
                                    value={qrText}
                                    onChange={(e) => setQrText(e.target.value)}
                                    placeholder="e.g., Scan me, [Name]"
                                    className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none placeholder:text-[#353A39]"
                                />
                            </div>

                            {/* Preview Box Frame: Mug and Music Player Grid */}
                            <div className="space-y-2">
                                <label className="font-bold text-[#111111]">Preview (How it will appear after scan)</label>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl p-3 bg-white w-full max-w-sm">
                                    {/* Left Side: Product Mug Frame mock */}
                                    <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-gray-50 border border-[#DFDFDF]">
                                        <img
                                            src="/images/video1.png"
                                            alt="Preview Mug"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500";
                                            }}
                                        />
                                        {/* Play Badge Icon on Mug */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white/90 p-2.5 rounded-full shadow-md text-[#052316]">
                                                <FiPlay className="text-sm fill-current ml-0.5" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Waveform Audio Controls Layout */}
                                    <div className="flex flex-col items-center justify-center bg-white p-3 border border-[#DFDFDF] rounded-lg">
                                        {/* Center Controller Buttons */}
                                        <div className="flex items-center gap-4 text-gray-700">
                                            <span className="text-[10px] tracking-tight font-medium">⏮</span>
                                            <button
                                                type="button"
                                                onClick={() => setIsPlaying(!isPlaying)}
                                                className="bg-black text-white p-2 rounded-full flex items-center justify-center shadow-sm"
                                            >
                                                {isPlaying ? <FiPause className="text-xs" /> : <FiPlay className="text-xs fill-current ml-0.5" />}
                                            </button>
                                            <span className="text-[10px] tracking-tight font-medium">⏭</span>
                                        </div>

                                        {/* Simple Bottom Layout Dots Indicator mock */}
                                        <div className="flex gap-1 mt-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Public Feature Permission Checkbox */}
                            <div className="flex items-center gap-2 pt-2 select-none">
                                <input
                                    type="checkbox"
                                    id="allowPublic"
                                    checked={allowPublic}
                                    onChange={() => setAllowPublic(!allowPublic)}
                                    className="w-4 h-4 appearance-none cursor-pointer rounded border border-black checked:bg-[#052316] relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-[10px] checked:after:font-bold checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all"
                                />
                                <label htmlFor="allowPublic" className="text-xs text-[#353A39] font-medium cursor-pointer">
                                    Allow Gifttory to feature this story publicly
                                </label>
                            </div>

                        </div>
                    )}
                </div>

                {/* --- RIGHT SIDE: ORDER SUMMARY SIDEBAR --- */}
                <div className="space-y-5">
                  <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm space-y-3">
                                <div className="flex items-start gap-2">
                                  <span className="text-[#0B2E24] mt-0.5 text-base"><TbCurrentLocation /></span>
                                  <div className="text-xs text-[#353A39] w-full">
                                    <div className="flex justify-between items-center w-full">
                                      <span className="font-bold text-sm text-[#000000]">Lorem Ipsum</span>
                                      <span className="text-xs font-bold bg-gray-150 px-2 py-0.5 rounded text-[#000000]">Home</span>
                                    </div>
                                    <p className="mt-1 text-[#353A39] line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                  </div>
                                </div>
                                <button 
                                  onClick={() => { setIsSaved(false); setStep(2); }}
                                  className="w-full text-center border border-[#0B2E24] rounded-xl py-2.5 text-xs font-bold text-[#0B2E24] hover:bg-gray-50 transition-all mt-2"
                                >
                                  Change address
                                </button>
                              </div>

                    {/* Pricing Calculations Stack */}
                    <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm">
                        <h3 className="font-semibold text-[17px] text-[#111111] mb-4">Oder Summary</h3>

                        {/* Snapshot Row */}
                        <div className="flex gap-3 items-center mb-5">
                            <div className="w-12 h-12 bg-[#F3F0EA] rounded border border-gray-100 overflow-hidden flex-shrink-0 relative">
                                <img
                                    src="/images/image1.png"
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=Gift";
                                    }}
                                />
                            </div>
                            <span className="text-[13px] text-[#333333] font-bold line-clamp-1">Self Care Gift by Gifttory</span>
                        </div>

                        <h4 className="text-[13px] font-bold text-[#111111] border-t border-dashed pt-4 mb-3">
                            Product Details (2 items)
                        </h4>

                        {/* Calculations Base list */}
                        <div className="space-y-3 text-[13px] text-[#555555] border-b border-dashed pb-4">
                            <div className="flex justify-between text-xs">
                                <span className="text-[#353A39]">MRP Total</span>
                                <span className="text-[#111111] font-medium">₹2,400</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-[#353A39]">MRP Discount</span>
                                <span className="text-[#2939E2] font-medium">-₹288</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-[#353A39]">Delivery Charges</span>
                                <span className="text-[#2939E2] font-medium tracking-wide">FREE</span>
                            </div>
                        </div>

                        {/* Total Summary Row */}
                        <div className="flex justify-between items-center font-bold text-[#111111] my-5 text-[17px]">
                            <span className="font-semibold text-[15px]">Order Total:</span>
                            <span className="text-md font-bold">₹1,980</span>
                        </div>

                        {/* Action Bottom Submit CTA Button */}
                        <button
                            type="button"
                            onClick={handleProceedToPayment}
                            className="w-full bg-[#052316] text-white py-3.5 rounded-md font-bold text-[14px] tracking-wide hover:bg-[#03170e] transition-colors shadow-sm"
                        >
                            Continue to payment
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}