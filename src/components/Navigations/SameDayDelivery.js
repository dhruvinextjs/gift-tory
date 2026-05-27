// "use client";
// import React, { useState } from "react";
// import {
//   Heart,
//   Star,
//   ChevronDown,
//   SlidersHorizontal,
//   Grid,
//   LayoutGrid,
// } from "lucide-react";
// import { RxDragHandleVertical } from "react-icons/rx";
// import { LiaGripLinesVerticalSolid } from "react-icons/lia";

// export default function SameDayDelivery() {
//   // Mock datasets replicating your provided screenshot exactly
//   const productsList = [
//     {
//       id: 1,
//       tag: "Trending",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller1.png",
//     },
//     {
//       id: 2,
//       tag: "",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller2.png",
//     },
//     {
//       id: 3,
//       tag: "Trending",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller3.png",
//       hasCartOverlay: true,
//     },
//     {
//       id: 4,
//       tag: "Trending",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller1.png",
//     },
//     {
//       id: 5,
//       tag: "",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller2.png",
//     },
//     {
//       id: 6,
//       tag: "Trending",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller3.png",
//       hasCartOverlay: true,
//     },
//     {
//       id: 7,
//       tag: "Trending",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller1.png",
//     },
//     {
//       id: 8,
//       tag: "",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller2.png",
//     },
//     {
//       id: 9,
//       tag: "Trending",
//       title: "Self care hamper by gifttory",
//       rating: "4.5",
//       reviews: "120",
//       price: "1,200",
//       originalPrice: "1,600",
//       img: "/images/best-seller3.png",
//       hasCartOverlay: true,
//     },
//   ];

//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

//   return (
//     <div className="w-full bg-white min-h-screen antialiased">
//       {/* ==========================================
//           === TOP HERO BANNER (As per Figma) === 
//           ========================================== */}
//       <div
//         className="w-full h-[220px] md:h-[280px] lg:h-[520px] relative bg-cover bg-center flex items-center justify-center shadow-inner"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('images/same-day-bg.png')`,
//         }}
//       >
//         <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide drop-shadow-md">
//           Same Day Delivery
//         </h1>
//       </div>

//       {/* ==========================================
//           === CORE INTERACTIVE GRID SYSTEM CONTAINER === 
//           ========================================== */}
//       <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 py-10">
//         <div className="flex flex-col lg:flex-row gap-8 items-start">
//           {/* === LEFT SIDEBAR DESKTOP FILTER PANEL === */}
//           <aside className="w-full lg:w-[270px] shrink-0 hidden lg:block bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-6">
//             {/* Price Range Tracker Section */}
//             <div>
//               <h3 className="text-sm font-bold text-gray-900 mb-3">
//                 Select price range
//               </h3>
//               <div className="flex justify-between text-[11px] text-[#020907] font-medium mb-2">
//                 <span className="text-[#020907] font-bold">
//                   Min price <b className="block text-gray-900 mt-0.5 font-medium">₹190</b>
//                 </span>
//                 <span className="text-right text-[#020907] font-bold">
//                   Max price{" "}
//                   <b className="block text-gray-900 mt-0.5 font-medium">₹19,000</b>
//                 </span>
//               </div>
//               {/* Custom Track bar design structure */}
//               <div className="relative h-1 bg-gray-200 rounded-full mt-4 mb-2">
//                 <div className="absolute left-[15%] right-[20%] h-full bg-[#0b2f23]" />
//                 <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#0b2f23] rounded-full border border-white cursor-pointer shadow-sm" />
//                 <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#0b2f23] rounded-full border border-white cursor-pointer shadow-sm" />
//               </div>
//               <div className="flex justify-between text-[11px] font-bold text-gray-700 px-1 mt-1">
//                 <span>₹600</span>
//                 <span>₹12,000</span>
//               </div>
//             </div>

//             {/* Checkbox Group Filter Helper Component */}
//             <FilterGroup
//               title="Recipient (1)"
//               items={[
//                 { label: "Him", checked: false },
//                 { label: "Her", checked: true },
//                 { label: "Kids", checked: false },
//                 { label: "Wife", checked: false },
//                 { label: "Husband", checked: false },
//                 { label: "Mother", checked: false },
//                 { label: "Father", checked: false },
//               ]}
//             />

//             <FilterGroup
//               title="Occasion (1)"
//               items={[
//                 { label: "Birthday", checked: false },
//                 { label: "Anniversary", checked: true },
//                 { label: "Wedding", checked: false },
//                 { label: "Valentines Day", checked: false },
//                 { label: "Christmas", checked: false },
//                 { label: "New year", checked: false },
//                 { label: "Mother's Day", checked: false },
//                 { label: "Father's Day", checked: false },
//                 { label: "Funeral", checked: false },
//               ]}
//             />

//             <FilterGroup
//               title="Gift Type(1)"
//               items={[
//                 { label: "Personalised", checked: false },
//                 { label: "Hampers", checked: true },
//                 { label: "Plants", checked: false },
//               ]}
//             />

//             <FilterGroup
//               title="Delivery Options"
//               items={[
//                 { label: "Same Day Delivery", checked: false },
//                 { label: "Next Day", checked: false },
//               ]}
//             />

//             <FilterGroup
//               title="Theme"
//               items={[
//                 { label: "Romantic", checked: false },
//                 { label: "Funny", checked: false },
//                 { label: "Luxury", checked: false },
//               ]}
//             />

//             <FilterGroup
//               title="Availability"
//               items={[{ label: "In Stock", checked: false }]}
//             />
//           </aside>

//           {/* === RIGHT SIDE MAIN RESULTS LAYOUT WRAPPER === */}
//           <div className="flex-1 w-full">
//             {/* --- TOP MATRIX BAR (Active Chips & Layout Switches) --- */}
//             <div className="w-full flex flex-col gap-4 pb-5 border-b border-gray-100 mb-6">
//               {/* Filter Row Control Triggers */}
//               <div className="flex items-center justify-between flex-wrap gap-3">
//                 {/* Active Applied Tag Chips Matrix mapping */}
//                 <div className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-gray-600">
//                   <span className="text-[#353A39] uppercase">1,200 Items</span>
//                   <div className="flex items-center text-[#020907] gap-1.5 border border-[#DFDFDF] px-2 py-1 rounded-full">
//                     <span>Her</span>
//                     <button className="text-[#000000] font-bold">×</button>
//                   </div>
//                   <div className="flex items-center text-[#020907] gap-1.5 border border-[#DFDFDF] px-2 py-1 rounded-full">
//                     <span>Anniversary</span>
//                     <button className="text-[#000000] font-bold">×</button>
//                   </div>
//                   <div className="flex items-center text-[#020907] gap-1.5 border border-[#DFDFDF] px-2 py-1 rounded-full">
//                     <span>Hampers</span>
//                     <button className="text-[#000000] font-bold">×</button>
//                   </div>
//                 </div>

//                 {/* Right Controls Dropdowns & View Switches */}
//                 <div className="flex items-center gap-4 ml-auto">
//                   <button
//                     onClick={() => setMobileFilterOpen(true)}
//                     className="lg:hidden flex items-center gap-2 text-xs font-bold text-gray-800 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg"
//                   >
//                     <SlidersHorizontal size={14} /> Filter
//                   </button>

//                   <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
//                     <span className="text-[#353A39] font-normal uppercase">
//                       Items Per Page:
//                     </span>
//                     <button className="flex items-center gap-1 border border-[#DFDFDF] rounded-md p-2">
//                       1 to 10 <ChevronDown size={12} />
//                     </button>
//                   </div>

//                   <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
//                     <span className="text-[#353A39] font-normal">SORT BY:</span>
//                     <button className="flex items-center gap-1 border border-[#DFDFDF] rounded-md p-2">
//                       FEATURED <ChevronDown size={12} />
//                     </button>
//                   </div>

//                   {/* Grid Box Mode Triggers */}
//                   <div className="hidden sm:flex items-center gap-1.5 border-l border-gray-200 pl-3 text-gray-400">
//                     <button className="text-[#353A39] border border-[#DFDFDF]">
//                       <LiaGripLinesVerticalSolid size={24} />
//                     </button>
//                     <button className="text-[#353A39] border border-[#DFDFDF]">
//                       <RxDragHandleVertical size={24} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* --- CORE PRODUCT GRID LAYOUT HOOK --- */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
//               {productsList.map((product) => (
//                 <div
//                   key={product.id}
//                   className="group relative bg-white flex flex-col rounded-2xl overflow-hidden"
//                 >
//                   {/* Media Visual Block Card Frame Container */}
//                   <div className="w-full aspect-[312/260] relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100/60">
//                     <img
//                       src={product.img}
//                       alt={product.title}
//                       className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
//                     />
//                     {/* Top Condition Badging Block */}
//                     {product.tag && (
//                       <span className="absolute top-3 left-3 bg-[#59200080] text-white text-[10px] font-bold px-3 py-2 rounded flex items-center gap-1 shadow-sm">
//                         🔥 {product.tag}
//                       </span>
//                     )}
//                     {/* Core Dynamic Floating Heart Icon Anchor */}
//                     <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-md transform active:scale-95 transition-all">
//                       <Heart size={15} className="mt-0.5" />
//                     </button>
//                     {/* CART ACTIONS FLOATING OVERLAY VIEW (Row Element 3 Spec logic matching screenshot) */}

//                     <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                       <button className="w-full max-w-[180px] bg-transparent border border-white text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 hover:bg-white hover:text-black transition-colors duration-200">
//                         <span>+ Add to cart</span>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Core Descriptive Text Details Section */}
//                   <div className="pt-3 pb-1 flex flex-col flex-1">
//                     <h4 className="text-[13px] font-normal text-gray-700 tracking-wide line-clamp-1">
//                       {product.title}
//                     </h4>

//                     {/* Rating Matrix View Row */}
//                     <div className="flex items-center gap-1 mt-1">
//                       <Star
//                         size={13}
//                         fill="#f2a654"
//                         className="text-[#f2a654]"
//                       />
//                       <span className="text-[11px] font-bold text-gray-800">
//                         {product.rating}
//                       </span>
//                       <span className="text-[11px] text-gray-400">
//                         ({product.reviews} reviews)
//                       </span>
//                     </div>

//                     {/* Currency Value Frame block wrapper */}
//                     <div className="flex items-baseline gap-2 mt-2">
//                       <span className="text-sm font-bold text-gray-900">
//                         ₹{product.price}
//                       </span>
//                       <span className="text-[11px] text-gray-400 line-through">
//                         ₹{product.originalPrice}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==========================================
//           === MOBILE FILTER SLIDEOUT OVERLAY DRAWER === 
//           ========================================== */}
//       {mobileFilterOpen && (
//         <div className="fixed inset-0 z-50 flex lg:hidden">
//           <div
//             className="fixed inset-0 bg-black/50"
//             onClick={() => setMobileFilterOpen(false)}
//           />
//           <div className="relative ml-0 mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 px-5 shadow-xl animate-in slide-in-from-left duration-200">
//             <div className="flex items-center justify-between border-b pb-3 mb-4">
//               <h2 className="text-base font-bold text-gray-900">Filters</h2>
//               <button
//                 onClick={() => setMobileFilterOpen(false)}
//                 className="text-xl font-bold p-1"
//               >
//                 ×
//               </button>
//             </div>
//             {/* Sidebar duplication can safely be inserted here dynamically inside your runtime workflow */}
//             <p className="text-xs text-gray-400">
//               Desktop filters active and operational scaling down smoothly.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Reusable Sub-Accordion Filter Collapse Block Helper
// // ======================
// // FILTER HIDE/SHOW FIX
// // ======================

// // REPLACE YOUR FilterGroup FUNCTION WITH THIS:

// function FilterGroup({ title, items }) {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="border-b border-gray-100 pb-4 pt-1">
//       {/* Heading */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-center justify-between text-xs font-bold text-gray-900 mb-3 cursor-pointer group"
//       >
//         <span>{title}</span>

//         <ChevronDown
//           size={14}
//           className={`text-gray-400 group-hover:text-black transition-transform duration-300 ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {/* Content */}
//       <div
//         className={`overflow-hidden transition-all duration-300 ${
//           open ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="space-y-2.5 overflow-y-auto pr-1">
//           {items.map((item, idx) => (
//             <label
//               key={idx}
//               className="flex items-center gap-2.5 text-xs text-gray-600 font-medium cursor-pointer select-none"
//             >
//               <input
//                 type="checkbox"
//                 defaultChecked={item.checked}
//             className="w-3.5 h-3.5 accent-black cursor-pointer border border-[#A1A1A1] focus:ring-0 focus:outline-none"
//               />

//               <span
//                 className={item.checked ? "text-gray-900 font-semibold" : ""}
//               >
//                 {item.label}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import {
  Heart,
  Star,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";
import { RxDragHandleVertical } from "react-icons/rx";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";

export default function SameDayDelivery() {
  const productsList = [
    {
      id: 1,
      tag: "Trending",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller1.png",
    },
    {
      id: 2,
      tag: "",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller2.png",
    },
    {
      id: 3,
      tag: "Trending",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller3.png",
    },
    {
      id: 4,
      tag: "Trending",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller1.png",
    },
    {
      id: 5,
      tag: "",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller2.png",
    },
    {
      id: 6,
      tag: "Trending",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller3.png",
    },
    {
      id: 7,
      tag: "Trending",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller1.png",
    },
    {
      id: 8,
      tag: "",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller2.png",
    },
    {
      id: 9,
      tag: "Trending",
      title: "Self care hamper by gifttory",
      rating: "4.5",
      reviews: "120",
      price: "1,200",
      originalPrice: "1,600",
      img: "/images/best-seller3.png",
    },
  ];

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen antialiased overflow-hidden">
      {/* HERO SECTION */}
      <div
        className="w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[520px] relative bg-cover bg-center flex items-center justify-center shadow-inner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('images/same-day-bg.png')`,
        }}
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide drop-shadow-md text-center px-4">
          Same Day Delivery
        </h1>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[270px] shrink-0 hidden lg:block bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                Select price range
              </h3>

              <div className="flex justify-between text-[11px] text-[#020907] font-medium mb-2 gap-4">
                <span className="text-[#020907] font-bold">
                  Min price
                  <b className="block text-gray-900 mt-0.5 font-medium">
                    ₹190
                  </b>
                </span>

                <span className="text-right text-[#020907] font-bold">
                  Max price
                  <b className="block text-gray-900 mt-0.5 font-medium">
                    ₹19,000
                  </b>
                </span>
              </div>

              <div className="relative h-1 bg-gray-200 rounded-full mt-4 mb-2">
                <div className="absolute left-[15%] right-[20%] h-full bg-[#0b2f23]" />
                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#0b2f23] rounded-full border border-white cursor-pointer shadow-sm" />
                <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#0b2f23] rounded-full border border-white cursor-pointer shadow-sm" />
              </div>

              <div className="flex justify-between text-[11px] font-bold text-gray-700 px-1 mt-1">
                <span>₹600</span>
                <span>₹12,000</span>
              </div>
            </div>

            <FilterGroup
              title="Recipient (1)"
              items={[
                { label: "Him", checked: false },
                { label: "Her", checked: true },
                { label: "Kids", checked: false },
                { label: "Wife", checked: false },
                { label: "Husband", checked: false },
                { label: "Mother", checked: false },
                { label: "Father", checked: false },
              ]}
            />

            <FilterGroup
              title="Occasion (1)"
              items={[
                { label: "Birthday", checked: false },
                { label: "Anniversary", checked: true },
                { label: "Wedding", checked: false },
                { label: "Valentines Day", checked: false },
                { label: "Christmas", checked: false },
                { label: "New year", checked: false },
                { label: "Mother's Day", checked: false },
                { label: "Father's Day", checked: false },
                { label: "Funeral", checked: false },
              ]}
            />

            <FilterGroup
              title="Gift Type(1)"
              items={[
                { label: "Personalised", checked: false },
                { label: "Hampers", checked: true },
                { label: "Plants", checked: false },
              ]}
            />

            <FilterGroup
              title="Delivery Options"
              items={[
                { label: "Same Day Delivery", checked: false },
                { label: "Next Day", checked: false },
              ]}
            />

            <FilterGroup
              title="Theme"
              items={[
                { label: "Romantic", checked: false },
                { label: "Funny", checked: false },
                { label: "Luxury", checked: false },
              ]}
            />

            <FilterGroup
              title="Availability"
              items={[{ label: "In Stock", checked: false }]}
            />
          </aside>

          {/* RIGHT SECTION */}
          <div className="flex-1 w-full min-w-0">
            {/* TOP BAR */}
            <div className="w-full flex flex-col gap-4 pb-5 border-b border-gray-100 mb-6">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                {/* TAGS */}
                <div className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-gray-600">
                  <span className="text-[#353A39] uppercase whitespace-nowrap">
                    1,200 Items
                  </span>

                  <div className="flex items-center text-[#020907] gap-1.5 border border-[#DFDFDF] px-2 py-1 rounded-full">
                    <span>Her</span>
                    <button className="text-[#000000] font-bold">×</button>
                  </div>

                  <div className="flex items-center text-[#020907] gap-1.5 border border-[#DFDFDF] px-2 py-1 rounded-full">
                    <span>Anniversary</span>
                    <button className="text-[#000000] font-bold">×</button>
                  </div>

                  <div className="flex items-center text-[#020907] gap-1.5 border border-[#DFDFDF] px-2 py-1 rounded-full">
                    <span>Hampers</span>
                    <button className="text-[#000000] font-bold">×</button>
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 xl:ml-auto">
                  <button
                    onClick={() => setMobileFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 text-xs font-bold text-gray-800 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg"
                  >
                    <SlidersHorizontal size={14} />
                    Filter
                  </button>

                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <span className="text-[#353A39] font-normal uppercase hidden sm:block">
                      Items Per Page:
                    </span>

                    <button className="flex items-center gap-1 border border-[#DFDFDF] rounded-md px-3 py-2 whitespace-nowrap">
                      1 to 10 <ChevronDown size={12} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <span className="text-[#353A39] font-normal hidden sm:block">
                      SORT BY:
                    </span>

                    <button className="flex items-center gap-1 border border-[#DFDFDF] rounded-md px-3 py-2 whitespace-nowrap">
                      FEATURED <ChevronDown size={12} />
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 border-l border-gray-200 pl-3 text-gray-400">
                    <button className="text-[#353A39] border border-[#DFDFDF] rounded">
                      <LiaGripLinesVerticalSolid size={24} />
                    </button>

                    <button className="text-[#353A39] border border-[#DFDFDF] rounded">
                      <RxDragHandleVertical size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT GRID */}
          {/* --- CORE PRODUCT GRID LAYOUT HOOK --- */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
  {productsList.map((product) => (
    <div
      key={product.id}
      className="group relative bg-white flex flex-col rounded-2xl overflow-hidden w-full"
    >
      {/* Media Visual Block Card Frame Container */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-gray-100/60 bg-gray-50">
        {/* RESPONSIVE IMAGE */}
        <div className="relative w-full aspect-[4/4] sm:aspect-[5/4] md:aspect-[312/260] overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          {/* Top Condition Badging Block */}
          {product.tag && (
            <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#59200080] text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded flex items-center gap-1 shadow-sm z-10">
              🔥 {product.tag}
            </span>
          )}

          {/* Core Dynamic Floating Heart Icon Anchor */}
          <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-md transform active:scale-95 transition-all z-10">
            <Heart size={15} className="mt-0.5" />
          </button>

          {/* CART ACTIONS FLOATING OVERLAY VIEW */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="w-full max-w-[180px] bg-transparent border border-white text-white text-[11px] sm:text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 hover:bg-white hover:text-black transition-colors duration-200">
              <span>+ Add to cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Core Descriptive Text Details Section */}
      <div className="pt-3 pb-1 flex flex-col flex-1">
        <h4 className="text-[13px] sm:text-sm font-normal text-gray-700 tracking-wide line-clamp-1">
          {product.title}
        </h4>

        {/* Rating Matrix View Row */}
        <div className="flex items-center gap-1 mt-1 flex-wrap">
          <Star
            size={13}
            fill="#f2a654"
            className="text-[#f2a654]"
          />
          <span className="text-[11px] font-bold text-gray-800">
            {product.rating}
          </span>
          <span className="text-[11px] text-gray-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Currency Value Frame block wrapper */}
        <div className="flex items-baseline gap-2 mt-2 flex-wrap">
          <span className="text-sm font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="text-[11px] text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>

      {/* MOBILE FILTER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileFilterOpen(false)}
          />

          <div className="relative ml-0 mr-auto flex h-full w-full max-w-[320px] flex-col overflow-y-auto bg-white py-4 pb-12 px-5 shadow-xl">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h2 className="text-base font-bold text-gray-900">Filters</h2>

              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-xl font-bold p-1"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <FilterGroup
                title="Recipient (1)"
                items={[
                  { label: "Him", checked: false },
                  { label: "Her", checked: true },
                  { label: "Kids", checked: false },
                  { label: "Wife", checked: false },
                  { label: "Husband", checked: false },
                  { label: "Mother", checked: false },
                  { label: "Father", checked: false },
                ]}
              />

              <FilterGroup
                title="Occasion (1)"
                items={[
                  { label: "Birthday", checked: false },
                  { label: "Anniversary", checked: true },
                  { label: "Wedding", checked: false },
                  { label: "Valentines Day", checked: false },
                  { label: "Christmas", checked: false },
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ title, items }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-100 pb-4 pt-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-xs font-bold text-gray-900 mb-3 cursor-pointer group"
      >
        <span>{title}</span>

        <ChevronDown
          size={14}
          className={`text-gray-400 group-hover:text-black transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2.5 overflow-y-auto pr-1">
          {items.map((item, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2.5 text-xs text-gray-600 font-medium cursor-pointer select-none"
            >
              <input
                type="checkbox"
                defaultChecked={item.checked}
                className="w-3.5 h-3.5 accent-black cursor-pointer border border-[#A1A1A1] focus:ring-0 focus:outline-none"
              />

              <span
                className={item.checked ? "text-gray-900 font-semibold" : ""}
              >
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}