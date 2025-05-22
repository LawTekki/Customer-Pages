import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Pagination } from "./Pagination";
import { ChevronDown } from "lucide-react";


interface Transaction {
  id: number;
  accountName: string;
  bankName: string;
  accountNumber: string;
  type: string;
  amount: string;
  date: string;
  status: "Successful" | "Failed";
}

// Detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

export const TransactionTable: React.FC = () => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Transaction type");
  const [filterType, setFilterType] = useState<string | null>(null);

  const filterOptions = ["All", "Withdrawal", "Deposit", "Transfer"];
  const itemsPerPage = 4;

  const allTransactions: Transaction[] = [
    { id: 1, accountName: "Nelson Kings", bankName: "Providus bank", accountNumber: "324352352323", type: "Withdrawal", amount: "$400", date: "27/09/2024 4:42 am", status: "Successful" },
    { id: 2, accountName: "Nelson Kings", bankName: "Providus bank", accountNumber: "324352352323", type: "Withdrawal", amount: "$400", date: "27/09/2024 4:42 am", status: "Successful" },
    { id: 3, accountName: "Nelson Kings", bankName: "Providus bank", accountNumber: "324352352323", type: "Withdrawal", amount: "$400", date: "27/09/2024 4:42 am", status: "Failed" },
    { id: 4, accountName: "Nelson Kings", bankName: "Providus bank", accountNumber: "324352352323", type: "Withdrawal", amount: "$400", date: "27/09/2024 4:42 am", status: "Successful" },
    { id: 5, accountName: "Nelson Kings", bankName: "First bank",    accountNumber: "324352352323", type: "Deposit",    amount: "$600", date: "26/09/2024 2:30 pm", status: "Successful" },
    { id: 6, accountName: "Nelson Kings", bankName: "First bank",    accountNumber: "324352352323", type: "Deposit",    amount: "$800", date: "25/09/2024 1:15 pm", status: "Successful" },
    { id: 7, accountName: "Nelson Kings", bankName: "GTB",           accountNumber: "324352352323", type: "Transfer",   amount: "$500", date: "24/09/2024 10:20 am", status: "Successful" },
    { id: 8, accountName: "Nelson Kings", bankName: "GTB",           accountNumber: "324352352323", type: "Transfer",   amount: "$300", date: "23/09/2024 9:45 am",  status: "Failed" },
  ];

  // Filter select
  const handleFilterSelect = (opt: string) => {
    setSelectedFilter(opt === "All" ? "Transaction type" : opt);
    setFilterType(opt === "All" ? null : opt);
    setFilterOpen(false);
    setCurrentPage(1);
  };

  // Prepare page data
  const filtered = filterType
    ? allTransactions.filter((t) => t.type === filterType)
    : allTransactions;
  const start = (currentPage - 1) * itemsPerPage;
  const pageData = filtered.slice(start, start + itemsPerPage);
  while (pageData.length < itemsPerPage) pageData.push(null as any);
  const totalPages = Math.max(Math.ceil(filtered.length / itemsPerPage), 1);

  // Portal positioning
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  useLayoutEffect(() => {
    if (filterOpen && triggerRef.current) {
      const r = triggerRef.current.getBoundingClientRect();
      setMenuPos({ top: r.bottom + window.scrollY + 4, left: r.left + window.scrollX });
    }
  }, [filterOpen]);

  // Outside click
  useEffect(() => {
    const onOut = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (filterOpen && !triggerRef.current?.contains(t) && !menuRef.current?.contains(t))
        setFilterOpen(false);
    };
    document.addEventListener("mousedown", onOut, true);
    document.addEventListener("touchstart", onOut, true);
    return () => {
      document.removeEventListener("mousedown", onOut, true);
      document.removeEventListener("touchstart", onOut, true);
    };
  }, [filterOpen]);

  // Filter menu portal
  const filterMenu: ReactNode = filterOpen
    ? createPortal(
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: menuPos.top,
            left: isMobile ? 0 : menuPos.left,
            width: isMobile ? "100%" : 192,
            zIndex: 9999,
            overflow: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="bg-white border border-[#E6E6E6] rounded-lg shadow-md fade-in"
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {filterOptions.map((opt, i) => (
            <div
              key={opt}
              onClick={() => handleFilterSelect(opt)}
              className={`
                ${isMobile ? "px-2 py-1 text-xs" : "px-3 py-2 text-sm"}
                ${
                  opt === selectedFilter
                    ? "bg-[#F5EDFC] text-[#6B047C]"
                    : "text-[#808080] hover:bg-[#F5EDFC] hover:text-[#6B047C]"
                }
                cursor-pointer hover-scale click-shrink
              `}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              {opt}
            </div>
          ))}
        </div>,
        document.body
      )
    : null;

  return (
    <div className="w-full bg-white rounded-lg border border-[#E6E6E6] overflow-hidden fade-in max-md:px-0">
      {/* Filter Header */}
      <div className="flex justify-end items-center p-4 border-b border-[#E6E6E6] slide-in max-md:p-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#CCC]">Filter By :</span>
          <div ref={triggerRef} className="relative">
            {/* Trigger Button */}
            <div
              onClick={() => setFilterOpen((o) => !o)}
              className={`
                flex items-center gap-2 border border-[#E6E6E6] rounded
                ${isMobile ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"}
                cursor-pointer
                transition-colors
                hover:bg-[#F5EDFC] hover:text-[#6B047C] hover-scale click-shrink
                ${filterOpen ? "bg-[#F5EDFC] text-[#6B047C]" : "text-[#808080]"}
              `}
            >
              <span>{selectedFilter}</span>
              <ChevronDown
                className={`
                  ${isMobile ? "h-3 w-3" : "h-4 w-4"}
                  transition-transform icon-bounce
                  ${filterOpen ? "rotate-180 text-[#6B047C]" : "rotate-0 text-[#808080]"}
                `}
              />
            </div>
            {filterMenu}
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      {!isMobile && (
        <div className="overflow-x-auto table-container" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <style>{`.table-container::-webkit-scrollbar { display: none; }`}</style>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#E6E6E6] text-[#808080] text-sm fade-in">
                {["S/N","Account name","Bank name","Account number","Transaction type","Amount","Date","Status"].map(h => (
                  <th key={h} className="py-3 px-4 text-left font-medium border-b border-[#E6E6E6] hover:bg-gray-100 transition-colors">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageData.map((tx, idx) => (
                <tr key={idx} className="border-b border-[#E6E6E6] table-row-hover click-shrink fade-in">
                  {tx ? (
                    <>
                      <td className="py-4 px-4 text-sm text-[#808080]">{tx.id}</td>
                      <td className="py-4 px-4 text-sm text-[#808080]">{tx.accountName}</td>
                      <td className="py-4 px-4 text-sm text-[#808080]">{tx.bankName}</td>
                      <td className="py-4 px-4 text-sm text-[#808080]">{tx.accountNumber}</td>
                      <td className="py-4 px-4 text-sm text-[#808080]">{tx.type}</td>
                      <td className="py-4 px-4 text-sm text-[#808080]">{tx.amount}</td>
                      <td className="py-4 px-4 text-sm text-[#808080]">{tx.date}</td>
                      <td className="py-4 px-4">
                        <span className={`text-xs px-2 py-1 rounded hover-scale ${
                          tx.status === "Successful"
                            ? "bg-[#EBFFF6] text-[#1C7C04]"
                            : "bg-[#FFF0EB] text-[#D43705]"
                        }`}>{tx.status}</span>
                      </td>
                    </>
                  ) : (
                    <td colSpan={8} className="h-[56px]"></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Cards */}
      {isMobile && (
        <div className="px-4 py-2 space-y-3 overflow-x-hidden max-md:px-2">
          {pageData.map((tx, idx) => (
            tx ? (
              <div key={tx.id} className="border border-[#E6E6E6] rounded-lg p-3 hover-lift card-hover click-shrink fade-in">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#1A011E]">{tx.accountName}</span>
                  <span className="text-sm text-[#808080]">{tx.amount}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 text-[#808080]">
                  <div><p className="text-xs">Bank name</p><p className="text-sm">{tx.bankName}</p></div>
                  <div><p className="text-xs">Account number</p><p className="text-sm">{tx.accountNumber}</p></div>
                  <div><p className="text-xs">Transaction type</p><p className="text-sm">{tx.type}</p></div>
                  <div><p className="text-xs">Date</p><p className="text-sm">{tx.date}</p></div>
                </div>
                <div className="flex justify-between text-[#808080]">
                  <div><p className="text-xs">S/N</p><p className="text-sm">{tx.id}</p></div>
                  <div><p className="text-xs">Status</p><p className={`text-sm ${
                    tx.status==="Successful"?"text-[#1C7C04]":"text-[#D43705]"
                  }`}>{tx.status}</p></div>
                </div>
              </div>
            ) : (
              <div key={idx} className="h-[140px]"></div>
            )
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="p-4 fade-in">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
      </div>
    </div>
  );
};
