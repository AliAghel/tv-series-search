import axios, { AxiosError } from 'axios';
import { SearchResponse, Show, ApiError } from '../types/api.types';

const API_BASE_URL = 'https://api.tvmaze.com';

export class TvMazeService {
  private static instance: TvMazeService;

  constructor() {
    // Add comment explaining why constructor is empty
    // or remove if not needed
  }

  public static getInstance(): TvMazeService {
    if (!TvMazeService.instance) {
      TvMazeService.instance = new TvMazeService();
    }
    return TvMazeService.instance;
  }

  public async searchShows(query: string): Promise<SearchResponse[]> {
    try {
      const response = await axios.get<SearchResponse[]>(`${API_BASE_URL}/search/shows`, {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      return [];
    }
  }

  public async getShowById(id: number): Promise<Show> {
    try {
      const response = await axios.get<Show>(`${API_BASE_URL}/shows/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async getShowDetails(id: number): Promise<Show> {
    try {
      const response = await axios.get<Show>(`${API_BASE_URL}/shows/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  private handleError(error: AxiosError): never {
    const apiError: ApiError = {
      status: error.response?.status || 500,
      message: error.message || 'An unexpected error occurred'
    };
    throw apiError;
  }
}

export const tvMazeService = TvMazeService.getInstance();
