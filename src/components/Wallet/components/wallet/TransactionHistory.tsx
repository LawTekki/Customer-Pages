import React from "react";
import { TransactionTable } from "./TransactionTable";

export const TransactionHistory: React.FC = () => {
  return (
    <div className="mt-[41px] max-md:max-w-full max-md:mt-10">
      <div className="text-[#1A011E] text-xl font-medium leading-[1.3] tracking-[-0.4px] mb-6 max-md:max-w-full">
        Transaction history
      </div>
      <TransactionTable />
    </div>
  );
};
