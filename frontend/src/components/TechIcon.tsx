// type
import { ITechIcon } from '../types';

export default function TechIcon({children, tech, project}: ITechIcon) {
  return (
    <div data-tooltip-target={`${project}-${tech}`}>
      {children}
      <div id={`${project}-${tech}`} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {tech}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
}