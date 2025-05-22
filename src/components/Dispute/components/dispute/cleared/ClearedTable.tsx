import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FileText } from "lucide-react";
import { Pagination } from "@/components/Dispute/components/common/Pagination";

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

const disputesPerPage = 5;

const ClearedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastDispute = currentPage * disputesPerPage;
  const indexOfFirstDispute = indexOfLastDispute - disputesPerPage;
  const currentDisputes = clearedDisputes.slice(indexOfFirstDispute, indexOfLastDispute);
  const totalPages = Math.ceil(clearedDisputes.length / disputesPerPage);

  return (
    <div className="mt-6 max-md:px-4 fade-in relative" style={{ overflow: 'hidden' }}>
      <div className="rounded-md border border-[#F2F2F2] max-md:hidden fade-in table-container relative" style={{ overflow: 'hidden' }}>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="bg-[#FAFAFA] fade-in">
              <TableHead className="text-[#808080] font-normal w-12 text-center">SIN</TableHead>
              <TableHead className="text-[#808080] font-normal w-24 px-1">Order ID</TableHead>
              <TableHead className="text-[#808080] font-normal px-2">Supplier name</TableHead>
              <TableHead className="text-[#808080] font-normal px-4">Dispute category</TableHead>
              <TableHead className="text-[#808080] font-normal px-4">Created date</TableHead>
              <TableHead className="text-[#808080] font-normal px-4 pl-8">Resolved date</TableHead>
              <TableHead className="text-[#808080] font-normal px-6 pl-12 pr-10">Status</TableHead>
              <TableHead className="text-[#808080] font-normal px-4 pl-8">Documents</TableHead>
              <TableHead className="text-[#808080] font-normal px-4">Remark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentDisputes.map((dispute, index) => (
              <TableRow key={dispute.id} className="hover:bg-[#FAFAFA] table-row-hover click-shrink fade-in relative" style={{ overflow: 'hidden' }}>
                <TableCell className="text-center font-normal text-[#808080] whitespace-nowrap px-1 py-5">{dispute.id}</TableCell>
                <TableCell className="font-normal text-[#808080] whitespace-nowrap w-24 px-1 py-5">{dispute.orderNumber}</TableCell>
                <TableCell className="whitespace-nowrap px-2 py-5">
                  <div className="flex items-center gap-1.5">
                    <Avatar className="h-7 w-7 hover-scale icon-bounce">
                      <AvatarImage src={dispute.supplier.image} alt={dispute.supplier.name} />
                      <AvatarFallback>
                        <img src="/Frame 1000008098 (2).jpg" alt="Fallback" className="h-full w-full object-cover font-normal text-[#808080]" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-normal text-[#808080]">{dispute.supplier.name}</span>
                  </div>
                </TableCell>
                <TableCell className="font-normal text-[#808080] whitespace-nowrap px-4 py-5">{dispute.category}</TableCell>
                <TableCell className="font-normal text-[#808080] whitespace-nowrap px-4 py-5 pr-8">{dispute.createdDate}</TableCell>
                <TableCell className="font-normal text-[#808080] whitespace-nowrap px-4 py-5 pl-8 pr-8">{dispute.resolvedDate}</TableCell>
                <TableCell className="px-6 py-5 pl-12 pr-10">
                  <span className="bg-[#1C7C04] text-white text-xs font-semibold px-6 py-2 rounded-full flex items-center justify-center w-fit mx-auto animate-fade-in">
                    {dispute.status}
                  </span>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-5 pl-8">
                  <div className="flex items-center gap-1.5">
                    <div className="bg-[#F44336] p-1 rounded hover-scale icon-bounce">
                      <FileText className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      {dispute.document.split('\n').map((doc, i) => (
                        <span key={i} className="text-xs font-medium">{doc}</span>
                      ))}
                      <span className="text-[10px] text-[#808080]">{dispute.fileType}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-5">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium animate-fade-in ${dispute.remark === 'Won' ? 'bg-green-50 text-green-600' : dispute.remark === 'Lost' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-[#808080]'}`}>{dispute.remark}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ClearedTable; 