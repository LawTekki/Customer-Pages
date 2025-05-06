
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
      host: { name: "Morgan Jules", image: "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "Free",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png"] }
    },
    {
      id: 2,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$30",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png"] }
    },
    {
      id: 3,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png"] }
    },
    {
      id: 4,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png"] }
    },
    {
      id: 5,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png"] }
    },
    {
      id: 6,
      title: "Curating a customize agreement",
      host: { name: "Morgan Jules", image: "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png" },
      date: "July 27 - July 31, 2024",
      eventType: "Virtual",
      venue: "Google meet",
      fee: "$300",
      time: "9am - 12pm",
      attendees: { count: 56, images: ["/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png", "/lovable-uploads/bcc2714f-c858-449f-a47f-b93ac31e19f2.png"] }
    },
  ];

  return (
    <div className="mt-6">
      <div className="rounded-md border border-[#F2F2F2]">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#FAFAFA]">
              <TableHead className="text-[#808080] font-medium w-12 text-center">S/N</TableHead>
              <TableHead className="text-[#808080] font-medium">Title</TableHead>
              <TableHead className="text-[#808080] font-medium">Host</TableHead>
              <TableHead className="text-[#808080] font-medium">Date</TableHead>
              <TableHead className="text-[#808080] font-medium">Event type</TableHead>
              <TableHead className="text-[#808080] font-medium">Venue</TableHead>
              <TableHead className="text-[#808080] font-medium">Fee</TableHead>
              <TableHead className="text-[#808080] font-medium">Time</TableHead>
              <TableHead className="text-[#808080] font-medium">Attendees</TableHead>
              <TableHead className="text-[#808080] font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id} className="hover:bg-[#FAFAFA]">
                <TableCell className="text-center font-medium">{event.id}</TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={event.host.image} alt={event.host.name} />
                      <AvatarFallback>{event.host.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span>{event.host.name}</span>
                  </div>
                </TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.eventType}</TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>{event.fee}</TableCell>
                <TableCell>{event.time}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      {event.attendees.images.map((img, idx) => (
                        <Avatar key={idx} className="h-6 w-6 border-2 border-white">
                          <AvatarImage src={img} />
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-sm text-[#6B047C]">{event.attendees.count} +</span>
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
