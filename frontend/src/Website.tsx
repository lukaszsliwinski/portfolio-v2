import { useState, useEffect, useRef } from 'react';

export default function Website() {
  // local state
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark' ? true : false);

  // toggle ref
  const toggle = useRef(null);

  // get html tag
  const html = document.documentElement;

  // handle dark mode switch and add class to html tag
  useEffect(() => {
    darkMode ? html.classList.add('dark') : html.classList.remove('dark')
  }, [darkMode, html.classList]);

  // toggle mode
  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.getItem('mode') === 'dark'
      ? localStorage.setItem('mode', 'light')
      : localStorage.setItem('mode', 'dark');
  };

  return (
    <div className="h-screen w-screen bg-white dark:bg-gray-900">
      <div className="text-gray-900 dark:text-white">Portfolio website</div>

      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" ref={toggle} value="" className="sr-only peer" checked={darkMode} onClick={() => toggleMode()} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
      </label>
    </div>
  );
}
