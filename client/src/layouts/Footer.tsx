import moment from 'moment';

export default function Footer() {
  const year = moment().year();

  return (
    <footer className="w-100 mb-2 mt-8 text-center text-xs">&copy; 2023-{year} ŁUKASZ ŚLIWIŃSKI</footer>
  );
}
