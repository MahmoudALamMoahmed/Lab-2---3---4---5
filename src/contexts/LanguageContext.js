import React, { createContext, useState, useContext } from 'react';

// Create a context with default value 'EN'
const LanguageContext = createContext({
  language: 'EN',
  setLanguage: () => {},
});

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for easier access to the context
export const useLanguage = () => useContext(LanguageContext);
