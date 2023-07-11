// packages
import 'flowbite';
import '@animxyz/core';

// components
import Nav from './layouts/Nav';
import About from './layouts/About';
import WebApps from './layouts/WebApps';
import Websites from './layouts/Websites';

export default function Website() {
  return (
    <div className="min-h-screen-mobile overflow-x-hidden bg-white tracking-wider dark:bg-neutral-900 dark:text-neutral-200">
      <Nav />
      <div className="px-4 md:ml-64">
        <About />
        <WebApps />
        <Websites />
      </div>
    </div>
  );
}
