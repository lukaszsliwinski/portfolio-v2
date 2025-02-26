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
    <div className="grid xl:grid-cols-2 gap-4 px-20 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col justify-center mx-auto xl:p-10 max-w-[600px]">
        <h3 className="xs:text-xl text-lg font-semibold tracking-tight">{title}</h3>
        <div className="flex items-center space-x-2 py-3">{children}</div>
        <p className="xs:text-sm whitespace-pre-line text-xs leading-6">{description}</p>
      </div>
      <div className="xl:p-10">
        <img src={screenSrc} alt="apps screen" className="mx-auto rounded" />
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
