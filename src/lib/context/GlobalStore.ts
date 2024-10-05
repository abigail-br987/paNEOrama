import { createContext, Dispatch, Reducer } from "react";
import { mergeInto } from "../utils/objects";
import { DeepPartial } from "../types";

export interface Store {
    controls: {
        timeSpeed: number;
        isPaused: boolean;
    };
    view: "Planets" | "NECs" | "NEAs" | "PHAs";
    currentDate: Date;
    start: boolean;
    showOrbits: boolean;
    neoSelected: string | null;
    showLabels: boolean;
    radialLines: boolean;
    selectedPlanet: string | null;
}

export const storeReducer: Reducer<Store, DeepPartial<Store>> = (
    state,
    changes,
) => {
    const newState = structuredClone(state);
    mergeInto(newState, changes);
    return newState;
};

export const defaultStore = (): Store => ({
    controls: {
        timeSpeed: 1,
        isPaused: true,
    },
    view: "Planets",
    showLabels: false,
    selectedPlanet: null,
    neoSelected: null,
    showOrbits: false,
    radialLines: false,
    currentDate: new Date(),
    start: false,
});

const GlobalStore = createContext<[Store, Dispatch<DeepPartial<Store>>]>([
    defaultStore(),
    () => { },
]);

export default GlobalStore;
