import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useApi } from '../hooks/useApi';
import { tvMazeService } from '../services/api.service';
import { Show } from '../types/api.types';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { Skeleton } from '../components/common/Skeleton';

const ShowDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: show, loading, error, execute } = useApi<Show>();

  React.useEffect(() => {
    if (id) {
      execute(tvMazeService.getShowDetails(Number(id)));
    }
  }, [id, execute]);

  if (loading) {
    return <DetailsPageSkeleton />;
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage
          message={error.message}
          onRetry={() => id && execute(tvMazeService.getShowDetails(Number(id)))}
        />
      </Container>
    );
  }

  if (!show) return null;

  return (
    <Container>
      <BackLink to="/">← Back to Search</BackLink>

      <Content>
        <ImageSection>
          {show.image?.original ? (
            <ShowImage src={show.image.original} alt={show.name} />
          ) : (
            <PlaceholderImage>No Image Available</PlaceholderImage>
          )}
        </ImageSection>

        <InfoSection>
          <Title>{show.name}</Title>

          {show.rating?.average && <Rating>⭐ {show.rating.average}/10</Rating>}

          {show.genres?.length > 0 && <Genres>{show.genres.join(' • ')}</Genres>}

          {show.summary && <Summary dangerouslySetInnerHTML={{ __html: show.summary }} />}

          <MetaInfo>
            {show.status && <InfoItem>Status: {show.status}</InfoItem>}
            {show.premiered && <InfoItem>Premiered: {show.premiered}</InfoItem>}
            {show.network?.name && <InfoItem>Network: {show.network.name}</InfoItem>}
          </MetaInfo>
        </InfoSection>
      </Content>
    </Container>
  );
};

const DetailsPageSkeleton = () => (
  <Container>
    <Content>
      <ImageSection>
        <Skeleton height="600px" />
      </ImageSection>
      <InfoSection>
        <Skeleton height="2rem" width="60%" />
        <Skeleton height="1.5rem" width="30%" />
        <Skeleton height="1rem" width="40%" />
        <Skeleton height="8rem" />
        <Skeleton height="4rem" />
      </InfoSection>
    </Content>
  </Container>
);

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const ShowImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.layout.cardBorderRadius};
`;

const PlaceholderImage = styled.div`
  aspect-ratio: 2/3;
  background-color: ${({ theme }) => theme.colors.imagePlaceholder};
  border-radius: ${({ theme }) => theme.layout.cardBorderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const Rating = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.rating};
`;

const Genres = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Summary = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  p {
    margin: 0;
  }
`;

const MetaInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const InfoItem = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export default ShowDetailsPage;
