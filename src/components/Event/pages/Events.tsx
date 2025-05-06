
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { EventsStats } from "../components/events/EventsStats";
import { EventsTabs } from "../components/events/EventsTabs";
import { EventsTable } from "../components/events/EventsTable";
import { FilterProvider } from "../context/FilterContext";

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <FilterProvider>
      <div className="bg-white w-full overflow-hidden">
        <Header />
        <div className="flex w-full items-stretch gap-[31px]">
          <Sidebar />
          <main className="flex flex-col flex-grow px-6 py-8 max-w-[1200px] pt-32">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-[32px] font-semibold text-[#1A011E]">
                  Events
                </h1>
                <p className="text-sm text-gray-500 mt-2 max-w-[650px]">
                  This is the list of all the jobs you have posted to the
                  community for freelancers, institutions, organizations and
                  others to propose for
                </p>
              </div>
              <Button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4">
                Explore events
              </Button>
            </div>

            <EventsStats />
            <div className="mt-40">
              <EventsTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <EventsTable />
          </main>
        </div>
      </div>
    </FilterProvider>
  );
};

export default Events;
