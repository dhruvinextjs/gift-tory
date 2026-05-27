import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  Youtube,
  Twitter,
  FacebookIcon,
  Instagram,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { RiTwitterLine, RiYoutubeLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDFCF0] ">
      {/* Main Footer Container with Top-Right Smooth Curve */}
      <div className="footer-wrapper bg-[#0b2f23] text-white px-6 md:px-16 pt-16 pb-8 relative overflow-hidden">
        {/* Top Section: Links & Subscription */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="flex flex-col items-center text-center">
              <Image
                src={"/images/footer-logo.png"}
                alt="footer-logo"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer transition">
                <Link href={"/categories"}>Categories</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Best Sellers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                New Arrivals
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Bulk Orders
              </li>
            </ul>
          </div>

          {/* Column 3: Policy Info */}
          <div>
            <h3 className="text-base font-bold mb-4 tracking-wide text-white">
              Policy Info
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer transition">
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                <Link href={"/shipping-policy"}>Shipping Policy</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                <Link href={"/return-policy"}>Return Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About Company */}
          <div>
            <h3 className="text-base font-bold mb-4 tracking-wide text-white">
              About Company
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>
              <li  className="hover:text-white cursor-pointer transition">
                <Link href="/blog">Blogs</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                FAQ's
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Testimonial
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe Now */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold mb-4 tracking-wide text-white">
              Subscribe Now
            </h3>
            <div className="flex items-center bg-white rounded-lg p-1 max-w-sm">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-transparent px-3 py-2 text-gray-800 text-sm outline-none placeholder-gray-400"
              />
              <button className="bg-[#b38446] hover:bg-[#966d37] text-white p-2.5 rounded-md transition flex items-center justify-center">
                <Send size={16} className="rotate-45" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Details Bar */}
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-10 lg:gap-28 pb-8 text-sm border-b border-white/10">
          {/* Contact Us */}
          <div className="flex items-center gap-2 font-semibold text-[18px] cursor-pointer group text-white">
            <span>Contact Us</span>

            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-white/80 text-[15px]">
            <Phone size={16} className="text-white shrink-0" />
            <span>+91 9984265436</span>
          </div>

          {/* Mail */}
          <div className="flex items-center gap-2 text-white/80 text-[15px]">
            <Mail size={16} className="text-white shrink-0" />
            <span>gifttory9@gmail.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-white/80 text-[15px]">
            <MapPin size={17} className="text-white shrink-0" />
            <span>B465, Lorem Ipsum, India -256434</span>
          </div>
        </div>

        {/* Bottom Section: Socials, Copyright & Payments */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white/80">
            <RiYoutubeLine
              className="hover:text-white cursor-pointer transition"
              size={18}
            />
            <RiTwitterLine
              className="hover:text-white cursor-pointer transition"
              size={18}
            />
            <SlSocialFacebook
              className="hover:text-white cursor-pointer transition"
              size={18}
            />
            <FaInstagram
              className="hover:text-white cursor-pointer transition"
              size={18}
            />
          </div>

          {/* Copyright Text */}
          <div className="text-xs text-white/60 text-center sm:text-left">
            Copyrights © 2026, Gifttory.com All rights reserved.
          </div>

          {/* Payment Gateways Placeholder Icons */}
          <div className="flex items-center gap-2 bg-transparent">
            <div className="bg-white px-2 py-1 rounded text-[10px] font-bold text-blue-800 tracking-tight shadow-sm h-6 flex items-center">
              <Image src={"/images/visa.png"} alt="img" height={30} width={30}/>
            </div>
            <div className="bg-white px-2 py-1 rounded text-[10px] font-bold text-red-600 shadow-sm h-6 flex items-center">
               <Image src={"/images/mastercard.png"} alt="img" height={30} width={30}/>
            </div>
            <div className="bg-white px-2 py-1 rounded text-[10px] font-extrabold italic text-blue-900 shadow-sm h-6 flex items-center">
               <Image src={"/images/rupay.png"} alt="img" height={40} width={40}/>
            </div>
            <div className="bg-white px-2 py-1 rounded text-[10px] font-bold text-cyan-500 shadow-sm h-6 flex items-center">
              <Image src={"/images/paytm.png"} alt="img" height={40} width={40}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
