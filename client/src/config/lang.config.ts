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
        radio: `The application is an online radio player streaming audio from 3rd party API.\n\nFeatures for all users:
          -\xa0search station and play
          -\xa0create an account and log in
          \nFeatures only for logged in users:
          -\xa0add station to favourites
          -\xa0view the history of recently played stations
          -\xa0change password`,
        vocabularyquiz: `Language application that helps me learn english vocabulary after lessons.\n\nFeatures:
          -\xa0app get list of categories from database and render categories on main page
          -\xa0after selecting a\xa0category, app get random 10 words or phrases from chosen category
          -\xa0for each word, the user provides a\xa0translation and checks its correctness
          -\xa0after the last answer, the result is given`,
        bookstore: `The application is a\xa0simulation of an online book store.\n\nFeatures:
          -\xa0register and login module
          -\xa0searching\xa0a book form 3rd party API
          -\xa0adding books to cart and simulating an\xa0order
          -\xa0profile page
          -\xa0the history of orders stored in database`,
        metronome: `The application is a\xa0simulation of a\xa0usical metronome.\n\nFeatures:
          -\xa0set meter and tempo
          -\xa0update meter and tempo while playing the metronome
          -\xa0show tempo by glowing diode`,
        weatherapp: `Web application for checking actual weather in choosen city.\n\nFeatures:
          -\xa0current weather conditions in choosen city
          -\xa0forecast for next hours and days`,
        ksmicroband: `Website of my musical project with custom music player.\n\nPlayer features:
          -\xa0get audio files from server by own API
          -\xa0play / stop / next / previous buttons
          -\xa0autoplay next song
          -\xa0stop player after last song`
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
        radio: `Internetowe radio pobierające strumień audio z\xa0zewnętrznego API.\n\nFunkcje dla wszystkich:
          -\xa0wyszukiwanie i\xa0włączenie stacji
          -\xa0utworzenie konta i\xa0logowanie
          \nFunckje dla zalogowanych użytkowników:
          -\xa0dodawanie stacji do ulubionych
          -\xa0podgląd historii ostatnio odtwarzanych stacji
          -\xa0zmiana hasła`,
        vocabularyquiz: `Aplikacja językowa wspomagająca naukę słówek z\xa0lekcji angielskiego.\n\nFunkcje:
          -\xa0pobranie listy kategorii i\xa0wyświetlenie ich na stronie głównej
          -\xa0po wybraniu kategorii losowanych jest 10\xa0słówek lub fraz z\xa0wybranej kategorii
          -\xa0do każdego słówka użytkownik podaje tłumaczenie i\xa0sprawdza poprawność
          -\xa0po ostatnim słówku podana jest liczba poprawnych odpowiedzi`,
        bookstore: `Aplikacja symulująca działanie internetowego sklepu z\xa0książkami.\n\nFunkcje:
          -\xa0moduł rejestracji i\xa0logowania
          -\xa0wyszukiwanie książek z\xa0zewnętrznego API
          -\xa0dodawanie książek do koszyka i\xa0symulacja zamówienia
          -\xa0strona profilu użytkownika
          -\xa0historia zamówień użytkownika zapisywana do bazy danych`,
        metronome: `Aplikacja symulująca działanie metronomu muzycznego.\n\nFunkcje:
          -\xa0ustawienie metrum i\xa0tempa
          -\xa0aktualizacja metrum i\xa0tempa w trakcie działania metronomu
          -\xa0podawanie aktualnego tempa przez migającą diodę`,
        weatherapp: `Aplikacja sprawdzająca pogodę w\xa0wybranym mieście.\n\nFunkcje:
          -\xa0aktualne warunki pogodowe
          -\xa0prognoza na najbliższe godziny i\xa0dni`,
        ksmicroband: `Strona mojego projektu muzycznego z\xa0zaprogramowanym własnym odtwarzaczem.\n\nFunkcje odtwarzacza:
          -\xa0pobranie plików muzycznych z\xa0serwera przez własne API
          -\xa0przyciski play / stop / następny / poprzedni
          -\xa0automatyczne rozpocznij kolejny utwór
          -\xa0po ostatnim utworze zatrzymaj odtwarzanie`
      }
    }
  },
  lng: localStorage.getItem('lang') === 'pl' ? 'pl' : 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
