"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-12 py-6">
      <div className="max-w-7xl mx-auto bg-[#FFFFFF]/88 backdrop-blur-sm rounded-xl shadow-sm flex items-center justify-between px-8 py-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src={"/images/Logo.png"} alt="logo" width={100} height={100} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700">
          <span className="cursor-pointer hover:text-black">Shop</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Categories <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Occasions <ChevronDown size={14} />
          </div>
          <span className="cursor-pointer hover:text-black">Personalized Gifts</span>
          <span className="cursor-pointer hover:text-black">Corporate Gifts</span>
          <div className="flex items-center gap-1 text-orange-700 font-semibold cursor-pointer">
            <Sparkles size={14} /> Same Day delivery <ChevronDown size={14} />
          </div>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          <Search size={20} className="cursor-pointer hidden md:block" />
          <ShoppingCart size={20} className="cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">
            <User size={20} />
            <ChevronDown size={14} className="hidden md:block" />
          </div>
          {/* Mobile Toggle */}
          <div className="lg:hidden">
            {open ? <X onClick={() => setOpen(false)} /> : <Menu onClick={() => setOpen(true)} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl p-6 space-y-4 text-sm font-medium animate-in slide-in-from-top-5">
          <div className="border-b pb-2">Shop</div>
          <div className="border-b pb-2 flex justify-between">Categories <ChevronDown size={16}/></div>
          <div className="border-b pb-2 flex justify-between">Occasions <ChevronDown size={16}/></div>
          <div className="border-b pb-2">Personalized Gifts</div>
          <div className="text-orange-700 font-bold">Same Day delivery</div>
        </div>
      )}
    </header>
  );
}