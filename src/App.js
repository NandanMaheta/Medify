import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import DetailsPage1 from './pages/DetailsPage1';
import { SearchProvider } from './pages/SearchContext';

function App() {

  return (
    <SearchProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medical-centers" element={<DetailsPage1 />} />
      </Routes>
    </Router>
    </SearchProvider>
    
  );
}

export default App;
