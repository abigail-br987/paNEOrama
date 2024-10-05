import { useGLTF } from '@react-three/drei';
import { GroupProps } from 'react-select';
import { Mesh } from 'three';

const JupiterModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/NASAmodels/jupiter.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.cubemap as Mesh).geometry}
        material={materials.None}
      />
    </group>
  );
};

useGLTF.preload('/NASAmodels/jupiter.glb');

export default JupiterModel;
