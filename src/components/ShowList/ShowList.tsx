import React, { memo } from 'react';
import styled from 'styled-components';
import ShowCard from '../ShowCard/ShowCard';
import { SkeletonCard } from '../ShowCard/SkeletonCard';
import { ShowCardProps } from '../ShowCard/ShowCard';

interface ShowListProps {
  shows: Array<{ show: ShowCardProps['show'] }>;
  isLoading: boolean;
  onShowClick: (id: number) => void;
}

/**
 * ShowList component displays a grid of show cards
 * Handles loading, empty states, and show click events
 */
export const ShowList: React.FC<ShowListProps> = memo(({ shows, isLoading, onShowClick }) => {
  // Show skeleton cards while loading
  if (isLoading) {
    return (
      <Grid>
        {[...Array(8)].map((_, index) => (
          <GridItem key={`skeleton-${index}`}>
            <SkeletonCard />
          </GridItem>
        ))}
      </Grid>
    );
  }

  if (!shows?.length) {
    return (
      <Container>
        <EmptyState>
          <EmptyMessage>No shows found</EmptyMessage>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Grid role="grid" aria-label="TV Shows grid">
        {shows.map(({ show }) => (
          <GridItem key={show.id} role="gridcell">
            <ShowCard show={show} onClick={onShowClick} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
});

// Add display name for debugging
ShowList.displayName = 'ShowList';

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  /* Desktop: 4 cards per row */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Tablet: 2-3 cards per row */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  /* Mobile: 1 card per row */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 400px; /* Limit card width on mobile */
    margin: 0 auto;
  }
`;

const GridItem = styled.div`
  height: 100%;
  display: flex;
`;

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  text-align: center;
`;

export default ShowList;
