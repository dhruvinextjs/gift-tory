 
"use client";
 
import Image from "next/image";
import React from "react";
import { CiHeart, CiImageOn } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { LuBookMinus } from "react-icons/lu";
 
export default function AboutUsPage() {
    return (
        <div className="w-full min-h-screen bg-white font-sans pb-24">
 
            {/* --- HEADER BANNER SECTION --- */}
            <div className="w-full relative h-[300px] md:h-[520px] overflow-hidden">
                <Image
                    src="/images/about-banner.png"
                    alt="About Us Header Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-medium">
                        About us
                    </h1>
                </div>
            </div>
 
            {/* --- CONTENT SECTION (DARK GREEN CARD) --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-16">
                <div className="w-full bg-[#0B2E24] text-white rounded-[24px] p-8 md:p-12 lg:p-16 shadow-md relative overflow-hidden">
 
                    <div className="absolute inset-0 pointer-events-none">
                        <Image
                            src="/images/about1.jpg"
                            alt="Background design"
                            fill
                            className="object-cover opacity-[0.09]"
                            sizes="(max-w-7xl) 100vw, 1280px"
                        />
                    </div>
 
                    <p className="text-lg md:text-2xl lg:text-3xl font-serif leading-relaxed md:leading-loose tracking-wide max-w-5xl relative z-10">
                        <span className="text-[#966B34] font-semibold font-sans">Gifttory</span> was created in 2026 with the thought of
                        crafting <span className="text-[#966B34] font-medium italic">premium luxury gifts</span> for every occasion, big or
                        small to express appreciation and make someone feel valued.
                    </p>
 
                </div>
            </div>
 
            {/* --- BRAND STORY SECTION --- */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 mt-14 md:mt-22">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
 
                    {/* Left Side: Polaroid Image */}
                    <div className="w-full md:w-[30%] flex justify-between md:justify-between">
                        <div className="bg-white p-3 pb-5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm border border-gray-100 max-w-[240px] w-full transform -rotate-10 transition-transform hover:rotate-0 duration-300">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-gray-100">
                                <Image
                                    src="/images/about-person.png"
                                    alt="Emily - Brand Story"
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-md) 100vw, 240px"
                                />
                            </div>
                            {/* Polaroid Label */}
                            <div className="mt-4 text-center">
                                <h3 className="text-[#966B34] font-bold tracking-widest text-base font-sans">
                                    EMILY
                                </h3>
                            </div>
                        </div>
                    </div>
 
                    {/* Right Side: Brand Story Content */}
                    <div className="w-full md:w-[70%] space-y-5 max-w-xl">
                        <div className="space-y-2">
                            <h2 className="text-xl md:text-2xl font-serif text-[#0B2E24] font-bold tracking-wide">
                                Brand Story
                            </h2>
                            <div className="flex items-center gap-1.5 pt-1">
                                <div className="h-[2px] w-14 bg-[#0B2E24]"></div>
                                <div className="flex gap-1">
                                    <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                    <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                    <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                </div>
                            </div>
                        </div>
 
                        <p className="text-lg md:text-xl font-serif text-black font-bold leading-relaxed tracking-wide">
                            Lorem Ipsum is simply dummy text of the{" "}
                            <span className="text-[#966B34]">printing and typesetting</span> industry.
                            Lorem Ipsum has been the industry's standard dummy text{" "}
                            <span className="text-[#966B34] font-normal">ever since the</span> 1500s, when an unknown.
                        </p>
 
                        <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed tracking-wide font-normal">
                            It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                            English. Many desktop publishing packages and web page editors now.
                        </p>
                    </div>
 
                </div>
            </div>
 
 
            {/* ================= OUR STUDIO SECTION (EXACT IMAGE MATCH - FULL SCREEN BG) ================= */}
            <div className="w-full bg-[#FBFBFA] mt-12 md:mt-22 py-6 md:py-14">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 
                        {/* Left Column: Text & Bottom Left Image */}
                        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:space-y-6">
                            <div className="space-y-4">
                                {/* Section Title */}
                                <div className="space-y-2">
                                    <h2 className="text-2xl md:text-3xl font-serif text-[#0B2E24] font-bold tracking-wide">
                                        Our Studio
                                    </h2>
                                    <div className="flex items-center gap-1.5 pt-1">
                                        <div className="h-[2px] w-14 bg-[#0B2E24]"></div>
                                        <div className="flex gap-1">
                                            <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                            <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                            <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                        </div>
                                    </div>
                                </div>
 
                                {/* Heading */}
                                <h3 className="text-xl md:text-2xl font-serif text-[#966B34] font-medium">
                                    The Heart of Creativity
                                </h3>
 
                                {/* Description */}
                                <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-md">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a
                                </p>
                            </div>
 
                            {/* Bottom Left Image */}
                            <div className="relative w-full h-[260px] md:h-[300px] rounded-[24px] overflow-hidden shadow-sm">
                                <Image
                                    src="/images/about-img.png"
                                    alt="Studio Showcase 1"
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-lg) 100vw, 500px"
                                />
                            </div>
                        </div>
 
                        {/* Right Column: Grid of Two Right Images */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            {/* Top Right Big Image */}
                            <div className="relative w-full h-[320px] md:h-[360px] rounded-[24px] overflow-hidden shadow-sm">
                                <Image
                                    src="/images/about-img.png"
                                    alt="Gift Shop Main"
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-xl) 100vw, 700px"
                                />
                            </div>
 
                            {/* Bottom Right Wide Image */}
                            <div className="relative w-full h-[160px] md:h-[180px] rounded-[24px] overflow-hidden shadow-sm">
                                <Image
                                    src="/images/about-img.png"
                                    alt="Studio Shelf Items"
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-xl) 100vw, 700px"
                                />
                            </div>
                        </div>
 
                    </div>
                </div>
            </div>
 
            {/* ================= NEW: THE GIFTTORY JOURNEY TIMELINE ================= */}
            <div className="w-full mt-8 md:mt-14">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
 
                    {/* Header */}
                    <div className="space-y-2 mb-16 md:mb-24">
                        <h2 className="text-2xl md:text-3xl font-serif text-[#0B2E24] font-bold tracking-wide">
                            The Gifttory Journey
                        </h2>
                        <div className="flex items-center gap-1.5 pt-1">
                            <div className="h-[2px] w-14 bg-[#0B2E24]"></div>
                            <div className="flex gap-1">
                                <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                                <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>
                            </div>
                        </div>
                    </div>
 
                    {/* Timeline Grid */}
                    <div className="relative">
 
                        {/* Horizontal Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-7 left-8 right-8 h-[1px] bg-gray-200 z-0" />
 
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
 
                            {/* Step 01 */}
                            <div className="space-y-4 flex flex-col items-start">
                                {/* Circular Icon Container */}
                                <div className="w-14 h-14 rounded-full bg-[#0B2E24] flex items-center justify-center text-white shadow-sm">
                                    {/* Gift Box Icon */}
                                    <GoGift className="text-4xl" />
                                </div>
                                <div className="space-y-2 pt-2">
                                    <span className="text-base font-sans font-medium text-[#966B34] block">01</span>
                                    <h4 className="text-base font-bold text-[#000000] font-sans">Why We Started</h4>
                                    <p className="text-xs md:text-sm text-[#353A39] font-sans leading-relaxed max-w-[240px]">
                                        We noticed gifts were losing the most important part - emotion. We wanted to change that. That's how Gifttory began.
                                    </p>
                                </div>
                            </div>
 
                            {/* Step 02 */}
                            <div className="space-y-4 flex flex-col items-start">
                                <div className="w-14 h-14 rounded-full bg-[#0B2E24] flex items-center justify-center text-white shadow-sm">
                                    {/* Heart Icon */}
                                    <CiHeart className="text-4xl"/>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <span className="text-base font-sans font-medium text-[#966B34] block">02</span>
                                    <h4 className="text-base font-bold text-[#000000] font-sans">What Gifting Means</h4>
                                    <p className="text-xs md:text-sm text-[#353A39] font-sans leading-relaxed max-w-[240px]">
                                        A gift is not just something you give. It's how you express love, gratitude, and connection. It's feeling
                                    </p>
                                </div>
                            </div>
 
                            {/* Step 03 */}
                            <div className="space-y-4 flex flex-col items-start">
                                <div className="w-14 h-14 rounded-full bg-[#0B2E24] flex items-center justify-center text-white shadow-sm">
                                    {/* Landscape/Image Icon */}
                                    <CiImageOn className="text-4xl" />
                                </div>
                                <div className="space-y-2 pt-2">
                                    <span className="text-base font-sans font-medium text-[#966B34] block">03</span>
                                    <h4 className="text-base font-bold text-[#000000] font-sans">Why memories Matter</h4>
                                    <p className="text-xs md:text-sm text-[#353A39] font-sans leading-relaxed max-w-[240px]">
                                        Memories fade with time, but stories keep them alive. We believe in presenting the moments that matter most
                                    </p>
                                </div>
                            </div>
 
                            {/* Step 04 */}
                            <div className="space-y-4 flex flex-col items-start">
                                <div className="w-14 h-14 rounded-full bg-[#000000] flex items-center justify-center text-white shadow-sm">
                                    {/* Book/Story Icon */}
                                    <LuBookMinus className="text-4xl" />
                                </div>
                                <div className="space-y-2 pt-2">
                                    <span className="text-base font-sans font-medium text-[#966B34] block">04</span>
                                    <h4 className="text-base font-bold text-[#0B2E24] font-sans">The Power of Stories</h4>
                                    <p className="text-xs md:text-sm text-[#353A39] font-sans leading-relaxed max-w-[240px]">
                                        A Story can make someone smile, laugh amd feel loved all over again. Stories create lasting impact.
                                    </p>
                                </div>
                            </div>
 
                        </div>
                    </div>
 
                </div>
            </div>
 
        </div>
    );
}
 