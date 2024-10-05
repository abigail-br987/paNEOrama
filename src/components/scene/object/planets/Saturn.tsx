import { useGLTF } from '@react-three/drei';
import { GroupProps } from 'react-select';
import { Mesh } from 'three';

const SaturnModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/NASAmodels/saturn.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.Saturn001 as Mesh).geometry}
        material={materials.None}
      />
      <mesh
        geometry={(nodes.RingsTop as Mesh).geometry}
        material={materials.SaturnRings}
      />
      <mesh
        geometry={(nodes.RingsBottom as Mesh).geometry}
        material={materials.SaturnRings}
      />
    </group>
  );
};

useGLTF.preload('/NASAmodels/saturn.glb');

export default SaturnModel;
