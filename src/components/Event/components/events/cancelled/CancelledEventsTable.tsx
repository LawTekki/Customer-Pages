import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const cancelledEvents = [
  // ... existing 5 events ...
  {
    id: 1,
    title: 'International Law Conference',
    host: { name: 'Maria Garcia', image: '/Frame 1000008098 (1).jpg' },
    date: 'May 20, 2024',
    eventType: 'Hybrid',
    venue: 'International Center',
    fee: '$349',
    time: '9am - 6pm',
    attendees: { count: 100, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Cancelled',
  },
  {
    id: 2,
    title: 'Legal Tech Expo',
    host: { name: 'Brian White', image: '/Frame 1000008098 (1).jpg' },
    date: 'April 15, 2024',
    eventType: 'Virtual',
    venue: 'Zoom',
    fee: '$120',
    time: '10am - 1pm',
    attendees: { count: 60, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Cancelled',
  },
  {
    id: 3,
    title: 'Legal Marketing Summit',
    host: { name: 'Jessica Brown', image: '/Frame 1000008098 (1).jpg' },
    date: 'March 5, 2024',
    eventType: 'In-person',
    venue: 'Marketing Hall',
    fee: '$200',
    time: '2pm - 5pm',
    attendees: { count: 40, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Cancelled',
  },
  {
    id: 4,
    title: 'Legal Design Thinking',
    host: { name: 'Kevin Lee', image: '/Frame 1000008098 (1).jpg' },
    date: 'February 10, 2024',
    eventType: 'Hybrid',
    venue: 'Design Center',
    fee: '$180',
    time: '11am - 2pm',
    attendees: { count: 30, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Cancelled',
  },
  {
    id: 5,
    title: 'Legal Innovation Forum',
    host: { name: 'Samantha Green', image: '/Frame 1000008098 (1).jpg' },
    date: 'January 20, 2024',
    eventType: 'Virtual',
    venue: 'Google Meet',
    fee: '$90',
    time: '3pm - 6pm',
    attendees: { count: 20, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Cancelled',
  },
];

const ROWS_PER_PAGE = 5;

const CancelledEventsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cancelledEvents.length / ROWS_PER_PAGE);
  const startIdx = (currentPage - 1) * ROWS_PER_PAGE;
  const currentEvents = cancelledEvents.slice(startIdx, startIdx + ROWS_PER_PAGE);

  return (
    <div className="fade-in">
      <Table className="table-fixed w-full fade-in">
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Host</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Event type</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Attendees</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEvents.map((event, idx) => (
            <TableRow key={event.id} className="table-row-hover fade-in" style={{ animationDelay: `${0.1 + idx * 0.05}s` }}>
              <TableCell>{event.id}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-7 w-7">
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
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    {event.attendees.images.map((img, idx) => (
                      <Avatar key={idx} className="h-5 w-5 border-2 border-white">
                        <AvatarImage src={img} />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span>{event.attendees.count} +</span>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="border-[#6B047C] text-[#6B047C] hover:bg-[#F5EDFC] hover:text-[#6B047C] rounded-md px-3 py-2 text-[14px] font-medium min-w-[60px] min-h-[32px] click-shrink">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 fade-in">
          <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="mx-2">&lt;</Button>
          <span className="mx-2">{currentPage} / {totalPages}</span>
          <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="mx-2">&gt;</Button>
        </div>
      )}
    </div>
  );
};

export default CancelledEventsTable; 