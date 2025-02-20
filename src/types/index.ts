// API Types
export interface Show {
  id: number;
  name: string;
  summary: string;
  image?: {
    medium: string;
    original: string;
  };
  rating?: {
    average: number;
  };
  genres: string[];
  status: string;
  premiered?: string;
  network?: {
    name: string;
  };
}

export interface SearchResponse {
  score: number;
  show: Show;
}

// Component Props Types
export interface SearchBarProps {
  onSearch: (query: string) => Promise<void>;
  isLoading: boolean;
}

export interface ShowCardProps {
  show: Show;
  onClick?: (id: number) => void;
}

export interface ShowListProps {
  shows: SearchResponse[];
  onShowClick?: (id: number) => void;
}

// Common Types
export interface ApiError {
  status: number;
  message: string;
}

export interface LoadingState {
  isLoading: boolean;
}
