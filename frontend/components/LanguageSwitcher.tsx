"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "kk", name: "Қазақша", flag: "🇰🇿" },
    { code: "en", name: "English", flag: "🇬🇧" },
  ];

  const currentLang = languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Выбрать язык"
      >
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-gray-700">
          {currentLang.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 min-w-[180px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                  language === lang.code ? "bg-primary/5" : ""
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="flex-1 text-left text-sm font-medium text-gray-700">
                  {lang.name}
                </span>
                {language === lang.code && (
                  <span className="text-primary text-xs">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
