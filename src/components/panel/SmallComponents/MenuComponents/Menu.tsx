import { useContext } from 'react';
import GlobalStore from '@/lib/context/GlobalStore';
import PanelThing from '../PanelThing';

const Menu = () => {
  const [
    { view, start },
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

          </PanelThing>
        </div>
    </div>
    </div>
  );
};

export default Menu;
