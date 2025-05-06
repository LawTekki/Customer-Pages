import React, { createContext, useContext, useState, ReactNode } from 'react';

type StatusType = 'Ongoing' | 'Concluded' | 'Cancelled' | 'Pending' | 'Any';

interface FilterContextType {
  filterStatus: StatusType;
  setFilterStatus: (status: StatusType) => void;
}

// Create a default value for the context
const defaultFilterContext: FilterContextType = {
  filterStatus: 'Any',
  setFilterStatus: () => {},
};

const FilterContext = createContext<FilterContextType>(defaultFilterContext);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filterStatus, setFilterStatus] = useState<StatusType>('Any');

  return (
    <FilterContext.Provider value={{ filterStatus, setFilterStatus }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  return useContext(FilterContext);
};
