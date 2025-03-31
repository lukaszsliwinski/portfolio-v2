import { useTranslation } from 'react-i18next';
import { Carousel } from 'flowbite-react';

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

import digitPreview from '../assets/gif/digit-preview.gif';
import radioPreview from '../assets/gif/radio-preview.gif';
import vocabularyPreview from '../assets/gif/vocabulary-preview.gif';
import soloPreview from '../assets/gif/solo-preview.gif';
import ksmbPreview from '../assets/gif/ksmb-preview.gif';

import { XyzTransition } from '@animxyz/react';
import ProjectCard from '../components/ProjectCard';
import TechIcon from '../components/TechIcon';
import Footer from './Footer';

// Projects section component
export default function Projects() {
  // Using the useTranslation hook to get the translation function
  const { t } = useTranslation();

  return (
    <section
      className="relative xs:px-6 sm:h-full min-h-screen flex flex-col items-center justify-center px-2 bg-main-mid text-neutral-200"
      id="projects"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.2, rootMargin: '0px' }}
      >
        <header className="flex w-full flex-col items-center mb-4 mt-16 xl:mt-4">
          <h2 className="2xs:text-2xl text-xl font-medium sm:text-3xl">{t('projects')}</h2>
          <div className="bg-main-light mt-2 h-0.5 w-6 rounded"></div>
        </header>
      </XyzTransition>
      <XyzTransition xyz="fade duration-10" appearVisible={{ threshold: 0.2, rootMargin: '0px' }}>
        <div className="max-w-[100vw]">
          <Carousel slideInterval={10000}>
            {/* Digit Recognizer project card */}
            <ProjectCard
              previewSrc={digitPreview}
              title={'Digit Recognizer'}
              app={'digit'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/digit-recognizer/'}
              showLink={true}
              linkUrl={'https://digitrecognizer.lukaszsliwinski.pl'}
            >
              <TechIcon tech="TypeScript" icon={typeScript} />
              <TechIcon tech="React.js" icon={react} />
              <TechIcon tech="Tailwind CSS" icon={tailwind} />
              <TechIcon tech="Python" icon={python} />
              <TechIcon tech="Flask" icon={flask} />
              <TechIcon tech="PyTorch" icon={pytorch} />
              <TechIcon tech="Google Colab" icon={colab} />
              <TechIcon tech="OpenVINO" icon={openvino} />
            </ProjectCard>

            {/* Radio project card */}
            <ProjectCard
              previewSrc={radioPreview}
              title={'Radio App'}
              app={'radio'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/radio/'}
              showLink={true}
              linkUrl={'https://radio.lukaszsliwinski.pl'}
            >
              <TechIcon tech="TypeScript" icon={typeScript} />
              <TechIcon tech="Angular" icon={angular} />
              <TechIcon tech="Scss" icon={scss} />
              <TechIcon tech="Node.js" icon={node} />
              <TechIcon tech="MongoDB" icon={mongo} />
            </ProjectCard>

            {/* Vocabulary Quiz project card */}
            <ProjectCard
              previewSrc={vocabularyPreview}
              title={'Vocabulary Quiz'}
              app={'vocabularyquiz'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/vocabulary-quiz/'}
              showLink={true}
              linkUrl={'https://vocabularyquiz.lukaszsliwinski.pl'}
            >
              <TechIcon tech="TypeScript" icon={typeScript} />
              <TechIcon tech="Angular" icon={angular} />
              <TechIcon tech="Scss" icon={scss} />
              <TechIcon tech="Node.js" icon={node} />
              <TechIcon tech="MongoDB" icon={mongo} />
            </ProjectCard>

            {/* Personal Website project card */}
            <ProjectCard
              previewSrc={soloPreview}
              title={'Personal Music Website'}
              app={'music'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/solo-website/'}
              showLink={true}
              linkUrl={'https://lukaszsliwinski.pl'}
            >
              <TechIcon tech="TypeScript" icon={typeScript} />
              <TechIcon tech="Next.js" icon={next} />
              <TechIcon tech="Tailwind CSS" icon={tailwind} />
            </ProjectCard>

            {/* KSMicroband project card */}
            <ProjectCard
              previewSrc={ksmbPreview}
              title={'KSMicroband Website'}
              app={'ksmicroband'}
              showSource={true}
              sourceUrl={'https://github.com/lukaszsliwinski/ksmb-v2/'}
              showLink={true}
              linkUrl={'https://ksmicroband.pl/'}
            >
              <TechIcon tech="JavaScript" icon={javaScript} />
              <TechIcon tech="React.js" icon={react} />
              <TechIcon tech="Tailwind CSS" icon={tailwind} />
              <TechIcon tech="Node.js" icon={node} />
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
