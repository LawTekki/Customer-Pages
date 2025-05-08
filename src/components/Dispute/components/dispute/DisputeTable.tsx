import { useState, useEffect } from "react";
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

export const DisputeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();

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

  // Items per page
  const disputesPerPage = 5;

  // Calculate pagination
  const indexOfLastDispute = currentPage * disputesPerPage;
  const indexOfFirstDispute = indexOfLastDispute - disputesPerPage;
  const currentDisputes = disputes.slice(indexOfFirstDispute, indexOfLastDispute);
  const totalPages = Math.ceil(disputes.length / disputesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-6 max-md:px-4 fade-in" style={{ animationDelay: '0.1s', overflow: 'hidden' }}>
      <div className="hidden max-md:block" style={{ overflow: 'hidden' }}>
        {currentDisputes.map((dispute, index) => (
          <div
            key={dispute.id}
            className="bg-white rounded-lg p-3 mb-4 border border-[#F2F2F2] hover:bg-gray-50 transition-colors hover-lift card-hover click-shrink fade-in max-w-[360px] mx-auto mt-4"
            style={{ animationDelay: `${0.1 + index * 0.05}s`, overflow: 'hidden' }}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#1A011E] font-medium text-base">#{dispute.id}</span>
              <h3 className="text-[#1A011E] font-medium text-base">{dispute.orderNumber}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs pl-2">Supplier</p>
                <div className="flex items-center pl-2">
                  <Avatar className="h-8 w-8 mr-2 hover-scale icon-bounce">
                    <AvatarImage src={dispute.supplier.image} alt={dispute.supplier.name} />
                    <AvatarFallback>
                      <img src="/Frame 1000008098 (2).jpg" alt="Fallback" className="h-full w-full object-cover" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="whitespace-nowrap">{dispute.supplier.name}</span>
                </div>
              </div>
              <div>
                <p className="text-[#808080] text-xs pl-2">Category</p>
                <p className="text-[#1A011E] text-sm pl-2">{dispute.category}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs pl-2">Date</p>
                <p className="text-[#1A011E] text-sm pl-2">{dispute.date}</p>
              </div>
              <div>
                <p className="text-[#808080] text-xs pl-2">Status</p>
                <div className="pl-2">
                  <span className="bg-[#FDC721] text-white text-xs px-4 py-1.5 rounded-full">
                    {dispute.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs pl-2">Documents</p>
                <div className="flex items-center pl-2">
                  <div className="bg-[#F44336] p-1 rounded mr-2">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{dispute.document}</span>
                    <span className="text-[10px] text-gray-500">PDF FILE</span>
                  </div>
                </div>
              </div>
              <div className="pl-2 flex justify-end">
                <Button variant="outline" size="sm" className="border-[#6B047C] text-[#6B047C] hover:bg-[#F5EDFC] hover:text-[#6B047C] whitespace-nowrap hover-scale click-shrink button-pulse">
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-[#F2F2F2] max-md:hidden fade-in table-container" style={{ animationDelay: '0.3s', overflow: 'hidden' }}>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="bg-[#FAFAFA] fade-in" style={{ animationDelay: '0.3s' }}>
              <TableHead className="text-[#808080] font-medium w-12 text-center hover:bg-gray-100 transition-colors">S/N</TableHead>
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
              <TableRow key={dispute.id} className="hover:bg-[#FAFAFA] table-row-hover click-shrink fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                <TableCell className="text-center font-medium">{indexOfFirstDispute + index + 1}</TableCell>
                <TableCell>{dispute.orderNumber}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2 hover-scale icon-bounce">
                      <AvatarImage src={dispute.supplier.image} alt={dispute.supplier.name} />
                      <AvatarFallback>
                        <img src="/Frame 1000008098 (2).jpg" alt="Fallback" className="h-full w-full object-cover" />
                      </AvatarFallback>
                    </Avatar>
                    <span>{dispute.supplier.name}</span>
                  </div>
                </TableCell>
                <TableCell>{dispute.category}</TableCell>
                <TableCell>{dispute.date}</TableCell>
                <TableCell>
                  <span className="bg-[#FDC721] text-white text-xs px-3 py-1 rounded-full">
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
                  <Button variant="outline" className="border-[#6B047C] text-[#6B047C] hover:bg-[#F5EDFC] hover:text-[#6B047C] hover-scale click-shrink button-pulse">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 fade-in" style={{ animationDelay: '0.4s', overflow: 'hidden' }}>
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
