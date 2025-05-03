import React from "react";
import { Header } from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { PremiumBanner } from "@/components/Home/components/dashboard/PremiumBanner";
import { StatsCards } from "@/components/Home/components/dashboard/StatsCards";
import { TransactionTable } from "@/components/Home/components/dashboard/TransactionTable";
import { Calendar } from "@/components/Home/components/dashboard/Calendar";
import { RecentMessages } from "@/components/Home/components/dashboard/RecentMessages";
import { TalentsList } from "@/components/Home/components/dashboard/TalentsList";

const Home = () => {
  return (
    <div className="bg-white overflow-hidden min-h-screen">
      <Header />
      <div className="flex w-full max-w-[1416px] mx-auto items-stretch gap-8 max-md:flex-col">
        <Sidebar />
        <main
          className="grow shrink basis-auto my-auto max-md:max-w-full mt-8 max-md:mt-0"
          role="main"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="w-[73%] max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-0">
                <PremiumBanner />
                <StatsCards />
                <TransactionTable />
              </div>
            </div>
            <aside className="w-[27%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow font-medium max-md:mt-[15px]">
                <Calendar />
                <RecentMessages />
                <TalentsList />
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
