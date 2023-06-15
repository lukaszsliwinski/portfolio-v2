export default function Badge({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <span className="xs:text-base inline-flex w-full items-center rounded border border-neutral-500 bg-neutral-100 px-3 py-1.5 text-sm font-medium tracking-wide text-neutral-800 dark:bg-neutral-700 dark:text-neutral-400">
      {icon}&ensp;{label}
    </span>
  );
}
