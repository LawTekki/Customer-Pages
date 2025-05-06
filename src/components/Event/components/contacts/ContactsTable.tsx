
import React, { useState } from "react";
import { Pagination } from "../ui/pagination";
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
