import React, { useState } from "react";
import { Pagination } from "./Pagination";

interface Transaction {
  id: number;
  accountName: string;
  bankName: string;
  accountNumber: string;
  type: string;
  amount: string;
  date: string;
  status: "Successful" | "Failed";
}

const transactions: Transaction[] = [
  {
    id: 1,
    accountName: "Nelson Kings",
    bankName: "Providus bank",
    accountNumber: "324352352323",
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Successful",
  },
  {
    id: 2,
    accountName: "Nelson Kings",
    bankName: "Providus bank",
    accountNumber: "324352352323",
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Successful",
  },
  {
    id: 3,
    accountName: "Nelson Kings",
    bankName: "Providus bank",
    accountNumber: "324352352323",
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Failed",
  },
  {
    id: 4,
    accountName: "Nelson Kings",
    bankName: "Providus bank",
    accountNumber: "324352352323",
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Successful",
  },
];

export const TransactionTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(3);
  const totalPages = 6;
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  
  const filterOptions = ["All", "Withdrawal", "Deposit", "Transfer"];
  
  const handleFilterSelect = (option: string) => {
    setSelectedFilter(option);
    setFilterOpen(false);
  };
  return (
    <div className="justify-end items-stretch border border-[color:var(--Grey-2,#E6E6E6)] flex w-full flex-col overflow-hidden bg-white pt-[23px] pb-3 rounded-lg border-solid max-md:max-w-full">
      <div className="min-h-[330px] w-full text-sm font-medium leading-[1.3] max-md:max-w-full">
        <div className="flex w-full items-center justify-end text-center px-4 max-md:max-w-full">
          <div className="self-stretch flex items-center gap-4 justify-center my-auto relative">
            <div className="text-[#CCC] self-stretch my-auto">Filter By :</div>
            <div 
              className="items-center rounded border border-[color:var(--Grey-2,#E6E6E6)] self-stretch flex gap-2 text-[#808080] bg-white my-auto p-2 border-solid cursor-pointer"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <div className="text-[#808080] self-stretch my-auto">
                Transaction type
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/62428704438c0f308b2f0283dcd75b1e832c071f?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt="Filter"
              />
            </div>
            
            {filterOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-[#E6E6E6] rounded-lg shadow-md z-10 w-48">
                {filterOptions.map((option) => (
                  <div 
                    key={option} 
                    className="p-2 hover:bg-[#F5F5F5] cursor-pointer text-left"
                    onClick={() => handleFilterSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="justify-center items-stretch border border-[color:var(--Grey-2,#E6E6E6)] flex w-full flex-col overflow-hidden text-[#808080] tracking-[-0.28px] bg-white mt-4 border-solid max-md:max-w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-50 text-[#1A011E] text-xs tracking-[-0.24px]">
                <th className="px-1.5 py-5 text-left border-b border-[#E6E6E6]">
                  S/N
                </th>
                <th className="px-[15px] py-5 text-left border-b border-[#E6E6E6]">
                  Account name
                </th>
                <th className="px-[13px] py-5 text-left border-b border-[#E6E6E6]">
                  Bank name
                </th>
                <th className="px-4 py-5 text-left border-b border-[#E6E6E6]">
                  Account number
                </th>
                <th className="px-[15px] py-5 text-left border-b border-[#E6E6E6]">
                  Transaction type
                </th>
                <th className="px-[11px] py-5 text-left border-b border-[#E6E6E6]">
                  Amount
                </th>
                <th className="px-4 py-5 text-left border-b border-[#E6E6E6]">
                  Date
                </th>
                <th className="px-4 py-5 text-left border-b border-[#E6E6E6]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-[#F2F2F2]">
                  <td className="px-1.5 py-5 text-xs">{transaction.id}</td>
                  <td className="px-[15px] py-[19px]">
                    {transaction.accountName}
                  </td>
                  <td className="px-[13px] py-[19px]">
                    {transaction.bankName}
                  </td>
                  <td className="px-4 py-[19px]">
                    {transaction.accountNumber}
                  </td>
                  <td className="px-[15px] py-[19px]">{transaction.type}</td>
                  <td className="px-[11px] py-[19px]">{transaction.amount}</td>
                  <td className="px-4 py-[19px]">
                    {transaction.date.split("|").map((part, index) => (
                      <span key={index}>
                        {index > 0 && <span className="text-[#D9D9D9]">|</span>}
                        {part}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-[13px]">
                    <div
                      className={`rounded p-1.5 ${
                        transaction.status === "Successful"
                          ? "bg-[rgba(235,255,246,1)] text-[#1C7C04]"
                          : "bg-[rgba(255,240,235,1)] text-[#D43705]"
                      }`}
                    >
                      {transaction.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center border-t border-[#F2F2F2] py-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
