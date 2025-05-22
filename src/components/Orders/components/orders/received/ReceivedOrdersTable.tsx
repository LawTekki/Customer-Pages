import React, { useState, useMemo, useEffect } from 'react';
import { StatusBadge } from '../../common/StatusBadge';
import { Pagination } from '../../common/Pagination';
import type { Order } from '../../../types/orders';
import { Dialog, DialogContent } from '../../../../ui/dialog';
import { OrderDetailsDialog } from '../OrderDetailsDialog';

// Mock data for received orders
export const receivedOrders: Order[] = [
  {
    id: '1',
    item: {
      name: 'The 4 keys of law',
      image: '/Frame 1000007972.jpg',
    },
    orderId: 'HG324235',
    amount: '$24,000',
    category: 'Books | Soft copy',
    status: 'received',
    orderDate: 'July 27, 2024',
    dueDate: 'Nov 12, 2024',
  },
  {
    id: '2',
    item: {
      name: 'The 4 keys of law',
      image: '/Frame 1000007972.jpg',
    },
    orderId: 'HG324236',
    amount: '$24,000',
    category: 'Books | Soft copy',
    status: 'received',
    orderDate: 'July 28, 2024',
    dueDate: 'Nov 13, 2024',
  },
  {
    id: '3',
    item: {
      name: 'The 4 keys of law',
      image: '/Frame 1000007972.jpg',
    },
    orderId: 'HG324237',
    amount: '$24,000',
    category: 'Books | Soft copy',
    status: 'received',
    orderDate: 'July 29, 2024',
    dueDate: 'Nov 14, 2024',
  },
  {
    id: '4',
    item: {
      name: 'The 4 keys of law',
      image: '/Frame 1000007972.jpg',
    },
    orderId: 'HG324238',
    amount: '$24,000',
    category: 'Books | Soft copy',
    status: 'received',
    orderDate: 'July 30, 2024',
    dueDate: 'Nov 15, 2024',
  },
  {
    id: '5',
    item: {
      name: 'The 4 keys of law',
      image: '/Frame 1000007972.jpg',
    },
    orderId: 'HG324239',
    amount: '$24,000',
    category: 'Books | Soft copy',
    status: 'received',
    orderDate: 'July 31, 2024',
    dueDate: 'Nov 16, 2024',
  },
];

const ordersPerPage = 5;

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

export const ReceivedOrdersTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const isMobile = useIsMobile();

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = useMemo(() => receivedOrders.slice(indexOfFirstOrder, indexOfLastOrder), [currentPage]);
  const totalPages = Math.ceil(receivedOrders.length / ordersPerPage);

  return (
    <>
      <div className={`w-full ${!isMobile ? "rounded-lg overflow-hidden bg-white mt-6 shadow-sm border border-[#F2F2F2] fade-in" : "mt-6 fade-in"}`}>
        {/* Desktop Table View */}
        {!isMobile && (
          <div className="w-full overflow-hidden">
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="bg-[#FAFAFA] border-b border-[#E6E6E6]">
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[5%]">S/N</th>
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[20%]">Item</th>
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%]">Order ID</th>
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%]">Amount</th>
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[15%]">Item category and type</th>
            <th className="p-4 pl-10 text-left text-xs font-medium text-[#1A011E] w-[10%]">Status</th>
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%]">Order date</th>
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%]">Due date</th>
            <th className="p-4 text-left text-xs font-medium text-[#1A011E] w-[10%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr key={order.id} className="border-b border-[#F2F2F2] table-row-hover click-shrink fade-in">
              <td className="p-4 text-xs text-[#808080] truncate">{indexOfFirstOrder + index + 1}</td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-8 rounded overflow-hidden hover-scale">
                    <img src={order.item.image} alt={order.item.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs text-[#808080] truncate">{order.item.name}</span>
                </div>
              </td>
              <td className="p-4 text-xs text-[#808080] truncate">{order.orderId}</td>
              <td className="p-4 text-xs text-[#808080] truncate">{order.amount}</td>
              <td className="p-4 text-xs text-[#808080] truncate">{order.category}</td>
              <td className="p-4 text-left"><StatusBadge status={order.status} /></td>
              <td className="p-4 text-xs text-[#808080] truncate">{order.orderDate}</td>
              <td className="p-4 text-xs text-[#808080] truncate">{order.dueDate}</td>
              <td className="p-4">
                <button className="text-[#6B047C] border border-[#6B047C] px-4 py-1.5 rounded-lg text-sm font-medium w-20 hover-scale click-bounce button-pulse transition-all duration-300">
                  Reorder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center p-4 border-t border-[#F2F2F2]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
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
                  <button className={`border px-4 py-1.5 rounded-md text-xs font-medium w-20 hover-scale click-bounce button-pulse transition-all duration-300 text-[#6B047C] border-[#6B047C]`} 
                    onClick={() => {
                      setSelectedOrder(order);
                      setDialogOpen(true);
                    }}
                  >
                    Reorder
                  </button>
                </div>
              </div>
            ))}
            {/* Pagination */}
            <div className="flex justify-center p-4 border-t border-[#F2F2F2]">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        )}
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