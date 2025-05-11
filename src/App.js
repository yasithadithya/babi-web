import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BabiiiPage from './pages/BabiiiPage';
import MomentsPage from './pages/MomentsPage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/note" element={<NotePage />} />
        <Route path="/moments" element={<MomentsPage />} />
        <Route path="/babiii" element={<BabiiiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
