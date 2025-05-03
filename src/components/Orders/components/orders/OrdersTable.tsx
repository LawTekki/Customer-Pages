
import { StatusBadge } from "../common/StatusBadge";
import { Pagination } from "../common/Pagination";
import { Order } from "../../types/orders";
import { useState } from "react";

interface OrdersTableProps {
  orders: Order[];
}

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [currentPage, setCurrentPage] = useState(3);
  const mockOrders: Order[] = [
    {
      id: "1",
      item: {
        name: "The 4 keys of law",
        image: "/Frame 1000007972.jpg",
      },
      orderId: "HG324235",
      amount: "$24,000",
      category: "Books | Soft copy",
      status: "active",
      orderDate: "July 27, 2024",
      dueDate: "Nov 12, 2024",
    },
    {
      id: "2",
      item: {
        name: "The 4 keys of law",
        image: "/Frame 1000007972.jpg",
      },
      orderId: "HG324235",
      amount: "$24,000",
      category: "Books | Soft copy",
      status: "pending",
      orderDate: "$300",
      dueDate: "$300",
    },
    {
      id: "3",
      item: {
        name: "The 4 keys of law",
        image: "/Frame 1000007972.jpg",
      },
      orderId: "HG324235",
      amount: "$24,000",
      category: "Books | Soft copy",
      status: "cancelled",
      orderDate: "$300",
      dueDate: "$300",
    },
    {
      id: "4",
      item: {
        name: "The 4 keys of law",
        image: "/Frame 1000007972.jpg",
      },
      orderId: "HG324235",
      amount: "$24,000",
      category: "Books | Soft copy",
      status: "received",
      orderDate: "$300",
      dueDate: "$300",
    },
    {
      id: "5",
      item: {
        name: "The 4 keys of law",
        image: "/Frame 1000007972.jpg",
      },
      orderId: "HG324235",
      amount: "$24,000",
      category: "Books | Soft copy",
      status: "active",
      orderDate: "$300",
      dueDate: "$300",
    },
    {
      id: "6",
      item: {
        name: "The 4 keys of law",
        image: "/Frame 1000007972.jpg",
      },
      orderId: "HG324235",
      amount: "$24,000",
      category: "Books | Soft copy",
      status: "pending",
      orderDate: "$300",
      dueDate: "$300",
    },
  ];

  return (
    <div className="w-full rounded-lg overflow-hidden bg-white mt-6 shadow-sm border border-[#F2F2F2]">
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#FAFAFA] border-b border-[#E6E6E6]">
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">S/N</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Item</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Order ID</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Amount</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Item category and type</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Status</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Order date</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Due date</th>
              <th className="p-4 text-left text-xs font-medium text-[#1A011E]">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order, index) => (
              <tr key={order.id} className="border-b border-[#F2F2F2]">
                <td className="p-4 text-xs text-[#808080]">{index + 1}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-8 rounded overflow-hidden">
                      <img
                        src={order.item.image}
                        alt={order.item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-[#808080]">{order.item.name}</span>
                  </div>
                </td>
                <td className="p-4 text-xs text-[#808080]">{order.orderId}</td>
                <td className="p-4 text-xs text-[#808080]">{order.amount}</td>
                <td className="p-4 text-xs text-[#808080]">{order.category}</td>
                <td className="p-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="p-4 text-xs text-[#808080]">{order.orderDate}</td>
                <td className="p-4 text-xs text-[#808080]">{order.dueDate}</td>
                <td className="p-4">
                  <button className="text-[#6B047C] border border-[#6B047C] px-4 py-1.5 rounded-lg text-sm font-medium w-20">
                    {order.status === "received" ? "Reorder" : "View"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
