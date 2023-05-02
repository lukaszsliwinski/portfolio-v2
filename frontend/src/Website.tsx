import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'flowbite';

import i18n from './config/lang.config';

import { ReactComponent as Menu } from './assets/svg/menu.svg';
import { ReactComponent as LinkedIn } from './assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from './assets/svg/github.svg';
import { ReactComponent as About } from './assets/svg/about.svg';
import { ReactComponent as Projects } from './assets/svg/projects.svg';
import { ReactComponent as Sun } from './assets/svg/sun.svg';
import { ReactComponent as Moon } from './assets/svg/moon.svg';
import { ReactComponent as Pol } from './assets/svg/pol.svg';
import { ReactComponent as Eng } from './assets/svg/eng.svg';

import { ReactComponent as JavaScript } from './assets/svg/javascript.svg';
import { ReactComponent as TypeScript } from './assets/svg/typescript.svg';
import { ReactComponent as React } from './assets/svg/react.svg';
import { ReactComponent as Tailwind } from './assets/svg/tailwind.svg';
import { ReactComponent as Bootstrap } from './assets/svg/bootstrap.svg';
import { ReactComponent as JQuery } from './assets/svg/jquery.svg';
import { ReactComponent as Node } from './assets/svg/node.svg';
import { ReactComponent as Mongo } from './assets/svg/mongo.svg';
import { ReactComponent as MySql } from './assets/svg/mysql.svg';
import { ReactComponent as Git } from './assets/svg/git.svg';

import Badge from './components/Badge';

export default function Website() {
  // local state
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
    <div className="h-screen w-screen bg-white dark:bg-gray-900">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Open sidebar</span>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          {/* temporary empty space */}
          <div className="h-96"></div>

          <div className="mx-auto my-6 flex w-36 justify-evenly">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <LinkedIn className="h-8 w-8" aria-hidden="true" />
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <GitHub className="h-8 w-8" aria-hidden="true" />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
          <ul className="mx-auto w-36 space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <About
                  className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                />
                <span className="ml-3">{t('about')}</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <Projects
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                />
                <span className="ml-3 flex-1 whitespace-nowrap">{t('projects')}</span>
              </a>
            </li>
          </ul>
          <div className="mt-4 space-y-4 border-t border-gray-200 pt-4 font-medium dark:border-gray-700">
            <div className="mx-auto flex w-36 items-center justify-evenly">
              <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  defaultChecked={darkMode}
                  onClick={() => toggleMode()}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              </label>
              <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
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
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              </label>
              <Eng className="h-8 w-8" />
            </div>
          </div>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        {/* <h1 className="text-gray-900 dark:text-white">Łukasz Śliwiński - portfolio</h1> */}
        <section className='max-w-[70rem] mx-auto h-full min-h-fit px-20'>
          <header className="flex flex-col items-center w-full mb-12">
            <h2 className="text-5xl font-normal dark:text-white">{t('about')}</h2>
            <div className="w-10 h-1 mt-4 rounded bg-yellow-800"></div>
          </header>
          <div className='grid grid-cols-2 gap-16'>
            <div>
              <h3 className='text-lg mb-1 font-medium'>{t('about')}</h3>
              <article className='text-justify'>
                Jestem programistą aplikacji internetowych specjalizującym się we frontendzie.
                W trakcie samodzielnej nauki poznałem takie technologie jak JavaScript, React, Bootstrap i Node.js.
                W ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy tworzenia frontend-u i backend-u aplikacji,
                sposoby komunikacji między nimi, bazy danych, tworzenie szablonów responsywnych i system kontroli wersji.
                Obecnie doskonalę swoje umiejętności pracując jako Junior Frontend Developer i uczę się nowych technologii po godzinach.
                Jestem programistą aplikacji internetowych specjalizującym się we frontendzie.
                W trakcie samodzielnej nauki poznałem takie technologie jak JavaScript, React, Bootstrap i Node.js.
                W ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy tworzenia frontend-u i backend-u aplikacji,
                sposoby komunikacji między nimi, bazy danych, tworzenie szablonów responsywnych i system kontroli wersji.
                Obecnie doskonalę swoje umiejętności pracując jako Junior Frontend Developer i uczę się nowych technologii po godzinach.
              </article>
            </div>
            <div className='mb-2'>
              <h3 className='text-lg mb-1 font-medium'>Frontend technologies</h3>
              <div className='flex flex-wrap mb-3'>
                <Badge icon={<JavaScript className="w-6 h-6" />} label={'JavaScript'} />
                <Badge icon={<TypeScript className="w-6 h-6" />} label={'TypeScript'} />
                <Badge icon={<React className="w-6 h-6" />} label={'React.js'} />
                <Badge icon={<Tailwind className="w-6 h-6" />} label={'Tailwindcss'} />
                <Badge icon={<Bootstrap className="w-6 h-6" />} label={'Bootstrap'} />
                <Badge icon={<JQuery className="w-6 h-6" />} label={'jQuery'} />
              </div>
              <h3 className='text-lg mb-1 font-medium'>Other technologies</h3>
              <div className='flex flex-wrap mb-3'>
                <Badge icon={<Node className="w-6 h-6" />} label={'Node.js'} />
                <Badge icon={<Mongo className="w-6 h-6" />} label={'MongoDB'} />
                <Badge icon={<MySql className="w-6 h-6" />} label={'MySQL'} />
                <Badge icon={<Git className="w-6 h-6" />} label={'Git'} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/*
techonologies:

frontend:
JavaScript
TypeScript
React
Tailwindcss
Bootstrap
JQuery

other:
Node
MongoDB
MySQL
Git


*/
