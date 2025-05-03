import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { SettingsSidebar } from "@/components/Setting/components/settings/SettingsSidebar";
import { ProfileSettings } from "@/components/Setting/components/settings/ProfileSettings";

const Index: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <div className="flex w-full items-stretch gap-[31px]">
        <Sidebar />
        <main className="flex flex-col flex-grow px-6 py-8 max-w-[1200px]">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[23%] max-md:w-full max-md:ml-0">
              <SettingsSidebar />
            </div>
            <div className="w-[77%] ml-5 max-md:w-full max-md:ml-0">
              <ProfileSettings />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
