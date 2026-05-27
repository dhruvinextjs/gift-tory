import React from 'react';
import { Award, Truck, ShieldCheck, Headphones } from 'lucide-react';
import { TfiMedall } from 'react-icons/tfi';
import { IoMdLock } from 'react-icons/io';
import { MdOutlineSupportAgent } from 'react-icons/md';

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Every product is carefully selected and crafted to deliver a luxurious gifting experience that feels as special as the occasion.",
    icon: <TfiMedall className="w-10 h-10 text-[#0e2a22]" />,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "We ensure your gifts arrive on time, every time. Need it urgently? We've got express and same-day delivery options.",
    icon: <Truck className="w-10 h-10 text-[#0e2a22]" />,
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Shop with confidence using our safe and seamless payment methods, including UPI, cards, and wallets.",
    icon: <IoMdLock className="w-10 h-10 text-[#0e2a22]" />,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Have questions or need help? Our friendly support team is always here for you—anytime, anywhere.",
    icon: <MdOutlineSupportAgent className="w-10 h-10 text-[#0e2a22]" />,
  }
];

export default function WhyChooseUS() {
  return (
    <div className='bg-[#F7F7F7] py-20 px-6 md:px-16 '>
    <section className="max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-[#0e2a22] text-3xl font-serif font-bold mb-3">
          Why Choose Us?
        </h2>
        {/* Custom Underline as seen in image */}
        <div className="w-12 h-[3px] bg-[#0e2a22] rounded-full"></div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center text-center p-8 bg-white border border-[#DBDBDB] rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon Circle */}
            <div className="mb-6 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Title */}
            <p className="text-[#0e2a22] text-xl font-bold mb-4">
              {item.title}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}