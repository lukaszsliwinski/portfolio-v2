import { useTranslation } from 'react-i18next';
import { ReactComponent as Code } from '../assets/svg/code.svg';
import { ReactComponent as Link } from '../assets/svg/link.svg';
import { IProjectCard } from '../types';

// ProjectCard component
export default function PorjectCard({
  children,
  previewSrc,
  title,
  app,
  showSource,
  sourceUrl,
  showLink,
  linkUrl
}: IProjectCard) {
  // Using the useTranslation hook to get the translation function
  const { t } = useTranslation();

  // Getting the features array from the translation files
  const features = t(`${app}.features`, { returnObjects: true });

  return (
    <div className="grid xl:grid-cols-2 gap-x-4 px-2 xs:px-4 sm:p-6 xl:px-20 py-12 mx-auto xl:mb-6">
      <div className="mx-auto xl:px-10 w-full max-w-[600px]">
        <h3 className="xs:text-3xl text-lg font-semibold tracking-tight">{title}</h3>

        <div className="flex items-center space-x-2 py-3">{children}</div>

        <div className="whitespace-pre-line">
          <div>{t(`${app}.description`)}</div>
          <ul className="list-disc mt-6 pl-5">
            {Array.isArray(features)
              ? features.map((feature, index) => <li key={index}>{feature}</li>)
              : null}
          </ul>
        </div>
      </div>

      <div className="mt-4 xl:mt-0 xl:px-10">
        <img src={previewSrc} alt="apps screen" className="mx-auto rounded w-76 xs:w-[450px] sm:w-[600px]" />
        <div className="mt-4 flex flex-wrap justify-center">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              showSource ? 'inline-flex' : 'hidden'
            } hover:text-main-dark m-1 inline-flex items-center rounded-lg border border-neutral-200 mx-4 px-3 py-2 text-center text-sm font-medium text-neutral-200 hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-200`}
          >
            Code
            <Code className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              showLink ? 'inline-flex' : 'hidden'
            } hover:text-main-dark m-1 inline-flex items-center rounded-lg border border-neutral-200 mx-4 px-3 py-2 text-center text-sm font-medium text-neutral-200 hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-200`}
          >
            Link
            <Link className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
