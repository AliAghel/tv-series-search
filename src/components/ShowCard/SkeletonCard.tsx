import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '../common/Skeleton';

export const SkeletonCard = () => (
  <Card>
    <ImageSkeleton />
    <Content>
      <Skeleton height="1.5rem" width="80%" />
      <Skeleton height="1rem" width="60%" />
      <Skeleton height="2.5rem" width="100%" />
    </Content>
  </Card>
);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.cardBorderRadius};
  overflow: hidden;
  height: 100%;
  background: ${({ theme }) => theme.colors.cardBackground};
`;

const ImageSkeleton = styled(Skeleton)`
  aspect-ratio: 2/3;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`; 