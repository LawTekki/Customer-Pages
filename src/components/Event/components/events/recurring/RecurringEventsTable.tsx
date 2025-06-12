import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const recurringEvents = [
  {
    id: 1,
    title: 'Weekly Legal Update',
    host: { name: 'Rachel Adams', image: '/Frame 1000008098 (1).jpg' },
    date: 'Every Monday',
    eventType: 'Virtual',
    venue: 'Zoom',
    fee: 'Free',
    time: '5pm - 6pm',
    attendees: { count: 30, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Monthly Law Review',
    host: { name: 'James Lee', image: '/Frame 1000008098 (1).jpg' },
    date: '1st of every month',
    eventType: 'Hybrid',
    venue: 'Law Auditorium',
    fee: '$50',
    time: '2pm - 4pm',
    attendees: { count: 60, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Quarterly Compliance Check',
    host: { name: 'Linda Park', image: '/Frame 1000008098 (1).jpg' },
    date: 'Quarterly',
    eventType: 'In-person',
    venue: 'Compliance Center',
    fee: '$200',
    time: '10am - 12pm',
    attendees: { count: 25, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Annual Legal Summit',
    host: { name: 'Tom Harris', image: '/Frame 1000008098 (1).jpg' },
    date: 'Once a year',
    eventType: 'Hybrid',
    venue: 'Grand Hall',
    fee: '$500',
    time: '9am - 5pm',
    attendees: { count: 200, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Ongoing',
  },
  {
    id: 5,
    title: 'Friday Q&A',
    host: { name: 'Nina Patel', image: '/Frame 1000008098 (1).jpg' },
    date: 'Every Friday',
    eventType: 'Virtual',
    venue: 'Google Meet',
    fee: 'Free',
    time: '4pm - 5pm',
    attendees: { count: 40, images: ['/Frame 1000008098 (1).jpg'] },
    status: 'Ongoing',
  },
];

const ROWS_PER_PAGE = 5;

const RecurringEventsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(recurringEvents.length / ROWS_PER_PAGE);
  const startIdx = (currentPage - 1) * ROWS_PER_PAGE;
  const currentEvents = recurringEvents.slice(startIdx, startIdx + ROWS_PER_PAGE);

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

export default RecurringEventsTable; 