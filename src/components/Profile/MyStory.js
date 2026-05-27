// "use client";

// import Image from "next/image";
// import React from "react";
// import { FaRegCalendarAlt, FaPlay } from "react-icons/fa";
// import { FiGift } from "react-icons/fi";

// export default function MyStory() {
//   // Dummy Data स्टोरी कार्ड्स के लिए
//   const stories = [
//     {
//       id: 1,
//       title: "The Anniversary Gift 2025",
//       recipient: "For Him",
//       tag: "Premium Gift Box",
//       status: "Delivered",
//       date: "16/05/2025",
//       image: "/images/story3.png", // Replace with your bouquet/gift image
//     },
//     {
//       id: 2,
//       title: "The Anniversary Gift 2025",
//       recipient: "For Him",
//       tag: "Premium Gift Box",
//       status: "Delivered",
//       date: "16/05/2025",
//       image: "/images/story3.png",
//     },
//     {
//       id: 3,
//       title: "The Anniversary Gift 2025",
//       recipient: "For Him",
//       tag: "Premium Gift Box",
//       status: "Delivered",
//       date: "16/05/2025",
//       image: "/images/story3.png",
//     },
//   ];

//   return (
//     <div className="w-full border border-[#DFDFDF] shadow-sm rounded-lg bg-white p-6 md:p-8">
//       {/* Heading */}
//       <h2 className="text-xl font-bold text-gray-950 mb-6">My Story</h2>

//       {/* 1. Upcoming Anniversary Top Banner */}
//       <div className="w-full rounded-xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[180px] mb-8 bg-[#0B2E24]">
//         {/* 1. Main Background Image */}
//         <img
//           src="/images/bg.png"
//           alt="Background Pattern"
//           className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-overlay opacity-40"
//         />

//         {/* Right Side Images Container */}
//         <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block pointer-events-none z-0">
//           {/* 2. Story-1 Image (Gift Box - Center Right) */}
//           <img
//             src="/images/story1.png"
//             alt="Gift Box"
//             className="absolute right-10 bottom-2 h-[90%] object-contain z-10"
//           />

//           {/* 3. Story-2 Image (Leaves/Gold Element - Bottom Right corner) */}
//           <img
//             src="/images/story2.png"
//             alt="Decorative Element"
//             className="absolute right-2 bottom-3 h-[60%] object-contain z-20"
//           />
//         </div>

//         {/* Banner Content */}
//         <div className="relative z-10 space-y-2 max-w-xl">
//           <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-[#0B2E24]">
//             <FaRegCalendarAlt className="text-base" />
//           </div>
//           <h3 className="text-lg font-medium text-[#FFFFFF] tracking-wide">Upcoming Anniversary</h3>
//           <p className="text-sm text-[#FFFFFF] flex flex-col gap-1">
//             <span>Your Anniversary is coming up in</span>
//             <span className="text-[#966B34]">
//               15 days (25 May 2026)
//             </span>
//           </p>
//         </div>

//         {/* Add New Story Button inside Banner */}
//         <div className="relative z-10 mt-6">
//           <button className="bg-[#FFFFFF] text-[#0B2E24] transition-all text-xs font-bold px-4 py-2 rounded-md shadow-sm">
//             Add New Story
//           </button>
//         </div>
//       </div>
//       {/* 2. Stories Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {stories.map((story) => (
//           <div key={story.id} className="flex flex-col">
//             {/* Image Thumbnail Container with Play Button Overlay */}
//             <div className="relative h-[320px] w-full rounded-xl overflow-hidden bg-gray-100 group cursor-pointer">

//               <Image
//                 src={story.image}
//                 alt={story.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//               />

//               {/* Semi-transparent Video Play Overlay */}
//               <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
//                 <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white text-xs pl-0.5">
//                   <FaPlay />
//                 </div>
//               </div>

//             </div>

//             {/* Card Info */}
//             <div className="mt-3 space-y-1">
//               <h4 className="text-[14px] font-bold text-[#020907] leading-tight">
//                 {story.title}
//               </h4>
//               <p className="text-[12px] text-[#353A39]">{story.recipient}</p>

//               <div className="flex items-center gap-1.5 text-[11px] text-[#020907] pt-0.5">
//                 <FiGift className="text-xs" />
//                 <span>{story.tag}</span>
//               </div>

//               {/* Footer row inside Card (Status & Date) */}
//               <div className="flex items-center justify-between pt-2">
//                 <span className="bg-[#C0FBD0] text-[#076B22] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
//                   {story.status}
//                 </span>
//                 <span className="text-[11px] text-[#353A39] font-medium">
//                   {story.date}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 3. Bottom Action Button */}
//       <div className="border-t border-gray-100 pt-2">
//         <button className="bg-[#0B2E24] hover:bg-opacity-90 transition-all text-white text-sm font-semibold px-6 py-2.5 rounded-md">
//           Add New Story
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaRegCalendarAlt, FaPlay } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import { LuDownload } from "react-icons/lu";

export default function MyStory() {
  // View Toggle State: 'list' ya 'detail'
  const [view, setView] = useState("list");
  // Selected Story Data
  const [selectedStory, setSelectedStory] = useState(null);

  // Dummy Data स्टोरी कार्ड्स के लिए
  const stories = [
    {
      id: 1,
      title: "The Anniversary Gift 2025",
      recipient: "For Him",
      tag: "Premium Gift Box",
      status: "Delivered",
      date: "16-May-2025",
      time: "10:30 PM",
      image: "/images/video1.png",
      qrCode: "/images/qrcode.png", // अपनी QR इमेज का पाथ दें
    },
    {
      id: 2,
      title: "The Anniversary Gift 2025",
      recipient: "For Him",
      tag: "Premium Gift Box",
      status: "Delivered",
      date: "16-May-2025",
      time: "10:30 PM",
      image: "/images/video2.png",
      qrCode: "/images/qrcode.png",
    },
    {
      id: 3,
      title: "The Anniversary Gift 2025",
      recipient: "For Him",
      tag: "Premium Gift Box",
      status: "Delivered",
      date: "16-May-2025",
      time: "10:30 PM",
      image: "/images/video4.png",
      qrCode: "/images/qrcode.png",
    },
  ];

  // Card click पर डिटेल व्यू ओपन करने के लिए
  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setView("detail");
  };

  return (
    <div className="w-full border border-[#DFDFDF] shadow-sm rounded-lg bg-white p-6 md:p-8">
      
      {/* ========================================================= */}
      {/* 1. LIST VIEW (ओरिजनल स्टोरीज ग्रिड और बैनर) */}
      {/* ========================================================= */}
      {view === "list" && (
        <>
          {/* Heading */}
          <h2 className="text-xl font-bold text-gray-950 mb-6">My Story</h2>

          {/* Upcoming Anniversary Top Banner */}
          <div className="w-full rounded-xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[180px] mb-8 bg-[#0B2E24]">
            {/* Main Background Image */}
            <img
              src="/images/bg.png"
              alt="Background Pattern"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-overlay opacity-40"
            />

            {/* Right Side Images Container */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block pointer-events-none z-0">
              <img
                src="/images/story1.png"
                alt="Gift Box"
                className="absolute right-10 bottom-2 h-[90%] object-contain z-10"
              />
              <img
                src="/images/story2.png"
                alt="Decorative Element"
                className="absolute right-2 bottom-3 h-[60%] object-contain z-20"
              />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 space-y-2 max-w-xl">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-[#0B2E24]">
                <FaRegCalendarAlt className="text-base" />
              </div>
              <h3 className="text-lg font-medium text-[#FFFFFF] tracking-wide">Upcoming Anniversary</h3>
              <p className="text-sm text-[#FFFFFF] flex flex-col gap-1">
                <span>Your Anniversary is coming up in</span>
                <span className="text-[#966B34] font-semibold">
                  15 days (25 May 2026)
                </span>
              </p>
            </div>

            {/* Add New Story Button inside Banner */}
            <div className="relative z-10 mt-6">
              <button 
                onClick={() => handleStoryClick(stories[0])} // टेंपरेरी पहली स्टोरी डेटा पास कर रहे हैं
                className="bg-[#FFFFFF] text-[#0B2E24] transition-all text-xs font-bold px-4 py-2 rounded-md shadow-sm hover:bg-gray-50"
              >
                Add New Story
              </button>
            </div>
          </div>

          {/* Stories Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="flex flex-col group cursor-pointer"
                onClick={() => handleStoryClick(story)}
              >
                {/* Image Thumbnail Container */}
                <div className="relative h-[240px] w-full rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Video Play Overlay */}
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white text-xs pl-0.5">
                      <FaPlay />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="mt-3 space-y-1">
                  <h4 className="text-[14px] font-bold text-[#020907] leading-tight">
                    {story.title}
                  </h4>
                  <p className="text-[12px] text-[#353A39]">{story.recipient}</p>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#020907] pt-0.5">
                    <FiGift className="text-xs" />
                    <span>{story.tag}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="bg-[#C0FBD0] text-[#076B22] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {story.status}
                    </span>
                    <span className="text-[11px] text-[#353A39] font-medium">
                      {story.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Button */}
          <div className="border-t border-gray-100 pt-4">
            <button 
              onClick={() => handleStoryClick(stories[0])}
              className="bg-[#0B2E24] hover:bg-opacity-90 transition-all text-white text-sm font-semibold px-6 py-2.5 rounded-md"
            >
              Add New Story
            </button>
          </div>
        </>
      )}

      {/* ========================================================= */}
      {/* 2. DETAIL VIEW (image_339785.png के जैसा नया डिज़ाइन) */}
      {/* ========================================================= */}
      {view === "detail" && selectedStory && (
        <div className="w-full animate-fadeIn">
          {/* Back Button & Title */}
          <button 
            onClick={() => setView("list")}
            className="flex items-center gap-2 text-xl font-bold text-gray-950 mb-6 hover:text-gray-700 transition-all"
          >
            <IoMdArrowBack className="text-2xl" />
            <span>My Story</span>
          </button>

          {/* Large Video / Image Container */}
          <div className="relative w-full h-[220px] md:h-[300px] rounded-xl overflow-hidden bg-gray-100 mb-6">
            <Image
              src={selectedStory.image}
              alt={selectedStory.title}
              fill
              className="object-cover"
            />
            {/* Center Video Play Button */}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white text-sm pl-0.5 shadow-md">
                <FaPlay />
              </div>
            </div>
          </div>

          {/* Bottom Grid Split: Info Details & QR Code */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 pt-2">
            
            {/* Left Side Info */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#020907]">
                {selectedStory.title}
              </h3>
              <p className="text-[13px] text-gray-500">{selectedStory.recipient}</p>
              
              {/* Date & Time Row */}
              <div className="flex items-center gap-1.5 text-[12px] text-gray-600 font-medium pt-1">
                <FaRegCalendarAlt className="text-gray-400" />
                <span>{selectedStory.date}</span>
                <span className="text-gray-300">•</span>
                <span>{selectedStory.time}</span>
              </div>

              {/* Tag Row */}
              <div className="flex items-center gap-1.5 text-[12px] text-gray-600 font-medium">
                <FiGift className="text-gray-400" />
                <span>{selectedStory.tag}</span>
              </div>

              {/* Status Badge */}
              <div className="pt-2">
                <span className="bg-[#C0FBD0] text-[#076B22] text-[10px] font-bold px-3 py-1 rounded-full">
                  {selectedStory.status}
                </span>
              </div>
            </div>

            {/* Right Side QR Code Section */}
            <div className="flex flex-col items-start sm:items-center gap-3 min-w-[150px] w-full sm:w-auto mr-70">
              <span className="text-sm font-bold text-[#020907] self-start sm:self-auto">
                QR Code
              </span>
              
              {/* QR Image Box */}
              <div className="relative w-36 h-36 border border-gray-100 rounded-lg p-1 bg-[#FDFBF7] shadow-sm">
                <div className="w-full h-full relative">
                  <Image
                    src={"/images/QR.png"}
                    alt="Story QR Code"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Download QR Button */}
              <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-all">
                <LuDownload className="text-sm" />
                <span>Download QR</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}