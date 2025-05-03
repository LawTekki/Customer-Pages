import React from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  icon: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon }) => {
  return (
    <div className="self-stretch flex min-w-60 gap-4 my-auto max-md:max-w-full">
      <img
        src={icon}
        alt="FAQ icon"
        className="aspect-[1] object-contain w-8 shrink-0"
      />
      <div className="min-w-60 w-[413px]">
        <h3 className="text-[#1A011E] text-base tracking-[-0.32px]">
          {question}
        </h3>
        <p className="text-[#808080] text-sm leading-[18px] tracking-[-0.28px] mt-[7px]">
          {answer}
        </p>
      </div>
    </div>
  );
};
