
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
    avatar: "/Frame 1000008098.jpg",
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
    <div className="items-stretch rounded bg-neutral-50 flex w-full flex-col overflow-hidden mt-[21px] pb-2">
      <div className="flex items-center text-xs text-[#808080] font-medium tracking-[-0.24px] leading-[1.3] flex-wrap">
        <div className="w-full">
          <div className="hidden max-md:block">
            {currentContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-lg p-3 mb-4 border border-[#F2F2F2] hover:bg-gray-50 transition-colors max-w-[360px] mx-auto mt-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={contact.avatar}
                    className="aspect-[1] object-contain w-10 h-10 rounded-[100px]"
                    alt={contact.name}
                  />
                  <div>
                    <h3 className="text-[#1A011E] font-medium text-base">{contact.name}</h3>
                    <p className="text-[#808080] text-xs">S/N: {contact.id}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-[#808080] text-xs">Completed deals</p>
                    <p className="text-[#1A011E] text-sm">{contact.completedDeals}</p>
                  </div>
                  <div>
                    <p className="text-[#808080] text-xs">Amount spent</p>
                    <p className="text-[#1A011E] text-sm">{contact.amountSpent}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-[#808080] text-xs">Last deal date</p>
                    <p className="text-[#1A011E] text-sm">{contact.lastDealDate}</p>
                  </div>
                  <div>
                    <button
                      className="w-full text-[#6B047C] border border-[#6B047C] px-3 py-1.5 rounded-lg text-xs flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors"
                      onClick={() => handleMessageClick(contact.name)}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <table className="w-full max-md:hidden">
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