import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { BrowserView, MobileView } from 'react-device-detect';

import { XyzTransition } from '@animxyz/react';
import TechBall from '../components/TechBall';
import TechBallMobile from '../components/TechBallMobile';
import TechBtn from '../components/TechBtn';

import typeScript from '../assets/icons/typescript.png';
import javaScript from '../assets/icons/javascript.png';
import react from '../assets/icons/react.png';
import next from '../assets/icons/next.png';
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

// Lists with technologies
const frontTechList = [
  typeScript,
  javaScript,
  react,
  next,
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
  // State to manage the current list of technologies
  const [techList, setTechList] = useState<typeof frontTechList | typeof otherTechList>(
    frontTechList
  );

  // Using the useTranslation hook to get the translation function
  const { t } = useTranslation();

  return (
    <div className="bg-wallpaper2 top-0 min-h-screen bg-cover bg-fixed bg-center" id="technologies">
      <section className="bg-main-mid/50 flex h-full min-h-screen flex-col items-center justify-center py-20 text-neutral-200 md:py-16">
        <XyzTransition
          xyz="fade flip-left perspective-5 duration-10"
          appearVisible={{ threshold: 0.2, rootMargin: '0px' }}
        >
          <h2 className="2xs:text-2xl text-xl font-medium sm:text-3xl">{t('technologies')}</h2>
        </XyzTransition>
        <XyzTransition xyz="fade duration-10" appearVisible={{ threshold: 0.2, rootMargin: '0px' }}>
          <div>
            <div role="group" className="flex justify-center w-100 mt-4">
              <TechBtn
                callback={() => setTechList(frontTechList)}
                label={t('front')}
                active={techList === frontTechList}
              />
              <TechBtn
                callback={() => setTechList(otherTechList)}
                label={t('other')}
                active={techList === otherTechList}
              />
            </div>
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
          </div>
        </XyzTransition>
      </section>
    </div>
  );
}
