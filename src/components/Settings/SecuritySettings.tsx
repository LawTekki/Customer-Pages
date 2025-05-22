import React, { useState } from "react";

const passwordRequirements = [
  {
    label: "8 digit character",
    test: (v: string) => v.length >= 8,
  },
  {
    label: "One number",
    test: (v: string) => /\d/.test(v),
  },
  {
    label: "One uppercase character",
    test: (v: string) => /[A-Z]/.test(v),
  },
  {
    label: "One special character (!@#$%^&*()?><|)",
    test: (v: string) => /[!@#$%^&*()?><|]/.test(v),
  },
];

export const SecuritySettings: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid = passwordRequirements.every((req) => req.test(newPassword));
  const passwordsMatch = newPassword === confirmPassword && newPassword.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (isValid && passwordsMatch) {
      alert("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setSubmitted(false);
    }
  };

  // Helper for icons
  const getIcon = (passed: boolean, touched: boolean) => {
    if (passed) {
      // Green circle with white tick
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#22C55E"/>
          <path d="M7 12.5L11 16L17 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    // Gray circle with white tick
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#E5E7EB"/>
        <path d="M7 12.5L11 16L17 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  };

  return (
    <div className="pl-16 pr-4 max-w-2xl w-full md:pl-16 md:pr-4 md:max-w-2xl md:w-full px-0 max-md:pl-0 max-md:pr-0 max-md:w-full">
      <h2 className="text-2xl font-semibold mb-8 text-black">Change password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div>
          <label className="block mb-1 text-base font-medium text-black">Current password</label>
          <input
            type="password"
            className="text-[#666] self-stretch w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            placeholder="e.g.Abc@1234"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-base font-medium text-black">New password</label>
          <input
            type="password"
            className="text-[#666] self-stretch w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="e.g.Abc@1234"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-base font-medium text-black">Confirm password</label>
          <input
            type="password"
            className="text-[#666] self-stretch w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="e.g.Abc@1234"
            required
          />
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm mt-2">
          {passwordRequirements.map((req, idx) => {
            const passed = req.test(newPassword);
            const touched = newPassword.length > 0;
            return (
              <div key={req.label} className="flex items-center gap-2 min-w-[220px]">
                <span className="inline-flex items-center">{getIcon(passed, touched)}</span>
                <span>{req.label}</span>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="w-full text-sm text-white tracking-[-0.28px] mt-10 min-h-[50px] bg-[#6B047C] py-4 rounded-lg transition-all duration-200 hover:bg-[#4B025A] hover:shadow-lg hover:scale-105"
        >
          Update
        </button>
        {submitted && (!isValid || !passwordsMatch) && (
          <div className="text-red-500 text-center mt-2">Please fix the errors above before submitting.</div>
        )}
      </form>
    </div>
  );
}; 