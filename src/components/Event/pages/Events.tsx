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
            <div className="flex justify-between items-start w-full">
              <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-[32px] font-semibold text-[#1A011E] slide-in" style={{ animationDelay: '0.2s' }}>
                  Events
                </h1>
                <p className="text-sm text-gray-500 mt-2 max-w-[900px] slide-in" style={{ animationDelay: '0.25s' }}>
                  This is the list of all the jobs you have posted to the
                  community for freelancers, institutions, organizations and
                  others to propose for
                </p>
              </div>
              <Button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-6 py-2 rounded-md font-medium" style={{ transition: 'transform 0.2s ease', transform: 'scale(1)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Explore events
              </Button>
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
