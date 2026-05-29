"use client";
import React, { useState } from 'react';

export default function Career() {
  // Job positions data structure
  const initialJobs = [
    {
      id: 1,
      title: "E-commerce Manager",
      location: "On-Site",
      type: "Full-time",
      description: "We are looking for an experienced E-commerce Manager to oversee and manage our online marketplace, product catalogs, promotional campaigns, and digital storefront optimization strategy."
    },
    {
      id: 2,
      title: "Order & Delivery Manager",
      location: "On-Site",
      type: "Full-time",
      description: "Manage end-to-end logistics, dispatch timelines, same-day gift deliveries coordination, and tracking system efficiency to guarantee high customer satisfaction levels."
    },
    {
      id: 3,
      title: "Customer Experience Executive",
      location: "On-Site",
      type: "Full-time",
      description: "Handle live client queries, corporate gift orders support, feedback coordination, and resolve client order tickets professionally via chat, email, and call channels."
    },
    {
      id: 4,
      title: "Product & Catalog Manager",
      location: "On-Site",
      type: "Full-time",
      description: "Curate gift hampers collections, manage vendor updates, standardize rich digital specifications, and map inventory categories on our core layout storefront."
    },
    {
      id: 5,
      title: "Marketing & Campaign Specialist",
      location: "On-Site",
      type: "Full-time",
      description: "Drive multi-channel holiday branding operations, manage target metrics for personalized gift lines, and execute conversions optimization frameworks."
    }
  ];

  // State to track which accordion section is expanded
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen antialiased text-[#1A1A1A]">
      
      {/* ==========================================
          === HERO BANNER SECTION (image_05bceb.png) ===
          ========================================== */}
      <div 
        className="w-full h-[240px] md:h-[320px] lg:h-[520px] relative bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('images/career-bg.png')` 
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl lg:text-[44px] font-serif font-bold tracking-wide text-center px-4">
          Career's
        </h1>
      </div>

      {/* ==========================================
          === ACCORDION JOBS LIST CONTAINER =======
          ========================================== */}
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10 pb-20">
        <div className="space-y-4">
          
          {initialJobs.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div 
                key={job.id} 
                className="bg-white rounded-xl border border-gray-100 shadow-[0_40px_30px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-200"
              >
                {/* Header Block Clickable Area */}
                <button
                  onClick={() => toggleAccordion(job.id)}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 text-left focus:outline-none gap-4"
                >
                  {/* Job Title */}
                  <span className="text-sm md:text-base font-bold text-[#0F2E22] tracking-wide">
                    {job.title}
                  </span>

                  {/* Right Meta details wrapper */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 ml-0 sm:ml-auto w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-50">
                    
                    {/* Tags Container */}
                    <div className="flex items-center gap-4 text-xs font-medium text-[#353A39]">
                      
                      {/* Location Badge Indicator */}
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#353A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>

                      {/* Time type Badge Indicator */}
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#353A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>

                    {/* Action Dynamic Icon Code */}
                    <div className="text-[#0B2E24] flex items-center justify-center w-6 h-6">
                      {isExpanded ? (
                        <svg className="w-4 h-4 text-[#0F2E22] font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </div>

                  </div>
                </button>

                {/* Smooth Expandable Description Block */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[500px] border-t border-gray-50' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="p-5 md:p-6 bg-[#FAFAFA] text-xs md:text-sm text-gray-600 leading-relaxed space-y-4">
                    <p>{job.description}</p>
                    <button className="bg-[#0F2E22] hover:bg-[#143d2d] text-white text-xs font-bold py-2 px-4 rounded transition-colors shadow-sm">
                      Apply Now
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
}