import React from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  onSearch,
}) => {
  return (
    <div className="items-center border border-[color:var(--Grey-1,#F2F2F2)] flex gap-2.5 text-xs text-[#CCC] font-medium whitespace-nowrap tracking-[-0.24px] leading-[1.3] grow shrink basis-auto bg-neutral-50 my-auto px-2 py-2.5 rounded-lg border-solid">
      <img
        src="/search-01.svg"
        alt="Search icon"
        className="aspect-[1] object-contain w-4 h-4 self-stretch shrink-0 my-auto"
      />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="bg-transparent border-none outline-none text-[#CCC] w-full"
      />
    </div>
  );
};
