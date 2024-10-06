import { useContext } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import nAsteroidsData from '../../../data/neas_.json';
import pAsteroidsData from '../../../data/phas_.json';
import CometsData from '../../../data/necs_.json';
import { keplerSolve } from '@/lib/utils/math';
import { trueAnom } from '@/lib/utils/math';
import { orbitEquationForOnePoint } from '@/lib/utils/orbit-equation-for-one-point';
import { InstancedMesh, Vector3 } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { Html } from '@react-three/drei';
import { Object3D } from 'three';
import { useState } from 'react';
import { useEffect } from 'react';
import { Color } from 'three';
import { useRef } from 'react';

const tempObject = new Object3D();
const tempColor = new Color();

const AllObjects = () => {
  const [{ view, currentDate, allFilteredNames }, updateStore] =
    useContext(GlobalStore);
  const [hovered, setHovered] = useState(null);

  const objectData = useMemo(() => {
    const data = {
      PHAs: pAsteroidsData,
      NEAs: nAsteroidsData,
      NECs: CometsData,
    };
    // @ts-ignore
    return data[view] || {};
  }, [view]);

  const filteredObjects = useMemo(() => {
    return Object.keys(objectData).reduce((acc, fullName) => {
      if (allFilteredNames.includes(fullName)) {
        // @ts-ignore
        acc[fullName] = objectData[fullName];
      }
      return acc;
    }, {});
  }, [objectData, allFilteredNames]);

  const colorArray = useMemo(() => {
    const colors = Object.keys(filteredObjects)
      .map(() => tempColor.set('#cdcdcd').toArray())
      .flat();
    return Float32Array.from(colors);
  }, [filteredObjects]);

  const objectPosition = useCallback(
    (obj: any) => {
      if (!obj) return new Vector3();

      const targetDate = currentDate.getTime() / 86400000 + 2440587.5;
      const daysSinceEpoch = targetDate - obj.epoch;
      const effectiveMeanMotion =
        obj.n || (obj.per_y ? (2 * Math.PI) / obj.per_y : 0);
      const meanAnomalyAtTargetDate =
        obj.ma + effectiveMeanMotion * daysSinceEpoch;
      const E = -keplerSolve(obj.e, meanAnomalyAtTargetDate, 5);
      const θ = degToRad(trueAnom(obj.e, E, 5));

      const [x, y, z] = orbitEquationForOnePoint(
        obj.a,
        obj.e,
        θ,
        degToRad(obj.i),
        degToRad(obj.w),
        degToRad(obj.om)
      );

      return new Vector3(x, y, z);
    },
    [currentDate]
  );

  const meshRef = useRef<InstancedMesh>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh || Object.keys(filteredObjects).length === 0) return;

    Object.keys(filteredObjects).forEach((key, index) => {
      // @ts-ignore
      const obj = filteredObjects[key];
      const pos = objectPosition(obj);
      tempObject.position.copy(pos);
      tempObject.updateMatrix();
      // @ts-ignore
      mesh.setMatrixAt(index, tempObject.matrix);
    });
    // @ts-ignore
    mesh.instanceMatrix.needsUpdate = true;
  }, [filteredObjects, objectPosition]);
  // @ts-ignore
  const handleClick = useCallback(
    (fullName: string) => {
      updateStore({ neoSelected: fullName });
    },
    [updateStore]
  );

  return (
    <>
      <instancedMesh
        ref={meshRef}
        // @ts-ignore
        args={[null, null, Object.keys(filteredObjects).length]}
        // @ts-ignore
        onPointerMove={e => setHovered(e.instanceId)}
      >
        <sphereGeometry args={[35, 6, 6]}>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[colorArray, 3]}
          />
        </sphereGeometry>
        <meshBasicMaterial toneMapped={false} vertexColors />
      </instancedMesh>

      {Object.keys(filteredObjects).map((key, index) => {
        // @ts-ignore
        const obj = filteredObjects[key];
        const pos = objectPosition(obj);
        const isHovered = hovered === index;

        return (
          <group key={key} position={pos}>
            {isHovered && (
              <Html
                center
                zIndexRange={[0, 0]}
                className="group relative cursor-pointer select-none"
              >
                <div
                  className="p-2"
                  onPointerOut={() => setHovered(null)}
                  onClick={() => handleClick(key)}
                >
                  <p className="absolute bottom-5 text-xs rounded-md bg-white text-black border border-white text-center -translate-x-1/2 p-1">
                    {key}
                  </p>
                  <span className="absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-orange-600 rounded-full"></span>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </>
  );
};

export default AllObjects;
