import React from "react";

const stats = [
  {
    icon: "/mdi_cart.svg",
    bgColor: "#FFA500",
    label: "Orders",
    value: "8,232",
    trend: { value: "23%", type: "up", color: "green" },
  },
  {
    icon: "/solar_tag-price-bold.svg",
    bgColor: "#4CAF50",
    label: "Accepted proposals",
    value: "8,232",
    trend: { value: "23%", type: "down", color: "red" },
  },
  {
    icon: "/icon-park-outline_ad-product.svg",
    bgColor: "#6B047C",
    label: "Outstanding proposal",
    value: "842",
    trend: { value: "23%", type: "up", color: "green" },
  },
];

export const StatsCards = () => {
  // Mobile view (separate cards stacked vertically)
  const mobileView = (
    <div className="flex flex-col w-full px-4 mb-5 gap-2 sm:hidden">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="w-full bg-white rounded-lg p-3 shadow-sm hover-lift click-shrink card-hover fade-in"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 icon-bounce"
                style={{ backgroundColor: stat.bgColor }}
              >
                <img
                  src={stat.icon}
                  className="w-5 h-5 object-contain"
                  alt={stat.label}
                />
              </div>
              <div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
                <div className="text-gray-900 text-base font-semibold">
                  {stat.value}
                </div>
              </div>
            </div>
            <div
              className="flex items-center text-xs self-center rounded-full px-2 py-0.5"
              style={{
                color: stat.trend.type === 'up' ? '#1C7C04' : '#D43705',
                backgroundColor: stat.trend.type === 'up' ? '#F5FFFB' : '#FFF7F5'
              }}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
                style={{ transform: stat.trend.type === 'down' ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path
                  d="M5 2.5L8.5 6L1.5 6L5 2.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>{stat.trend.value} this week</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Desktop view (original layout)
  const desktopView = (
    <div className="hidden sm:block w-full mb-5 bg-white rounded-lg shadow-sm p-4 border hover-border fade-in" style={{ borderColor: '#F2F2F2' }}>
      <div className="flex gap-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex-1 border-r last:border-r-0 px-3 hover-scale">
            <div className="flex gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center icon-bounce"
                style={{ backgroundColor: stat.bgColor }}
              >
                <img
                  src={stat.icon}
                  className="w-6 h-6 object-contain"
                  alt={stat.label}
                />
              </div>
              <div className="flex-1">
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="text-gray-900 text-lg font-semibold">
                    {stat.value}
                  </div>
                  <div
                    className="flex items-center text-xs group relative rounded-full px-2"
                    style={{
                      color: stat.trend.type === 'up' ? '#1C7C04' : '#D43705',
                      backgroundColor: stat.trend.type === 'up' ? '#F5FFFB' : '#FFF7F5'
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: stat.trend.type === 'down' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path
                        d="M5 2.5L8.5 6L1.5 6L5 2.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="ml-1">{stat.trend.value} this week</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                      <span className="text-white">
                        {stat.trend.type === 'up' ? 'Increased by' : 'Decreased by'} {stat.trend.value} compared to last week
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {mobileView}
      {desktopView}
    </>
  );
};