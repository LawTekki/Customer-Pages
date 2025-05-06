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
        <main className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit my-auto max-md:max-w-full mr-6 max-md:mr-0">
          <div className="mt-12 max-md:mt-6 max-md:px-4 mb-2">
            <div className="flex justify-between items-center mb-1">
              <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.3]">
                Disputes
              </h1>

              <button className="bg-[#6B047C] text-white px-5 py-3 rounded text-sm font-medium max-md:px-3 max-md:py-2 max-md:text-xs max-md:whitespace-nowrap">
                Create Dispute
              </button>
            </div>

            <p className="text-[#808080] text-sm font-medium leading-[18px] tracking-[-0.28px] mt-1 max-md:text-xs max-w-[583px]">
              This is the list of all the jobs you have posted to the community for freelancers, institutions, organizations and others to propose for.
            </p>
          </div>

          <div className="mt-4 max-md:mt-2">
            <DisputeStats />
          </div>

          <div className="mt-4 max-md:mt-6">
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