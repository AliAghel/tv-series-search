export const theme = {
  colors: {
    primary: '#0066cc',
    primaryDark: '#0052a3',
    primaryLight: 'rgba(0, 102, 204, 0.1)',
    inputBackground: '#ffffff',
    disabled: '#e9ecef',
    border: '#dee2e6',
    text: '#212529',
    textSecondary: '#6c757d',
    background: '#f5f5f5',
    cardBackground: '#ffffff',
    error: '#dc3545',
    errorLight: '#f8d7da',
    rating: '#f5c518',
    imagePlaceholder: '#f8f9fa',
    skeleton: {
      base: '#e9ecef',
      highlight: '#f8f9fa'
    },
    filterBackground: 'white',
    filterBadge: '#f1f3f5'
  },
  breakpoints: {
    smallMobile: '320px',
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  layout: {
    mobileCardHeight: '150px',
    mobileImageWidth: '100px',
    cardBorderRadius: '8px',
    cardMinHeight: '400px'
  },
  cardSizes: {
    mobile: {
      height: '150px',
      imageWidth: '100px'
    },
    desktop: {
      minWidth: '250px',
      aspectRatio: '2/3'
    }
  }
};

export type Theme = typeof theme;
