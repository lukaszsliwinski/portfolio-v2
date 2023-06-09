// packages
import 'flowbite';

// components
import Nav from './layouts/Nav';
import About from './layouts/About';
import Projects from './layouts/Projects';

export default function Website() {
  return (
    <div className="min-h-screen-mobile tracking-wide bg-white dark:bg-gray-900 dark:text-white">
      <Nav />
      <div className="px-4 md:ml-64">
        <About />
        <Projects />
      </div>
    </div>
  );
}
