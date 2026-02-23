"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "ru"; // Default for SSR
  }
  
  const savedLang = localStorage.getItem("language") as Language;
  if (savedLang && (savedLang === "ru" || savedLang === "kk" || savedLang === "en")) {
    return savedLang;
  }
  
  // Detect browser language
  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "kk") {
    return "kk";
  } else if (browserLang === "en") {
    return "en";
  }
  
  return "ru";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // On client side, load from localStorage
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "ru" || savedLang === "kk" || savedLang === "en")) {
        setLanguageState(savedLang);
      }
      setIsHydrated(true);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
