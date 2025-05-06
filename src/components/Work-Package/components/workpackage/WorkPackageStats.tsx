
import React from 'react';

export const WorkPackageStats = () => {
  return (
    <div className="w-full mt-8 mb-10">
      {/* Desktop View - Single card with dividers */}
      <div className="hidden md:flex bg-white rounded-lg border border-gray-100 p-4 justify-between">
        {/* Posted work package */}
        <div className="flex items-center gap-3">
          <div className="rounded-lg p-2">
            <img src="/Frame 1000008082 (1).svg" alt="Posted work package" className="w-10 h-10" />
          </div>
          <div>
            <div className="text-lg font-medium">56</div>
            <div className="text-sm text-gray-700">Posted work package</div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-16 bg-gray-200 mx-4"></div>

        {/* Drafted work package */}
        <div className="flex items-center gap-3">
          <div className="rounded-lg p-2">
            <img src="/Frame 1000008082 (2).svg" alt="Drafted work package" className="w-10 h-10" />
          </div>
          <div>
            <div className="text-lg font-medium">56</div>
            <div className="text-sm text-gray-700">Drafted work package</div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-16 bg-gray-200 mx-4"></div>

        {/* Talent hired */}
        <div className="flex items-center gap-3">
          <div className="rounded-lg p-2">
            <img src="/Frame 1000008082 (3).svg" alt="Talent hired" className="w-10 h-10" />
          </div>
          <div>
            <div className="text-lg font-medium">56</div>
            <div className="text-sm text-gray-700">Talent hired</div>
          </div>
        </div>
      </div>

      {/* Mobile View - Separate cards */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Posted work package */}
        <div className="flex bg-white rounded-lg border border-gray-100 p-4 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2">
              <img src="/Frame 1000008082 (1).svg" alt="Posted work package" className="w-10 h-10" />
            </div>
            <div>
              <div className="text-lg font-medium">56</div>
              <div className="text-sm text-gray-700">Posted work package</div>
            </div>
          </div>
        </div>

        {/* Drafted work package */}
        <div className="flex bg-white rounded-lg border border-gray-100 p-4 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2">
              <img src="/Frame 1000008082 (2).svg" alt="Drafted work package" className="w-10 h-10" />
            </div>
            <div>
              <div className="text-lg font-medium">56</div>
              <div className="text-sm text-gray-700">Drafted work package</div>
            </div>
          </div>
        </div>

        {/* Talent hired */}
        <div className="flex bg-white rounded-lg border border-gray-100 p-4 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2">
              <img src="/Frame 1000008082 (3).svg" alt="Talent hired" className="w-10 h-10" />
            </div>
            <div>
              <div className="text-lg font-medium">56</div>
              <div className="text-sm text-gray-700">Talent hired</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
