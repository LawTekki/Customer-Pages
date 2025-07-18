import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { EventsStats } from "../components/events/EventsStats";
import { EventsTabs } from "../components/events/EventsTabs";
import { EventsTable } from "../components/events/EventsTable";
import { FilterProvider, useFilter } from "../context/FilterContext";
import "../animations.css";
import { useLocation } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: "Curating a customize agreement",
    host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
    date: "July 27 - July 31, 2024",
    eventType: "Virtual",
    venue: "Google meet",
    fee: "Free",
    time: "9am - 12pm",
    attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
    status: "Ongoing"
  },
  {
    id: 2,
    title: "Curating a customize agreement",
    host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
    date: "July 27 - July 31, 2024",
    eventType: "Virtual",
    venue: "Google meet",
    fee: "$30",
    time: "9am - 12pm",
    attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
    status: "Pending"
  },
  {
    id: 3,
    title: "Curating a customize agreement",
    host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
    date: "July 27 - July 31, 2024",
    eventType: "Virtual",
    venue: "Google meet",
    fee: "$300",
    time: "9am - 12pm",
    attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
    status: "Concluded"
  },
  {
    id: 4,
    title: "Curating a customize agreement",
    host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
    date: "July 27 - July 31, 2024",
    eventType: "Virtual",
    venue: "Google meet",
    fee: "$300",
    time: "9am - 12pm",
    attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
    status: "Cancelled"
  },
  {
    id: 5,
    title: "Curating a customize agreement",
    host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
    date: "July 27 - July 31, 2024",
    eventType: "Virtual",
    venue: "Google meet",
    fee: "$300",
    time: "9am - 12pm",
    attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
    status: "Ongoing"
  },
  {
    id: 6,
    title: "Curating a customize agreement",
    host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
    date: "July 27 - July 31, 2024",
    eventType: "Virtual",
    venue: "Google meet",
    fee: "$300",
    time: "9am - 12pm",
    attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
    status: "Pending"
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const { setFilterStatus } = useFilter();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    const tabToFilter = {
      upcoming: 'Ongoing',
      pending: 'Pending',
      recurring: 'Ongoing',
      past: 'Concluded',
      cancelled: 'Cancelled'
    };
    if (!path || path === 'events' || path === 'upcoming') {
      setActiveTab('upcoming');
      setFilterStatus('Ongoing');
    } else if (tabToFilter[path]) {
      setActiveTab(path);
      setFilterStatus(tabToFilter[path]);
    }
  }, [location.pathname, setFilterStatus]);

  return (
    <FilterProvider>
      <div className="bg-white w-full" style={{ overflow: 'hidden' }}>
        <Header />
        <div className="flex w-full items-stretch gap-[31px]" style={{ overflow: 'hidden' }}>
          <Sidebar />
          <main className="flex flex-col flex-grow px-1 py-8 max-w-[1200px] mr-4 max-md:max-w-[90%]" style={{ overflow: 'hidden' }}>
            <div className="flex justify-between items-start max-md:pl-4">
              <div className="fade-in w-full" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3]">
                    Events
                  </h1>
                  <button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4 py-2 rounded-md font-medium transition-transform duration-300 hover:scale-105">
                    Explore events
                  </button>
                </div>
                <p className="text-[#808080] text-sm font-medium mt-2 max-w-[650px]">
                  This is the list of all the jobs you have posted to the community for freelancers, institutions, organizations and others to propose for
                </p>
              </div>
            </div>

            <div className="max-md:pl-4">
              <EventsStats />
            </div>
            <div className="fade-in max-md:pl-4" style={{ animationDelay: '0.3s', overflow: 'hidden' }}>
              <EventsTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                events={events}
              />
            </div>
            <div className="fade-in max-md:pl-4" style={{ animationDelay: '0.4s', overflow: 'hidden' }}>
              <EventsTable events={events} />
            </div>
          </main>
        </div>
      </div>
    </FilterProvider>
  );
};

export default Events;
