import { useReducer } from "react";
import GlobalStore, {
    defaultStore,
    storeReducer,
} from "./lib/context/GlobalStore";
import SolarSystem from "./components/scene/SolarSystem";
import Manual from "./components/scene/Manual";
import Share from "./components/scene/Share";
import Menu from "./components/panel/MenuComponents/Menu";

const App = () => {
    const globalStore = useReducer(storeReducer, defaultStore());

    return (
        <GlobalStore.Provider value={globalStore}>
            <Share />
            <SolarSystem />
            <Menu />
            <Manual />
        </GlobalStore.Provider>
    );
};

export default App;
