import React from 'react';

const categories = [
  { id: 1, name: "Birthday Gift", img: "/api/placeholder/150/150" },
  { id: 2, name: "Anniversary Gift", img: "/api/placeholder/150/150" },
  { id: 3, name: "Personalized Gift", img: "/api/placeholder/150/150" },
  { id: 4, name: "Couple Gift", img: "/api/placeholder/150/150" },
  { id: 5, name: "Corporate Gift", img: "/api/placeholder/150/150" },
  { id: 6, name: "Festive Gift", img: "/api/placeholder/150/150" },
  { id: 7, name: "Birthday Gift", img: "/api/placeholder/150/150" },
  { id: 8, name: "Anniversary Gift", img: "/api/placeholder/150/150" },
  { id: 9, name: "Personalized Gift", img: "/api/placeholder/150/150" },
];

export default function ShopbyCategory() {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      {/* Heading Section with custom underline and dots */}
      <div className="mb-10">
        <h2 className="text-[#1a3a32] text-3xl font-serif font-bold mb-2">
          Shop By Categories
        </h2>
        <div className="flex items-center gap-2">
          <div className="h-[2px] w-12 bg-[#1a3a32]"></div>
          <div className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-[#1a3a32]"></span>
            <span className="w-1 h-1 rounded-full bg-[#1a3a32]"></span>
            <span className="w-1 h-1 rounded-full bg-[#1a3a32]"></span>
          </div>
        </div>
      </div>

      {/* Categories Grid - Fully Responsive */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center group cursor-pointer">
            {/* Circular Image Container */}
            <div className="relative w-full aspect-square overflow-hidden rounded-full border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Category Name */}
            <p className="mt-4 text-center text-[#1a3a32] text-xs md:text-sm font-medium leading-tight">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}