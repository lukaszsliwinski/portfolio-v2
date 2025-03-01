// packages
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { BrowserView, MobileView } from 'react-device-detect';

// components
import { XyzTransition } from '@animxyz/react';
import { Button } from "flowbite-react";
import TechBall from '../components/TechBall';
import TechBallMobile from '../components/TechBallMobile';

// technologies icons
import typeScript from '../assets/icons/typescript.png';
import javaScript from '../assets/icons/javascript.png';
import react from '../assets/icons/react.png';
import angular from '../assets/icons/angular.png';
import redux from '../assets/icons/redux.png';
import tailwind from '../assets/icons/tailwind.png';
import flowbite from '../assets/icons/flowbite.png';
import scss from '../assets/icons/scss.png';
import bootstrap from '../assets/icons/bootstrap.png';
import jQuery from '../assets/icons/jquery.png';
import python from '../assets/icons/python.png';
import php from '../assets/icons/php.png';
import node from '../assets/icons/node.png';
import flask from '../assets/icons/flask.png';
import pytorch from '../assets/icons/pytorch.png';
import colab from '../assets/icons/colab.png';
import openvino from '../assets/icons/openvino.png';
import mongo from '../assets/icons/mongo.png';
import mySql from '../assets/icons/mysql.png';
import git from '../assets/icons/git.png';

// lists with technologies
const frontTechList = [
  typeScript,
  javaScript,
  react,
  angular,
  redux,
  tailwind,
  flowbite,
  scss,
  bootstrap,
  jQuery
];

const otherTechList = [
  python,
  php,
  node,
  flask,
  pytorch,
  colab,
  openvino,
  mongo,
  mySql,
  git
];

export default function Technologies() {
  const [techList, setTechList] = useState<typeof frontTechList | typeof otherTechList>(otherTechList);

  // useTranslation fn
  const { t } = useTranslation();

  return (
    <div className="bg-wallpaper2 top-0 min-h-screen bg-cover bg-fixed bg-center" id="technologies">
      <section className="bg-main-mid/50 flex h-full min-h-screen flex-col items-center justify-center py-20 text-neutral-200 md:py-16">
        <XyzTransition
          xyz="fade flip-left perspective-5 duration-10"
          appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
        >

          <Button.Group>
            <Button onClick={() => setTechList(frontTechList)} color="gray">{t('stack')}</Button>
            <Button onClick={() => setTechList(otherTechList)} color="gray">{t('other')}</Button>
          </Button.Group>
          
          {/* <header className="flex flex-col items-center">
            <h2 className="2xs:text-xl xs:text-2xl text-md font-medium">{t('stack')}</h2>
            <div className="bg-main-light mt-1 h-0.5 w-6 rounded"></div>
          </header> */}
        </XyzTransition>
        <XyzTransition xyz="fade duration-30" appearVisible={{ threshold: 0.5, rootMargin: '0px' }}>
          <div className="flex h-fit max-w-[1000px] flex-wrap justify-center">
            {techList.map((tech, i) => (
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
        </XyzTransition>
        {/* <XyzTransition
          xyz="fade flip-left perspective-5 duration-10"
          appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
        >
          <header className="flex flex-col items-center">
            <h2 className="2xs:text-xl xs:text-2xl text-md mt-12 font-medium">{t('other')}</h2>
            <div className="bg-main-light mt-1 h-0.5 w-6 rounded"></div>
          </header>
        </XyzTransition>
        <XyzTransition xyz="fade duration-30" appearVisible={{ threshold: 0.5, rootMargin: '0px' }}>
          <div className="flex h-fit max-w-[1000px] flex-wrap justify-center">
            {otherTechList.map((tech, i) => (
              <div key={i}>
                <BrowserView className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 h-28 w-28">
                  <Canvas>
                    <TechBall techIcon={tech} />
                  </Canvas>
                </BrowserView> */}

                {/* prevent from WebGLRenderer error on mobile */}
                {/* <MobileView className="2xs:w-32 2xs:h-32 xs:w-36 xs:h-36 flex h-28 w-28 items-center justify-center">
                  <TechBallMobile techIcon={tech} />
                </MobileView>
              </div>
            ))}
          </div>
        </XyzTransition> */}
      </section>
    </div>
  );
}
