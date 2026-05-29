"use client";

import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // USER CHECK STATE
  const [user, setUser] = useState(null);

  useEffect(() => {
    // LOCAL STORAGE USER CHECK
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-6">
      <div className="max-w-7xl mx-auto bg-[#FFFFFFE0]/88 backdrop-blur-sm rounded-xl shadow-sm flex items-center justify-between px-5 md:px-8 py-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src={"/images/Logo.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700">
          
          <Link
            href={"/shop"}
            className="cursor-pointer hover:text-black transition"
          >
            Shop
          </Link>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            <Link href={"/categories"}>Categories</Link>
            <ChevronDown size={14} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            <Link href={"/occasion"}>Occasions</Link>
            <ChevronDown size={14} />
          </div>

          <Link
            href={"/personalized-gifts"}
            className="cursor-pointer hover:text-black transition"
          >
            Personalized Gifts
          </Link>

          <Link
            href={"/corporate-gifts"}
            className="cursor-pointer hover:text-black transition"
          >
            Corporate Gifts
          </Link>

          <div className="flex items-center gap-1 text-orange-700 font-semibold cursor-pointer">
            <Sparkles size={14} />

            <Link href={"/same-day-delivery"}>
              Same Day delivery
            </Link>

            <ChevronDown size={14} />
          </div>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          
          <AiOutlineSearch
            size={20}
            className="cursor-pointer hidden md:block"
          />

          <Link href={"/cart"}>
            <GrCart size={20} className="cursor-pointer" />
          </Link>

          {/* CONDITIONAL HEADER */}
          {user ? (
            <div className="flex items-center gap-1 cursor-pointer">
              <Link href={"/profile"}>
                <FaRegUser size={18} />
              </Link>

              <ChevronDown
                size={14}
                className="hidden md:block"
              />
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2 text-[13px] font-semibold">
              <Link
                href={"/signin"}
                className="hover:text-black transition"
              >
                Login
              </Link>

              <span>/</span>

              <Link
                href={"/signup"}
                className="hover:text-black transition"
              >
                Signup
              </Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            {open ? (
              <X onClick={() => setOpen(false)} />
            ) : (
              <Menu onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl p-6 space-y-4 text-sm font-medium animate-in slide-in-from-top-5">
          
          <Link
            href={"/shop"}
            onClick={() => setOpen(false)}
            className="block border-b pb-2"
          >
            Shop
          </Link>

          <Link
            href={"/categories"}
            onClick={() => setOpen(false)}
            className="flex justify-between border-b pb-2"
          >
            <span>Categories</span>
            <ChevronDown size={16} />
          </Link>

          <Link
            href={"/occasion"}
            onClick={() => setOpen(false)}
            className="flex justify-between border-b pb-2"
          >
            <span>Occasions</span>
            <ChevronDown size={16} />
          </Link>

          <Link
            href={"/personalized-gifts"}
            onClick={() => setOpen(false)}
            className="block border-b pb-2"
          >
            Personalized Gifts
          </Link>

          <Link
            href={"/corporate-gifts"}
            onClick={() => setOpen(false)}
            className="block border-b pb-2"
          >
            Corporate Gifts
          </Link>

          <Link
            href={"/same-day-delivery"}
            onClick={() => setOpen(false)}
            className="block text-orange-700 font-bold border-b pb-2"
          >
            Same Day delivery
          </Link>

          {/* MOBILE LOGIN / PROFILE */}
          {user ? (
            <Link
              href={"/profile"}
              onClick={() => setOpen(false)}
              className="block pt-2"
            >
              My Profile
            </Link>
          ) : (
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={"/signin"}
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                Login
              </Link>

              <span>/</span>

              <Link
                href={"/signup"}
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}