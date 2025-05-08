
export const EventsStats = () => {
  return (
    <div className="flex mt-8 border border-gray-100 rounded-lg max-md:flex-col max-md:border-0 max-md:gap-2 w-full max-w-full pr-6 max-md:pr-2 bg-white fade-in">
      {/* Posted work package */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008082 (5).svg" alt="Posted work package" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">56</div>
            <div className="text-sm text-gray-600">Posted work package</div>
          </div>
        </div>
      </div>

      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>

      {/* Drafted work package */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008082 (1).svg" alt="Drafted work package" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">56</div>
            <div className="text-sm text-gray-600">Drafted work package</div>
          </div>
        </div>
      </div>

      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>

      {/* Talent hired */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008082 (2).svg" alt="Talent hired" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">56</div>
            <div className="text-sm text-gray-600">Talent hired</div>
          </div>
        </div>
      </div>

      <div className="w-px bg-gray-200 max-md:hidden h-14 self-center mx-1"></div>

      {/* Cash spent */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center">
          <img src="/Frame 1000008082 (3).svg" alt="Cash spent" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">$40.00</div>
            <div className="text-sm text-gray-600">Cash spent</div>
          </div>
        </div>
      </div>
    </div>
  );
};
