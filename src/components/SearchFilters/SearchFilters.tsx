import React from 'react';
import styled from 'styled-components';

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
  onClearFilters: () => void;
  filters: SearchFilters;
}

export interface SearchFilters {
  genre?: string;
  minRating?: number;
  status?: 'Running' | 'Ended' | 'To Be Determined';
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ 
  onFilterChange, 
  onClearFilters,
  filters 
}) => {
  return (
    <FiltersContainer>
      <FiltersGroup>
        <FilterGroup>
          <FilterLabel>Genre</FilterLabel>
          <Select
            value={filters.genre || ''}
            onChange={(e) => onFilterChange({ ...filters, genre: e.target.value || undefined })}
          >
            <option value="">All Genres</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Thriller">Thriller</option>
            <option value="Science-Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Rating</FilterLabel>
          <Select
            value={filters.minRating || ''}
            onChange={(e) => onFilterChange({ 
              ...filters, 
              minRating: e.target.value ? Number(e.target.value) : undefined
            })}
          >
            <option value="">Any Rating</option>
            <option value="7">7+ ⭐</option>
            <option value="8">8+ ⭐</option>
            <option value="9">9+ ⭐</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Status</FilterLabel>
          <Select
            value={filters.status || ''}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value as any || undefined })}
          >
            <option value="">Any Status</option>
            <option value="Running">Running</option>
            <option value="Ended">Ended</option>
            <option value="To Be Determined">TBD</option>
          </Select>
        </FilterGroup>

       
      </FiltersGroup>

      {Object.keys(filters).length > 0 && (
        <ClearFiltersButton onClick={onClearFilters}>
          Clear Filters
        </ClearFiltersButton>
      )}
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

const FiltersGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FilterLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Select = styled.select`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.9rem;
  min-width: 140px;
  background-color: white;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
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
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }
`; 