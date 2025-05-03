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
    <div className="bg-white rounded-lg p-4 shadow-sm mb-6 mx-[12px] sm:mx-0">
      <h3 className="text-gray-900 font-semibold text-base mb-4">
        Transaction history
      </h3>
      
      {/* Desktop view - standard table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-medium">S/N</th>
              <th className="px-4 py-3 text-left font-medium">Transaction type</th>
              <th className="px-4 py-3 text-left font-medium">Account</th>
              <th className="px-4 py-3 text-left font-medium">Date</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-4 py-4 text-gray-500">{transaction.id}</td>
                <td className="px-4 py-4 text-gray-500">{transaction.type}</td>
                <td className="px-4 py-4 text-gray-500">{transaction.amount}</td>
                <td className="px-4 py-4 text-gray-500">{transaction.date}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-md ${
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
      
      {/* Mobile view - card-based layout */}
      <div className="sm:hidden space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="border border-gray-100 rounded-lg p-3 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-medium">#{transaction.id}</span>
              <span
                className={`inline-block px-2 py-1 text-xs font-medium rounded-md ${
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
              <div className="font-medium">{transaction.type}</div>
              
              <div className="text-gray-500">Amount:</div>
              <div className="font-medium">{transaction.amount}</div>
              
              <div className="text-gray-500">Date:</div>
              <div className="font-medium">{transaction.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
