// icons
import { ReactComponent as Code } from '../assets/svg/code.svg';
import { ReactComponent as Link } from '../assets/svg/link.svg';

// type
import { IProjectCard } from '../types';

export default function PorjectCard({
  children,
  screenSrc,
  title,
  description,
  showSource,
  sourceUrl,
  showLink,
  linkUrl
}: IProjectCard) {
  return (
    <div className="mx-auto max-w-sm rounded-lg border border-neutral-200 bg-white shadow dark:border-neutral-700 dark:bg-neutral-800">
      <img className="rounded-t-lg" src={screenSrc} alt="apps screen" />
      <div className="flex flex-col p-5 lg:h-72">
        <h3 className="xs:text-xl text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-200">
          {title}
        </h3>
        <div className="flex items-center space-x-2 py-3">{children}</div>
        <p className="xs:text-sm mb-3 text-justify text-xs leading-6 text-neutral-700 dark:text-neutral-400">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap justify-evenly">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              showSource ? 'inline-flex' : 'hidden'
            } m-1 items-center rounded-lg bg-indigo-700 px-3 py-2 text-center text-sm font-medium text-neutral-100 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800`}
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
            } m-1 items-center rounded-lg bg-indigo-700 px-3 py-2 text-center text-sm font-medium text-neutral-100 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800`}
          >
            Link
            <Link className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
