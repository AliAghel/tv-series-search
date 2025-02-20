import React, { createContext, useContext, useState } from 'react';
import { SearchResponse } from '../types/api.types';

interface SearchContextType {
  searchResults: SearchResponse[];
  setSearchResults: (results: SearchResponse[]) => void;
  lastQuery: string;
  setLastQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<SearchResponse[]>([]);
  const [lastQuery, setLastQuery] = useState('');

  return (
    <SearchContext.Provider value={{ 
      searchResults, 
      setSearchResults, 
      lastQuery, 
      setLastQuery 
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}; 