// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import { ReactComponent as TypeScript } from '../assets/svg/typescript.svg';
import { ReactComponent as React } from '../assets/svg/react.svg';
import { ReactComponent as Redux } from '../assets/svg/redux.svg';
import { ReactComponent as Tailwind } from '../assets/svg/tailwind.svg';
import flowbitePng from '../assets/img/flowbite.png';
import testingLibraryPng from '../assets/img/testing-library.png';
import { ReactComponent as Node } from '../assets/svg/node.svg';
import { ReactComponent as Mongo } from '../assets/svg/mongo.svg';

// project screens
import bookStoreScreen from '../assets/img/book-store-screen.png';
import weatherAppScreen from '../assets/img/weather-app-screen.png';
import metronomeScreen from '../assets/img/metronome-screen.png';
import defaultScreen from '../assets/img/default-screen.png';

// components
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';

export default function Projects() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="xs:px-12 mx-auto h-full min-h-screen max-w-6xl px-2 py-[8vh] xl:px-20"
      id="projects"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="mb-12 flex w-full flex-col items-center">
          <h2 className="text-2xl font-medium dark:text-neutral-200">{t('projects')}</h2>
          <div className="mt-2 h-0.5 w-6 rounded bg-indigo-600"></div>
        </header>
      </XyzTransition>
      <XyzTransitionGroup
        className="mx-auto grid gap-10 xl:grid-cols-2"
        xyz="fade small appear-stagger duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        {/* Book store project card */}
        <div>
          <ProjectCard
            screenSrc={bookStoreScreen}
            title={'Book Store'}
            description={
              'Description: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
            }
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/book-store-v2/'}
            showLink={true}
            linkUrl={'https://bookstore.lukaszsliwinski.pl/'}
          >
            <TechIcon project="BookStore" tech="TypeScript">
              <TypeScript className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="BookStore" tech="React.js">
              <React className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="BookStore" tech="Redux">
              <Redux className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="BookStore" tech="Tailwindcss">
              <Tailwind className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="BookStore" tech="Testing Library">
              <img src={testingLibraryPng} className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="BookStore" tech="Node.js">
              <Node className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="BookStore" tech="MongoDB">
              <Mongo className="h-5 w-5" />
            </TechIcon>
          </ProjectCard>
        </div>

        {/* Weather app project card */}
        <div>
          <ProjectCard
            screenSrc={weatherAppScreen}
            title={'Weather App'}
            description={
              'Description: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
            }
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/weather-app-v2/'}
            showLink={true}
            linkUrl={'https://weatherapp.lukaszsliwinski.pl/'}
          >
            <TechIcon project="WeatherApp" tech="TypeScript">
              <TypeScript className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="React.js">
              <React className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Tailwindcss">
              <Tailwind className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Flowbite">
              <img src={flowbitePng} className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Node.js">
              <Node className="h-5 w-5" />
            </TechIcon>
          </ProjectCard>
        </div>

        {/* Metronome project card */}
        <div>
          <ProjectCard
            screenSrc={metronomeScreen}
            title={'Metronome'}
            description={
              'Description: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
            }
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/metronome-v2/'}
            showLink={true}
            linkUrl={'https://metronome.lukaszsliwinski.pl'}
          >
            <TechIcon project="WeatherApp" tech="TypeScript">
              <TypeScript className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="React.js">
              <React className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Redux">
              <Redux className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Tailwindcss">
              <Tailwind className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Flowbite">
              <img src={flowbitePng} className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Node.js">
              <Node className="h-5 w-5" />
            </TechIcon>
          </ProjectCard>
        </div>

        {/* Portfolio project card */}
        <div>
          <ProjectCard
            screenSrc={defaultScreen}
            title={'Portfolio website'}
            description={'About project: this website'}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/portfolio-v2/'}
            showLink={false}
            linkUrl={'#'}
          >
            <TechIcon project="WeatherApp" tech="TypeScript">
              <TypeScript className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="React.js">
              <React className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Tailwindcss">
              <Tailwind className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Flowbte">
              <img src={flowbitePng} className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="WeatherApp" tech="Node.js">
              <Node className="h-5 w-5" />
            </TechIcon>
          </ProjectCard>
        </div>
      </XyzTransitionGroup>
    </section>
  );
}
