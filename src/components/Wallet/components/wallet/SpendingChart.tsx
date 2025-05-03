
import React, { useState } from "react";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { ChevronDown } from "lucide-react";

interface SpendingData {
  name: string;
  amount: number;
}

type TabType = "wallet" | "credit";

export const SpendingChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("wallet");
  const [timeFilter, setTimeFilter] = useState<string>("This week");
  const [timeFilterOpen, setTimeFilterOpen] = useState<boolean>(false);
  
  const timeFilterOptions = ["This week", "This month", "Last month", "Last 3 months", "Custom"];

  // Sample spending data for wallet - matching the chart in the design
  const walletData: SpendingData[] = [
    { name: "Monday", amount: 42000 },
    { name: "Tuesday", amount: 42000 },
    { name: "Wednesday", amount: 48000 },
    { name: "Thursday", amount: 39000 },
    { name: "Friday", amount: 48000 },
    { name: "Saturday", amount: 45000 },
    { name: "Sunday", amount: 42000 },
  ];
  
  // Sample spending data for credit
  const creditData: SpendingData[] = [
    { name: "Monday", amount: 38000 },
    { name: "Tuesday", amount: 40000 },
    { name: "Wednesday", amount: 45000 },
    { name: "Thursday", amount: 35000 },
    { name: "Friday", amount: 46000 },
    { name: "Saturday", amount: 42000 },
    { name: "Sunday", amount: 42000 },
  ];

  // Get the active data based on selected tab
  const data = activeTab === "wallet" ? walletData : creditData;

  return (
    <div className="border border-[#F2F2F2] w-full overflow-hidden text-[#808080] font-medium leading-[1.3] bg-white mx-auto px-5 py-4 mt-16 rounded-lg border-solid max-md:max-w-full">
      <div className="flex w-full items-center gap-2 text-xs justify-between mb-3 max-md:max-w-full">
        {/* Title */}
        <div className="text-[#1A011E] text-lg tracking-[-0.4px] font-semibold whitespace-nowrap">
          Spending
        </div>
        
        {/* Toggle buttons for Wallet and Lawtrolley credit */}
        <div className="items-stretch flex overflow-hidden tracking-[-0.28px] justify-center bg-[#F2F2F2] p-0.5 rounded-lg">
          <div className="flex w-full items-center">
            <button 
              className={`text-[#808080] self-stretch rounded gap-1 whitespace-nowrap px-2 py-1 ${activeTab === "wallet" ? "bg-white" : ""}`}
              onClick={() => setActiveTab("wallet")}
            >
              Wallet
            </button>
            <button 
              className={`text-[#808080] self-stretch rounded gap-1 px-2 py-1 ${activeTab === "credit" ? "bg-white" : ""}`}
              onClick={() => setActiveTab("credit")}
            >
              Lawtrolley credit
            </button>
          </div>
        </div>
        
        {/* Time filter dropdown */}
        <div className="relative">
          <div 
            className="items-center rounded border border-[#E6E6E6] flex gap-1 text-center bg-white my-auto px-2 py-1 border-solid cursor-pointer"
            onClick={() => setTimeFilterOpen(!timeFilterOpen)}
          >
            <span className="text-[#808080] self-stretch my-auto">{timeFilter}</span>
            <ChevronDown className="h-3 w-3 text-[#808080]" />
          </div>
          
          {timeFilterOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-[#E6E6E6] rounded-lg shadow-md z-10 w-48">
              {timeFilterOptions.map((option) => (
                <div 
                  key={option} 
                  className="p-2 hover:bg-[#F5F5F5] cursor-pointer text-left"
                  onClick={() => {
                    setTimeFilter(option);
                    setTimeFilterOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
        
      {/* Chart container */}
      <div className="flex items-stretch gap-3 text-xs whitespace-nowrap tracking-[-0.24px]">
        {/* Y-axis labels with precise positioning */}
        <div className="w-8 h-[100px] relative">
          <div className="text-[#808080] text-right pr-2 absolute top-0 right-0 transform -translate-y-1/2">50k</div>
          <div className="text-[#808080] text-right pr-2 absolute top-[25%] right-0 transform -translate-y-1/2">40k</div>
          <div className="text-[#808080] text-right pr-2 absolute top-[50%] right-0 transform -translate-y-1/2">30k</div>
          <div className="text-[#808080] text-right pr-2 absolute top-[75%] right-0 transform -translate-y-1/2">20k</div>
          <div className="text-[#808080] text-right pr-2 absolute top-[100%] right-0 transform -translate-y-1/2">10k</div>
        </div>
        
        {/* Chart area */}
        <div className="grow shrink-0 basis-0 w-full overflow-visible">
          <div className="h-[110px] w-full overflow-visible pl-2 pr-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 5, right: 15, left: 15, bottom: 15 }}
              >
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ADE80" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#4ADE80" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  vertical={false} 
                  horizontal={true}
                  stroke="#f2f2f2" 
                  strokeDasharray="3 3" 
                  horizontalPoints={[0, 25, 50, 75, 100]}
                />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                />
                <YAxis 
                  hide={true} 
                  domain={[10000, 55000]}
                  ticks={[10000, 20000, 30000, 40000, 50000]}
                  type="number"
                  allowDecimals={false}
                  interval="preserveStartEnd"
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 border border-[#E6E6E6] rounded-lg text-xs">
                          <p className="text-[#808080] mb-1">{payload[0].payload.name}</p>
                          <p className="text-[#4ADE80]">Amount: ${payload[0].value}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  strokeWidth={0}
                  stroke="transparent"
                  fill="url(#colorAmount)" 
                  fillOpacity={1}
                  animationDuration={1000}
                  baseValue={10000}
                  isAnimationActive={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#4ADE80" 
                  strokeWidth={2}
                  dot={{ fill: "#4ADE80", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, stroke: "#4ADE80" }}
                  isAnimationActive={true}
                  connectNulls={true}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          {/* X-axis day labels */}
          <div className="flex justify-between mt-6 max-md:max-w-full text-xs text-[#808080] pb-1 px-2">
            {data.map((day, index) => (
              <div key={index} className="text-[#808080] text-center">
                {day.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
