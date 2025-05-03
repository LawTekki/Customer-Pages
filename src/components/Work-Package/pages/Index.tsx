
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { WorkPackageTable } from "@/components/Work-Package/components/workpackage/WorkPackageTable";

const WorkPackage = () => {
  return (
    <div className="bg-white w-full overflow-hidden max-md:max-w-full">
      <Header />
      <div className="flex w-full max-w-[1416px] items-stretch gap-[31px] flex-wrap max-md:max-w-full">
        <Sidebar />
        <main className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit my-auto max-md:max-w-full">
          <div className="flex justify-between mt-12">
            <div className="min-w-60 w-[583px] max-md:w-[360px] max-md:ml-[12px]">
              <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] tracking-[-0.64px] max-md:text-2xl max-md:leading-[1.3]">
                Work Package
              </h1>
              <p className="text-[#808080] text-sm font-medium leading-[18px] tracking-[-0.28px] mt-2 max-md:text-xs">
                This is the list of all the work packages you have created or are involved in.
              </p>
            </div>
          </div>

          <h2 className="text-[#1A011E] text-xl font-medium leading-[1.3] tracking-[-0.4px] mt-8 max-md:text-lg max-md:ml-[12px]">
            Work Packages you are managing
          </h2>

          <WorkPackageTable />
        </main>
      </div>
    </div>
  );
};

export default WorkPackage;
