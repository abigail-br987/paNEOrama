import React, { memo } from 'react';
import { Bloom, EffectComposer, Noise } from '@react-three/postprocessing';

const Light: React.FC = memo(() => {
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[150, 150, 150]} intensity={1} />
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.6}
          intensity={0.3}
          luminanceSmoothing={1}
        />
      </EffectComposer>
    </>
  );
});

export default Light;