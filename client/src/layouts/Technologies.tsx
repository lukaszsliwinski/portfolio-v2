// packages
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { BrowserView, MobileView } from 'react-device-detect';

// components
import TechBall from '../components/TechBall';
import TechBallMobile from '../components/TechBallMobile';

// technologies icons
import javaScript from '../assets/icons/javascript.png';
import typeScript from '../assets/icons/typescript.png';
import react from '../assets/icons/react.png';
import angular from '../assets/icons/angular.png';
import redux from '../assets/icons/redux.png';
import tailwind from '../assets/icons/tailwind.png';
import flowbite from '../assets/icons/flowbite.png';
import bootstrap from '../assets/icons/bootstrap.png';
import jQuery from '../assets/icons/jquery.png';
import testingLibrary from '../assets/icons/testing-library.png';
import node from '../assets/icons/node.png';
import php from '../assets/icons/php.png';
import mongo from '../assets/icons/mongo.png';
import mySql from '../assets/icons/mysql.png';
import git from '../assets/icons/git.png';

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
    <div className="bg-wallpaper2 top-0 min-h-screen bg-cover bg-fixed bg-center" id="technologies">
      <section className="bg-main-mid/50 flex h-full min-h-screen flex-col items-center justify-center py-20 text-neutral-200 md:py-16">
        <h2 className="2xs:text-xl xs:text-2xl text-md font-medium">{t('stack')}</h2>
        <div className="bg-main-light mt-1 h-0.5 w-6 rounded"></div>
        <div className="flex h-fit max-w-[1000px] flex-wrap justify-center">
          {frontTechList.map((tech, i) => (
            <div key={i}>
              <BrowserView className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 h-28 w-28">
                <Canvas>
                  <TechBall techIcon={tech} />
                </Canvas>
              </BrowserView>

              {/* prevent from WebGLRenderer error on mobile */}
              <MobileView className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 flex h-28 w-28 items-center justify-center">
                <TechBallMobile techIcon={tech} />
              </MobileView>
            </div>
          ))}
        </div>
        <h2 className="2xs:text-xl xs:text-2xl text-md mt-12 font-medium">{t('other')}</h2>
        <div className="bg-main-light mt-1 h-0.5 w-6 rounded"></div>
        <div className="flex h-fit max-w-[1000px] flex-wrap justify-center">
          {otherTechList.map((tech, i) => (
            <div key={i}>
              <BrowserView className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 h-28 w-28">
                <Canvas>
                  <TechBall techIcon={tech} />
                </Canvas>
              </BrowserView>

              {/* prevent from WebGLRenderer error on mobile */}
              <MobileView className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 flex h-28 w-28 items-center justify-center">
                <TechBallMobile techIcon={tech} />
              </MobileView>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
