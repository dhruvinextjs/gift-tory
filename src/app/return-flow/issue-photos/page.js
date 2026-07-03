"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiUpload } from "react-icons/fi";

const ISSUES = [
    "Item arrived damaged",
    "Wrong item received",
    "Item different from description",
    "Missing parts / accessories",
    "Quality not as expected",
    "Defective on arrival",
];

export default function IssuesPhotosPage() {
    const router = useRouter();
    const [selectedIssue, setSelectedIssue] = useState(ISSUES[0]);
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState("");

    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files || []);
        const remainingSlots = 4 - photos.length;
        const newFiles = files.slice(0, remainingSlots);
        setPhotos((prev) => [...prev, ...newFiles]);
    };

    const handleBack = () => {
        router.push("/return-flow/select-order");
    };

    const handleSubmit = () => {
        // TODO: replace ke API call yaha karenge
        router.push("/return-flow/confirmed");
    };

    return (
        <div className="bg-white rounded-md border border-[#DFDFDF] shadow-sm max-w-6xl mx-auto p-6 md:p-8">
            {/* ================= HEADING ================= */}
            <h2 className="text-2xl font-bold text-[#020907]">What went wrong?</h2>
            <p className="text-sm text-[#020907] mt-1">Order self care hamper by giftory</p>

            {/* ================= ISSUE SELECTION ================= */}
            <div className="mt-6">
                <p className="text-sm font-semibold text-[#0B2E24] mb-3">Select an Issue</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ISSUES.map((issue) => {
                        const isSelected = selectedIssue === issue;
                        return (
                            <button
                                key={issue}
                                type="button"
                                onClick={() => setSelectedIssue(issue)}
                                className={`flex items-center gap-2 text-left text-sm px-4 py-3 rounded border transition-colors
                                    ${isSelected
                                        ? "bg-[#0B2E24] text-white border-[#DFDFDF]"
                                        : "bg-white text-[#020907] border-[#DFDFDF]"
                                    }`}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isSelected ? "bg-[#D9A441]" : "bg-[#966B34]"}`} />
                                {issue}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ================= PHOTO UPLOAD ================= */}
            <div className="mt-8">
                <p className="text-sm font-medium text-[#000000] mb-3">Upload Photos (Up to 4)</p>
                <label className="flex flex-col items-center justify-center w-28 h-24 border border-dashed border-[#DFDFDF] rounded cursor-pointer transition-colors">
                    <FiUpload className="text-lg text-[#000000] mb-1" />
                    <span className="text-xs text-[#000000]">Add photos</span>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handlePhotoUpload}
                        className="hidden"
                        disabled={photos.length >= 4}
                    />
                </label>
                {photos.length > 0 && (
                    <div className="flex gap-3 mt-3 flex-wrap">
                        {photos.map((file, idx) => (
                            <img
                                key={idx}
                                src={URL.createObjectURL(file)}
                                alt={`upload-${idx}`}
                                className="w-16 h-16 object-cover rounded border border-[#E5E5E5]"
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* ================= DESCRIPTION ================= */}
            <div className="mt-8">
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the Issue (Optional)"
                    rows={4}
                    className="w-full border border-[#DFDFDF] rounded px-4 py-3 text-sm text-[#020907] placeholder:text-[#353A39] focus:outline-none focus:border-[#966B34] resize-none"
                />
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="flex items-center gap-4 mt-8">
                <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2.5 rounded border border-[#0B2E24] text-sm font-medium text-[#0B2E24] hover:bg-[#F5F5F5] transition-colors"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded bg-[#0B2E24] text-[#FFFFFF] text-sm font-medium transition-colors"
                >
                    Request Replacement
                </button>
            </div>
        </div>
    );
}