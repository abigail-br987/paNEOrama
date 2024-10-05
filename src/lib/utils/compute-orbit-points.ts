import { Vector3 } from 'three';
import { orbitEquationForOnePoint } from './orbit-equation-for-one-point';
import { degToRad } from 'three/src/math/MathUtils.js';

export const computeOrbitPoints = (
  a: number,
  e: number,
  i: number,
  w: number,
  om: number
): Vector3[] => {
  if (a == null || e == null || i == null || w == null || om == null) {
    return [];
  }
  const iRad = degToRad(i);
  const wRad = degToRad(w);
  const omRad = degToRad(om);
  const pointsArray: Vector3[] = [];
  const baseStep = 0.1;
  const eccentricityFactor = Math.max(0.1, 1 - e);
  const step = baseStep * eccentricityFactor;
  const fullCircle = 2 * Math.PI;
  for (let θ = 0; θ < fullCircle; θ += step) {
    const position = orbitEquationForOnePoint(a, e, θ, iRad, wRad, omRad);
    pointsArray.push(new Vector3(position[0], position[1], position[2]));
  }
  const finalPosition = orbitEquationForOnePoint(a, e, 0, iRad, wRad, omRad);
  pointsArray.push(
    new Vector3(finalPosition[0], finalPosition[1], finalPosition[2])
  );
  return pointsArray;
};
