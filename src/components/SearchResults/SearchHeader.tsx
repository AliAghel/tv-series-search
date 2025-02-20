import React from 'react';
import styled from 'styled-components';
import { SearchFilters } from '../SearchFilters/SearchFilters';
import type { SearchFilters as SearchFiltersType } from '../SearchFilters/SearchFilters';

interface SearchHeaderProps {
  query: string;
  totalResults: number;
  filters: SearchFiltersType;
  onFilterChange: (filters: SearchFiltersType) => void;
  onClearFilters: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  query,
  totalResults,
  filters,
  onFilterChange,
  onClearFilters
}) => {
  return (
    <Container>
      <ResultsInfo>
        Found <Strong>{totalResults}</Strong> shows 
        {query && <> for "<Strong>{query}</Strong>"</>}
      </ResultsInfo>
      
      <FiltersSection>
        <SearchFilters 
          onFilterChange={onFilterChange}
          onClearFilters={onClearFilters}
          filters={filters}
        />
      </FiltersSection>
    </Container>
  );
};

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: 8px;
    width: calc(100% - ${({ theme }) => theme.spacing.sm} * 2);
  }
`;

const ResultsInfo = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const Strong = styled.span`
  font-weight: 600;
`;

const FiltersSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.sm};
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: ${({ theme }) => theme.spacing.xs}; /* For scroll shadow */
  }
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`; 