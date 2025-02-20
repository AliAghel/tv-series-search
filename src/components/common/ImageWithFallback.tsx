import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageWithFallbackProps {
  src?: string;
  fallbackSrc: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  loading = 'eager'
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      onError={handleError}
      loading={loading}
    />
  );
};

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`; 