import { useContext, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Sun from './object/Sun';
import GlobalStore from '@/lib/context/GlobalStore';
import Stars from './object/Stars';
import Light from './object/Light';
import Planets from './object/Planets';
import Grid from './object/Grid';
import AllObjects from './object/AllObjects';
import SmallCelestialObject from './object/SmallCelestialObject';
import NaveCanvas from './NaveCanvas';

const SolarSystem = () => {
  const [{ view, seeAllObjects, start }] = useContext(GlobalStore);

  return (
    <div className="absolute w-screen h-screen">
      <Suspense fallback={<div className="flex items-center justify-center w-full h-full text-white text-2xl">Loading...</div>}>
        <div className={`w-full h-full absolute`}>
          <Canvas
            gl={{ antialias: false }}
            frameloop="demand"
            camera={{
              position: [-1000, 500, 1000],
              near: 100,
              far: 100_000,
              fov: 45,
            }}
          >
            {start ? (
              <>
                <Grid />
                {view !== 'Planets' && <SmallCelestialObject />}
                {view !== 'Planets' && seeAllObjects && <AllObjects />}
              </>
            ) : (
              <NaveCanvas />
            )}
            <Sun />
            <Planets />
            <Stars number={80000} size={3} />
            <Light />
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
};

export default SolarSystem;
