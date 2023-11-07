// packages
import { useTranslation } from 'react-i18next';

// link icons
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from '../assets/svg/github.svg';

// components
import { XyzTransition } from '@animxyz/react';

export default function About() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col justify-start lg:justify-center items-center xs:px-6 h-full min-h-screen px-3"
      id="about"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="my-20 lg:mt-0 flex w-full flex-col items-center">
          <h2 className="text-2xl xs:text-3xl font-medium">{t('about')}</h2>
          <div className="mt-2 h-0.5 w-6 rounded bg-main-light"></div>
        </header>
      </XyzTransition>
      <XyzTransition
        xyz="fade duration-30"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <div>
          <article className="xs:text-sm xs:leading-7 text-justify text-xs leading-6 max-w-4xl">
            {t('bio')}
          </article>
          <div className="xs:w-72 mx-auto my-6 flex flex-wrap justify-evenly">
            <a
              href="https://www.linkedin.com/in/lsliwinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 inline-flex items-center rounded-lg border border-main-dark px-3 py-2 text-center text-sm font-medium text-main-dark hover:text-neutral-200 hover:bg-main-dark focus:outline-none focus:ring-4 focus:ring-main-light"
            >
              LinkedIn
              <LinkedIn className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/lukaszsliwinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 inline-flex items-center rounded-lg border border-main-dark px-3 py-2 text-center text-sm font-medium text-main-dark hover:text-neutral-200 hover:bg-main-dark focus:outline-none focus:ring-4 focus:ring-main-light"
            >
              GitHub
              <GitHub className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="h-40"></div>
        </div>
      </XyzTransition>
    </section>
  );
}
