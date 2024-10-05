import { useReducer } from "react";
import GlobalStore, {
    defaultStore,
    storeReducer,
} from "./lib/context/GlobalStore";
import SolarSystem from "./components/scene/SolarSystem";
import Manual from "./components/scene/Manual";

const App = () => {
    const globalStore = useReducer(storeReducer, defaultStore());

    return (
        <GlobalStore.Provider value={globalStore}>
            <SolarSystem />
            <Manual />
        </GlobalStore.Provider>
    );
};

export default App;
