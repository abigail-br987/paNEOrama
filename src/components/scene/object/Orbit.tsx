import { useMemo } from 'react';
import { Line } from '@react-three/drei';
import { Vector3 } from 'three';

interface OrbitProps {
  points: Vector3[];
  objectPosition?: Vector3;
  colored?: boolean;
  color?: string;
  opacity?: number;
  transparent: boolean;
  width?: number;
}

const computeColors = (
  points: Vector3[],
  movingObjectPosition?: Vector3,
  closeColor = { r: 238, g: 58, b: 12 },
  farColor = { r: 255, g: 255, b: 255 }
): string[] => {
  if (!movingObjectPosition) {
    return Array(points.length).fill('white');
  }

  const distances = points.map(point =>
    (point as any).distanceTo(movingObjectPosition as any)
  );
  const minDistance = Math.min(...distances);
  const maxDistance = Math.max(...distances);
  const range = maxDistance - minDistance;

  return distances.map(distance => {
    const normalizedDistance =
      range === 0 ? 0 : (distance - minDistance) / range;
    const r = Math.floor(
      (1 - normalizedDistance) * closeColor.r + normalizedDistance * farColor.r
    );
    const g = Math.floor(
      (1 - normalizedDistance) * closeColor.g + normalizedDistance * farColor.g
    );
    const b = Math.floor(
      (1 - normalizedDistance) * closeColor.b + normalizedDistance * farColor.b
    );

    return `rgb(${r}, ${g}, ${b})`;
  });
};

export const Orbit: React.FC<OrbitProps> = ({
  points,
  objectPosition,
  colored = false,
  color,
  transparent = false,
  opacity = 1,
  width = 2,
}) => {
  const colors = useMemo(() => {
    if (color) {
      return Array(points.length).fill(color);
    }
    if (!colored) {
      return Array(points.length).fill('white');
    }
    return computeColors(points, objectPosition);
  }, [points, objectPosition, colored, color]);

  return (
    <>
      {points.slice(0, points.length - 1).map((point: any, i: number) => (
        <Line
          key={i}
          points={[point, points[i + 1]]}
          color={colors[i]}
          lineWidth={width}
          transparent={transparent}
          opacity={opacity}
        />
      ))}
    </>
  );
};
