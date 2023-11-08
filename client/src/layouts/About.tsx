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
      className="xs:px-6 flex h-full min-h-screen flex-col items-center justify-start px-3 lg:justify-center"
      id="about"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.5, rootMargin: '0px' }}
      >
        <header className="my-20 flex w-full flex-col items-center lg:mt-0">
          <h2 className="2xs:text-2xl text-xl font-medium sm:text-3xl">{t('about')}</h2>
          <div className="bg-main-light mt-2 h-0.5 w-6 rounded"></div>
        </header>
      </XyzTransition>
      <XyzTransition xyz="fade duration-30" appearVisible={{ threshold: 0.5, rootMargin: '0px' }}>
        <div>
          <article className="xs:text-sm xs:leading-7 max-w-4xl text-justify text-xs leading-6">
            {t('bio')}
          </article>
          <div className="xs:w-72 mx-auto my-6 flex flex-wrap justify-evenly">
            <a
              href="https://www.linkedin.com/in/lsliwinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-main-dark text-main-dark hover:bg-main-dark focus:ring-main-light m-1 inline-flex items-center rounded-lg border px-3 py-2 text-center text-sm font-medium hover:text-neutral-200 focus:outline-none focus:ring-4"
            >
              LinkedIn
              <LinkedIn className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/lukaszsliwinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-main-dark text-main-dark hover:bg-main-dark focus:ring-main-light m-1 inline-flex items-center rounded-lg border px-3 py-2 text-center text-sm font-medium hover:text-neutral-200 focus:outline-none focus:ring-4"
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
