import { createSignal } from "solid-js";

const translations = {
  en: {
    welcome: "Welcome",
    date: (date: Date) => `Date is ${date.toLocaleDateString("en-US")}`,
  },
  ja: {
    welcome: "ようこそ",
    date: (date: Date) => `日付は${date.toLocaleDateString("ja-JP")}`,
  },
};

const [language, setLanguage] = createSignal("en");

export const languageSignal = {
  get: language,
  set: setLanguage,
};

export const t = (key: string, ...args: any[]) => {
  const translation = translations[language()][key];
  if (typeof translation === "function") {
    return translation(...args);
  }
  return translation;
};

export const changeLanguage = (lng: string) => {
  setLanguage(lng);
};
