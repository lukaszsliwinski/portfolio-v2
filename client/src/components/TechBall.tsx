import { Decal, Float, useTexture } from '@react-three/drei';

// TechBall component to render a 3D geometry with a decal
export default function TechBall({ techIcon }: { techIcon: string }) {
    // Loading the texture for the decal using the provided techIcon URL
  const [decal] = useTexture([techIcon]);

  return (
    <Float speed={4.5} rotationIntensity={0.15}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[-0.2, 0.3, 0.45]} />
      <mesh scale={1.8}>
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial color="#607785" />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={[0.7, 0.7, 0.7]}
          map={decal}
        />
      </mesh>
    </Float>
  );
}
