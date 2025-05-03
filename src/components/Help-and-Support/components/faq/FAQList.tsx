import React from "react";
import { FAQItem } from "./FAQItem";

const faqData = Array(8).fill({
  question: "Is there a way to download properly from Lawtrolley?",
  answer:
    "This is the list of all the jobs you have posted to the community for freelancers, institutions, organizations and thother to propose for",
  icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/dc0b410e4fc61a2d883b69608cd868877c7dcd84?placeholderIfAbsent=true",
});

export const FAQList: React.FC = () => {
  return (
    <div className="w-full mt-[41px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
      {Array.from({ length: 4 }, (_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex w-full items-center gap-[40px_100px] flex-wrap mt-8 first:mt-0 max-md:max-w-full"
        >
          {Array.from({ length: 2 }, (_, colIndex) => (
            <FAQItem
              key={colIndex}
              {...faqData[rowIndex * 2 + colIndex]}
              icon={colIndex % 2 === 0 ? "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/dc0b410e4fc61a2d883b69608cd868877c7dcd84?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7344fd8f738962078e8e692476f1c970b75c5925?placeholderIfAbsent=true"}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
