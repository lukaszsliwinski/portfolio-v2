
// icons
import { ReactComponent as GitHub } from '../assets/svg/github.svg';
import { ReactComponent as Link } from '../assets/svg/link.svg';

// type
import { IProjectCard } from '../types';

export default function PorjectCard({children, screenSrc, title, description, showSource, sourceUrl, showLink, linkUrl}: IProjectCard) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={screenSrc} alt="apps screen" />
      <div className="flex flex-col p-5 h-60">
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h3>
        <div className="flex space-x-2 items-center py-2">
          {children}
        </div>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 text-justify">{description}</p>
        <div className="flex justify-evenly mt-auto">
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={`${showSource ? 'inline-flex' : 'hidden'} items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
            Source code
            <GitHub className="h-4 w-4 ml-2" aria-hidden="true" />
          </a>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer"  className={`${showLink ? 'inline-flex' : 'hidden'} items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
            Live link
            <Link className="h-4 w-4 ml-2" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
