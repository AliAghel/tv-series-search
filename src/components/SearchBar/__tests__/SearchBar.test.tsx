import { render, screen, fireEvent } from '../../../test-utils/test-utils';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
  it('calls onSearch when user submits search', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} isLoading={false} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'breaking bad' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(onSearch).toHaveBeenCalledWith('breaking bad');
  });

  it('shows loading state', () => {
    render(<SearchBar onSearch={() => void 0} isLoading={true} />);
    expect(screen.getByText('Searching...')).toBeInTheDocument();
  });
});
