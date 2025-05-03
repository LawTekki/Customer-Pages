
import React, { useState } from "react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationPrevious, 
  PaginationNext, 
  PaginationEllipsis 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

interface Contact {
  id: number;
  name: string;
  avatar: string;
  completedDeals: number;
  amountSpent: string;
  lastDealDate: string;
}

// Mock contact data
const mockContacts: Contact[] = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: "Morgan Jules",
    avatar: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true",
    completedDeals: Math.floor(Math.random() * 30) + 10,
    amountSpent: `$${Math.floor(Math.random() * 500) + 100}`,
    lastDealDate: "July 27, 2024 | 12:42pm",
  }));

export const ContactsTable = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 8;
  
  // Calculate pagination
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = mockContacts.slice(indexOfFirstContact, indexOfLastContact);
  const totalPages = Math.ceil(mockContacts.length / contactsPerPage);
  
  // Handle message button click
  const handleMessageClick = (contactName: string) => {
    toast({
      title: "Message Initiated",
      description: `Starting conversation with ${contactName}`,
    });
    console.log(`Messaging ${contactName}`);
  };
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        // If current page is among the first 3, show first 3, ellipsis, and last 3
        pages.push(1, 2, 3, "ellipsis", totalPages - 2, totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        // If current page is among the last 3, show first 1, ellipsis, and last 3
        pages.push(1, "ellipsis", totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show first, ellipsis, current-1, current, current+1, ellipsis, last
        pages.push(1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="items-stretch rounded bg-neutral-50 flex w-full flex-col overflow-hidden mt-[21px] pb-2 max-md:max-w-full">
      <div className="flex items-center text-xs text-[#808080] font-medium tracking-[-0.24px] leading-[1.3] flex-wrap">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E6E6E6] bg-neutral-50 text-[#1A011E]">
              <th className="px-[7px] py-5 text-left w-[72px]">S/N</th>
              <th className="px-6 py-5 text-left w-[274px]">Title</th>
              <th className="px-[19px] py-5 text-left w-48">Completed deals</th>
              <th className="px-6 py-5 text-left w-[244px]">Amount spent</th>
              <th className="px-6 py-5 text-left w-[265px]">Last deal date</th>
              <th className="px-[23px] py-5 text-left w-[228px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((contact) => (
              <tr
                key={contact.id}
                className="border-b border-[#F2F2F2] bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="px-[7px] py-6">{contact.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={contact.avatar}
                      className="aspect-[1] object-contain w-8 rounded-[100px]"
                      alt={contact.name}
                    />
                    <span>{contact.name}</span>
                  </div>
                </td>
                <td className="px-[19px] py-4">{contact.completedDeals}</td>
                <td className="px-6 py-4">{contact.amountSpent}</td>
                <td className="px-6 py-4">{contact.lastDealDate}</td>
                <td className="px-[23px] py-[15px]">
                  <button 
                    className="w-full text-[#6B047C] border border-[#6B047C] px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors"
                    onClick={() => handleMessageClick(contact.name)}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                className="border border-[#B3B3B3] h-9 w-9 p-0 flex items-center justify-center"
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            
            {getPageNumbers().map((page, index) => (
              <PaginationItem key={index}>
                {page === "ellipsis" ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    className={`h-9 w-9 p-0 flex items-center justify-center ${
                      page === currentPage 
                        ? "border border-[#6B047C] text-[#6B047C]" 
                        : "text-[#CCC]"
                    }`}
                    isActive={page === currentPage}
                    onClick={() => typeof page === "number" && setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext
                className="border border-[#B3B3B3] h-9 w-9 p-0 flex items-center justify-center"
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
