import React from 'react';
 
export default function ShippingPolicy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12 bg-white mt-16">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#0B2E24] text-center font-serif mb-8 md:mb-10 tracking-wide">
        Shipping Policy
      </h2>
 
      {/* Content Container */}
      <div className="max-w-3xl mx-auto space-y-6 text-sm md:text-base text-gray-600 leading-relaxed font-sans text-justify">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
 
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
 