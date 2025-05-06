
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "pending" | "cancelled" | "received";
  className?: string;
}

const statusStyles = {
  active: "bg-[#F5FFFB] text-[#1C7C04]",
  pending: "bg-[#FFFBF0] text-[#FDC721]",
  cancelled: "bg-[#FFF7F5] text-[#D43705]",
  received: "bg-[#F0F4FF] text-[#2163FD]",
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <div
      className={cn(
        "px-3 py-1 rounded-md text-xs font-medium inline-block text-center w-20",
        statusStyles[status],
        className,
      )}
    >
      {status === "received" ? "Received" : status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};
