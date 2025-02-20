import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
  it('calls onSearch when user submits search', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} isLoading={false} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'breaking bad' } });
    fireEvent.submit(screen.getByRole('search'));
    
    expect(onSearch).toHaveBeenCalledWith('breaking bad');
  });

  it('shows loading state', () => {
    render(<SearchBar onSearch={() => {}} isLoading={true} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
}); 