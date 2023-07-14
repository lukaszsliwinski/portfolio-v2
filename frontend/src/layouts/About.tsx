// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import { ReactComponent as JavaScript } from '../assets/svg/javascript.svg';
import { ReactComponent as TypeScript } from '../assets/svg/typescript.svg';
import { ReactComponent as React } from '../assets/svg/react.svg';
import { ReactComponent as Redux } from '../assets/svg/redux.svg';
import { ReactComponent as Tailwind } from '../assets/svg/tailwind.svg';
import flowbitePng from '../assets/img/flowbite.png';
import { ReactComponent as Bootstrap } from '../assets/svg/bootstrap.svg';
import { ReactComponent as JQuery } from '../assets/svg/jquery.svg';
import testingLibraryPng from '../assets/img/testing-library.png';
import { ReactComponent as Node } from '../assets/svg/node.svg';
import { ReactComponent as Mongo } from '../assets/svg/mongo.svg';
import { ReactComponent as MySql } from '../assets/svg/mysql.svg';
import { ReactComponent as Git } from '../assets/svg/git.svg';

// link icons
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from '../assets/svg/github.svg';

// profile photo
import profilePhoto from '../assets/img/profile.jpg';

// components
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import Badge from '../components/Badge';

export default function About() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="xs:px-6 mx-auto h-full min-h-screen max-w-6xl px-2 md:pt-[8vh] xl:px-20"
      id="about"
    >
      <XyzTransition xyz="fade flip-left perspective-5 duration-10" appear>
        <header className="mb-12 flex w-full flex-col items-center">
          <h2 className="text-2xl font-medium dark:text-neutral-200">{t('about')}</h2>
          <div className="mt-2 h-0.5 w-6 rounded bg-indigo-600"></div>
        </header>
      </XyzTransition>
      <div className="grid gap-10 lg:grid-cols-2 xl:gap-16">
        <XyzTransition xyz="fade duration-30" appear>
          <div>
            <article className="xs:text-sm xs:leading-7 text-justify text-xs leading-6">
              <img
                className="xs:w-32 xs:mr-6 float-left mr-3  mt-2 w-20 rounded-sm shadow-sm"
                src={profilePhoto}
                alt="profile photo"
              />
              {t('bio')}
            </article>
            <div className="xs:w-72 mx-auto my-6 flex flex-wrap justify-evenly">
              <a
                href="https://www.linkedin.com/in/lsliwinski/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-1 inline-flex items-center rounded-lg bg-indigo-700 px-3 py-2 text-center text-sm font-medium text-neutral-100 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                LinkedIn
                <LinkedIn className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/lukaszsliwinski/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-1 inline-flex items-center rounded-lg bg-indigo-700 px-3 py-2 text-center text-sm font-medium text-neutral-100 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                GitHub
                <GitHub className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </XyzTransition>
        <div className="mb-2">
          <XyzTransition xyz="fade flip-left perspective-5 duration-10" appear>
            <h3 className="mb-1 font-medium">{t('stack')}</h3>
          </XyzTransition>
          <XyzTransitionGroup
            className="mb-3 flex flex-wrap"
            xyz="fade flip-up right down appear-stagger duration-2"
            appear
          >
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<TypeScript className="h-6 w-6" />} label={'TypeScript'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<JavaScript className="h-6 w-6" />} label={'JavaScript'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<React className="h-6 w-6" />} label={'React.js'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<Redux className="h-6 w-6" />} label={'Redux'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<Tailwind className="h-6 w-6" />} label={'Tailwindcss'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<img src={flowbitePng} className="h-6 w-6" />} label={'Flowbite'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<Bootstrap className="h-6 w-6" />} label={'Bootstrap'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<JQuery className="h-6 w-6" />} label={'jQuery'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<img src={testingLibraryPng} className="h-6 w-6" />} label={'Testing Library'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<React className="h-6 w-6" />} label={'React Native'} />
            </div>
          </XyzTransitionGroup>
          <XyzTransition xyz="fade flip-left perspective-5 duration-10  delay-25" appear>
            <h3 className="mb-1 font-medium">{t('other')}</h3>
          </XyzTransition>
          <XyzTransitionGroup
            appear
            className="mb-3 flex flex-wrap"
            xyz="fade flip-up right down appear-stagger delay-25"
          >
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<Node className="h-6 w-6" />} label={'Node.js'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<Mongo className="h-6 w-6" />} label={'MongoDB'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<MySql className="h-6 w-6" />} label={'MySQL'} />
            </div>
            <div className="2xs:w-fit m-1 w-full">
              <Badge icon={<Git className="h-6 w-6" />} label={'Git'} />
            </div>
          </XyzTransitionGroup>
        </div>
      </div>
    </section>
  );
}
