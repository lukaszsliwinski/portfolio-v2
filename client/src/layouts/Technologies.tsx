// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import { ReactComponent as JavaScript } from '../assets/svg/javascript.svg';
import { ReactComponent as TypeScript } from '../assets/svg/typescript.svg';
import { ReactComponent as React } from '../assets/svg/react.svg';
import { ReactComponent as Angular } from '../assets/svg/angular.svg';
import { ReactComponent as Redux } from '../assets/svg/redux.svg';
import { ReactComponent as Tailwind } from '../assets/svg/tailwind.svg';
import flowbitePng from '../assets/img/flowbite.png';
import { ReactComponent as Bootstrap } from '../assets/svg/bootstrap.svg';
import { ReactComponent as JQuery } from '../assets/svg/jquery.svg';
import testingLibraryPng from '../assets/img/testing-library.png';
import { ReactComponent as Node } from '../assets/svg/node.svg';
import { ReactComponent as Php } from '../assets/svg/php.svg';
import { ReactComponent as Mongo } from '../assets/svg/mongo.svg';
import { ReactComponent as MySql } from '../assets/svg/mysql.svg';
import { ReactComponent as Git } from '../assets/svg/git.svg';

// components
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import Badge from '../components/Badge';

export default function Technologies() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col justify-center items-center xs:px-6 h-full min-h-screen px-2 md:pt-[8vh] xl:px-20 bg-main-mid text-neutral-200"
      id="technologies"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="mb-12 flex w-full flex-col items-center">
          <h2 className="text-3xl font-medium">{t('technologies')}</h2>
          <div className="mt-2 h-0.5 w-6 rounded bg-main-light"></div>
        </header>
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
          <Badge icon={<Angular className="h-6 w-6" />} label={'Angular'} />
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
          <Badge icon={<Node className="h-6 w-6" />} label={'Node.js'} />
        </div>
        <div className="2xs:w-fit m-1 w-full">
          <Badge icon={<Php className="h-6 w-6" />} label={'PHP'} />
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
      <div className="h-40"></div>
    </section>
  );
}
