import { ITechBtn } from '../types';

// TechBtn component to render a button with a label and an active state
export default function TechBtn({ callback, label, active }: ITechBtn) {
  return (
    <div className="inline-flex flex-col items-center">
      <button
        type="button"
        onClick={callback}
        className={`
          hover:cursor-pointer px-4 text-center transition-all
          ${active ? 'text-[15px] font-semibold' : ''}
        `}
      >
        {label}
      </button>
      <div
        className={`
        mt-0.5 h-[3px] w-4 rounded transition-all
        ${active ? 'bg-main-light' : 'bg-transparent'}
      `}
      ></div>
    </div>
  );
}
