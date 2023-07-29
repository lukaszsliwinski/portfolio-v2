// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import { ReactComponent as TypeScript } from '../assets/svg/typescript.svg';
import { ReactComponent as JavaScript } from '../assets/svg/javascript.svg';
import { ReactComponent as React } from '../assets/svg/react.svg';
import { ReactComponent as Tailwind } from '../assets/svg/tailwind.svg';
import flowbitePng from '../assets/img/flowbite.png';
import { ReactComponent as Node } from '../assets/svg/node.svg';

// project screens
import ksmbScreen from '../assets/img/ksmb-screen.png';
import portfolioScreen from '../assets/img/portfolio-screen.png';

// components
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';

export default function Websites() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="xs:px-12 mx-auto h-full min-h-screen max-w-6xl px-2 py-[8vh] xl:px-20"
      id="websites"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="mb-12 flex w-full flex-col items-center">
          <h2 className="text-2xl font-medium dark:text-neutral-200">{t('websites')}</h2>
          <div className="mt-2 h-0.5 w-6 rounded bg-indigo-600"></div>
        </header>
      </XyzTransition>
      <XyzTransitionGroup
        className="mx-auto grid gap-10 xl:grid-cols-2"
        xyz="fade small appear-stagger duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
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
            <TechIcon project="KSMicroband" tech="JavaScript">
              <JavaScript className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="KSMicroband" tech="React.js">
              <React className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="KSMicroband" tech="Tailwindcss">
              <Tailwind className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="KSMicroband" tech="Node.js">
              <Node className="h-5 w-5" />
            </TechIcon>
          </ProjectCard>
        </div>

        {/* Portfolio project card */}
        <div>
          <ProjectCard
            screenSrc={portfolioScreen}
            title={'Portfolio website'}
            description={t('portfolio')}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/portfolio-v2/'}
            showLink={false}
            linkUrl={'#'}
          >
            <TechIcon project="Portfolio" tech="TypeScript">
              <TypeScript className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="Portfolio" tech="React.js">
              <React className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="Portfolio" tech="Tailwindcss">
              <Tailwind className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="Portfolio" tech="Flowbte">
              <img src={flowbitePng} className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="Portfolio" tech="Node.js">
              <Node className="h-5 w-5" />
            </TechIcon>
          </ProjectCard>
        </div>
      </XyzTransitionGroup>
    </section>
  );
}
