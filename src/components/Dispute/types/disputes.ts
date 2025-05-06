export interface Dispute {
  id: number;
  orderNumber: string;
  supplier: {
    name: string;
    image: string;
  };
  category: string;
  date: string;
  status: string;
  document: string;
}

export interface DisputeStats {
  totalDisputes: number;
  pendingDisputes: number;
  clearedDisputes: number;
  lostDisputes: number;
}

export type DisputeStatus = "pending" | "cleared" | "lost";
