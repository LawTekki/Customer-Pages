import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { WalletBalances } from "@/components/Wallet/components/wallet/WalletBalances";
import { SpendingChart } from "@/components/Wallet/components/wallet/SpendingChart";
import { TransactionHistory } from "@/components/Wallet/components/wallet/TransactionHistory";

const Wallet: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Header />
      <div className="flex w-full flex-wrap items-stretch gap-[31px] max-md:gap-4 max-md:flex-col max-md:overflow-x-hidden">
        <Sidebar />
        <main className="flex flex-col flex-grow px-6 py-4 max-w-[1200px] pt-24 max-md:px-2 max-md:pt-20 max-md:w-full max-md:overflow-x-hidden">
          <div className="flex gap-6 max-md:flex-col max-md:gap-4">
            <div className="w-1/3 max-md:w-full">
              <WalletBalances />
            </div>
            <div className="w-2/3 max-md:w-full border border-[#F2F2F2] rounded-lg p-3 max-md:p-2">
              <SpendingChart />
            </div>
          </div>
          <TransactionHistory />
        </main>
      </div>
    </div>
  );
};

export default Wallet;
