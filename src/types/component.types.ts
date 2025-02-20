import type { Show, SearchResponse } from './api.types';

// Props for each React component
export interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  initialValue?: string;
}

export interface ShowCardProps {
  show: {
    id: number;
    name: string;
    image?: {
      medium: string;
    };
    rating?: {
      average: number;
    };
    genres?: string[];
  };
  onClick: (id: number) => void;
}

export interface ShowListProps {
  shows: SearchResponse[];
  isLoading: boolean;
  onShowClick?: (id: number) => void;
}
