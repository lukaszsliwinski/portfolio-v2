// packages
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// language config
import i18n from '../config/lang.config';

// icons
import { ReactComponent as Home } from '../assets/svg/home.svg';
import { ReactComponent as Pol } from '../assets/svg/pol.svg';
import { ReactComponent as Eng } from '../assets/svg/eng.svg';

// components
import Scrollspy from 'react-scrollspy';
import { useEffect } from 'react';

export default function Nav() {
  const [windowTop, setWindowTop] = useState(window.scrollY === 0);

  // useTranslation fn
  const { t } = useTranslation();

  // handle window top
  useEffect(() => {
    const handleScroll = () => (window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false));
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowTop]);

  // toggle language
  const toggleLanguage = () => {
    i18n.language === 'en' ? i18n.changeLanguage('pl') : i18n.changeLanguage('en');
    localStorage.setItem('lang', i18n.language);
  };
  return (
    <nav
      className={`
        2xs:justify-between xs:h-12 bg-main-dark fixed z-40 flex h-10 w-screen items-center justify-center transition-all
        ${windowTop ? 'sm:h-16' : 'sm:opacity-90'}
      `}
      aria-label="Sidebar"
    >
      <a href="#home" className="2xs:inline-block mx-2 hidden text-neutral-200 sm:mx-4">
        <Home className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
      </a>
      <div className="xs:py-2 2xs:text-sm xs:text-base flex items-center py-1 text-xs sm:text-lg">
        <Scrollspy
          className="xs:mx-2 flex space-x-2 font-medium text-neutral-200 sm:mx-4 sm:space-x-4 md:mx-8 md:space-x-8"
          items={['home', 'about', 'technologies', 'projects']}
          currentClassName="text-main-light"
          offset={-250}
        >
          <li>
            <a href="#home"></a>
          </li>
          <li>
            <a href="#about">{t('about')}</a>
          </li>
          <li>
            <a href="#technologies">{t('technologies')}</a>
          </li>
          <li>
            <a href="#projects">{t('projects')}</a>
          </li>
        </Scrollspy>
        <div className="xs:border-l 2xs:px-1 xs:px-2 flex items-center justify-evenly border-neutral-600 px-0.5 sm:w-32 md:w-36 md:px-4">
          <Eng className="hidden h-6 w-6 sm:inline-block" />
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              defaultChecked={i18n.language === 'pl'}
              onClick={() => toggleLanguage()}
            />
            <div className="2xs:scale-[.8] xs:scale-[.9] peer-checked:bg-main-light peer h-5 w-9 scale-[.7] rounded-full bg-neutral-600 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-neutral-200 sm:scale-100"></div>
          </label>
          <Pol className="hidden h-6 w-6 sm:inline-block" />
        </div>
      </div>
    </nav>
  );
}
