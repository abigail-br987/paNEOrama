import { useReducer } from "react";
import GlobalStore, {
    defaultStore,
    storeReducer,
} from "./lib/context/GlobalStore";
import SolarSystem from "./components/scene/SolarSystem";

const App = () => {
    const globalStore = useReducer(storeReducer, defaultStore());

    return (
        <GlobalStore.Provider value={globalStore}>
            <SolarSystem />
        </GlobalStore.Provider>
    );
};

export default App;
