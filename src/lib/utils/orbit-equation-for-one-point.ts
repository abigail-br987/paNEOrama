import { SCALE_FACTOR_ORBIT } from './constants';
import { AU_TO_KM } from '../../data/planet-data';
export function orbitEquationForOnePoint(
  a: number,
  e: number,
  θ: number,
  inclination: number,
  ω: number,
  Ω: number
) {
  const r = (a * AU_TO_KM * (1 - e * e)) / (1 - e * Math.cos(θ + Math.PI));
  const x = r * Math.cos(θ);
  const y = r * Math.sin(θ);
  // periapsis (ω)
  const x1 = x * Math.cos(ω) + y * Math.sin(ω);
  const y1 = -x * Math.sin(ω) + y * Math.cos(ω);
  // (i) rotation
  const z1 = y1 * Math.sin(inclination);
  const y2 = y1 * Math.cos(inclination);
  // ascending node (Ω)
  const x3 = x1 * Math.cos(Ω) + y2 * Math.sin(Ω);
  const y3 = -x1 * Math.sin(Ω) + y2 * Math.cos(Ω);

  return [
    x3 * SCALE_FACTOR_ORBIT,
    z1 * SCALE_FACTOR_ORBIT,
    -y3 * SCALE_FACTOR_ORBIT,
  ];
}
