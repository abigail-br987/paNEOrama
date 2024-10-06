import ConfigOptions from "./ConfigOptions";
import { useContext } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import ObjectList from "./ObjectList";
import ControlDate from "./ControlDate";
import MenuIntro from "./MenuIntro";
import ObjectInfo from "../InfoPanel/ObjectInfo";
import CloseApproaches from "../CloseApproaches";
import InterfaceOptions from "../Personalization/InterfaceOptions";
import OrbitSimulator from "../OrbitSimulator";
import LargePanel from "../SmallComponents/LargePanel";
import PanelThing from "../SmallComponents/PanelThing";
import ObservableNeos from "../ObservableNeos";
import PlanetInfo from "../InfoPanel/PlanetInfo";
import TitleOptions from "../SmallComponents/TitleOption";
import SeeAllObjects from "./SeeAllObjects";
import ViewInfo from "../InfoPanel/ViewInfo";
import PrepareTransmission from "./PrepareTransmission";
import { BsFillGeoAltFill, BsPencilSquare } from "react-icons/bs";
import Share from "./Share";
import AddToTransmission from "../InfoPanel/AddToTransmission";
import Manual from "./Manual";
const Menu = () => {
  const [
    { view, showOrbitSimulator, neoSelected, showToObserve, start },
    updateStore,
  ] = useContext(GlobalStore);

  const handleOrbitMechanicsClick = () => {
    updateStore({ showOrbitSimulator: true });
  };

  const handleToObserve = () => {
    updateStore({ showToObserve: true });
  };

  if (!start) {
    return null;
  }

  return (
    <div className="w-screen h-screen text-white overflow-auto max-sm:text-xs">
      <div className="p-2 md:p-5 flex flex-wrap justify-between w-full h-full">
        <div className="lg:min-w-72">
          <PanelThing className="px-4 py-3 space-y-1">
            <div className="max-sm:hidden">
              <MenuIntro />
            </div>
            <ControlDate />
            {view !== "Planets" && <SeeAllObjects view={view} />}
            {view !== "Planets" && <ObjectList />}
          </PanelThing>
        </div>

        <div className="flex md:ml-3 space-x-3 self-start flex-grow max-lg:hidden ">
          <div className="max-sm:hidden ">
            <InterfaceOptions />
          </div>

          <div className="max-sm:hidden">
            <PanelThing className="px-2" onClick={handleOrbitMechanicsClick}>
              <TitleOptions className="cursor-pointer">
                <span className="inline-flex items-center">
                  Orbit Creator <BsPencilSquare className="ml-2" />
                </span>
              </TitleOptions>
            </PanelThing>
          </div>

          <div className="max-sm:hidden">
            <PanelThing className="px-2" onClick={handleToObserve}>
              <TitleOptions className="cursor-pointer">
                <span className="inline-flex items-center">
                  ObservaNEAS <BsFillGeoAltFill className="ml-2" />
                </span>
              </TitleOptions>
            </PanelThing>
          </div>

          <div className="max-sm:hidden  ">
            {neoSelected && <CloseApproaches />}
          </div>
        </div>

        <div className="max-w-md">
          <ConfigOptions />
          <div className="max-sm:hidden mt-3 space-y-3">
            {view !== "Planets" && neoSelected && <AddToTransmission />}
            {view !== "Planets" && neoSelected && <ObjectInfo />}
            {view === "Planets" && <PlanetInfo />}
            {!neoSelected && <ViewInfo view={view} />}
          </div>
        </div>


        <div className="absolute bottom-5 right-5 space-x-3 flex">
          <Manual />
          <Share />
        </div>

        <div className="absolute bottom-5 align-bottom">
          <PrepareTransmission />
        </div>
      </div>

      {showOrbitSimulator && <OrbitSimulator />}
      {showToObserve && <ObservableNeos />}
    </div>
  );
};

export default Menu;
