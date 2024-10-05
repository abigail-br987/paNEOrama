import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';

const SpaceControls = () => {
  const controlsRef2 = useRef<any>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (controlsRef2.current) {
      const controls = controlsRef2.current;
      camera.position.set(2800, 1300, 0);
      camera.lookAt(0, 0, 0);
      controls.target.set(0, 0, 0);
      controls.update();
    }
  }, []);

  return (
    <>
      <OrbitControls
        ref={controlsRef2}
        enableZoom={true}
        minDistance={1000}
        maxDistance={60000}
        zoomSpeed={3}
        enablePan={true}
        minPolarAngle={degToRad(0)}
        maxPolarAngle={degToRad(180)}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
      />
    </>
  );
};

export default SpaceControls;
