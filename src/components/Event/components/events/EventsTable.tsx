
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

interface Event {
  id: number;
  title: string;
  host: {
    name: string;
    image: string;
  };
  date: string;
  eventType: string;
  venue: string;
  fee: string | number;
  time: string;
  attendees: {
    count: number;
    images: string[];
  };
}

export const EventsTable = () => {
  const [currentPage, setCurrentPage] = useState(3);

  const events: Event[] = [
    {
      id: 1,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "Free",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] }
    },
    {
      id: 2,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$30",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] }
    },
    {
      id: 3,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] }
    },
    {
      id: 4,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] }
    },
    {
      id: 5,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] }
    },
    {
      id: 6,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/Frame 1000008098 (1).jpg" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] }
    },
  ];

  return (
    <div className="mt-6">
      <div className="hidden max-md:block">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg p-3 mb-4 border border-[#F2F2F2] hover:bg-gray-50 transition-colors max-w-[360px] mx-auto mt-4"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#1A011E] font-medium text-base">#{event.id}</span>
              <h3 className="text-[#1A011E] font-medium text-base">{event.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs">Host</p>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={event.host.image} alt={event.host.name} />
                    <AvatarFallback>{event.host.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="whitespace-nowrap">{event.host.name}</span>
                </div>
              </div>
              <div>
                <p className="text-[#808080] text-xs">Date</p>
                <p className="text-[#1A011E] text-sm">{event.date}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs">Event type</p>
                <p className="text-[#1A011E] text-sm">{event.eventType}</p>
              </div>
              <div>
                <p className="text-[#808080] text-xs">Venue</p>
                <p className="text-[#1A011E] text-sm">{event.venue}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs">Fee</p>
                <p className="text-[#1A011E] text-sm">{event.fee}</p>
              </div>
              <div>
                <p className="text-[#808080] text-xs">Time</p>
                <p className="text-[#1A011E] text-sm">{event.time}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-[#808080] text-xs">Attendees</p>
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-2">
                    {event.attendees.images.map((img, idx) => (
                      <Avatar key={idx} className="h-6 w-6 border-2 border-white">
                        <AvatarImage src={img} />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-[#6B047C] whitespace-nowrap">{event.attendees.count} +</span>
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
      <div className="rounded-md border border-[#F2F2F2] overflow-x-hidden max-md:hidden">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="bg-[#FAFAFA]">
              <TableHead className="text-[#808080] font-medium w-12 text-center">S/N</TableHead>
              <TableHead className="text-[#808080] font-medium w-[180px] whitespace-nowrap overflow-hidden text-ellipsis">Title</TableHead>
              <TableHead className="text-[#808080] font-medium w-[140px]">Host</TableHead>
              <TableHead className="text-[#808080] font-medium w-[160px] whitespace-nowrap">Date</TableHead>
              <TableHead className="text-[#808080] font-medium w-[100px]">Event type</TableHead>
              <TableHead className="text-[#808080] font-medium w-[120px]">Venue</TableHead>
              <TableHead className="text-[#808080] font-medium w-[80px]">Fee</TableHead>
              <TableHead className="text-[#808080] font-medium w-[100px]">Time</TableHead>
              <TableHead className="text-[#808080] font-medium w-[100px]">Attendees</TableHead>
              <TableHead className="text-[#808080] font-medium w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id} className="hover:bg-[#FAFAFA]">
                <TableCell className="text-center font-medium py-3">{event.id}</TableCell>
                <TableCell className="whitespace-nowrap overflow-hidden text-ellipsis py-3">
                  <span className="block truncate">{event.title}</span>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={event.host.image} alt={event.host.name} />
                      <AvatarFallback>{event.host.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="whitespace-nowrap">{event.host.name}</span>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap py-3">{event.date}</TableCell>
                <TableCell className="whitespace-nowrap py-3">{event.eventType}</TableCell>
                <TableCell className="whitespace-nowrap py-3">{event.venue}</TableCell>
                <TableCell className="whitespace-nowrap py-3">{event.fee}</TableCell>
                <TableCell className="whitespace-nowrap py-3">{event.time}</TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      {event.attendees.images.map((img, idx) => (
                        <Avatar key={idx} className="h-6 w-6 border-2 border-white">
                          <AvatarImage src={img} />
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-sm text-[#6B047C] whitespace-nowrap">{event.attendees.count} +</span>
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <Button variant="outline" size="sm" className="border-[#6B047C] text-[#6B047C] hover:bg-[#F5EDFC] hover:text-[#6B047C] whitespace-nowrap">
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
              />
            </PaginationItem>
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === page}
                  className={`${currentPage === page ? 'bg-[#6B047C] text-white' : 'border border-[#E6E6E6]'} rounded-md h-8 w-8 p-0 flex items-center justify-center`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                className="border border-[#E6E6E6] rounded-md"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
