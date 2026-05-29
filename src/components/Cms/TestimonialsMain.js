"use client";
import React from 'react';

// Static initial dataset (Ready to map backend API dynamic fields later)
const dynamicReviews = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 6,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "LARA",
    role: "Artist",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  }
];

export default function TestimonialsMain() {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen antialiased">
      
      {/* ==========================================
          === HERO BANNER SECTION (image_062aa1.png) ===
          ========================================== */}
      <div 
        className="w-full h-[240px] md:h-[320px] lg:h-[520px] relative bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('images/testimonials-bg.png')` 
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl lg:text-[44px] font-serif font-bold tracking-wide text-center px-4">
          Testimonial
        </h1>
      </div>

      {/* ==========================================
          === MAIN RESPONSIVE BOXES GRID SECTION ===
          ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Responsive Grid Structure (1 Col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {dynamicReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[2rem] p-6 shadow-[0_40px_60px_rgba(0,0,0,0.02)] border border-gray-100/60 flex flex-col justify-between relative"
            >
              <div>
                {/* Big Custom Double Quotes Block Style */}
                <div className="relative h-10 -mt-6">
                  {/* Backdrop Offset Layer */}
                  <h1 className="absolute top-0.5 left-0.5 text-[8rem] font-serif leading-none select-none text-[#0e2a22]/10 blur-[0.5px]">
                    “
                  </h1>
                  {/* Main Accent Fill Layer */}
                  <h1 className="relative text-[8rem] font-serif text-[#0e2a22] leading-none select-none opacity-95 tracking-tighter">
                    “
                  </h1>
                </div>

                {/* Review Copy Context */}
                <p className="text-[#353A39] text-sm leading-relaxed mt-6 mb-4 font-normal">
                  {review.text}
                </p>
              </div>

              {/* User Bio Information Footer Row */}
              <div className="border-t border-gray-100/80 pt-4 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Profile Avatar Frame */}
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover grayscale-[10%]"
                  />
                  <div>
                    <h4 className="text-[#0e2a22] font-extrabold text-xs md:text-sm tracking-wide">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-[11px] mt-0.5 font-medium">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Stars Counter Micro Module */}
                <div className="flex items-center gap-1">
                  <span className="text-[#0e2a22] font-bold text-xs md:text-sm">
                    {review.rating}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-[#f4a834] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}