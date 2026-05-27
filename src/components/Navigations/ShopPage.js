"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Store, ArrowUpRight } from 'lucide-react';

export default function ShopPage() {
  // Static dataset mapping matching the requested Figma layouts exactly
  const storeOutlets = [
    {
      id: 1,
      title: "Khan Market",
      location: "Ahmedabad",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      timings: "11:00 am - 9:00 pm IST",
      address: "Shop no.29 Lorem Ipsum is simply dummy text of the printing, Ahmedabad - 382415",
      primaryPhone: "+91 9943157685",
      shoppers: [
        { name: "Devika", phone: "+91 9943157685" },
        { name: "Roshni", phone: "+91 9943157685" }
      ],
      images: [
   "images/about-img.png",
        "images/about-img.png",
      ],
      reverseLayout: false
    },
    {
      id: 2,
      title: "Khan Market",
      location: "Ahmedabad",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
      timings: "11:00 am - 9:00 pm IST",
      address: "Shop no.29 Lorem Ipsum is simply dummy text of the printing, Ahmedabad - 382415",
      primaryPhone: "+91 9943157685",
      shoppers: [
        { name: "Devika", phone: "+91 9943157685" },
        { name: "Roshni", phone: "+91 9943157685" }
      ],
      images: [
        "images/about-img.png",
        "images/about-img.png",
      ],
      reverseLayout: true // Triggers alternative design direction sequence on big screens
    }
  ];

  // Independent carousel slider state configuration handles tracking matrix maps
  const [sliderIndexMap, setSliderIndexMap] = useState({ 1: 0, 2: 0 });

  const handleDotNavigation = (outletId, frameIndex) => {
    setSliderIndexMap(prev => ({ ...prev, [outletId]: frameIndex }));
  };

  return (
    <main className="w-full bg-white antialiased min-h-screen">
      
      {/* ========================================================
          === TOP BRAND SHOP BANNER SPLASH FRAME ===
          ======================================================== */}
      <div 
        className="w-full h-[260px] md:h-[540px] relative flex items-center justify-center bg-gray-900 bg-cover bg-center"
             style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('/images/shops-bg.png')` 
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif uppercase font-bold tracking-wide drop-shadow-md">
          Shop
        </h1>
      
      </div>

      {/* ========================================================
          === DYNAMIC OUTLET LOCATION CONTAINER GROUPS ===
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 space-y-24 md:space-y-32">
        {storeOutlets.map((outlet) => (
          <div 
            key={outlet.id}
            className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
          >
            
            {/* === RENDER INTERCEPT DETAILS SECTION BLOCK === */}
            <div 
              className={`w-full lg:col-span-5 flex flex-col justify-center space-y-6 ${
                outlet.reverseLayout ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              {/* Header Title Section info block */}
              <div className="flex items-start gap-4">
                <div className="bg-[#0b2f23]/5 text-[#0b2f23] p-3 rounded-xl mt-1 shrink-0">
                  <Store size={26} className="stroke-[1.75]" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-gray-900 tracking-wide">
                    {outlet.title}
                  </h2>
                  <p className="text-sm font-medium text-gray-500 tracking-wide mt-0.5">
                    {outlet.location}
                  </p>
                </div>
              </div>

              {/* Core Description Text Segment block */}
              <p className="text-sm text-gray-600 font-normal leading-relaxed text-justify pr-2">
                {outlet.description}
              </p>

              {/* Timings Segment Frame block */}
              <div className="space-y-1.5 pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0b2f23]">
                  Open 7 Days A Week
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  {/* <Clock size={16} className="text-[#0b2f23] shrink-0" /> */}
                  <span className="font-medium">{outlet.timings}</span>
                </div>
              </div>

              {/* Map Address Detail Layout Matrix block */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-2 pb-1 ">
                <div className="sm:col-span-7 flex items-start gap-2.5 border-r border-[#DFDFDF]">
                  <MapPin size={18} className="text-[#0b2f23] shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-gray-600 leading-normal">
                    {outlet.address}
                  </p>
                </div>
                <div className="sm:col-span-5 flex items-start gap-1 pt-3 sm:pt-0">
                  <Phone size={16} className="text-[#0b2f23] shrink-0 mt-0.5" />
                  <a href={`tel:${outlet.primaryPhone}`} className="text-xs font-semibold text-gray-700 hover:underline">
                    {outlet.primaryPhone}
                  </a>
                </div>
              </div>

              {/* Personal Shoppers Team Reference Cards block */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-12 gap-y-2 sm:gap-x-4">
                <div className="sm:col-span-8 space-y-2">
                <div className="sm:col-span-4">
                  <h5 className="text-xs font-bold tracking-wider text-gray-800 uppercase sm:pt-1">
                    Personal Shopper
                  </h5>
                </div>
                  {outlet.shoppers.map((shopper, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between sm:justify-start sm:gap-8 text-xs font-medium text-gray-600">
                      <span className="w-16 text-gray-900 font-semibold border-r border-[#DFDFDF]">{shopper.name}</span>
                      <div className="flex items-center gap-1.5">
                        <Phone size={12} className="text-[#0b2f23]/60" />
                        <a href={`tel:${shopper.phone}`} className="hover:text-[#0b2f23] hover:underline transition-colors">
                          {shopper.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call-to-action Action trigger block */}
              <div className="pt-3">
                <button className="inline-flex items-center gap-1 text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-0.5 group hover:text-[#0b2f23] hover:border-[#0b2f23] transition-all duration-200">
                  <span>See All</span>
                  <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* === RENDER INTERCEPT VISUAL CAROUSEL MODULE BLOCK === */}
            <div 
              className={`w-full lg:col-span-7 ${
                outlet.reverseLayout ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-gray-50 rounded-[2rem] overflow-hidden group shadow-md shadow-gray-100/50">
                {/* Embedded Active Media Sliding Node Frame */}
                <img 
                  src={outlet.images[sliderIndexMap[outlet.id] || 0]} 
                  alt={`${outlet.title} retail visual overview layout display`} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
      

                {/* Integrated Segment Carousel Dot Indicators Navigation anchors */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/10 backdrop-blur-[2px] px-3 py-1.5 rounded-full">
                  {outlet.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => handleDotNavigation(outlet.id, dotIdx)}
                      className={`h-[6px] rounded-full transition-all duration-300 ${
                        (sliderIndexMap[outlet.id] || 0) === dotIdx 
                          ? 'w-5 bg-white' 
                          : 'w-[6px] bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Switch viewport focus to image element frame view ${dotIdx + 1}`}
                    />
                  ))}
                  {/* Figma Visual Mock Balance Complement Fillers */}
                  <div className="w-[6px] h-[6px] bg-white/30 rounded-full" />
                  <div className="w-[6px] h-[6px] bg-white/30 rounded-full" />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </main>
  );
}