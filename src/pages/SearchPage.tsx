import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar/SearchBar';
import ShowList from '../components/ShowList/ShowList';
import { type SearchFilters as SearchFiltersType } from '../components/SearchFilters/SearchFilters';
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

      if (
        newFilters.minRating &&
        (!show.rating?.average || show.rating.average < newFilters.minRating)
      ) {
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
        <SearchBar onSearch={handleSearch} isLoading={loading} initialValue={lastQuery} />
      </Header>

      <MainContent>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}

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
          onShowClick={id => console.log('Show clicked:', id)}
        />
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const MainContent = styled.main`
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 4px;
`;

export default SearchPage;
