import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: 'ABOUT',
        technologies: 'TECHNOLOGIES',
        front: 'FRONT-END',
        other: 'OTHER',
        projects: 'PROJECTS',
        bio: `Hi! I\xa0am a\xa0developer specializing in web applications, websites, and PWAs.
          In my current job, I\xa0work as a\xa0front\u2011end developer developing internal software for managing the departments of a\xa0railway company.
          After hours, I\xa0expand my knowledge and improve my skills by building my own applications and websites.
          I\xa0am also developing in machine and deep learning area, integrating these technologies with web development.`,
        bio2: `Below I\xa0present some of my side\u2011projects, created as a\xa0part of my learning process using modern front\u2011end technologies such as TypeScript, Angular, React.js and Tailwind\xa0CSS.
          All applications are hosted on a\xa0server configured by me. I\xa0use Node.js as the back\u2011end and MongoDB as the database.
          In deep learning projects, I work with Python and PyTorch to build models and use Flask for the back\u2011end.
          I\xa0develop applications following responsive web design pattern to display correctly on mobile devices.`,
        digit: {
          description: `Complete convolutional neural network powered application for recognizing handwritten digits in real-time. It's a\xa0showcase of skills in: designing and training simple neural model, building full-stack production-ready application hosted on a\xa0server and connecting AI\xa0technologies with web applications. You can install it on your phone (Progresive Web Application).`,
          features: [
            'recognise handwritten numbers in the browser',
            'recognise uploaded handwritten numbers (black number on white background!)'
          ]
        },
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
        music: {
          description: `Personal music website of my solo project. It's a\xa0lightweight, SSR application written in Next.js.`,
          features: ['server side rendering', 'integration with SoundCloud API']
        },
        ksmicroband: {
          description: `Website of my last musical duo with custom music player.`,
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
        front: `FRONT-END`,
        other: 'POZOSTAŁE',
        projects: 'PROJEKTY',
        bio: `Cześć! Jestem programistą aplikacji internetowych, stron WWW oraz aplikacji PWA.
          Pracuję jako front\u2011end developer przy rozwoju wewnętrznego systemu do zarządzania działami firmy kolejowej.
          Po godzinach szlifuję umiejętności poprzez tworzenie własnych aplikacji i\xa0stron internetowych.
          Dodatkowo rozwijam się w\xa0obszarze uczenia maszynowego i\xa0głębokiego oraz\xa0łączę nabytą wiedzę z\xa0web developmentem.`,
        bio2: `Poniżej przedstawiam kilka swoich projektów wykonanych w\xa0nowoczesnych technologiach front\u2011end'owych takich jak TypeScript, React.js, Next.js, Angular, czy Tailwindcss.
          Wszystkie aplikacje są umieszczone na własnym, skonfigutowanym przeze mnie serwerze. Wykorzystuję środowisko Node.js jako back\u2011end oraz MongoDB jako bazę danych.
          Projekty z obszaru deep learning tworzę z wykorzystaniem Python i PyTorch do tworzenia modeli oraz Flask jako back\u2011end.
          Aplikacje tworzę z\xa0zachowaniem zasad responsive web design, aby poprawnie wyświetlały się również na urządzeniach mobilnych.`,
        digit: {
          description: `Aplikacja oparta na konwolucyjnej sieci neuronowej do rozpoznawania odręcznych cyfr w\xa0czasie rzeczywistym. Przedstawia umiejętności w\xa0zakresie: projektowania i\xa0szkolenia prostego modelu neuronowego, budowania pełnej produkcyjnej aplikacji hostowanej na serwerze oraz łączenia technologii AI z\xa0aplikacjami internetowymi. Można ją zainstalować na telefonie (Progresive Web Application).`,
          features: [
            'rozpoznawanie odręcznych cyfer pisanych w\xa0przeglądarce',
            'rozpoznawanie odręcznych cyfer wgranych z\xa0pliku (czarna cyfra na białym tle!)'
          ]
        },
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
        music: {
          description: `Strona opisująca moją solową działalność muzyczną. Jest to lekka aplikacja napisana w\xa0Next.js wykorzystująca technologię SSR.`,
          features: ['renderowanie po stronie serwera', 'integracja z\xa0SoundCloud API']
        },
        ksmicroband: {
          description: `Strona mojego ostatniego duetu muzycznego z\xa0zaprogramowanym własnym odtwarzaczem.`,
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
