"use client"
import React, { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function CustomerReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Mock Review Data matching the screenshot exactly
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      date: '21 June 2025',
      rating: 4.5,
      likes: 2,
      dislikes: 0,
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 2,
      name: 'John Doe',
      date: '21 June 2025',
      rating: 4.5,
      likes: 2,
      dislikes: 0,
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 3,
      name: 'John Doe',
      date: '21 June 2025',
      rating: 4.5,
      likes: 2,
      dislikes: 0,
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-white font-sans text-[#1A1A1A]">
      {/* Heading Section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-[28px] font-serif font-bold text-[#0F2E22] tracking-wide">
          Customer Reviews
        </h2>
        {/* Decorative Custom Underline */}
        <div className="flex items-center gap-1.5 mt-2">
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
      </div>

      {/* Main Content Grid: Left Content (Reviews list) | Right Content (Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* LEFT COLUMN: REVIEWS LIST (Takes 7/12 grid space) */}
        <div className="lg:col-span-7 space-y-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`pb-6 ${index !== reviews.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              {/* Reviewer Meta Row */}
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <h4 className="font-bold text-base text-[#0F2E22]">{review.name}</h4>
                  {/* Rating Badge */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <Star className="w-4 h-4 fill-[#F2994A] stroke-[#F2994A]" />
                    <span className="font-bold text-sm text-[#1A1A1A]">{review.rating}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-4">
                {review.comment}
              </p>

              {/* Like/Dislike Feedback Buttons */}
              <div className="flex items-center gap-4 text-sm text-gray-700">
                <button className="flex items-center gap-1.5 hover:text-[#0F2E22] transition-colors">
                  <ThumbsUp className="w-4 h-4 stroke-[1.5]" />
                  <span>{review.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-red-600 transition-colors">
                  <ThumbsDown className="w-4 h-4 stroke-[1.5]" />
                  <span>{review.dislikes}</span>
                </button>
              </div>
            </div>
          ))}

          {/* View All Reviews Trigger Link */}
          <div className="pt-2">
            <a 
              href="#all-reviews" 
              className="text-sm font-bold text-[#0F2E22] underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              View all 1902 reviews
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: RATING & REVIEW FORM (Takes 5/12 grid space) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            
            {/* Interactive Rating Stars Area */}
            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                Add your ratings
              </label>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <button
                      type="button"
                      key={i}
                      className="transition-transform duration-75 active:scale-95"
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <Star
                        className={`w-5 h-5 transition-colors ${
                          ratingValue <= (hover || rating)
                            ? 'fill-[#F2994A] stroke-[#F2994A]'
                            : 'stroke-gray-300 fill-transparent'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name Input Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#1A1A1A] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 outline-none transition-all placeholder:text-gray-400 focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22]"
                required
              />
            </div>

            {/* Email Input Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#1A1A1A] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 outline-none transition-all placeholder:text-gray-400 focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22]"
                required
              />
            </div>

            {/* Review Textarea Field */}
            <div>
              <label htmlFor="review" className="block text-sm font-bold text-[#1A1A1A] mb-2">
                Write your review
              </label>
              <textarea
                id="review"
                rows={4}
                placeholder="Enter write your review"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 outline-none transition-all resize-none placeholder:text-gray-400 focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22]"
                required
              ></textarea>
            </div>

            {/* Form Action/Submit Button Container */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 bg-[#0F2E22] text-white font-semibold text-sm rounded-lg hover:bg-[#164332] active:scale-[0.99] transition-all tracking-wide"
              >
                Submit
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}