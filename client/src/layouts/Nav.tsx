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
      className='fixed z-40 flex justify-between items-center w-screen h-14 transition-transform bg-main-dark'
      aria-label="Sidebar"
    >
      <a href="#home" className="mx-4 text-neutral-200"><Home className="h-7 w-7" ria-hidden="true" /></a>
      <div className="flex items-center py-2 text-lg">
        <Scrollspy
          className="flex space-x-8 mx-8 font-medium text-neutral-200"
          items={['home', 'about', 'technologies', 'projects']}
          currentClassName="text-main-light"
          offset={-250}
        >
          <li><a href="#home"></a></li>
          <li className="hover:underline underline-offset-4"><a href="#about">{t('about')}</a></li>
          <li className="hover:underline underline-offset-4"><a href="#technologies">{t('technologies')}</a></li>
          <li className="hover:underline underline-offset-4"><a href="#projects">{t('projects')}</a></li>
        </Scrollspy>
        <div className="border-l border-neutral-600 flex w-36 px-4 items-center justify-evenly">
          <Eng className="h-6 w-6" />
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              defaultChecked={i18n.language === 'pl'}
              onClick={() => toggleLanguage()}
            />
            <div className="peer h-5 w-9 rounded-full bg-neutral-600 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-main-light peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-neutral-200"></div>
          </label>
          <Pol className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
}
