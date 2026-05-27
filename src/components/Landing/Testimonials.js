"use client";
import React from "react";

const reviews = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#00000008] py-16 px-6 md:px-16">
      <section className="w-full  relative overflow-hidden max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="mb-12">
            <h2 className="text-[#0e2a22] text-3xl md:text-4xl font-serif font-bold tracking-wide lowercase first-letter:uppercase">
              what our client say?
            </h2>
            {/* Custom Decorative Line + Dots underneath */}
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-12 bg-[#0B2E24]"></div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B2E24]"></span>{" "}
                {/* Big */}
                <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>{" "}
                {/* Medium */}
                <span className="w-0.5 h-0.5 rounded-full bg-[#0B2E24]"></span>{" "}
                {/* Small */}
              </div>
            </div>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 flex flex-col justify-between relative"
              >
                <div>
                  {/* Big Double Quotes Design */}
                  <div className="relative h-14 -mt-7">
                    {/* Shadow Quote */}
                    <h1 className="absolute top-1 left-1 text-[10rem] font-serif leading-none select-none text-[#0e2a22]/10 blur-[1px]">
                      “
                    </h1>

                    {/* Main Quote */}
                    <h1 className="relative text-[10rem] font-serif text-[#0e2a22] leading-none select-none opacity-95 tracking-tighter">
                      “
                    </h1>
                  </div>
                  {/* Review Paragraph */}
                  <p className="text-[#353A39] text-sm leading-relaxed mt-6 mb-2 font-normal">
                    {review.text}
                  </p>
                </div>

                {/* User Meta Row */}
                <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar Wrapper */}
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover grayscale-[20%]"
                    />
                    <div>
                      <h4 className="text-[#0e2a22] font-extrabold text-sm tracking-wide">
                        {review.name}
                      </h4>
                      <p className="text-gray-400 text-xs mt-0.5 font-medium">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating Info */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#0e2a22] font-bold text-sm">
                      {review.rating}
                    </span>
                    <svg
                      className="w-4 h-4 text-[#f4a834] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0e2a22]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          </div>

          {/* View All Button Action */}
          <div className="flex justify-center mt-10">
            <button className="bg-[#0e2a22] hover:bg-[#163d33] text-white font-medium text-sm px-8 py-3.5 rounded-xl tracking-wide transition-all shadow-md">
              View all
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
