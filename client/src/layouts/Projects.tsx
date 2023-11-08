// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import typeScript from '../assets/icons/typescript.png';
import javaScript from '../assets/icons/javascript.png';
import react from '../assets/icons/react.png';
import redux from '../assets/icons/redux.png';
import tailwind from '../assets/icons/tailwind.png';
import flowbite from '../assets/icons/flowbite.png';
import testingLibrary from '../assets/icons/testing-library.png';
import node from '../assets/icons/node.png';
import mongo from '../assets/icons/mongo.png';

// project screens
import bookStoreScreen from '../assets/img/book-store-screen.png';
import weatherAppScreen from '../assets/img/weather-app-screen.png';
import metronomeScreen from '../assets/img/metronome-screen.png';
import ksmbScreen from '../assets/img/ksmb-screen.png';

// components
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';

export default function Projects() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="xs:px-6 flex h-full min-h-screen flex-col items-center justify-center px-2"
      id="projects"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="my-20 flex w-full flex-col items-center">
          <h2 className="text-3xl font-medium">{t('projects')}</h2>
          <div className="bg-main-light mt-2 h-0.5 w-6 rounded"></div>
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
            description={t('bookstore')}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/book-store-v2/'}
            showLink={true}
            linkUrl={'https://bookstore.lukaszsliwinski.pl/'}
          >
            <TechIcon project="BookStore" tech="TypeScript" icon={typeScript} />
            <TechIcon project="BookStore" tech="React.js" icon={react} />
            <TechIcon project="BookStore" tech="Redux" icon={redux} />
            <TechIcon project="BookStore" tech="Tailwindcss" icon={tailwind} />
            <TechIcon project="BookStore" tech="Testing Library" icon={testingLibrary} />
            <TechIcon project="BookStore" tech="Node.js" icon={node} />
            <TechIcon project="BookStore" tech="MongoDB" icon={mongo} />
          </ProjectCard>
        </div>

        {/* Weather app project card */}
        <div>
          <ProjectCard
            screenSrc={weatherAppScreen}
            title={'Weather App'}
            description={t('weatherapp')}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/weather-app-v2/'}
            showLink={true}
            linkUrl={'https://weatherapp.lukaszsliwinski.pl/'}
          >
            <TechIcon project="WeatherApp" tech="TypeScript" icon={typeScript} />
            <TechIcon project="WeatherApp" tech="React.js" icon={react} />
            <TechIcon project="WeatherApp" tech="Tailwindcss" icon={tailwind} />
            <TechIcon project="WeatherApp" tech="Flowbite" icon={flowbite} />
            <TechIcon project="WeatherApp" tech="Testing Library" icon={testingLibrary} />
            <TechIcon project="WeatherApp" tech="Node.js" icon={node} />
          </ProjectCard>
        </div>

        {/* Metronome project card */}
        <div>
          <ProjectCard
            screenSrc={metronomeScreen}
            title={'Metronome'}
            description={t('metronome')}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/metronome-v2/'}
            showLink={true}
            linkUrl={'https://metronome.lukaszsliwinski.pl'}
          >
            <TechIcon project="Metronome" tech="TypeScript" icon={typeScript} />
            <TechIcon project="Metronome" tech="React.js" icon={react} />
            <TechIcon project="Metronome" tech="Redux" icon={redux} />
            <TechIcon project="Metronome" tech="Tailwindcss" icon={tailwind} />
            <TechIcon project="Metronome" tech="Flowbite" icon={flowbite} />
            <TechIcon project="Metronome" tech="Testing Library" icon={testingLibrary} />
            <TechIcon project="Metronome" tech="Node.js" icon={node} />
          </ProjectCard>
        </div>

        {/* KSMicroband project card */}
        <div>
          <ProjectCard
            screenSrc={ksmbScreen}
            title={'KSMicroband website'}
            description={t('ksmicroband')}
            showSource={false}
            sourceUrl={'#'}
            showLink={true}
            linkUrl={'https://ksmicroband.pl'}
          >
            <TechIcon project="KSMicroband" tech="JavaScript" icon={javaScript} />
            <TechIcon project="KSMicroband" tech="React.js" icon={react} />
            <TechIcon project="KSMicroband" tech="Tailwindcss" icon={tailwind} />
            <TechIcon project="KSMicroband" tech="Node.js" icon={node} />
          </ProjectCard>
        </div>
      </XyzTransitionGroup>
    </section>
  );
}
