import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShowCardProps } from '../../types/component.types';
import { ImageWithFallback } from '../common/ImageWithFallback';
/**
 * ShowCard component displays a card with show information
 * Memoized to prevent unnecessary re-renders in list
 */
export const ShowCard: React.FC<ShowCardProps> = memo(({ show, onClick }) => {
  const handleClick = () => onClick?.(show.id);

  return (
    <Card onClick={handleClick} data-testid="show-card">
      <ImageContainer>
        {show.image?.medium ? (
          <ImageWithFallback
            src={show.image.medium}
            alt={show.name}
            fallbackSrc="/placeholder.png"
            loading="lazy"
          />
        ) : (
          <PlaceholderImage>
            No Image Available
          </PlaceholderImage>
        )}
      </ImageContainer>
      <Content>
        <Header>
          <Title>{show.name || 'Untitled Show'}</Title>
          {show.rating?.average && (
            <Rating aria-label={`Rating ${show.rating.average} out of 10`}>
              ⭐ {show.rating.average}
            </Rating>
          )}
        </Header>
        <Genres>
          {show.genres?.length > 0 
            ? show.genres.join(' • ')
            : 'No genres available'}
        </Genres>
        <ViewButton to={`/show/${show.id}`}>
          View Details
        </ViewButton>
      </Content>
    </Card>
  );
});

// Add display name for debugging
ShowCard.displayName = 'ShowCard';

// Styled components with theme support
const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.cardBorderRadius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.cardBackground};
  height: 100%;
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    min-height: ${({ theme }) => theme.layout.mobileCardHeight};
    height: ${({ theme }) => theme.layout.mobileCardHeight};
    margin: 0 ${({ theme }) => theme.spacing.sm};
    width: calc(100% - ${({ theme }) => theme.spacing.md} * 2);
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 2/3;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.imagePlaceholder};
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.layout.mobileImageWidth};
    height: ${({ theme }) => theme.layout.mobileCardHeight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.imagePlaceholder};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 150px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
    min-height: auto;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.4em;
`;

const Rating = styled.div`
  color: ${({ theme }) => theme.colors.rating};
  font-weight: 500;
`;

const Genres = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  min-height: 1.2em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }
`;

const ViewButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
  transition: background-color 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    font-size: 0.8rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export default ShowCard; 