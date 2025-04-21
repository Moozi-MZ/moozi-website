import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  const changeLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    setLanguage(lang);
    console.log("Language changed to: ", lang);

    // refresh the app to reflect the change
    window.scrollTo(0, 0); // Scroll to top
    // window.location.reload(); 
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
