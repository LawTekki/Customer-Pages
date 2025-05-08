import React, { useState, useMemo, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { ChevronDown } from "lucide-react";
import "../../animations.css";

interface SpendingData {
  name: string;
  amount: number;
}

type TabType = "wallet" | "credit";
type TimeFilterType = "This week" | "This month" | "Last month" | "Last 3 months";

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

export const SpendingChart: React.FC = () => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);


  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<TabType>("wallet");
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>("This week");
  const [timeFilterOpen, setTimeFilterOpen] = useState(false);

  const timeFilterOptions: TimeFilterType[] = [
    "This week",
    "This month",
    "Last month",
    "Last 3 months",
  ];

  const walletData: Record<TimeFilterType, SpendingData[]> = {
    "This week": [
      { name: "Monday", amount: 30000 },
      { name: "Tuesday", amount: 42000 },
      { name: "Wednesday", amount: 48000 },
      { name: "Thursday", amount: 25000 },
      { name: "Friday", amount: 45000 },
      { name: "Saturday", amount: 30000 },
      { name: "Sunday", amount: 45000 },
    ],
    "This month": [
      { name: "Week 1", amount: 35000 },
      { name: "Week 2", amount: 45000 },
      { name: "Week 3", amount: 42000 },
      { name: "Week 4", amount: 48000 },
    ],
    "Last month": [
      { name: "Week 1", amount: 32000 },
      { name: "Week 2", amount: 45000 },
      { name: "Week 3", amount: 38000 },
      { name: "Week 4", amount: 47000 },
    ],
    "Last 3 months": [
      { name: "Jan", amount: 38000 },
      { name: "Feb", amount: 42000 },
      { name: "Mar", amount: 46000 },
    ],
  };

  const creditData: Record<TimeFilterType, SpendingData[]> = {
    "This week": [
      { name: "Monday", amount: 28000 },
      { name: "Tuesday", amount: 40000 },
      { name: "Wednesday", amount: 45000 },
      { name: "Thursday", amount: 30000 },
      { name: "Friday", amount: 42000 },
      { name: "Saturday", amount: 30000 },
      { name: "Sunday", amount: 38000 },
    ],
    "This month": [
      { name: "Week 1", amount: 32000 },
      { name: "Week 2", amount: 42000 },
      { name: "Week 3", amount: 38000 },
      { name: "Week 4", amount: 45000 },
    ],
    "Last month": [
      { name: "Week 1", amount: 30000 },
      { name: "Week 2", amount: 40000 },
      { name: "Week 3", amount: 35000 },
      { name: "Week 4", amount: 42000 },
    ],
    "Last 3 months": [
      { name: "Jan", amount: 35000 },
      { name: "Feb", amount: 40000 },
      { name: "Mar", amount: 43000 },
    ],
  };

  const data = useMemo(
    () =>
      activeTab === "wallet"
        ? walletData[timeFilter]
        : creditData[timeFilter],
    [activeTab, timeFilter]
  );

  return (
    <div className="w-full p-4 pt-0">
      {/* HEADER - Desktop */}
      {!isMobile && (
        <div className="flex items-center mb-4 fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-[#1A011E] w-1/3">
            Spending
          </h2>

          <div className="flex-grow flex justify-center">
            <div className="inline-flex bg-[#F5F5F5] rounded-lg">
              <button
                className={`px-4 py-2 text-sm rounded-md button-pulse ${
                  activeTab === "wallet"
                    ? "bg-white shadow-sm text-[#808080]"
                    : "text-[#808080]"
                }`}
                onClick={() => setActiveTab("wallet")}
              >
                Wallet
              </button>
              <button
                className={`px-4 py-2 text-sm rounded-md button-pulse ${
                  activeTab === "credit"
                    ? "bg-white shadow-sm text-[#808080]"
                    : "text-[#808080]"
                }`}
                onClick={() => setActiveTab("credit")}
              >
                Lawtrolley credit
              </button>
            </div>
          </div>

          <div className="w-1/3 flex justify-end relative">
            <div
              className="flex items-center gap-2 px-3 py-2 cursor-pointer border border-[#E6E6E6] rounded-lg hover-scale"
              onClick={() => setTimeFilterOpen((o) => !o)}
            >
              <span className="text-[#808080] text-sm">{timeFilter}</span>
              <ChevronDown className="h-4 w-4 text-[#808080] icon-spin" />
            </div>
            {timeFilterOpen && (
              <>
                {/* Backdrop */}
                <div className="fixed inset-0 z-30 bg-black bg-opacity-0" />
                <div ref={dropdownRef} className="absolute right-0 mt-2 bg-white rounded-lg shadow-md z-40 w-40 transition-opacity opacity-100 slide-in">
                  {timeFilterOptions.map((opt) => (
                    <div
                      key={opt}
                      className={`px-4 py-2 text-sm cursor-pointer hover-scale ${
                        timeFilter === opt
                          ? "text-[#6B047C]"
                          : "text-[#808080] hover:bg-[#F5F5F5]"
                      }`}
                      onClick={() => {
                        setTimeFilter(opt);
                        setTimeFilterOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* HEADER - Mobile */}
      {isMobile && (
        <div className="mb-4 fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold text-[#1A011E]">
              Spending
            </h2>
            <div
              className="flex items-center gap-1 px-2 py-1 cursor-pointer border border-[#E6E6E6] rounded-lg hover-scale"
              onClick={() => setTimeFilterOpen((o) => !o)}
            >
              <span className="text-[#808080] text-xs">{timeFilter}</span>
              <ChevronDown className="h-3 w-3 text-[#808080] icon-spin" />
            </div>
          </div>

          <div className="flex justify-center w-full mb-3">
            <div className="inline-flex bg-[#F5F5F5] rounded-lg w-full justify-center">
              <button
                className={`flex-1 py-1.5 text-xs rounded-md button-pulse ${
                  activeTab === "wallet"
                    ? "bg-white shadow-sm text-[#808080]"
                    : "text-[#808080]"
                }`}
                onClick={() => setActiveTab("wallet")}
              >
                Wallet
              </button>
              <button
                className={`flex-1 py-1.5 text-xs rounded-md button-pulse ${
                  activeTab === "credit"
                    ? "bg-white shadow-sm text-[#808080]"
                    : "text-[#808080]"
                }`}
                onClick={() => setActiveTab("credit")}
              >
                Lawtrolley credit
              </button>
            </div>
          </div>

          {timeFilterOpen && (
            <>
              {/* Backdrop */}
              <div className="fixed inset-0 z-30 bg-black bg-opacity-0" />
              <div ref={dropdownRef} className="absolute left-0 right-0 mt-1 mx-4 bg-white rounded-lg shadow-md z-40 border border-[#E6E6E6] transition-opacity opacity-100 slide-in">
                {timeFilterOptions.map((opt) => (
                  <div
                    key={opt}
                    className={`px-4 py-2 text-sm cursor-pointer hover-scale ${
                      timeFilter === opt
                        ? "text-[#6B047C]"
                        : "text-[#808080] hover:bg-[#F5F5F5]"
                    }`}
                    onClick={() => {
                      setTimeFilter(opt);
                      setTimeFilterOpen(false);
                    }}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* CHART */}
      <div className="w-full h-[200px] fade-in" style={{ animationDelay: '0.2s' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={isMobile
              ? { top: 10, right: 5, left: 0, bottom: 10 }
              : { top: 10, right: 10, left: 0, bottom: 0 }
            }
          >
            <defs>
              <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3FFD7E" stopOpacity={0.8} />
                <stop offset="20%" stopColor="#3FFD7E" stopOpacity={0.6} />
                <stop offset="50%" stopColor="#BCFFD2" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#BCFFD2" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#E6E6E6" strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={props => {
                const { x, y, payload } = props;
                // For mobile, abbreviate long day names
                let displayName = payload.value;
                if (isMobile && timeFilter === "This week") {
                  const dayMap: Record<string, string> = {
                    "Monday": "Mon",
                    "Tuesday": "Tue",
                    "Wednesday": "Wed",
                    "Thursday": "Thu",
                    "Friday": "Fri",
                    "Saturday": "Sat",
                    "Sunday": "Sun"
                  };
                  displayName = dayMap[payload.value] || payload.value;
                }

                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dy={16}
                      textAnchor="middle"
                      fill="#808080"
                      fontSize={isMobile ? 9 : 12}
                    >
                      {displayName}
                    </text>
                  </g>
                );
              }}
              height={isMobile ? 35 : 30}
              padding={{ left: isMobile ? 5 : 10, right: isMobile ? 5 : 10 }}
              interval={0}
              minTickGap={isMobile ? 5 : 10}
            />

            <YAxis
              type="number"
              scale="linear"
              domain={[0, 50000]}
              ticks={[10000, 20000, 30000, 40000, 50000]}
              tickFormatter={(v) => `${v / 1000}k`}
              axisLine={false}
              tickLine={false}
              tick={props => {
                const { x, y, payload } = props;
                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dx={isMobile ? -1 : 0}
                      textAnchor="end"
                      fill="#808080"
                      fontSize={isMobile ? 9 : 12}
                    >
                      {`${payload.value / 1000}k`}
                    </text>
                  </g>
                );
              }}
              width={isMobile ? 35 : 30}
              tickMargin={isMobile ? 3 : 5}
            />

            <Tooltip
              content={({ active, payload }) =>
                active && payload && payload.length ? (
                  <div className="bg-white p-2 border border-[#E6E6E6] rounded-lg shadow-md text-xs">
                    <p className="text-[#808080] mb-1">
                      {payload[0].payload.name}
                    </p>
                    <p className="text-[#3FFD7E] font-medium">
                      ${payload[0].value.toLocaleString()}
                    </p>
                  </div>
                ) : null
              }
            />

            <Area
              type="linear"
              dataKey="amount"
              stroke="#3FFD7E"
              strokeWidth={2}
              fill="url(#colorAmt)"
              dot={{ r: isMobile ? 2 : 3, stroke: "#fff", strokeWidth: 2, fill: "#3FFD7E" }}
              activeDot={{
                r: isMobile ? 4 : 5,
                stroke: "#fff",
                strokeWidth: 2,
                fill: "#3FFD7E",
              }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
