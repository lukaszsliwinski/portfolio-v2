// packages
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Decal, Float, useTexture } from "@react-three/drei";
import { useTranslation } from 'react-i18next';

// technologies icons
import javaScript from '../assets/svg/javascript.svg';
import typeScript from '../assets/svg/typescript.svg';
import react from '../assets/svg/react.svg';
import angular from '../assets/svg/angular.svg';
import redux from '../assets/svg/redux.svg';
import tailwind from '../assets/svg/tailwind.svg';
import flowbite from '../assets/img/flowbite.png';
import bootstrap from '../assets/svg/bootstrap.svg';
import jQuery from '../assets/svg/jquery.svg';
import testingLibrary from '../assets/img/testing-library.png';
import node from '../assets/svg/node.svg';
import php from '../assets/svg/php.svg';
import mongo from '../assets/svg/mongo.svg';
import mySql from '../assets/svg/mysql.svg';
import git from '../assets/svg/git.svg';

// ball 3d geometry
function Geometry({ techIcon }: { techIcon: string }) {
  const [decal] = useTexture([techIcon]);

  return (
    <Float speed={4.5} rotationIntensity={.5} floatIntensity={.3}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial
          color="#f5f5f5"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={[.7, .7, .7]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

// ball component
function TechBall({ techIcon }: { techIcon: string }) {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <Geometry techIcon={techIcon}/>
    </Canvas>
  );
}

export default function Technologies() {
  // useTranslation fn
  const { t } = useTranslation();

  return (
    <div
      className="h-screen-mobile top-0 bg-cover bg-fixed bg-center bg-wallpaper2"
      id="technologies"
    >
      <section className="flex flex-col justify-center items-center h-full min-h-screen bg-main-dark/50 text-neutral-200">
        <h2 className="text-2xl font-medium">{t('stack')}</h2>
        <div className="mt-1 h-0.5 w-6 rounded bg-main-light"></div>
        <div className="flex flex-wrap justify-center h-fit max-w-[1000px]">
          <div className="w-36 h-36"><TechBall techIcon={javaScript} /></div>
          <div className="w-36 h-36"><TechBall techIcon={typeScript} /></div>
          <div className="w-36 h-36"><TechBall techIcon={react} /></div>
          <div className="w-36 h-36"><TechBall techIcon={angular} /></div>
          <div className="w-36 h-36"><TechBall techIcon={redux} /></div>
          <div className="w-36 h-36"><TechBall techIcon={tailwind} /></div>
          <div className="w-36 h-36"><TechBall techIcon={flowbite} /></div>
          <div className="w-36 h-36"><TechBall techIcon={bootstrap} /></div>
          <div className="w-36 h-36"><TechBall techIcon={jQuery} /></div>
          <div className="w-36 h-36"><TechBall techIcon={testingLibrary} /></div>
        </div>
        <div className="h-12"></div>
        <h2 className="text-2xl font-medium">{t('other')}</h2>
        <div className="mt-1 h-0.5 w-6 rounded bg-main-light"></div>
        <div className="flex flex-wrap justify-center h-fit max-w-[1000px]">
          <div className="w-36 h-36"><TechBall techIcon={node} /></div>
          <div className="w-36 h-36"><TechBall techIcon={php} /></div>
          <div className="w-36 h-36"><TechBall techIcon={mongo} /></div>
          <div className="w-36 h-36"><TechBall techIcon={mySql} /></div>
          <div className="w-36 h-36"><TechBall techIcon={git} /></div>
        </div>
      </section>
    </div>
  );
}
