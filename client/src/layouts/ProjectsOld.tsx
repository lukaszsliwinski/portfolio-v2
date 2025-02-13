// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import typeScript from '../assets/icons/typescript.png';
import javaScript from '../assets/icons/javascript.png';
import angular from '../assets/icons/angular.png';
import react from '../assets/icons/react.png';
import redux from '../assets/icons/redux.png';
import scss from '../assets/icons/scss.png';
import tailwind from '../assets/icons/tailwind.png';
import flowbite from '../assets/icons/flowbite.png';
import testingLibrary from '../assets/icons/testing-library.png';
import node from '../assets/icons/node.png';
import mongo from '../assets/icons/mongo.png';

// project screens
import radioScreen from '../assets/img/radio-screen.png';
import vocabularyQuizScreen from '../assets/img/vocabulary-quiz-screen.png';
import bookStoreScreen from '../assets/img/book-store-screen.png';
import weatherAppScreen from '../assets/img/weather-app-screen.png';
import metronomeScreen from '../assets/img/metronome-screen.png';
import ksmbScreen from '../assets/img/ksmb-screen.png';

// components
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';

export default function ProjectsOld() {
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
          <h2 className="2xs:text-2xl text-xl font-medium sm:text-3xl">{t('projects')}</h2>
          <div className="bg-main-light mt-2 h-0.5 w-6 rounded"></div>
        </header>
      </XyzTransition>
      <XyzTransitionGroup
        className="mx-auto grid gap-10 xl:grid-cols-2"
        xyz="fade small appear-stagger duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        {/* Radio project card */}
        <div>
          <ProjectCard
            screenSrc={radioScreen}
            title={'Radio App'}
            description={t('radio')}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/radio/'}
            showLink={true}
            linkUrl={'https://radio.lukaszsliwinski.pl'}
          >
            <TechIcon project="Radio" tech="TypeScript" icon={typeScript} />
            <TechIcon project="Radio" tech="Angular" icon={angular} />
            <TechIcon project="Radio" tech="Scss" icon={scss} />
            <TechIcon project="Radio" tech="Node.js" icon={node} />
            <TechIcon project="Radio" tech="MongoDB" icon={mongo} />
          </ProjectCard>
        </div>

        {/* Vocabulary Quiz project card */}
        <div>
          <ProjectCard
            screenSrc={vocabularyQuizScreen}
            title={'Vocabulary Quiz'}
            description={t('vocabularyquiz')}
            showSource={true}
            sourceUrl={'https://github.com/lukaszsliwinski/vocabulary-quiz/'}
            showLink={true}
            linkUrl={'https://vocabularyquiz.lukaszsliwinski.pl'}
          >
            <TechIcon project="VocabularyQuiz" tech="TypeScript" icon={typeScript} />
            <TechIcon project="VocabularyQuiz" tech="Angular" icon={angular} />
            <TechIcon project="VocabularyQuiz" tech="Scss" icon={scss} />
            <TechIcon project="VocabularyQuiz" tech="Node.js" icon={node} />
            <TechIcon project="VocabularyQuiz" tech="MongoDB" icon={mongo} />
          </ProjectCard>
        </div>

        {/* KSMicroband project card */}
        <div>
          <ProjectCard
            screenSrc={ksmbScreen}
            title={'KSMicroband Website'}
            description={t('ksmicroband')}
            showSource={false}
            sourceUrl={'#'}
            showLink={true}
            linkUrl={'https://ksmicroband.pl/'}
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
