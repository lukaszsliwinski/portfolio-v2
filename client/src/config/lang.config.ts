import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: 'ABOUT',
        technologies: 'TECHNOLOGIES',
        stack: 'FRONT-END STACK',
        other: 'OTHER',
        projects: 'PROJECTS',
        bio: `Hi! I\xa0am a\xa0web applications, websites and PWA developer.
          In my current job, I\xa0am a\xa0front\u2011end developer working on an internal software for managing the departments of a\xa0railway company.
          After hours, I\xa0expand my knowledge and improve my skills by developing my own applications and websites.`,
        bio2: `Below I\xa0present some of my side\u2011projects developed as part of learning programming using modern front\u2011end technologies such as TypeScript, Angular, React.js and Tailwindcss.
          All applications are hosted on my own server, configured by me. I\xa0use Node.js as the back\u2011end and MongoDB as the database.
          I\xa0develop apps using responsive web design pattern to display correctly on mobile devices.`,
        radio: {
          description: `The application is an online radio player streaming audio from 3rd party API.`,
          features: [
            'search station and play',
            'create an account and log in',
            'add station to favourites (logged\xa0in users only)',
            'view the history of recently played stations (logged\xa0in users only)',
            'change password (logged\xa0in users only)'
          ]
        },
        vocabularyquiz: {
          description: `Language application that helps me learn english vocabulary after lessons. You can install it on your phone (Progresive Web Application).`,
          features: [
            'app get list of categories from database and render categories on main page',
            'after selecting a\xa0category, app get random 10 words or phrases from chosen category',
            'for each word, the user provides a\xa0translation and checks its correctness',
            'after the last answer, the result is given'
          ]
        },
        ksmicroband: {
          description: `Website of my musical project with custom music player.`,
          features: [
            'get audio files from server by own API',
            'play / stop / next / previous buttons',
            'autoplay next song',
            'stop player after last song'
          ]
        }
      }
    },
    pl: {
      translation: {
        about: 'O\xa0MNIE',
        technologies: 'TECHNOLOGIE',
        stack: `TECHNOLOGIE FRONT-END'OWE`,
        other: 'POZOSTAŁE',
        projects: 'PROJEKTY',
        bio: `Cześć! Jestem programistą aplikacji internetowych, stron internetowych oraz aplikacji PWA.
          Pracuję jako front\u2011end developer przy rozwoju wewnętrznego systemu do zarządzania działami firmy kolejowej.
          Po godzinach poszerzam wiedzę oraz szlifuję umiejętności poprzez rozwijanie własnych aplikacji i\xa0stron internetowych.`,
        bio2: `Poniżej przedstawiam kilka swoich projektów wykonanych w\xa0ramach nauki nowoczesnych technologii front\u2011end'owych takich jak TypeScript, Angular, React.js czy Tailwindcss.
          Wszystkie aplikacje są umieszczone na własnym, skonfigutowanym przeze mnie serwerze. Wykorzystuję środowisko Node.js jako back\u2011end oraz MongoDB jako bazę danych.
          Aplikacje tworzę z\xa0zachowaniem zasad responsive web design, aby poprawnie wyświetlały się również na urządzeniach mobilnych.`,
        radio: {
          description: `Internetowe radio pobierające strumień audio z\xa0zewnętrznego API.`,
          features: [
            'wyszukiwanie i\xa0włączenie stacji',
            'utworzenie konta i\xa0logowanie',
            'dodawanie stacji do ulubionych (tylko zalogowani użytkownicy)',
            'podgląd historii ostatnio odtwarzanych stacji (tylko zalogowani użytkownicy)',
            'zmiana hasła (tylko zalogowani użytkownicy)'
          ]
        },
        vocabularyquiz: {
          description: `Aplikacja językowa wspomagająca naukę słówek z\xa0lekcji angielskiego. Można ją zainstalować na telefonie (Progresive Web Application).`,
          features: [
            'pobranie listy kategorii i\xa0wyświetlenie ich na stronie głównej',
            'po wybraniu kategorii losowanych jest 10\xa0słówek lub fraz z\xa0wybranej kategorii',
            'do każdego słówka użytkownik podaje tłumaczenie i\xa0sprawdza poprawność',
            'po ostatnim słówku podana jest liczba poprawnych odpowiedzi'
          ]
        },
        ksmicroband: {
          description: `Strona mojego projektu muzycznego z\xa0zaprogramowanym własnym odtwarzaczem.`,
          features: [
            'pobranie plików muzycznych z\xa0serwera przez własne API',
            'przyciski play / stop / następny / poprzedni',
            'automatyczne rozpocznij kolejny utwór',
            'po ostatnim utworze zatrzymaj odtwarzanie'
          ]
        }
      }
    }
  },
  lng: localStorage.getItem('lang') === 'pl' ? 'pl' : 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
