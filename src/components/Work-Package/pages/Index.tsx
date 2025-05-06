
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { WorkPackageTable } from "@/components/Work-Package/components/workpackage/WorkPackageTable";
import { DraftTable } from "@/components/Work-Package/components/workpackage/DraftTable";
import { WorkPackageTabs } from "@/components/Work-Package/components/workpackage/WorkPackageTabs";
import { FilterProvider } from "@/components/Work-Package/context/FilterContext";

const WorkPackage = () => {
  const [activeTab, setActiveTab] = useState('posted');

  return (
    <FilterProvider>
      <div className="bg-white w-full overflow-hidden max-md:max-w-full">
        <Header />
        <div className="flex w-full items-stretch gap-[31px] max-md:max-w-full">
          <Sidebar />
          <main className="flex flex-col flex-grow px-6 py-8 max-w-[1200px] max-md:max-w-full">
          <div className="flex justify-between items-start max-md:gap-0">
            <div className="max-md:flex max-md:flex-col max-md:w-full">
              <div className="max-md:flex max-md:justify-between max-md:items-center">
                <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] max-md:text-2xl max-md:leading-[1.3]">
                  Work package
                </h1>
                <button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4 py-2 rounded-md font-medium hidden max-md:block max-md:text-xs max-md:py-1.5 max-md:px-3">
                  Post a workpackage
                </button>
              </div>
              <p className="text-[#808080] text-sm font-medium mt-2 max-w-[650px] max-md:text-xs">
                This is the list of all the jobs you have posted to the community for freelancers, institutions, organizations and thother to propose for
              </p>
            </div>
            <button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4 py-2 rounded-md font-medium max-md:hidden">
              Post a workpackage
            </button>
          </div>

          <div className="flex mt-8 border border-gray-100 rounded-lg max-md:flex-col max-md:border-0 max-md:gap-2 w-full bg-white">
            {/* First section - Posted work package */}
            <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
              <div className="flex items-center">
                <img src="/Frame 1000008082 (5).svg" alt="Posted work package" className="w-10 h-10 mr-3" />
                <div>
                  <div className="text-xl font-medium">56</div>
                  <div className="text-sm text-gray-600">Posted work package</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>

            {/* Second section - Drafted work package */}
            <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
              <div className="flex items-center">
                <img src="/Frame 1000008082 (1).svg" alt="Drafted work package" className="w-10 h-10 mr-3" />
                <div>
                  <div className="text-xl font-medium">56</div>
                  <div className="text-sm text-gray-600">Drafted work package</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>

            {/* Third section - Talent hired */}
            <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
              <div className="flex items-center">
                <img src="/Frame 1000008082 (2).svg" alt="Talent hired" className="w-10 h-10 mr-3" />
                <div>
                  <div className="text-xl font-medium">56</div>
                  <div className="text-sm text-gray-600">Talent hired</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-200 max-md:hidden h-14 self-center mx-1"></div>

            {/* Fourth section - Cash spent */}
            <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
              <div className="flex items-center">
                <img src="/Frame 1000008082 (3).svg" alt="Cash spent" className="w-10 h-10 mr-3" />
                <div>
                  <div className="text-xl font-medium">$40.00</div>
                  <div className="text-sm text-gray-600">Cash spent</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <WorkPackageTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {activeTab === 'posted' ? (
              <WorkPackageTable />
            ) : (
              <DraftTable />
            )}
          </div>
        </main>
      </div>
    </div>
    </FilterProvider>
  );
};

export default WorkPackage;
