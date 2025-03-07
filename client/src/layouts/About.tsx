import { useTranslation } from 'react-i18next';
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from '../assets/svg/github.svg';
import { XyzTransition } from '@animxyz/react';

// About section component
export default function About() {
  // Using the useTranslation hook to get the translation function
  const { t } = useTranslation();

  return (
    <section
      className="xs:px-6 flex h-full min-h-screen flex-col items-center justify-center px-3"
      id="about"
    >
      <XyzTransition
        xyz="fade flip-left perspective-5 duration-10"
        appearVisible={{ threshold: 0.2, rootMargin: '0px' }}
      >
        <header className="mt-20 flex w-full flex-col items-center">
          <h2 className="2xs:text-2xl text-xl font-medium sm:text-3xl">{t('about')}</h2>
          <div className="bg-main-light mt-2 h-0.5 w-6 rounded"></div>
        </header>
      </XyzTransition>
      <XyzTransition xyz="fade duration-10" appearVisible={{ threshold: 0.2, rootMargin: '0px' }}>
        <div className="mb-20">
          <article className="mt-12 max-w-4xl text-justify">{t('bio')}</article>
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

          <article className="mt-12 max-w-4xl text-justify">{t('bio2')}</article>
          <div className="my-6 flex justify-center">
            <a
              href="#projects"
              className="border-main-dark text-main-dark hover:bg-main-dark focus:ring-main-light m-1 inline-flex items-center rounded-lg border px-3 py-2 text-center text-sm font-medium hover:text-neutral-200 focus:outline-none focus:ring-4"
            >
              <span>{t('projects')}</span>
            </a>
          </div>
        </div>
      </XyzTransition>
    </section>
  );
}
