
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
import { useFilter } from '../../context/FilterContext';
import { Pagination } from './Pagination';

type StatusType = 'Ongoing' | 'Concluded' | 'Cancelled' | 'Pending';

interface WorkPackage {
  id: number;
  title: string;
  responses: number;
  talentHired: string | null;
  talentImage?: string;
  postedDate: string;
  status: StatusType;
  budget: string;
}

const getStatusClass = (status: StatusType): string => {
  switch (status) {
    case 'Ongoing':
      return 'bg-blue-500 text-white';
    case 'Concluded':
      return 'bg-green-700 text-white';
    case 'Cancelled':
      return 'bg-red-600 text-white';
    case 'Pending':
      return 'bg-yellow-400 text-black';
    default:
      return 'bg-gray-200';
  }
};

const getMobileStatusClass = (status: StatusType): string => {
  switch (status) {
    case 'Ongoing':
      return 'text-blue-500';
    case 'Concluded':
      return 'text-green-700';
    case 'Cancelled':
      return 'text-red-600';
    case 'Pending':
      return 'text-yellow-400';
    default:
      return 'text-gray-200';
  }
};

// Define specific work packages for the first page
const workPackages: WorkPackage[] = [
  {
    id: 1,
    title: 'Curating a customize agreement betwcen\nlandlond and tenant',
    responses: 24,
    talentHired: null,
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Ongoing',
    budget: '$4900'
  },
  {
    id: 2,
    title: 'Curating a customize agreement\nbetweon landlord and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Concluded',
    budget: '$1300'
  },
  {
    id: 3,
    title: 'Cursting a custemize agreement\nbetween landlerd and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Cancelled',
    budget: '$300'
  },
  {
    id: 4,
    title: 'Curating a customize agreemant\nbetween langlord and tenart',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Concluded',
    budget: '$300'
  },
  {
    id: 5,
    title: 'Cutating a cutomize agruemant\nbetwen landlord and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Concluded',
    budget: '$300'
  },
  {
    id: 6,
    title: 'Curatiag a customize agreemont\nbatween landlerd and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Pending',
    budget: '$900'
  }
];

export const WorkPackageTable = () => {
  const { filterStatus } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 5;

  const filteredWorkPackages = useMemo(() => {
    if (filterStatus === 'Any') {
      return workPackages;
    }
    return workPackages.filter(pkg => pkg.status === filterStatus);
  }, [filterStatus]);

  // Calculate pagination
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredWorkPackages.slice(indexOfFirstPackage, indexOfLastPackage);
  const totalPages = Math.ceil(filteredWorkPackages.length / packagesPerPage);

  return (
    <div className="mt-6 fade-in overflow-x-hidden" style={{ animationDelay: '0.4s' }}>
      <div className="hidden max-md:block">
        {currentPackages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg p-4 mb-4 border border-[#F2F2F2] fade-in max-w-[360px] mx-auto mt-4"
            style={{ animationDelay: `${0.5 + index * 0.05}s` }}
          >
            {/* Title Section */}
            <div className="mb-3">
              <h3 className="text-black font-bold text-sm line-clamp-2">#{pkg.id} {pkg.title}</h3>
            </div>

            <div className="flex mb-3">
              {/* Left Column - Talent hired and Posted date */}
              <div className="w-1/2">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Talent hired</p>
                  {pkg.talentHired ? (
                    <div className="flex items-center">
                      <img
                        src={pkg.talentImage}
                        alt={pkg.talentHired}
                        className="w-5 h-5 rounded-full mr-1 hover-scale icon-bounce"
                      />
                      <span className="text-[#1A011E] text-xs font-medium">{pkg.talentHired}</span>
                    </div>
                  ) : (
                    <span className="text-[#808080] text-xs">None yet</span>
                  )}
                </div>

                <div>
                  <p className="text-[#808080] text-xs mb-1">Posted date</p>
                  <p className="text-[#1A011E] text-xs font-medium whitespace-nowrap">{pkg.postedDate}</p>
                </div>
              </div>

              {/* Right Column - Status and Responses */}
              <div className="w-1/2 pl-10">
                <div className="mb-2">
                  <p className="text-[#808080] text-xs mb-1">Status</p>
                  <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full inline-block hover-scale transition-all duration-300 ${getStatusClass(pkg.status)}`}>
                    {pkg.status}
                  </span>
                </div>

                <div>
                  <p className="text-[#808080] text-xs mb-1">Responses</p>
                  <p className="text-[#1A011E] text-xs font-medium">{pkg.responses}</p>
                </div>
              </div>
            </div>

            {/* Third Row - Budget and View Button */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#808080] text-xs mb-1">Budget</p>
                <p className="text-[#1A011E] text-xs font-medium">{pkg.budget}</p>
              </div>
              <div className="w-[60%]">
                <Button
                  variant="outline"
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-transform duration-300 w-full hover:scale-105 ${
                    pkg.status === 'Cancelled'
                      ? 'text-[#808080] border-[#808080] hover:bg-gray-50'
                      : 'text-[#6B047C] border-[#6B047C] hover:bg-purple-50'
                  }`}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-md border max-md:hidden fade-in overflow-x-hidden w-full" style={{ animationDelay: '0.5s' }}>
        <div className="overflow-x-hidden w-full">
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[5%] text-left">S/N</TableHead>
                <TableHead className="w-[20%] text-left">Title</TableHead>
                <TableHead className="w-[10%] text-left">Responses</TableHead>
                <TableHead className="w-[15%] text-left">Talent hired</TableHead>
                <TableHead className="w-[15%] text-left">Posted date</TableHead>
                <TableHead className="w-[10%] text-left">Status</TableHead>
                <TableHead className="w-[10%] text-left">Budget</TableHead>
                <TableHead className="w-[15%] text-left">Action</TableHead>
              </TableRow>
            </TableHeader>
          <TableBody>
            {currentPackages.map((pkg, index) => (
              <TableRow key={pkg.id} className="table-row-hover fade-in" style={{ animationDelay: `${0.6 + index * 0.05}s` }}>
                <TableCell className="truncate">{pkg.id}</TableCell>
                <TableCell>
                  <div className="max-w-[300px]">
                    <p className="line-clamp-2 text-sm">{pkg.title}</p>
                  </div>
                </TableCell>
                <TableCell className="truncate">{pkg.responses}</TableCell>
                <TableCell>
                  {pkg.talentHired ? (
                    <div className="flex items-center gap-2">
                      <img
                        src={pkg.talentImage}
                        alt={pkg.talentHired}
                        className="w-7 h-7 rounded-full hover-scale icon-bounce"
                      />
                      <span className="truncate">{pkg.talentHired}</span>
                    </div>
                  ) : (
                    "None yet"
                  )}
                </TableCell>
                <TableCell>
                  <div className="whitespace-nowrap text-sm truncate">{pkg.postedDate}</div>
                </TableCell>
                <TableCell>
                  <span className={`rounded-full px-3 py-1 text-xs hover-scale transition-all duration-300 ${getStatusClass(pkg.status)}`}>
                    {pkg.status}
                  </span>
                </TableCell>
                <TableCell className="truncate">{pkg.budget}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className={`transition-transform duration-300 hover:scale-105 ${
                      pkg.status === 'Cancelled'
                        ? 'text-[#808080] border-[#808080] hover:bg-gray-50'
                        : 'text-[#6B047C] border-[#6B047C] hover:bg-[#6B047C] hover:text-white'
                    }`}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
      </div>

      <div className="mt-4 flex justify-center fade-in" style={{ animationDelay: '0.7s' }}>
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
