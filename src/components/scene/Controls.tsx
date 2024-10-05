import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { degToRad } from 'three/src/math/MathUtils.js';

const IntroControls = () => {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      camera.position.set(10000, 0, 0);
      camera.lookAt(10000, 0, 0);
      controls.target.set(10000, 0, 0);
      controls.update();
    }
  }, []);

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        rotateSpeed={0.1}
        enableZoom={false}
        zoomSpeed={0.5}
        enablePan={true}
        panSpeed={0.2}
        minDistance={5}
        maxDistance={6}
        minPolarAngle={degToRad(85)}
        maxPolarAngle={degToRad(95)}
        minAzimuthAngle={degToRad(80)}
        maxAzimuthAngle={degToRad(100)}
        enableDamping={true}
        dampingFactor={0.05}
        screenSpacePanning={false}
      />
      <directionalLight position={[10, 0, 0]} intensity={3} color={'orange'} />
      <ambientLight intensity={4} />
    </>
  );
};

export default IntroControls;
