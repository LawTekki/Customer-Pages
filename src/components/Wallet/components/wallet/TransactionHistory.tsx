import React from "react";
import { TransactionTable } from "./TransactionTable";
import "../../animations.css";

export const TransactionHistory: React.FC = () => {
  return (
    <div className="mt-8 max-md:max-w-full max-md:mt-6">
      <div className="text-[#1A011E] text-xl font-medium mb-4 max-md:max-w-full fade-in" style={{ animationDelay: '0.1s' }}>
        Transaction history
      </div>
      <div className="fade-in" style={{ animationDelay: '0.2s' }}>
        <TransactionTable />
      </div>
    </div>
  );
};
