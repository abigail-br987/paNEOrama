import { StrictMode, useReducer } from "react";
import GlobalStore, {
    defaultStore,
    storeReducer,
} from "./lib/context/GlobalStore";
import SolarSystem from "./components/scene/SolarSystem";
import Menu from "./components/panel/MenuComponents/Menu";

const App = () => {
    const globalStore = useReducer(storeReducer, defaultStore());

    return (
        <StrictMode>
            <GlobalStore.Provider value={globalStore}>
                <SolarSystem />
                <Menu />
            </GlobalStore.Provider>
        </StrictMode>
    );
};

export default App;
