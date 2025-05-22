import React, { useState, useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { OrderStatsDisplay } from "../components/orders/OrderStats";
import { OrdersTable } from "../components/orders/OrdersTable";
import { ActiveOrdersTable, activeOrders } from "../components/orders/active/ActiveOrdersTable";
import { ReceivedOrdersTable, receivedOrders } from "../components/orders/received/ReceivedOrdersTable";
import { CancelledOrdersTable, cancelledOrders } from "../components/orders/cancelled/CancelledOrdersTable";
import type { Order, OrderStats } from "../types/orders";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { FilterProvider, useFilter } from "../context/FilterContext";
import "../animations.css";
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const mockStats: OrderStats = {
  totalOrders: 56,
  receivedOrders: 56,
  pendingOrders: 56,
  cashSpent: "$40,00",
};

// Memoized fixed header section (no stats)
const FixedHeader = React.memo(() => (
  <div className="flex justify-between items-center mt-8 max-md:mt-4">
    <div className="min-w-60 w-[583px] max-md:w-[65%] max-md:min-w-0 max-md:ml-0 fade-in">
      <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.3]">
        Orders
      </h1>
      <p className="text-[#808080] text-sm font-medium leading-[18px] tracking-[-0.28px] mt-2 max-md:text-xs">
        All your orders are been showed here
      </p>
    </div>
    <motion.button
      className="bg-[#6B047C] text-white px-5 py-3 rounded text-sm font-medium max-md:px-3 max-md:py-2 max-md:text-xs max-md:whitespace-nowrap button-pulse fade-in"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      Order an item
    </motion.button>
  </div>
));

const mockOrders: Order[] = [
  {
    id: "1",
    item: {
      name: "The 4 keys of law",
      image: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ea8ab0db257586a5d5771f5aac3660063c076b8b?placeholderIfAbsent=true",
    },
    orderId: "HG324235",
    amount: "$24,000",
    category: "Books | Soft copy",
    status: "active",
    orderDate: "July 27, 2024",
    dueDate: "Nov 12, 2024",
  },
  // Add more mock orders as needed...
];

// Filter dropdown component
const FilterDropdown = () => {
  const { filterStatus, setFilterStatus } = useFilter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filterOptions = ['All', 'Ongoing', 'Pending', 'Cancelled', 'Concluded'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-0 border border-[#E6E6E6] rounded px-2 py-1 text-sm text-[#808080] cursor-pointer hover:border-[#6B047C] max-md:min-w-[80px] max-md:w-[80px] max-md:justify-between max-md:px-1 max-md:py-0.5 max-md:text-xs"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="max-md:mr-0">{filterStatus}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#808080] max-md:w-2.5 max-md:h-2.5" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#808080] max-md:w-2.5 max-md:h-2.5" />
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-[#E6E6E6] rounded-md shadow-sm z-10 max-md:w-[80px]">
          {filterOptions.map((option) => (
            <div
              key={option}
              className={`px-3 py-2 text-sm cursor-pointer flex items-center justify-between max-md:px-1 max-md:py-0.5 max-md:text-[10px] ${
                filterStatus === option
                  ? 'bg-[#F9F5FA] text-[#6B047C]'
                  : 'text-[#808080] hover:bg-[#F9F5FA] hover:text-[#6B047C]'
              }`}
              onClick={() => {
                setFilterStatus(option as any);
                setIsOpen(false);
              }}
            >
              <span>{option}</span>
              {filterStatus === option && <Check className="w-4 h-4 max-md:w-2.5 max-md:h-2.5" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OrdersContent = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { filterStatus, setFilterStatus } = useFilter();
  const navigate = useNavigate();
  const location = useLocation();

  // Sync tab with URL on mount
  useEffect(() => {
    if (location.pathname === "/orders/Active") {
      setActiveTab("active");
      setFilterStatus("Ongoing");
    } else if (location.pathname === "/orders/Received") {
      setActiveTab("received");
      setFilterStatus("Concluded");
    } else if (location.pathname === "/orders/Cancelled") {
      setActiveTab("cancelled");
      setFilterStatus("Cancelled");
    } else if (location.pathname === "/orders") {
      setActiveTab("all");
      setFilterStatus("All");
    }
  }, [location.pathname, setFilterStatus]);

  // Handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "active") {
      setFilterStatus("Ongoing");
      navigate("/orders/Active");
    } else if (tab === "received") {
      setFilterStatus("Concluded");
      navigate("/orders/Received");
    } else if (tab === "cancelled") {
      setFilterStatus("Cancelled");
      navigate("/orders/Cancelled");
    } else {
      setFilterStatus("All");
      navigate("/orders");
    }
  };

  // Filter orders for the table
  let filteredOrders = mockOrders;
  if (activeTab === "active") {
    filteredOrders = mockOrders.filter(order => order.status === "active");
  }
  // ... you can add more tab logic for other statuses if needed ...

  const allCount = activeOrders.length + receivedOrders.length + cancelledOrders.length;
  const activeCount = activeOrders.length;
  const receivedCount = receivedOrders.length;
  const cancelledCount = cancelledOrders.length;

  return (
    <>
      <div className="bg-white w-full overflow-hidden max-md:max-w-full">
        <Header />
        <div className="flex w-full max-w-[1416px] items-stretch gap-[31px] flex-wrap max-md:max-w-full">
          <Sidebar />
          <main className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit max-md:max-w-full max-md:px-4 mr-4">
            <FixedHeader />
            {/* Stats row below header */}
            <div className="w-full mt-4 mb-2">
              <OrderStatsDisplay stats={mockStats} />
            </div>
            {/* Table area: remove min-height and reduce margin for tighter layout */}
            <div className="w-full mt-2">
              <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
                <div className="flex items-center max-md:w-full max-md:pb-0 max-md:overflow-visible max-md:justify-between border-b border-[#E6E6E6] slide-in fade-in" style={{ overflow: 'hidden' }}>
                  <button
                    onClick={() => handleTabClick("all")}
                    className={`flex items-center gap-1 px-4 py-3 border-b-2 max-md:px-1 max-md:py-2 max-md:pb-3 max-md:whitespace-nowrap max-md:mr-2 hover-scale click-shrink transition-all duration-200 ${
                      activeTab === "all"
                        ? "border-[#6B047C] text-[#6B047C]"
                        : "border-transparent text-[#808080]"
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    <span className="font-medium max-md:text-[10px]">All</span>
                    <span className={`text-xs px-2 py-0.5 rounded max-md:text-[8px] max-md:px-1 max-md:py-0 max-md:inline-flex max-md:items-center max-md:justify-center ${
                      activeTab === "all" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                    }`}>
                      {allCount}
                    </span>
                  </button>

                  <button
                    onClick={() => handleTabClick("active")}
                    className={`flex items-center gap-1 px-4 py-3 border-b-2 max-md:px-1 max-md:py-2 max-md:pb-3 max-md:whitespace-nowrap max-md:mr-2 hover-scale click-shrink transition-all duration-200 ${
                      activeTab === "active"
                        ? "border-[#6B047C] text-[#6B047C]"
                        : "border-transparent text-[#808080]"
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    <span className="font-medium max-md:text-[10px]">Active</span>
                    <span className={`text-xs px-2 py-0.5 rounded max-md:text-[8px] max-md:px-1 max-md:py-0 max-md:inline-flex max-md:items-center max-md:justify-center ${
                      activeTab === "active" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                    }`}>
                      {activeCount}
                    </span>
                  </button>

                  <button
                    onClick={() => handleTabClick("received")}
                    className={`flex items-center gap-1 px-4 py-3 border-b-2 max-md:px-1 max-md:py-2 max-md:pb-3 max-md:whitespace-nowrap max-md:mr-2 hover-scale click-shrink transition-all duration-200 ${
                      activeTab === "received"
                        ? "border-[#6B047C] text-[#6B047C]"
                        : "border-transparent text-[#808080]"
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    <span className="font-medium max-md:text-[10px]">Received</span>
                    <span className={`text-xs px-2 py-0.5 rounded max-md:text-[8px] max-md:px-1 max-md:py-0 max-md:inline-flex max-md:items-center max-md:justify-center ${
                      activeTab === "received" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                    }`}>
                      {receivedCount}
                    </span>
                  </button>

                  <button
                    onClick={() => handleTabClick("cancelled")}
                    className={`flex items-center gap-1 px-4 py-3 border-b-2 max-md:px-1 max-md:py-2 max-md:pb-3 max-md:whitespace-nowrap hover-scale click-shrink transition-all duration-200 ${
                      activeTab === "cancelled"
                        ? "border-[#6B047C] text-[#6B047C]"
                        : "border-transparent text-[#808080]"
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    <span className="font-medium max-md:text-[10px]">Cancelled</span>
                    <span className={`text-xs px-2 py-0.5 rounded max-md:text-[8px] max-md:px-1 max-md:py-0 max-md:inline-flex max-md:items-center max-md:justify-center ${
                      activeTab === "cancelled" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                    }`}>
                      {cancelledCount}
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-2 max-md:mt-4 max-md:mb-2 max-md:w-full max-md:justify-between max-md:gap-1">
                  <span className="text-sm text-[#808080] max-md:text-xs">Filter status:</span>
                  <FilterDropdown />
                </div>
              </div>
            </div>
            {activeTab === "active" ? (
              <ActiveOrdersTable />
            ) : activeTab === "received" ? (
              <ReceivedOrdersTable />
            ) : activeTab === "cancelled" ? (
              <CancelledOrdersTable />
            ) : (
              <OrdersTable orders={filteredOrders} />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default function Index() {
  return (
    <FilterProvider>
      <OrdersContent />
    </FilterProvider>
  );
}