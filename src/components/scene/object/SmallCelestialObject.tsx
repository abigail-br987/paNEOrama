import { useContext } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import nAsteroidsData from '../../../data/neas_.json';
import pAsteroidsData from '../../../data/phas_.json';
import CometsData from '../../../data/necs_.json';
import { useEffect } from 'react';
import { keplerSolve } from '@/lib/utils/math';
import { Vector3 } from 'three';
import { trueAnom } from '@/lib/utils/math';
import { useState } from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';
import { useMemo } from 'react';
import { HelpfulLines } from './HelpfulLines';
import { Orbit } from './Orbit';
import { Object } from './Object';
import { computeOrbitPoints } from '@/lib/utils/compute-orbit-points';
import { orbitEquationForOnePoint } from '@/lib/utils/orbit-equation-for-one-point';

const SmallCelestialObject = () => {
  const [
    {
      neoSelected,
      view,
      selectedObjectData,
      currentDate,
      radialLines,
      showOrbits: orbits,
      showLabels: labels,
    },
    updateStore,
  ] = useContext(GlobalStore);
  const [objectData, setObjectData] = useState<any>(null);

  useEffect(() => {
    const dataMap = {
      PHAs: pAsteroidsData as any,
      NEAs: nAsteroidsData as any,
      NECs: CometsData,
      Planets: null,
    };
    setObjectData((dataMap[view] as any) || null);
  }, [view]);

  useEffect(() => {
    if (objectData && neoSelected) {
      updateStore({ selectedObjectData: objectData[neoSelected] });
    } else {
      updateStore({ selectedObjectData: null });
    }
  }, [neoSelected, view]);

  const orbitPoints = useMemo(() => {
    if (!selectedObjectData) return [];
    return computeOrbitPoints(
      selectedObjectData.a,
      selectedObjectData.e,
      selectedObjectData.i,
      selectedObjectData.w,
      selectedObjectData.om
    );
  }, [selectedObjectData]);

  const objectPosition = useMemo(() => {
    if (!neoSelected || !selectedObjectData) return new Vector3();
    const targetDate = currentDate.getTime() / 86400000 + 2440587.5;
    const daysSinceEpoch = targetDate - selectedObjectData.epoch;
    const effectiveMeanMotion =
      selectedObjectData?.n ??
      (selectedObjectData?.per_y
        ? (2 * Math.PI) / selectedObjectData.per_y
        : 0);
    const meanAnomalyAtTargetDate =
      selectedObjectData.ma + effectiveMeanMotion * daysSinceEpoch;
    const E = -keplerSolve(selectedObjectData.e, meanAnomalyAtTargetDate, 5);
    const θ = degToRad(TrueAnom(selectedObjectData.e, E, 5));

    const [x, y, z] = orbitEquationForOnePoint(
      selectedObjectData.a,
      selectedObjectData.e,
      θ,
      degToRad(selectedObjectData.i),
      degToRad(selectedObjectData.w),
      degToRad(selectedObjectData.om)
    );
    return new Vector3(x, y, z);
  }, [currentDate, selectedObjectData]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {neoSelected && selectedObjectData && orbitPoints && (
        <>
          {orbits && (
            <Orbit
              points={orbitPoints}
              objectPosition={objectPosition}
              transparent={true}
              colored={isHovered}
            />
          )}
          {radialLines && (
            <HelpfulLines
              points={orbitPoints}
              objectPosition={objectPosition}
              colored={isHovered}
            />
          )}
          <Object
            objectPosition={objectPosition}
            name={selectedObjectData.full_name}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            labels={labels}
          />
        </>
      )}
    </>
  );
};

export default SmallCelestialObject;
