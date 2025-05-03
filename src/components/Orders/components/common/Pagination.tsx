
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="self-center flex items-center justify-center gap-2 my-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="justify-center items-center border border-[#E6E6E6] flex w-9 h-9 bg-white rounded-md border-solid disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4 text-[#808080]" />
      </button>

      <div className="flex gap-2 text-sm whitespace-nowrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex items-center justify-center min-h-9 w-9 rounded-md",
              currentPage === page
                ? "text-[#6B047C] border border-[#6B047C] bg-white font-medium"
                : "text-[#808080] bg-white border border-[#E6E6E6]"
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="justify-center items-center border border-[#E6E6E6] flex w-9 h-9 bg-white rounded-md border-solid disabled:opacity-50"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4 text-[#808080]" />
      </button>
    </div>
  );
};
