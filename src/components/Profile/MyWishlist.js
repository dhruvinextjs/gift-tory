"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


export default function MyWishlist() {
    const [likedItems, setLikedItems] = useState([1, 2, 3, 4, 5]);
    // Image ke products ka dummy data
    const wishlistProducts = [
        { id: 1, title: 'Self care hamper by gifttory', price: '1,200', originalPrice: '1,600', rating: '4.5', reviews: '120', image: '/images/best-seller1.png', trending: false },
        { id: 2, title: 'Self care hamper by gifttory', price: '1,200', originalPrice: '1,600', rating: '4.5', reviews: '120', image: '/images/best-seller2.png', trending: false },
        { id: 3, title: 'Self care hamper by gifttory', price: '1,200', originalPrice: '1,600', rating: '4.5', reviews: '120', image: '/images/best-seller1.png', trending: false },
        { id: 4, title: 'Self care hamper by gifttory', price: '1,200', originalPrice: '1,600', rating: '4.5', reviews: '120', image: '/images/best-seller2.png', trending: false },
        { id: 5, title: 'Self care hamper by gifttory', price: '1,200', originalPrice: '1,600', rating: '4.5', reviews: '120', image: '/images/best-seller1.png', trending: false },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-[#DFDFDF] min-h-[600px]">
            {/* Title with Count */}
            <h3 className="text-xl font-bold text-[#020907] mb-6">
                My Wishlist ({wishlistProducts.length})
            </h3>

            {/* Responsive Grid Setup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistProducts.map((product) => (
                    <div key={product.id} className="group relative flex flex-col bg-white rounded-xl overflow-hidden">

                        {/* Product Image Container */}
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Trending Badge */}
                            {product.trending && (
                                <span className="absolute top-3 left-3 bg-[#E58A7B] text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                                    🔥 Trending
                                </span>
                            )}

                            {/* Wishlist Heart Button */}
                            <button
                                onClick={() => {
                                    setLikedItems((prev) =>
                                        prev.includes(product.id)
                                            ? prev.filter((id) => id !== product.id)
                                            : [...prev, product.id]
                                    );
                                }}
                                className="absolute bottom-3 right-3 w-10 h-10 bg-[#FFDEE8] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                            >
                                {likedItems.includes(product.id) ? (
                                    <AiFillHeart className="text-2xl text-[#C20641]" />
                                ) : (
                                    <AiOutlineHeart className="text-2xl text-[#C20641]" />
                                )}
                            </button>
                        </div>

                        {/* Product Details */}
                        <div className="mt-3 flex flex-col flex-1">
                            <h4 className="text-sm font-medium text-[#020907] line-clamp-2 min-h-[25px]">
                                {product.title}
                            </h4>

                            {/* Rating */}
                            <div className="flex items-center gap-1 text-xs text-[#020907]">
                                <AiFillStar className="text-[#E4902F] text-sm" />
                                <span className="font-bold text-gray-700">{product.rating}</span>
                                <span>({product.reviews} reviews)</span>
                            </div>

                            {/* Price Section */}
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-base font-bold text-[#020907]">₹{product.price}</span>
                                <span className="text-xs text-[#000000] line-through">₹{product.originalPrice}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}