export const SCALE_FACTOR_OBJECT = 0.001;
export const SCALE_FACTOR_ORBIT = 0.000007;

export const SUN_RADIUS = 71492 * SCALE_FACTOR_OBJECT * 1; // sun is ten more times greater than jupiter


export type PlanetName =
  | 'Sun'
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

export const planetIds = {
  Sun: '10',
  Mercury: '199',
  Venus: '299',
  Earth: '399',
  Mars: '499',
  Jupiter: '599',
  Saturn: '699',
  Uranus: '799',
  Neptune: '899',
};
