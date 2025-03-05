"use client";

// packages
import { useTranslation } from 'react-i18next';
import { Carousel } from "flowbite-react";

// technologies icons
import typeScript from '../assets/icons/typescript.png';
import javaScript from '../assets/icons/javascript.png';
import angular from '../assets/icons/angular.png';
import react from '../assets/icons/react.png';
import next from '../assets/icons/next.png';
import scss from '../assets/icons/scss.png';
import tailwind from '../assets/icons/tailwind.png';
import node from '../assets/icons/node.png';
import mongo from '../assets/icons/mongo.png';
import python from '../assets/icons/python.png';
import flask from '../assets/icons/flask.png';
import pytorch from '../assets/icons/pytorch.png';
import colab from '../assets/icons/colab.png';
import openvino from '../assets/icons/openvino.png';

// project screens
import digitRecognizerScreen from '../assets/img/digit-recognizer-screen.png';
import radioScreen from '../assets/img/radio-screen.png';
import vocabularyQuizScreen from '../assets/img/vocabulary-quiz-screen.png';
import soloWebsiteScreen from '../assets/img/solo-website-screen.png';
import ksmbScreen from '../assets/img/ksmb-screen.png';

// components
import { XyzTransition } from '@animxyz/react';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';
import Footer from './Footer';


export default function Projects() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="relative xs:px-6 sm:h-full min-h-screen flex flex-col items-center justify-center px-2 bg-main-mid text-neutral-200"
      id="projects"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="flex w-full flex-col items-center mb-4 mt-16 xl:mt-4">
          <h2 className="2xs:text-2xl text-xl font-medium sm:text-3xl">{t('projects')}</h2>
          <div className="bg-main-light mt-2 h-0.5 w-6 rounded"></div>
        </header>
      </XyzTransition>
      <XyzTransition xyz="fade duration-30" appearVisible={{ threshold: 0.5, rootMargin: '0px' }}>
        <div className="max-w-[100vw]">
          <Carousel slideInterval={10000}>
            {/* Digit Recognizer project card */}
            <ProjectCard
              screenSrc={digitRecognizerScreen}
              title={'Digit Recognizer'}
              app={'digit'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/digit-recognizer/'}
              showLink={true}
              linkUrl={'https://digitrecognizer.lukaszsliwinski.pl'}
            >
              <TechIcon project="Digit" tech="TypeScript" icon={typeScript} />
              <TechIcon project="Digit" tech="React.js" icon={react} />
              <TechIcon project="Digit" tech="Tailwindcss" icon={tailwind} />
              <TechIcon project="Digit" tech="Python" icon={python} />
              <TechIcon project="Digit" tech="Flask" icon={flask} />
              <TechIcon project="Digit" tech="Pytorch" icon={pytorch} />
              <TechIcon project="Digit" tech="Colab" icon={colab} />
              <TechIcon project="Digit" tech="OpenVINO" icon={openvino} />
            </ProjectCard>

            {/* Radio project card */}
            <ProjectCard
              screenSrc={radioScreen}
              title={'Radio App'}
              app={'radio'}
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

            {/* Vocabulary Quiz project card */}
            <ProjectCard
              screenSrc={vocabularyQuizScreen}
              title={'Vocabulary Quiz'}
              app={'vocabularyquiz'}
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

            {/* Personal Website project card */}
            <ProjectCard
              screenSrc={soloWebsiteScreen}
              title={'Personal Music Webstie'}
              app={'music'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/solo-website/'}
              showLink={true}
              linkUrl={'https://lukaszsliwinski.pl'}
            >
              <TechIcon project="SoloWebsite" tech="TypeScript" icon={typeScript} />
              <TechIcon project="SoloWebsite" tech="Next.js" icon={next} />
              <TechIcon project="SoloWebsite" tech="Tailwindcss" icon={tailwind} />
            </ProjectCard>
            
            {/* KSMicroband project card */}
            <ProjectCard
              screenSrc={ksmbScreen}
              title={'KSMicroband Website'}
              app={'ksmicroband'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/ksmb-v2/'}
              showLink={true}
              linkUrl={'https://ksmicroband.pl/'}
            >
              <TechIcon project="KSMicroband" tech="JavaScript" icon={javaScript} />
              <TechIcon project="KSMicroband" tech="React.js" icon={react} />
              <TechIcon project="KSMicroband" tech="Tailwindcss" icon={tailwind} />
              <TechIcon project="KSMicroband" tech="Node.js" icon={node} />
            </ProjectCard>
          </Carousel>
        </div>
      </XyzTransition>
      <div className="xl:absolute xl:bottom-0">
        <Footer />
      </div>
    </section>
  );
}
