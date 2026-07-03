"use client";
 
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
 
export default function MyProfile() {
  // Edit Mode State
  const [isEditing, setIsEditing] = useState(false);
 
  // Profile Data State
  const [formData, setFormData] = useState({
    fullName: "Johhn Joe",
    email: "loremipsum@gmail.com",
    phone: "+91 9943581265",
  });
 
  // Input Change Handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  // Update/Save Handler
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log("Updated Data:", formData);
  };
 
  return (
    <div className="w-full border border-[#DFDFDF] shadow-sm rounded-lg bg-white p-4 md:p-6">
      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-950 mb-8">
        My Profile
      </h2>
 
      {/* Profile Content Layout */}
      <div className="flex flex-col md:flex-row items-start gap-12">
       
        {/* Left Side: Avatar and Action Button */}
        <div className="flex flex-col items-center min-w-[120px]">
          <div className="w-24 h-24 bg-[#F3F4F6] border border-gray-100 rounded-full flex items-center justify-center mb-3">
            <FaRegUser className="text-[40px] text-[#0B2E24]" />
          </div>
         
          <span className="text-sm font-semibold text-gray-900 mb-6">
            {formData.fullName}
          </span>
 
          {/* Conditional Button Placement based on design */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-[#0B2E24] hover:bg-opacity-90 transition-all text-white text-sm font-medium px-6 py-2.5 rounded-md"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-[#0B2E24] hover:bg-opacity-90 transition-all text-white text-sm font-medium px-6 py-2.5 rounded-md mt-26"
            >
              Update
            </button>
          )}
        </div>
 
        {/* Right Side: Info / Form Fields */}
        <div className="flex-1 w-full">
          {!isEditing ? (
           
            // VIEW MODE (Exact Image Design)
            <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm mt-2">
              <span className="font-semibold text-gray-900">Full Name</span>
              <span className="text-gray-600">{formData.fullName}</span>
 
              <span className="font-semibold text-gray-900">Email</span>
              <span className="text-gray-600">{formData.email}</span>
 
              <span className="font-semibold text-gray-900">Phone Number</span>
              <span className="text-gray-600">{formData.phone}</span>
            </div>
 
          ) : (
           
            // EDIT MODE (Clean Form Fields)
            <form onSubmit={handleUpdate} className="space-y-3 max-w-xl">
              {/* Full Name Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-1.5 text-sm rounded-md border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-gray-700 transition-all"
                />
              </div>
 
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-1.5 text-sm rounded-md border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-gray-700 transition-all"
                />
              </div>
 
              {/* Phone Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-900">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-1.5 text-sm rounded-md border border-[#DFDFDF] focus:outline-none focus:border-[#0B2E24] text-gray-700 transition-all"
                />
              </div>
            </form>
 
          )}
        </div>
 
      </div>
    </div>
  );
}