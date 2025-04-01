import moment from 'moment';

import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from '../assets/svg/github.svg';

// Footer component
export default function Footer() {
  // Getting the current year using moment
  const year = moment().year();

  return (
    <footer className="w-screen flex justify-between px-8 pt-4 pb-3 mt-8 border-t border-main-light">
      <div className="text-xxs">&copy; 2023-{year} ŁUKASZ ŚLIWIŃSKI</div>
      <div>
        <a
          href="https://github.com/lukaszsliwinski/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2 mt-1"
        >
          <GitHub className="h-3 w-3 sm:h-5 sm:w-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/lsliwinski/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2 mt-1"
        >
          <LinkedIn className="h-3 w-3 sm:h-5 sm:w-5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
