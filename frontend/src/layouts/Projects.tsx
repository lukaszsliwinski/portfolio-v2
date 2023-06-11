// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import { ReactComponent as TypeScript } from '../assets/svg/typescript.svg';
import { ReactComponent as React } from '../assets/svg/react.svg';
import { ReactComponent as Redux } from '../assets/svg/redux.svg';
import { ReactComponent as Tailwind } from '../assets/svg/tailwind.svg';
import flowbitePng from '../assets/img/flowbite.png';
import { ReactComponent as Node } from '../assets/svg/node.svg';
import { ReactComponent as Mongo } from '../assets/svg/mongo.svg';

// project screens
import bookStoreScreen from '../assets/img/book-store-screen.png';
import weatherAppScreen from '../assets/img/weather-app-screen.png';
import metronomeScreen from '../assets/img/metronome-screen.png';
import defaultScreen from '../assets/img/default-screen.png';

// components
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';

export default function Projects() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section className="max-w-[70rem] mx-auto h-full min-h-screen px-2 xs:px-12 xl:px-20 py-[8vh]" id="projects">
      <header className="flex flex-col items-center w-full mb-12">
        <h2 className="text-2xl font-medium dark:text-neutral-200">{t('projects')}</h2>
        <div className="w-6 h-0.5 mt-2 rounded bg-indigo-600"></div>
      </header>
      <div className="grid xl:grid-cols-2 gap-10 mx-auto">

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
          <TechIcon project='BookStore' tech='TypeScript'><TypeScript className="w-5 h-5" /></TechIcon>
          <TechIcon project='BookStore' tech='React.js'><React className="w-5 h-5" /></TechIcon>
          <TechIcon project='BookStore' tech='Redux'><Redux className="w-5 h-5" /></TechIcon>
          <TechIcon project='BookStore' tech='Tailwindcss'><Tailwind className="w-5 h-5" /></TechIcon>
          <TechIcon project='BookStore' tech='Node.js'><Node className="w-5 h-5" /></TechIcon>
          <TechIcon project='BookStore' tech='MongoDB'><Mongo className="w-5 h-5" /></TechIcon>
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
          <TechIcon project='WeatherApp' tech='TypeScript'><TypeScript className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='React.js'><React className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Tailwindcss'><Tailwind className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Flowbite'><img src={flowbitePng} className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Node.js'><Node className="w-5 h-5" /></TechIcon>
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
          <TechIcon project='WeatherApp' tech='TypeScript'><TypeScript className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='React.js'><React className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Redux'><Redux className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Tailwindcss'><Tailwind className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Flowbite'><img src={flowbitePng} className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Node.js'><Node className="w-5 h-5" /></TechIcon>
        </ProjectCard>

        {/* Portfolio project card */}
        <ProjectCard
          screenSrc={defaultScreen}
          title={'Portfolio website'}
          description={'About project: this website'}
          showSource={true}
          sourceUrl={'https://github.com/lukaszsliwinski/portfolio-v2/'}
          showLink={false}
          linkUrl={'#'}
        >
          <TechIcon project='WeatherApp' tech='TypeScript'><TypeScript className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='React.js'><React className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Tailwindcss'><Tailwind className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Flowbte'><img src={flowbitePng} className="w-5 h-5" /></TechIcon>
          <TechIcon project='WeatherApp' tech='Node.js'><Node className="w-5 h-5" /></TechIcon>
        </ProjectCard>

      </div>
    </section>
  );
}