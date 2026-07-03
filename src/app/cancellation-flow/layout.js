    "use client";
    import React from 'react';
    import { usePathname, useRouter } from 'next/navigation';
    import { GiCheckMark } from "react-icons/gi";

    export default function CancellationLayout({ children }) {
        const pathname = usePathname();
        const router = useRouter();

        // 4-Step configuration with routes matching your directory structure
        const steps = [
            { id: 1, name: "Select Order", path: "/cancellation-flow/select-order" },
            { id: 2, name: "Cancel Order", path: "/cancellation-flow/cancel-order" },
            { id: 3, name: "Reason & Confirm", path: "/cancellation-flow/reason-confirm" },
            { id: 4, name: "Refund Initiated", path: "/cancellation-flow/refund-initiated" }
        ];

        // Current active step object nikalenge path ke hisab se
        const activeStep = steps.find((s) => pathname.includes(s.path));
        
        // Agar koi path match na kare toh default fallback heading "Select Order" rahegi
        const currentHeading = activeStep ? activeStep.name : "Select Order";

        // Find custom dynamic progression index matching Checkout Layout style
        const currentStepIndex = steps.findIndex((s) => pathname.includes(s.path));
        
        return (
            <div className="w-full bg-white font-sans min-h-screen">
                {/* ================= HERO BANNER SECTION (DYNAMIC HEADING) ================= */}
                <div    
                    className="relative w-full h-[300px] md:h-[520px] bg-cover bg-center flex items-center justify-center text-white"
                    style={{ 
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/loyalty-bg.png')` 
                    }}
                >
                    {/* Yahan heading dynamic ho gayi hai */}
                    <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide transition-all duration-300">
                        {currentHeading}
                    </h1>   
                </div>

                {/* ================= 4-STEP PROGRESS INDICATOR (CHECKOUT STYLE MATCH) ================= */}
                <div className="max-w-7xl mx-auto my-10 px-4">
                    <div className="flex items-center justify-center max-w-4xl mx-auto">
                        {steps.map((step, index) => {
                            const isActive = pathname.includes(step.path);
                            const isCompleted = currentStepIndex > index;

                            return (
                                <div key={step.id} className="flex items-center flex-1 last:flex-none">
                                    {/* Step Item Trigger Button */}
                                    <div 
                                        className="flex flex-col items-center cursor-pointer min-w-[90px]"
                                        onClick={() => router.push(step.path)}
                                    >
                                        {/* Step Square Box (Exactly matching your Checkout CSS rules) */}
                                        <div className={`w-9 h-8 rounded text-xs flex items-center justify-center font-medium transition-colors shadow-sm
                                            ${isActive 
                                                ? "bg-[#936E3B] text-white" 
                                                : isCompleted 
                                                    ? "bg-[#966B34] text-[#FFFFFF] font-bold text-[18px]" 
                                                    : "bg-[#D9D9D9] text-[#020907]"
                                            }`}
                                        >
                                            {isCompleted ? <GiCheckMark /> : step.id}
                                        </div>
                                        
                                        {/* Step Name */}
                                        <span className={`text-[13px] mt-2 font-medium text-center tracking-wide max-w-[120px]
                                            ${isActive ? "text-black font-semibold" : "text-[#020907]"}`}>
                                            {step.name}
                                        </span>
                                    </div>
                                    
                                    {/* Dashed Line Connection Line */}
                                    {index < steps.length - 1 && (
                                        <div className="h-[1px] border-t border-dashed border-[#353A39] flex-grow mx-2 md:mx-0" />
                                    )}
                                </div>
                            );
                        })}
                    </div>                                                                          
                </div>

                {/* ================= DYNAMIC CHILD PAGES CONTENT ================= */}
                <div className=" py-12 ">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </div>  
        );
    }           