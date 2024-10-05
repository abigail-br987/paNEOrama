import { useGLTF } from '@react-three/drei';
import { GroupProps } from 'react-select';
import { Mesh } from 'three';

const NeptuneModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/NASAmodels/neptune.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.Neptune as Mesh).geometry}
        material={materials['Default OBJ.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload('/NASAmodels/neptune.glb');

export default NeptuneModel;
