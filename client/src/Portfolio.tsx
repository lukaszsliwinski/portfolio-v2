// packages
import 'flowbite';
import '@animxyz/core';

// components
import Nav from './layouts/Nav';
import Landing from './layouts/Landing';
import About from './layouts/About';
import Technologies from './layouts/Technologies';
import Projects from './layouts/Projects';

export default function Portfolio() {
  return (
    <main className="text-main-dark overflow-x-hidden bg-neutral-200 tracking-widest">
      <Nav />
      <Landing />
      <About />
      <Technologies />
      <Projects />
    </main>
  );
}
