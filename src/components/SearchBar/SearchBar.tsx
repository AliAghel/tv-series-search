import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { SearchBarProps } from '../../types/component.types';

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading, initialValue = '' }) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        onSearch(query.trim());
      }
    },
    [query, onSearch]
  );

  const handleClear = () => {
    setQuery('');
    // Optionally trigger a search with empty query
    // onSearch('');
  };

  return (
    <SearchContainer>
      <SearchForm role="form" onSubmit={handleSubmit}>
        <InputWrapper>
          <SearchInput
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search TV shows..."
            disabled={isLoading}
            aria-label="Search TV shows"
          />
          {query && (
            <ClearButton type="button" onClick={handleClear} aria-label="Clear search">
              ×
            </ClearButton>
          )}
        </InputWrapper>
        <SearchButton type="submit" disabled={isLoading || !query.trim()}>
          {isLoading ? 'Searching...' : 'Search'}
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 85%;
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  font-size: 1rem;
  min-width: 0;
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: 0.9rem;
    border-radius: 10px;
  }
`;

const SearchButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  min-width: 80px;
  white-space: nowrap;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: 0.9rem;
    border-radius: 10px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const ClearButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default SearchBar;
