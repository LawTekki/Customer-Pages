import React, { useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination } from './Pagination';

type StatusType = 'Draft' | 'In Progress';

interface DraftPackage {
  id: number;
  title: string;
  lastEdited: string;
  status: StatusType;
}

const getStatusClass = (status: StatusType): string => {
  switch (status) {
    case 'Draft':
      return 'bg-gray-500 text-white';
    case 'In Progress':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-200';
  }
};

const getMobileStatusClass = (status: StatusType): string => {
  switch (status) {
    case 'Draft':
      return 'text-gray-500';
    case 'In Progress':
      return 'text-blue-500';
    default:
      return 'text-gray-200';
  }
};

// Generate mock data
const generateDraftPackages = (count: number): DraftPackage[] => {
  const statuses: StatusType[] = ['Draft', 'In Progress'];
  const packages: DraftPackage[] = [];

  for (let i = 1; i <= count; i++) {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    packages.push({
      id: i,
      title: i % 3 === 0
        ? 'Draft agreement between\nlandlord and tenant with additional terms and conditions that might exceed the two-line limit'
        : 'Draft agreement between\nlandlord and tenant',
      lastEdited: 'July 27, 2024 | 12:42pm',
      status: status
    });
  }

  return packages;
};

const draftPackages: DraftPackage[] = generateDraftPackages(10);

export const DraftTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 5;

  // Calculate pagination
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = draftPackages.slice(indexOfFirstPackage, indexOfLastPackage);
  const totalPages = Math.ceil(draftPackages.length / packagesPerPage);

  return (
    <div className="mt-6">
      <div className="hidden max-md:block">
        {currentPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg p-4 mb-4 border border-[#F2F2F2] hover:bg-gray-50 transition-colors max-w-[360px] mx-auto mt-4"
          >
            {/* Title Section */}
            <div className="mb-3">
              <h3 className="text-black font-bold text-sm line-clamp-2">#{pkg.id} {pkg.title}</h3>
            </div>

            {/* First Row - Status */}
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-[#808080] text-xs mb-1">Status</p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getStatusClass(pkg.status)}`}>
                  {pkg.status}
                </span>
              </div>
              <div>
                <p className="text-[#808080] text-xs mb-1">Last edited</p>
                <p className="text-[#1A011E] text-xs font-medium whitespace-nowrap">{pkg.lastEdited}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <Button
                  variant="outline"
                  className="text-[#6B047C] border-[#6B047C] px-4 py-1.5 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors w-full"
                >
                  Edit
                </Button>
              </div>
              <div className="w-1/2">
                <Button
                  variant="outline"
                  className="text-[#6B047C] border-[#6B047C] px-4 py-1.5 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors w-full"
                >
                  Publish
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-md border max-md:hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[60px] text-left">S/N</TableHead>
              <TableHead className="text-left">Title</TableHead>
              <TableHead className="text-left">Last edited</TableHead>
              <TableHead className="text-left">Status</TableHead>
              <TableHead className="text-left">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPackages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell>{pkg.id}</TableCell>
                <TableCell>
                  <div className="max-w-[300px]">
                    <p className="line-clamp-2 text-sm">{pkg.title}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="whitespace-nowrap text-sm">{pkg.lastEdited}</div>
                </TableCell>
                <TableCell>
                  <span className={`rounded-full px-3 py-1 text-xs ${getStatusClass(pkg.status)}`}>
                    {pkg.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="text-[#6B047C] border-[#6B047C] hover:bg-[#6B047C] hover:text-white"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      className="text-[#6B047C] border-[#6B047C] hover:bg-[#6B047C] hover:text-white"
                    >
                      Publish
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex justify-center">
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
