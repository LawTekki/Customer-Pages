
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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

export const DisputeTable = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [totalPages] = useState(6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const disputes: Dispute[] = [
    {
      id: 1,
      orderNumber: "ED283424",
      supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
      category: "Order not recieved",
      date: "July 27 - July 31, 2024",
      status: "Pending",
      document: "Certificate"
    },
    {
      id: 2,
      orderNumber: "ED283424",
      supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
      category: "Order not recieved",
      date: "July 27 - July 31, 2024",
      status: "Pending",
      document: "Certificate"
    },
    {
      id: 3,
      orderNumber: "ED283424",
      supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
      category: "Order not recieved",
      date: "July 27 - July 31, 2024",
      status: "Pending",
      document: "Certificate"
    },
    {
      id: 4,
      orderNumber: "ED283424",
      supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
      category: "Order not recieved",
      date: "July 27 - July 31, 2024",
      status: "Pending",
      document: "Certificate"
    },
    {
      id: 5,
      orderNumber: "ED283424",
      supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
      category: "Order not recieved",
      date: "July 27 - July 31, 2024",
      status: "Pending",
      document: "Certificate"
    },
    {
      id: 6,
      orderNumber: "ED283424",
      supplier: { name: "Morgan Jules", image: "/lovable-uploads/52a08325-7a38-4c29-ba32-4296fc2ec744.png" },
      category: "Order not recieved",
      date: "July 27 - July 31, 2024",
      status: "Pending",
      document: "Certificate"
    },
  ];

  return (
    <div className="mt-6">
      <div className="hidden max-md:block">
        {disputes.map((dispute) => (
          <div
            key={dispute.id}
            className="bg-white rounded-lg p-3 mb-4 border border-[#F2F2F2] hover:bg-gray-50 transition-colors max-w-[360px] mx-auto mt-4 max-md:ml-[12px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#1A011E] font-medium text-base">#{dispute.id}</span>
              <h3 className="text-[#1A011E] font-medium text-base">{dispute.orderNumber}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs">Supplier</p>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={dispute.supplier.image} alt={dispute.supplier.name} />
                    <AvatarFallback>{dispute.supplier.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="whitespace-nowrap">{dispute.supplier.name}</span>
                </div>
              </div>
              <div>
                <p className="text-[#808080] text-xs">Category</p>
                <p className="text-[#1A011E] text-sm">{dispute.category}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs">Date</p>
                <p className="text-[#1A011E] text-sm">{dispute.date}</p>
              </div>
              <div>
                <p className="text-[#808080] text-xs">Status</p>
                <span className="bg-[#FFD85D] text-white text-xs px-4 py-1.5 rounded-full">
                  {dispute.status}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs">Documents</p>
                <div className="flex items-center">
                  <div className="bg-[#F44336] p-1 rounded mr-2">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{dispute.document}</span>
                    <span className="text-[10px] text-gray-500">PDF FILE</span>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="outline" size="sm" className="border-[#6B047C] text-[#6B047C] hover:bg-[#F5EDFC] hover:text-[#6B047C] whitespace-nowrap">
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-[#F2F2F2] max-md:hidden max-md:ml-[12px]">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#FAFAFA]">
              <TableHead className="text-[#808080] font-medium w-12 text-center">S/N</TableHead>
              <TableHead className="text-[#808080] font-medium">Order</TableHead>
              <TableHead className="text-[#808080] font-medium">Supplier name</TableHead>
              <TableHead className="text-[#808080] font-medium">Dispute category</TableHead>
              <TableHead className="text-[#808080] font-medium">Created date</TableHead>
              <TableHead className="text-[#808080] font-medium">Status</TableHead>
              <TableHead className="text-[#808080] font-medium">Documents</TableHead>
              <TableHead className="text-[#808080] font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {disputes.map((dispute) => (
              <TableRow key={dispute.id} className="hover:bg-[#FAFAFA]">
                <TableCell className="text-center font-medium">{dispute.id}</TableCell>
                <TableCell>{dispute.orderNumber}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={dispute.supplier.image} alt={dispute.supplier.name} />
                      <AvatarFallback>{dispute.supplier.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span>{dispute.supplier.name}</span>
                  </div>
                </TableCell>
                <TableCell>{dispute.category}</TableCell>
                <TableCell>{dispute.date}</TableCell>
                <TableCell>
                  <span className="bg-[#FFD85D] text-white text-xs px-3 py-1 rounded-full">
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
                      <span className="text-[10px] text-gray-500">PDF FILE</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="outline" className="border-[#6B047C] text-[#6B047C] hover:bg-[#F5EDFC] hover:text-[#6B047C]">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                className="border border-[#E6E6E6] rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
              />
            </PaginationItem>
            {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === page}
                  className={`${
                    currentPage === page ? "bg-[#6B047C] text-white" : "border border-[#E6E6E6]"
                  } rounded-md h-8 w-8 p-0 flex items-center justify-center`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                className="border border-[#E6E6E6] rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
