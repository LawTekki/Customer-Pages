import { StatusBadge } from "../common/StatusBadge";
import { Pagination } from "../common/Pagination";
import { Order } from "../../types/orders";
import { useState, useMemo, useEffect } from "react";
import { useFilter } from "../../context/FilterContext";
import { activeOrders } from "./active/ActiveOrdersTable";
import { receivedOrders } from "./received/ReceivedOrdersTable";
import { cancelledOrders } from "./cancelled/CancelledOrdersTable";
import { Dialog, DialogContent } from "../../../ui/dialog";
import { OrderDetailsDialog } from "./OrderDetailsDialog";

interface OrdersTableProps {
  orders: Order[];
}

// Custom hook for detecting mobile viewport
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const { filterStatus } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const isMobile = useIsMobile();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  const mockOrders: Order[] = [
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

  // Filter orders based on selected filter status
  const filteredOrders = useMemo(() => {
    if (filterStatus === 'All') {
      return [...mockOrders, ...activeOrders, ...receivedOrders, ...cancelledOrders];
    }

    // Map the filter status to the corresponding order status
    const statusMap: Record<string, string> = {
      'Ongoing': 'active',
      'Pending': 'pending',
      'Cancelled': 'cancelled',
      'Concluded': 'received'
    };

    const orderStatus = statusMap[filterStatus] || '';
    
    if (orderStatus === 'active') {
      return activeOrders;
    }
    
    if (orderStatus === 'received') {
      return receivedOrders;
    }

    if (orderStatus === 'cancelled') {
      return cancelledOrders;
    }
    
    return mockOrders.filter(order => order.status === orderStatus);
  }, [filterStatus]);

  // Calculate pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <>
    <div className={`w-full ${!isMobile ? "rounded-lg overflow-hidden bg-white mt-6 shadow-sm border border-[#F2F2F2] fade-in" : "mt-6 fade-in"}`}>
      {/* Desktop Table View */}
      {!isMobile && (
        <div className="w-full overflow-hidden">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[#E6E6E6]">
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[5%] hover:bg-gray-100 transition-colors">S/N</th>
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[20%] hover:bg-gray-100 transition-colors">Item</th>
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%] hover:bg-gray-100 transition-colors">Order ID</th>
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%] hover:bg-gray-100 transition-colors">Amount</th>
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[15%] hover:bg-gray-100 transition-colors">Item category and type</th>
                <th className="p-4 pl-10 text-left text-xs font-medium text-[#1A011E] w-[10%] hover:bg-gray-100 transition-colors">Status</th>
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%] hover:bg-gray-100 transition-colors">Order date</th>
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%] hover:bg-gray-100 transition-colors">Due date</th>
                <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%] hover:bg-gray-100 transition-colors">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className="border-b border-[#F2F2F2] table-row-hover click-shrink fade-in"
                >
                  <td className="p-4 text-xs text-[#808080] truncate">{indexOfFirstOrder + index + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-8 rounded overflow-hidden hover-scale">
                        <img
                          src={order.item.image}
                          alt={order.item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-[#808080] truncate">{order.item.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-xs text-[#808080] truncate">{order.orderId}</td>
                  <td className="p-4 text-xs text-[#808080] truncate">{order.amount}</td>
                  <td className="p-4 text-xs text-[#808080] truncate">{order.category}</td>
                  <td className="p-4 text-left">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="p-4 text-xs text-[#808080] truncate">{order.orderDate}</td>
                  <td className="p-4 text-xs text-[#808080] truncate">{order.dueDate}</td>
                  <td className="p-4">
                      <button
                        className="text-[#6B047C] border border-[#6B047C] px-4 py-1.5 rounded-lg text-sm font-medium w-20 hover-scale click-bounce button-pulse transition-all duration-300"
                        onClick={() => {
                          setSelectedOrder(order);
                          setDialogOpen(true);
                        }}
                      >
                      {order.status === "received" ? "Reorder" : "View"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Card View */}
      {isMobile && (
        <div className="py-2">
          {currentOrders.map((order, idx) => (
            <div
              key={order.id}
              className="bg-white border border-[#F2F2F2] rounded-lg p-3 mb-3 mx-auto hover-lift card-hover click-shrink fade-in"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-14 h-14 rounded overflow-hidden flex items-center justify-center hover-scale">
                    <img
                      src={order.item.image}
                      alt={order.item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#1A011E] truncate">{order.item.name}</div>
                    <div className="text-xs text-[#808080] truncate">{order.orderId}</div>
                  </div>
                </div>
                <StatusBadge status={order.status} />
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <p className="text-xs text-[#808080]">Amount</p>
                  <p className="text-xs font-medium truncate">{order.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-[#808080]">Category</p>
                  <p className="text-xs font-medium truncate">{order.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <p className="text-xs text-[#808080]">Order date</p>
                  <p className="text-xs font-medium truncate">{order.orderDate}</p>
                </div>
                <div>
                  <p className="text-xs text-[#808080]">Due date</p>
                  <p className="text-xs font-medium truncate">{order.dueDate}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button className={`border px-4 py-1.5 rounded-md text-xs font-medium w-20 hover-scale click-bounce button-pulse transition-all duration-300 ${
                  order.status === "received"
                    ? "text-[#6B047C] border-[#6B047C]"
                    : order.status === "cancelled"
                      ? "text-[#808080] border-[#E6E6E6]"
                      : "text-[#6B047C] border-[#6B047C]"
                  }`} 
                    onClick={() => {
                      setSelectedOrder(order);
                      setDialogOpen(true);
                    }}
                  >
                  {order.status === "received" ? "Reorder" : "View"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg max-w-xs w-full mx-auto p-0 rounded-xl shadow-2xl">
          {selectedOrder && (
            <OrderDetailsDialog order={selectedOrder} onClose={() => setDialogOpen(false)} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
