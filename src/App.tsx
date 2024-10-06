import { StrictMode, useReducer } from "react";
import GlobalStore, {
  defaultStore,
  storeReducer,
} from "./lib/context/GlobalStore";
import SolarSystem from "./components/scene/SolarSystem";
import { Suspense } from "react";
import Menu from "./components/panel/MenuComponents/Menu";
const App = () => {
  const globalStore = useReducer(storeReducer, defaultStore());

  return (
    <StrictMode>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full text-white text-2xl">
            Loading...
          </div>
        }
      >
        <GlobalStore.Provider value={globalStore}>
          <SolarSystem />
          <Menu />
        </GlobalStore.Provider>
      </Suspense>
    </StrictMode>
  );
};

export default App;
