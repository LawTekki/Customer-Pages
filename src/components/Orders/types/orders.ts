export interface Order {
  id: string;
  item: {
    name: string;
    image: string;
  };
  orderId: string;
  amount: string;
  category: string;
  status: "active" | "pending" | "cancelled" | "received";
  orderDate: string;
  dueDate: string;
}

export interface OrderStats {
  totalOrders: number;
  receivedOrders: number;
  pendingOrders: number;
  cashSpent: string;
}

export type OrderStatus = "active" | "pending" | "cancelled" | "received";
