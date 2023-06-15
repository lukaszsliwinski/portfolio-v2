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
    <section className="max-w-[70rem] mx-auto h-full min-h-screen px-2 xs:px-12 xl:px-20 md:pt-[8vh]" id="about">
      <XyzTransition xyz="fade flip-left perspective-5 duration-10" appear>
        <header className="flex flex-col items-center w-full mb-12">
          <h2 className="text-2xl font-medium dark:text-neutral-200">{t('about')}</h2>
          <div className="w-6 h-0.5 mt-2 rounded bg-indigo-600"></div>
        </header>
      </XyzTransition>
      <div className="grid lg:grid-cols-2 gap-16">
        <XyzTransition xyz="fade duration-30" appear>
          <div>
            <article className="text-justify text-xs xs:text-sm leading-6 xs:leading-7">
              <img className="w-20 xs:w-32 float-left rounded-sm  mr-3 xs:mr-6 mt-2 shadow-sm" src={profilePhoto} alt="profile photo"/>
              Jestem programistą aplikacji internetowych specjalizującym się we frontendzie.
              W trakcie samodzielnej nauki poznałem takie technologie jak JavaScript, React, Bootstrap i Node.js.
              W ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy tworzenia frontend-u i backend-u aplikacji,
              sposoby komunikacji między nimi, bazy danych, tworzenie szablonów responsywnych i system kontroli wersji.
              Obecnie doskonalę swoje umiejętności pracując jako Junior Frontend Developer i uczę się nowych technologii po godzinach.

              Napisać kilka słów nt używanych technologii oraz wykonanych projektów
            </article>
            <div className="flex justify-evenly flex-wrap xs:w-72 mx-auto my-6">
              <a href="https://www.linkedin.com/in/lsliwinski/" target="_blank" rel="noopener noreferrer" className='inline-flex items-center m-1 px-3 py-2 text-sm font-medium text-center text-neutral-100 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>
                LinkedIn
                <LinkedIn className="h-4 w-4 ml-2" aria-hidden="true" />
              </a>
              <a href="https://github.com/lukaszsliwinski/" target="_blank" rel="noopener noreferrer"  className='inline-flex items-center m-1 px-3 py-2 text-sm font-medium text-center text-neutral-100 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>
                GitHub
                <GitHub className="h-4 w-4 ml-2" aria-hidden="true" />
              </a>
            </div>
          </div>
        </XyzTransition>
        <div className="mb-2">
          <XyzTransition xyz="fade flip-left perspective-5 duration-10" appear>
            <h3 className="mb-1 font-medium">Frontend stack</h3>
          </XyzTransition>
          <XyzTransitionGroup
            className="flex flex-wrap mb-3"
            xyz="fade flip-up right down appear-stagger duration-2"
            appear
          >
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<TypeScript className="w-6 h-6" />} label={'TypeScript'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<JavaScript className="w-6 h-6" />} label={'JavaScript'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<React className="w-6 h-6" />} label={'React.js'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<Redux className="w-6 h-6" />} label={'Redux'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<Tailwind className="w-6 h-6" />} label={'Tailwindcss'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<img src={flowbitePng} className="w-6 h-6" />} label={'Flowbite'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<Bootstrap className="w-6 h-6" />} label={'Bootstrap'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<JQuery className="w-6 h-6" />} label={'jQuery'} /></div>
          </XyzTransitionGroup>
          <XyzTransition xyz="fade flip-left perspective-5 duration-10" appear>
            <h3 className="mb-1 font-medium">Other</h3>
          </XyzTransition>
          <XyzTransitionGroup
            appear
            className="flex flex-wrap mb-3"
            xyz="fade flip-up right down appear-stagger delay-20"
          >
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<Node className="w-6 h-6" />} label={'Node.js'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<Mongo className="w-6 h-6" />} label={'MongoDB'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<MySql className="w-6 h-6" />} label={'MySQL'} /></div>
            <div className="m-1 w-full 2xs:w-fit"><Badge icon={<Git className="w-6 h-6" />} label={'Git'} /></div>
          </XyzTransitionGroup>
        </div>
      </div>
    </section>
  );
}
