import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <Container>
    <Message>{message}</Message>
    {onRetry && <RetryButton onClick={onRetry}>Try Again</RetryButton>}
  </Container>
);

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.errorLight};
  border-radius: ${({ theme }) => theme.layout.cardBorderRadius};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;

const RetryButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
