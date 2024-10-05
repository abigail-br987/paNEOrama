import { useReducer } from "react";
import GlobalStore, {
    defaultStore,
    storeReducer,
} from "./lib/context/GlobalStore";
import SolarSystem from "./components/scene/SolarSystem";
import Manual from "./components/scene/Manual";
import Share from "./components/scene/Share";

const App = () => {
    const globalStore = useReducer(storeReducer, defaultStore());

    return (
        <GlobalStore.Provider value={globalStore}>
            <Share />
            <SolarSystem />
            <Manual />
        </GlobalStore.Provider>
    );
};

export default App;
