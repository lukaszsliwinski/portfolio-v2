import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: 'Portfolio website',
        about: 'About me',
        projects: 'My projects'
      }
    },
    pl: {
      translation: {
        title: 'Strona portfolio',
        about: 'O mnie',
        projects: 'Projekty'
      }
    }
  },
  lng: localStorage.getItem('lang') === 'pl' ? 'pl' : 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
