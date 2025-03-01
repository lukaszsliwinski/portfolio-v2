import moment from 'moment';

export default function Footer() {
  const year = moment().year();

  return (
    <footer className="w-screen text-center mb-2 mt-8 text-xs">
      &copy; 2023-{year} ŁUKASZ ŚLIWIŃSKI
    </footer>
  );
}
