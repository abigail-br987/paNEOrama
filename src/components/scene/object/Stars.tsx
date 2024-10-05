import { useMemo } from 'react';
import {
  BufferAttribute,
  BufferGeometry,
  MathUtils,
  PointsMaterial,
} from 'three';
interface Props {
  number?: number;
  size?: number;
}
const Stars = ({ number = 2000, size = 100 }: Props) => {
  const starsGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const starPositions = new Float32Array(number * 3);

    for (let i = 0; i < 2000; i++) {
      starPositions[i * 3] = MathUtils.randFloatSpread(number);
      starPositions[i * 3 + 1] = MathUtils.randFloatSpread(number);
      starPositions[i * 3 + 2] = MathUtils.randFloatSpread(number);
    }

    geometry.setAttribute('position', new BufferAttribute(starPositions, 3));
    return geometry;
  }, [number]);

  const starMaterial = useMemo(
    () => new PointsMaterial({ color: 'lightgray', size }),
    [size]
  );

  return <points args={[starsGeometry, starMaterial]} />;
};

export default Stars;
