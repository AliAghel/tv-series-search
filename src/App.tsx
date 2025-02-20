import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import AppRoutes from './routes';
import { SearchProvider } from './context/SearchContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <SearchProvider>
          <Router>
            <AppRoutes />
          </Router>
        </SearchProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
