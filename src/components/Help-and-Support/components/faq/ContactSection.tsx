import React from "react";

interface ContactSectionProps {
  className?: string;
}

export const ContactSection = ({ className = '' }: ContactSectionProps) => {
  return (
    <div className={`mt-12 pl-[270px] max-md:pl-0 ${className}`}>
      <div className="bg-[#F9F5FA] rounded-lg p-6 max-md:p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-[#1A011E] text-xl font-medium max-md:text-lg">
            Still have a question?
          </h3>
          <p className="text-[#808080] text-sm mt-2 max-md:text-xs">
            Can't find the answer you're looking for?{' '}
            <a
              href="#"
              className="text-[#6B047C] underline hover:text-[#5a0368] transition-colors"
            >
              Chat with our friendly team
            </a>
          </p>
        </div>
        <button className="mt-4 bg-[#6B047C] text-white px-6 py-3 rounded-lg text-sm font-medium max-md:w-full max-md:py-2 md:mt-0 hover:bg-[#5a0368] transition-colors">
          Contact us
        </button>
      </div>
    </div>
  );
};
