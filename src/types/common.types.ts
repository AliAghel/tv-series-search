// Shared/common types
export interface LoadingState {
  isLoading: boolean;
}

export interface ErrorState {
  error: string | null;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    error: string;
    background: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
} 