// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useState, useRef } from 'react';
// import ReactCountryFlag from 'react-country-flag';
// import { IoIosArrowDown } from "react-icons/io";
// import { VscEye, VscEyeClosed } from 'react-icons/vsc';

// export default function Signup() {
//     const [step, setStep] = useState('signup'); 
//     const [showPassword, setShowPassword] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [password, setPassword] = useState('');
//       const router = useRouter();

//     const [otp, setOtp] = useState(['', '', '', '']);
//     const inputRefs = useRef([]);

//     const [selectedCountry, setSelectedCountry] = useState({
//         code: "+91",
//         countryCode: "IN",   
//         name: "India"
//     });

//     const [showCountryDropdown, setShowCountryDropdown] = useState(false);

//     // Countries List
//     const countries = [
//         { code: "+91", countryCode: "IN", name: "India" },
//         { code: "+1", countryCode: "US", name: "United States" },
//         { code: "+44", countryCode: "GB", name: "United Kingdom" },
//         { code: "+971", countryCode: "AE", name: "United Arab Emirates" },
//         { code: "+966", countryCode: "SA", name: "Saudi Arabia" },
//         { code: "+1", countryCode: "CA", name: "Canada" },
//         { code: "+61", countryCode: "AU", name: "Australia" },
//         { code: "+880", countryCode: "BD", name: "Bangladesh" },
//         { code: "+49", countryCode: "DE", name: "Germany" },
//     ];

//     const handleCountrySelect = (country) => {
//         setSelectedCountry(country);
//         setShowCountryDropdown(false);
//     };

//     const handleOtpChange = (element, index) => {
//         if (isNaN(element.value)) return false;

//         const newOtp = [...otp];
//         newOtp[index] = element.value;
//         setOtp(newOtp);

//         if (element.value !== '' && index < 3) {
//             inputRefs.current[index + 1].focus();
//         }
//     };

//     const handleOtpKeyDown = (e, index) => {
//         if (e.key === 'Backspace' && !otp[index] && index > 0) {
//             inputRefs.current[index - 1].focus();
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
//             <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-300">

//                 {/* Logo Section */}
//                 <div className="flex justify-center mb-8">
//                     <Image
//                         src="/images/Logo.png"
//                         alt="Gifttory Logo"
//                         width={220}
//                         height={100}
//                         priority
//                         unoptimized
//                         className="w-52 h-auto object-contain"
//                     />
//                 </div>

//                 {/* STEP 1: SIGN UP FORM */}
//                 {step === 'signup' && (
//                     <>
//                         <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Sign Up</h2>
//                         <form className="space-y-6">
//                             {/* Phone Number */}
//                             <div>
//                                 <label className="block text-sm font-bold text-[#020907] mb-1">Phone number</label>
//                                 <div className="relative">
//                                     <div className="flex border border-[#DFDFDF] rounded-lg overflow-hidden">
//                                         <div
//                                             className="flex items-center px-2 py-3 hover:bg-gray-100 transition-colors min-w-[60px] cursor-pointer relative"
//                                             onClick={() => setShowCountryDropdown(!showCountryDropdown)}
//                                         >
//                                             <div className="absolute right-0 h-5 w-[1px] bg-[#DFDFDF]"></div>
//                                             <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
//                                                 <ReactCountryFlag
//                                                     countryCode={selectedCountry.countryCode}
//                                                     svg
//                                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                                     title={selectedCountry.name}
//                                                 />
//                                             </div>
//                                             <IoIosArrowDown className="ml-auto text-[#020907] font-bold text-md" />
//                                         </div>

//                                         <input
//                                             type="tel"
//                                             value={phoneNumber}
//                                             onChange={(e) => setPhoneNumber(e.target.value)}
//                                             placeholder="Enter phone number"
//                                             className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder:text-[#353A39]"
//                                         />
//                                     </div>

//                                     {showCountryDropdown && (
//                                         <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-2 max-h-72 overflow-auto">
//                                             {countries.map((country, index) => (
//                                                 <div
//                                                     key={index}
//                                                     onClick={() => handleCountrySelect(country)}
//                                                     className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
//                                                 >
//                                                     <ReactCountryFlag
//                                                         countryCode={country.countryCode}
//                                                         svg
//                                                         style={{ width: "28px", height: "20px", borderRadius: "4px" }}
//                                                     />
//                                                     <span className="font-medium w-12">{country.code}</span>
//                                                     <span className="text-gray-600">{country.name}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Password */}
//                             <div>
//                                 <label className="block text-sm font-bold text-[#020907] mb-1">Password</label>
//                                 <div className="relative border border-gray-300 rounded-lg">
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="Enter password"
//                                         className="w-full px-4 py-2 outline-none text-[#000000] placeholder:text-[#353A39] pr-12"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                                     >
//                                         {showPassword ? <VscEye className="text-xl text-[#000000]" /> : <VscEyeClosed className="text-xl text-[#000000]" />}
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Click करने पर OTP स्क्रीन पर जाने के लिए सेट किया */}
//                             <button
//                                 type="button"
//                                 onClick={() => setStep('otp')}
//                                 className="w-full bg-[#0B2E24] hover:bg-[#071f18] transition-colors text-white font-bold py-3 rounded-xl text-sm"
//                             >
//                                 Request OTP
//                             </button>

//                             <button
//                                 type="button"
//                                 className="w-full border border-[#0B2E24] transition-colors text-[#0B2E24] font-bold py-2 rounded-xl text-sm"
//                             >
//                                 Continue as guest
//                             </button>

//                             <div className="text-center text-xs text-gray-600">
//                                 Already have an account?{' '}
//                                 <Link href="/signin" className="text-[#0B2E24] font-bold">
//                                     Sign in
//                                 </Link>
//                             </div>
//                         </form>
//                     </>
//                 )}

//                 {/* STEP 2: OTP / MPIN DESIGN (IMAGE STYLE SAME TO SAME) */}
//                 {step === 'otp' && (
//                     <div>
//                         <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Enter OTP</h2>
//                         <p className="text-xs text-[#353A39] mb-6 text-lef  t">We have sent OTP on your email for verification.</p>

//                         <div className="flex justify-start gap-2 mb-4">
//                             {otp.map((data, index) => (
//                                 <input
//                                     key={index}
//                                     type="text"
//                                     inputMode="numeric"
//                                     maxLength="1"
//                                     ref={(el) => (inputRefs.current[index] = el)}
//                                     value={data}
//                                     onChange={(e) => handleOtpChange(e.target, index)}
//                                     onKeyDown={(e) => handleOtpKeyDown(e, index)}
//                                     className="w-22 h-14 border border-[#DFDFDF] rounded-xl text-lg text-[#0B2E24] text-center outline-none transition-all"
//                                 />
//                             ))}
//                         </div>

//                     <div className="mb-6">
//                             <p className="text-sm text-[#4E5251]">Didn't receive an OTP?</p>
//                             <button
//                                 type="button"
//                                 className="text-sm text-[#6549E0] font-bold hover:underline mt-0.5"
//                             >
//                                 Resend in 0:30s
//                             </button>
//                         </div>

//                         <button
//                             type="button"
//                              onClick={() => router.push("/")}
//                             className="w-full bg-[#0B2E24] hover:bg-[#051712] transition-colors text-white font-bold py-3 rounded-lg text-sm mb-4"
//                         >
//                             Done
//                         </button>
//                     </div>
//                 )}

//             </div>
//         </div>
//     );
// }

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useState, useRef } from 'react';
// import ReactCountryFlag from 'react-country-flag';
// import { IoIosArrowDown } from "react-icons/io";
// import { VscEye, VscEyeClosed } from 'react-icons/vsc';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { requestOtp, verifyOtp } from '@/redux/slices/AuthSlice';

// export default function Signup() {
//     const [step, setStep] = useState('signup');
//     const [showPassword, setShowPassword] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();
//     const dispatch = useDispatch();

//     // Redux se loading states
//     const { loadingRequestOtp, loadingVerifyOtp } = useSelector((state) => state.auth);

//     const [otp, setOtp] = useState(['', '', '', '']);
//     const inputRefs = useRef([]);

//     const [selectedCountry, setSelectedCountry] = useState({
//         code: "+91",
//         countryCode: "IN",
//         name: "India"
//     });

//     const [showCountryDropdown, setShowCountryDropdown] = useState(false);

//     // Countries List
//     const countries = [
//         { code: "+91", countryCode: "IN", name: "India" },
//         { code: "+1", countryCode: "US", name: "United States" },
//         { code: "+44", countryCode: "GB", name: "United Kingdom" },
//         { code: "+971", countryCode: "AE", name: "United Arab Emirates" },
//         { code: "+966", countryCode: "SA", name: "Saudi Arabia" },
//         { code: "+1", countryCode: "CA", name: "Canada" },
//         { code: "+61", countryCode: "AU", name: "Australia" },
//         { code: "+880", countryCode: "BD", name: "Bangladesh" },
//         { code: "+49", countryCode: "DE", name: "Germany" },
//     ];

//     const handleCountrySelect = (country) => {
//         setSelectedCountry(country);
//         setShowCountryDropdown(false);
//     };

//     const handleOtpChange = (element, index) => {
//         if (isNaN(element.value)) return false;

//         const newOtp = [...otp];
//         newOtp[index] = element.value;
//         setOtp(newOtp);

//         if (element.value !== '' && index < 3) {
//             inputRefs.current[index + 1].focus();
//         }
//     };

//     const handleOtpKeyDown = (e, index) => {
//         if (e.key === 'Backspace' && !otp[index] && index > 0) {
//             inputRefs.current[index - 1].focus();
//         }
//     };

//     // Step 1: Request OTP API call
//     const handleRequestOtp = async () => {
//         if (!phoneNumber.trim()) {
//             toast.error("Please enter your phone number");
//             return;
//         }
//         if (!password.trim()) {
//             toast.error("Please enter your password");
//             return;
//         }

//         const resultAction = await dispatch(
//             requestOtp({ phone: phoneNumber, password })
//         );

//         if (requestOtp.fulfilled.match(resultAction)) {
//             console.log("OTP Response:", resultAction.payload);
//             console.log("OTP (for testing):", resultAction.payload?.otp);
//             setStep('otp');
//         }
//     };

//     // Step 2: Verify OTP API call
//     const handleVerifyOtp = async () => {
//         const otpValue = otp.join('');

//         if (otpValue.length < 4) {
//             toast.error("Please enter complete 4 digit OTP");
//             return;
//         }

//         const resultAction = await dispatch(
//             verifyOtp({ phone: phoneNumber, otp: otpValue })
//         );

//         if (verifyOtp.fulfilled.match(resultAction)) {
//             router.push("/");
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
//             <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-300">

//                 {/* Logo Section */}
//                 <div className="flex justify-center mb-8">
//                     <Image
//                         src="/images/Logo.png"
//                         alt="Gifttory Logo"
//                         width={220}
//                         height={100}
//                         priority
//                         unoptimized
//                         className="w-52 h-auto object-contain"
//                     />
//                 </div>

//                 {/* STEP 1: SIGN UP FORM */}
//                 {step === 'signup' && (
//                     <>
//                         <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Sign Up</h2>
//                         <form className="space-y-6">
//                             {/* Phone Number */}
//                             <div>
//                                 <label className="block text-sm font-bold text-[#020907] mb-1">Phone number</label>
//                                 <div className="relative">
//                                     <div className="flex border border-[#DFDFDF] rounded-lg overflow-hidden">
//                                         <div
//                                             className="flex items-center px-2 py-3 hover:bg-gray-100 transition-colors min-w-[60px] cursor-pointer relative"
//                                             onClick={() => setShowCountryDropdown(!showCountryDropdown)}
//                                         >
//                                             <div className="absolute right-0 h-5 w-[1px] bg-[#DFDFDF]"></div>
//                                             <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
//                                                 <ReactCountryFlag
//                                                     countryCode={selectedCountry.countryCode}
//                                                     svg
//                                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                                     title={selectedCountry.name}
//                                                 />
//                                             </div>
//                                             <IoIosArrowDown className="ml-auto text-[#020907] font-bold text-md" />
//                                         </div>

//                                         <input
//                                             type="tel"
//                                             value={phoneNumber}
//                                             onChange={(e) => setPhoneNumber(e.target.value)}
//                                             placeholder="Enter phone number"
//                                             className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder:text-[#353A39]"
//                                         />
//                                     </div>

//                                     {showCountryDropdown && (
//                                         <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-2 max-h-72 overflow-auto">
//                                             {countries.map((country, index) => (
//                                                 <div
//                                                     key={index}
//                                                     onClick={() => handleCountrySelect(country)}
//                                                     className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
//                                                 >
//                                                     <ReactCountryFlag
//                                                         countryCode={country.countryCode}
//                                                         svg
//                                                         style={{ width: "28px", height: "20px", borderRadius: "4px" }}
//                                                     />
//                                                     <span className="font-medium w-12">{country.code}</span>
//                                                     <span className="text-gray-600">{country.name}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Password */}
//                             <div>
//                                 <label className="block text-sm font-bold text-[#020907] mb-1">Password</label>
//                                 <div className="relative border border-gray-300 rounded-lg">
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="Enter password"
//                                         className="w-full px-4 py-2 outline-none text-[#000000] placeholder:text-[#353A39] pr-12"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                                     >
//                                         {showPassword ? <VscEye className="text-xl text-[#000000]" /> : <VscEyeClosed className="text-xl text-[#000000]" />}
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Request OTP - ab yeh dynamic API call karta hai */}
//                             <button
//                                 type="button"
//                                 onClick={handleRequestOtp}
//                                 disabled={loadingRequestOtp}
//                                 className="w-full bg-[#0B2E24] hover:bg-[#071f18] transition-colors text-white font-bold py-3 rounded-xl text-sm"
//                             >
//                                 {loadingRequestOtp ? "Please wait..." : "Request OTP"}
//                             </button>

//                             <button
//                                 type="button"
//                                 className="w-full border border-[#0B2E24] transition-colors text-[#0B2E24] font-bold py-2 rounded-xl text-sm"
//                             >
//                                 Continue as guest
//                             </button>

//                             <div className="text-center text-xs text-gray-600">
//                                 Already have an account?{' '}
//                                 <Link href="/signin" className="text-[#0B2E24] font-bold">
//                                     Sign in
//                                 </Link>
//                             </div>
//                         </form>
//                     </>
//                 )}

//                 {/* STEP 2: OTP / MPIN DESIGN (IMAGE STYLE SAME TO SAME) */}
//                 {step === 'otp' && (
//                     <div>
//                         <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Enter OTP</h2>
//                         <p className="text-xs text-[#353A39] mb-6 text-lef  t">We have sent OTP on your email for verification.</p>

//                         <div className="flex justify-start gap-2 mb-4">
//                             {otp.map((data, index) => (
//                                 <input
//                                     key={index}
//                                     type="text"
//                                     inputMode="numeric"
//                                     maxLength="1"
//                                     ref={(el) => (inputRefs.current[index] = el)}
//                                     value={data}
//                                     onChange={(e) => handleOtpChange(e.target, index)}
//                                     onKeyDown={(e) => handleOtpKeyDown(e, index)}
//                                     className="w-22 h-14 border border-[#DFDFDF] rounded-xl text-lg text-[#0B2E24] text-center outline-none transition-all"
//                                 />
//                             ))}
//                         </div>

//                         <div className="mb-6">
//                             <p className="text-sm text-[#4E5251]">Didn't receive an OTP?</p>
//                             <button
//                                 type="button"
//                                 onClick={handleRequestOtp}
//                                 className="text-sm text-[#6549E0] font-bold hover:underline mt-0.5"
//                             >
//                                 Resend in 0:30s
//                             </button>
//                         </div>

//                         <button
//                             type="button"
//                             onClick={handleVerifyOtp}
//                             disabled={loadingVerifyOtp}
//                             className="w-full bg-[#0B2E24] hover:bg-[#051712] transition-colors text-white font-bold py-3 rounded-lg text-sm mb-4"
//                         >
//                             {loadingVerifyOtp ? "Verifying..." : "Done"}
//                         </button>
//                     </div>
//                 )}

//             </div>
//         </div>
//     );
// }

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { IoIosArrowDown } from "react-icons/io";
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { requestOtp, verifyOtp } from '@/redux/slices/AuthSlice';

export default function Signup() {
    const [step, setStep] = useState('signup');
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    // Redux se loading states
    const { loadingRequestOtp, loadingVerifyOtp } = useSelector((state) => state.auth);

    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const [selectedCountry, setSelectedCountry] = useState({
        code: "+91",
        countryCode: "IN",
        name: "India"
    });

    const [showCountryDropdown, setShowCountryDropdown] = useState(false);

    // Countries List
    const countries = [
        { code: "+91", countryCode: "IN", name: "India" },
        { code: "+1", countryCode: "US", name: "United States" },
        { code: "+44", countryCode: "GB", name: "United Kingdom" },
        { code: "+971", countryCode: "AE", name: "United Arab Emirates" },
        { code: "+966", countryCode: "SA", name: "Saudi Arabia" },
        { code: "+1", countryCode: "CA", name: "Canada" },
        { code: "+61", countryCode: "AU", name: "Australia" },
        { code: "+880", countryCode: "BD", name: "Bangladesh" },
        { code: "+49", countryCode: "DE", name: "Germany" },
    ];

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setShowCountryDropdown(false);
    };

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value !== '' && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Step 1: Request OTP API call
    const handleRequestOtp = async () => {
        if (!phoneNumber.trim()) {
            toast.error("Please enter your phone number");
            return;
        }
        if (!password.trim()) {
            toast.error("Please enter your password");
            return;
        }

        const resultAction = await dispatch(
            requestOtp({ phone: phoneNumber, password })
        );

        if (requestOtp.fulfilled.match(resultAction)) {
            // ⚠️ Testing ke liye - backend response me jo random OTP aa raha hai use console me print kar rahe hain
            console.log("OTP Response:", resultAction.payload);
            console.log("OTP (for testing):", resultAction.payload?.otp);

            setStep('otp');
        }
    };

    // Step 2: Verify OTP API call
    const handleVerifyOtp = async () => {
        const otpValue = otp.join('');

        if (otpValue.length < 4) {
            toast.error("Please enter complete 4 digit OTP");
            return;
        }

        const resultAction = await dispatch(
            verifyOtp({ phone: phoneNumber, otp: otpValue })
        );

        if (verifyOtp.fulfilled.match(resultAction)) {
            // ✅ User/token ko localStorage me save karo taaki Header ko pata chale ki login ho gaya
            const payload = resultAction.payload;
            const userData = payload?.user || payload?.data || payload;

            localStorage.setItem("user", JSON.stringify(userData));
            if (payload?.token) {
                localStorage.setItem("token", payload.token);
            }

            // ✅ Header ko turant refresh karne ke liye custom event fire karo
            window.dispatchEvent(new Event("authChange"));

            // Signup complete -> seedha home page pe redirect
            setTimeout(() => {
                router.push("/");
            }, 800);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-300">

                {/* Logo Section */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/images/Logo.png"
                        alt="Gifttory Logo"
                        width={220}
                        height={100}
                        priority
                        unoptimized
                        className="w-52 h-auto object-contain"
                    />
                </div>

                {/* STEP 1: SIGN UP FORM */}
                {step === 'signup' && (
                    <>
                        <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Sign Up</h2>
                        <form className="space-y-6">
                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-bold text-[#020907] mb-1">Phone number</label>
                                <div className="relative">
                                    <div className="flex border border-[#DFDFDF] rounded-lg overflow-hidden">
                                        <div
                                            className="flex items-center px-2 py-3 hover:bg-gray-100 transition-colors min-w-[60px] cursor-pointer relative"
                                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                        >
                                            <div className="absolute right-0 h-5 w-[1px] bg-[#DFDFDF]"></div>
                                            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                                                <ReactCountryFlag
                                                    countryCode={selectedCountry.countryCode}
                                                    svg
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                    title={selectedCountry.name}
                                                />
                                            </div>
                                            <IoIosArrowDown className="ml-auto text-[#020907] font-bold text-md" />
                                        </div>

                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Enter phone number"
                                            className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder:text-[#353A39]"
                                        />
                                    </div>

                                    {showCountryDropdown && (
                                        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-2 max-h-72 overflow-auto">
                                            {countries.map((country, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleCountrySelect(country)}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
                                                >
                                                    <ReactCountryFlag
                                                        countryCode={country.countryCode}
                                                        svg
                                                        style={{ width: "28px", height: "20px", borderRadius: "4px" }}
                                                    />
                                                    <span className="font-medium w-12">{country.code}</span>
                                                    <span className="text-gray-600">{country.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-bold text-[#020907] mb-1">Password</label>
                                <div className="relative border border-gray-300 rounded-lg">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                        className="w-full px-4 py-2 outline-none text-[#000000] placeholder:text-[#353A39] pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <VscEye className="text-xl text-[#000000]" /> : <VscEyeClosed className="text-xl text-[#000000]" />}
                                    </button>
                                </div>
                            </div>

                            {/* Request OTP - ab yeh dynamic API call karta hai */}
                            <button
                                type="button"
                                onClick={handleRequestOtp}
                                disabled={loadingRequestOtp}
                                className="w-full bg-[#0B2E24] hover:bg-[#071f18] transition-colors text-white font-bold py-3 rounded-xl text-sm"
                            >
                                {loadingRequestOtp ? "Please wait..." : "Request OTP"}
                            </button>

                            <button
                                type="button"
                                className="w-full border border-[#0B2E24] transition-colors text-[#0B2E24] font-bold py-2 rounded-xl text-sm"
                            >
                                Continue as guest
                            </button>

                            <div className="text-center text-xs text-gray-600">
                                Already have an account?{' '}
                                <Link href="/signin" className="text-[#0B2E24] font-bold">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </>
                )}

                {/* STEP 2: OTP / MPIN DESIGN (IMAGE STYLE SAME TO SAME) */}
                {step === 'otp' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-[#353A39] mb-3">Enter OTP</h2>
                        <p className="text-xs text-[#353A39] mb-6 text-lef  t">We have sent OTP on your email for verification.</p>

                        <div className="flex justify-start gap-2 mb-4">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    value={data}
                                    onChange={(e) => handleOtpChange(e.target, index)}
                                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                    className="w-22 h-14 border border-[#DFDFDF] rounded-xl text-lg text-[#0B2E24] text-center outline-none transition-all"
                                />
                            ))}
                        </div>

                        <div className="mb-6">
                            <p className="text-sm text-[#4E5251]">Didn't receive an OTP?</p>
                            <button
                                type="button"
                                onClick={handleRequestOtp}
                                className="text-sm text-[#6549E0] font-bold hover:underline mt-0.5"
                            >
                                Resend in 0:30s
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={handleVerifyOtp}
                            disabled={loadingVerifyOtp}
                            className="w-full bg-[#0B2E24] hover:bg-[#051712] transition-colors text-white font-bold py-3 rounded-lg text-sm mb-4"
                        >
                            {loadingVerifyOtp ? "Verifying..." : "Done"}
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}