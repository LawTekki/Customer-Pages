import React, { useState, useRef, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Pagination } from "@/components/Dispute/components/common/Pagination";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import "../../animations.css";

interface Dispute {
  id: number;
  orderNumber: string;
  supplier: {
    name: string;
    image: string;
  };
  category: string;
  date: string;
  status: string;
  document: string;
}

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

export const DisputeTable = ({ disputes, activeTab, filter, onFilterChange, filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showImage, setShowImage] = useState(null); // id of row to show image popup
  const isMobile = useIsMobile();
  const disputesPerPage = 5;
  const indexOfLastDispute = currentPage * disputesPerPage;
  const indexOfFirstDispute = indexOfLastDispute - disputesPerPage;
  const currentDisputes = disputes.slice(indexOfFirstDispute, indexOfLastDispute);
  const totalPages = Math.ceil(disputes.length / disputesPerPage);
  const handlePageChange = (page) => setCurrentPage(page);

  // Helper for date display
  const renderDate = (date) => (
    <span
      className="block max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
      }}
      title={date}
    >
      {date}
    </span>
  );

  // Helper for remark badge
  const renderRemark = (remark) => (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
        remark === "Won"
          ? "bg-green-50 text-green-600 border border-green-200"
          : remark === "Lost"
          ? "bg-red-50 text-red-500 border border-red-200"
          : "bg-gray-100 text-gray-500 border border-gray-200"
      } animate-fade-in`}
    >
      {remark}
    </span>
  );

  // Helper for status button
  const renderStatus = (status, id) => (
    <button
      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 shadow-sm focus:outline-none ${
        status === "Cleared"
          ? "bg-green-700 text-white hover:scale-105 hover:shadow-lg animate-fade-in"
          : status === "Pending"
          ? "bg-yellow-400 text-black"
          : "bg-gray-200 text-gray-700"
      }`}
      onClick={() => status === "Cleared" && setShowImage(showImage === id ? null : id)}
      style={{ cursor: status === "Cleared" ? "pointer" : "default" }}
      type="button"
    >
      {status}
    </button>
  );

  // Helper for image popup
  const renderImagePopup = (row) => (
    <div
      className="absolute z-50 left-1/2 top-12 -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center animate-fade-in"
      style={{ minWidth: 220 }}
    >
      <img
        src={row.supplier.image}
        alt={row.supplier.name}
        className="w-20 h-20 rounded-full mb-2 border-2 border-[#6B047C] animate-pop"
      />
      <div className="font-semibold text-[#1A011E] mb-1">{row.supplier.name}</div>
      <div className="text-xs text-gray-500 mb-2">Order: {row.orderNumber}</div>
      <Button
        size="sm"
        className="bg-[#6B047C] hover:bg-[#4A0356] text-white w-full mt-2"
        onClick={() => setShowImage(null)}
      >
        Close
      </Button>
    </div>
  );

  return (
    <div className="mt-6 max-md:px-4 fade-in relative" style={{ overflow: 'hidden' }}>
      {/* Filter box for Cleared */}
      {activeTab === "cleared" && (
        <div className="flex items-center gap-3 mb-4 animate-fade-in">
          <span className="text-gray-500 text-sm font-medium">Filter:</span>
          <Select value={filter} onValueChange={onFilterChange}>
            <SelectTrigger className="w-[160px] bg-white border-[#E6E6E6] text-[#6B047C] focus:border-[#6B047C] focus:ring-[#6B047C]">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-[#E6E6E6]">
              {filters.map(opt => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className="hover:bg-[#F5EDFC] text-[#6B047C] border-b border-[#E6E6E6] last:border-b-0"
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>
      )}
      <div className="rounded-md border border-[#F2F2F2] max-md:hidden fade-in table-container relative" style={{ overflow: 'hidden' }}>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="bg-[#FAFAFA] fade-in">
              <TableHead className="text-[#808080] font-normal w-12 text-center hover:bg-gray-100 transition-colors">S/N</TableHead>
              <TableHead className="text-[#808080] font-medium hover:bg-gray-100 transition-colors">Order</TableHead>
              <TableHead className="text-[#808080] font-medium hover:bg-gray-100 transition-colors">Supplier name</TableHead>
              <TableHead className="text-[#808080] font-medium hover:bg-gray-100 transition-colors">Dispute category</TableHead>
              <TableHead className="text-[#808080] font-medium hover:bg-gray-100 transition-colors">Created date</TableHead>
              <TableHead className="text-[#808080] font-medium hover:bg-gray-100 transition-colors">Status</TableHead>
              <TableHead className="text-[#808080] font-medium hover:bg-gray-100 transition-colors">Documents</TableHead>
              <TableHead className="text-[#808080] font-medium hover:bg-gray-100 transition-colors">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentDisputes.map((dispute, index) => (
              <TableRow key={dispute.id} className="hover:bg-[#FAFAFA] table-row-hover click-shrink fade-in relative" style={{ overflow: 'hidden' }}>
                <TableCell className="text-center font-normal text-[#808080]">{indexOfFirstDispute + index + 1}</TableCell>
                <TableCell className="font-normal text-[#808080]">{dispute.orderNumber}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2 hover-scale icon-bounce">
                      <AvatarImage src={dispute.supplier.image} alt={dispute.supplier.name} />
                      <AvatarFallback>
                        <img src="/Frame 1000008098 (2).jpg" alt="Fallback" className="h-full w-full object-cover font-normal text-[#808080]" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-normal text-[#808080]">{dispute.supplier.name}</span>
                  </div>
                </TableCell>
                <TableCell className="font-normal text-[#808080]">{dispute.category}</TableCell>
                <TableCell className="font-normal text-[#808080]">{renderDate(dispute.date)}</TableCell>
                <TableCell style={{ position: 'relative' }}>
                  <span className="bg-[#FDC721] text-white text-xs font-semibold px-6 py-2 rounded-full flex items-center justify-center w-fit mx-auto">
                    {dispute.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="bg-[#F44336] p-1 rounded mr-2">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">{dispute.document}</span>
                      <span className="text-[10px] text-[#808080]">PDF FILE</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <button className="border border-[#6B047C] text-[#6B047C] font-semibold rounded-lg px-6 py-2 bg-white hover:bg-white hover:text-[#6B047C] hover:border-[#6B047C] transition">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6 fade-in" style={{ overflow: 'hidden' }}>
        {totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};
