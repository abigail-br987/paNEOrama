import { useContext } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import PanelThing from "../SmallComponents/PanelThing";
import MenuIntro from "./MenuIntro";
import ConfigOptions from "./ConfigOptions";
import ControlDate from "./ControlDate";
const Menu = () => {
  const [
    { view, neoSelected, start },
    updateStore,
  ] = useContext(GlobalStore);

  if (!start) {
    return null;
  }

  return (
    <div className="w-screen h-screen text-white overflow-auto max-sm:text-xs">
    <div className="p-2 md:p-5 flex flex-wrap space-x-3 justify-between w-full">
      <div className="lg:min-w-72">
        <PanelThing className="px-4 py-3 space-y-1">
          <div className="max-sm:hidden">
            {' '}
            <MenuIntro />
          </div>
          <ControlDate/>
        </PanelThing>
      </div>


      <div className="max-w-md">
        <ConfigOptions />
        <div className="max-sm:hidden  ">
        </div>
      </div>

    </div>
    </div>
  );
};

export default Menu;
