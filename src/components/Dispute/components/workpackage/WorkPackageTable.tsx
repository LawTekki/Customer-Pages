
import React from 'react';
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
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

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

const workPackages: WorkPackage[] = [
  {
    id: 1,
    title: 'Curating a customize agreement between landlord and tenant',
    responses: 24,
    talentHired: null,
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Ongoing',
    budget: '$300'
  },
  {
    id: 2,
    title: 'Curating a customize agreement between landlord and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Concluded',
    budget: '$300'
  },
  {
    id: 3,
    title: 'Curating a customize agreement between landlord and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Cancelled',
    budget: '$300'
  },
  {
    id: 4,
    title: 'Curating a customize agreement between landlord and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Concluded',
    budget: '$300'
  },
  {
    id: 5,
    title: 'Curating a customize agreement between landlord and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Concluded',
    budget: '$300'
  },
  {
    id: 6,
    title: 'Curating a customize agreement between landlord and tenant',
    responses: 24,
    talentHired: 'Morgan Jules',
    talentImage: 'https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7742ca1ee319b52420c3d7f07578f2bf884ef5e0?placeholderIfAbsent=true',
    postedDate: 'July 27, 2024 | 12:42pm',
    status: 'Pending',
    budget: '$300'
  }
];

export const WorkPackageTable = () => {
  const [currentPage, setCurrentPage] = React.useState(3);
  
  return (
    <div className="mt-6">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[60px] text-left">S/N</TableHead>
              <TableHead className="text-left">Title</TableHead>
              <TableHead className="text-left">Responses</TableHead>
              <TableHead className="text-left">Talent hired</TableHead>
              <TableHead className="text-left">Posted date</TableHead>
              <TableHead className="text-left">Status</TableHead>
              <TableHead className="text-left">Budget</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workPackages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell>{pkg.id}</TableCell>
                <TableCell>{pkg.title}</TableCell>
                <TableCell>{pkg.responses}</TableCell>
                <TableCell>
                  {pkg.talentHired ? (
                    <div className="flex items-center gap-2">
                      <img 
                        src={pkg.talentImage} 
                        alt={pkg.talentHired} 
                        className="w-7 h-7 rounded-full" 
                      />
                      <span>{pkg.talentHired}</span>
                    </div>
                  ) : (
                    "None yet"
                  )}
                </TableCell>
                <TableCell>{pkg.postedDate}</TableCell>
                <TableCell>
                  <span className={`rounded-full px-3 py-1 text-xs ${getStatusClass(pkg.status)}`}>
                    {pkg.status}
                  </span>
                </TableCell>
                <TableCell>{pkg.budget}</TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    className="text-[#6B047C] border-[#6B047C] hover:bg-[#6B047C] hover:text-white"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                className="border rounded-md" 
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">6</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext 
                className="border rounded-md" 
                href="#" 
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
