
import { OrderStats as OrderStatsType } from "../../types/orders";

interface OrderStatsProps {
  stats: OrderStatsType;
}

export const OrderStatsDisplay = ({ stats }: OrderStatsProps) => {
  return (
    <div className="flex mt-8 border border-gray-100 rounded-lg max-md:flex-col max-md:border-0 max-md:gap-2 w-full max-w-full pr-6 max-md:pr-2 bg-white fade-in">
      {/* Total Orders */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 transition-all duration-300 fade-in max-md:duration-150" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008082 (4).svg" alt="Total Orders" className="w-10 h-10 mr-3 icon-bounce max-md:animate-none" />
          <div>
            <div className="text-xl font-medium">{stats.totalOrders}</div>
            <div className="text-sm text-gray-600">Total order</div>
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>
      {/* Received Orders */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 transition-all duration-300 fade-in max-md:duration-150" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008086.svg" alt="Received Orders" className="w-10 h-10 mr-3 icon-bounce max-md:animate-none" />
          <div>
            <div className="text-xl font-medium">{stats.receivedOrders}</div>
            <div className="text-sm text-gray-600">Received order</div>
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>
      {/* Pending Orders */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 transition-all duration-300 fade-in max-md:duration-150" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008082 (5).svg" alt="Pending Orders" className="w-10 h-10 mr-3 icon-bounce max-md:animate-none" />
          <div>
            <div className="text-xl font-medium">{stats.pendingOrders}</div>
            <div className="text-sm text-gray-600">Pending orders</div>
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-200 max-md:hidden h-14 self-center mx-1"></div>
      {/* Cash spent */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 transition-all duration-300 fade-in max-md:duration-150" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008082 (3).svg" alt="Cash spent" className="w-10 h-10 mr-3 icon-bounce max-md:animate-none" />
          <div>
            <div className="text-xl font-medium">{stats.cashSpent}</div>
            <div className="text-sm text-gray-600">Cash spent</div>
          </div>
        </div>
      </div>
    </div>
  );
};
