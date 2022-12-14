import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
    </Routes>
  );
};

export default App;
