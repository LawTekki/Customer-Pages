
import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { WalletBalances } from "@/components/Wallet/components/wallet/WalletBalances";
import { SpendingChart } from "@/components/Wallet/components/wallet/SpendingChart";
import { TransactionHistory } from "@/components/Wallet/components/wallet/TransactionHistory";

const Wallet: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <div className="flex w-full max-w-[1416px] items-stretch gap-8 flex-wrap max-md:max-w-full">
        <Sidebar />
        <div className="grow shrink-0 basis-0 w-fit my-auto max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-col max-md:items-stretch">
              <div className="w-[30%] max-md:w-full max-md:ml-0">
                <WalletBalances />
              </div>
              <div className="w-[70%] max-md:w-full max-md:ml-0">
                <SpendingChart />
              </div>
            </div>
          </div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
