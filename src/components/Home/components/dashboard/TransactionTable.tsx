import React from "react";

const transactions = [
  {
    id: 1,
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Successful",
  },
  {
    id: 2,
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Successful",
  },
  {
    id: 3,
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Failed",
  },
  {
    id: 4,
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Successful",
  },
  {
    id: 5,
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Successful",
  },
  {
    id: 6,
    type: "Withdrawal",
    amount: "$400",
    date: "27/09/2024 | 4:42 am",
    status: "Failed",
  },
];

export const TransactionTable = () => {
  return (
    <>
      {/* Desktop view with container */}
      <div className="hidden sm:block bg-white rounded-lg p-4 shadow-sm mb-6 mx-[12px] sm:mx-0 border hover-border fade-in overflow-hidden" style={{ borderColor: '#F2F2F2', animationDelay: '0.3s' }}>
        <h3 className="text-gray-900 font-semibold text-base mb-4">
          Transaction history
        </h3>

        <table className="w-full text-sm table-fixed">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-medium hover:bg-gray-100 transition-colors w-[10%]">S/N</th>
              <th className="px-4 py-3 text-left font-medium hover:bg-gray-100 transition-colors w-[30%]">Transaction type</th>
              <th className="px-4 py-3 text-left font-medium hover:bg-gray-100 transition-colors w-[25%]">Account</th>
              <th className="px-4 py-3 text-left font-medium hover:bg-gray-100 transition-colors w-[20%]">Date</th>
              <th className="px-4 py-3 text-left font-medium hover:bg-gray-100 transition-colors w-[15%]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className="table-row-hover click-shrink"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <td className="px-4 py-4 text-gray-500 truncate">{transaction.id}</td>
                <td className="px-4 py-4 text-gray-500 truncate">{transaction.type}</td>
                <td className="px-4 py-4 text-gray-500 truncate">{transaction.amount}</td>
                <td className="px-4 py-4 text-gray-500 truncate">{transaction.date}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-md hover-scale ${
                      transaction.status === "Successful"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view - card-based layout without container box */}
      <div className="sm:hidden px-4 mb-6">
        <h3 className="text-gray-900 font-semibold text-base mb-4">
          Transaction history
        </h3>

        <div className="space-y-3 w-full overflow-hidden">
          {transactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className="border border-gray-100 rounded-lg p-3 shadow-sm hover-lift card-hover click-shrink fade-in bg-white"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">#{transaction.id}</span>
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-md hover-scale ${
                    transaction.status === "Successful"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Type:</div>
                <div className="font-medium truncate">{transaction.type}</div>

                <div className="text-gray-500">Amount:</div>
                <div className="font-medium truncate">{transaction.amount}</div>

                <div className="text-gray-500">Date:</div>
                <div className="font-medium truncate">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
