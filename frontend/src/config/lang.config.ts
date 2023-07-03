import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: 'About me',
        projects: 'Projects',
        webapps: 'Web applications',
        websites: 'Websites'
      }
    },
    pl: {
      translation: {
        about: 'O mnie',
        projects: 'Projekty',
        webapps: 'Aplikacje internetowe',
        websites: 'Strony internetowe'
      }
    }
  },
  lng: localStorage.getItem('lang') === 'pl' ? 'pl' : 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
