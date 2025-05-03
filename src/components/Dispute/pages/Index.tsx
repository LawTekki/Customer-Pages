import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DisputeStats } from "@/components/Dispute/components/dispute/DisputeStats";
import { DisputeTabs } from "@/components/Dispute/components/dispute/DisputeTabs";
import { DisputeTable } from "@/components/Dispute/components/dispute/DisputeTable";

const Dispute = () => {
  return (
    <div className="bg-white w-full overflow-hidden max-md:max-w-full">
      <Header />
      <div className="flex w-full items-stretch gap-[31px] flex-wrap max-md:max-w-full">
        <Sidebar />
        <main className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit my-auto max-md:max-w-full">
          <div className="flex justify-between mt-12">
            <div className="min-w-60 w-[583px] max-md:w-[360px] max-md:ml-[12px]">
              <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] tracking-[-0.64px] max-md:text-2xl max-md:leading-[1.3]">
                Disputes
              </h1>
              <p className="text-[#808080] text-sm font-medium leading-[18px] tracking-[-0.28px] mt-2 max-md:text-xs">
                Manage and track your disputes with clients and talents here.
              </p>
            </div>
          </div>
          
          <div className="mt-6 max-md:mt-0">
            <DisputeStats />
          </div>
          
          <div className="mt-6 max-md:mt-4">
            <DisputeTabs />
          </div>

          <div className="mt-6 max-md:mt-4">
            <DisputeTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dispute;