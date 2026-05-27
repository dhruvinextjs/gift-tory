// "use client";
// import { usePathname, useRouter } from "next/navigation";

// const steps = [
//   { id: 1, name: "Cart", path: "/checkout" },
//   { id: 2, name: "Address", path: "/checkout/address" },
//   { id: 3, name: "Personalize", path: "/checkout/personalize" },
//   { id: 4, name: "Add Your Story", path: "/checkout/add-story" },
//   { id: 5, name: "Payment", path: "/checkout/payment" },
// ];

// export default function CheckoutLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-white p-4 md:p-8 mt-20">
//       {/* --- STEPPER CONTAINER --- */}
//       <div className="max-w-7xl mx-auto mb-8 pb-6">
//         <div className="flex items-center justify-center max-w-4xl mx-auto">
//           {steps.map((step, index) => {
//             const isActive = pathname === step.path;
//             const isCompleted = steps.findIndex((s) => s.path === pathname) > index;

//             return (
//               <div key={step.id} className="flex items-center flex-1 last:flex-none">
//                 <div 
//                   className="flex flex-col items-center cursor-pointer min-w-[85px]"
//                   onClick={() => router.push(step.path)}
//                 >
//                   {/* Step Square Box */}
//                   <div className={`w-9 h-8 rounded text-xs flex items-center justify-center font-medium transition-colors shadow-sm
//                     ${isActive 
//                       ? "bg-[#936E3B] text-white" 
//                       : isCompleted 
//                         ? "bg-[#D9D9D9] text-[#7A7A7A]" 
//                         : "bg-[#D9D9D9] text-[#020907]"}`}
//                   >
//                     {step.id}
//                   </div>
//                   {/* Step Name */}
//                   <span className={`text-[13px] mt-2 font-medium whitespace-nowrap tracking-wide
//                     ${isActive ? "text-black font-semibold" : "text-[#020907]"}`}>
//                     {step.name}
//                   </span>
//                 </div>
                
//                 {/* Dashed Line Connection */}
//                 {index < steps.length - 1 && (
//                   <div className="h-[1px] border-t border-dashed border-[#353A39] flex-grow mx-2 md:mx-0" />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* --- CONTENT CONTAINER --- */}
//       <div className="max-w-7xl mx-auto">
//         {children}
//       </div>
//     </div>
//   );
// }


"use client";
import { usePathname, useRouter } from "next/navigation";
import { GiCheckMark } from "react-icons/gi";

const steps = [
  { id: 1, name: "Cart", path: "/checkout" },
  { id: 2, name: "Address", path: "/checkout/address" },
  { id: 3, name: "Personalize", path: "/checkout/personalize" },
  { id: 4, name: "Add Your Story", path: "/checkout/addyourstory" },
  { id: 5, name: "Payment", path: "/checkout/payment" },
];

export default function CheckoutLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 mt-20">
      {/* --- STEPPER CONTAINER --- */}
      <div className="max-w-7xl mx-auto mb-8 pb-6">
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isActive = pathname === step.path;
            const isCompleted = steps.findIndex((s) => s.path === pathname) > index;

            return (
              <div key={step.id} className="flex items-center flex-1 last:flex-none">
                <div 
                  className="flex flex-col items-center cursor-pointer min-w-[85px]"
                  onClick={() => router.push(step.path)}
                >
                  {/* Step Square Box */}
                  <div className={`w-9 h-8 rounded text-xs flex items-center justify-center font-medium transition-colors shadow-sm
                    ${isActive 
                      ? "bg-[#936E3B] text-white" 
                      : isCompleted 
                        ? "bg-[#966B34] text-[#FFFFFF] font-bold text-[18px]" 
                        : "bg-[#D9D9D9] text-[#020907]"}`}
                  >
                    {/* FIXED: Checkmark display modification if step is completed */}
                    {isCompleted ? <GiCheckMark/> : step.id}
                  </div>
                  {/* Step Name */}
                  <span className={`text-[13px] mt-2 font-medium whitespace-nowrap tracking-wide
                    ${isActive ? "text-black font-semibold" : "text-[#020907]"}`}>
                    {step.name}
                  </span>
                </div>
                
                {/* Dashed Line Connection */}
                {index < steps.length - 1 && (
                  <div className="h-[1px] border-t border-dashed border-[#353A39] flex-grow mx-2 md:mx-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}