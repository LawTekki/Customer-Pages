
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-9 h-9 text-sm font-normal leading-5 cursor-pointer bg-white rounded-md border ${
              currentPage === i
                ? "text-[#6B047C] border-2 border-[#6B047C] font-medium"
                : "text-[#808080] border-[#E6E6E6] hover:border-[#6B047C] hover:text-[#6B047C]"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(
          <div
            key={`ellipsis-${i}`}
            className="w-9 h-9 text-[#808080] text-sm font-normal leading-5 bg-white rounded-md border border-[#E6E6E6] flex items-center justify-center"
          >
            …
          </div>
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-5 mb-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex justify-center items-center border cursor-pointer bg-white p-2 rounded-md border-solid border-[#E6E6E6] disabled:opacity-50 hover:border-[#6B047C] disabled:hover:border-[#E6E6E6]"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4 text-[#808080]" />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex justify-center items-center border cursor-pointer bg-white p-2 rounded-md border-solid border-[#E6E6E6] disabled:opacity-50 hover:border-[#6B047C] disabled:hover:border-[#E6E6E6]"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4 text-[#808080]" />
      </button>
    </div>
  );
};
