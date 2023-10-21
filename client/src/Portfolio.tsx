// packages
import 'flowbite';
import '@animxyz/core';

// components
import Nav from './layouts/Nav';
import Landing from './layouts/Landing';
import About from './layouts/About';
import Technologies from './layouts/Technologies';
import Projects from './layouts/Projects';
import Footer from './layouts/Footer';

export default function Portfolio() {
  return (
    <main className="overflow-x-hidden tracking-wider text-main-dark bg-neutral-200">
      <Nav />
      <Landing />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  );
}
