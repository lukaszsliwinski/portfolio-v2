import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: 'About me',
        projects: 'Projects'
      }
    },
    pl: {
      translation: {
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
