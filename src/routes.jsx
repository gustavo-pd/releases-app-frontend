import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PAGES from './pages';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate replace to="/lancamentos" /> } />
    <Route path="/lancamentos" element={ <PAGES.Releases /> } />
    <Route path="/valores" element={ <PAGES.Values /> } />
  </Routes>
);

export default MainRoutes;
