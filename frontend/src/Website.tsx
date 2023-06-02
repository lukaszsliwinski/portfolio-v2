// packages
import { useTranslation } from 'react-i18next';
import 'flowbite';

// technologies icons
import { ReactComponent as JavaScript } from './assets/svg/javascript.svg';
import { ReactComponent as TypeScript } from './assets/svg/typescript.svg';
import { ReactComponent as React } from './assets/svg/react.svg';
import { ReactComponent as Redux } from './assets/svg/redux.svg';
import { ReactComponent as Tailwind } from './assets/svg/tailwind.svg';
import flowbitePng from './assets/img/flowbite.png';
import { ReactComponent as Bootstrap } from './assets/svg/bootstrap.svg';
import { ReactComponent as JQuery } from './assets/svg/jquery.svg';
import { ReactComponent as Node } from './assets/svg/node.svg';
import { ReactComponent as Mongo } from './assets/svg/mongo.svg';
import { ReactComponent as MySql } from './assets/svg/mysql.svg';
import { ReactComponent as Git } from './assets/svg/git.svg';

// icons
import { ReactComponent as LinkedIn } from './assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from './assets/svg/github.svg';

// profile photo
import profilePhoto from './assets/img/profile.jpg';

// project screens
import bookStoreScreen from './assets/img/book-store-screen.png';
import weatherAppScreen from './assets/img/weather-app-screen.png';
import metronomeScreen from './assets/img/metronome-screen.png';
import defaultScreen from './assets/img/default-screen.png';

// components
import Nav from './layouts/Nav';
import Badge from './components/Badge';
import ProjectCard from './components/ProjectCard';

export default function Website() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-gray-900 dark:text-white">
      <Nav />
      <div className="px-4 sm:ml-64">
        {/* <h1 className="text-gray-900 dark:text-white">Łukasz Śliwiński - portfolio</h1> */}

        <section className="max-w-[70rem] mx-auto h-full min-h-screen px-20" id="about">
          <header className="flex flex-col items-center w-full mb-12">
            <h2 className="text-5xl font-normal dark:text-white">{t('about')}</h2>
            <div className="w-10 h-1 mt-4 rounded bg-yellow-800"></div>
          </header>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg mb-1 font-medium">{t('about')}</h3>
              <article className="text-justify">
                <img className="w-28 float-left rounded mr-2 mt-2 shadow-sm" src={profilePhoto} alt="profile photo"/>
                Jestem programistą aplikacji internetowych specjalizującym się we frontendzie.
                W trakcie samodzielnej nauki poznałem takie technologie jak JavaScript, React, Bootstrap i Node.js.
                W ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy tworzenia frontend-u i backend-u aplikacji,
                sposoby komunikacji między nimi, bazy danych, tworzenie szablonów responsywnych i system kontroli wersji.
                Obecnie doskonalę swoje umiejętności pracując jako Junior Frontend Developer i uczę się nowych technologii po godzinach.

                Napisać kilka słów nt używanych technologii oraz wykonanych projektów
              </article>
              <div className="flex justify-evenly w-72 mx-auto my-6">
                <a href="https://www.linkedin.com/in/lsliwinski/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                  LinkedIn
                  <LinkedIn className="h-4 w-4 ml-2" aria-hidden="true" />
                </a>
                <a href="https://github.com/lukaszsliwinski/" target="_blank" rel="noopener noreferrer"  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                  GitHub
                  <GitHub className="h-4 w-4 ml-2" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="text-lg mb-1 font-medium">Frontend technologies</h3>
              <div className="flex flex-wrap mb-3">
                <Badge icon={<TypeScript className="w-6 h-6" />} label={'TypeScript'} />
                <Badge icon={<JavaScript className="w-6 h-6" />} label={'JavaScript'} />
                <Badge icon={<React className="w-6 h-6" />} label={'React.js'} />
                <Badge icon={<Redux className="w-6 h-6" />} label={'Redux'} />
                <Badge icon={<Tailwind className="w-6 h-6" />} label={'Tailwindcss'} />
                <Badge icon={<img src={flowbitePng} className="w-6 h-6" />} label={'Flowbite'} />
                <Badge icon={<Bootstrap className="w-6 h-6" />} label={'Bootstrap'} />
                <Badge icon={<JQuery className="w-6 h-6" />} label={'jQuery'} />
              </div>
              <h3 className="text-lg mb-1 font-medium">Other technologies</h3>
              <div className="flex flex-wrap mb-3">
                <Badge icon={<Node className="w-6 h-6" />} label={'Node.js'} />
                <Badge icon={<Mongo className="w-6 h-6" />} label={'MongoDB'} />
                <Badge icon={<MySql className="w-6 h-6" />} label={'MySQL'} />
                <Badge icon={<Git className="w-6 h-6" />} label={'Git'} />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[70rem] mx-auto h-full min-h-screen px-20" id="projects">
          <header className="flex flex-col items-center w-full mb-12">
            <h2 className="text-5xl font-normal dark:text-white">{t('projects')}</h2>
            <div className="w-10 h-1 mt-4 rounded bg-yellow-800"></div>
          </header>
          <div className="flex flex-wrap justify-evenly gap-4 mx-auto">

            {/* Book store project card */}
            <ProjectCard
              screenSrc={bookStoreScreen}
              title={'Book Store'}
              description={'Description: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/book-store-v2/'}
              showLink={true}
              linkUrl={'https://bookstore.lukaszsliwinski.pl/'}
            >
              <TypeScript className="w-5 h-5" />
              <React className="w-5 h-5" />
              <Redux className="w-5 h-5" />
              <Tailwind className="w-5 h-5" />
              <Node className="w-5 h-5" />
              <Mongo className="w-5 h-5" />
            </ProjectCard>

            {/* Weather app project card */}
            <ProjectCard
              screenSrc={weatherAppScreen}
              title={'Weather App'}
              description={'Description: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/weather-app-v2/'}
              showLink={true}
              linkUrl={'https://weatherapp.lukaszsliwinski.pl/'}
            >
              <TypeScript className="w-5 h-5" />
              <React className="w-5 h-5" />
              <Tailwind className="w-5 h-5" />
              <img src={flowbitePng} className="w-5 h-5" />
              <Node className="w-5 h-5" />
            </ProjectCard>

            {/* Metronome project card */}
            <ProjectCard
              screenSrc={metronomeScreen}
              title={'Metronome'}
              description={'Description: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/metronome-v2/'}
              showLink={true}
              linkUrl={'https://metronome.lukaszsliwinski.pl'}
            >
              <TypeScript className="w-5 h-5" />
              <React className="w-5 h-5" />
              <Redux className="w-5 h-5" />
              <Tailwind className="w-5 h-5" />
              <img src={flowbitePng} className="w-5 h-5" />
              <Node className="w-5 h-5" />
            </ProjectCard>

            {/* Portfolio project card */}
            <ProjectCard
              screenSrc={defaultScreen}
              title={'Protfolio website'}
              description={'About project: this website'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/portfolio-v2/'}
              showLink={false}
              linkUrl={'#'}
            >
              <TypeScript className="w-5 h-5" />
              <React className="w-5 h-5" />
              <Tailwind className="w-5 h-5" />
              <img src={flowbitePng} className="w-5 h-5" />
              <Node className="w-5 h-5" />
            </ProjectCard>

          </div>
        </section>

      </div>
    </div>
  );
}
