import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function Carpet({ imageUrl }) {
  const ref = useRef();
  
  // بارگذاری عکسی که از والد (GalleryApp) پاس داده می‌شود
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  const aspect = texture.image.width / texture.image.height;
  const width = 3;
  const depth = width / aspect;

  return (
    <mesh ref={ref} position={[0, 0.03, 0]} castShadow receiveShadow>
      <boxGeometry args={[width, 0.06, depth]} />
      <meshStandardMaterial map={texture} roughness={0.95} metalness={0.05} />
    </mesh>
  );
}

export default function Scene3D({ imageUrl }) {
  return (
    <div style={{ width: '100%', height: '600px', borderRadius: '12px', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 4, 6], fov: 45 }} shadows>
        <ambientLight intensity={0.4} />
        <spotLight position={[0, 9, 2]} angle={0.7} penumbra={0.6} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
        <pointLight position={[5, 4, 4]} intensity={0.5} />
        <pointLight position={[-5, 4, -3]} intensity={0.3} />

        {/* key={imageUrl} باعث می‌شود با تغییر عکس، فرش جدید به نرمی لود شود */}
        <Suspense fallback={null}>
          <Carpet key={imageUrl} imageUrl={imageUrl} />
        </Suspense>

        <ContactShadows position={[0, -0.02, 0]} opacity={0.6} scale={15} blur={2.5} far={4} />
        <OrbitControls enablePan={false} minPolarAngle={0.2} maxPolarAngle={Math.PI / 2.2} minDistance={2} maxDistance={12} />
      </Canvas>
    </div>
  );
}