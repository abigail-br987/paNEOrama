import React from 'react';
import { Line } from '@react-three/drei';
import GlobalStore from '@/lib/context/GlobalStore';
import { useContext } from 'react';
import { SCALE_FACTOR_ORBIT } from '@/lib/utils/constants';
import { AU_TO_KM } from '@/data/planet-data';

function Grid() {
  const [{ gridConfig }] = useContext(GlobalStore);

  const spacing =
    (gridConfig?.gridSpacing ?? 0) * SCALE_FACTOR_ORBIT * AU_TO_KM;
  const length = (gridConfig?.gridLength ?? 0) * SCALE_FACTOR_ORBIT * AU_TO_KM;

  if (!spacing || !length) return null;

  const center = length / 2;
  const lines = React.useMemo(() => {
    const result: JSX.Element[] = [];
    for (let i = -center; i <= center; i += spacing) {
      result.push(
        <Line
          key={`v-${i}`}
          points={[
            [-center, 0, i],
            [center, 0, i],
          ]}
          lineWidth={1}
          opacity={0.05}
          transparent
        />
      );
    }
    for (let j = -center; j <= center; j += spacing) {
      result.push(
        <Line
          key={`h-${j}`}
          points={[
            [j, 0, -center],
            [j, 0, center],
          ]}
          lineWidth={1}
          transparent
          opacity={0.05}
        />
      );
    }

    return result;
  }, [gridConfig.gridLength, gridConfig.gridSpacing]);

  return <>{lines}</>;
}

export default Grid;
