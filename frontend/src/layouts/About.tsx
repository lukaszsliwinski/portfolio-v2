// packages
import { useTranslation } from 'react-i18next';

// technologies icons
import { ReactComponent as JavaScript } from '../assets/svg/javascript.svg';
import { ReactComponent as TypeScript } from '../assets/svg/typescript.svg';
import { ReactComponent as React } from '../assets/svg/react.svg';
import { ReactComponent as Redux } from '../assets/svg/redux.svg';
import { ReactComponent as Tailwind } from '../assets/svg/tailwind.svg';
import flowbitePng from '../assets/img/flowbite.png';
import { ReactComponent as Bootstrap } from '../assets/svg/bootstrap.svg';
import { ReactComponent as JQuery } from '../assets/svg/jquery.svg';
import { ReactComponent as Node } from '../assets/svg/node.svg';
import { ReactComponent as Mongo } from '../assets/svg/mongo.svg';
import { ReactComponent as MySql } from '../assets/svg/mysql.svg';
import { ReactComponent as Git } from '../assets/svg/git.svg';

// link icons
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg';
import { ReactComponent as GitHub } from '../assets/svg/github.svg';

// profile photo
import profilePhoto from '../assets/img/profile.jpg';

// components
import Badge from '../components/Badge';

export default function About() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <section className="max-w-[70rem] mx-auto h-full min-h-screen px-20" id="about">
      <header className="flex flex-col items-center w-full mb-12">
        <h2 className="text-5xl font-normal dark:text-white">{t('about')}</h2>
        <div className="w-10 h-1 mt-4 rounded bg-yellow-800"></div>
      </header>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h3 className="text-lg mb-1 font-medium">{t('about')}</h3>
          <article className="text-justify">
            <img className="w-28 float-left rounded-sm  mr-2 mt-2 shadow-sm" src={profilePhoto} alt="profile photo"/>
            Jestem programistą aplikacji internetowych specjalizującym się we frontendzie.
            W trakcie samodzielnej nauki poznałem takie technologie jak JavaScript, React, Bootstrap i Node.js.
            W ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy tworzenia frontend-u i backend-u aplikacji,
            sposoby komunikacji między nimi, bazy danych, tworzenie szablonów responsywnych i system kontroli wersji.
            Obecnie doskonalę swoje umiejętności pracując jako Junior Frontend Developer i uczę się nowych technologii po godzinach.

            Napisać kilka słów nt używanych technologii oraz wykonanych projektów
          </article>
          <div className="flex justify-evenly w-72 mx-auto my-6">
            <a href="https://www.linkedin.com/in/lsliwinski/" target="_blank" rel="noopener noreferrer" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              LinkedIn
              <LinkedIn className="h-4 w-4 ml-2" aria-hidden="true" />
            </a>
            <a href="https://github.com/lukaszsliwinski/" target="_blank" rel="noopener noreferrer"  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              GitHub
              <GitHub className="h-4 w-4 ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mb-2">
          <h3 className="text-lg mb-1 font-medium">Frontend stack</h3>
          <div className="flex flex-wrap mb-3">
            <Badge icon={<TypeScript className="w-6 h-6" />} label={'TypeScript'} />
            <Badge icon={<JavaScript className="w-6 h-6" />} label={'JavaScript'} />
            <Badge icon={<React className="w-6 h-6" />} label={'React.js'} />
            <Badge icon={<Redux className="w-6 h-6" />} label={'Redux'} />
            <Badge icon={<Tailwind className="w-6 h-6" />} label={'Tailwindcss'} />
            <Badge icon={<img src={flowbitePng} className="w-6 h-6" />} label={'Flowbite'} />
            <Badge icon={<Bootstrap className="w-6 h-6" />} label={'Bootstrap'} />
            <Badge icon={<JQuery className="w-6 h-6" />} label={'jQuery'} />
          </div>
          <h3 className="text-lg mb-1 font-medium">Other</h3>
          <div className="flex flex-wrap mb-3">
            <Badge icon={<Node className="w-6 h-6" />} label={'Node.js'} />
            <Badge icon={<Mongo className="w-6 h-6" />} label={'MongoDB'} />
            <Badge icon={<MySql className="w-6 h-6" />} label={'MySQL'} />
            <Badge icon={<Git className="w-6 h-6" />} label={'Git'} />
          </div>
        </div>
      </div>
    </section>
  );
}
