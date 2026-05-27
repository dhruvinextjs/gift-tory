import React from "react";

const categories = [
  { id: 1, name: "Birthday Gift", img: "/images/gift5.png" },
  { id: 2, name: "Anniversary Gift", img: "/images/gift4.png" },
  { id: 3, name: "Personalized Gift", img: "/images/gift3.png" },
  { id: 4, name: "Couple Gift", img: "/images/gift.png" },
  { id: 5, name: "Corporate Gift", img: "/images/gift2.png" },
  { id: 6, name: "Festive Gift", img: "/images/gift6.png" },
  { id: 7, name: "Birthday Gift", img: "/images/gift5.png" },
  { id: 8, name: "Anniversary Gift", img: "/images/gift4.png" },
  { id: 9, name: "Personalized Gift", img: "/images/gift3.png" },
];

export default function ShopbyCategory() {
  return (
    <div className="py-12 px-6 md:px-16">
    <section className=" bg-white max-w-7xl mx-auto">
      {/* Heading Section with custom underline and dots */}
      <div className="mb-10">
        <h2 className="text-[#0B2E24] text-3xl font-serif font-bold mb-2">
          Shop By Categories
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

      {/* Categories Grid - Fully Responsive */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Circular Image Container */}
            <div className="relative w-20 h-20 aspect-square overflow-hidden rounded-full border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Category Name */}
            <p className="mt-4 text-center text-[#0B2E24] text-xs font-medium leading-tight">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
