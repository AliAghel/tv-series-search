import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar/SearchBar';
import ShowList from '../components/ShowList/ShowList';
import { SearchFilters, type SearchFilters as SearchFiltersType } from '../components/SearchFilters/SearchFilters';
import { SearchHeader } from '../components/SearchResults/SearchHeader';
import { useApi } from '../hooks/useApi';
import { tvMazeService } from '../services/api.service';
import type { SearchResponse } from '../types/api.types';
import { useSearch } from '../context/SearchContext';

const SearchPage: React.FC = () => {
  const { searchResults: allResults, setSearchResults, lastQuery, setLastQuery } = useSearch();
  const { loading, error, execute } = useApi<SearchResponse[]>();
  const [filters, setFilters] = useState<SearchFiltersType>({});
  const [originalResults, setOriginalResults] = useState<SearchResponse[]>([]);

  const handleSearch = async (query: string) => {
    try {
      setLastQuery(query);
      const results = await execute(tvMazeService.searchShows(query));
      setOriginalResults(results || []);
      setSearchResults(results || []);
      setFilters({});
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  const handleFilterChange = (newFilters: SearchFiltersType) => {
    setFilters(newFilters);
    
    const filteredResults = originalResults.filter(({ show }) => {
      if (newFilters.genre && !show.genres?.includes(newFilters.genre)) {
        return false;
      }

      if (newFilters.minRating && (!show.rating?.average || show.rating.average < newFilters.minRating)) {
        return false;
      }

      if (newFilters.status && show.status !== newFilters.status) {
        return false;
      }

      return true;
    });

    setSearchResults(filteredResults);
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchResults(originalResults); // Reset to original search results
  };

  // Restore last search on mount if exists
  React.useEffect(() => {
    if (lastQuery) {
      handleSearch(lastQuery);
    }
  }, []);

  return (
    <PageContainer>
      <Header>
        <Title>TV Show Search</Title>
        <SearchBar 
          onSearch={handleSearch} 
          isLoading={loading} 
          initialValue={lastQuery}
        />
      </Header>

      <MainContent>
        {error && (
          <ErrorMessage>Error: {error.message}</ErrorMessage>
        )}
        
        {lastQuery && (
          <SearchHeader 
            query={lastQuery}
            totalResults={allResults.length}
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        )}

        <ShowList 
          shows={allResults} 
          isLoading={loading}
          onShowClick={(id) => console.log('Show clicked:', id)}
        />
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 100vw;
  overflow-x: hidden;
`;

const Header = styled.header`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const ResultsCount = styled.div`  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: ${({ theme }) => theme.spacing.md} 0;
  font-size: 0.9rem;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.errorLight};
  border-radius: 8px;
  font-size: 0.9rem;
`;

const SearchControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ClearFiltersButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  height: fit-content;
  align-self: flex-end;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export default SearchPage;

