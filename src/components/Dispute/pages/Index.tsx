import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { DisputeStats } from "@/components/Dispute/components/dispute/DisputeStats";
import { DisputeTabs } from "@/components/Dispute/components/dispute/DisputeTabs";
import { DisputeTable } from "@/components/Dispute/components/dispute/DisputeTable";
import "../animations.css";

const Dispute = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Header />
      <div className="flex w-full max-w-[1350px] mx-auto items-stretch gap-8 max-md:flex-col max-md:gap-0 max-md:px-0">
        <Sidebar />
        <main
          className="grow shrink basis-auto my-auto max-md:max-w-full max-md:w-full max-md:px-0 max-md:mt-0 pr-8"
          role="main"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="w-full max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-0 max-md:px-2">
                {/* Title, Description, and Create Button */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 mt-2 gap-2 md:gap-0 max-md:px-1">
                  <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                    <h1 className="text-2xl font-bold text-[#1A011E] mb-1">Dispute</h1>
                    <p className="text-[#808080] text-sm max-w-2xl leading-relaxed">
                      This is the list of all the jobs you have posted to the community for freelancers, institutions,<br />
                      organizations, and others to propose for.
                    </p>
                  </div>
                  <button 
                    className="bg-[#6B047C] hover:bg-[#4A0356] text-white font-medium rounded-lg px-6 py-3 text-sm mt-2 md:mt-0 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md fade-in hover-lift max-md:w-full max-md:px-2" 
                    style={{ animationDelay: '0.2s' }}
                  >
                    Create Dispute
                  </button>
                </div>
                <DisputeStats />
                <DisputeTabs />
                <DisputeTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dispute;