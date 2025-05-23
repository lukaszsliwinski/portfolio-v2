import { Tooltip } from 'flowbite-react';
import { ITechIcon } from '../types';

// TechIcon component to render a tech icon with a tooltip
export default function TechIcon({ tech, icon }: ITechIcon) {
  return (
    <Tooltip content={tech} placement="top" style="light">
      <div>
        <img src={icon} className="h-5 w-5" />
      </div>
    </Tooltip>
  );
}
