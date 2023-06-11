export default function Badge({ icon, label }: { icon: JSX.Element, label: string }) {
  return (
    <span className="w-full 2xs:w-fit text-sm xs:text-base bg-neutral-100 text-neutral-800 font-medium inline-flex items-center px-3 py-1.5 rounded m-1 dark:bg-neutral-700 dark:text-neutral-400 border border-neutral-500">
      {icon}&ensp;{label}
    </span>
  );
}
