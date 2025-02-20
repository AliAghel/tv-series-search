import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchPage } from '../SearchPage';
import { SearchProvider } from '../../context/SearchContext';

jest.mock('../../services/api.service', () => ({
  tvMazeService: {
    searchShows: jest.fn().mockResolvedValue([
      {
        show: {
          id: 1,
          name: 'Breaking Bad',
          rating: { average: 9.5 },
        },
      },
    ]),
  },
}));

describe('SearchPage', () => {
  it('performs search and displays results', async () => {
    render(
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'breaking bad' } });
    fireEvent.submit(screen.getByRole('search'));
    
    await waitFor(() => {
      expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
    });
  });
}); 