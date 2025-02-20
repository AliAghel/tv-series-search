import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Skeleton = styled.div<{ height?: string; width?: string; borderRadius?: string }>`
  height: ${({ height = '1rem' }) => height};
  width: ${({ width = '100%' }) => width};
  border-radius: ${({ borderRadius = '4px' }) => borderRadius};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.skeleton.base} 25%,
    ${({ theme }) => theme.colors.skeleton.highlight} 50%,
    ${({ theme }) => theme.colors.skeleton.base} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`; 