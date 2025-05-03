import React from "react";

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
  return (
    <div className="self-center flex items-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="justify-center items-center border border-[color:var(--Grey-5,#B3B3B3)] flex w-9 h-9 bg-white rounded-md border-solid"
        aria-label="Previous page"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/284db19ba518f6ad880ec68ffb8d85e59ad1d855?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5"
          alt="Previous"
        />
      </button>

      <div className="self-stretch flex min-w-60 gap-0.5 text-sm text-[#CCC] font-normal whitespace-nowrap text-center leading-none my-auto">
        {[1, 2, 3, "...", 4, 5, 6].map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`min-h-9 w-9 h-9 px-3 rounded-md ${
              page === currentPage
                ? "text-[#6B047C] border border-[#6B047C]"
                : "text-[#CCC] bg-white"
            } ${page === "..." ? "rounded-[46px]" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="justify-center items-center border border-[color:var(--Grey-5,#B3B3B3)] flex w-9 h-9 bg-white rounded-md border-solid"
        aria-label="Next page"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/edf5492df6a86acc002501c449778a7b4e29164f?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5"
          alt="Next"
        />
      </button>
    </div>
  );
};
