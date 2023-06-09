export default function Badge({ icon, label }: { icon: JSX.Element, label: string }) {
  return (
    <span className="w-full 2xs:w-fit text-sm xs:text-base bg-gray-100 text-gray-800 font-medium inline-flex items-center px-3 py-1.5 rounded m-1 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
      {icon}&ensp;{label}
    </span>
  );
}
