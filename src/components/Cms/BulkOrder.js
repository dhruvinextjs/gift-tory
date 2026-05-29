"use client"
import React, { useState } from 'react';

export default function BulkOrder() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    quantityRequired: '',
    requiredBy: '',
    preference: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bulk Order Submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen antialiased text-[#1A1A1A]">
      
      {/* ==========================================
          === HERO BANNER SECTION (image_fb3d9d.png) ===
          ========================================== */}
      <div 
        className="w-full h-[240px] md:h-[320px] lg:h-[500px] relative bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 46, 34, 0.55), rgba(15, 46, 34, 0.55)), url('images/bulk-order-bg.png')` 
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl lg:text-[44px] font-serif font-bold tracking-wide text-center px-4">
          Bulk Orders Inquiry
        </h1>
      </div>

      {/* ==========================================
          === FORM CARD CONTAINER (Exact Margins) ===
          ========================================== */}
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-0 mt-20 relative z-10 pb-16">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-[0_60px_70px_rgba(0,0,0,0.04)]">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-900 tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-900 tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Row 2: Company Name & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-900 tracking-wide">Company Name</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] transition-colors"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-900 tracking-wide">Phone number</label>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Row 3: Quantity Required & Required By */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-900 tracking-wide">Quantity Required</label>
                <div className="relative">
                  <select 
                    name="quantityRequired"
                    value={formData.quantityRequired}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select</option>
                    <option value="10-50">10 - 50 units</option>
                    <option value="50-200">50 - 200 units</option>
                    <option value="200-500">200 - 500 units</option>
                    <option value="500+">More than 500 units</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-900 tracking-wide">Required By</label>
                <input 
                  type="date" 
                  name="requiredBy"
                  value={formData.requiredBy}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] transition-colors cursor-pointer"
                  required
                />
              </div>
            </div>

            {/* Row 4: Preference Textarea */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-gray-900 tracking-wide">Tell us about your preference</label>
              <textarea 
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                rows={4}
                placeholder="Occasion, recipients, wedding, birthday" 
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] transition-colors resize-none"
              />
            </div>

            {/* Submit Action Button Block */}
            <div className="flex flex-col items-center pt-4 space-y-3">
              <button 
                type="submit"
                className="w-full sm:w-[200px] bg-[#0F2E22] hover:bg-[#143d2d] text-white font-bold text-sm py-3.5 px-6 rounded-lg transition-colors shadow-sm tracking-wide"
              >
                Submit Inquiry
              </button>
              <p className="text-[11px] text-gray-400 text-center font-medium tracking-wide">
                A dedicated account director will respond within 24 hours.
              </p>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}