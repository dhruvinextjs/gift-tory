import React from 'react';
import { Star, ShieldCheck, Truck } from 'lucide-react';

export default function RateSection() {
  const stats = [
    {
      id: 1,
      value: "10,000+",
      label: "Happy Customer",
      icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    },
    {
      id: 2,
      value: "100%",
      label: "Secure Payment",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    },
    {
      id: 3,
      value: "1000+",
      label: "Cities Happily Delivering",
      icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#051611]">
      {/* Background image placeholder with absolute positioning.
        Replace "/api/placeholder/1920/400" with your actual heart-pattern image asset.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url('/images/rate-bg.jpg')` }}
      />

      {/* Exact Overlay requested: #0B2E24E5 (90% opacity deep green) */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: 'rgba(11, 46, 36, 0.92)' }}
      />

      {/* Main Responsive Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              {/* Individual Item Block */}
              <div className="flex items-center gap-5 text-white w-full md:w-auto justify-center md:justify-start lg:px-12">
                {/* Icon Layout */}
                <div className="shrink-0 flex items-center justify-center">
                  {stat.icon}
                </div>
                
                {/* Metrics Content */}
                <div className="flex flex-col items-start">
                  <span className="text-4xl md:text-[2.75rem] font-bold tracking-normal leading-none font-sans mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-white/85 tracking-wide font-normal">
                    {stat.label}
                  </span>
                </div>
              </div>

              {/* Exact Thin Divider Line - Hidden on Mobile, Flex on Desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-12 bg-white/20 self-center mx-4" />
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
}