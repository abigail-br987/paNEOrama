import CheckboxOption from '../SmallComponents/CheckboxOption';
import { useContext } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import { useState } from 'react';
import { useEffect } from 'react';

interface SeeAllObjectsProps {
  view: string;
}

const SeeAllObjects: React.FC<SeeAllObjectsProps> = ({ view }) => {
  const [{ seeAllObjects }, updateStore] = useContext(GlobalStore);
  const [isChecked, setIsChecked] = useState(seeAllObjects);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    updateStore({ seeAllObjects: checked, controls: { isPaused: true } });
  };

  useEffect(() => {
    setIsChecked(false);
    updateStore({ seeAllObjects: false, controls: { isPaused: true } });
  }, [view]);

  return (
    <CheckboxOption
      name="see"
      checked={isChecked}
      onChange={handleCheckboxChange}
      label={`Panorama: See All ${view}`}
    />
  );
};

export default SeeAllObjects;
