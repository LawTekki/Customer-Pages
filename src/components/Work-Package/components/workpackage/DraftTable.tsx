import React, { useMemo, useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../../components/ui/table";
import { Button } from "@/components/ui/button";
import { useCount } from '../../context/CountContext';
import { Pagination } from './Pagination';

type StatusType = 'Draft' | 'In Progress';

interface DraftPackage {
  id: number;
  title: string;
  lastEdited: string;
  budget: string;
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
        ? 'Curating a customize agreement between landlord and tenant'
        : 'Curating a customize agreement between landlord and tenant',
      lastEdited: 'July 27, 2024 | 12:42pm',
      budget: '$300',
      status: status
    });
  }

  return packages;
};

// Generate exactly 10 draft packages
const draftPackages: DraftPackage[] = generateDraftPackages(10);

export const DraftTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { setDraftCount } = useCount();
  const packagesPerPage = 5;

  // Ensure count is always set to the correct number
  useEffect(() => {
    setDraftCount(draftPackages.length);
    // Set up an interval to ensure the count stays correct
    const interval = setInterval(() => {
      setDraftCount(draftPackages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [setDraftCount]);

  // Calculate pagination
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = draftPackages.slice(indexOfFirstPackage, indexOfLastPackage);
  const totalPages = Math.ceil(draftPackages.length / packagesPerPage);

  return (
    <div className="mt-6">
      <div className="hidden max-md:block">
        {currentPackages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg p-4 mb-4 border border-[#F2F2F2] fade-in card-hover hover-lift click-shrink max-w-[360px] mx-auto mt-4"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            {/* Title Section */}
            <div className="mb-3">
              <h3 className="text-black font-bold text-sm line-clamp-2">{pkg.id} {pkg.title}</h3>
            </div>
            {/* Last Edited and Budget Row */}
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-[#808080] text-xs mb-1">Last edited</p>
                <p className="text-[#1A011E] text-xs font-medium whitespace-nowrap">{pkg.lastEdited}</p>
              </div>
              <div>
                <p className="text-[#808080] text-xs mb-1">Budget</p>
                <p className="text-[#1A011E] text-xs font-medium whitespace-nowrap">{pkg.budget}</p>
              </div>
            </div>
            {/* Action Button */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="text-[#6B047C] border-[#6B047C] px-4 py-1.5 rounded-md text-sm font-medium transition-transform duration-300 hover:scale-105 w-20 button-pulse click-bounce"
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-md border max-md:hidden w-full fade-in">
        <div className="w-full">
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[5%] text-left hover:bg-gray-100 transition-colors">S/N</TableHead>
                <TableHead className="w-[40%] text-left hover:bg-gray-100 transition-colors">Title</TableHead>
                <TableHead className="w-[25%] text-left hover:bg-gray-100 transition-colors">Last edited</TableHead>
                <TableHead className="w-[15%] text-left hover:bg-gray-100 transition-colors">Budget</TableHead>
                <TableHead className="w-[15%] text-left hover:bg-gray-100 transition-colors">Action</TableHead>
              </TableRow>
            </TableHeader>
          <TableBody>
            {currentPackages.map((pkg, index) => (
              <TableRow
                key={pkg.id}
                className="table-row-hover fade-in click-shrink"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <TableCell className="truncate">{pkg.id}</TableCell>
                <TableCell>
                  <div className="max-w-[300px]">
                    <p className="line-clamp-2 text-sm">{pkg.title}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="whitespace-nowrap text-sm truncate">{pkg.lastEdited}</div>
                </TableCell>
                <TableCell>
                  <div className="whitespace-nowrap text-sm truncate">{pkg.budget}</div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="text-[#6B047C] border-[#6B047C] hover:bg-[#6B047C] hover:text-white transition-transform duration-300 hover:scale-105 w-20 button-pulse click-bounce"
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
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
