import GlobalStore, { Store } from "@/lib/context/GlobalStore";
import { useContext } from "react";
import TitleOptions from "../SmallComponents/TitleOption";
import { useMemo } from "react";
import { useCallback } from "react";
import Tooltip from "../SmallComponents/Tooltip";
import PanelThing from "../SmallComponents/PanelThing";

function ConfigOptions() {
  const [{ view }, updateStore] = useContext(GlobalStore);
  const options: Store["view"][] = useMemo(
    () => ["Planets", "NEAs", "NECs", "PHAs"],
    []
  );

  const forTooltip = [
    "Planets",
    "Near Earth Asteroids",
    "Near Earth Comets",
    "Potentially Hazardous Asteroids",
  ];

  const handleButtonClick = useCallback(
    (option: Store["view"]) => {
      updateStore({
        view: option,
        neoSelected: null,
        selectedPlanet: null,
        showLabels: true,
        showOrbits: true,
        radialLines: true,
      });
    },
    [updateStore]
  );

  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((option, index) => {
        const className =
          view === option ? "bg-orange-600 cursor-pointer" : "cursor-pointer";
        const tooltipText = forTooltip[index];
        return (
          <PanelThing
            key={option}
            onClick={() => handleButtonClick(option)}
            className={className}
          >
            <TitleOptions>
              <Tooltip tooltipText={tooltipText}>
                <button>{option}</button>
              </Tooltip>
            </TitleOptions>
          </PanelThing>
        );
      })}
    </div>
  );
}

export default ConfigOptions;
