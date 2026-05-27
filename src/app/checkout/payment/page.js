"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";
import { SlWallet } from "react-icons/sl";
import { MdQrCodeScanner } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";

export default function PaymentPage() {
  const router = useRouter();

  // Payment Method Selection State
  const [activeMethod, setActiveMethod] = useState("card");

  // Form Fields State
  const [country, setCountry] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMM, setExpiryMM] = useState("");
  const [expiryYYYY, setExpiryYYYY] = useState("");
  const [cvv, setCvv] = useState("");

  const paymentMethods = [
    { id: "card", label: "Card", icon: <IoCardOutline className="text-5xl" /> },
    { id: "cod", label: "COD", icon: <BsCashStack className="text-2xl" /> },
    { id: "wallet", label: "Wallet", icon: <SlWallet className="text-2xl" /> },
    {
      id: "qr",
      label: "Pay with QR",
      icon: <MdQrCodeScanner className="text-2xl" />,
    },
  ];

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    // router.push("/checkout/success");
  };

  return (
    <div className="w-full px-0 md:px-8 animate-fadeIn min-h-screen pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* --- LEFT SIDE: PAYMENT METHOD FORM --- */}
        <div className="lg:col-span-2 border border-[#DFDFDF] rounded-xl p-6 bg-white shadow-sm space-y-6">
          <div>
            <h2 className="text-base font-bold text-[#111111]">
              Payment Method
            </h2>
          </div>

          {/* Payment Methods Grid Tabs */}
          <div className="grid grid-cols-4 gap-3">
            {paymentMethods.map((method) => {
              const isSelected = activeMethod === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setActiveMethod(method.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all space-y-1.5 h-20
                    ${
                      isSelected
                        ? "border-[#0B2E24] bg-[#E7EAE9] text-black font-semibold"
                        : "border-[#DFDFDF] bg-white text-[#353A39]"
                    }`}
                >
                  {method.icon}
                  <span className="text-xs">{method.label}</span>
                </button>
              );
            })}
          </div>

          {/* Conditional Rendering Form based on Card selection */}
          {/* Conditional Rendering based on selected payment method */}
          {activeMethod === "card" ? (
            <form
              onSubmit={handlePlaceOrder}
              className="space-y-4 text-sm animate-fadeIn"
            >
              {/* Country/Region Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#111111]">
                  Country/ Region
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none bg-white cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>

              {/* Name on Card */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#111111]">Name on card</label>
                <input
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  placeholder="Enter name on card"
                  className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none placeholder:text-[#353A39]"
                />
              </div>

              {/* Card Number */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#111111]">Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="0000 0000 0000 0000"
                  className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none placeholder:text-[#353A39] tracking-wider"
                />
              </div>

              {/* Expiry & CVV Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#111111]">Expiry</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={2}
                      placeholder="MM"
                      value={expiryMM}
                      onChange={(e) => setExpiryMM(e.target.value)}
                      className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none text-center placeholder:text-[#353A39]"
                    />
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="YYYY"
                      value={expiryYYYY}
                      onChange={(e) => setExpiryYYYY(e.target.value)}
                      className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none text-center placeholder:text-[#353A39]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#111111]">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full border border-[#DFDFDF] rounded-lg px-3 py-2.5 text-[#353A39] outline-none placeholder:text-[#353A39]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#DFDFDF] text-[#353A39] font-bold px-8 py-2.5 rounded-lg shadow-sm text-sm transition-all"
                >
                  Place Order
                </button>
              </div>
            </form>
          ) : activeMethod === "cod" ? (
            /* =========================
      COD UI
  ========================= */
            <div className="animate-fadeIn">
              <div className="bg-[#F8F8F8] rounded-xl px-4 py-5 text-center ">
                <p className="text-[13px] leading-6 text-[#353A39] max-w-3xl mx-auto">
                  You will receive a call from our customer support executive,
                  24 hours before delivery time to confirm your order.
                </p>

                <p className="text-[13px] leading-6 text-[#353A39] mt-1">
                  Only after your confirmation a Cash on Delivery order will be
                  processed
                </p>
              </div>

              <div className="pt-8 flex flex-col items-center">
                <p className="text-[#111111] text-sm sm:text-base font-bold text-center">
                  Pay by Cash, when you receive your order.
                </p>

                <button
                  onClick={handlePlaceOrder}
                  className="mt-5 bg-[#DFDFDF] text-[#353A39] font-bold px-10 py-3 rounded-lg shadow-sm text-sm transition-all"
                >
                  Place Order
                </button>
              </div>
            </div>
          ) : activeMethod === "qr" ? (
            /* =========================
      QR PAYMENT UI
  ========================= */
            <div className="animate-fadeIn">
              <div className="bg-[#F8F8F8] rounded-xl border border-[#EFEFEF] px-4 py-6 flex flex-col items-center">
                {/* QR IMAGE */}
                <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/images/QR.png"
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* TEXT */}
                <p className="text-[12px] text-[#353A39] text-center mt-5 leading-5 max-w-md">
                  You will receive a collect request from Gifttory in the
                  UPI/PSP app you used to create your VPA
                </p>

                {/* PAYMENT APPS */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
                  <img
                    src="/images/phonepay.png"
                    alt="PhonePe"
                    className="h-5 object-contain"
                  />
                  <img
                    src="/images/paytm.png"
                    alt="Paytm"
                    className="h-8 object-contain"
                  />
                  <img
                    src="/images/google-pay.png"
                    alt="Gpay"
                    className="h-5 object-contain"
                  />
                  <img
                    src="/images/amazon-pay.png"
                    alt="Amazon Pay"
                    className="h-5 object-contain"
                  />
                </div>
              </div>

              <div className="pt-6 flex justify-center">
                <button
                  onClick={handlePlaceOrder}
                  className="bg-[#0B2E24] text-white font-bold px-8 sm:px-10 py-3 rounded-lg shadow-sm text-sm hover:bg-opacity-90 transition-all"
                >
                  Pay ₹1980 Now
                </button>
              </div>
            </div>
          ) : activeMethod === "wallet" ? (
            /* =========================
      WALLET UI
  ========================= */
            <div className="animate-fadeIn">
              <div className="bg-[#F8F8F8] rounded-xl border border-[#EFEFEF] px-4 py-6 flex flex-col items-center">
                {/* WALLET LOGOS */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  <img
                    src="/images/paytm-big.png"
                    alt="Paytm"
                    className="h-10 sm:h-12 object-contain"
                  />

                  <img
                    src="/images/amazon-pay.png"
                    alt="Amazon Pay"
                    className="h-10 sm:h-12 object-contain"
                  />
                </div>

                <p className="text-[12px] text-[#5A5A5A] mt-5 mb-3">
                  More Wallet Options
                </p>

                {/* SELECT */}
                <div className="w-full max-w-[320px]">
                  <select className="w-full border border-[#DFDFDF] rounded-lg px-3 py-3 text-sm text-[#353A39] outline-none bg-white">
                    <option>Choose a wallet</option>
                    <option>Paytm</option>
                    <option>Amazon Pay</option>
                    <option>PhonePe</option>
                    <option>Mobikwik</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 flex justify-center">
                <button
                  onClick={handlePlaceOrder}
                  className="bg-[#0B2E24] text-white font-bold px-8 sm:px-10 py-3 rounded-lg shadow-sm text-sm hover:bg-opacity-90 transition-all"
                >
                  Pay ₹1980 Now
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* --- RIGHT SIDE: ORDER SUMMARY SIDEBAR --- */}
        <div className="space-y-5">
          {/* Top Address card component */}
          <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[#0B2E24] mt-0.5 text-base">
                <TbCurrentLocation />
              </span>
              <div className="text-xs text-[#353A39] w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="font-bold text-sm text-[#000000]">
                    Lorem Ipsum
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded text-[#000000]">
                    Home
                  </span>
                </div>
                <p className="mt-1 text-[#353A39] line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push("/checkout/address")}
              className="w-full text-center border border-[#0B2E24] rounded-xl py-2.5 text-xs font-bold text-[#0B2E24] hover:bg-gray-50 transition-all mt-2"
            >
              Change address
            </button>
          </div>

          {/* Pricing Calculations Stack */}
          <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-[17px] text-[#111111] mb-4">
              Oder Summary
            </h3>

            {/* Snapshot Product Row */}
            <div className="flex gap-3 items-center mb-5">
              <div className="w-12 h-12 bg-[#F3F0EA] rounded border border-gray-100 overflow-hidden flex-shrink-0 relative">
                <img
                  src="/images/best-seller1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=100";
                  }}
                />
              </div>
              <span className="text-[13px] text-[#333333] font-bold line-clamp-1">
                Self Care Gift by Gifttory
              </span>
            </div>

            <h4 className="text-[13px] font-bold text-[#111111] border-t border-dashed border-[#DFDFDF] pt-4 mb-3">
              Product Details (2 items)
            </h4>

            {/* Calculations Base list */}
            <div className="space-y-3 text-[13px] text-[#555555] border-b border-dashed border-[#DFDFDF] pb-4">
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
                <span className="text-[#2939E2] font-medium tracking-wide">
                  FREE
                </span>
              </div>
            </div>

            {/* Total Summary Row */}
            <div className="flex justify-between items-center font-bold text-[#111111] mt-5 mb-4 text-[17px]">
              <span className="font-semibold text-[15px]">Order Total:</span>
              <span className="text-md font-bold">₹1,980</span>
            </div>

            {/* NEW ADDITION: Sender Details Section as per layout image */}
            <div className="border-t border-dashed border-[#DFDFDF] pt-4 space-y-3 text-xs">
              <div>
                <div className="flex justify-start items-center">
                  <span className="font-bold text-[#020907] text-sm">
                    Sender Detail
                  </span>
                  <button
                    onClick={() => router.push("/checkout/personalize")}
                    className="text-[#2939E2] text-sm font-medium underline ml-2"
                  >
                    (Change)
                  </button>
                </div>
                <div className="text-[#353A39] mt-1 space-y-0.5">
                  <p className="font-medium text-[#020907]">Lorem Ipsum</p>
                  <p>+91 9943586754</p>
                </div>
              </div>

              {/* Delivery Time Row */}
              <div className="pt-1">
                <div className="flex justify-start items-center">
                  <span className="font-bold text-[#111111] text-sm">
                    Delivery Time
                  </span>
                  <button
                    onClick={() => router.push("/checkout/personalize")}
                    className="text-[#2939E2] text-sm font-medium underline ml-2"
                  >
                    (Change)
                  </button>
                </div>
                <p className="text-[#353A39] mt-1 font-medium ">
                  05-06-2026 (10 PM - 2 PM)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
