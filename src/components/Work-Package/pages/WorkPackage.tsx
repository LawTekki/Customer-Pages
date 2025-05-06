
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { WorkPackageStats } from "../components/workpackage/WorkPackageStats";
import { WorkPackageTabs } from "../components/workpackage/WorkPackageTabs";
import { WorkPackageTable } from "../components/workpackage/WorkPackageTable";
import { DraftTable } from "../components/workpackage/DraftTable";
import { FilterProvider } from "../context/FilterContext";

const WorkPackage = () => {
  const [activeTab, setActiveTab] = useState('posted');

  return (
    <FilterProvider>
      <div className="bg-white w-full overflow-hidden">
        <Header />
        <div className="flex w-full items-stretch gap-[31px]">
          <Sidebar />
          <main className="flex flex-col flex-grow px-6 py-8 max-w-[1200px]">
          <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
            <div>
              <h1 className="text-[32px] font-semibold text-[#1A011E] max-md:text-2xl max-md:leading-[1.3]">
                Work package
              </h1>
              <p className="text-sm text-gray-500 mt-2 max-w-[650px] max-md:text-xs">
                This is the list of all the jobs you have posted to the
                community for freelancers, institutions, organizations and
                thother to propose for
              </p>
            </div>
            <Button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4 py-2 rounded-md font-medium">
              Post a workpackage
            </Button>
          </div>

          <WorkPackageStats />
          <WorkPackageTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab === 'posted' ? (
            <WorkPackageTable />
          ) : (
            <DraftTable />
          )}
        </main>
      </div>
    </div>
    </FilterProvider>
  );
};

export default WorkPackage;