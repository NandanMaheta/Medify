import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [medicalCenters, setMedicalCenters] = useState([]);

  return (
    <SearchContext.Provider value={{ medicalCenters, setMedicalCenters }}>
      {children}
    </SearchContext.Provider>
  );
};
