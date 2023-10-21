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
    <div className="mx-auto max-w-sm rounded-lg border-8 border-main-mid bg-main-mid text-neutral-200 shadow-lg">
      <img src={screenSrc} alt="apps screen" />
      <div className="flex flex-col p-5 lg:h-72">
        <h3 className="xs:text-xl text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <div className="flex items-center space-x-2 py-3">{children}</div>
        <p className="xs:text-sm mb-3 text-justify text-xs leading-6">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap justify-evenly">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              showSource ? 'inline-flex' : 'hidden'
            } m-1 inline-flex items-center rounded-lg border border-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-200 hover:text-main-dark hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-200`}
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
            } m-1 inline-flex items-center rounded-lg border border-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-200 hover:text-main-dark hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-200`}
          >
            Link
            <Link className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
