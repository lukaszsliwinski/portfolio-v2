import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: 'About me',
        projects: 'Projects',
        webapps: 'Web apps',
        websites: 'Websites',
        mobileapps: 'Mobile apps',
        stack: 'Front-end stack',
        other: 'Other',
        bio: `Hi! I am a\xa0web developer. In my current job, I\xa0create the front-end of a\xa0system for managing the departments of a\xa0railway company.
          After hours, I\xa0expand my knowledge and skills by developing my own applications and websites.
          I\xa0use technologies such as TypeScript, React.js, Tailwindcss on the front-end and Node.js on the backend.
          Below I\xa0present some of my projects with source codes and links to the apps.
          I\xa0started learning how to test applications using the React Testing Library, and I\xa0am also learning of mobile app development using React Native.`,
        bookstore: `The application is a\xa0simulation of an online book store.
          You can create an account, find a\xa0book, add books to cart and make fictitious order.
          In your profile page you can change password and see the history of your orders.`,
        weatherapp: `Application for checking actual weather in choosen city.
          Write a\xa0city name above, to check weather conditions and forecast for next hours and days.`,
        metronome: `The application is a\xa0simulation of a\xa0usical metronome.
          You can set different meters and tempos and change them while playing the metronome.`,
        ksmicroband: 'Website of my musical project.',
        portfolio: 'Portfolio website.',
        metronomemobile: 'This is my first mobile app that I\xa0made to learn the basics of mobile development and React Native. This app is a\xa0mobile version of my metronome web app.'
      }
    },
    pl: {
      translation: {
        about: 'O mnie',
        projects: 'Projekty',
        webapps: 'Aplikacje internetowe',
        websites: 'Strony internetowe',
        mobileapps: 'Aplikacje mobilne',
        stack: `Technologie front-end'owe`,
        other: 'Pozostałe',
        bio: `Cześć! Jestem programistą aplikacji web'owych. W\xa0swojej pracy tworzę front-end wewnętrznego systemu do zarządzania działami firmy kolejowej.
          Po godzinach poszerzam wiedzę oraz szlifuję umiejętności poprzez rozwijanie własnych aplikacji i\xa0stron internetowych.
          Wykorzystuję takie technologie jak m.in. TypeScript, React.js, Tailwindcss po stronie front-end-u oraz Node.js po stronie backend-u.
          Poniżej przedstawiam kilka swoich wykonanych projektów wraz z\xa0kodami źródłowymi oraz linkami do aplikacji.
          Oprócz tworzenia programów rozpocząłem naukę testowania aplikacji z\xa0wykorzystaniem React Testing Library, a\xa0także uczę się tworzyć aplikacje mobilne przy pomocy React Native.`,
        bookstore: `Aplikacja jest symulacją internetowego sklepu z\xa0książkami.
          Można utworzyć konto, wyszukać książki, dodać do koszyka i\xa0złożyć fikcyjne zamówienie.
          Profil klienta pozwala zmienić hasło oraz przejrzeć historię zamówień.`,
        weatherapp: `Aplikacja do sprawdzania pogody w\xa0wybranym mieście.
          Po wpisaniu miasta dostajemy aktualne warunki pogodowe oraz prognozę na najbliższe godziny i\xa0dni.`,
        metronome: `Aplikacja symulująca działanie metronomu.
          Pozwala na ustawienie metrum oraz tempa, a\xa0także na zmianę parametrów w\xa0trakcie grania`,
        ksmicroband: 'Strona mojego projektu muzycznego.',
        portfolio: 'Strona portfolio.',
        metronomemobile: 'Moja pierwsza aplikacja wykonana podczas nauki podstaw programowania mobilnego oraz React Native. Jest to mobilna wersja mojej aplikacji internetowej.'
      }
    }
  },
  lng: localStorage.getItem('lang') === 'pl' ? 'pl' : 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
