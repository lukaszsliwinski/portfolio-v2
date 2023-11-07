// packages
import { useTranslation } from 'react-i18next';

// profile photo
import profilePhoto from '../assets/img/profile.jpg';

export default function Landing() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <div className="h-screen-mobile bg-wallpaper1 top-0 bg-cover bg-fixed bg-center" id="home">
      <section className="bg-main-dark/30 flex h-full min-h-screen w-screen flex-col items-center justify-center space-y-6 text-neutral-200">
        <img
          className="xs:w-36 w-32 rounded-full shadow-2xl sm:w-40 lg:w-44"
          src={profilePhoto}
          alt="profile photo"
        />
        <hgroup className="flex flex-col items-center space-y-2 tracking-widest">
          <h1 className="2xs:text-3xl xs:text-4xl text-2xl font-medium sm:text-5xl lg:text-6xl">
            ŁUKASZ ŚLIWIŃSKI
          </h1>
          <h2 className="2xs:text-lg xs:text-xl text-base sm:text-2xl lg:text-3xl">
            FRONT-END DEVELOPER
          </h2>
        </hgroup>

        <a
          href="#about"
          className="hover:text-main-dark m-1 inline-flex items-center rounded-lg border border-neutral-200 px-3 py-2 text-center text-sm font-medium text-neutral-200 hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-200"
        >
          <span>{t('about')}</span>
        </a>
      </section>
    </div>
  );
}
