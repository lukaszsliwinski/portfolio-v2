export default function Badge({ icon, label }: { icon: JSX.Element, label: string }) {
  return (
    <span className="w-full text-sm xs:text-base tracking-wide bg-neutral-100 text-neutral-800 font-medium inline-flex items-center px-3 py-1.5 rounded dark:bg-neutral-700 dark:text-neutral-400 border border-neutral-500">
      {icon}&ensp;{label}
    </span>
  );
}
