// packages
import 'flowbite';
import '@animxyz/core';

// components
import Nav from './layouts/Nav';
import About from './layouts/About';
import Projects from './layouts/Projects';

export default function Website() {
  return (
    <div className="min-h-screen-mobile bg-white tracking-wider dark:bg-neutral-900 dark:text-neutral-200">
      <Nav />
      <div className="px-4 md:ml-64">
        <About />
        <Projects />
      </div>
    </div>
  );
}
