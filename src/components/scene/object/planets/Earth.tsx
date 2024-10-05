import { useGLTF } from '@react-three/drei';
import { GroupProps } from 'react-select';
import { Mesh } from 'three';

const EarthModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/NASAmodels/earth.glb');
  const mesh = nodes.Cube001 as Mesh;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={mesh.geometry} material={materials['Default OBJ']} />
    </group>
  );
};

useGLTF.preload('/NASAmodels/earth.glb');

export default EarthModel;
