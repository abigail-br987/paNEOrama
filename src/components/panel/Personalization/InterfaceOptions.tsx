import { useState } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import { useContext } from 'react';
import PanelThing from '../SmallComponents/PanelThing';
import TitleOptions from '../SmallComponents/TitleOption';
import Dropdown from '../SmallComponents/Dropdown';
import CheckboxOption from '../SmallComponents/CheckboxOption';
import GridSettings from './GridSettings';
import { BsFillGearFill } from 'react-icons/bs';

function InterfaceOptions() {
  const [options, setOptions] = useState({
    grid: false,
    radialLines: true,
    labels: true,
    orbits: true,
  });

  const [{ gridConfig }, updateStore] = useContext(GlobalStore);
  const [gridLength, setGridLength] = useState(gridConfig?.gridLength || 10);
  const [gridSpacing, setGridSpacing] = useState(gridConfig?.gridSpacing || 1);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setOptions(prevOptions => ({
      ...prevOptions,
      [name]: checked,
    }));

    if (name === 'grid') {
      updateStore({
        gridConfig: {
          ...gridConfig,
          gridLength: checked ? gridLength : null,
          gridSpacing: checked ? gridSpacing : null,
        },
      });
    }
    if (name === 'labels') {
      updateStore({ showLabels: checked });
    }
    if (name === 'orbits') {
      updateStore({ showOrbits: checked });
    }
    if (name === 'radialLines') {
      updateStore({ radialLines: checked });
    }
  };

  const handleGridLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newGridLength = Number(event.target.value);
    setGridLength(newGridLength);
    updateStore({ gridConfig: { ...gridConfig, gridLength: newGridLength } });
  };

  const handleGridSpacingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newGridSpacing = Number(event.target.value);
    setGridSpacing(newGridSpacing);
    updateStore({ gridConfig: { ...gridConfig, gridSpacing: newGridSpacing } });
  };

  return (
    <PanelThing className="px-2">
      <Dropdown
        center={true}
        name={
          <TitleOptions className="font-extrabold">
            <div className="inline-flex items-center text-center">
              Config &nbsp;
              <BsFillGearFill />
            </div>
          </TitleOptions>
        }
        options={
          <div className="flex flex-col items-center p-3 space-y-2 border-t">
            <CheckboxOption
              name="grid"
              checked={options.grid}
              onChange={handleOptionChange}
              label="Grid"
            />
            {options.grid && (
              <GridSettings
                gridLength={gridLength}
                gridSpacing={gridSpacing}
                onGridLengthChange={handleGridLengthChange}
                onGridSpacingChange={handleGridSpacingChange}
              />
            )}
            <CheckboxOption
              name="radialLines"
              checked={options.radialLines}
              onChange={handleOptionChange}
              label="Lines"
            />
            <CheckboxOption
              name="labels"
              checked={options.labels}
              onChange={handleOptionChange}
              label="Labels"
            />
            <CheckboxOption
              name="orbits"
              checked={options.orbits}
              onChange={handleOptionChange}
              label="Orbits"
            />
          </div>
        }
      />
    </PanelThing>
  );
}
export default InterfaceOptions;
