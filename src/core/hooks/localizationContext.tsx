import React, { createContext, useContext, useState } from "react";

import { Language } from "../types";
import { Translations } from "../translations";

import { settingsDefault } from "../constants";

import { enTranslations } from '../translations/english';
import { jpTranslations } from '../translations/japanese';

interface LocalizationContextType {
  language: string;
  translations: Translations;
  setLanguage: (language: string) => void;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const LocalizationProvider: React.FC<Props> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    settingsDefault.language
  );
  const translations: { [key: string]: Translations } = {
    English: enTranslations,
    Japanese: jpTranslations,
  };

  const value = {
    language: currentLanguage,
    translations: translations[currentLanguage],
    setLanguage: (language: string) => setCurrentLanguage(language),
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }
  return context;
};
