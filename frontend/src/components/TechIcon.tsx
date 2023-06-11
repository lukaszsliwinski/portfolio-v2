// type
import { ITechIcon } from '../types';

export default function TechIcon({children, tech, project}: ITechIcon) {
  return (
    <div data-tooltip-target={`${project}-${tech}`}>
      {children}
      <div id={`${project}-${tech}`} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-neutral-200 transition-opacity duration-300 bg-neutral-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-neutral-700">
        {tech}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
}