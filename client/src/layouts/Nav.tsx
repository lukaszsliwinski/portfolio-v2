// packages
import { useTranslation } from 'react-i18next';

// language config
import i18n from '../config/lang.config';

// icons
import { ReactComponent as Home } from '../assets/svg/home.svg';
import { ReactComponent as Pol } from '../assets/svg/pol.svg';
import { ReactComponent as Eng } from '../assets/svg/eng.svg';

// components
import Scrollspy from 'react-scrollspy';

export default function Nav() {
  // useTranslation fn
  const { t } = useTranslation();

  // toggle language
  const toggleLanguage = () => {
    i18n.language === 'en' ? i18n.changeLanguage('pl') : i18n.changeLanguage('en');
    localStorage.setItem('lang', i18n.language);
  };
  return (
    <nav
      className='fixed z-40 flex justify-center 2xs:justify-between items-center w-screen h-10 xs:h-12 sm:h-14 transition-transform bg-main-dark'
      aria-label="Sidebar"
    >
      <a href="#home" className="hidden 2xs:inline-block mx-2 sm:mx-4 text-neutral-200"><Home className="w-5 h-5 sm:h-7 sm:w-7" ria-hidden="true" /></a>
      <div className="flex items-center py-1 xs:py-2 text-xs 2xs:text-sm xs:text-base sm:text-lg">
        <Scrollspy
          className="flex space-x-2 sm:space-x-4 md:space-x-8 xs:mx-2 sm:mx-4 md:mx-8 font-medium text-neutral-200"
          items={['home', 'about', 'technologies', 'projects']}
          currentClassName="text-main-light"
          offset={-250}
        >
          <li><a href="#home"></a></li>
          <li className="hover:underline underline-offset-4"><a href="#about">{t('about')}</a></li>
          <li className="hover:underline underline-offset-4"><a href="#technologies">{t('technologies')}</a></li>
          <li className="hover:underline underline-offset-4"><a href="#projects">{t('projects')}</a></li>
        </Scrollspy>
        <div className="xs:border-l border-neutral-600 flex sm:w-32 md:w-36 px-0.5 2xs:px-1 xs:px-2 md:px-4 items-center justify-evenly">
          <Eng className="hidden sm:inline-block h-6 w-6" />
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              defaultChecked={i18n.language === 'pl'}
              onClick={() => toggleLanguage()}
            />
            <div className="scale-[.7] 2xs:scale-[.8] xs:scale-[.9] sm:scale-100 peer h-5 w-9 rounded-full bg-neutral-600 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-main-light peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-neutral-200"></div>
          </label>
          <Pol className="hidden sm:inline-block h-6 w-6" />
        </div>
      </div>
    </nav>
  );
}
