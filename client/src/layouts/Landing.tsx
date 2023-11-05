// packages
import { useTranslation } from 'react-i18next';

// profile photo
import profilePhoto from '../assets/img/profile.jpg';

export default function Landing() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <div
      className="h-screen-mobile top-0 bg-cover bg-fixed bg-center bg-wallpaper1"
      id="home"
    >
      <section
      className="flex flex-col justify-center items-center space-y-6 h-full min-h-screen w-screen bg-main-dark/30 text-neutral-200"
      >
        <img
          className="w-44 rounded-full shadow-2xl"
          src={profilePhoto}
          alt="profile photo"
        />
        <hgroup className="flex flex-col items-center space-y-2 tracking-widest">
          <h1 className="text-6xl font-medium">ŁUKASZ ŚLIWIŃSKI</h1>
          <h2 className="text-3xl">FRONT-END DEVELOPER</h2>
        </hgroup>

        <a href="#about" className="m-1 inline-flex items-center rounded-lg border border-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-200 hover:text-main-dark hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-200">
          <span>{t('about')}</span>
        </a>
      </section>
    </div>
  );
}
