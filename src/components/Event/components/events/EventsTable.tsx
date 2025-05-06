
import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Pagination } from "./Pagination";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useFilter } from "../../context/FilterContext";

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
  status: 'Ongoing' | 'Concluded' | 'Cancelled' | 'Pending';
}

export const EventsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filterStatus } = useFilter();
  const packagesPerPage = 5;

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
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
      status: "Ongoing"
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
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
      status: "Pending"
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
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
      status: "Concluded"
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
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
      status: "Cancelled"
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
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
      status: "Ongoing"
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
      attendees: { count: 56, images: ["/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg", "/Frame 1000008098 (1).jpg"] },
      status: "Pending"
    },
  ];

  const filteredEvents = useMemo(() => {
    if (filterStatus === 'Any') {
      return events;
    }
    return events.filter(event => event.status === filterStatus);
  }, [events, filterStatus]);

  // Calculate pagination
  const indexOfLastEvent = currentPage * packagesPerPage;
  const indexOfFirstEvent = indexOfLastEvent - packagesPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / packagesPerPage);

  return (
    <div className="mt-6">

      <div className="hidden max-md:block">
        {currentEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg p-4 mb-4 border border-[#F2F2F2] hover:bg-gray-50 transition-colors w-full max-w-[360px] mx-auto mt-4"
          >
            {/* Title Section */}
            <div className="mb-3">
              <h3 className="text-black font-bold text-sm line-clamp-2">#{event.id} {event.title}</h3>
            </div>

            {/* First Row - Host and Date */}
            <div className="flex mb-3">
              <div className="w-1/2">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Host</p>
                  <div className="flex items-center">
                    <Avatar className="h-5 w-5 mr-1">
                      <AvatarImage src={event.host.image} alt={event.host.name} />
                      <AvatarFallback>{event.host.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-[#1A011E] text-xs font-medium whitespace-nowrap">{event.host.name}</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 pl-4">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Date</p>
                  <p className="text-[#1A011E] text-xs font-medium whitespace-nowrap">{event.date}</p>
                </div>
              </div>
            </div>

            {/* Second Row - Event Type and Venue */}
            <div className="flex mb-3">
              <div className="w-1/2">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Event type</p>
                  <p className="text-[#1A011E] text-xs font-medium">{event.eventType}</p>
                </div>
              </div>
              <div className="w-1/2 pl-4">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Venue</p>
                  <p className="text-[#1A011E] text-xs font-medium">{event.venue}</p>
                </div>
              </div>
            </div>

            {/* Third Row - Fee and Time */}
            <div className="flex mb-3">
              <div className="w-1/2">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Fee</p>
                  <p className="text-[#1A011E] text-xs font-medium">{event.fee}</p>
                </div>
              </div>
              <div className="w-1/2 pl-4">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Time</p>
                  <p className="text-[#1A011E] text-xs font-medium">{event.time}</p>
                </div>
              </div>
            </div>

            {/* Fourth Row - Attendees and View Button */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#808080] text-xs mb-1">Attendees</p>
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-2">
                    {event.attendees.images.map((img, idx) => (
                      <Avatar key={idx} className="h-5 w-5 border-2 border-white">
                        <AvatarImage src={img} />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-xs text-[#6B047C] whitespace-nowrap">{event.attendees.count} +</span>
                </div>
              </div>
              <div className="w-[60%]">
                <Button
                  variant="outline"
                  className="px-4 py-1.5 rounded-md text-sm font-medium transition-colors w-full text-[#6B047C] border-[#6B047C] hover:bg-purple-50"
                >
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
            {currentEvents.map((event) => (
              <TableRow key={event.id} className="hover:bg-[#FAFAFA]">
                <TableCell className="text-center font-medium py-3">{event.id}</TableCell>
                <TableCell className="whitespace-nowrap overflow-hidden text-ellipsis py-3">
                  <span className="block truncate max-w-[180px]">{event.title}</span>
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
        {totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};
