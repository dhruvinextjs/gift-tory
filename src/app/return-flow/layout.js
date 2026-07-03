// "use client";
// import React from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { GiCheckMark } from "react-icons/gi";

// export default function ReturnReplaceLayout({ children }) {
//     const pathname = usePathname();
//     const router = useRouter();

//     // 3-Step configuration based on the uploaded image
//     const steps = [
//         { id: 1, name: "Select Order", path: "/return-flow/select-order" },
//         { id: 2, name: "Issues & Photos", path: "/return-flow/issues-photos" },
//         { id: 3, name: "Confirmed", path: "/return-flow/confirmed" }
//     ];

//     // Current active step index nikalenge path ke hisab se
//     const currentStepIndex = steps.findIndex((s) => pathname.includes(s.path));

//     return (
//         <div className="w-full bg-white font-sans min-h-screen">
//             {/* ================= HERO BANNER SECTION ================= */}
//             <div    
//                 className="relative w-full h-[250px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
//                 style={{ 
//                     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/loyalty-bg.png')` 
//                 }}
//             >
//                 {/* Image ke hisab se constant heading "Return or Replace" */}
//                 <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-wide">
//                     Return or Replace
//                 </h1>   
//             </div>

//             {/* ================= 3-STEP PROGRESS INDICATOR ================= */}
//             <div className="max-w-7xl mx-auto my-12 px-4">
//                 <div className="flex items-center justify-center max-w-xl mx-auto">
//                     {steps.map((step, index) => {
//                         const isActive = pathname.includes(step.path);
//                         const isCompleted = currentStepIndex > index;

//                         return (
//                             <div key={step.id} className="flex items-center flex-1 last:flex-none">
//                                 {/* Step Item Trigger Button */}
//                                 <div 
//                                     className="flex flex-col items-center cursor-pointer min-w-[100px]"
//                                     onClick={() => router.push(step.path)}
//                                 >
//                                     {/* Step Square/Rounded Box */}
//                                     <div className={`w-9 h-8 rounded text-xs flex items-center justify-center font-medium transition-colors shadow-sm
//                                         ${isActive 
//                                             ? "bg-[#936E3B] text-white" 
//                                             : isCompleted 
//                                                 ? "bg-[#966B34] text-[#FFFFFF] font-bold text-[16px]" 
//                                                 : "bg-[#D9D9D9] text-[#020907]"
//                                         }`}
//                                     >
//                                         {isCompleted ? <GiCheckMark /> : step.id}
//                                     </div>
                                    
//                                     {/* Step Name */}
//                                     <span className={`text-[12px] mt-2 font-medium text-center tracking-wide whitespace-nowrap
//                                         ${isActive ? "text-black font-semibold" : "text-[#020907]"}`}>
//                                         {step.name}
//                                     </span>
//                                 </div>
                                
//                                 {/* Dashed Line Connection Line */}
//                                 {index < steps.length - 1 && (
//                                     <div className="h-[1px] border-t border-dashed border-[#353A39] flex-grow mx-4 mb-5" />
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>                                                                                                            
//             </div>

//             {/* ================= DYNAMIC CHILD PAGES CONTENT ================= */}
//             <div className="pb-16 px-4">
//                 <div className="max-w-7xl mx-auto">
//                     {children}
//                 </div>
//             </div>
//         </div>  
//     );
// }

// "use client";
// import React from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { GiCheckMark } from "react-icons/gi";

// export default function ReturnReplaceLayout({ children }) {
//     const pathname = usePathname();
//     const router = useRouter();

//     // 3-Step configuration based on the uploaded image
//     const steps = [
//         { id: 1, name: "Select Order", path: "/return-flow/select-order" },
//         { id: 2, name: "Issues & Photos", path: "/return-flow/issue-photos" },
//         { id: 3, name: "Confirmed", path: "/return-flow/confirmed" }
//     ];

//     // Current active step index nikalenge path ke hisab se
//     const currentStepIndex = steps.findIndex((s) => pathname.includes(s.path));

//     // Banner heading current step ke naam se match karega (Select Order pe "Return or Replace" dikhega)
//     const activeStep = steps[currentStepIndex] || steps[0];
//     const bannerHeading = activeStep.name === "Select Order" ? "Return or Replace" : activeStep.name;

//     return (
//         <div className="w-full bg-white font-sans min-h-screen">
//             {/* ================= HERO BANNER SECTION ================= */}
//             <div    
//                 className="relative w-full h-[250px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
//                 style={{ 
//                     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/loyalty-bg.png')` 
//                 }}
//             >
//                 {/* Heading ab step ke hisab se dynamic hai */}
//                 <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-wide">
//                     {bannerHeading}
//                 </h1>   
//             </div>

//             {/* ================= 3-STEP PROGRESS INDICATOR ================= */}
//             <div className="max-w-7xl mx-auto my-12 px-4">
//                 <div className="flex items-center justify-center max-w-xl mx-auto">
//                     {steps.map((step, index) => {
//                         const isActive = pathname.includes(step.path);
//                         const isCompleted = currentStepIndex > index;

//                         return (
//                             <div key={step.id} className="flex items-center flex-1 last:flex-none">
//                                 {/* Step Item Trigger Button */}
//                                 <div 
//                                     className="flex flex-col items-center cursor-pointer min-w-[100px]"
//                                     onClick={() => router.push(step.path)}
//                                 >
//                                     {/* Step Square/Rounded Box */}
//                                     <div className={`w-9 h-8 rounded text-xs flex items-center justify-center font-medium transition-colors shadow-sm
//                                         ${isActive 
//                                             ? "bg-[#936E3B] text-white" 
//                                             : isCompleted 
//                                                 ? "bg-[#966B34] text-[#FFFFFF] font-bold text-[16px]" 
//                                                 : "bg-[#D9D9D9] text-[#020907]"
//                                         }`}
//                                     >
//                                         {isCompleted ? <GiCheckMark /> : step.id}
//                                     </div>
                                    
//                                     {/* Step Name */}
//                                     <span className={`text-[12px] mt-2 font-medium text-center tracking-wide whitespace-nowrap
//                                         ${isActive ? "text-black font-semibold" : "text-[#020907]"}`}>
//                                         {step.name}
//                                     </span>
//                                 </div>
                                
//                                 {/* Dashed Line Connection Line */}
//                                 {index < steps.length - 1 && (
//                                     <div className="h-[1px] border-t border-dashed border-[#353A39] flex-grow mx-4 mb-5" />
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>                                                                                                            
//             </div>

//             {/* ================= DYNAMIC CHILD PAGES CONTENT ================= */}
//             <div className="pb-16 px-4">
//                 <div className="max-w-7xl mx-auto">
//                     {children}
//                 </div>
//             </div>
//         </div>  
//     );
// }

"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { GiCheckMark } from "react-icons/gi";

export default function ReturnReplaceLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    // 3-Step configuration based on the uploaded image
    // Har step ka apna banner background image hai
    const steps = [
        { id: 1, name: "Select Order", path: "/return-flow/select-order", bgImage: "/images/loyalty-bg.png" },
        { id: 2, name: "Issues & Photos", path: "/return-flow/issue-photos", bgImage: "/images/loyalty-bg1.png" },
        { id: 3, name: "Confirmed", path: "/return-flow/confirmed", bgImage: "/images/loyalty-bg1.png" }
    ];

    // Current active step index nikalenge path ke hisab se
    const currentStepIndex = steps.findIndex((s) => pathname.includes(s.path));

    // Banner heading aur background ab step ke hisab se dynamic hai
    const activeStep = steps[currentStepIndex] || steps[0];
    const bannerHeading = activeStep.name === "Select Order" ? "Return or Replace" : activeStep.name;
    const bannerBgImage = activeStep.bgImage;
    
    return (
        <div className="w-full bg-white font-sans min-h-screen">
            {/* ================= HERO BANNER SECTION ================= */}
            <div    
                className="relative w-full h-[250px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${bannerBgImage}')` 
                }}
            >
                {/* Heading ab step ke hisab se dynamic hai */}
                <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-wide">
                    {bannerHeading}
                </h1>   
            </div>

            {/* ================= 3-STEP PROGRESS INDICATOR ================= */}
            <div className="max-w-7xl mx-auto my-12 px-4">
                <div className="flex items-center justify-center max-w-xl mx-auto">
                    {steps.map((step, index) => {
                        const isActive = pathname.includes(step.path);
                        const isCompleted = currentStepIndex > index;

                        return (
                            <div key={step.id} className="flex items-center flex-1 last:flex-none">
                                {/* Step Item Trigger Button */}
                                <div 
                                    className="flex flex-col items-center cursor-pointer min-w-[100px]"
                                    onClick={() => router.push(step.path)}
                                >
                                    {/* Step Square/Rounded Box */}
                                    <div className={`w-9 h-8 rounded text-xs flex items-center justify-center font-medium transition-colors shadow-sm
                                        ${isActive 
                                            ? "bg-[#936E3B] text-white" 
                                            : isCompleted 
                                                ? "bg-[#966B34] text-[#FFFFFF] font-bold text-[16px]" 
                                                : "bg-[#D9D9D9] text-[#020907]"
                                        }`}
                                    >
                                        {isCompleted ? <GiCheckMark /> : step.id}
                                    </div>
                                    
                                    {/* Step Name */}
                                    <span className={`text-[12px] mt-2 font-medium text-center tracking-wide whitespace-nowrap
                                        ${isActive ? "text-black font-semibold" : "text-[#020907]"}`}>
                                        {step.name}
                                    </span>
                                </div>
                                
                                {/* Dashed Line Connection Line */}
                                {index < steps.length - 1 && (
                                    <div className="h-[1px] border-t border-dashed border-[#353A39] flex-grow mx-4 mb-5" />
                                )}
                            </div>
                        );
                    })}
                </div>                                                                                                            
            </div>

            {/* ================= DYNAMIC CHILD PAGES CONTENT ================= */}
            <div className="pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </div>
        </div>  
    );
}