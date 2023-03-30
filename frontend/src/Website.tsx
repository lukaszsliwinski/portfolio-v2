import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import i18n from './config/lang.config';

export default function Website() {
  // local state
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark' ? true : false);

  // get html tag
  const html = document.documentElement;

  // useTranslation fn
  const { t } = useTranslation();

  // handle dark mode switch and add class to html tag
  useEffect(() => {
    darkMode ? html.classList.add('dark') : html.classList.remove('dark')
  }, [darkMode, html.classList]);

  // toggle mode
  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.getItem('mode') === 'dark'
      ? localStorage.setItem('mode', 'light')
      : localStorage.setItem('mode', 'dark');
  };

  // toggle language
  const toggleLanguage = () => {
    (i18n.language === 'en')
      ? i18n.changeLanguage('pl')
      : i18n.changeLanguage('en');
    localStorage.setItem('lang', i18n.language);
  };

  return (
    <div className="h-screen w-screen bg-white dark:bg-gray-900">
      <div className="text-gray-900 dark:text-white">{t('title')}</div>

      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={darkMode} onClick={() => toggleMode()} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
      </label>

      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={i18n.language === 'en'} onClick={() => toggleLanguage()} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Language</span>
      </label>
    </div>
  );
}
