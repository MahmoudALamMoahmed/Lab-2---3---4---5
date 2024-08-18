import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import "../App.css"

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="language-toggle">
      <button
        onClick={() => handleLanguageChange('EN')}
        className={language === 'EN' ? 'active' : ''}
      >
       EN
      </button>
      <button
        onClick={() => handleLanguageChange('AR')}
        className={language === 'AR' ? 'active' : ''}
      >
        AR
      </button>
      <p>{language}</p>
    </div>
  );
};

export default LanguageToggle;

