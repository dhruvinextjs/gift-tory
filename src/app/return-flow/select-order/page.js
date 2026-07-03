"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaStar, FaHeart } from 'react-icons/fa';

export default function SelectOrderPage() {
    const [wishlist, setWishlist] = useState([]);


    // Mock data based on your screen layout with price and discount properties
    const orders = [
        { id: 1, name: "Self care hamper by gifttory", price: "1,200", originalPrice: "1,600", rating: "4.5", reviews: "120", isTrending: true, image: "/images/best-seller1.png" },
        { id: 2, name: "Self care hamper by gifttory", price: "1,200", originalPrice: "1,600", rating: "4.5", reviews: "120", isTrending: false, image: "/images/best-seller2.png" },
        { id: 3, name: "Self care hamper by gifttory", price: "1,200", originalPrice: "1,680", rating: "4.5", reviews: "120", isTrending: false, image: "/images/best-seller1.png" },
        { id: 4, name: "Self care hamper by gifttory", price: "1,200", originalPrice: "1,600", rating: "4.5", reviews: "120", isTrending: false, image: "/images/best-seller2.png" },
        { id: 5, name: "Self care hamper by gifttory", price: "1,200", originalPrice: "1,600", rating: "4.5", reviews: "120", isTrending: false, image: "/images/best-seller1.png" },
    ];

    const handleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            {/* Main Wrapper Container matching image shadow and rounded corners */}
            <div className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-100 p-6 md:p-8">

                {/* Header Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold text-[#020907] tracking-wide">
                        Choose an order
                    </h2>
                    <p className="text-xs text-[#020907] mt-1">
                        Returns are accepted within 30 days of delivery.
                    </p>
                </div>

                {/* Grid Container for Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="flex flex-col cursor-pointer group"
                        >
                            {/* Product Image Box with Relative tags */}
                            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                                <Image
                                    src={order.image}
                                    alt={order.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />

                                {/* Trending Tag */}
                                {order.isTrending && (
                                    <div className="absolute top-3 left-3 bg-[#EAA235] text-white text-[9px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                        <span className="text-[10px]">🔥</span> Trending
                                    </div>
                                )}

                                {/* Wishlist/Heart Button Icon */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleWishlist(order.id);
                                    }}
                                    className="absolute bottom-3 right-3 bg-[#FFDEE8] rounded-full p-2 shadow-md hover:scale-110 transition"
                                >
                                    <FaHeart
                                        size={18}
                                        className={
                                            wishlist.includes(order.id)
                                                ? "text-[#C20641]"
                                                : "text-white"
                                        }
                                    />
                                </button>
                            </div>

                            {/* Product Meta Details */}
                            <div className="mt-3 flex flex-col gap-1">
                                <h3 className="text-[#020907] text-xs font-normal tracking-wide line-clamp-2">
                                    {order.name}
                                </h3>

                                {/* Rating Star Row */}
                                <div className="flex items-center gap-1 text-[11px] text-gray-500">
                                    <FaStar className="text-[#E4902F] text-[10px]" />
                                    <span className="font-semibold text-[#020907]">{order.rating}</span>
                                    <span className="text-[#020907]">({order.reviews} reviews)</span>
                                </div>

                                {/* Price Row with Strikeout formatting */}
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-sm font-bold text-[#020907]">
                                        ₹{order.price}
                                    </span>
                                    <span className="text-xs font-medium text-[#000000] line-through">
                                        ₹{order.originalPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}