import React, { useState } from "react";

export const TwoFactorSettings: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full max-w-3xl bg-white px-4 md:px-0">
      <h2 className="text-2xl font-semibold text-black mb-1">Two factor authentication</h2>
      <p className="text-gray-600 mb-6 text-sm max-w-2xl">By creating a security question, you will add an additional layer of protection for your account.</p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-0">
          <div className="text-gray-700 text-sm max-w-xl order-1">
            To help your account, we'll ask you to submit a code when using a new device to login. We'll send code via email.{' '}
            <a href="#" className="text-[#6B047C] font-bold hover:text-[#4B025A]">Verify your mobile phone</a> to be able to receive code via SMS
          </div>
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled((v) => !v)}
            className="accent-[#6B047C] w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-[#6B047C] mt-2 md:mt-0 cursor-pointer order-2 ml-auto"
          />
        </div>
      </div>
    </div>
  );
}; 