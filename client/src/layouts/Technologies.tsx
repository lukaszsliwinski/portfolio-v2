// packages
import { Canvas } from "@react-three/fiber";
import { useTranslation } from 'react-i18next';

// components
import TechBall from "../components/TechBall";

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
  
  const otherTechList = [
    node,
    php,
    mongo,
    mySql,
    git
  ]

  return (
    <div
      className="h-screen-mobile top-0 bg-cover bg-fixed bg-center bg-wallpaper2"
      id="technologies"
    >
      <section className="flex flex-col justify-center items-center h-full min-h-screen bg-main-dark/50 text-neutral-200">
        <h2 className="text-2xl font-medium">{t('stack')}</h2>
        <div className="mt-1 h-0.5 w-6 rounded bg-main-light"></div>
        <div className="flex flex-wrap justify-center h-fit max-w-[1000px]">
          {frontTechList.map((tech, i) => (
            <div className="w-36 h-36" key={i}>
              <Canvas>
                <TechBall techIcon={tech} />
              </Canvas>
            </div>
          ))}
        </div>
        <div className="h-12"></div>
        <h2 className="text-2xl font-medium">{t('other')}</h2>
        <div className="mt-1 h-0.5 w-6 rounded bg-main-light"></div>
        <div className="flex flex-wrap justify-center h-fit max-w-[1000px]">
          {otherTechList.map((tech, i) => (
            <div className="w-36 h-36" key={i}>
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
