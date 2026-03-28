import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Simple Earth substitute using a sphere with gradient
const EarthMesh = () => (
  <mesh>
    <sphereGeometry args={[1.5, 64, 64]} />
    <meshPhongMaterial
      color="#1a6b9e"
      emissive="#0a2040"
      specular="#4fc3f7"
      shininess={30}
    />
  </mesh>
);

const EarthCanvas = () => (
  <Canvas
    shadows
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
  >
    <Suspense fallback={null}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4fc3f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7c4dff" />
      <EarthMesh />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default EarthCanvas;
