import { useGLTF } from '@react-three/drei';
import { GroupProps } from 'react-select';
import { Mesh } from 'three';

const UranusModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/NASAmodels/uranus.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.Uranus as Mesh).geometry}
        material={materials['Default OBJ.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload('/NASAmodels/uranus.glb');

export default UranusModel;