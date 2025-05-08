import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { EventsStats } from "../components/events/EventsStats";
import { EventsTabs } from "../components/events/EventsTabs";
import { EventsTable } from "../components/events/EventsTable";
import { FilterProvider } from "../context/FilterContext";
import "../animations.css";

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <FilterProvider>
      <div className="bg-white w-full" style={{ overflow: 'hidden' }}>
        <Header />
        <div className="flex w-full items-stretch gap-0" style={{ overflow: 'hidden' }}>
          <Sidebar />
          <main className="flex flex-col flex-grow px-2 py-8 max-w-[1500px] w-full" style={{ overflow: 'hidden', marginLeft: 0 }}>
            <div className="flex justify-between items-start max-md:gap-0">
              <div className="max-md:flex max-md:flex-col max-md:w-full fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="max-md:flex max-md:justify-between max-md:items-center">
                  <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] max-md:text-2xl max-md:leading-[1.3]">
                    Events
                  </h1>
                  <button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4 py-2 rounded-md font-medium hidden max-md:block max-md:text-xs max-md:py-1.5 max-md:px-3 transition-transform duration-300 hover:scale-105">
                    Explore events
                  </button>
                </div>
                <p className="text-[#808080] text-sm font-medium max-w-[650px] max-md:text-xs mt-2">
                  This is the list of all the jobs you have posted to the community for freelancers, institutions, organizations and others to propose for
                </p>
              </div>
              <button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4 py-2 rounded-md font-medium max-md:hidden transition-transform duration-300 hover:scale-105">
                Explore events
              </button>
            </div>
            <div className="w-full mt-4">
              <EventsStats />
            </div>
            <div className="w-full mt-2">
              <EventsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="w-full mt-2">
              <EventsTable />
            </div>
          </main>
        </div>
      </div>
    </FilterProvider>
  );
};

export default Events;
