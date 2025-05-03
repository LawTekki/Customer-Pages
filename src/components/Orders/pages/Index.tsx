
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { OrderStatsDisplay } from "../components/orders/OrderStats";
import { OrdersTable } from "../components/orders/OrdersTable";
import type { Order, OrderStats } from "../types/orders";
import { ChevronDown } from "lucide-react";

const mockStats: OrderStats = {
  totalOrders: 56,
  receivedOrders: 56,
  pendingOrders: 56,
  cashSpent: "$40,00",
};

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

export default function Index() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <div className="bg-white w-full overflow-hidden max-md:max-w-full">
        <Header />
        <div className="flex w-full max-w-[1416px] items-stretch gap-[31px] flex-wrap max-md:max-w-full">
          <Sidebar />
          <main className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit my-auto max-md:max-w-full">
            <div className="flex justify-between mt-12">
              <div className="min-w-60 w-[583px] max-md:w-[360px] max-md:ml-[12px]">
                <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] tracking-[-0.64px] max-md:text-2xl max-md:leading-[1.3]">
                  Orders
                </h1>
                <p className="text-[#808080] text-sm font-medium leading-[18px] tracking-[-0.28px] mt-2 max-md:text-xs">
                  All your orders are been showed here
                </p>
              </div>

            <button className="bg-[#6B047C] text-white px-5 py-3 rounded text-sm font-medium">
              Order an item
            </button>
          </div>

          <OrderStatsDisplay stats={mockStats} />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#808080] text-sm font-medium">
                Status
              </span>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] rounded text-[#808080] text-sm font-medium"
                onClick={() => {
                  // Add status filter logic here
                }}
              >
                All
                <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("received")}
                  className={`flex items-center gap-2 py-1 ${
                    activeTab === "received" ? "text-[#6B047C]" : "text-[#808080]"
                  }`}
                >
                  <span className="font-medium">Received order</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      activeTab === "received" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                    }`}
                  >
                    43
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("cancelled")}
                  className={`flex items-center gap-2 py-1 ${
                    activeTab === "cancelled" ? "text-[#6B047C]" : "text-[#808080]"
                  }`}
                >
                  <span className="font-medium">Cancelled orders</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      activeTab === "cancelled" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                    }`}
                  >
                    43
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-[#F5F5F5] rounded text-[#808080] text-sm font-medium">
                  Today
                </button>
                <button className="px-4 py-2 bg-[#F5F5F5] rounded text-[#808080] text-sm font-medium">
                  Last 7 days
                </button>
                <button className="px-4 py-2 bg-[#F5F5F5] rounded text-[#808080] text-sm font-medium">
                  Last 30 days
                </button>
              </div>
              <button
                onClick={() => setActiveTab("cancelled")}
                className={`flex items-center gap-2 py-1 ${
                  activeTab === "cancelled" ? "text-[#6B047C]" : "text-[#808080]"
                }`}
              >
                <span className="font-medium">Cancelled orders</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  activeTab === "cancelled" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                }`}>
                  43
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#CCC]">Filter status:</span>
              <div className="flex items-center gap-1 border border-[#E6E6E6] rounded px-3 py-1.5 text-sm text-[#808080]">
                <span>Ongoing</span>
              </div>
            </div>

            <OrdersTable orders={mockOrders} />
          </main>
        </div>
      </div>
    </>
  );
}
