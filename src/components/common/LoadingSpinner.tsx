import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LoadingState } from '../../types';

export const LoadingSpinner: React.FC<LoadingState> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0066cc;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`; 