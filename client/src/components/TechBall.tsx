import { Decal, Float, useTexture } from "@react-three/drei";

// tech ball 3d geometry
export default function TechBall({ techIcon }: { techIcon: string }) {
  const [decal] = useTexture([techIcon]);

  return (
    <Float speed={4.5} rotationIntensity={.15} >
      <ambientLight intensity={0.3} />
      <directionalLight position={[-.2, .3, 0.45]} />
      <mesh scale={2}>
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial color="#607785" />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={[.7, .7, .7]}
          map={decal}
        />
      </mesh>
    </Float>
  );
}
