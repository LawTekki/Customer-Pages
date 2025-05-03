
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#CCC]" />
      <Input
        type="text"
        placeholder="Search"
        className="pl-9 pr-3 py-2 border border-[#F2F2F2] rounded-lg bg-[#FAFAFA] text-sm text-[#808080] placeholder:text-[#CCC] focus-visible:ring-0"
      />
    </div>
  );
};
