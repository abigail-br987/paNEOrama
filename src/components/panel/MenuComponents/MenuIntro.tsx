import { useMemo, useContext } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import TitleOptions from '../SmallComponents/TitleOption';
function MenuIntro() {
  const [{ view }] = useContext(GlobalStore);

  const menuName = useMemo(() => {
    switch (view) {
      case 'PHAs':
        return 'POTENTIALLY HAZARDOUS ASTEROIDS';
      case 'NEAs':
        return 'NEAR EARTH ASTEROIDS';
      case 'NECs':
        return 'NEAR EARTH COMETS';
      default:
        return 'PLANETS';
    }
  }, [view]);

  return <TitleOptions>{menuName}</TitleOptions>;
}

export default MenuIntro;
