import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { PostUrl } from "@/api/apiMethods"; // ⚠️ apne project ke hisaab se path check kar lena

/* ---------------------------------------------------
   1) REQUEST OTP  ->  POST api/user/auth/request-otp
--------------------------------------------------- */
export const requestOtp = createAsyncThunk(
    "auth/requestOtp",
    async ({ phone, password }, { rejectWithValue }) => {
        try {
            const response = await PostUrl("api/user/auth/request-otp", {
                phone,
                password,
            });

            toast.success(response?.message || "OTP sent successfully!");
            return response;
        } catch (error) {
            const errMsg =
                error?.message || "Failed to send OTP. Please try again!";
            toast.error(errMsg);
            return rejectWithValue(errMsg);
        }
    }
);

/* ---------------------------------------------------
   2) VERIFY OTP  ->  POST api/user/auth/verify-otp
--------------------------------------------------- */
export const verifyOtp = createAsyncThunk(
    "auth/verifyOtp",
    async ({ phone, otp }, { rejectWithValue }) => {
        try {
            const response = await PostUrl("api/user/auth/verify-otp", {
                phone,
                otp,
            });

            toast.success(response?.message || "OTP verified successfully!");
            return response;
        } catch (error) {
            const errMsg =
                error?.message || "Invalid OTP. Please try again!";
            toast.error(errMsg);
            return rejectWithValue(errMsg);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        phone: "",
        loadingRequestOtp: false,
        loadingVerifyOtp: false,
        otpSent: false,
        otpVerified: false,
        error: null,
        user: null,
    },
    reducers: {
        resetAuthState: (state) => {
            state.phone = "";
            state.otpSent = false;
            state.otpVerified = false;
            state.error = null;
            state.loadingRequestOtp = false;
            state.loadingVerifyOtp = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // ---- request-otp ----
            .addCase(requestOtp.pending, (state) => {
                state.loadingRequestOtp = true;
                state.error = null;
            })
            .addCase(requestOtp.fulfilled, (state, action) => {
                state.loadingRequestOtp = false;
                state.otpSent = true;
                state.phone = action.meta.arg.phone;
            })
            .addCase(requestOtp.rejected, (state, action) => {
                state.loadingRequestOtp = false;
                state.otpSent = false;
                state.error = action.payload;
            })

            // ---- verify-otp ----
            .addCase(verifyOtp.pending, (state) => {
                state.loadingVerifyOtp = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loadingVerifyOtp = false;
                state.otpVerified = true;
                state.user = action.payload;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loadingVerifyOtp = false;
                state.otpVerified = false;
                state.error = action.payload;
            });
    },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;