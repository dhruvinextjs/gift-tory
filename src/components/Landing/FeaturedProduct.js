import React from 'react';
import { Star, Heart, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120",
    image: "/images/best-seller1.png",
    trending: false,
  },
  {
    id: 2,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120",
    image: "/images/best-seller2.png",
    trending: false,
  },
  {
    id: 3,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120",
    image: "/images/best-seller3.png",
    trending: false,
  },
  {
    id: 4,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120",
    image: "/images/best-seller1.png",
    trending: false,
  },
  {
    id: 5,
    title: "Self care hamper by gifttory",
    price: "1,200",
    oldPrice: "1,600",
    rating: "4.5",
    reviews: "120",
    image: "/images/best-seller3.png",
    trending: false,
  }
];

export default function FeaturedProduct() {
  return (
    <div className='py-12 px-6 md:px-16'>
        <section className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-[#1a3a32] text-3xl font-serif font-bold mb-2">
            Featured Products
          </h2>
            <div className="flex items-center gap-2">
          <div className="h-[2px] w-12 bg-[#0B2E24]"></div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B2E24]"></span>{" "}
            {/* Big */}
            <span className="w-1 h-1 rounded-full bg-[#0B2E24]"></span>{" "}
            {/* Medium */}
            <span className="w-0.5 h-0.5 rounded-full bg-[#0B2E24]"></span>{" "}
            {/* Small */}
          </div>
        </div>
        </div>
        <button className="text-gray-800 text-sm font-semibold underline underline-offset-4">
          See All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm bg-white">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Trending Badge */}
              {product.trending && (
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md flex items-center gap-1 uppercase tracking-wider font-medium">
                  <span className="text-orange-400">🔥</span> Trending
                </div>
              )}

              {/* Wishlist Button */}
              <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition">
                <Heart size={16} className="text-pink-500" />
              </button>
         
            </div>

            {/* Product Details */}
            <div className="space-y-1">
              <p className="text-gray-800 text-sm font-medium truncate">
                {product.title}
              </p>
              
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <span className="text-xs font-semibold text-[#020907]">{product.rating}</span>
                <span className="text-xs text-[#020907]">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-bold text-[#020907]">₹{product.price}</span>
                <span className="text-sm text-[#000000] line-through">₹{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        <span className="w-2 h-2 rounded-full bg-[#1a3a32]"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </section>
    </div>
  );
}