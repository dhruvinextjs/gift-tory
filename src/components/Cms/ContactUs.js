"use client";
 
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
 
export default function ContactUsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
 
  // Dummy Images Slider के लिए
  const sliderImages = [
    "/images/about-img.png", // अपनी इमेज का सही पाथ दें
    "/images/about-img.png",
    "/images/about-img.png",
    "/images/about-img.png",
  ];
 
  return (
    <div className="w-full bg-white min-h-screen py-12 md:py-16 px-4 md:px-8 lg:px-12 mt-12">
      <div className="max-w-7xl mx-auto">
       
        {/* 1. Page Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2E24] text-center font-serif mb-12 tracking-wide">
          Contact Us
        </h2>
 
        {/* 2. Top Section: Image Slider & Studio Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12  px-4 md:px-8 lg:px-12">
         
          {/* Left Side: Image Slider Component */}
          <div className="w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
              <Image
                src={sliderImages[activeSlide]}
                alt="Gifttory Studio Interior"
                fill
                priority
                className="object-cover transition-all duration-500"
              />
              {/* Overlay Text (Optional - as seen in image) */}
              <div className="absolute top-6 right-8 text-white/40 text-xl font-light tracking-widest font-sans pointer-events-none">
                Gift Shop
              </div>
            </div>
            {/* Slider Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeSlide === idx ? 'bg-[#0B2E24] w-4' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
 
          {/* Right Side: Studio Contact Details */}
          <div className="w-full space-y-6 text-[#353A39]">
            <div>
              <h3 className="text-2xl font-bold text-[#020907] font-serif mb-1 tracking-wide">
                Gifttory Studio PVT LTD.
              </h3>
              <p className="text-sm font-medium text-[#353A39] mb-4">Ahmedabad</p>
              <p className="text-sm text-[#353A39] leading-relaxed text-justify max-w-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              </p>
            </div>
 
            {/* Timing Info */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#020907]">OPEN 7 DAYS A WEEK</h4>
              <p className="text-sm text-[#353A39]">11:00 am - 9:00 pm IST</p>
            </div>
 
 
            {/* Address & Central Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-7 flex items-start gap-3">
                <SlLocationPin className="text-[#0B2E24] text-lg shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-[#353A39] leading-snug">
                  Shop no.29 Lorem Ipsum is simply dummy text of the printing, Ahmedabad - 382415
                </p>
              </div>
              <div className="sm:col-span-5 flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-[#DFDFDF] pt-3 sm:pt-0 sm:pl-4">
                <FiPhone className="text-[#0B2E24] text-lg shrink-0 mt-0.5" />
                <p className="text-sm text-[#353A39] font-medium">+91 9943157685</p>
              </div>
            </div>
 
            <hr className="border-gray-100" />
 
            {/* Personal Shoppers Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 text-sm pt-1">
              <div className="sm:col-span-5">
                <p className="font-bold text-[#020907] text-xs uppercase tracking-wider mb-2">Personal Shopper</p>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium">Devika</p>
                  <p className="font-medium">Roshni</p>
                </div>
              </div>
              <div className="sm:col-span-7 flex flex-col justify-end space-y-2 text-gray-600 border-t sm:border-t-0 sm:border-l border-gray-100 pt-2 sm:pt-0 sm:pl-4">
                <p className="flex items-center gap-2 font-medium text-[#353A39]"><FiPhone className="text-[#020907]" /> +91 9943157685</p>
                <p className="flex items-center gap-2 font-medium text-[#353A39]"><FiPhone className="text-[#020907]" /> +91 9943157685</p>
              </div>
            </div>
 
          </div>
        </div>
 
        {/* 3. Bottom Section: Form & Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch px-4 md:px-8 lg:px-12">
         
          {/* Contact Input Form Container (Left 7 Columns) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name Input */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-bold text-black font-sans">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B2E24] text-gray-800 placeholder-[#353A39] bg-white"
                  required
                />
              </div>
 
              {/* Email Input */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-bold text-black font-sans">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B2E24] text-gray-800 placeholder-[#353A39] bg-white"
                  required
                />
              </div>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone Number Input */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-bold text-black font-sans">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B2E24] text-gray-800 placeholder-[#353A39] bg-white"
                />
              </div>
 
              {/* Subject Input */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-bold text-black font-sans">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter Subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B2E24] text-gray-800 placeholder-[#353A39] bg-white"
                />
              </div>
            </div>
 
            {/* Message Input */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-bold text-black font-sans">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Enter message"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B2E24] text-gray-800 placeholder-[#353A39] bg-white resize-none"
                required
              />
            </div>
 
            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-3 bg-[#0A231C] text-white font-medium text-sm rounded-xl hover:bg-black transition-colors shadow-sm"
              >
                Submit
              </button>
            </div>
          </form>
 
          {/* Brown Info Card Container (Right 5 Columns) */}
          <div className="lg:col-span-5 bg-[#966E38] text-white rounded-[20px] p-8 flex flex-col gap-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif tracking-wide">Get In Touch</h3>
              <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              </p>
            </div>
 
            {/* Direct Quick Contact Icons */}
            <div className="space-y-4 pt-6 lg:pt-0">
              <div className="flex items-center gap-3 text-sm">
                <BiPhoneCall className="text-xl shrink-0 text-white" />
                <span className="font-light">+91 9984265436</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiMail className="text-lg shrink-0 text-white" />
                <span className="font-light">gifttory9@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <SlLocationPin className="text-lg shrink-0 text-white mt-0.5" />
                <span className="font-light leading-snug">B465, Lorem Ipsum, India -256434</span>
              </div>
            </div>
          </div>
 
        </div>
 
      </div>
    </div>
  );
}