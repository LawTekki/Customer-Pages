import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { DisputeStats } from "@/components/Dispute/components/dispute/DisputeStats";
import { DisputeTabs } from "@/components/Dispute/components/dispute/DisputeTabs";
import { DisputeTable } from "@/components/Dispute/components/dispute/DisputeTable";
import { CreateDisputeDialog } from "@/components/Dispute/components/dispute/CreateDisputeDialog";
import "../animations.css";
import ClearedTable from "@/components/Dispute/components/dispute/cleared/ClearedTable";

// Sample disputes data (should be fetched or lifted up in real app)
const disputesData = [
  {
    id: 1,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Won"
  },
  {
    id: 2,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    remark: "Lost"
  },
  {
    id: 3,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    remark: "Won"
  },
  {
    id: 4,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Lost"
  },
  {
    id: 5,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    remark: "Won"
  },
  {
    id: 6,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Won"
  },
  {
    id: 7,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Lost"
  },
  {
    id: 8,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Won"
  },
  {
    id: 9,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Lost"
  },
  {
    id: 10,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Won"
  },
  {
    id: 11,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Lost"
  },
  {
    id: 12,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Won"
  },
  {
    id: 13,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    date: "July 27 - July 31, 2024",
    status: "Pending",
    document: "Certificate",
    remark: "Lost"
  },
];

// Move clearedDisputes array here for shared use
const clearedDisputes = [
  {
    id: 1,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    createdDate: "July 27 - July 31, 2024",
    resolvedDate: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    fileType: "POF FILE",
    remark: "Won"
  },
  {
    id: 2,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    createdDate: "July 27 - July 31, 2024",
    resolvedDate: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    fileType: "PDF FILE",
    remark: "Lost"
  },
  {
    id: 3,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    createdDate: "July 27 - July 31, 2024",
    resolvedDate: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    fileType: "PDF FILE",
    remark: "Won"
  },
  {
    id: 4,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recieved",
    createdDate: "July 27 = July 31, 2024",
    resolvedDate: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    fileType: "POF FILE",
    remark: "Won"
  },
  {
    id: 5,
    orderNumber: "ED283424",
    supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
    category: "Order not recleved",
    createdDate: "July 27 - July 31, 2024",
    resolvedDate: "July 27 - July 31, 2024",
    status: "Cleared",
    document: "Certificate",
    fileType: "PDF FILE",
    remark: "Won"
  }
];

const TABS = [
  { id: "pending", label: "Pending" },
  { id: "cleared", label: "Cleared" },
];

const FILTERS = [
  { value: "all", label: "Select All" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
];

const Dispute = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [filter, setFilter] = useState("all");

  // Filter disputes by tab and filter
  const filteredDisputes = useMemo(() => {
    let filtered = disputesData.filter(d => d.status.toLowerCase() === activeTab);
    if (activeTab === "cleared" && filter !== "all") {
      filtered = filtered.filter(d => d.remark && d.remark.toLowerCase() === filter);
    }
    return filtered;
  }, [activeTab, filter]);

  // Tab counts
  const tabCounts = useMemo(() => {
    return {
      pending: disputesData.filter(d => d.status.toLowerCase() === "pending").length,
      cleared: clearedDisputes.length,
    };
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Header />
      <div className="flex w-full max-w-[1350px] mx-auto items-stretch gap-8 max-md:flex-col max-md:gap-0 max-md:px-0">
        <Sidebar />
        <main
          className="grow shrink basis-auto my-auto max-md:max-w-full max-md:w-full max-md:px-0 max-md:mt-0 pr-8"
          role="main"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="w-full max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-0 max-md:px-2">
                {/* Title, Description, and Create Button */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 mt-2 gap-2 md:gap-0 max-md:px-1">
                  <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                    <h1 className="text-2xl font-bold text-[#1A011E] mb-1">Dispute</h1>
                    <p className="text-[#808080] text-sm max-w-2xl leading-relaxed">
                      This is the list of all the jobs you have posted to the community for freelancers, institutions,<br />
                      organizations, and others to propose for.
                    </p>
                  </div>
                  <CreateDisputeDialog />
                </div>
                <DisputeStats />
                <DisputeTabs
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  tabCounts={tabCounts}
                />
                {activeTab === "cleared" ? (
                  <ClearedTable />
                ) : (
                <DisputeTable
                  disputes={filteredDisputes}
                  activeTab={activeTab}
                  filter={filter}
                  onFilterChange={setFilter}
                  filters={FILTERS}
                />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dispute;