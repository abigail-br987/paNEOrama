import { useReducer } from "react";
import "./App.css";
import GlobalStore, {
    defaultStore,
    storeReducer,
} from "./lib/context/GlobalStore";

function App() {
    const globalStore = useReducer(storeReducer, defaultStore());

    return (
        <GlobalStore.Provider value={globalStore}>
            <div className="bg-red-500">
                <a href="https://vitejs.dev" target="_blank"></a>
                <a href="https://react.dev" target="_blank"></a>
            </div>
            <h1 className="text-lg">Vite + React</h1>
            <p className="read-the-docs bg-black p-6">
                Click on the Vite and React logos to learn more
            </p>
        </GlobalStore.Provider>
    );
}

export default App;
