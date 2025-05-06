import React from "react";
import { FAQItem } from "./FAQItem";

const faqData = Array(10).fill({
  question: "Is there a way to download properly from Lawtrolley?",
  answer:
    "This is the list of all the jobs you have posted to the community for freelancers, institutions, organizations and thother to propose for",
  icon: "/Group.svg",
});

export const FAQList: React.FC = () => {
  return (
    <div className="w-full mt-6 max-md:max-w-full max-md:mt-4 pl-[270px] max-md:pl-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
