import { useGLTF } from '@react-three/drei';
import { GroupProps } from 'react-select';
import { Mesh } from 'three';

const MarsModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/NASAmodels/mars.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.Cube008 as Mesh).geometry}
        material={materials['Default OBJ.005']}
      />
    </group>
  );
};

useGLTF.preload('/NASAmodels/mars.glb');

export default MarsModel;
