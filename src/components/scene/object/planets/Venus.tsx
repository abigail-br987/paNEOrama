import { useGLTF } from '@react-three/drei';
import { GroupProps } from 'react-select';
import { Mesh } from 'three';

const VenusModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/NASAmodels/venus.glb');
  const mesh = nodes.cylindrically_mapped_sphereMesh as Mesh;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={mesh.geometry} material={materials['Default OBJ']} />
    </group>
  );
};

useGLTF.preload('/NASAmodels/venus.glb');

export default VenusModel;
