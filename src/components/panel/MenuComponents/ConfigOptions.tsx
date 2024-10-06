import GlobalStore, { Store } from "@/lib/context/GlobalStore";
import { useContext } from "react";
import Tooltip from "../SmallComponents/Tooltip";
import PanelThing from "../SmallComponents/PanelThing";
import classNames from "classnames";

const OPTIONS: Store["view"][] = ["Planets", "NEAs", "NECs", "PHAs"];

function ConfigOptions() {
    const [{ view }, updateStore] = useContext(GlobalStore);

    const forTooltip = [
        "Planets",
        "Near Earth Asteroids",
        "Near Earth Comets",
        "Potentially Hazardous Asteroids",
    ];

    const handleButtonClick = (option: Store["view"]) => {
        updateStore({
            view: option,
            neoSelected: null,
            selectedPlanet: null,
            showLabels: true,
            showOrbits: true,
            radialLines: true,
        });
    };

    return (
        <div className="grid grid-cols-2 gap-2">
            {OPTIONS.map((option, index) => (
                <PanelThing
                    key={option}
                    onClick={() => handleButtonClick(option)}
                    className={classNames(
                        "cursor-pointer text-center py-1 px-4 font-extrabold",
                        view === option
                            ? "bg-orange-600 bg-opacity-100"
                            : "hover:bg-orange-900",
                    )}
                >
                    <Tooltip tooltipText={forTooltip[index]}>
                        <button className="w-full text-center">{option}</button>
                    </Tooltip>
                </PanelThing>
            ))}
        </div>
    );
}

export default ConfigOptions;
