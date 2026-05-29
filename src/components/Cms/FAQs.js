"use client";

import React from "react";

export default function FAQs() {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* =======================================================
          HERO SECTION
      ======================================================= */}
      <section className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] overflow-hidden">
        
        {/* Background Image */}
        <img
          src="/images/faq-bg.png"
          alt="FAQ Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* FAQ Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-bold font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide">
            FAQ’s
          </h1>
        </div>
      </section>

      {/* =======================================================
          FAQ STATIC CONTENT
      ======================================================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="space-y-10 md:space-y-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              
              {/* Question */}
              <p className="text-[#111111] text-[17px] sm:text-[19px] md:text-[21px] font-bold leading-snug">
                {index + 1}.) {faq.question}
              </p>

              {/* Answer */}
              <p className="mt-3 text-[#353A39] text-sm sm:text-[15px] md:text-[16px] leading-[28px] max-w-5xl font-normal">
                {faq.answer}
              </p>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}