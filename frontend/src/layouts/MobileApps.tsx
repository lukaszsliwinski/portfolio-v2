// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import { ReactComponent as TypeScript } from '../assets/svg/typescript.svg';
import { ReactComponent as React } from '../assets/svg/react.svg';
import { ReactComponent as Redux } from '../assets/svg/redux.svg';

// project screens
import metronomeScreen from '../assets/img/metronome-screen.png';

// components
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';

export default function MobileApps() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="xs:px-12 mx-auto h-full min-h-screen max-w-6xl px-2 py-[8vh] xl:px-20"
      id="mobile-apps"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="mb-12 flex w-full flex-col items-center">
          <h2 className="text-2xl font-medium dark:text-neutral-200">{t('mobileapps')}</h2>
          <div className="mt-2 h-0.5 w-6 rounded bg-indigo-600"></div>
        </header>
      </XyzTransition>
      <XyzTransitionGroup
        className="mx-auto grid gap-10 xl:grid-cols-2"
        xyz="fade small appear-stagger duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        {/* Metronome mobile project card */}
        <div>
          <ProjectCard
            screenSrc={metronomeScreen}
            title={'Metronome Mobile'}
            description={t('metronomemobile')}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/metronome-mobile/'}
            showLink={false}
            linkUrl={'#'}
          >
            <TechIcon project="MetronomeMobile" tech="TypeScript">
              <TypeScript className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="MetronomeMobile" tech="React Native">
              <React className="h-5 w-5" />
            </TechIcon>
            <TechIcon project="MetronomeMobile" tech="Redux">
              <Redux className="h-5 w-5" />
            </TechIcon>
          </ProjectCard>
        </div>
      </XyzTransitionGroup>
    </section>
  );
}
