// packages
import { useTranslation } from 'react-i18next';
import 'flowbite';

// technologies icons
import { ReactComponent as TypeScript } from './assets/svg/typescript.svg';
import { ReactComponent as React } from './assets/svg/react.svg';
import { ReactComponent as Redux } from './assets/svg/redux.svg';
import { ReactComponent as Tailwind } from './assets/svg/tailwind.svg';
import flowbitePng from './assets/img/flowbite.png';
import { ReactComponent as Node } from './assets/svg/node.svg';
import { ReactComponent as Mongo } from './assets/svg/mongo.svg';

// project screens
import bookStoreScreen from './assets/img/book-store-screen.png';
import weatherAppScreen from './assets/img/weather-app-screen.png';
import metronomeScreen from './assets/img/metronome-screen.png';
import defaultScreen from './assets/img/default-screen.png';

// components
import Nav from './layouts/Nav';
import About from './layouts/About';
import ProjectCard from './components/ProjectCard';

export default function Website() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-gray-900 dark:text-white">
      <Nav />
      <div className="px-4 sm:ml-64">
        <About />
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
