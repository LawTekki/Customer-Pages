import React, { createContext, useContext, useState } from 'react';

interface CountContextType {
  postedCount: number;
  draftCount: number;
  setPostedCount: (count: number) => void;
  setDraftCount: (count: number) => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

// Initialize with the correct draft count
const INITIAL_DRAFT_COUNT = 10;

export const CountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [postedCount, setPostedCount] = useState(0);
  const [draftCount, setDraftCount] = useState(INITIAL_DRAFT_COUNT);

  return (
    <CountContext.Provider value={{ postedCount, draftCount, setPostedCount, setDraftCount }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}; 