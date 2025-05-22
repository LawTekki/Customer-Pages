import React from "react";
import { Order } from "../../types/orders";

interface OrderDetailsDialogProps {
  order: Order;
  onClose: () => void;
}

export const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({ order, onClose }) => {
  // Static vendor info for now
  const vendor = {
    name: "Morgan Jules",
    avatar: "/avatar-morgan-jules.jpg", // Replace with actual path if available
    status: "Active now",
  };

  // Map status to display and color
  const statusMap: Record<string, { label: string; color: string }> = {
    active: { label: "Processing", color: "#22C55E" },
    pending: { label: "Pending", color: "#F59E42" },
    cancelled: { label: "Cancelled", color: "#EF4444" },
    received: { label: "Completed", color: "#22C55E" },
  };
  const status = statusMap[order.status] || { label: order.status, color: "#808080" };

  // Hardcoded details for demo (replace with real data if available)
  const deliveryService = "Express";
  const deliveryDate = "August 31, 2024";
  const productType = order.category.toLowerCase().includes("soft") ? "Soft copy" : "Hard copy";
  const paymentMethod = "Bank transfer";

  return (
    <div className="w-full bg-white rounded-xl p-0 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#F2F2F2] sm:px-8 sm:pt-8 sm:pb-2 px-3 pt-3 pb-1">
        <div>
          <div className="sm:text-lg text-base font-bold text-[#1A011E] tracking-wide">#{order.orderId}</div>
          <div className="sm:text-xs text-[11px] text-[#808080] font-medium mt-1">Order ID</div>
        </div>
      </div>
      {/* Item Row - update image styling for full fit, no white space */}
      <div className="flex items-center justify-between border-b border-[#F2F2F2] sm:flex-row flex-col sm:gap-4 gap-2 sm:px-8 px-3 sm:py-6 py-2">
        <div className="flex items-center gap-4">
          <div className="sm:w-15 sm:h-15 w-12 h-12 flex items-center justify-center bg-white border border-[#F2F2F2] rounded-lg overflow-hidden">
            <img
              src="/image%2013.jpg"
              alt="Product"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="sm:text-base text-sm font-semibold text-[#1A011E]">{order.item.name}</div>
            <div className="sm:text-xs text-[11px] text-[#808080] mt-1">Book</div>
          </div>
        </div>
        <div className="flex items-center gap-6 sm:mt-0 mt-2">
          <div className="sm:text-sm text-xs font-medium text-[#808080] mr-6">1 PCS</div>
          <div className="sm:text-lg text-base font-bold text-[#1A011E]">$240.99</div>
        </div>
      </div>
      {/* Details Section - label and value close together, slightly larger gap */}
      <div className="border-b border-[#F2F2F2] flex flex-col gap-2 sm:text-sm text-xs sm:px-8 px-3 sm:py-6 py-2">
        <div className="flex items-center">
          <span className="text-[#808080] sm:min-w-[170px] min-w-[110px]">Order Date:</span>
          <span className="text-[#1A011E] font-medium sm:ml-10 ml-4">March 31, 2024</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#808080] sm:min-w-[170px] min-w-[110px]">Delivery Service:</span>
          <span className="text-[#1A011E] font-medium sm:ml-10 ml-4">{deliveryService}</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#808080] sm:min-w-[170px] min-w-[110px]">Delivery Date:</span>
          <span className="text-[#1A011E] font-medium sm:ml-10 ml-4">{deliveryDate}</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#808080] sm:min-w-[170px] min-w-[110px]">Product Category:</span>
          <span className="text-[#1A011E] font-medium sm:ml-10 ml-4">Book</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#808080] sm:min-w-[170px] min-w-[110px]">Product type:</span>
          <span className="text-[#1A011E] font-medium sm:ml-10 ml-4">{productType}</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#808080] sm:min-w-[170px] min-w-[110px]">Payment method:</span>
          <span className="text-[#1A011E] font-medium sm:ml-10 ml-4">{paymentMethod}</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#808080] sm:min-w-[170px] min-w-[110px]">Status:</span>
          <span className="font-semibold sm:ml-10 ml-4" style={{ color: status.color }}>{status.label}</span>
        </div>
      </div>
      {/* Vendor Section */}
      <div className="flex items-center justify-between sm:px-8 px-3 sm:py-6 py-3">
        <div className="text-[#808080] sm:text-sm text-xs">Vendor name:</div>
        <div className="flex items-center gap-3">
          <img src="/Frame 1000008098.jpg" alt={vendor.name} className="sm:w-10 sm:h-10 w-8 h-8 rounded-full border border-[#F2F2F2] object-cover" />
          <div>
            <div className="text-[#1A011E] font-semibold sm:text-sm text-xs">{vendor.name}</div>
            <div className="text-[#22C55E] sm:text-xs text-[11px] font-medium">{vendor.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 