import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ShowDetailsPage from './pages/ShowDetailsPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/show/:id" element={<ShowDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes; 