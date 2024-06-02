import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import DetailsPage1 from './pages/DetailsPage1';
import { SearchProvider } from './pages/SearchContext';
import BookingPage from './pages/BookingPage';

function App() {

  return (
    <SearchProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medical-centers" element={<DetailsPage1 />} />
        <Route path="/bookings" element={<BookingPage />} />
      </Routes>
    </Router>
    </SearchProvider>
    
  );
}

export default App;
