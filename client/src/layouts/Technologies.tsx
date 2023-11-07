// packages
import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';

// components
import TechBall from '../components/TechBall';

// technologies icons
import javaScript from '../assets/svg/javascript.svg';
import typeScript from '../assets/svg/typescript.svg';
import react from '../assets/svg/react.svg';
import angular from '../assets/svg/angular.svg';
import redux from '../assets/svg/redux.svg';
import tailwind from '../assets/svg/tailwind.svg';
import flowbite from '../assets/img/flowbite.png';
import bootstrap from '../assets/svg/bootstrap.svg';
import jQuery from '../assets/svg/jquery.svg';
import testingLibrary from '../assets/img/testing-library.png';
import node from '../assets/svg/node.svg';
import php from '../assets/svg/php.svg';
import mongo from '../assets/svg/mongo.svg';
import mySql from '../assets/svg/mysql.svg';
import git from '../assets/svg/git.svg';

export default function Technologies() {
  // useTranslation fn
  const { t } = useTranslation();

  // lists with technologies
  const frontTechList = [
    javaScript,
    typeScript,
    react,
    angular,
    redux,
    tailwind,
    flowbite,
    bootstrap,
    jQuery,
    testingLibrary
  ];

  const otherTechList = [node, php, mongo, mySql, git];

  return (
    <div
      className="h-screen-mobile bg-wallpaper2 top-0 bg-cover bg-fixed bg-center"
      id="technologies"
    >
      <section className="bg-main-mid/50 flex h-full min-h-screen flex-col items-center justify-center py-20 text-neutral-200 md:py-16">
        <h2 className="xs:text-2xl text-xl font-medium">{t('stack')}</h2>
        <div className="bg-main-light mt-1 h-0.5 w-6 rounded"></div>
        <div className="flex h-fit max-w-[1000px] flex-wrap justify-center">
          {frontTechList.map((tech, i) => (
            <div className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 h-28 w-28" key={i}>
              <Canvas>
                <TechBall techIcon={tech} />
              </Canvas>
            </div>
          ))}
        </div>
        <h2 className="xs:text-2xl mt-12 text-xl font-medium">{t('other')}</h2>
        <div className="bg-main-light mt-1 h-0.5 w-6 rounded"></div>
        <div className="flex h-fit max-w-[1000px] flex-wrap justify-center">
          {otherTechList.map((tech, i) => (
            <div className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 h-28 w-28" key={i}>
              <Canvas>
                <TechBall techIcon={tech} />
              </Canvas>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
