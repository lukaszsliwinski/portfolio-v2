// packages
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// language config
import i18n from '../config/lang.config';

// icons
import { ReactComponent as Menu } from '../assets/svg/menu.svg';
import { ReactComponent as About } from '../assets/svg/about.svg';
import { ReactComponent as Webapp } from '../assets/svg/webapp.svg';
import { ReactComponent as Website } from '../assets/svg/website.svg';
import { ReactComponent as Sun } from '../assets/svg/sun.svg';
import { ReactComponent as Moon } from '../assets/svg/moon.svg';
import { ReactComponent as Pol } from '../assets/svg/pol.svg';
import { ReactComponent as Eng } from '../assets/svg/eng.svg';

// components
import { XyzTransition } from '@animxyz/react';
import Scrollspy from 'react-scrollspy';

export default function Nav() {
  // dark mode state
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark' ? true : false);

  // get html tag
  const html = document.documentElement;

  // useTranslation fn
  const { t } = useTranslation();

  // handle dark mode switch and add class to html tag
  useEffect(() => {
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
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
    i18n.language === 'en' ? i18n.changeLanguage('pl') : i18n.changeLanguage('en');
    localStorage.setItem('lang', i18n.language);
  };
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600 md:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Open sidebar</span>
      </button>

      <XyzTransition xyz="fade left skew-left-1 flip-left-100%" appear>
        <aside
          id="separator-sidebar"
          className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform md:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col overflow-y-auto bg-neutral-100 p-4 dark:bg-neutral-800">
            <h1 className="text-2xl font-medium dark:text-neutral-200">ŁUKASZ ŚLIWIŃSKI</h1>
            <h2 className="text-sm tracking-widest text-neutral-600 dark:text-neutral-300">
              FRONTEND DEVELOPER
            </h2>
            <Scrollspy
              className="my-8 space-y-2 font-medium text-neutral-900 dark:text-neutral-200"
              items={['about', 'web-apps', 'websites']}
              currentClassName="text-indigo-600 dark:text-indigo-500"
              offset={-100}
            >
              <li>
                <a
                  href="#about"
                  className="flex items-center rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >
                  <About
                    className="h-6 w-6 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{t('about')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#web-apps"
                  className="flex items-center rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >
                  <Webapp
                    className="h-6 w-6 flex-shrink-0 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3 flex-1 whitespace-nowrap">{t('webapps')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#websites"
                  className="flex items-center rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >
                  <Website
                    className="ml-0.5 h-5 w-5 flex-shrink-0 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3.5 flex-1 whitespace-nowrap">{t('websites')}</span>
                </a>
              </li>
            </Scrollspy>
            <div className="space-y-4 border-t border-neutral-200 pt-4 font-medium dark:border-neutral-700">
              <div className="mx-auto flex w-36 items-center justify-evenly">
                <Sun className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked={darkMode}
                    onClick={() => toggleMode()}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:border-neutral-600 dark:bg-neutral-700 dark:peer-focus:ring-indigo-800"></div>
                </label>
                <Moon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              </div>

              <div className="mx-auto flex w-36 items-center justify-evenly">
                <Pol className="h-8 w-8" />
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked={i18n.language === 'en'}
                    onClick={() => toggleLanguage()}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:border-neutral-600 dark:bg-neutral-700 dark:peer-focus:ring-indigo-800"></div>
                </label>
                <Eng className="h-8 w-8" />
              </div>
            </div>
            <div className="mx-auto mt-auto">
              <p className="text-xs">&copy; 2023 ŁUKASZ ŚLIWIŃSKI</p>
            </div>
          </div>
        </aside>
      </XyzTransition>
    </>
  );
}
