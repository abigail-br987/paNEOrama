import { useMemo } from 'react';
import { Line } from '@react-three/drei';
import { BufferAttribute, BufferGeometry, Vector3 } from 'three';

export interface Props {
  points: Vector3[];
  objectPosition?: Vector3;
  colored?: boolean;
  color?: string;
  opacity?: number;
}

const computeColors = (
  points: Vector3[],
  objectPosition: Vector3,
  closeColor: { r: number; g: number; b: number } = { r: 238, g: 58, b: 12 },
  farColor: { r: number; g: number; b: number } = { r: 255, g: 255, b: 255 }
): string[] => {
  const distances = points.map(point => point.distanceTo(objectPosition));
  const minDistance = Math.min(...distances);
  const maxDistance = Math.max(...distances);
  const range = maxDistance - minDistance || 1;

  return distances.map(distance => {
    const normalizedDistance = (distance - minDistance) / range;
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

export const HelpfulLines: React.FC<Props> = ({
  points,
  objectPosition,
  colored = false,
  color,
  opacity = 0.4,
}) => {
  const colors = useMemo(() => {
    if (color) return Array(points.length).fill(color);
    if (!colored || !objectPosition) return Array(points.length).fill('white');
    return computeColors(points, objectPosition);
  }, [points, objectPosition, colored, color]);

  const { lines, pointPositions } = useMemo(() => {
    const zeroYVector = new Vector3();
    const lines = points.map(point => {
      zeroYVector.set(point.x, 0, point.z);
      return [point, zeroYVector.clone()] as const;
    });

    const geometry = new BufferGeometry();
    const positions = new Float32Array(lines.length * 6);

    lines.forEach(([, end], index) => {
      const offset = index * 6;
      positions.set([end.x, end.y, end.z], offset);
    });
    geometry.setAttribute('position', new BufferAttribute(positions, 3));

    return { lines, pointPositions: geometry };
  }, [points]);

  return (
    <>
      {lines.map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color={colors[i]}
          lineWidth={1}
          transparent
          opacity={opacity}
        />
      ))}
      <points>
        <bufferGeometry attach="geometry" {...pointPositions} />
        <pointsMaterial
          attach="material"
          size={30}
          sizeAttenuation
          transparent
          opacity={opacity}
        />
      </points>
    </>
  );
};
