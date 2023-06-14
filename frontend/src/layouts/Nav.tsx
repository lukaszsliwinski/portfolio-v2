// packages
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// language config
import i18n from '../config/lang.config';

// icons
import { ReactComponent as Menu } from '../assets/svg/menu.svg';
import { ReactComponent as About } from '../assets/svg/about.svg';
import { ReactComponent as Projects } from '../assets/svg/projects.svg';
import { ReactComponent as Sun } from '../assets/svg/sun.svg';
import { ReactComponent as Moon } from '../assets/svg/moon.svg';
import { ReactComponent as Pol } from '../assets/svg/pol.svg';
import { ReactComponent as Eng } from '../assets/svg/eng.svg';

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

      <aside
        id="separator-sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-neutral-100 p-4 dark:bg-neutral-800">
          <h1 className="text-2xl font-medium dark:text-neutral-200">ŁUKASZ ŚLIWIŃSKI</h1>
          <h2 className="text-sm tracking-widest text-neutral-600 dark:text-neutral-300">FRONTEND DEVELOPER</h2>
          <ul className="my-8 space-y-2 font-medium">
            <li>
              <a
                href="#about"
                className="flex items-center rounded-lg p-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-700"
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
                href="#projects"
                className="flex items-center rounded-lg p-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                <Projects
                  className="h-6 w-6 flex-shrink-0 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                  aria-hidden="true"
                />
                <span className="ml-3 flex-1 whitespace-nowrap">{t('projects')}</span>
              </a>
            </li>
          </ul>
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
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:border-neutral-600 dark:bg-neutral-700 dark:peer-focus:ring-indigo-800"></div>
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
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:border-neutral-600 dark:bg-neutral-700 dark:peer-focus:ring-indigo-800"></div>
              </label>
              <Eng className="h-8 w-8" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}