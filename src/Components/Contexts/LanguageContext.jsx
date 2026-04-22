import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../../Utils/Translations.js';

const LanguageContext = createContext(); // ← No se exporta

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('preferred-language');
    return saved && ['es', 'en', 'ru'].includes(saved) ? saved : 'es';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations.es[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ El hook se exporta AQUÍ MISMO
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};