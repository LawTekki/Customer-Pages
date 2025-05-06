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
            className={`w-9 h-9 text-sm font-normal leading-5 cursor-pointer bg-white rounded-md border transition-transform duration-300 hover:scale-105 ${
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
            key={i}
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
    <div className="flex justify-center items-center gap-2 mt-5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex justify-center items-center border cursor-pointer bg-white p-2 rounded-md border-solid border-[#E6E6E6] disabled:opacity-50 hover:border-[#6B047C] disabled:hover:border-[#E6E6E6] transition-transform duration-300 hover:scale-105"
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.09753 11.1423C6.49353 10.5006 6.49353 9.49952 7.09753 8.85777L13.2267 2.34557C13.5421 2.01043 14.0695 1.99445 14.4046 2.30988C14.7398 2.62531 14.7558 3.1527 14.4403 3.48785L8.3112 10L14.4403 16.5122C14.7558 16.8474 14.7398 17.3748 14.4046 17.6902C14.0695 18.0056 13.5421 17.9897 13.2267 17.6545L7.09753 11.1423Z"
            fill="currentColor"
            className="text-[#808080]"
          />
        </svg>
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex justify-center items-center border cursor-pointer bg-white p-2 rounded-md border-solid border-[#E6E6E6] disabled:opacity-50 hover:border-[#6B047C] disabled:hover:border-[#E6E6E6] transition-transform duration-300 hover:scale-105"
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9028 11.1423C14.5068 10.5006 14.5068 9.49952 13.9028 8.85777L7.77366 2.34557C7.45823 2.01043 6.93084 1.99445 6.59569 2.30988C6.26055 2.62531 6.24457 3.1527 6.56 3.48785L12.6891 10L6.56 16.5122C6.24457 16.8474 6.26055 17.3748 6.59569 17.6902C6.93084 18.0056 7.45824 17.9897 7.77367 17.6545L13.9028 11.1423Z"
            fill="currentColor"
            className="text-[#808080]"
          />
        </svg>
      </button>
    </div>
  );
};
