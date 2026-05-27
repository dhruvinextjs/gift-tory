// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { LuTicketPercent as TicketIcon } from "react-icons/lu";
// import { IoMdHome, IoMdBriefcase } from "react-icons/io";
// import { MdLocationOn } from "react-icons/md";
// import { TbCurrentLocation } from "react-icons/tb";
// import { GoHome } from "react-icons/go";
// import { BsBriefcase } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";

// export default function AddressPage() {
//   const router = useRouter();
//   const [isCouponApplied, setIsCouponApplied] = useState(false);
//   const [addressType, setAddressType] = useState("Home"); // Home, Office, Other
//   const [multipleAddresses, setMultipleAddresses] = useState(false);

//   return (
//     <div className="w-full z-50 px-0 md:px-8 animate-fadeIn">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

//         {/* --- LEFT SIDE: SHIPPING ADDRESS FORM --- */}
//         <div className="lg:col-span-2 space-y-5">

//           {/* Deliver to Multiple Addresses Banner */}
//           <div className="border border-[#E5E5E5] rounded-xl p-4 bg-white flex justify-between items-center shadow-sm">
//             <div className="flex items-center gap-4">


//               <div>
//                 <Image
//                   src="/images/gift.png"
//                   alt="gift"
//                   width={40}
//                   height={40}
//                 />
//               </div>
//               <div>
//                 <h3 className="font-bold text-sm text-[#020907]">Deliver to Multiple Addresses</h3>
//                 <p className="text-xs text-[#353A39] mt-1">Each item can be delivered to a different person</p>
//               </div>
//             </div>
//             {/* Custom Toggle Switch */}
//             <label className="relative inline-flex items-center cursor-pointer select-none">
//               <input
//                 type="checkbox"
//                 checked={multipleAddresses}
//                 onChange={() => setMultipleAddresses(!multipleAddresses)}
//                 className="sr-only peer"
//               />
//               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#052316]"></div>
//             </label>
//           </div>

//           {/* Form Container Card */}
//           <div className="border border-[#E5E5E5] rounded-xl p-6 bg-white shadow-sm space-y-5">
//             {/* Use My Current Location Button */}
//             <button className="flex items-center gap-2 bg-[#0B2E24] text-white text-[13px] px-4 py-2.5 rounded-lg font-medium hover:bg-[#03170e] transition-colors shadow-sm">
//               <span className="text-base"><TbCurrentLocation  /></span> Use my current location
//             </button>

//             <h2 className="text-xl font-bold text-[#111111] pt-1">Shipping Address</h2>

//             {/* Address Input Fields */}
//             <div className="space-y-4 text-sm">
//               {/* Country/Region */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="font-bold text-[#111111]">Country/ Region</label>
//                 <select className="w-full border border-gray-300 rounded px-3 py-2.5 bg-white text-gray-700 outline-none focus:border-gray-500">
//                   <option>Select</option>
//                   <option>India</option>
//                 </select>
//               </div>

//               {/* Full Name */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="font-bold text-[#111111]">Full name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter full name"
//                   className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
//                 />
//               </div>

//               {/* Mobile Number */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="font-bold text-[#111111]">Mobile Number</label>
//                 <input
//                   type="text"
//                   placeholder="Enter mobile number"
//                   className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
//                 />
//               </div>

//               {/* Address Line 1 */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="font-bold text-[#111111]">Address 1</label>
//                 <input
//                   type="text"
//                   placeholder="Enter address"
//                   className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
//                 />
//               </div>

//               {/* Address Line 2 */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="font-bold text-[#111111]">Address 2</label>
//                 <input
//                   type="text"
//                   placeholder="Enter address"
//                   className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
//                 />
//               </div>

//               {/* Tri-Column Grid: Pincode, Town, State */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="flex flex-col gap-1.5">
//                   <label className="font-bold text-[#111111]">Pincode</label>
//                   <input
//                     type="text"
//                     placeholder="Enter pin code"
//                     className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1.5">
//                   <label className="font-bold text-[#111111]">Town</label>
//                   <input
//                     type="text"
//                     placeholder="Enter town"
//                     className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1.5">
//                   <label className="font-bold text-[#111111]">State</label>
//                   <select className="w-full border border-gray-300 rounded px-3 py-2.5 bg-white text-gray-700 outline-none focus:border-gray-500">
//                     <option>Select</option>
//                     <option>Gujarat</option>
//                     <option>Maharashtra</option>
//                     <option>Delhi</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Delivery Note */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="font-bold text-[#111111]">Delivery Note (Optional)</label>
//                 <textarea
//                   rows={3}
//                   placeholder="Enter message"
//                   className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39] resize-none"
//                 />
//               </div>
//             </div>

//             {/* --- ADDRESS TYPE SELECTOR BUTTONS --- */}
//             <div className="grid grid-cols-3 gap-4 pt-2">
//               <button
//                 type="button"
//                 onClick={() => setAddressType("Home")}
//                 className={`flex items-center justify-center gap-2 py-3 rounded text-[13px] font-medium transition-all border 
//                   ${addressType === "Home"
//                     ? "bg-[#936E3B] text-[#FFFFFF] border-[#936E3B]"
//                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
//               >
//                 <span className="text-lg"><GoHome /></span> Home
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setAddressType("Office")}
//                 className={`flex items-center justify-center gap-2 py-3 rounded text-[13px] font-medium transition-all border 
//                   ${addressType === "Office"
//                     ? "bg-[#936E3B] text-white border-[#936E3B]"
//                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
//               >
//                 <span className="text-lg"><BsBriefcase /></span> Office
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setAddressType("Other")}
//                 className={`flex items-center justify-center gap-2 py-3 rounded text-[13px] font-medium transition-all border 
//                   ${addressType === "Other"
//                     ? "bg-[#936E3B] text-white border-[#936E3B]"
//                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
//               >
//                 <span className="text-lg"><SlLocationPin /></span> Other
//               </button>
//             </div>

//             {/* --- ACTION BUTTONS (CANCEL & SAVE) --- */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
//               <button
//                 type="button"
//                 onClick={() => router.push("/checkout")}
//                 className="w-full border border-[#0B2E24] text-[#0B2E24] py-3 rounded-lg font-medium text-[14px] hover:bg-gray-50 transition-colors"
//               > 
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={() => router.push("/checkout/personalize")} // Next route sequence mapping trigger
//                 className="w-full bg-[#0B2E24] text-[#FFFFFF] py-3 rounded-lg font-medium text-[14px] hover:bg-[#03170e] transition-colors text-center"
//               >
//                 Save
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* --- RIGHT SIDE: STICKY CHECKOUT CARDS --- */}
//         <div className="space-y-5">
//           {/* Coupon Element */}
//           {!isCouponApplied ? (
//             <div
//               onClick={() => setIsCouponApplied(true)}
//               className="border border-dashed border-[#C3C3C3] p-3 rounded bg-[#F9F3F3] flex justify-between items-center cursor-pointer select-none transition-all duration-200"
//             >
//               <div className="flex items-center gap-2">
//                 <span className="text-lg text-gray-700"><TicketIcon /></span>
//                 <span className="text-[14px] font-medium text-[#000000]">Apply Coupons</span>
//               </div>
//             </div>
//           ) : (
//             <div className="border border-dashed border-gray-500 p-3.5 rounded-lg bg-[#FAF5F5] flex justify-between items-center transition-all duration-200">
//               <div className="flex flex-col gap-0.5">
//                 <span className="text-[15px] font-bold text-[#052316] tracking-wide">TINYSPAEK</span>
//                 <span className="text-[12px] text-[#353A39]">Offered applied on the bill</span>
//               </div>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsCouponApplied(false);
//                 }}
//                 className="text-[#FF0000] text-[13px] font-medium hover:underline px-1"
//               >
//                 Remove
//               </button>
//             </div>
//           )}

//           {/* Order Summary Box Component */}
//           <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm">
//             <h3 className="font-semibold text-[17px] text-[#111111] mb-4">Oder Summary</h3>

//             {/* Product Snapshot Miniature layout */}
//             <div className="flex gap-3 items-center mb-5">
//               <div className="w-12 h-12 bg-[#F3F0EA] rounded border border-gray-100 overflow-hidden flex-shrink-0">
//                 <div className="w-full h-full relative">
//                   <Image
//                     src="/images/image1.png"
//                     alt="Product Snapshot"
//                     fill
//                     sizes="(max-w-48px) 100vw"
//                     className="object-cover"
//                     priority
//                   />
//                 </div>
//               </div>
//               <span className="text-[13px] text-[#333333] font-bold line-clamp-1">Self Care Gift by Gifttory</span>
//             </div>

//             <h4 className="text-[13px] font-bold text-[#111111] border-t border-dashed pt-4 mb-3">
//               Product Details (2 items)
//             </h4>

//             {/* Price Calculations */}
//             <div className="space-y-3 text-[13px] text-[#555555] border-b border-dashed pb-4">
//               <div className="flex justify-between text-xs">
//                 <span className="text-[#353A39]">MRP Total</span>
//                 <span className="text-[#111111] font-medium">₹2,400</span>
//               </div>
//               <div className="flex justify-between text-xs">
//                 <span className="text-[#353A39]">MRP Discount</span>
//                 <span className="text-[#2939E2] font-medium">-₹288</span>
//               </div>
//               <div className="flex justify-between text-xs">
//                 <span className="text-[#353A39]">Delivery Charges</span>
//                 <span className="text-[#2939E2] font-medium tracking-wide">FREE</span>
//               </div>
//             </div>

//             {/* Total Pricing Valuation */}
//             <div className="flex justify-between items-center font-bold text-[#111111] my-5 text-[17px]">
//               <span className="font-semibold text-[15px]">Order Total:</span>
//               <span className="text-md font-bold">₹1,980</span>
//             </div>

//             {/* Continue flow trigger button */}
//             <button
//               onClick={() => router.push("/checkout/personalize")}
//               className="w-full bg-[#052316] text-white py-3.5 rounded-md font-bold text-[14px] tracking-wide hover:bg-[#03170e] transition-colors shadow-sm"
//             >
//               Continue to Checkout
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LuTicketPercent as TicketIcon } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { BsBriefcase } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { TbCurrentLocation } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

export default function AddressPage() {
  const router = useRouter();
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [addressType, setAddressType] = useState("Home"); // Home, Office, Other
  const [multipleAddresses, setMultipleAddresses] = useState(false);
  
  // States for flow control
  const [isSaved, setIsSaved] = useState(false); // Controls when to leave the form
  const [step, setStep] = useState(2); // Controls Step 2 (Address View) vs Step 3 (Cart/Delivery View)
  const [showPopup, setShowPopup] = useState(false); // Controls the popup alert

  // 1. SAVE BUTTON: Only shows popup message
  const handleSaveAddress = () => {
    setShowPopup(true);
  };

  // 2. ORDER SUMMARY BUTTON HANDLER (Handles all 3 steps)
  const handleMainFlowButtonClick = () => {
    if (!isSaved) {
      // Form -> Step 2 (Address View)
      setIsSaved(true);
      setStep(2);
    } else if (step === 2) {
      // Step 2 -> Step 3 (Product & Delivery View)
      setStep(3);
    } else {
      // Step 3 -> Agle page/Payment par bhejne ke liye (Optional logic)
     router.push("/checkout/personalize");
    }
  };

  // Automatically hide popup after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="w-full z-50 px-0 md:px-8 animate-fadeIn relative min-h-screen pb-10">
      
      {/* --- CUSTOM POPUP MESSAGE --- */}
      {showPopup && (
        <div className="fixed top-5 right-5 z-[100] bg-[#052316] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce border border-emerald-500">
          <FiCheckCircle className="text-xl text-emerald-400" />
          <div>
            <p className="font-bold text-sm">Success!</p>
            <p className="text-xs text-gray-300">Address has been saved successfully.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* --- LEFT SIDE: SHIPPING ADDRESS / CART CONTAINER --- */}
        <div className="lg:col-span-2 space-y-5">

          {/* Deliver to Multiple Addresses Banner - Hidden in Step 3 */}
          {step !== 3 && (
            <div className="border border-[#E5E5E5] rounded-xl p-4 bg-white flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src="/images/gift-box.png"
                    alt="gift"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#020907]">Deliver to Multiple Addresses</h3>
                  <p className="text-xs text-[#353A39] mt-1">Each item can be delivered to a different person</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={multipleAddresses}
                  onChange={() => setMultipleAddresses(!multipleAddresses)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#052316]"></div>
              </label>
            </div>
          )}

          {!isSaved ? (
            /* --- STEP 1: ORIGINAL FORM CONTAINER --- */
            <div className="border border-[#E5E5E5] rounded-xl p-6 bg-white shadow-sm space-y-5">
              <button className="flex items-center gap-2 bg-[#0B2E24] text-white text-[13px] px-4 py-2.5 rounded-lg font-medium hover:bg-[#03170e] transition-colors shadow-sm">
                <span className="text-base"><TbCurrentLocation /></span> Use my current location
              </button>

              <h2 className="text-xl font-bold text-[#111111] pt-1">Shipping Address</h2>

              <div className="space-y-4 text-sm">
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#111111]">Country/ Region</label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2.5 bg-white text-gray-700 outline-none focus:border-gray-500">
                    <option>India</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#111111]">Full name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#111111]">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#111111]">Address 1</label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#111111]">Address 2</label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#111111]">Pincode</label>
                    <input
                      type="text"
                      placeholder="Enter pin code"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#111111]">Town</label>
                    <input
                      type="text"
                      placeholder="Enter town"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#111111]">State</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2.5 bg-white text-gray-700 outline-none focus:border-gray-500">
                      <option>Gujarat</option>
                    </select>     
                  </div>                  
                </div>

                   <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#111111]">Delivery Note (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Enter message"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-gray-800 outline-none focus:border-gray-500 placeholder:text-[#353A39] resize-none"
                />
              </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setAddressType("Home")}
                  className={`flex items-center justify-center gap-2 py-3 rounded text-[13px] font-medium transition-all border ${addressType === "Home" ? "bg-[#936E3B] text-white border-[#936E3B]" : "bg-white text-gray-700 border-gray-300"}`}
                >
                  <GoHome className="text-lg" /> Home
                </button>
                <button
                  type="button"
                  onClick={() => setAddressType("Office")}
                  className={`flex items-center justify-center gap-2 py-3 rounded text-[13px] font-medium transition-all border ${addressType === "Office" ? "bg-[#936E3B] text-white border-[#936E3B]" : "bg-white text-gray-700 border-gray-300"}`}
                >
                  <BsBriefcase className="text-lg" /> Office
                </button>
                <button
                  type="button"
                  onClick={() => setAddressType("Other")}
                  className={`flex items-center justify-center gap-2 py-3 rounded text-[13px] font-medium transition-all border ${addressType === "Other" ? "bg-[#936E3B] text-white border-[#936E3B]" : "bg-white text-gray-700 border-gray-300"}`}
                >
                  <SlLocationPin className="text-lg" /> Other
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <button type="button" className="w-full border border-[#0B2E24] text-[#0B2E24] py-3 rounded-lg font-medium text-[14px]">
                  Cancel
                </button>
                <button type="button" onClick={handleSaveAddress} className="w-full bg-[#0B2E24] text-white py-3 rounded-lg font-medium text-[14px] hover:bg-[#03170e] transition-colors">
                  Save
                </button>
              </div>
            </div>
          ) : step === 2 ? (
            /* --- STEP 2: SAVED ADDRESS BADGE VIEW (IMAGE 1) --- */
            <div className="border border-[#E5E5E5] rounded-xl p-6 bg-white shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-[#111111]">Shipping Cart (1)</h2>
                <button 
                  onClick={() => setIsSaved(false)} 
                  className="border border-[#0B2E24] text-[#0B2E24] font-semibold text-xs px-4 py-2 rounded-lg hover:bg-gray-50 transition-all"
                >
                  Add new address
                </button>
              </div>

              <div className="border border-[#E5E5E5] bg-white rounded-xl p-4 max-w-sm relative shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-100 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/image1.png" 
                      alt="User avatar"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=LoremIpsum";
                      }}
                    />
                  </div>
                  <div className="text-xs text-[#353A39] space-y-1">
                    <h4 className="font-bold text-sm text-[#111111]">Lorem Ipsum</h4>
                    <p className="leading-relaxed">6th floor, Hillway SP Road, Ahmedabad, <br />Gujarat, 32145</p>
                    <p className="pt-1 text-[#353A39]"><span>Mobile:</span> 9945623457</p>
                    
                    <div className="flex items-center gap-6 pt-3 select-none">
                      <button onClick={() => setIsSaved(false)} className="flex items-center gap-1.5 text-[#FF0000] font-semibold hover:underline">
                        <RiDeleteBin6Line className="text-sm" /> Remove
                      </button>
                      <button onClick={() => setIsSaved(false)} className="flex items-center gap-1.5 text-[#353A39] font-semibold hover:underline">
                        <MdOutlineModeEdit className="text-base" /> Edit Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* --- STEP 3: PRODUCT ITEM DELIVERY DETAILS VIEW (IMAGE 2) --- */
            <div className="border border-[#E5E5E5] rounded-xl p-6 bg-white shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-[#111111]">Shipping Cart (1)</h2>
                <button 
                  onClick={() => { setIsSaved(false); setStep(2); }} 
                  className="border border-[#0B2E24] text-[#0B2E24] font-semibold text-xs px-4 py-2 rounded-lg hover:bg-gray-50 transition-all"
                >
                  Add new address
                </button>
              </div>

              {/* Product Card with Delivery Details */}
              <div className="border border-[#E5E5E5] bg-white rounded-xl p-4 flex justify-between items-start shadow-sm relative">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-[#F3F0EA] rounded-lg border border-gray-100 overflow-hidden flex-shrink-0 relative">
                    <Image
                      src="/images/best-seller1.png"
                      alt="Product Snapshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h4 className="font-bold text-sm text-[#111111]">Self Care Gift by Gifttory</h4>
                    <p className="text-xs text-[#353A39]">Estimated Delivery: <span className="font-semibold text-gray-900">Today</span></p>
                  </div>
                </div>
                
                <div className="text-right flex flex-col justify-between h-20">
                  <div className="space-y-0.5">
                    <p className="font-bold text-sm text-[#111111]">₹1,200</p>
                    <p className="text-[10px] text-gray-400 line-through">₹13.90</p>
                  </div>
                  <button 
                    onClick={() => { setIsSaved(false); setStep(2); }}
                    className="flex items-center gap-1 text-[#FF0000] font-semibold text-xs hover:underline mt-auto self-end"
                  >
                    <RiDeleteBin6Line className="text-sm" /> Remove
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- RIGHT SIDE: STICKY CHECKOUT CARDS --- */}
        <div className="space-y-5">
          {/* Top Address Mini Card View (Visible in Step 2 and Step 3) */}
          {isSaved && (
            <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-[#0B2E24] mt-0.5 text-base"><TbCurrentLocation /></span>
                <div className="text-xs text-[#353A39] w-full">
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-sm text-[#000000]">Lorem Ipsum</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded text-[#000000]">Home</span>
                  </div>
                  <p className="mt-1 text-[#353A39] line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <button 
                onClick={() => { setIsSaved(false); setStep(2); }}
                className="w-full text-center border border-[#0B2E24] rounded-xl py-2.5 text-xs font-bold text-[#0B2E24] hover:bg-gray-50 transition-all mt-2"
              >
                Change address
              </button>
            </div>
          )}

          {/* Coupon Element (Hidden in Step 2 & Step 3) */}
          {!isSaved && (
            <>
              {!isCouponApplied ? (
                <div
                  onClick={() => setIsCouponApplied(true)}
                  className="border border-dashed border-[#C3C3C3] p-3 rounded bg-[#F9F3F3] flex justify-between items-center cursor-pointer select-none transition-all duration-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-700"><TicketIcon /></span>
                    <span className="text-[14px] font-medium text-[#000000]">Apply Coupons</span>
                  </div>
                </div>
              ) : (
                <div className="border border-dashed border-gray-500 p-3.5 rounded-lg bg-[#FAF5F5] flex justify-between items-center transition-all duration-200">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-bold text-[#052316] tracking-wide">TINYSPAEK</span>
                    <span className="text-[12px] text-[#353A39]">Offered applied on the bill</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCouponApplied(false);
                    }}
                    className="text-[#FF0000] text-[13px] font-medium hover:underline px-1"
                  >
                    Remove
                  </button>
                </div>
              )}
            </>
          )}

          {/* Order Summary Box Component */}
          <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-[17px] text-[#111111] mb-4">Oder Summary</h3>

            {/* Product Snapshot */}
            <div className="flex gap-3 items-center mb-5">
              <div className="w-12 h-12 bg-[#F3F0EA] rounded border border-gray-100 overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/images/best-seller1.png"
                  alt="Product Snapshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-[13px] text-[#333333] font-bold line-clamp-1">Self Care Gift by Gifttory</span>
            </div>

            <h4 className="text-[13px] font-bold text-[#111111] border-t border-dashed pt-4 mb-3">
              Product Details (2 items)
            </h4>

            {/* Price Calculations */}
            <div className="space-y-3 text-[13px] text-[#555555] border-b border-dashed pb-4">
              <div className="flex justify-between text-xs">
                <span className="text-[#353A39]">MRP Total</span>
                <span className="text-[#111111] font-medium">₹2,400</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#353A39]">MRP Discount</span>
                <span className="text-[#2939E2] font-medium">-₹288</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#353A39]">Delivery Charges</span>
                <span className="text-[#2939E2] font-medium tracking-wide">FREE</span>
              </div>
            </div>

            {/* Total Pricing Valuation */}
            <div className="flex justify-between items-center font-bold text-[#111111] my-5 text-[17px]">
              <span className="font-semibold text-[15px]">Order Total:</span>
              <span className="text-md font-bold">₹1,980</span>
            </div>

            {/* Flow Trigger Button */}
            <button
              type="button"
              onClick={handleMainFlowButtonClick}
              className="w-full bg-[#052316] text-white py-3.5 rounded-md font-bold text-[14px] tracking-wide hover:bg-[#03170e] transition-colors shadow-sm"
            >
              {isSaved ? "Continue" : "Continue to Checkout"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
} 
