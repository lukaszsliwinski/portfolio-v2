// type
import { ITechIcon } from '../types';

export default function TechIcon({ children, tech, project }: ITechIcon) {
  return (
    <div data-tooltip-target={`${project}-${tech}`}>
      {children}
      <div
        id={`${project}-${tech}`}
        role="tooltip"
        className="tooltip text-main-dark invisible absolute z-10 inline-block rounded-lg bg-neutral-200 px-3 py-2 text-sm font-medium opacity-0 shadow-sm transition-opacity duration-300"
      >
        {tech}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
}
