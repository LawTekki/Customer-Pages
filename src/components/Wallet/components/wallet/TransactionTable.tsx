import React, { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { ChevronDown } from "lucide-react";

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

// Custom hook for detecting mobile viewport
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

export const TransactionTable: React.FC = () => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("Transaction type");
  const [filterType, setFilterType] = useState<string | null>(null);

  const filterOptions = ["All", "Withdrawal", "Deposit", "Transfer"];

  // All transaction data
  const allTransactions: Transaction[] = [
    // Withdrawal transactions
    {
      id: 1,
      accountName: "Nelson Kings",
      bankName: "Providus bank",
      accountNumber: "324352352323",
      type: "Withdrawal",
      amount: "$400",
      date: "27/09/2024 4:42 am",
      status: "Successful",
    },
    {
      id: 2,
      accountName: "Nelson Kings",
      bankName: "Providus bank",
      accountNumber: "324352352323",
      type: "Withdrawal",
      amount: "$400",
      date: "27/09/2024 4:42 am",
      status: "Successful",
    },
    {
      id: 3,
      accountName: "Nelson Kings",
      bankName: "Providus bank",
      accountNumber: "324352352323",
      type: "Withdrawal",
      amount: "$400",
      date: "27/09/2024 4:42 am",
      status: "Failed",
    },
    {
      id: 4,
      accountName: "Nelson Kings",
      bankName: "Providus bank",
      accountNumber: "324352352323",
      type: "Withdrawal",
      amount: "$400",
      date: "27/09/2024 4:42 am",
      status: "Successful",
    },
    // Deposit transactions
    {
      id: 5,
      accountName: "Nelson Kings",
      bankName: "First bank",
      accountNumber: "324352352323",
      type: "Deposit",
      amount: "$600",
      date: "26/09/2024 2:30 pm",
      status: "Successful",
    },
    {
      id: 6,
      accountName: "Nelson Kings",
      bankName: "First bank",
      accountNumber: "324352352323",
      type: "Deposit",
      amount: "$800",
      date: "25/09/2024 1:15 pm",
      status: "Successful",
    },
    // Transfer transactions
    {
      id: 7,
      accountName: "Nelson Kings",
      bankName: "GTB",
      accountNumber: "324352352323",
      type: "Transfer",
      amount: "$500",
      date: "24/09/2024 10:20 am",
      status: "Successful",
    },
    {
      id: 8,
      accountName: "Nelson Kings",
      bankName: "GTB",
      accountNumber: "324352352323",
      type: "Transfer",
      amount: "$300",
      date: "23/09/2024 9:45 am",
      status: "Failed",
    },
  ];

  // Handle filter selection
  const handleFilterSelect = (option: string) => {
    setSelectedFilter(option === "All" ? "Transaction type" : option);
    setFilterType(option === "All" ? null : option);
    setFilterOpen(false);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter transactions based on selected filter
  const filteredTransactions = filterType
    ? allTransactions.filter(transaction => transaction.type === filterType)
    : allTransactions;

  // Get current page transactions
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  // Calculate total pages
  const totalPages = Math.max(Math.ceil(filteredTransactions.length / itemsPerPage), 1);
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden border border-[#E6E6E6]">
      {/* Filter Header */}
      <div className="flex justify-end items-center p-4 border-b border-[#E6E6E6]">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#CCC]">Filter By :</span>
          <div className="relative">
            <div
              className={`flex items-center gap-2 border border-[#E6E6E6] rounded ${isMobile ? 'px-2 py-1' : 'px-3 py-1.5'} cursor-pointer`}
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <span className={`text-[#808080] ${isMobile ? 'text-xs' : 'text-sm'}`}>{selectedFilter}</span>
              <ChevronDown className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-[#808080]`} />
            </div>

            {filterOpen && (
              <div className={`absolute top-full ${isMobile ? 'right-0 left-0' : 'right-0'} mt-1 bg-white border border-[#E6E6E6] rounded-lg shadow-md z-10 ${isMobile ? 'w-full' : 'w-48'}`}>
                {filterOptions.map((option) => (
                  <div
                    key={option}
                    className={`${isMobile ? 'p-1.5 text-xs' : 'p-2 text-sm'} hover:bg-[#F5F5F5] cursor-pointer text-left text-[#808080]`}
                    onClick={() => handleFilterSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      {!isMobile && (
        <div className="overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#E6E6E6] text-[#808080] text-sm">
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">S/N</th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">Account name</th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">Bank name</th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">Account number</th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">Transaction type</th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">Amount</th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">Date</th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6]">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction: Transaction) => (
                <tr key={transaction.id} className="border-b border-[#E6E6E6]">
                  <td className="py-4 px-4 text-sm text-[#808080]">{transaction.id}</td>
                  <td className="py-4 px-4 text-sm text-[#808080]">{transaction.accountName}</td>
                  <td className="py-4 px-4 text-sm text-[#808080]">{transaction.bankName}</td>
                  <td className="py-4 px-4 text-sm text-[#808080]">{transaction.accountNumber}</td>
                  <td className="py-4 px-4 text-sm text-[#808080]">{transaction.type}</td>
                  <td className="py-4 px-4 text-sm text-[#808080]">{transaction.amount}</td>
                  <td className="py-4 px-4 text-sm text-[#808080]">{transaction.date}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        transaction.status === "Successful"
                          ? "bg-[#EBFFF6] text-[#1C7C04]"
                          : "bg-[#FFF0EB] text-[#D43705]"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Card View */}
      {isMobile && (
        <div className="px-4 py-2">
          {currentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="border border-[#E6E6E6] rounded-lg p-3 mb-3"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-medium text-[#1A011E]">
                  {transaction.accountName}
                </div>
                <div className="text-sm text-[#808080]">
                  {transaction.amount}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <p className="text-xs text-[#808080]">Bank name</p>
                  <p className="text-sm text-[#808080]">{transaction.bankName}</p>
                </div>
                <div>
                  <p className="text-xs text-[#808080]">Account number</p>
                  <p className="text-sm text-[#808080]">{transaction.accountNumber}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <p className="text-xs text-[#808080]">Transaction type</p>
                  <p className="text-sm text-[#808080]">{transaction.type}</p>
                </div>
                <div>
                  <p className="text-xs text-[#808080]">Date</p>
                  <p className="text-sm text-[#808080]">{transaction.date}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-[#808080]">S/N</p>
                  <p className="text-sm text-[#808080]">{transaction.id}</p>
                </div>
                <div>
                  <p className="text-xs text-[#808080]">Status</p>
                  <p className={`text-sm ${
                    transaction.status === "Successful"
                      ? "text-[#1C7C04]"
                      : "text-[#D43705]"
                  }`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
